import React from 'react'
import './Navbar.css'

function Navbar() {
    return (
            <nav className="navbar navbar-expand-lg navbar-light bg-light mb-2 mt-2 color-navbar border-radius-navbar">
                <a className="navbar-brand font-navbar font-weight-bold" href="#">Footapp</a>
                {/* <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon" />
                </button> */}
                {/* <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item active">
                            <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
                        </li>
                    </ul>
                </div> */}
            </nav>
    )
}

export default Navbar
