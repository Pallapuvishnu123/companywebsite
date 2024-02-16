// Initialize Email.js
emailjs.init("EN8v3zA1CHg4yR9Eb").then(function() {
    console.log('Email.js initialized successfully');
  }).catch(function(error) {
    console.log('Email.js initialization failed:', error);
  });
  
  // Function to send email
  function sendEmail() {
    var fullName = document.getElementById('fullName').value;
    var mobileNumber = document.getElementById('mobileNumber').value;
    var email = document.getElementById('email').value;
    var message = document.getElementById('message').value;
  
    emailjs.send("service_1h2z6b9", "template_6217jo2", {
      from_name: fullName,
      to_email: email,
      mobile_number: mobileNumber,
      message: message,
    }).then(
      function(response) {
        console.log("Email sent successfully", response);
        alert("Submit successful. Check your email!");
      },
      function(error) {
        console.log("Failed to send email", error);
        alert("Failed to submit. Please try again later.");
      }
    );
  
    return false; 
  }
  
  // Event listener for form submission
  document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // prevent default form submission
    sendEmail();
  });
  