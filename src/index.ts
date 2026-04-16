import express from "express";
// Create an Express application
const app = express();
const port = 3000;

app.get("/", (_req, res) => {
  res.send("Hello from GitHub Actions!");
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
