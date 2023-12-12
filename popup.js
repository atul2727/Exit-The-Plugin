document.addEventListener('mouseleave', function () {
    showexitpopup();
});

function showexitpopup() {
    document.getElementById('exitpopup').style.display = 'block';
    document.getElementById('cover').style.display = 'block';
}

function closeexitpopup() {
    document.getElementById('exitpopup').style.display = 'none';
    document.getElementById('cover').style.display = 'none';
}
