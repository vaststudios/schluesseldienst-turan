// Initialize Lucide icons - wait for DOM and Lucide to be ready
(function() {
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', () => {
            if (typeof lucide !== 'undefined') {
                lucide.createIcons();
            }
        });
    } else {
        if (typeof lucide !== 'undefined') {
            lucide.createIcons();
        } else {
            // Wait for Lucide to load
            window.addEventListener('load', () => {
                if (typeof lucide !== 'undefined') {
                    lucide.createIcons();
                }
            });
        }
    }
})();

// Scroll Animation with Intersection Observer
(function() {
    const observerOptions = {
        root: null,
        rootMargin: '0px 0px -50px 0px', // Trigger when element is 50px from bottom of viewport
        threshold: 0.1 // Trigger when 10% of element is visible
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                
                // Trigger typewriter animation for philosophy heading
                if (entry.target.id === 'philosophy-heading' || entry.target.querySelector('#philosophy-heading')) {
                    const heading = entry.target.id === 'philosophy-heading' ? entry.target : entry.target.querySelector('#philosophy-heading');
                    if (heading && !heading.classList.contains('typewriter-started')) {
                        heading.classList.add('typewriter-started');
                        startTypewriterAnimation(heading);
                    }
                }
                
                // Unobserve after animation to improve performance
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Observe all elements with animate-on-scroll class
    const animatedElements = document.querySelectorAll('.animate-on-scroll');
    animatedElements.forEach(el => observer.observe(el));
    
    // Also observe the philosophy heading directly for typewriter animation
    const philosophyHeading = document.getElementById('philosophy-heading');
    if (philosophyHeading) {
        const typewriterObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting && !entry.target.classList.contains('typewriter-started')) {
                    entry.target.classList.add('typewriter-started');
                    startTypewriterAnimation(entry.target);
                    typewriterObserver.unobserve(entry.target);
                }
            });
        }, { threshold: 0.2 });
        typewriterObserver.observe(philosophyHeading);
    }
})();

// Typewriter Animation for Philosophy Heading
function startTypewriterAnimation(element) {
    const wordsContainer = element.querySelector('.typewriter-words');
    if (!wordsContainer) return;
    
    const fullText = wordsContainer.textContent.trim();
    const words = fullText.split(' ');
    
    // Pre-populate with invisible text to reserve space and prevent layout shift
    wordsContainer.innerHTML = `<span style="opacity: 0; visibility: hidden; position: absolute; white-space: pre-wrap;">${fullText}</span>`;
    
    // Get the height before clearing
    const reservedHeight = wordsContainer.offsetHeight;
    wordsContainer.style.minHeight = reservedHeight + 'px';
    
    // Clear and start animation
    wordsContainer.innerHTML = '';
    
    let currentWordIndex = 0;
    const delayBetweenWords = 40; // milliseconds (faster)
    const delayBetweenChars = 15; // milliseconds (faster)
    
    function typeNextWord() {
        if (currentWordIndex >= words.length) return;
        
        const word = words[currentWordIndex];
        const wordSpan = document.createElement('span');
        wordSpan.className = 'typewriter-word opacity-0 translate-y-2';
        
        // Add space after word (except last)
        const wordText = currentWordIndex < words.length - 1 ? word + ' ' : word;
        
        let charIndex = 0;
        function typeNextChar() {
            if (charIndex < wordText.length) {
                wordSpan.textContent += wordText[charIndex];
                charIndex++;
                setTimeout(typeNextChar, delayBetweenChars);
            } else {
                // Animate word appearance (faster transition)
                requestAnimationFrame(() => {
                    wordSpan.style.transition = 'opacity 0.2s cubic-bezier(0.4, 0, 0.2, 1), transform 0.2s cubic-bezier(0.4, 0, 0.2, 1)';
                    wordSpan.classList.remove('opacity-0', 'translate-y-2');
                    wordSpan.classList.add('opacity-100', 'translate-y-0');
                });
                
                // Check if this is the part that should be dimmed
                const umIndex = words.indexOf('um');
                if (umIndex !== -1 && currentWordIndex >= umIndex) {
                    wordSpan.classList.add('text-brand-primary/25');
                }
                
                currentWordIndex++;
                if (currentWordIndex < words.length) {
                    setTimeout(typeNextWord, delayBetweenWords);
                }
            }
        }
        
        wordsContainer.appendChild(wordSpan);
        typeNextChar();
    }
    
    typeNextWord();
}

