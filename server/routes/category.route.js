const Router = require('express')
const { categoryController } = require('../controllers/category.controller')

const router = Router()

router.get('/pizzas/category/:category', categoryController.getPizzasByCategory)

module.exports = router  

