const express = require('express');
const router = express.Router();

// Beverage data
const beverages = [
    {id: "SPRIT", enhet: "Brennevin 60%", kcalPerG: 7.00},
    {id: "VIN", enhet: "Tørr Rødvin 10,5%", kcalPerG: 7.11},
    {id: "SPRIT", enhet: "Brennevin, 40%", kcalPerG: 7.24},
    {id: "VIN", enhet: "Rødvin, 12%", kcalPerG: 7.25},
    {id: "VIN", enhet: "Hvitvin, tørr, 12%", kcalPerG: 7.26},
    {id: "VIN", enhet: "Hvitvin, halvtørr, 10%", kcalPerG: 7.27},
    {id: "SELTZER", enhet: "Lite Sider 4,7%", kcalPerG: 7.89},
    {id: "CIDER", enhet: "Lite Sider 4,7%", kcalPerG: 7.89},
    {id: "ØL", enhet: "Lite Pils/Øl 4,3%", kcalPerG: 7.89},
    {id: "VIN", enhet: "Hetvin, tørr, 15%", kcalPerG: 8.00},
    {id: "VIN", enhet: "Hvitvin, halvsøt/søt, inkl musserende", kcalPerG: 8.78},
    {id: "VIN", enhet: "Dessertvin, ekstra søt, musserende", kcalPerG: 8.84},
    {id: "VIN", enhet: "Hvitvin, rosé, musserende", kcalPerG: 9.12},
    {id: "VIN", enhet: "Sterkvin, søt, portvin, 20%", kcalPerG: 9.44},
    {id: "VIN", enhet: "Hetvin, søt, 17%", kcalPerG: 9.86},
    {id: "ØL", enhet: "Pils, 4,7%", kcalPerG: 10.79},
    {id: "SPRIT", enhet: "Likør, 35%", kcalPerG: 10.79},
    {id: "ØL", enhet: "Mørkt øl, Bayer og juleøl, 4,5-4,7%", kcalPerG: 11.35},
    {id: "VIN", enhet: "Sterkvin, søt, vermouth, 15%", kcalPerG: 11.82},
    {id: "ØL", enhet: "Sterkøl, bokkøl, 6,5%", kcalPerG: 12.12},
    {id: "ØL", enhet: "Lettøl, lett, 2,5%", kcalPerG: 12.50},
    {id: "ØL", enhet: "Gulløl, 5,7%", kcalPerG: 12.83},
    {id: "SPRIT", enhet: "Likør, søt, 21%", kcalPerG: 15.00},
    {id: "CIDER", enhet: "Sider, søt, 4,5%", kcalPerG: 16.39},
    {id: "VIN", enhet: "Vin, alkoholsvak", kcalPerG: 22.50},
    {id: "SPRIT", enhet: "Likør, 17%, fløtebasert", kcalPerG: 25.25},
    {id: "ØL", enhet: "Øl, alkoholfritt", kcalPerG: 60.00}
];

// Route to display beverage data
router.get('/stats', (req, res) => {
    beverages.sort((a, b) => a.kcalPerG - b.kcalPerG);
    res.render('stats', { drinks: beverages });
});

module.exports = router;
