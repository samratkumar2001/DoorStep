const mongoose = require('mongoose')
const DoorstepSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String,
})
const DoorstepModel = mongoose.model("employee",DoorstepSchema);
module.exports = DoorstepModel