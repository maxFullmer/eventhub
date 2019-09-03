const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        validate: {
            validator: function (email){
                const validEmail = email.includes('@')
                return validEmail;
            }
        }
    },
    password: {
        type: String,
        required: true,
    },
    userEvents: {
        type: Array,
        required: false
    }
})

module.exports = mongoose.model("user", userSchema)