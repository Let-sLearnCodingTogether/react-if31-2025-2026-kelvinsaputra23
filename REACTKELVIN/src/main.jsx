import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import "./assets/css/style.css"

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <div className=" bg-orange-500">
      welcome
    </div>
  </StrictMode>,
)
