const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 5000;

const dataStore = [
  { id: 1, name: 'Item 1', description: 'thalaivar' },
  { id: 2, name: 'Item 2', description: 'thalapathy' },
  { id: 3, name: 'Item 3', description: 'thala' },
];

app.use(bodyParser.json());

app.put('/updateapitrial', (req, res) => {
  const itemId = parseInt(req.params.id);
  const updateData = req.body;

  const itemIndex = dataStore.findIndex(item => item.id === itemId);

  if (itemIndex === -1) {
    return res.status(404).json({ message: 'Item not found' });
  }

  dataStore[itemIndex] = { ...dataStore[itemIndex], ...updateData };

  return res.json(dataStore[itemIndex]);
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
