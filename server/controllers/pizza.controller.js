const pizzas = require('../pizzas') 

module.exports.pizzaController = {
    getPizzas: (req, res) => {
        try {
        res.json(pizzas)
        } catch(error) {
            error.message
        }
    }
}