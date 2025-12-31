import axios from "axios";

const groqClient = axios.create({
  baseURL: "https://api.groq.com/openai/v1",
  timeout: 30000,
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${process.env.GROQ_API_KEY}`,
  },
});

export default groqClient;
