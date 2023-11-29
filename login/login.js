const registerForm = document.getElementById('registerForm');
const errorElement = document.getElementById('error');

registerForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    
    window.location.href = '/welcome.html';


    
});