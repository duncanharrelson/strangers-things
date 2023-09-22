import { Routes, Route } from "react-router-dom"

const MainSection = () => {
    return (
        <div id="main-section">
            <Routes>
                <Route path="/" />
                <Route path="/profile" />
                <Route path="/login" />
                <Route path="/register" />
                <Route path="/posts" />
             </Routes>
        </div>
    )
}

export default MainSection;