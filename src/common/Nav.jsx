import { Link } from "react-router-dom"
import "./Nav.css"

export default function Nav () {

    return (
        <>
            <nav className="nav-container">
                <button><Link to="/"> Home </Link></button>
                <button><Link to="/notes/new"> New Note </Link></button>
                <button><Link to="/about"> About Us </Link></button>
            </nav>
        </>
    )
}