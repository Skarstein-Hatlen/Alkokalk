window.addEventListener('load', function() {
    document.getElementById('resetButton').addEventListener('click', function() {
        document.getElementById('result').innerHTML = '';
        document.getElementById('total').textContent = '';
    });
});
