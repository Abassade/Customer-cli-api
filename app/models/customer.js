const mongoose = require('mongoose');

// Customer Schema
const customerSchema = mongoose.Schema({
  firstname: String,
  lastname: String,
  phone: String,
  email: String
});

// Define and export
module.exports = mongoose.model('Customer', customerSchema);