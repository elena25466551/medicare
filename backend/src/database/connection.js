const mongoose = require("mongoose")

const DBConnection = async () =>
{
        try {
                await mongoose.connect("mongodb://127.0.0.1:27017/Proyect");
                console.log("➔ | Conectado a la base datos");
        } catch (error) {
                console.log("Ocurrió un error al intentar conectar a la base de datos: " + error);
        }
}

module.exports = DBConnection;