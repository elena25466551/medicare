const jwt = require("jsonwebtoken");

const generateJWT = (uid) =>
{
        return new Promise((resolve, reject) =>{
                jwt.sign(uid, "" + process.env.SECRET, {
                        expiresIn: '5h'
                }, (error, token) => {
                        if (error){
                                console.log(error.message);
                                reject("No se pudo generar el token")
                        }
                        resolve(token);
                })
        })
}

module.exports = generateJWT;