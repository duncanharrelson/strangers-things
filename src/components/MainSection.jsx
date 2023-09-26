import { Routes, Route } from "react-router-dom"
import HomePage from "./HomePage"
import RegisterForm from "./RegisterForm"
import LoginForm from "./LoginForm"
import UserProfile from "./UserProfile"
const MainSection = () => {
    return (
        <div id="main-section">
            <Routes>
                <Route path="/" element ={<HomePage/>} />
                <Route path="/profile" element = {<UserProfile />}/>
                <Route path="/login" element={<LoginForm/>}/>
                <Route path="/register" element = {<RegisterForm/>} />
                <Route path="/posts" />
             </Routes>
        </div>
    )
}

export default MainSection;