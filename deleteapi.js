const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 5000;

app.use(bodyParser.json());

let items = [
  { id: 1, name: 'thalaivar' },
  { id: 2, name: 'thalapathy' },
  { id: 3, name: 'thala' },
];

app.delete('/deleteapitrial', (req, res) => {
  const itemId = parseInt(req.params.id);

  const itemIndex = items.findIndex(item => item.id === itemId);

  if (itemIndex === -1) {
    res.status(404).json({ error: 'Item not found' });
  } else {
    items.splice(itemIndex, 1);
    res.json({ message: 'Item deleted successfully' });
  }
});

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
