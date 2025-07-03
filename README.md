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

### 2. Install Dependencies

```bash
npm install

### 3. Create `.env` File

Create a `.env` file in the root folder and add the following environment variables:

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key

### 4. Start the Server

To run the app in development mode:

```bash
npm run dev



