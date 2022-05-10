import { Routes, Route } from "react-router-dom";
import RegistrationForm from "../RegistrationForm";
import Login from "../Login";
import App from "../App";


function EndPoint() {
    return (
    <Routes>
        
        <Route path="/register" element={<RegistrationForm/>} />
        <Route path="/login" element={<Login />} /> 
        <Route path="*" element={<App />} />
    </Routes>
    )
}

export { EndPoint as Routes };