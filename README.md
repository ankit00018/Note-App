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

## ⚙️ Setup Instructions

### 1. Clone the Repository

```bash
git clone https://github.com/ankit00018/Note-App.git
cd Note-App


2. Install Dependencies

npm install

3. Create the .env File

PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key

4. Run `node server.js` (or `npm start` if you add scripts)

## API Endpoints

- POST `/api/auth/register` — Register user
- POST `/api/auth/login` — Login user, returns JWT token
- GET `/api/notes` — Get all notes (Auth required)
- POST `/api/notes` — Create note (Auth required)
- PUT `/api/notes/:id` — Update note (Auth required)
- DELETE `/api/notes/:id` — Delete note (Auth required)

Use `Authorization: Bearer <token>` header for all notes endpoints.

