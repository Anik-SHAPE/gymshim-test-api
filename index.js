const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());

const PORT = 8000;

app.get("/api/message", (req, res) => {
  res.json({ message: "Hello from backend 🚀" });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});