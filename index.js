const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser')
const {connectToDB} = require('./dbEstudiantes')


 const app = express()
 app.use(cors())
 app.use(bodyParser.json());
 {connectToDB()}  
 const EstudiantesRoutes = require('./Routes/EstudiantesRoutes')(app) 
                                                                                                                                                      



 app.listen(3000, () =>{
     console.log('¡Nos hemos conectado correctamente!')
 })