import React from "react";
import Calendar from 'react-calendar';
import Navbar from "../components/Navbar";
import 'react-calendar/dist/Calendar.css';

const Profile = () => {
        return(
                <>
                <Navbar/>
                <div>
                        <img id="profileBanner"/>
                        <div id="profileData">
                                <img id="userAvatar" src="https://cdn-icons-png.flaticon.com/512/149/149071.png"/>
                                <h2>Nombre del usuario</h2>
                                <h3 id="specialText">Especialidad</h3>
                        </div>
                        <div>
                                <Calendar id="profileCalendar"/>
                                <button id="calendarButton" type="button" data-toggle="modal" data-target="#exampleModal">
                                 Dar turno
                                </button>
                        </div>
                        
                        <div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                <div className="modal-dialog" role="document">
                                        <div className="modal-content">
                                                <div className="modal-header">
                                                        <h5 className="modal-title" id="exampleModalLabel">Título</h5>
                                                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                                        <span aria-hidden="true">&times;</span>
                                                        </button>
                                                </div>
                                                <div className="modal-body">
                                                        ...
                                                </div>
                                                <div className="modal-footer">
                                                        <button type="button" className="btn btn-secondary" data-dismiss="modal">Cerrar</button>
                                                        <button type="button" className="btn btn-primary">Guardar</button>
                                                </div>
                                        </div>
                                </div>
                        </div>

                </div>
                </>
        )
}

export default Profile;