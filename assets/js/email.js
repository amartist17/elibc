
// email-form-handler.js
document.addEventListener('DOMContentLoaded', function() {
    const emailJSUserId = '6kQfIJzvaPDSNGbYP'; // Replace 'your_user_id' with your actual EmailJS user ID
    const serviceId = 'service_nvxcn3c'; // Replace 'your_service_id' with your EmailJS service ID
    const templateId = 'template_jftbd4f'; // Replace 'your_template_id' with your EmailJS template ID

    // Initialize EmailJS
    (function(){
        emailjs.init(emailJSUserId);
    })();

    // Find all forms with class 'emailjs-form' and attach a submit event handler to each
    document.querySelectorAll('.emailjs-form').forEach(function(form) {
        form.addEventListener('submit', function(event) {
            event.preventDefault(); // Prevent the default form submission

            // Send the email using the EmailJS API
            emailjs.sendForm(serviceId, templateId, this)
                .then(function(response) {
                    console.log('SUCCESS!', response.status, response.text);
                    alert('Your message has been sent successfully!');
                }, function(error) {
                    console.log('FAILED...', error);
                    alert('Failed to send the message, please try again.');
                });
        });
    });
});
