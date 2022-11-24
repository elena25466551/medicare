import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function Login() {
  return (
        <>
        <Navbar/>
        <div>
                <fieldset>
                  <form id="login-form">
                    <div className="mb-3">
                      <label htmlFor="UserInput-login" className="form-label">Nombre de usuario</label><br/>
                      <input type="email" id="UserInput-login" aria-describedby="emailHelp"/>
                    </div>
                    <div className="mb-3">
                      <label htmlFor="PasswordInput-login" className="form-label">Contraseña</label><br/>
                      <input type="password" id="PasswordInput-login"></input>
                    </div>
                    <button type="submit" id='ButtonSubmit-login'>Enviar</button>
                  </form>
                </fieldset>
        </div>
        <Footer/>
        </>
  )
}
