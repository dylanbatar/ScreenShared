const bcrypt = require('bcrypt');

const encriptarPassword = (pass,salt)=>{
  let password;

 return new Promise((resolve,reject)=>{
    bcrypt.hash(pass, salt, function(err, hash) {
      if(err){
        reject(err)
      }
    
      resolve(hast)
    });
  })
}

const desencriptarPass = (passReal,passWithHash) => {
  return bcrypt.compare(passReal, passWithHash, function(err, result) {
    if(err){
      throw new Error("Ocurrio un error al intentar desencriptar");
    }
    return result;
  });
}


module.exports = {encriptarPassword,desencriptarPass}