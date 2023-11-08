const express = require('express');
const app = express();
const port = 5000;

app.get('/receiveapitrial', (req, res) => {
  res.send('Come back Arul Pragasam');
});

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
