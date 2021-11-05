import React, { useState } from 'react'
import Card from '../components/Card/Card';
import MonthBooking from '../components/MonthBooking/MonthBooking';

export default function BookingPage() {
    const [state, setstate] = useState([])
    const [price, setprice] = useState(0)
    const [button, setbutton] = useState(false)
    const [editing, setEditing] = useState(false)
    const initialFormState = { id: null, name: '', username: '' }
    const [currentUser, setCurrentUser] = useState(initialFormState)

    const editRow = (jam) => {
        setEditing(true)
      
        setCurrentUser({ id: jam.id, status: jam.status, jam: jam.jam })
      }
      const updateUser = (id, updatedUser) => {
        setEditing(false)
      
        setUsers(users.map((user) => (user.id === id ? updatedUser : user)))
      }
    const set_Price =(button)=>{
        setprice(
            price + 1,
        )
        set_button(button)
    }
    const set_button =(button)=>{
        setbutton(
            button = !button
        )
    }
    const getTanggal = () => {
        setstate(
            [
                { 'id': 1, 'status': '', 'jam': 1 },
                { 'id': 2, 'status': '', 'jam': 2 },
                { 'id': 3, 'status': '', 'jam': 3 },
                { 'id': 4, 'status': '', 'jam': 4 },
                { 'id': 5, 'status': '', 'jam': 5 },
                { 'id': 6, 'status': '', 'jam': 6 },
                { 'id': 7, 'status': '', 'jam': 7 },
                { 'id': 8, 'status': '', 'jam': 8 },
                { 'id': 9, 'status': '', 'jam': 9 },
                { 'id': 10, 'status': '', 'jam': 10 },
                { 'id': 11, 'status': '', 'jam': 11 },
                { 'id': 12, 'status': '', 'jam': 12 },
                { 'id': 13, 'status': '', 'jam': 13 },
                { 'id': 14, 'status': '', 'jam': 14 },
                { 'id': 15, 'status': '', 'jam': 15 },
                { 'id': 16, 'status': '', 'jam': 16 },
                { 'id': 17, 'status': '', 'jam': 17 },
                { 'id': 18, 'status': '', 'jam': 18 },
                { 'id': 19, 'status': '', 'jam': 19 },
                { 'id': 20, 'status': '', 'jam': 20 },
                { 'id': 21, 'status': '', 'jam': 21 },
                { 'id': 22, 'status': '', 'jam': 22 },
                { 'id': 23, 'status': '', 'jam': 23 },
                { 'id': 24, 'status': '', 'jam': 24 },
            ]
        )
    }

    return (
        <div className="row">
            <div className="col-md-4">
                <Card />
            </div>
            <div className="col-md-4">
                <MonthBooking getTanggal={getTanggal} />
            </div>
            <div className="col-md-4">
                <div className="row">
                    <div className="col-md-12">
                        <button type="button" className="btn btn-success mx-2 my-2 btn-block">Pilih Jam</button>
                    </div>
                </div>
                <div className="d-flex justify-content-between flex-wrap">
                    {
                        state.map(jam => {
                            return (
                                <button type="button" onClick={()=>set_Price(button)} className="btn btn-success mx-2 my-2 px-2 " {...button ?'disabled' :''} style={{ width: '40px' }}>{jam.jam}</button>
                            )
                        })
                    }
                </div>
            </div>
            <div className="col-md-12">
                <div className="card" style={{ width: '18rem' }}>
                    <div className="card-body">
                        <h5 className="card-title">Ringkasan Harga</h5>
                        <p className="card-text">Total Waktu {price} Jam</p>
                        <hr/>
                        <p>Total Harga</p>
                        <a href="#" className="btn btn-primary">Go somewhere</a>
                    </div>
                </div>

            </div>
        </div>
    )
}
