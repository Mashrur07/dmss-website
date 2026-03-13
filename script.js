// ===== MOBILE MENU TOGGLE =====
const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('nav');

if (menuToggle) {
    menuToggle.addEventListener('click', () => {
        menuToggle.classList.toggle('active');
        nav.classList.toggle('active');
        document.body.style.overflow = nav.classList.contains('active') ? 'hidden' : '';
    });
}

// Close menu when clicking outside
document.addEventListener('click', (e) => {
    if (nav && !nav.contains(e.target) && !menuToggle?.contains(e.target)) {
        menuToggle?.classList.remove('active');
        nav.classList.remove('active');
        document.body.style.overflow = '';
    }
});

// ===== SMOOTH SCROLL =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const target = document.querySelector(targetId);
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
            // Close mobile menu after clicking
            menuToggle?.classList.remove('active');
            nav?.classList.remove('active');
            document.body.style.overflow = '';
        }
    });
});

// ===== HEADER SCROLL EFFECT =====
const header = document.querySelector('header');
let lastScroll = 0;

if (header) {
    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;
        
        if (currentScroll <= 0) {
            header.style.transform = 'translateX(-50%)';
            return;
        }
        
        if (currentScroll > lastScroll && currentScroll > 100) {
            // Scrolling down
            header.style.transform = 'translateX(-50%) translateY(-120%)';
        } else {
            // Scrolling up
            header.style.transform = 'translateX(-50%) translateY(0)';
        }
        
        lastScroll = currentScroll;
    });
}

// ===== ENHANCED HERO PARTICLES =====
function createHeroParticles() {
    const container = document.getElementById('particles');
    if (!container) return;
    
    container.innerHTML = '';
    const particleCount = 50;
    
    for (let i = 0; i < particleCount; i++) {
        const type = Math.random();
        let particle;
        
        if (type < 0.5) {
            particle = document.createElement('div');
            particle.className = 'hero-particle';
            particle.style.cssText = `
                left: ${Math.random() * 100}%;
                top: ${Math.random() * 100}%;
                width: ${Math.random() * 8 + 2}px;
                height: ${Math.random() * 8 + 2}px;
                background: rgba(15, 118, 110, ${Math.random() * 0.2 + 0.1});
                animation: heroFloat ${Math.random() * 8 + 6}s infinite ease-in-out;
                animation-delay: ${Math.random() * 5}s;
            `;
        } else {
            particle = document.createElement('div');
            particle.className = 'hero-particle-slow';
            particle.style.cssText = `
                left: ${Math.random() * 100}%;
                top: ${Math.random() * 100}%;
                width: ${Math.random() * 12 + 4}px;
                height: ${Math.random() * 12 + 4}px;
                background: rgba(15, 118, 110, ${Math.random() * 0.15 + 0.1});
                animation: heroFloatSlow ${Math.random() * 12 + 10}s infinite ease-in-out;
                animation-delay: ${Math.random() * 8}s;
            `;
        }
        
        container.appendChild(particle);
    }
    
    // Add sparkle particles
    for (let i = 0; i < 20; i++) {
        const sparkle = document.createElement('div');
        sparkle.style.cssText = `
            position: absolute;
            left: ${Math.random() * 100}%;
            top: ${Math.random() * 100}%;
            width: ${Math.random() * 4 + 1}px;
            height: ${Math.random() * 4 + 1}px;
            background: rgba(255, 255, 255, ${Math.random() * 0.4 + 0.3});
            border-radius: 50%;
            animation: twinkle ${Math.random() * 3 + 2}s infinite ease-in-out;
            pointer-events: none;
            z-index: 1;
        `;
        container.appendChild(sparkle);
    }
}

