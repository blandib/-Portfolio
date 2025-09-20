// Theme Toggle Functionality
       /* const themeToggle = document.getElementById('theme-toggle');
        const themeIcon = themeToggle.querySelector('i');
        
        themeToggle.addEventListener('click', () => {
            document.body.classList.toggle('creative-mode');
            
            if (document.body.classList.contains('creative-mode')) {
                themeIcon.classList.remove('fa-moon');
                themeIcon.classList.add('fa-sun');
                localStorage.setItem('theme', 'creative');
            } else {
                themeIcon.classList.remove('fa-sun');
                themeIcon.classList.add('fa-moon');
                localStorage.setItem('theme', 'professional');
            }
        });

        // Check for saved theme preference
        if (localStorage.getItem('theme') === 'creative') {
            document.body.classList.add('creative-mode');
            themeIcon.classList.remove('fa-moon');
            themeIcon.classList.add('fa-sun');
        }

        // Portfolio Filtering
        const filterButtons = document.querySelectorAll('.filter-btn');
        const portfolioItems = document.querySelectorAll('.portfolio-item');
        
        filterButtons.forEach(button => {
            button.addEventListener('click', () => {
                // Remove active class from all buttons
                filterButtons.forEach(btn => btn.classList.remove('active'));
                
                // Add active class to clicked button
                button.classList.add('active');
                
                // Get filter value
                const filterValue = button.getAttribute('data-filter');
                
                // Show/hide portfolio items based on filter
                portfolioItems.forEach(item => {
                    if (filterValue === 'all' || item.getAttribute('data-category') === filterValue) {
                        item.style.display = 'block';
                    } else {
                        item.style.display = 'none';
                    }
                });
            });
        });

        // Animate skill bars when they come into view
        const skillBars = document.querySelectorAll('.skill-progress');
        
        function animateSkills() {
            skillBars.forEach(bar => {
                const position = bar.getBoundingClientRect();
                
                // If skill bar is in viewport
                if(position.top < window.innerHeight && position.bottom >= 0) {
                    bar.style.width = bar.getAttribute('data-width');
                }
            });
        }
        
        // Initial check and then on scroll
        animateSkills();
        window.addEventListener('scroll', animateSkills);

        // Form validation and submission
        const contactForm = document.getElementById('contactForm');
        const notification = document.getElementById('notification');
        const thankYouMessage = document.getElementById('thankYouMessage');
        
        // Show notification function
        function showNotification(message, type) {
            notification.textContent = message;
            notification.className = 'notification ' + type;
            notification.style.display = 'block';
            
            // Hide notification after 5 seconds
            setTimeout(() => {
                notification.style.display = 'none';
            }, 5000);
        }
        
        // Form validation
        contactForm.addEventListener('submit', function(e) {
            // Basic validation
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;
            
            if (!name || !email || !message) {
                e.preventDefault();
                showNotification('Please fill in all required fields.', 'error');
                return;
            }
            
            // Email validation
            const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailPattern.test(email)) {
                e.preventDefault();
                showNotification('Please enter a valid email address.', 'error');
                return;
            }
            
            // If validation passes, the form will submit to Web3Forms
            showNotification('Form submitted successfully!', 'success');
        });

        // Check if URL has thank you message hash and show it
        if (window.location.hash === '#thankYouMessage') {
            contactForm.style.display = 'none';
            thankYouMessage.style.display = 'block';
        }
        
        // Smooth scroll for navigation links only (not portfolio links)
        document.querySelectorAll('.nav-links a, .hero-btns a').forEach(link => {
            link.addEventListener('click', e => {
                // Only apply smooth scroll for internal links (starting with #)
                if (link.getAttribute('href').startsWith('#')) {
                    e.preventDefault();
                    document.querySelector(link.getAttribute('href')).scrollIntoView({
                        behavior: 'smooth'
                    });
                }
                // External links (like those in portfolio) will work normally
            });
        });*/
        // Theme Toggle Functionality
        const themeToggle = document.getElementById('theme-toggle');
        const themeIcon = themeToggle.querySelector('i');
        
        themeToggle.addEventListener('click', () => {
            document.body.classList.toggle('creative-mode');
            
            if (document.body.classList.contains('creative-mode')) {
                themeIcon.classList.remove('fa-moon');
                themeIcon.classList.add('fa-sun');
                localStorage.setItem('theme', 'creative');
            } else {
                themeIcon.classList.remove('fa-sun');
                themeIcon.classList.add('fa-moon');
                localStorage.setItem('theme', 'professional');
            }
        });

        // Check for saved theme preference
        if (localStorage.getItem('theme') === 'creative') {
            document.body.classList.add('creative-mode');
            themeIcon.classList.remove('fa-moon');
            themeIcon.classList.add('fa-sun');
        }

        // Portfolio Filtering
        const filterButtons = document.querySelectorAll('.filter-btn');
        const portfolioItems = document.querySelectorAll('.portfolio-item');
        
        filterButtons.forEach(button => {
            button.addEventListener('click', () => {
                // Remove active class from all buttons
                filterButtons.forEach(btn => btn.classList.remove('active'));
                
                // Add active class to clicked button
                button.classList.add('active');
                
                // Get filter value
                const filterValue = button.getAttribute('data-filter');
                
                // Show/hide portfolio items based on filter
                portfolioItems.forEach(item => {
                    if (filterValue === 'all' || item.getAttribute('data-category') === filterValue) {
                        item.style.display = 'block';
                    } else {
                        item.style.display = 'none';
                    }
                });
            });
        });

        // Animate skill bars when they come into view
        const skillBars = document.querySelectorAll('.skill-progress');
        
        function animateSkills() {
            skillBars.forEach(bar => {
                const position = bar.getBoundingClientRect();
                
                // If skill bar is in viewport
                if(position.top < window.innerHeight && position.bottom >= 0) {
                    bar.style.width = bar.getAttribute('data-width');
                }
            });
        }
        
        // Initial check and then on scroll
        animateSkills();
        window.addEventListener('scroll', animateSkills);
        
        // Smooth scroll for navigation links only (not portfolio links)
        document.querySelectorAll('.nav-links a, .hero-btns a, .footer-column a, .cta a').forEach(link => {
            link.addEventListener('click', e => {
                // Only apply smooth scroll for internal links (starting with #)
                if (link.getAttribute('href').startsWith('#')) {
                    e.preventDefault();
                    document.querySelector(link.getAttribute('href')).scrollIntoView({
                        behavior: 'smooth'
                    });
                }
                // External links (like those in portfolio) will work normally
            });
        });