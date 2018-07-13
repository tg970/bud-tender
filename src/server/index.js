const express = require('express');

const app = express();

const PORT = process.env.PORT || 1122;

app.use(express.static('dist'));

app.listen(PORT, () => console.log('Server OK'));
