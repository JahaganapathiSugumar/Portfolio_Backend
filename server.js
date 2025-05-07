const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors()); // Enable CORS for all origins

// Initialize visitor count
let visitorCount = 0;

// API endpoint to get and increment the visitor count
app.get("/", (req, res) => {
  visitorCount += 1; // Increment the count
  res.json({ count: visitorCount }); // Respond with the updated count
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
