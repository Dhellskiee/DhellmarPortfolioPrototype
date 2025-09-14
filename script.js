 // Custom Cursor
        const cursor = document.querySelector('.cursor');
        const clickables = document.querySelectorAll('a, button, .skill-item, .portfolio-item, .contact-item, .form-group input, .form-group textarea');

        document.addEventListener('mousemove', (e) => {
            cursor.style.left = e.clientX + 'px';
            cursor.style.top = e.clientY + 'px';
        });

        clickables.forEach(item => {
            item.addEventListener('mouseenter', () => {
                cursor.classList.add('cursor-grow');
            });
            
            item.addEventListener('mouseleave', () => {
                cursor.classList.remove('cursor-grow');
            });
            
            item.addEventListener('mousedown', () => {
                cursor.classList.add('cursor-active');
            });
            
            item.addEventListener('mouseup', () => {
                cursor.classList.remove('cursor-active');
            });
        });

        // Smooth scrolling for navigation
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                e.preventDefault();
                document.querySelector(this.getAttribute('href')).scrollIntoView({
                    behavior: 'smooth'
                });
            });
        });

        // Form submission
        const form = document.querySelector('form');
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            alert('Thank you for your message! I will get back to you soon.');
            form.reset();
        });