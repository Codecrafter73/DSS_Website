import express from "express";
import { chatWithGroq } from "../controllers/groq.controller.js";

const router = express.Router();
// ...existing code...
router.post('/chat', async (req, res, next) => {
  try {
    console.log('Received body:', req.body);
    // ...existing logic...
  } catch (error) {
    console.error('Error in /groq/chat:', error);
    next(error);
  }
});
// ...existing code...
export default router;
