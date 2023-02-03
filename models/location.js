const mongoose = require('mongoose')

const locationSchema = new mongoose.Schema({
    locationId: { 
        type: mongoose.Schema.Types.ObjectId,
        required: true,
    },
    name: {
        type: String,
        required: true
    },
    createdDate: {
        type: Date
    }
})

module.exports = mongoose.model("locations", locationSchema)