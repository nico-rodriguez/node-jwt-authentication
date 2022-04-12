const jwt = require('jsonwebtoken');
const express = require('express');
require('dotenv').config();

const app = express();

const PORT = 5000;
const SECRET_KEY = process.env.JWT_SECRET_KEY;

app.post('/api/posts', verifyToken, (req, res) => {
  const { authData } = req;
  if (authData) {
    res.json({
      message: 'Post created!',
      authData,
    });
  } else {
    res.sendStatus(403);
  }
});

app.post('/api/login', (req, res) => {
  // Mock user
  const user = {
    id: 1,
    username: 'john',
    email: 'john@mail.com',
  };

  jwt.sign({ user }, SECRET_KEY, { expiresIn: '30s' }, (err, token) => {
    if (err) {
      res.sendStatus(500);
    }

    res.json({ token });
  });
});

// Verify the token sent by the client
// The header with the token should have the following format:
// Authorization: Bearer <token>
function verifyToken(req, res, next) {
  // Get auth header value
  const bearerHeader = req.headers['authorization'];

  console.log(req.headers);
  if (bearerHeader) {
    const token = bearerHeader.split(' ')[1];
    jwt.verify(token, SECRET_KEY, (err, authData) => {
      if (err) {
        res.sendStatus(403);
      } else {
        req.authData = authData;
        next();
      }
    });
  } else {
    res.sendStatus(403);
  }
}

app.listen(PORT, () => console.log(`Server listening on PORT ${PORT}!`));
