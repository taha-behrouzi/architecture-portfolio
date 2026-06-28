/* ==========================================================================
   ARCHITECTURE PORTFOLIO — MOTION ENGINE
   Premium vanilla JavaScript for world-class interactions.
   ========================================================================== */

(function () {
    'use strict';

    /* ------------------------------------------------------------------
       Preloader
    ------------------------------------------------------------------ */
    const preloader = document.getElementById('preloader');

    function hidePreloader() {
        if (!preloader) return;
        preloader.classList.add('hidden');
        setTimeout(() => {
            preloader.style.display = 'none';
        }, 800);
    }

    if (document.readyState === 'complete') {
        hidePreloader();
    } else {
        window.addEventListener('load', () => {
            setTimeout(hidePreloader, 400);
        });
    }

    /* ------------------------------------------------------------------
       Header — Scroll State & Hide/Show
    ------------------------------------------------------------------ */
    const header = document.getElementById('siteHeader');
    let lastScrollY = 0;
    let ticking = false;
    let headerHidden = false;

    function updateHeader() {
        const scrolled = window.scrollY > 40;
        const scrollDiff = window.scrollY - lastScrollY;

        if (header) {
            header.classList.toggle('scrolled', scrolled);

            // Hide header on scroll down, show on scroll up (only after scrolling past 200px)
            if (window.scrollY > 200) {
                if (scrollDiff > 5 && !headerHidden) {
                    header.style.transform = 'translateY(-100%)';
                    headerHidden = true;
                } else if (scrollDiff < -5 && headerHidden) {
                    header.style.transform = 'translateY(0)';
                    headerHidden = false;
                }
            } else {
                header.style.transform = 'translateY(0)';
                headerHidden = false;
            }
        }
        ticking = false;
    }

    window.addEventListener('scroll', () => {
        if (!ticking) {
            requestAnimationFrame(updateHeader);
            ticking = true;
        }
        lastScrollY = window.scrollY;
    }, { passive: true });

    /* ------------------------------------------------------------------
       Mobile Navigation
    ------------------------------------------------------------------ */
    const menuBtn = document.getElementById('menuBtn');
    const mobileNav = document.getElementById('mobileNav');
    const mobileLinks = mobileNav ? mobileNav.querySelectorAll('.mobile-nav-link') : [];

    function toggleMobileNav() {
        if (!menuBtn || !mobileNav) return;
        const isActive = menuBtn.classList.toggle('active');
        mobileNav.classList.toggle('active');
        mobileNav.setAttribute('aria-hidden', !isActive);
        menuBtn.setAttribute('aria-expanded', isActive);
        document.body.style.overflow = isActive ? 'hidden' : '';
    }

    function closeMobileNav() {
        if (!menuBtn || !mobileNav) return;
        menuBtn.classList.remove('active');
        mobileNav.classList.remove('active');
        mobileNav.setAttribute('aria-hidden', 'true');
        menuBtn.setAttribute('aria-expanded', 'false');
        document.body.style.overflow = '';
    }

    if (menuBtn) {
        menuBtn.addEventListener('click', toggleMobileNav);
    }

    mobileLinks.forEach(link => {
        link.addEventListener('click', closeMobileNav);
    });

    // Close on Escape
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && mobileNav && mobileNav.classList.contains('active')) {
            closeMobileNav();
        }
    });

    /* ------------------------------------------------------------------
       Smooth Scroll for Anchor Links
    ------------------------------------------------------------------ */
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            const target = document.querySelector(targetId);
            if (!target) return;
            e.preventDefault();
            const headerOffset = header ? header.offsetHeight : 0;
            const targetPosition = target.getBoundingClientRect().top + window.scrollY - headerOffset - 20;
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        });
    });

    /* ------------------------------------------------------------------
       Active Section Tracking for Nav
    ------------------------------------------------------------------ */
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.desktop-nav .nav-link');

    function updateActiveNav() {
        const scrollY = window.scrollY + (header ? header.offsetHeight + 100 : 100);

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');

            if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === '#' + sectionId) {
                        link.classList.add('active');
                    }
                });
            }
        });
    }

    window.addEventListener('scroll', () => {
        requestAnimationFrame(updateActiveNav);
    }, { passive: true });

    /* ------------------------------------------------------------------
       Scroll Reveal — IntersectionObserver
    ------------------------------------------------------------------ */
    const revealElements = document.querySelectorAll('[data-animate]');

    if (revealElements.length > 0) {
        const revealObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    revealObserver.unobserve(entry.target);
                }
            });
        }, {
            threshold: 0.08,
            rootMargin: '0px 0px -50px 0px'
        });

        revealElements.forEach(el => revealObserver.observe(el));
    }

    /* ------------------------------------------------------------------
       Hero Entrance — Trigger on Load
    ------------------------------------------------------------------ */
    function triggerHeroAnimations() {
        const heroContent = document.querySelector('.hero-content');
        const heroVisual = document.querySelector('.hero-visual');
        if (heroContent) heroContent.classList.add('visible');
        if (heroVisual) heroVisual.classList.add('visible');
    }

    // Trigger after preloader
    setTimeout(triggerHeroAnimations, 300);

    /* ------------------------------------------------------------------
       Image Lazy Load with Fade-In
    ------------------------------------------------------------------ */
    const lazyImages = document.querySelectorAll('img[loading="lazy"]');

    if (lazyImages.length > 0 && 'IntersectionObserver' in window) {
        const imgObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.style.opacity = '0';
                    img.style.transition = 'opacity 1.2s cubic-bezier(0.25, 0.1, 0.25, 1)';

                    if (img.complete) {
                        img.style.opacity = '1';
                    } else {
                        img.addEventListener('load', () => {
                            img.style.opacity = '1';
                        }, { once: true });
                        img.addEventListener('error', () => {
                            img.style.opacity = '1';
                        }, { once: true });
                    }
                    imgObserver.unobserve(img);
                }
            });
        }, { rootMargin: '100px' });

        lazyImages.forEach(img => imgObserver.observe(img));
    }

    /* ------------------------------------------------------------------
       Magnetic Button Effect
    ------------------------------------------------------------------ */
    const magneticBtns = document.querySelectorAll('[data-magnetic]');

    magneticBtns.forEach(btn => {
        btn.addEventListener('mousemove', (e) => {
            const rect = btn.getBoundingClientRect();
            const x = e.clientX - rect.left - rect.width / 2;
            const y = e.clientY - rect.top - rect.height / 2;
            btn.style.transform = `translate(${x * 0.2}px, ${y * 0.2}px)`;
        });

        btn.addEventListener('mouseleave', () => {
            btn.style.transform = '';
            btn.style.transition = 'transform 0.5s cubic-bezier(0.16, 1, 0.3, 1)';
            setTimeout(() => {
                btn.style.transition = '';
            }, 500);
        });
    });

    /* ------------------------------------------------------------------
       Parallax — Subtle Background Movement on Scroll
    ------------------------------------------------------------------ */
    const orbElements = document.querySelectorAll('.ambient-orb');
    let parallaxTicking = false;

    function updateParallax() {
        const scrollY = window.scrollY;
        orbElements.forEach((orb, i) => {
            const speed = i === 0 ? 0.03 : 0.02;
            orb.style.transform = `translateY(${scrollY * speed}px)`;
        });
        parallaxTicking = false;
    }

    if (orbElements.length > 0) {
        window.addEventListener('scroll', () => {
            if (!parallaxTicking) {
                requestAnimationFrame(updateParallax);
                parallaxTicking = true;
            }
        }, { passive: true });
    }

    /* ------------------------------------------------------------------
       Counter Animation for Stats
    ------------------------------------------------------------------ */
    const statNumber = document.querySelector('.stat-number');
    let statAnimated = false;

    function animateCounter(el, target, suffix) {
        if (statAnimated) return;
        statAnimated = true;

        const duration = 1500;
        const start = performance.now();
        const initial = 0;

        function update(now) {
            const elapsed = now - start;
            const progress = Math.min(elapsed / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 4); // easeOutQuart
            const current = Math.round(initial + (target - initial) * eased);

            // Persian numeral conversion
            const persianDigits = ['۰', '۱', '۲', '۳', '۴', '۵', '۶', '۷', '۸', '۹'];
            const persian = String(current).split('').map(d => persianDigits[parseInt(d)]).join('');

            el.textContent = persian + (suffix || '');

            if (progress < 1) {
                requestAnimationFrame(update);
            }
        }

        requestAnimationFrame(update);
    }

    if (statNumber) {
        const statObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    animateCounter(statNumber, 15, '+');
                    statObserver.unobserve(entry.target);
                }
            });
        }, { threshold: 0.5 });

        statObserver.observe(statNumber);
    }

    /* ------------------------------------------------------------------
       Card Tilt Effect (Desktop Only)
    ------------------------------------------------------------------ */
    if (window.matchMedia('(min-width: 769px)').matches) {
        const cards = document.querySelectorAll('.project-card');

        cards.forEach(card => {
            card.addEventListener('mousemove', (e) => {
                const rect = card.getBoundingClientRect();
                const x = (e.clientX - rect.left) / rect.width - 0.5;
                const y = (e.clientY - rect.top) / rect.height - 0.5;

                const imageWrapper = card.querySelector('.card-image-wrapper');
                if (imageWrapper) {
                    imageWrapper.style.transform = `perspective(800px) rotateY(${x * 2}deg) rotateX(${-y * 2}deg)`;
                    imageWrapper.style.transition = 'transform 0.4s cubic-bezier(0.25, 0.1, 0.25, 1)';
                }
            });

            card.addEventListener('mouseleave', () => {
                const imageWrapper = card.querySelector('.card-image-wrapper');
                if (imageWrapper) {
                    imageWrapper.style.transform = '';
                    imageWrapper.style.transition = 'transform 1.2s cubic-bezier(0.25, 0.1, 0.25, 1)';
                }
            });
        });
    }

    /* ------------------------------------------------------------------
       Smooth Section Transitions on Scroll Direction
    ------------------------------------------------------------------ */
    let scrollDirection = 'down';
    let prevScrollY = 0;

    function trackScrollDirection() {
        scrollDirection = window.scrollY > prevScrollY ? 'down' : 'up';
        prevScrollY = window.scrollY;
    }

    window.addEventListener('scroll', trackScrollDirection, { passive: true });

    /* ------------------------------------------------------------------
       Keyboard Navigation Enhancement
    ------------------------------------------------------------------ */
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Tab') {
            document.body.classList.add('keyboard-nav');
        }
    });

    document.addEventListener('mousedown', () => {
        document.body.classList.remove('keyboard-nav');
    });

})();
