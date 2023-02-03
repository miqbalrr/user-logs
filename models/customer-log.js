const mongoose = require('mongoose')

const customerLogSchema = new mongoose.Schema({
    customerId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'customers'
    },
    "type": {
        type: String,
    },
    text: {
        type: String,
    },
    date: {
        type: Date,
    }
}, { collection: 'customerLogs' } )

module.exports = mongoose.model("customerLogs", customerLogSchema)