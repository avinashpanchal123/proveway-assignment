document.querySelectorAll('.offer-box').forEach(box => {
    box.addEventListener('click', function() {
        document.querySelectorAll('.offer-box').forEach(b => b.classList.remove('active'));
        this.classList.add('active');
    });
});
