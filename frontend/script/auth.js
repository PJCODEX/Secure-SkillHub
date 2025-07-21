const apiBase =  'https://secure-skillhub.onrender.com/';

document.addEventListener('DOMContentLoaded', () => {
  // REGISTER
  const registerForm = document.getElementById('registerForm');
  if (registerForm) {
    registerForm.addEventListener('submit', async (e) => {
      e.preventDefault();
      const name = document.getElementById('name').value;
      const email = document.getElementById('email').value;
      const password = document.getElementById('password').value;

      const res = await fetch(`${apiBase}/api/auth/register`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, password }),
      });

      const data = await res.json();
      if (res.ok) {
        alert('Registration successful! Please login.');
        window.location.href = 'login.html';
      } else {
        alert(data.msg || 'Registration failed');
      }
    });
  }

  // LOGIN
  const loginForm = document.getElementById('loginForm');
  if (loginForm) {
    loginForm.addEventListener('submit', async (e) => {
      e.preventDefault();
      const email = document.getElementById('email').value;
      const password = document.getElementById('password').value;

      const res = await fetch(`${apiBase}/api/auth/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();
      if (res.ok) {
        localStorage.setItem('token', data.token);
        localStorage.setItem('name', data.name);
        window.location.href = 'dashboard.html';
      } else {
        alert(data.msg || 'Login failed');
      }
    });
  }

  // DASHBOARD
  if (window.location.pathname.includes('dashboard.html')) {
    const token = localStorage.getItem('token');
    const name = localStorage.getItem('name');
    if (!token) {
      alert('You must be logged in!');
      return (window.location.href = 'login.html');
    }

    fetch(`${apiBase}/api/portfolio`, {
      headers: { Authorization: `Bearer ${token}` },
    })
      .then((res) => res.json())
      .then((data) => {
        document.getElementById('userName').textContent = name;
        console.log('Portfolio:', data);
      })
      .catch((err) => {
        console.error(err);
        alert('Session expired');
        window.location.href = 'login.html';
      });
  }
});
