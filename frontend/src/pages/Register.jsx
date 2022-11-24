import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function Register() {
  return (
        <>
        <Navbar/>
        <div>
                <fieldset>
                <form id="register-form">
                    <div className="mb-3">
                      <label htmlFor="UserInput-register" className="form-label">Nombre de usuario</label><br/>
                      <input type="text" id="UserInput-register" aria-describedby="emailHelp"/>
                      <select id="selectInput-register">
                        <option>Clínico</option>
                        <option>Traumatólogo</option>
                        <option>Dentista</option>
                        <option>Dermatólogo</option>
                        <option>Pediatra</option>
                      </select>
                    </div>
                    <div className="mb-3">
                      <label htmlFor="EmailInput-register" className="form-label">Correo elctrónico</label><br/>
                      <input type="email" id="EmailInput-register" aria-describedby="emailHelp"/>
                    </div>
                    <div className="mb-3">
                      <label htmlFor="PasswordInput-register" className="form-label">Contraseña</label><br/>
                      <input type="password" id="PasswordInput-register"></input>
                    </div>
                    <div className="mb-3">
                      <label htmlFor="PasswordInput-register" className="form-label">Confirmar Contraseña</label><br/>
                      <input type="password" id="PasswordInput-register"></input>
                    </div>  
                    <button type="submit" id='ButtonSubmit-register'>Enviar</button>
                  </form>
                </fieldset>
        </div>
        <Footer/>
        </>
  )
}