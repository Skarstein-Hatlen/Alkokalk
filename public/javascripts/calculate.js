let totalCalories = 0;
let drinksArray = [];

window.addEventListener('load', function() {
    drinksArray = JSON.parse(document.getElementById('drinksData').textContent);
    
    document.getElementById('calculateButton').addEventListener('click', function() {
        const drinkId = document.getElementById('drink').value;
        const quantity = document.getElementById('quantity').value;

        const drink = drinksArray[drinkId];
        if (!drink || !quantity) return;

        const calories = drink.calories * quantity;
        totalCalories += calories;

        const resultDiv = document.getElementById('result');
        const totalDiv = document.getElementById('total');

        const resultText = document.createElement('p');
        resultText.innerHTML = 
        `${drink.name}, <br>
        Mengde: ${quantity}ml, <br>
        Kalorier: ${calories.toFixed(2)}`;
        resultDiv.appendChild(resultText);

        totalDiv.textContent = `Total kcal: ${totalCalories.toFixed(2)}`;
    });
});
