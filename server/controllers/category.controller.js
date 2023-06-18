const pizzas = require('../pizzas') 

module.exports.categoryController = {
    getPizzasByCategory: (req, res) => {
        try {
            const category = Number(req.params.category)
            const filteredPizzas = pizzas.filter(pizza => pizza.category === category)
                if (category === 0) {
                    res.json(pizzas)
                }
            res.json(filteredPizzas)
        } catch(error) {
            console.log(error.message)
        }
    }
}