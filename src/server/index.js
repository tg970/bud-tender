const express = require('express');

const app = express();

const PORT = process.env.PORT || 1122;

app.use(express.static('dist'));

app.get('/api/hello', (req, res) => {
  res.send({ message: "Hello World!!" });
});

app.listen(PORT, () => console.log('Server OK'));