// ===== ENHANCED CTA PARTICLES =====
function createCtaParticles() {
    const container = document.getElementById('cta-particles');
    if (!container) return;
    
    container.innerHTML = '';
    const particleCount = 40;
    
    for (let i = 0; i < particleCount; i++) {
        const type = Math.random();
        let particle;
        
        if (type < 0.4) {
            particle = document.createElement('div');
            particle.className = 'cta-particle';
            particle.style.cssText = `
                left: ${Math.random() * 100}%;
                top: ${Math.random() * 100}%;
                width: ${Math.random() * 8 + 2}px;
                height: ${Math.random() * 8 + 2}px;
                background: rgba(255, 255, 255, ${Math.random() * 0.4 + 0.3});
                animation: floatLively ${Math.random() * 6 + 5}s infinite ease-in-out;
                animation-delay: ${Math.random() * 3}s;
            `;
        } else if (type < 0.7) {
            particle = document.createElement('div');
            particle.className = 'cta-particle-fast';
            particle.style.cssText = `
                left: ${Math.random() * 100}%;
                top: ${Math.random() * 100}%;
                width: ${Math.random() * 6 + 1}px;
                height: ${Math.random() * 6 + 1}px;
                background: rgba(255, 255, 255, ${Math.random() * 0.6 + 0.4});
                animation: floatFast ${Math.random() * 3 + 3}s infinite ease-in-out;
                animation-delay: ${Math.random() * 2}s;
            `;
        } else {
            particle = document.createElement('div');
            particle.className = 'cta-particle-twinkle';
            particle.style.cssText = `
                left: ${Math.random() * 100}%;
                top: ${Math.random() * 100}%;
                width: ${Math.random() * 5 + 1}px;
                height: ${Math.random() * 5 + 1}px;
                background: white;
                animation: twinkle ${Math.random() * 2 + 2}s infinite ease-in-out;
                animation-delay: ${Math.random() * 2}s;
            `;
        }
        
        container.appendChild(particle);
    }
}

// ===== ADD FLOATING SHAPES TO SECTIONS =====
function addFloatingShapes() {
    const sections = document.querySelectorAll('.section');
    
    sections.forEach((section) => {
        const shapeCount = Math.floor(Math.random() * 2) + 2;
        
        for (let i = 0; i < shapeCount; i++) {
            const shape = document.createElement('div');
            shape.className = 'section-floating-shape';
            shape.style.cssText = `
                position: absolute;
                width: ${Math.random() * 200 + 100}px;
                height: ${Math.random() * 200 + 100}px;
                left: ${Math.random() * 80 + 10}%;
                top: ${Math.random() * 80 + 10}%;
                background: radial-gradient(circle, rgba(15, 118, 110, 0.02) 0%, transparent 70%);
                border-radius: 50%;
                pointer-events: none;
                z-index: 0;
                animation: shapeFloat ${Math.random() * 15 + 15}s infinite ease-in-out;
                animation-delay: ${Math.random() * 5}s;
            `;
            section.appendChild(shape);
        }
    });
}

// ===== ADD HOVER EFFECTS TO BACKGROUND =====
function addBackgroundEffects() {
    const programCards = document.querySelectorAll('#programs .card');
    programCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.background = 'linear-gradient(135deg, white, rgba(15, 118, 110, 0.02))';
        });
        card.addEventListener('mouseleave', function() {
            this.style.background = 'rgba(255, 255, 255, 0.9)';
        });
    });
    
    const impactItems = document.querySelectorAll('.impact-item');
    impactItems.forEach(item => {
        item.addEventListener('mousemove', function(e) {
            const rect = this.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            const moveX = (x - centerX) / 20;
            const moveY = (y - centerY) / 20;
            
            this.style.transform = `translateY(-8px) translateX(${moveX}px) translateY(${moveY}px)`;
        });
        
        item.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(-8px)';
        });
    });
}

// ===== SCROLL REVEAL ANIMATIONS =====
function initScrollReveal() {
    const revealElements = document.querySelectorAll('.card, .membership-card, .impact-item, .special-card, .donation-card');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                const delay = entry.target.dataset.delay || 0;
                entry.target.style.transitionDelay = `${delay}s`;
            }
        });
    }, {
        threshold: 0.2,
        rootMargin: '0px 0px -50px 0px'
    });
    
    revealElements.forEach(el => {
        observer.observe(el);
    });
}