// Initialize Swiper for Team Section (Mobile Only) - Lazy load when needed
(function() {
    const initTeamSwiper = () => {
        if (typeof Swiper === 'undefined') {
            // Swiper not loaded yet, wait for it
            setTimeout(initTeamSwiper, 100);
            return;
        }
        return new Swiper('.team-swiper', {
            slidesPerView: 1,
            spaceBetween: 20,
            centeredSlides: true,
            grabCursor: true,
            loop: false,
            autoplay: {
                delay: 3000,
                disableOnInteraction: false,
                pauseOnMouseEnter: true,
            },
            speed: 600,
            pagination: {
                el: '.team-pagination',
                clickable: true,
                dynamicBullets: false,
                bulletClass: 'team-pagination-bullet',
                bulletActiveClass: 'team-pagination-bullet-active',
            },
        });
    };

    // Only initialize Swiper on mobile devices
    let teamSwiperInstance = null;
    if (window.innerWidth < 768) {
        teamSwiperInstance = initTeamSwiper();
    }

    // Reinitialize Swiper on window resize
    let resizeTimer;
    window.addEventListener('resize', () => {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(() => {
            const swiperEl = document.querySelector('.team-swiper');
            if (swiperEl) {
                if (window.innerWidth < 768 && !swiperEl.swiper) {
                    teamSwiperInstance = initTeamSwiper();
                } else if (window.innerWidth >= 768 && swiperEl.swiper) {
                    swiperEl.swiper.destroy(true, true);
                    teamSwiperInstance = null;
                }
            }
        }, 250);
    });
})();

// Utility Functions
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Header Scroll Shadow
(function() {
    const header = document.getElementById('main-header');
    if (!header) return;

    const handleScroll = debounce(() => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    }, 10);

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check initial state
})();

// Smooth Scroll to Section
(function() {
    const navLinks = document.querySelectorAll('[data-scroll-to]');
    
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('data-scroll-to');
            const targetElement = document.getElementById(targetId);
            
            if (targetElement) {
                const header = document.getElementById('main-header');
                const headerHeight = header ? header.offsetHeight + 20 : 120; // Add extra padding
                const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - headerHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });

                // Update active nav link
                navLinks.forEach(l => l.classList.remove('active'));
                link.classList.add('active');
            }
        });
    });

    // Update active nav link on scroll
    const handleScroll = debounce(() => {
        const sections = document.querySelectorAll('section[id]');
        const scrollPos = window.scrollY + 150;

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');

            if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
                navLinks.forEach(link => {
                    if (link.getAttribute('data-scroll-to') === sectionId) {
                        navLinks.forEach(l => l.classList.remove('active'));
                        link.classList.add('active');
                    }
                });
            }
        });
    }, 100);

    window.addEventListener('scroll', handleScroll, { passive: true });
})();

// Scroll Progress Indicator - Optimized with requestAnimationFrame
(function() {
    const progressBar = document.querySelector('.scroll-progress');
    if (!progressBar) return;

    let ticking = false;
    const updateProgress = () => {
        const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrolled = (window.scrollY / windowHeight) * 100;
        progressBar.style.width = scrolled + '%';
        progressBar.setAttribute('aria-valuenow', Math.round(scrolled));
        ticking = false;
    };

    window.addEventListener('scroll', () => {
        if (!ticking) {
            window.requestAnimationFrame(updateProgress);
            ticking = true;
        }
    }, { passive: true });
    updateProgress();
})();

// Scroll to Top Button - Optimized
(function() {
    const scrollToTopBtn = document.querySelector('.scroll-to-top');
    if (!scrollToTopBtn) return;

    let ticking = false;
    const handleScroll = () => {
        if (!ticking) {
            window.requestAnimationFrame(() => {
                if (window.scrollY > 400) {
                    scrollToTopBtn.classList.add('visible');
                } else {
                    scrollToTopBtn.classList.remove('visible');
                }
                ticking = false;
            });
            ticking = true;
        }
    };

    scrollToTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Check initial state
})();

// Counter Animation for Stats
(function() {
    const statNumbers = document.querySelectorAll('.stat-number');
    if (statNumbers.length === 0) return;

    const animateCounter = (element) => {
        const target = parseInt(element.getAttribute('data-target'));
        const suffix = element.getAttribute('data-suffix') || '';
        const duration = 1500;
        const start = 0;
        const increment = target / (duration / 16);
        let current = start;

        const updateCounter = () => {
            current += increment;
            if (current < target) {
                element.textContent = Math.floor(current) + suffix;
                requestAnimationFrame(updateCounter);
            } else {
                element.textContent = target + suffix;
                element.classList.add('counter-animate');
            }
        };

        updateCounter();
    };

    const statsObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && !entry.target.classList.contains('counted')) {
                entry.target.classList.add('counted');
                animateCounter(entry.target);
                statsObserver.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.5
    });

    statNumbers.forEach(stat => {
        statsObserver.observe(stat);
    });
})();

