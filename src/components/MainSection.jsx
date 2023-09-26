import { Routes, Route } from "react-router-dom"
import HomePage from "./HomePage"
import RegisterForm from "./RegisterForm"


const MainSection = () => {
    return (
        <div id="main-section">
            <Routes>
                <Route path="/" element ={<HomePage/>} />
                <Route path="/profile" />
                <Route path="/login" />
                <Route path="/register" element = {<RegisterForm/>} />
             </Routes>
        </div>
    )
}

export default MainSection;