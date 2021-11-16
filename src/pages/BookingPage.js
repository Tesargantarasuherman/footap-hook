import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Card from '../components/Card/Card';
import DateBooking from '../components/DateBooking/DateBooking';
import MonthBooking from '../components/MonthBooking/MonthBooking';

export default function BookingPage() {
    const [state, setstate] = useState([])
    const [price, setprice] = useState([])
    const [button, setbutton] = useState(false)
    const [total_price, settotal_price] = useState(0)
    const [form, setForm] = useState({ bulan: '', tanggal: '' });

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        }, console.log(form))
    }
    const getTanggal = (tanggal) => {
        setForm({
            ...form, tanggal: tanggal
        }, getTanggal_() )
    }
    const getTanggal_ =()=> {
        console.log('jalan')
        axios.get(`http://localhost:8000/futsal/ambiljadwal/1/2021-${form.bulan}-${form.tanggal}`).then(res=>{
            setstate(res.data.data)
        })
    }
    const set_Price = (jam) => {
        let _price = {
            'nama': 'lorem',
            'jam': jam.jam
        }
        setprice([...price, _price])
        settotal_price(
            total_price + 1000
        )
        set_button(button)
    }

    const set_button = (button) => {
        setbutton(
            button = !button
        )
    }
    useEffect(async () => {

    }, [])

    return (
        <div className="row">
            <div className="col-md-4">
                <Card />
            </div>
            <div className="col-md-4">
                <MonthBooking getTanggal={getTanggal} handleChange={handleChange} />
            </div>
            <div className="col-md-4">
                <DateBooking set_Price={set_Price} state={state} />
            </div>
            <div className="col-md-12">
                <div className="card" style={{ width: '18rem' }}>
                    <div className="card-body">
                        <h5 className="card-title">Ringkasan Harga</h5>
                        {
                            price.map(price => {
                                return (
                                    <p className="card-text">Waktu Main Jam {price.jam}</p>
                                )
                            })
                        }
                        <hr />
                        <p>Total Harga</p>
                        <p>{total_price}</p>
                        <a href="#" className="btn btn-primary">Go somewhere</a>
                    </div>
                </div>

            </div>
        </div>
    )
}
