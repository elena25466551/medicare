const express = require('express');
const app = express();
app.use(express.json());
const cors = require("cors");

const DBConnection = require('./src/database/connection')
DBConnection();

app.use(cors());

// Rutas
app.use(require("./routes/user.routes"));

const port = 4000;
app.listen(port, () => console.log(`➔ | Servidor escuchando en el puerto ${port}`));