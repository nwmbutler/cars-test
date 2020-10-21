
const { Router } = require('express')
const router = new Router()

const cars = require('./cars.json')

router.get('/', (req, res) => {
    res.json(cars);
});

router.post('/', (req, res) => {
    const newCar = req.body
    cars.push(newCar);
    res.json(cars);
});

router.delete('/:id', (req, res) => {
    const { id } = req.params
    if (id) {
        cars.forEach((car, index) => {
            if (car.id == id) {
                cars.splice(index, 1)
            }
        })
        res.json(cars)
    }
})

module.exports = router