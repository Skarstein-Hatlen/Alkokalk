window.addEventListener('load', function() {
    document.getElementById('resetButton').addEventListener('click', function() {
        document.getElementById('result').innerHTML = '';
        document.getElementById('total').textContent = '';
        
        // Reset the totalCalories variable to 0
        totalCalories = 0;
    });
});
