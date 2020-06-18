const USER_MODEL = require('../models/user.model');
const { encriptarPassword , desencriptarPass} = require('../utils/bcrypt')
let userController = {}

userController.create = async(req,res)=>{
  let {username, email,password} = req.body;

  console.log(encriptarPassword(password,10))

  const NEW_USER = await new USER_MODEL({
    username,
    email,
    password
  })

  NEW_USER.save()
  .then(data => res.json({
    ok:true,
    data,
    message:'User create'
  }))
  .catch(err => res.json({
    ok:false,
    data:[],
    message:'Error at create user'
  }))
}

userController.login = async (req,res)=>{
  let {email,password} = req.body;
  
  USER_MODEL.findOne({email:email},(err,someOne)=>{

    console.log(someOne)

    if (!someOne) {
      return res.json({
        ok:true,
        data:[],
        message:'Correo no existe'
      })
    }

    if(!desencriptarPass(password,someOne.password)){
      return res.json({
        ok:false,
        data:[],
        message:'password incorrecto'
      })
    }

    return res.json({
      ok:true,
      data:someOne,
      message:'Estoy dentro'
    })

  })
}



module.exports = userController;