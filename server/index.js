const express = require("express");
const app = express();
const path = require("path");
const cors = require("cors");
app.use(cors());


app.get("/download", (req, res) => {
  const filePath = path.join(__dirname, "largeFile.bin");
  res.download(filePath);
});


app.listen(3000, () => console.log("Server running on port 3000"));
