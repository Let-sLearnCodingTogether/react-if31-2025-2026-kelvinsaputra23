import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import "./assets/css/style.css"

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <div className=" bg-orange-500">
      
      welcome
    </div>
  
    <div>
        <UserProfile/>

        <UserProfile 
        avatar = "https://avatar.iran.liara.run/public/29"
        username= "kelvin"
        email='test@email.com'

        />
        
      </div>

      
  </StrictMode>,
)
