import express from "express";
import {
  createNote,
  getNotes,
  updateNote,
  deleteNote,
} from "../controller/note.controller.js";
import authMiddleware from "../middleware/auth.middleware.js";

const router = express.Router();

// Protect all routes below
router.use(authMiddleware);

// GET /api/notes - Get all notes
router.get("/", getNotes);

// POST /api/notes - Create a note
router.post("/", createNote);

// PUT /api/notes/:id - Update a note
router.put("/:id", updateNote);

// DELETE /api/notes/:id - Delete a note
router.delete("/:id", deleteNote);

export default router;
