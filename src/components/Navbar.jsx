import { Link } from "react-router-dom";
import { useState } from "react";

function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);
    return (
        <nav className="navbar ">
            <h2 className="logo">AI VIDEO INTERVIEW SYSYTEM</h2>

            <div
                className="menu-icon"
                onClick={() => setMenuOpen(!menuOpen)}
            >
                ☰
            </div>


            <ul className={menuOpen ? "nav-links active" : "nav-links"}>

                <li><Link to="/">Home</Link></li>
                <li><Link to="/setup">Setup</Link></li>
                <li><Link to="/interview">Interview</Link></li>
                <li><Link to="/analysis">Analysis</Link></li>
                <li><Link to="/report">Report</Link></li>
            </ul>

        </nav>
    );
}

export default Navbar;