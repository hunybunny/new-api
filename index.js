const express = require ('express');
const app = express();
const PORT = process.env.PORT || 3000;
app.use(express.json());
const fs = require('fs');

app.get('/', (req, res) => {
    res.send('working !!');
});

app.get('/api/user', (req, res) => {
    const users = JSON.parse(fs.readFileSync('user.json'));
    res.json(users);
});

app.post('/api/users', (req, res) => {
    const users = JSON.parse(fs.readFileSync('user.json'));
    const newUser = req.body;
    users.push(newUser);
    fs.writeFileSync('user.json', JSON.stringify(users, null, 2));
    res.send('User added!');
  });
  

app.listen(PORT, () => {
    console.log(`Server running on ${PORT}`);
  });
  