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

  ## 🔐 Authentication Workflow
  
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

🔗 Live Deployment: https://secure-skill-hub.vercel.app/



---

## 🧑‍💻 Tech Stack

| Layer        | Tech Used                                |
|-------------|-------------------------------------------|
| 🌐 Frontend  | HTML, CSS, Bootstrap 5.3, JavaScript      |
| ⚙️ Backend   | Node.js, Express.js, JWT|
| 🗃️ Database   | MongoDB Atlas, Mongoose                         |
| 🌍 Deployment | Render (Backend), Vercel (Frontend)   |
| 📁 Files      | dotenv,gitignore|
| 🔐 Authentication | JWT, Bcrypt|
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
│   ├── script/auth.js    # handling client-side authentication logic
 
└── README.md             # You're here!

----
## 🛠️ Debugging Challenges Faced

| ❓ Issue                                  | ✅ Fix                                                                 |
|------------------------------------------|------------------------------------------------------------------------|
| ❌ Token not attaching to request         | Added proper `Authorization` header in frontend                        |
| ❌ CORS errors                            | Configured CORS with correct frontend origin                           |
| ❌ Server not reading `.env`              | Added `dotenv.config({ path })` in `server.js`                         |
| ❌ Portfolio returning `null`             | Ensured JWT middleware correctly sets `req.user`                       |
| ❌ 401 Unauthorized on dashboard          | Properly passed JWT in `Authorization` header                          |
| ❌ CORS errors from Vercel/Render         | Whitelisted frontend domain in Express `cors()` middleware             |
| ❌ Login redirect failing silently        | Stored JWT and username in `localStorage`; redirected on success       |
| ❌ Data not saving in MongoDB             | Checked `req.user` from `jwt.verify()` and confirmed schema linkage    |
| ❌ UI bugs on mobile devices              | Used Bootstrap's responsive grid system                                |

----

## 🤝 Contribution Guide
Want to suggest a new feature or fix a bug?
 1. Fork the repo on GitHub:
 Visit: **https://github.com/PJCODEX/Secure-SkillHub.git** and click the "Fork" button (top-right)

 2. Clone your fork
**git clone https://github.com/your-username/Secure-SkillHub.git** <br> 
cd Secure-SkillHub</br>

 3. Create a new feature or bugfix branch
**git checkout -b feature/your-feature-name**
 4. Make your changes
(Open and edit files as needed using your code editor)

 5. Stage and commit your changes
**git add .
git commit -m "Add: Your short and meaningful description"**

 6. Push your changes to your fork
**git push origin feature/your-feature-name**

 7. Open a Pull Request
 - Go to your forked repo on GitHub
 - Click "Compare & pull request"
 - Add a clear title and description 
 - Submit the PR to the original repo (PJCODEX/Secure-SkillHub)


## 📄 License

This project is licensed under the [MIT License](LICENSE).

