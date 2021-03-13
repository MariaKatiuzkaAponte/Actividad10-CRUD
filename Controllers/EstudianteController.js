const {countDocuments} = require('../Models/Estudiantes')
const Estudiantes = require('../Models/Estudiantes')

/* funcion para poder agregar estudiantes*/

exports.create = (req, res) => {
    const nEstudiantes = new Estudiantes ({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        identificationCard: req.body.identificationCard,
        email: req.body.email,
        cellphone: req.body.cellphone
    })
    nEstudiantes.save().then(
        data =>{
            res.send(data)
        }
    ) .catch(
        error =>{
            res.status(500).send({mesagge: 'Error al crear el estudiante'})
        }
    )
}

/* Funcion para actualizar a un estudiante */

exports.update = (req, res) => {
    const id = req.params.id
    if(!req.body){
        return res.status(400).send({message: "El cuerpo de la petición no puede ir vacio"})
    } 
    Estudiantes.findByIdAndUpdate(id, req.body, {useFindAndModify: false})
    .then((data) =>{
        if(!data){
            res.status(404).send({message: "No se puede puede modificar el estudiante"})
        } else {
            res.send({message: "El estudiante se ha actualizado"})
        }
    }) .catch ((err)=> {
        res.status(500). send({message: "Hubo un problema en el servisor"})

    })
}


/* Funcion para listar los estudiantes, es decir, que se muestren todos */

exports.findAll = (req, res) =>{  /* Funcion para encontrar todos los documentos */
    Estudiantes.find({ })
   
    .then((data)=>{
        res.send(data)
    }) .catch((err)=>{
        res.status(500).send({
            message: "Hubo un error en el servidor"
        })
    })
   }

   /* Funcion para eliminar un estudiante */

   exports.delete = (req,res) =>{
    const id = req.params.id 

    Estudiantes.findByIdAndRemove(id)
    .then ((data) =>{
        if(!data){
            res.status(404).send({message: "No se puede eliminar el documento porque no se encontró"})
        } else {
            res.send({message: "Se eliminó el usuario exitosamente"})
        }
    }) 
    .catch((error) =>{
        res.status(500).send({message: "Hay un problema en el servidor"})
    })
}
