const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.urlencoded({ extended: false }))
app.use(express.json())

app.use('/api/cars', require('./carAPI'))

app.listen(PORT, () => console.log('Cars API listening on port:' + PORT ))