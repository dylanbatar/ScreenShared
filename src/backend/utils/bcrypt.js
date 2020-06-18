const bcrypt = require("bcrypt");

const encriptarPassword = (pass, salt) => {
  return new Promise((resolve, reject) => {
    bcrypt.hash(pass, salt, function (err, hash) {
      if (err) {
        reject(err);
      }
      resolve(hash);
    });
  });
};

const desencriptarPass = (passReal, passWithHash) => {
  return new Promise((resolve, reject) => {
    bcrypt.compare(passReal, passWithHash, function (err, result) {
      if (err) {
        reject(err)
      }
      resolve(result)
    });
  });
};

module.exports = { encriptarPassword, desencriptarPass };
