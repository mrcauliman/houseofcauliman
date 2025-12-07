router.post("/api/ask-vinny", async (req, res) => {
  const question = req.body.question;
  const r = await client.chat.completions.create({
    model: "gpt-5.1",
    messages: [
      { role: "system", content: "You are Vinny. Direct, sharp, Jersey tone." },
      { role: "user", content: question }
    ]
  });
  res.json({ answer: r.choices[0].message.content });
});
