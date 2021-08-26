const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const workout = new Schema({
    day: {
        type: Date,
        default: new Date()
    },
    exercises: [
        {
            type : {
                type: String
            },
            name: {
                type: String
            },
            duration: {
                type: Number
            },
            weight: {
                type: Number
            },
            reps: {
                type: Number
            },
            sets: {
                type: Number
            },
            distance: {
                type: Number
            },
        }
    ]
})

const Workout = mongoose.model("Workout", workout)

module.exports = Workout