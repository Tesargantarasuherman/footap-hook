import React from 'react'
import './NavbarBottom.css'

export default function NavbarBottom() {
    return (
        <nav className="navbar navbar-dark navbar-bottom navbar-expand my-2 fixed-bottom container">
            <ul className="navbar-nav nav-justified w-100">
                <li className="nav-item">
                    <a href="#" className="nav-link">Home</a>
                </li>
                <li className="nav-item">
                    <a href="#" className="nav-link">Cari</a>
                </li>
                <li className="nav-item">
                    <a href="#" className="nav-link"><span class="lnr lnr-home font-large"></span></a>
                </li>
                <li className="nav-item">
                    <a href="#" className="nav-link">Notif</a>
                </li>
                <li className="nav-item">
                    <a href="#" className="nav-link"><span class="lnr lnr-user font-large"></span></a>
                </li>
            </ul>
        </nav>
    )
}
