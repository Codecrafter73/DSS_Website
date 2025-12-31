import { generateGroqResponse } from "../services/groq.service.js";

export const chatWithGroq = async (req, res, next) => {
  try {
    const { message } = req.body;

    if (!message || typeof message !== "string") {
      return res.status(400).json({
        success: false,
        message: "Valid message string is required",
      });
    }

    const reply = await generateGroqResponse({ message });

    res.status(200).json({
      success: true,
      data: { reply },
    });
  } catch (error) {
    next(error);
  }
};
