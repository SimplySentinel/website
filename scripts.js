document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();

    // You can add your form submission logic here
    alert('Thank you for your message!');

    // Reset form
    document.getElementById('contact-form').reset();
});
