const express = require ('express');
const app = express();

app.get('/', (req, res) => {
    res.send('working !!');
});

app.get('/data', (req, res) => {
  res.json({
    name: "Amit",
    age: 25,
    city: "Delhi"
  });
});

app.listen(3000, () => {
    console.log('Server running on http://localhost:3000');
  });
  