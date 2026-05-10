/*1const express = require('express');
const app = express();

app.get('/hello', (req, res) => {
  res.json({
    message: "Hello from backend",
    time: new Date()
  });
});

app.listen(3000, () => {
  console.log("Backend running on port 3000");
});*/
/*2const express = require('express');
const app = express();

app.use(require('cors')());

app.get('/hello', (req, res) => {
  res.json({
    message: "Hello from backend",
    time: new Date()
  });
});

app.listen(3000, () => {
  console.log("Backend running on port 3000");
});*/
/*3app.get('/hello', (req, res) => {
  const start = Date.now();

  const response = {
    message: "Hello from backend",
    time: new Date(),
    responseTimeMs: Date.now() - start
  };

  res.json(response);
});*/
console.log("Starting server...");
const express = require('express');
const cors = require('cors');

const app = express();   // ✅ This was missing

app.use(cors());

app.get('/hello', (req, res) => {
  const start = Date.now();

  const response = {
    message: "Hello from backend",
    time: new Date(),
    responseTimeMs: Date.now() - start
  };

  res.json(response);
});
app.listen(3000, () => {
  console.log("Backend running on port 3000");
});