import { NavLink } from "react-router-dom"
import "../css/Navbar.css"
export default function Navbar() {
    return (
        <div className="navbar">
            <div className="navbar-brand navbar-links"><NavLink to='/' end >Frozen Frames</NavLink></div>
            <div className="navbar-links">
                <NavLink to='/' end className="nav-link">Home</NavLink>
                <NavLink to='/posters' className="nav-link">Posters</NavLink>
                <NavLink to='/blog' className="nav-link">Blog</NavLink>
                <NavLink to='/bio' className="nav-link">Bio</NavLink>
            </div>
        </div>
    )
}