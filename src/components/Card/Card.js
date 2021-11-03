import React from 'react'
import { Link } from 'react-router-dom'
import './Card.css'

export default function Card() {
    return (
        <div className="card" style={{ width: '18rem' }}>
            <p className="card-title-price">Rp. 100,000</p>
            <div className="rating-card">
                <span class="fa fa-star checked"></span>
                <span class="fa fa-star checked"></span>
                <span class="fa fa-star checked"></span>
                <span class="fa fa-star"></span>
                <span class="fa fa-star"></span>
                <span>(98)</span>
            </div>
            <img className="card-img-top" src="https://images.unsplash.com/photo-1593642632823-8f785ba67e45?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1632&q=80" alt="Card image cap" />
            <div className="card-body">
                <p className="card-title">Futsal 72</p>
                <p className="card-text font-italic">Sukasari,Bandung</p>
                <Link to="/booking" className="btn btn-primary btn-sm btn-booking">Booking</Link>
            </div>
        </div>
    )
}
