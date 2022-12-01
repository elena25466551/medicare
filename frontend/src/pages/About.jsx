import React from 'react'
import { Link } from 'react-router-dom'

const About = () => {
  const [profesionales, setProfesionales] = React.useState([])
  const Traerprofesionales = async () => {
    const profesionales = await fetch('http://localhost:4000/users')
    if (!profesionales.ok) {
      setError("no se pudo traer los profesionales")
      return "no se pudo traer los profesionales"
    }
    console.log(profesionales)
    const profesionalesArray = await profesionales.json();
    console.log(profesionalesArray)
    setProfesionales([...profesionalesArray.Users])

    return profesionalesArray
  }
  React.useEffect(() => {
    Traerprofesionales()
  }, [])
  {

    return (
      <>
        <div className="container">
        <div className="row">
        {profesionales && profesionales.map((profesional) => {
          if (profesional.userSpecialty.length > 0) {
            return (
              <div className="profileData col-12 col-md-6 col-lg-3 mx-auto mx-md-2 my-2" key={profesional._id}>
                <Link to="/profile"><img className="userAvatar" src="https://cdn-icons-png.flaticon.com/512/149/149071.png" /></Link>
                <h2>{profesional?.userName}</h2>
                <h3 className="specialText">{profesional?.userSpecialty}</h3>
              </div>
            )
          }
        })}
        </div>
        </div>


      </>

    )
  }

  return (

    <div>
      <img id="profileBanner" />
      {especialista}
    </div>

  )
}
export default About;


