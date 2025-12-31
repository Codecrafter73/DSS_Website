export const errorHandler = (err, req, res, next) => {
  console.error("🔥 FULL ERROR OBJECT:", err);
  console.error("🔥 GROQ RESPONSE:", err.response?.data);

  res.status(500).json({
    success: false,
    message: err.response?.data || err.message,
  });
};
