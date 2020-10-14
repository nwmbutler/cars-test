const express = require('express');
const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
    res.send('Cars API');
});

app.listen(PORT, () => console.log('Cars API listening on port:' + PORT ))