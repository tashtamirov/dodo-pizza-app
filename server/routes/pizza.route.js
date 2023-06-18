const Router = require('express')
const { pizzaController } = require('../controllers/pizza.controller')

const router = Router()

router.get('/pizzas', pizzaController.getPizzas)

module.exports = router  

