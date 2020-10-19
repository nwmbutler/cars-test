
const { Router } = require('express')
const router = new Router()

const cars = require('./cars.json')

router.get('/', (req, res) => {
    res.json(cars);
});

router.post('/', (req, res) => {
    const newCar = req.body
    cars.push(newCar)
    
});

  router.delete('/:id', (req, res) => {
    const { id } = req.body
    console.log(id)
    if (id) {
        forEach((car, index) => {
            if (car.id == id) {
                splice(index, 1)
            }
        })
        res.json(cars)
    }
})

module.exports = router