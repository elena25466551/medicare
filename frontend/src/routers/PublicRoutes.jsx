import { Navigate } from 'react-router-dom'

export const PublicRoutes = ({children}) =>
{
        return true
                ? children
                : console.log("No es igual")
}