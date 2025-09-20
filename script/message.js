const form = document.getElementById('contactForm');
        const notification = document.getElementById('notification');
        const thankYouMessage = document.getElementById('thankYouMessage');
        const submitBtn = document.getElementById('submitBtn');
        
        // Handle form submission
        form.addEventListener('submit', function(e) {
            e.preventDefault(); // Prevent the default form submission
            submitBtn.disabled = true; // Prevent double submission
            submitBtn.textContent = "Sending...";
            
            // Basic validation
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;
            
            if (!name || !email || !message) {
                showNotification('Please fill in all required fields', 'error');
                submitBtn.disabled = false;
                submitBtn.textContent = "Send Request";
                return;
            }
            
            // If validation passes, submit the form
            const formData = new FormData(form);
            
            fetch(form.action, {
                method: 'POST',
                body: formData
            })
            .then(response => response.json())
            .then(data => {
                if (data.success) {
                    // Show the thank you message and hide the form
                    form.style.display = 'none';
                    thankYouMessage.style.display = 'block';
                    // Optionally, scroll to the thank you message
                    thankYouMessage.scrollIntoView({behavior: 'smooth'});
                } else {
                    // Show error message
                    showNotification('There was a problem sending your message. Please try again.', 'error');
                    submitBtn.disabled = false;
                    submitBtn.textContent = "Send Request";
                }
            })
            .catch(error => {
                // Show error message
                showNotification('There was a network error. Please try again.', 'error');
                submitBtn.disabled = false;
                submitBtn.textContent = "Send Request";
            });
        });
        
        function showNotification(message, type) {
            notification.textContent = message;
            notification.className = 'notification ' + type;
            notification.style.display = 'block';
            
            // Scroll to notification
            notification.scrollIntoView({behavior: 'smooth'});
            
            // Hide notification after 5 seconds
            setTimeout(() => {
                notification.style.display = 'none';
            }, 5000);
        }