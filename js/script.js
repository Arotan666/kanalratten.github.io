/* JavaScript für Die Kanalratten Website */

// ============================================
// MOBILE MENU TOGGLE
// ============================================

const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

if (hamburger) {
    hamburger.addEventListener('click', () => {
        navMenu.classList.toggle('active');
    });

    // Close menu when a link is clicked
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
        });
    });
}

// ============================================
// SMOOTH SCROLL OFFSET FOR STICKY NAV
// ============================================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const offset = 70;
            const targetPosition = target.offsetTop - offset;
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// ============================================
// FORM VALIDATION & SUBMISSION
// ============================================

const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const subject = document.getElementById('subject').value;
        const message = document.getElementById('message').value;
        
        // Validate fields
        if (!name || !email || !subject || !message) {
            alert('Bitte fülle alle Felder aus!');
            return;
        }
        
        // Validate email
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            alert('Bitte gib eine gültige E-Mail-Adresse ein!');
            return;
        }
        
        // Construct mailto link
        const mailtoLink = `mailto:info@diekanalratten.de?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(`Name: ${name}\nE-Mail: ${email}\n\n${message}`)}`;
        
        // Open default mail client
        window.location.href = mailtoLink;
        
        // Show success message after a delay
        setTimeout(() => {
            contactForm.style.display = 'none';
            const successMessage = document.getElementById('successMessage');
            if (successMessage) {
                successMessage.style.display = 'block';
            }
        }, 100);
    });
}

// ============================================
// SCROLL ANIMATIONS
// ============================================

const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe all cards
document.querySelectorAll('.album-card, .song-item, .member-card, .gallery-item, .merch-card').forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';
    card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(card);
});

// ============================================
// GALLERY LIGHTBOX EFFECT
// ============================================

const galleryItems = document.querySelectorAll('.gallery-item');
galleryItems.forEach(item => {
    item.addEventListener('click', function() {
        const img = this.querySelector('img');
        if (img) {
            openLightbox(img.src, img.alt);
        }
    });
});

function openLightbox(src, alt) {
    const lightbox = document.createElement('div');
    lightbox.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.9);
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 2000;
        cursor: pointer;
    `;
    
    const content = document.createElement('div');
    content.style.cssText = `
        position: relative;
        max-width: 90%;
        max-height: 90%;
    `;
    
    const img = document.createElement('img');
    img.src = src;
    img.alt = alt;
    img.style.cssText = `
        max-width: 100%;
        max-height: 100%;
        border-radius: 8px;
    `;
    
    const closeBtn = document.createElement('span');
    closeBtn.innerHTML = '&times;';
    closeBtn.style.cssText = `
        position: absolute;
        top: -40px;
        right: 0;
        font-size: 40px;
        color: white;
        cursor: pointer;
        font-weight: bold;
    `;
    
    content.appendChild(img);
    content.appendChild(closeBtn);
    lightbox.appendChild(content);
    document.body.appendChild(lightbox);
    
    // Close on click
    lightbox.addEventListener('click', () => {
        lightbox.remove();
    });
    
    closeBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        lightbox.remove();
    });
}

// ============================================
// NEWSLETTER SIGNUP
// ============================================

const newsletterForm = document.querySelector('.newsletter-signup form');
if (newsletterForm) {
    newsletterForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const email = this.querySelector('input[type="email"]').value;
        
        if (email) {
            // Create mailto link for newsletter signup
            const mailtoLink = `mailto:info@diekanalratten.de?subject=Newsletter%20Anmeldung&body=Ich%20m%C3%B6chte%20den%20Newsletter%20abonnieren.%0A%0AE-Mail:%20${encodeURIComponent(email)}`;
            
            window.location.href = mailtoLink;
            
            // Reset form
            this.reset();
            alert('Danke für deine Anmeldung! 🐀');
        }
    });
}

// ============================================
// EASTER EGG - CONSOLE MESSAGE
// ============================================

console.log('%c🐀 DIE KANALRATTEN 🐀', 'font-size: 20px; font-weight: bold; color: #8B0000;');
console.log('%cBrücke. Bier. Beton. Beats.', 'font-size: 14px; color: #00AA44;');
console.log('%cImmer einer mehr, als du siehst! 🎸🍺', 'font-size: 12px; font-style: italic;');
console.log('Schön dass du den Code checkst! Hast du Interesse am Code? Schreib uns: info@diekanalratten.de');
