const apiBase = 'https://secure-skillhub.onrender.com;

document.addEventListener('DOMContentLoaded', () => {
  const loginForm = document.getElementById('loginForm');
  const registerForm = document.getElementById('registerForm');

  if (loginForm) {
    loginForm.addEventListener('submit', async (e) => {
      e.preventDefault();
      const email = document.getElementById('email').value;
      const password = document.getElementById('password').value;

      const res = await fetch(`${apiBase}/api/auth/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password })
      });

      const data = await res.json();
      if (res.ok) {
        localStorage.setItem('token', data.token);
        localStorage.setItem('name', data.name);
        window.location.href = 'dashboard.html';
      } else {
        alert(data.msg);
      }
    });
  }

  if (registerForm) {
    registerForm.addEventListener('submit', async (e) => {
      e.preventDefault();
      const name = document.getElementById('name').value;
      const email = document.getElementById('email').value;
      const password = document.getElementById('password').value;

      const res = await fetch(`${apiBase}/api/auth/register`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, password })
      });

      const data = await res.json();
      if (res.ok) {
        alert('Registered successfully! You can now login.');
        window.location.href = 'login.html';
      } else {
        alert(data.msg);
      }
    });
  }

  // Dashboard fetch
  if (window.location.pathname.includes('dashboard.html')) {
    const token = localStorage.getItem('token');
    const name = localStorage.getItem('name');

    if (!token) return (window.location.href = 'login.html');
    document.getElementById('welcomeName').textContent = name;

    fetch(`${apiBase}/api/portfolio`, {
      headers: { Authorization: `Bearer ${token}` }
    })
      .then(res => res.json())
      .then(data => {
        console.log('Portfolio:', data);
      })
      .catch(() => {
        alert('Session expired. Please login again.');
        window.location.href = 'login.html';
      });
  }
});

function logout() {
  localStorage.clear();
  window.location.href = 'login.html';
}
