# 📝 Notes App API

A simple RESTful Notes API built with Node.js, Express, MongoDB, and JWT.  
It includes user authentication and full CRUD operations for managing personal notes.

---

## 🚀 Features

- User registration and login with hashed passwords (bcrypt)
- JWT-based authentication
- CRUD operations for notes
- Only logged-in users can manage their own notes

---

## 📁 Folder Structure
notes-app/
├── models/
│ ├── User.js
│ └── Note.js
├── routes/
│ ├── auth.js
│ └── notes.js
├── middleware/
│ └── authMiddleware.js
├── .env
├── index.js
├── package.json
├── .gitignore
└── README.md

---

## ⚙️ Setup Instructions

### 1. Clone the Repository

```bash
git clone https://github.com/ankit00018/Note-App.git
cd Note-App

```markdown

### 2. Install the Dependencies

```bash
npm install
