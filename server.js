// server.js
const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());

let visitorCount = 0; // Initialize with a base count

app.get("/api/visitor-count", (req, res) => {
  visitorCount += 1; // Increment the count
  res.json({ count: visitorCount });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
