const mongoose = require('mongoose');

mongoose.connect(process.env.URI_DB)
.then(()=>  console.log('Viaje intergalactico'))
.catch(err =>   console.log('Viaje intergalactico fallido'))