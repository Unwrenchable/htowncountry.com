// Smooth Scroll Navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
            
            // Update active nav link
            document.querySelectorAll('.nav-links a').forEach(link => {
                link.classList.remove('active');
            });
            this.classList.add('active');
        }
    });
});

// Highlight active section on scroll
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-links a');

window.addEventListener('scroll', () => {
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (window.pageYOffset >= sectionTop - 100) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});

// Add animation on scroll for elements
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe menu items and feature cards
document.addEventListener('DOMContentLoaded', () => {
    const animateElements = document.querySelectorAll('.menu-item, .feature-card, .contact-card');
    animateElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
});

// Mobile menu toggle (for future enhancement)
const createMobileMenu = () => {
    const nav = document.querySelector('.nav-links');
    const navLinks = nav.querySelectorAll('a');
    
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (window.innerWidth <= 768) {
                nav.style.display = 'none';
                setTimeout(() => {
                    nav.style.display = 'flex';
                }, 300);
            }
        });
    });
};

// Initialize mobile menu
createMobileMenu();

// Add current time indicator for hours
const updateOpenStatus = () => {
    const now = new Date();
    const day = now.getDay(); // 0 = Sunday, 6 = Saturday
    const hour = now.getHours();
    let open = false;
    let openText = '';
    if (day === 6 || day === 5) { // Saturday or Friday
        open = hour >= 7 && hour < 19;
        openText = '7:00 AM - 7:00 PM';
    } else if (day === 0) { // Sunday
        open = hour >= 7 && hour < 15;
        openText = '7:00 AM - 3:00 PM';
    } else { // Monday - Thursday
        open = hour >= 7 && hour < 15;
        openText = '7:00 AM - 3:00 PM';
    }
    const hoursBadge = document.querySelector('.hours-badge');
    if (hoursBadge && open) {
        hoursBadge.style.backgroundColor = 'rgba(107, 142, 35, 0.3)'; // Green tint
        hoursBadge.innerHTML = `<span class="badge-icon">✅</span><span>Open Now | ${openText}</span>`;
    } else if (hoursBadge) {
        hoursBadge.style.backgroundColor = 'rgba(220, 53, 69, 0.2)'; // Red tint
        hoursBadge.innerHTML = `<span class="badge-icon">⏰</span><span>Closed | ${openText}</span>`;
    }
};

// Update open status on load
updateOpenStatus();

// Add hover effect to menu items
document.querySelectorAll('.menu-item').forEach(item => {
    item.addEventListener('mouseenter', function() {
        this.style.transform = 'translateX(10px)';
        this.style.transition = 'transform 0.3s ease';
    });
    
    item.addEventListener('mouseleave', function() {
        this.style.transform = 'translateX(0)';
    });
});

// Console welcome message
console.log('%c🏡 Welcome to Hometown Country Kitchen!', 'font-size: 20px; color: #8B4513; font-weight: bold;');
console.log('%cWhere every meal feels like home 🍳', 'font-size: 14px; color: #D2691E;');
