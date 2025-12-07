router.post("/api/ask-vinny", async (req, res) => {
  try {
    const question = (req.body.question || "").trim();

    const r = await client.chat.completions.create({
      model: "gpt-5.1",
      messages: [
        { role: "system", content: "You are Vinny. Direct, sharp, Jersey tone. No fluff." },
        { role: "user", content: question }
      ]
    });

    res.json({ answer: r.choices[0].message.content });

  } catch (err) {
    console.error("ASK VINNY ERROR:", err);
    res.json({ answer: "Relax. Vinny’s dealing with something. Try again." });
  }
});
