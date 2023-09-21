import { Link } from "react-router-dom"

const NavBar = () => {
    return (
        <div id="navbar">
            <Link to="/">Home</Link>
            <Link to="/profile">Profile</Link>
            <Link to="/login">Login</Link>
            <Link to="/register">Register</Link>
        </div>
    )
}

export default NavBar;