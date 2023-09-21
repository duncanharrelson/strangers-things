import { Routes, Route } from "react-router-dom"

const MainSection = () => {
    return (
        <div id="main-section">
            <Routes>
                <Route path="/" />
                <Route path="/profile" />
                <Route path="/login" />
                <Route path="/register" />
             </Routes>
        </div>
    )
}

export default MainSection;