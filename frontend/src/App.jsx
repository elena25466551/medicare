import './App.css'
import Navbar from './components/Navbar'
import { AppRouter } from './routers/AppRouter'
import { useEffect, useState } from 'react'

function App() {
  const [backendData, setBackendData] = useState([{}]);

  return(
    <>
      <AppRouter/>
    </>
  )
}

export default App
