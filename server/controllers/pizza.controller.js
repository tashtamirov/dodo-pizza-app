const pizzas = require('../pizzas') 

module.exports.pizzaController = {
    getPizzas: (req, res) => {
        try {
            const page = parseInt(req.query.page) || 1;
            const limit = 4;
            const startIndex = (page - 1) * limit;
            const endIndex = page * limit;
            const slicedPizzas = pizzas.slice(startIndex, endIndex);

            res.json(slicedPizzas);

        } catch(error) {
            error.message
        }
    }
}