const loginForm = document.getElementById('loginForm');
        const errorElement = document.getElementById('error');

        loginForm.addEventListener('submit', (event) => {
            event.preventDefault();

            const email = document.getElementById('email').value;
            const password = document.getElementById('password').value;

            if (email === 'admin@afyabora.com' && password === 'admin') {
                window.location.href = 'welcome.html';
            } else {
                errorElement.textContent = 'Incorrect credentials';
            }
        });