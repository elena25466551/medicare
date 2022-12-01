import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { useNavigate } from 'react-router-dom'

export default function Login() {

  const navigate = useNavigate();
  const [data, setData] = useState({
    userName: "",
    userPassword: ""
  })
  
  const myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
  const raw = JSON.stringify(data);
  const requestOptions = {
    method: 'POST',
    headers: myHeaders,
    redirect: 'follow',
    body: raw
  }

  function handleInputChange(event){
    setData({
      ...data,
      [event.target.name] : event.target.value
    });
  }

  async function handleSubmit(event) {
    event.preventDefault();
    const response = await fetch("http://localhost:4000/login", requestOptions)
    const dataToJson = await response.json();
    setData(dataToJson)
    navigate('/about')
    console.log(dataToJson)
  }
  return (
        <>
        <Navbar/>
        <div>
                <fieldset>
                  <form id="login-form" onSubmit={handleSubmit}>
                    <div className="mb-3">
                      <label htmlFor="UserInput-login" className="form-label">Nombre de usuario</label><br/>
                      <input onChange={handleInputChange} type="text" id="UserInput-login" aria-describedby="emailHelp" name='userName'/>
                    </div>
                    <div className="mb-3">
                      <label htmlFor="PasswordInput-login" className="form-label">Contraseña</label><br/>
                      <input  onChange={handleInputChange} type="password" id="PasswordInput-login" name='userPassword'></input>
                    </div>
                    <button type="submit" id='ButtonSubmit-login'>Enviar</button>
                  </form>
                </fieldset>
        </div>
        <Footer/>
        </>
  )
}