// Form Handling with Validation and Toast
(function() {
    const form = document.getElementById('contact-form');
    if (!form) return;

    function showToast(message, type = 'success') {
        const toast = document.createElement('div');
        toast.className = `toast ${type}`;
        toast.textContent = message;
        document.body.appendChild(toast);

        setTimeout(() => toast.classList.add('show'), 10);

        setTimeout(() => {
            toast.classList.remove('show');
            setTimeout(() => toast.remove(), 300);
        }, 3000);
    }

    form.addEventListener('submit', async (e) => {
        e.preventDefault();
        
        const submitButton = form.querySelector('button[type="submit"]');
        const originalContent = submitButton.innerHTML;
        
        // Show loading state
        submitButton.classList.add('button-loading');
        submitButton.disabled = true;

        // Simulate form submission (replace with actual API call)
        setTimeout(() => {
            submitButton.classList.remove('button-loading');
            submitButton.disabled = false;
            submitButton.innerHTML = originalContent;
            lucide.createIcons();
            
            showToast('Nachricht erfolgreich gesendet! Wir melden uns bald bei Ihnen.', 'success');
            form.reset();
            
            // Reset floating labels
            const inputs = form.querySelectorAll('input, textarea');
            inputs.forEach(input => {
                input.dispatchEvent(new Event('blur'));
            });
        }, 1500);
    });

    // Form validation
    const inputs = form.querySelectorAll('input, textarea');
    inputs.forEach(input => {
        input.addEventListener('blur', () => {
            if (input.value.trim() === '') {
                input.classList.remove('valid', 'invalid');
            } else if (input.checkValidity()) {
                input.classList.add('valid');
                input.classList.remove('invalid');
            } else {
                input.classList.add('invalid');
                input.classList.remove('valid');
            }
        });
    });
})();

// Card Tilt Effect - Optimized with requestAnimationFrame
(function() {
    const cards = document.querySelectorAll('.card-tilt');
    if (cards.length === 0) return;
    
    cards.forEach(card => {
        let ticking = false;
        const handleMove = (e) => {
            if (!ticking) {
                window.requestAnimationFrame(() => {
                    const rect = card.getBoundingClientRect();
                    const x = e.clientX - rect.left;
                    const y = e.clientY - rect.top;
                    
                    const centerX = rect.width / 2;
                    const centerY = rect.height / 2;
                    
                    const rotateX = (y - centerY) / 20;
                    const rotateY = (centerX - x) / 20;
                    
                    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-4px) scale(1.01)`;
                    ticking = false;
                });
                ticking = true;
            }
        };
        
        card.addEventListener('mousemove', handleMove, { passive: true });
        
        card.addEventListener('mouseleave', () => {
            card.style.transform = '';
        });
    });
})();

// Shimmer Effect on Card Hover
(function() {
    const cards = document.querySelectorAll('.cult-card-shadow');
    
    cards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.classList.add('shimmer');
        });
        
        card.addEventListener('mouseleave', () => {
            card.classList.remove('shimmer');
        });
    });
})();

// Parallax Effect removed to prevent overlapping with sections below

// Image Lazy Loading
(function() {
    const images = document.querySelectorAll('img[src]');
    
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    if (img.dataset.src) {
                        img.src = img.dataset.src;
                        img.removeAttribute('data-src');
                    }
                    imageObserver.unobserve(img);
                }
            });
        });

        images.forEach(img => {
            if (img.src && !img.complete) {
                imageObserver.observe(img);
            }
        });
    }
})();

// Re-initialize icons after dynamic content
const originalCreateIcons = lucide.createIcons;
lucide.createIcons = function() {
    originalCreateIcons.call(this);
    // Re-initialize scroll-to-top icon
    const scrollToTopBtn = document.querySelector('.scroll-to-top');
    if (scrollToTopBtn) {
        const icon = scrollToTopBtn.querySelector('i[data-lucide]');
        if (icon) {
            icon.setAttribute('data-lucide', 'arrow-up');
        }
    }
};
