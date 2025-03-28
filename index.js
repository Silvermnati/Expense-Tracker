const express = require("express");
const jsonServer = require("json-server");
const cors = require("cors");
const path = require("path");

// Create an Express server
const app = express();
const router = jsonServer.router(path.join(__dirname, "db.json"));

// Middleware
app.use(express.json()); // Allow JSON data
app.use(cors()); // Allow frontend interaction

// Custom Routes
app.get("/", (req, res) => {
  res.send("Expense Tracker API is running!");
});

// Use JSON Server as middleware
app.use("/api", router);

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`✅ Server is running on http://localhost:${PORT}`);
});
