const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());


const PORT = 8000;

app.use(cors({
  origin: "*"
}));

app.get("/api/message", (req, res) => {
  res.json({ message: "Hello from backend 🚀" });
});

app.listen(8000, "0.0.0.0", () => {
  console.log("Server running on port 8000");
});