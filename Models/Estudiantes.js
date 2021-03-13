const mongoose = require('mongoose');
const EstudianteSchema = new mongoose.Schema({
    firstName: {type: String, required: true, unique: false},
    lastName: {type: String, required: true, unique: false},
    identificationCard: {type: Number, required: true, unique: true},
    email: {type: String, required: true, unique: true},
    cellphone: {type: Number, required: true, unique: true}
})

module.exports = mongoose.model('Estudiantes', EstudianteSchema)