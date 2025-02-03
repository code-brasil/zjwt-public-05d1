document.addEventListener('DOMContentLoaded', async () => {
    const token = localStorage.getItem('token');
    if (!token) {
        window.location.href = 'index.html';
        return;
    }
    const response = await fetch('http://localhost:8000/functions/zjwt/verify_token', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ token })
    });
    const result = await response.json();
    if (result.valid) {
        document.getElementById('welcome-message').innerText = `Olá, ${result.email}!`;
    } else {
        localStorage.removeItem('token');
        window.location.href = 'index.html';
    }
});

document.getElementById('logout').addEventListener('click', () => {
    localStorage.removeItem('token');
    window.location.href = 'index.html';
});