const express = require('express');
const app = express();
const port = 5000;

app.get('/sendapitrial', (req, res) => {
  res.send('I am Arul Pragasam');
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
