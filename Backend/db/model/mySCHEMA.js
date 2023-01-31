const mongoose = require('mongoose');
const customer = new mongoose.Schema({
        firstname: {
                type: String,
                required: true
        },
        lastname: {
                type: String,
                required: true
        },
        email: {
                type: String,
                required: true,
                unique: [true ,'email already exits']
        },
        password: {
                type: String,
                required: true
        }
}
);
const customerData = mongoose.model('mycustomer', customer);
module.exports = customerData;