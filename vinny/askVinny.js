import express from "express";
import OpenAI from "openai";

const router = express.Router();
const client = new OpenAI({ apiKey: process.env.OPENAI_KEY });

router.post("/api/ask-vinny", async (req, res) => {
  try {
    const question = req.body.question?.trim() || "";

    const completion = await client.chat.completions.create({
      model: "gpt-5.1",
      messages: [
        { 
          role: "system", 
          content: "You are Vinny. Direct. Sharp. Jersey energy. No fluff. No apologies. Straight answers." 
        },
        { role: "user", content: question }
      ]
    });

    res.json({ answer: completion.choices[0].message.content });

  } catch (err) {
    console.error("ASK VINNY ERROR:", err);
    res.json({ answer: "Relax, something hiccuped. Vinny will be back in a second." });
  }
});

export default router;
