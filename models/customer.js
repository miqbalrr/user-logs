const mongoose = require('mongoose')

const customerSchema = new mongoose.Schema({
    customerId: { 
        type: mongoose.Schema.Types.ObjectId,
        required: true
    },
    locationId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'locations'
    },
    firstName: {
        type: String
    },
    lastName: {
        type: String
    },
    email: {
        type: String
    },
    phone: {
        type: String
    },
    createdDate: {
        type: Date
    }
    
})

module.exports = Customer = mongoose.model("customers", customerSchema)