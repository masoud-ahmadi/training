import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import "./app.css"
import HomeTemplate from "./Components/Template/HomeTemplate.jsx";
import ApiTemplate from "./Components/Template/ApiTemplate.jsx";
import Table from "./Components/UiPart/Table.jsx";

createRoot(document.getElementById('root')).render(<>
    {/*<ApiTemplate />*/}
    <Table/>
</>)
