document.getElementById('user-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevents page from reloading
    
    const userName = document.getElementById('username').value;
    const userEmail = document.getElementById('useremail').value;
    
    emailjs.init('rjrOXW2jJAhcaLT7_'); // Replace with your actual public key from EmailJS
    
    const templateParams = {
    user_name: userName,
    user_email: userEmail,
    };
    
    emailjs.send('service_cxw3k6g', 'template_eiit65c', templateParams)
    .then(() => {
    alert('Email successfully sent!');
    window.location.href = 'main.html'; // Redirect to main page after successful email sending
    }, (error) => {
    alert('Failed to send email: ' + JSON.stringify(error));
    });
    });
    