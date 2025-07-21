const apiBase = 'https://secure-skillhub.onrender.com/';

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

    // Set welcome name
    const welcomeEl = document.getElementById('userName');
    if (welcomeEl) welcomeEl.textContent = name;

    // Load portfolio
    fetch(`${apiBase}/api/portfolio`, {
      headers: { Authorization: `Bearer ${token}` },
    })
      .then((res) => {
        if (!res.ok) throw new Error('Unauthorized');
        return res.json();
      })
      .then((data) => {
        document.getElementById('bio').value = data.bio || '';
        document.getElementById('skills').value = (data.skills || []).join(', ');
        document.getElementById('projects').value = (data.projects || []).join(', ');
      })
      .catch((err) => {
        console.error(err);
        alert('Session expired. Please login again.');
        localStorage.clear();
        window.location.href = 'login.html';
      });

    // Save portfolio
    const portfolioForm = document.getElementById('portfolioForm');
    if (portfolioForm) {
      portfolioForm.addEventListener('submit', async (e) => {
        e.preventDefault();

        const bio = document.getElementById('bio').value;
        const skills = document.getElementById('skills').value.split(',').map(s => s.trim());
        const projects = document.getElementById('projects').value.split(',').map(p => p.trim());

        try {
          const res = await fetch(`${apiBase}/api/portfolio`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              Authorization: `Bearer ${token}`,
            },
            body: JSON.stringify({ bio, skills, projects }),
          });

          const data = await res.json();
          alert(data.msg || 'Portfolio saved!');
        } catch (err) {
          alert('Something went wrong.');
        }
      });
    }

    // Logout
    const logoutBtn = document.getElementById('logoutBtn');
    if (logoutBtn) {
      logoutBtn.addEventListener('click', () => {
        localStorage.clear();
        window.location.href = 'login.html';
      });
    }
  }
});
