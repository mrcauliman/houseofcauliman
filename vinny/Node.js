import express from "express";
import askVinnyRoute from "./askVinny.js";

const app = express();

// Allow JSON bodies
app.use(express.json());

// Serve index.html + style.css + any assets in this folder
app.use(express.static("."));

// Mount Vinny route
app.use(askVinnyRoute);

// Start server
app.listen(3000, () => {
  console.log("Vinny server running on port 3000");
});
