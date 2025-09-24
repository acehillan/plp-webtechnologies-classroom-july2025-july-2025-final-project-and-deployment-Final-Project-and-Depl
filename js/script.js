document.addEventListener('DOMContentLoaded', () => {
    // Active navigation link functionality
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('.nav-links a');

    navLinks.forEach(link => {
        const linkPath = link.getAttribute('href');
        if (linkPath === currentPage) {
            link.classList.add('active');
        }
    });

    // We can add other global JavaScript functions here later
});