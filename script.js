
window.addEventListener('scroll', function() {
    const header = document.getElementById('main-header'); // Ensure your header has this ID
    if (window.pageYOffset > 100) {  // Adjust this value based on when you want the transition to start
        header.classList.add('small-header');
    } else {
        header.classList.remove('small-header');
    }
});
