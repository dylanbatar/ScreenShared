const mongoose = require("mongoose");
const dotnet = require("dotenv");

dotnet.config();

mongoose
  .connect(process.env.URI_DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .then(() => console.log("Viaje intergalactico"))
  .catch((err) => console.log("Viaje intergalactico fallido"));

module.exports = mongoose;
