const mongoose = require('mongoose')

const pizzaSchema = new mongoose.Schema({
    id: {
        type: Number,
        unique: true,
        required: true
    },
    imageUrl: {
        type: String,
        required: true,
    },
    title: {
        type: String,
        unique: true,
        required: true
    },
    types: {
        type: [Number],
        required: true
    },
    sizes: {
        type: [Number],
        required: true,
    },
    price: {
        type: Number,
        required: true
    },
    category: {
        type: Number,
        required: true
    },
    rating: {
        type: Number,
        required: true
    }
})