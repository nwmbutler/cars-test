const express = require('express')
const bodyParser = require('body-parser');
const router = express.Router()
const cors = require('cors');

const app = express();
const PORT = 3000;

let cars = [
   { 
    make: "Fiat", 
    model: "Punto",
    colour: "yellow",
    year: "1998",
    },
    { 
    make: "Ford", 
    model: "Focus",
    colour: "silver",
    year: "2007",
    },
];

app.use(cors());

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.send('Cars API');
});

app.get('/cars', (req, res) => {
    return res.send(Object.values(cars));
});

app.post('/cars', (req, res) => {
    let newCar = req.body
    cars.push(newCar)
    console.log(req.body)
});

app.post('/cars', (req, res) => {
    let newCar = req.body
    cars.push(newCar)
    console.log(req.body)
});

app.listen(PORT, () => console.log(`Hello world app listening on port ${PORT}!`));