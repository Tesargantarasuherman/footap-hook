import React from 'react'

export default function NavbarBottom() {
    return (
        <nav className="navbar navbar-dark bg-info navbar-expand d-md-none d-lg-none d-xl-none fixed-bottom">
            <ul className="navbar-nav nav-justified w-100">
                <li className="nav-item">
                    <a href="#" className="nav-link">Home</a>
                </li>
                <li className="nav-item">
                    <a href="#" className="nav-link">Cari</a>
                </li>
                <li className="nav-item">
                    <a href="#" className="nav-link">Add</a>
                </li>
                <li className="nav-item">
                    <a href="#" className="nav-link">Notif</a>
                </li>
                <li className="nav-item">
                    <a href="#" className="nav-link">Profile</a>
                </li>
            </ul>
        </nav>
    )
}
