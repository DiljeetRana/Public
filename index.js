// Simple Node.js Express server for testing
const express = require("express");
const app = express();

const PORT = 3000;

app.get("/", (req, res) => {
  res.send("Hello World!\n");
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}/`);
});
