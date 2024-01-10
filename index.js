const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Hello, this is a simple Node.js web application!');
});

const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

