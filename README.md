# 🔐 Secure-SkillHub

**Secure-SkillHub** is a full-stack web application built for securely registering users, authenticating via JWT, and allowing them to create and manage their skill portfolios. Developed during my internship with **Cognifyz Technologies**, this project emphasizes **authentication, form validation, portfolio management, and MongoDB integration** using a clean UI built in **HTML/CSS and Bootstrap**.

---

## 🎯 Internship Task Objective — Task 6

> **Objective:**  
> Build a secure full-stack web app featuring:
> - User Registration & Login (with hashed passwords)
> - JWT-based Authentication
> - MongoDB Data Persistence (portfolio info)
> - Protected API Endpoints
> - Clean UI with interactive feedback 

---

## 🧩 Features

- ✅ User Registration & Login
- 🔐 **JWT-based** authentication with route protection
- 🧠 Submit and save Bio, Skills, and Projects
- 🎨 Clean UI with Bootstrap & Poppins fonts
- 🚫 Restricted access to dashboard if not logged in
- - Persistent data storage via **MongoDB**
- ☁️ Hosted on **Render** (backend) and **Vercel** (frontend)

  ---

  🔐 Authentication Workflow
  
1.Registration (/api/auth/register):
.Validates uniqueness of email
.Hashes password using bcryptjs
.Stores user in MongoDB

2.Login (/api/auth/login):
.Verifies email and password
.Issues a signed JWT token valid for 1 hour

3.Protected Routes (/api/portfolio):
.Uses a middleware to decode JWT and attach userId to req.user
.Allows access only if valid token is passed in Authorization header

----

**Links**
🔗 Live Frontend on Vercel: https://secure-skill-hub.vercel.app/

🔗 Backend API on Render:

---

## 🧑‍💻 Tech Stack

| Layer        | Tech Used                                |
|-------------|-------------------------------------------|
| 🌐 Frontend  | HTML, CSS, Bootstrap 5.3, JavaScript      |
| ⚙️ Backend   | Node.js, Express.js, JWT, bcrypt.js       |
| 🗃️ Database   | MongoDB, Mongoose                         |
| 🌍 Deployment | Render (API), Vercel (Static Frontend)   |
| 📦 Tools     | dotenv, cors|

---

## 📁 Project Structure

Secure-SkillHub/
│
├── backend/
│   ├── models/           # Mongoose schemas for User & Portfolio
│   ├── routes/           # Auth & Portfolio API routes
│   ├── middleware/       # JWT auth middleware
│   ├── .env              # MongoDB URI & JWT_SECRET
│   └── server.js         # Main entry point
│
├── frontend/
│   ├── index.html        # Register page
│   ├── login.html        # Login form
│   ├── dashboard.html    # User dashboard (protected)
│   ├── style.css         # Theme: Pink aesthetic with Bootstrap
│
└── README.md             # You're here!

----
## 🛠️ Debugging Challenges Faced

| ❓ Issue                                  | ✅ Fix                                                                 |
|------------------------------------------|------------------------------------------------------------------------|
| ❌ Token not attaching to request         | Added proper `Authorization` header in frontend                        |
| ❌ CORS errors                            | Configured CORS with correct frontend origin                           |
| ❌ Server not reading `.env`              | Added `dotenv.config({ path })` in `server.js`                         |
| ❌ Portfolio returning `null`             | Ensured JWT middleware correctly sets `req.user`                       |
| ❌ Form not submitting without JS         | Used `<form>` with `POST` method and appropriate `action` attribute    |
| ❌ 401 Unauthorized on dashboard          | Properly passed JWT in `Authorization` header                          |
| ❌ CORS errors from Vercel/Render         | Whitelisted frontend domain in Express `cors()` middleware             |
| ❌ Login redirect failing silently        | Stored JWT and username in `localStorage`; redirected on success       |
| ❌ Data not saving in MongoDB             | Checked `req.user` from `jwt.verify()` and confirmed schema linkage    |
| ❌ UI bugs on mobile devices              | Used Bootstrap's responsive grid system                                |

----

🤝 Contribution Guide
Want to suggest a new feature or fix a bug?

Fork this repo

Clone your fork:

bash
Copy
Edit
git clone https://github.com/PJCODEX/Secure-SkillHub.git
Create a new branch:

bash
Copy
Edit
git checkout -b feature/your-feature-name
Make changes, commit, and push:

bash
Copy
Edit
git commit -m "Add: your feature"
git push origin feature/your-feature-name
Open a Pull Request with proper description.