// ===== DONATION FUNCTIONALITY =====
function initDonation() {
    const amountBtns = document.querySelectorAll('.amount-btn');
    const paymentBtns = document.querySelectorAll('.payment-btn');
    const customAmount = document.getElementById('customAmount');
    const summaryAmount = document.querySelector('.summary-amount');
    const summaryPayment = document.querySelector('.summary-payment');
    const impactDescription = document.querySelector('.impact-description');
    const donateBtn = document.querySelector('.donate-submit');
    
    const impactMap = {
        500: 'Iftar for 10 families',
        1000: 'Educates one child for a month',
        2000: 'Medical checkup for elderly',
        5000: 'Zakat for a family'
    };
    
    let selectedAmount = 500;
    let selectedPayment = 'bkash';
    
    function updateImpact(amount) {
        if (impactDescription) {
            impactDescription.textContent = impactMap[amount] || 'Support those in need';
        }
    }
    
    if (amountBtns.length) {
        amountBtns.forEach(btn => {
            btn.addEventListener('click', function() {
                amountBtns.forEach(b => b.classList.remove('active'));
                this.classList.add('active');
                
                const amount = parseInt(this.dataset.amount);
                selectedAmount = amount;
                if (customAmount) customAmount.value = '';
                if (summaryAmount) summaryAmount.textContent = `৳${amount.toLocaleString()}`;
                updateImpact(amount);
                
                this.style.transform = 'scale(0.95)';
                setTimeout(() => {
                    this.style.transform = '';
                }, 200);
            });
        });
    }
    
    if (paymentBtns.length) {
        paymentBtns.forEach(btn => {
            btn.addEventListener('click', function() {
                paymentBtns.forEach(b => b.classList.remove('active'));
                this.classList.add('active');
                
                selectedPayment = this.dataset.payment;
                const paymentName = this.querySelector('.payment-name')?.textContent || '';
                if (summaryPayment) summaryPayment.textContent = paymentName;
                
                this.style.transform = 'scale(0.95)';
                setTimeout(() => {
                    this.style.transform = '';
                }, 200);
            });
        });
    }
    
    if (customAmount) {
        customAmount.addEventListener('input', function() {
            amountBtns.forEach(btn => btn.classList.remove('active'));
            
            const amount = parseInt(this.value);
            if (amount && amount > 0) {
                selectedAmount = amount;
                if (summaryAmount) summaryAmount.textContent = `৳${amount.toLocaleString()}`;
                
                const amounts = [500, 1000, 2000, 5000];
                let closest = amounts.reduce((prev, curr) => {
                    return (Math.abs(curr - amount) < Math.abs(prev - amount) ? curr : prev);
                });
                
                if (amount < 500) {
                    if (impactDescription) impactDescription.textContent = 'Basic support for a family';
                } else {
                    if (impactDescription) impactDescription.textContent = impactMap[closest] || 'Support those in need';
                }
            }
        });
    }
    
    if (donateBtn) {
        donateBtn.addEventListener('click', function() {
            if (!selectedPayment) {
                alert('Please select a payment method');
                return;
            }
            
            if (!selectedAmount || selectedAmount < 10) {
                alert('Please enter a valid donation amount');
                return;
            }
            
            this.classList.add('loading');
            const originalText = this.innerHTML;
            this.innerHTML = '<span class="btn-text">Processing...</span><i class="fas fa-spinner fa-spin"></i>';
            
            setTimeout(() => {
                this.classList.remove('loading');
                this.innerHTML = '<span class="btn-text">Donation Successful!</span><i class="fas fa-check"></i>';
                
                setTimeout(() => {
                    alert(`Thank you for your donation of ৳${selectedAmount.toLocaleString()}! Your support will help those in need.`);
                    this.innerHTML = originalText;
                    
                    if (customAmount) customAmount.value = '';
                    amountBtns.forEach(btn => {
                        if (btn.dataset.amount === '500') {
                            btn.classList.add('active');
                        } else {
                            btn.classList.remove('active');
                        }
                    });
                    if (summaryAmount) summaryAmount.textContent = '৳500';
                    updateImpact(500);
                }, 1000);
            }, 2000);
        });
    }
}

