const express = require("express");
const path = require("path");
const app = express();
const PORT = 3000;

app.use(express.urlencoded({ extended: true }));
app.set("view engine", "ejs");
app.set("views", __dirname); // 👈 VERY IMPORTANT — use current folder for views

// Serve the HTML form
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

// Handle form submission
app.post("/submit", (req, res) => {
  const { name, email, age, gender, message } = req.body;

  // Basic server-side validation
  if (!name || !email || !age || !gender || !message) {
    return res.status(400).send("❌ All fields are required.");
  }

  res.render("feedback", { name, email, age, gender, message });
});

// Start the server
app.listen(PORT, () => {
  console.log(`🚀 Server is running at http://localhost:${PORT}`);
});
