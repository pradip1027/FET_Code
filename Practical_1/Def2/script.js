// Navbar scroll effect
window.addEventListener('scroll', () => {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Smooth scroll for internal links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            window.scrollTo({
                top: target.offsetTop - 80, // Adjust for navbar height
                behavior: 'smooth'
            });
        }
    });
});

// Simple Reveal on Scroll
const revealOnScroll = () => {
    const reveals = document.querySelectorAll('.section');
    reveals.forEach(reveal => {
        const windowHeight = window.innerHeight;
        const revealTop = reveal.getBoundingClientRect().top;
        const revealPoint = 150;

        if (revealTop < windowHeight - revealPoint) {
            reveal.style.opacity = '1';
            reveal.style.transform = 'translateY(0)';
            reveal.style.transition = 'all 1s ease';
        }
    });
};

// Initial state for reveal
document.querySelectorAll('.section').forEach(section => {
    section.style.opacity = '0.5'; // Keep it somewhat visible but muted
    section.style.transform = 'translateY(20px)';
});

window.addEventListener('scroll', revealOnScroll);

// Form submission handler
const form = document.getElementById('tour-form');
if (form) {
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Thank you for your inquiry! Our Gujarat Tourism experts will contact you shortly.');
        form.reset();
    });
}