// ===== MODAL FUNCTIONS =====
window.openForm = function(type) {
    const modal = document.getElementById('formModal');
    const title = document.getElementById('formTitle');
    
    if (title) title.textContent = `${type} Membership Application`;
    if (modal) {
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
    }
}

window.closeModal = function() {
    const modal = document.getElementById('formModal');
    if (modal) {
        modal.classList.remove('active');
        document.body.style.overflow = '';
    }
    
    const fullName = document.getElementById('fullName');
    const email = document.getElementById('email');
    const phone = document.getElementById('phone');
    
    if (fullName) fullName.value = '';
    if (email) email.value = '';
    if (phone) phone.value = '';
}

window.openDonationModal = function(cause) {
    const modal = document.getElementById('donationModal');
    const title = document.getElementById('donationModalTitle');
    const causeSpan = document.getElementById('donationCause');
    
    if (title) title.textContent = `Donate for ${cause}`;
    if (causeSpan) causeSpan.textContent = cause;
    if (modal) {
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
    }
}

window.closeDonationModal = function() {
    const modal = document.getElementById('donationModal');
    if (modal) {
        modal.classList.remove('active');
        document.body.style.overflow = '';
    }
    
    const amount = document.getElementById('donationModalAmount');
    if (amount) amount.value = '';
}

window.processDonation = function() {
    const amountInput = document.getElementById('donationModalAmount');
    const cause = document.getElementById('donationCause')?.textContent || 'General';
    const amount = amountInput ? amountInput.value : '';
    
    if (!amount || amount < 10) {
        alert('Please enter a valid amount');
        return;
    }
    
    alert(`Thank you for donating ৳${amount} for ${cause}!`);
    closeDonationModal();
}

window.submitForm = function() {
    const name = document.getElementById('fullName')?.value;
    const email = document.getElementById('email')?.value;
    const phone = document.getElementById('phone')?.value;
    
    if (!name || !email || !phone) {
        alert('Please fill in all fields');
        return;
    }
    
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        alert('Please enter a valid email address');
        return;
    }
    
    const phoneRegex = /^01[3-9]\d{8}$/;
    if (!phoneRegex.test(phone)) {
        alert('Please enter a valid Bangladeshi phone number');
        return;
    }
    
    alert(`Thank you, ${name}! Your application has been submitted.`);
    closeModal();
}

// Close modals when clicking outside
document.querySelectorAll('.modal').forEach(modal => {
    modal.addEventListener('click', function(e) {
        if (e.target === this) {
            if (this.id === 'formModal') {
                closeModal();
            } else if (this.id === 'donationModal') {
                closeDonationModal();
            }
        }
    });
});

// Close modals on ESC
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        closeModal();
        closeDonationModal();
    }
});

// ===== LOGO CLICK TO TOP =====
const logoTop = document.getElementById('logoTop');
if (logoTop) {
    logoTop.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// ===== ACTIVE NAVIGATION HIGHLIGHT =====
function updateActiveNav() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('nav a');
    
    window.addEventListener('scroll', () => {
        let current = '';
        const scrollY = window.pageYOffset;
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop - 150;
            const sectionHeight = section.clientHeight;
            
            if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
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
}

// ===== INITIALIZE EVERYTHING =====
document.addEventListener('DOMContentLoaded', function() {
    createHeroParticles();
    createCtaParticles();
    addFloatingShapes();
    addBackgroundEffects();
    initScrollReveal();
    initDonation();
    updateActiveNav();
    
    document.querySelectorAll('.card-icon, .membership-icon, .special-icon').forEach(icon => {
        icon.style.animation = 'float 4s ease-in-out infinite';
    });
});
