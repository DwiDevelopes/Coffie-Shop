const express = require('express');
const path = require('path');
const app = express();
const port = 3000;
app.use(express.static(path.join(__dirname)));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../index.html'));
  res.sendFile(path.join(__dirname, '../login.html'));
  res.sendFile(path.join(__dirname, '../404.html'));
});
app.listen(port, () => {
  console.log(`Coffee Shop server running at http://localhost:${port}`);
});