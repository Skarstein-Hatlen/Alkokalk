const express = require('express');
const crypto = require('crypto');
const AWS = require("aws-sdk");

const router = express.Router();

const s3 = new AWS.S3();

// Set the S3 bucket name and object key prefix
const bucketName = 'cyclic-bored-spacesuit-bee-eu-central-1';
const prefix = 'users/';

// Signup endpoint
router.post('/signup', async (req, res) => {
  try {
    const { username, password } = req.body;

    // Check if the username already exists in S3
    const existingUser = await s3.getObject({
      Bucket: bucketName,
      Key: `${prefix}${username}.json`,
    }).promise();

    if (existingUser) {
      return res.status(400).json({ message: 'Username already exists.' });
    }

    // Hash the password using a salt
    const salt = crypto.randomBytes(16).toString('hex');
    const hashedPassword = crypto
      .pbkdf2Sync(password, salt, 1000, 64, 'sha512')
      .toString('hex');

    // Create a new user object
    const newUser = {
      username,
      password: hashedPassword,
      salt,
    };

    // Store the user object in S3
    await s3.putObject({
      Bucket: bucketName,
      Key: `${prefix}${username}.json`,
      Body: JSON.stringify(newUser),
    }).promise();

    return res.json({ message: 'User registered successfully.', user: newUser });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'An error occurred during registration.', error });
  }
});

// Login endpoint
router.post('/login', async (req, res) => {
  try {
    const { username, password } = req.body;

    // Fetch the user from the S3 database
    const response = await s3.getObject({
      Bucket: bucketName,
      Key: `${prefix}${username}.json`,
    }).promise();

    const user = JSON.parse(response.Body.toString());

    // Hash the provided password with the user's salt and compare with stored password
    const hashedPassword = crypto
      .pbkdf2Sync(password, user.salt, 1000, 64, 'sha512')
      .toString('hex');

    if (hashedPassword !== user.password) {
      return res.status(401).json({ message: 'Invalid username or password.' });
    }

    return res.json({ message: 'User logged in successfully.' });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'An error occurred during login.', error });
  }
});

module.exports = router;
