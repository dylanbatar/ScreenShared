const USER_MODEL = require('../models/user.model');
let userController = {}

userController.create = async(req,res)=>{
  let {username, email,password} = req.body;

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
  // USER_MODEL.find({email})
  // .then(( data ) => res.json({ok:tru e,data,message:'logged'}))
  // .catch(err=> res.json({ok:false,data:[],message:'Error'}))

  res.json({
    ok:true,
    data:"hola"
  })
}



module.exports = userController;