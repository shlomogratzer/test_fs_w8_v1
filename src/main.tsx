import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

const ob = {
  name:"Ariel",
  description:"ADASDA",
  status:"In Progress",
  priority:"Lows"
}
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
