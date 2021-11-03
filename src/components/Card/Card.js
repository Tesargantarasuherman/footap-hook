import React from 'react'
import './Card.css'

export default function Card() {
    return (
        <div className="card" style={{ width: '18rem' }}>
            <img className="card-img-top" src="https://images.unsplash.com/photo-1593642632823-8f785ba67e45?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1632&q=80" alt="Card image cap" />
            <div className="card-body">
                <p className="card-title">Card title</p>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" className="btn btn-primary btn-sm">Booking</a>
            </div>
        </div>
    )
}
