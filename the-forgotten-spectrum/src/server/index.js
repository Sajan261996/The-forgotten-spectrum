const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const OpenAI = require("openai");

const app = express();
app.use(cors());
app.use(bodyParser.json());

const openai = new OpenAI({
  apiKey: "YOUR_OPENAI_API_KEY", // Replace with your real API key or use env variable
});

app.post("/api/ai", async (req, res) => {
  const { prompt } = req.body;
  try {
    const completion = await openai.chat.completions.create({
      model: "gpt-4o", // or "gpt-3.5-turbo"
      messages: [{ role: "user", content: prompt }],
      max_tokens: 150,
    });
    res.json({ response: completion.choices[0].message.content });
  } catch (err) {
    console.error("OpenAI API error:", err);
    res.status(500).json({ error: "AI error" });
  }
});

app.listen(5000, () => console.log("Server running on http://localhost:5000"));
