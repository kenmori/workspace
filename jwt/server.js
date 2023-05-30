const express = require('express');
const { expressjwt: expressJwt } = require('express-jwt');
const jsonwebtoken = require('jsonwebtoken');
const cors = require('cors');
const app = express();
app.use(cors());
const jwtSecret = 'secret123';
app.get('/jwt', (req, res) => {
  res.json({
    token: jsonwebtoken.sign({ user: 'johndoe' }, jwtSecret)
  });
});

app.use(expressJwt({ secret: jwtSecret, algorithms: ['HS256'] }));

const foods = [
  { id: 1, description: 'ブリトー' },
  { id: 2, description: 'ケサディーヤ' }, { id: 2, description: 'ケサディーヤ' },
  { id: 3, description: 'チュロス' }, { id: 3, description: 'チュロス' }
];

app.get('/foods', (req, res) => {
  res.json(foods);
});

app.listen(3001);
console.log('App running on localhost:3001');

