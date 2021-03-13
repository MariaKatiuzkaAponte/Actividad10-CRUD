const mongoose = require('mongoose')

const connectToDB = () => {
    mongoose.set('useCreateIndex', true)
    mongoose.connect('mongodb://localhost:27017/EstudiantesBit', {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }, (error) => {
        if (error) {
            console.log('Hay un error:', error)
        } else {                      
            console.log('Nos conectamos correctamente con la base de datos')
        }
    }
    )
}

module.exports = {connectToDB}