document.getElementById('reservation-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;

    alert(`Thank you for your reservation, ${name}! We will contact you at ${email} shortly.`);
});
