window.addEventListener('load', function() {
    const shortcutButton = document.getElementById('shortcutButton');
    const shortcutWindow = document.getElementById('shortcutWindow');
    const closeButton = document.getElementById('closeButton');

    shortcutButton.addEventListener('click', function() {
        shortcutWindow.style.display = 'block';
    });

    closeButton.addEventListener('click', function() {
        shortcutWindow.style.display = 'none';
    });
});
