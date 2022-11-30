import React from 'react'
import { useContext } from 'react'
import { Navigate } from 'react-router-dom'
import { UserContext } from '../../context/UserContext'

export function PrivateRoutes({children}) {
        const {user} = useContext(AuthContext);
  return user.isLogged
                ? <Navigate to="/profile"/>
                : console.log("No inició sesión")
}
