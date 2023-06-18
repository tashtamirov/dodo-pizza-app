const express = require("express");
const mongoose = require("mongoose");
const cors = require('cors');
const app = express();

app.use(express.json())
app.use(cors())
app.use(require('./routes/pizza.route'))
app.use(require('./routes/category.route'))

const start = async () => {
    try {
        await mongoose.connect('mongodb+srv://tashtamirov:Ncfuasusn9@cluster0.wdgsbkm.mongodb.net/pizzas')
        console.log('Успешное соединение с сервером MongoDB...')

        app.listen(3002, () => {
            console.log('Сервер успешно запущен: порт 3002')
        })
    } catch(error) {
        console.log(error)
    }
}

start()
