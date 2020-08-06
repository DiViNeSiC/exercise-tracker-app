const mongoose = require('mongoose')

const exerciseSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    duration: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        required: true
    },
    creatorUsername: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('Exercise', exerciseSchema)