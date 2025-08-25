const express = require("express");
const app = express();
const PORT = 3000;

app.get("/", (req, res) => {
  res.send("Hello from Node.js running on EC2 🚀");
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
