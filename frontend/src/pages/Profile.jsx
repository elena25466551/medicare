import React from "react";
import Calendar from 'react-calendar';
import Navbar from "../components/Navbar";
import 'react-calendar/dist/Calendar.css';

const Profile = () => {
        const Schedule = {
                scheduleAM: [
                        "8:00 AM a 8:30 AM",
                        "8:30 AM a 9:00 AM",
                        "9:30 AM a 10:00 AM",
                        "10:00 AM a 10:30 AM"
                ],
                schedulePM: [
                        "17:00 PM a 17:30 PM",
                        "17:30 PM a 18:00 PM",
                        "18:00 PM a 18:30 PM",
                        "18:30 PM a 19:00 PM"
                ]
        };

        function renderSchedule()
        {
                const scheduleList = [];
                
                Schedule.scheduleAM.forEach(schedule => {
                        scheduleList.push(
                                <div key={schedule} className="scheduleSet">
                                        <div className="scheduleInfo">
                                                {schedule}     
                                        </div>
                                        <div className="arrowDiv">
                                                <img className="arrowIcon" src="https://cdn-icons-png.flaticon.com/512/318/318476.png"/>
                                        </div>
                                </div>
                        )
                });
                        return(
                                <div>
                                        {scheduleList}
                                </div>
                        )
        }

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
                                <button id="calendarButton">Pedir turno</button>

                                <div id="scheduleContainer">
                                        {renderSchedule()}
                                </div>
                        </div>

                </div>
                </>
        )
}

export default Profile;