import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import "./app.css"
import HomeTemplate from "./Components/Template/HomeTemplate.jsx";

createRoot(document.getElementById('root')).render(<>
    <HomeTemplate />
</>)
