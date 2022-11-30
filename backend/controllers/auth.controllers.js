const User = require("../src/models/User");
const bcrypt = require("bcrypt");

const ctrlAuth = {};

ctrlAuth.login = async (req, res) =>
{
        const { userName, userPassword } = req.body;

        try {
                const user = await User.findOne({userName});

                if (!user) {
                        return res.status(400).json({
                                msg: "Error al autenticarse - Usuario no encontrado"
                        })
                }

                if (!user.isActive) {
                        return res.status(400).json({
                                msg: "Error al autenticarse - Usuario inactivo"
                        })
                }

                const validatePassword = bcrypt.compareSync(userPassword, user.userPassword);

                if (!validatePassword) {
                        return res.status(400).json({
                                msg: "Error al autenticarse - Contraseña incorrecta"
                        })
                }
        } catch (error) {
                console.log(error);
                return res.status(400).json({
                        msg:"Error al iniciar sesión",
                        error: error.message
                })
        }
}