import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import "./assets/css/styles.css"
import Login from './pages/public/authentication/login/login'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Login />
  </StrictMode>
)