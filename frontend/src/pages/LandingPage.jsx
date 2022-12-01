import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import video from '../assets/video.mp4'

const LandingPage = () => 
{
  return(
        <>
        <Navbar/>
        <div>
                <div id='landing-text'>
                  <h1>Valoramos tu tiempo como si fuese nuestro</h1>
                  <p>Necesitas un turno sacalo desde tu casa con un solo click en nuestra pagina MEDICARE; te damos el mejor servicio medico podes elejir especialidad. Turnos al instante, "se terminaron las esperas". Al concurrir al turno el especialista te atendera de inmediato en la hora pactada. </p>
                </div>
                <div id='landing-separator'>
                  <div id='cards-container'>
                    <div className="row">
                      <div className="col">
                        <div className='card'>Card1</div>
                      </div>
                      <div className="col">
                        <div className='card'>Card2</div>
                      </div>
                      <div className="col">
                        <div className='card'>Card3</div>
                      </div>
                    </div>
                  </div>
                </div>
                <video id="landing-video" src={video} autoPlay loop muted></video>
        </div>
        <Footer/>
        </>
  )
}

export default LandingPage