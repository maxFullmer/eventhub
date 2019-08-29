const mongoose = require("mongoose");

const eventSchema = mongoose.Schema({
    eventName: {
        type: String,
        required: true
    },
    eventDate: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: false
    },
    address: {
        type: Object,
        required: true,
        street: {
            type: String,
            required: true
        },
        city: {
            type: String,
            required: true 
        },
        state: {
            type: String,
            required: true
        },
        zip: {
            type: Number,
            required: true
        },
        lat: {
            type: Number,
            required: false
        },
        lng: {
            type: Number,
            required: false
        }
    },
    rsvpCount: {
        type: Number,
        required: false
    },
    category: {
        type: String,
        required: false
    }
})

module.exports = mongoose.model("event", eventSchema)