import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { PublicRoutes } from './PublicRoutes'
import LandingPage from '../pages/LandingPage'
import Login from '../pages/Login'
import Register from '../pages/Register'
import PageNotFound from '../pages/PageNotFound'

export const AppRouter = () => {
        return (
          <BrowserRouter>
            <Routes>
      
              <Route path='/' exact element={<LandingPage/>}/>

              {/* Rutas publicas */}
              <Route path="/login" element={
                <PublicRoutes>
                  <Login/>
                </PublicRoutes>
              }/>

              <Route path="/register" element={
                <PublicRoutes>
                  <Register/>
                </PublicRoutes>
              }/>
      
            </Routes>
          </BrowserRouter>
        )
      }