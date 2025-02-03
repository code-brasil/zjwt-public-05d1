document.getElementById('signup-form').addEventListener('submit', async (e) => {
    e.preventDefault();
    const email = document.getElementById('signup-email').value;
    const password = document.getElementById('signup-password').value;
    const response = await fetch('http://localhost:8000/functions/zjwt/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password })
    });
    const result = await response.json();
    if (result.success) {
        document.getElementById('message').innerText = 'Cadastro realizado com sucesso!';
    } else {
        document.getElementById('message').innerText = result.error;
    }
});

document.getElementById('login-form').addEventListener('submit', async (e) => {
    e.preventDefault();
    const email = document.getElementById('login-email').value;
    const password = document.getElementById('login-password').value;
    const response = await fetch('http://localhost:8000/functions/zjwt/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password })
    });
    const result = await response.json();
    if (result.token) {
        localStorage.setItem('token', result.token);
        window.location.href = 'protected.html';
    } else {
        document.getElementById('message').innerText = result.error;
    }
});