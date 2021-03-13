module.exports = (app) =>{

    const estudiantes = require('../Controllers/EstudianteController')
    app.post('/estudiantes/create', estudiantes.create)
    app.put('/estudiantes/update/:id', estudiantes.update)
    app.get('/estudiantes/get', estudiantes.findAll)
    app.delete('/estudiantes/delete/:id', estudiantes.delete)
}