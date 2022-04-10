import React from "react";

function Navbar() {
    return <nav>
        <div className='heading'>
            <p><a className="Elekrity" href="#">Elekrity</a></p>
        </div>
        <ul className='nav_links'>
            <li><a className='home' href='#'>Dashboard</a></li>
            <li><a className='about_us' href='#'>View Stats</a></li>
            <li><a className='contact_us' href='#'>About Us</a></li>
            <li><span>Welcome</span><a className='help' href='#'>User</a></li>
        </ul>
    </nav>
}

export default Navbar;