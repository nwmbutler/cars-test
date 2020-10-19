const express = require('express')
const bodyParser = require('body-parser');
const router = express.Router()
const cors = require('cors');

const app = express();
const PORT = 3000;

let cars = [
   { 
    id: 1,
    make: "Fiat", 
    model: "Punto",
    colour: "yellow",
    year: "1998",
    },
    { 
    id: 2,
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

  app.delete('/cars/:id', (req, res) => {
    const { id } = req.body
    console.log(id)
    if (id) {
        cars.forEach((car, index) => {
            if (car.id === id) {
                cars.splice(index, 1)
            }
        })
        res.json(cars)
    }
})


app.listen(PORT, () => console.log(`Hello world app listening on port ${PORT}!`));