document.getElementById('contactForm').addEventListener('submit', function(event) {
  event.preventDefault();

  // Get form values
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;

  // Validate input
  if (!name || !email || !message) {
      alert('Please fill out all fields.');
      return;
  }

  // Display response
  const formResponse = document.getElementById('formResponse');
  formResponse.innerHTML = `<p>Thank you, ${name}! Your message has been received and we will get back to you soon.</p>`;

  // Clear form
  document.getElementById('contactForm').reset();
});
