import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Card from '../components/Card/Card';
import DateBooking from '../components/DateBooking/DateBooking';
import MonthBooking from '../components/MonthBooking/MonthBooking';

const BookingPage = () => {
    const [state, setstate] = useState([])
    const [price, setprice] = useState([])
    const [button, setbutton] = useState(false)
    const [total_price, settotal_price] = useState(0)
    const [form, setForm] = useState({ bulan: '', tanggal: '', tahun: '' });

    const handleChange = (e) => {
        const{name,value} = e.target
        setForm({
            ...form,
            [name]: value
        })
    }
    const getTanggal = (tanggal) => {
        setForm({
            ...form, tanggal: tanggal
        },getTanggal_())
    }
    const getTanggal_ = () => {
        axios.get(`http://localhost:8000/futsal/ambiljadwal/1/${form.tahun}-${form.bulan}-${form.tanggal}`).then(res => {
            setstate(res.data.data)
        },console.log(state))
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
        getTanggal_()
    }

    const set_button = (button) => {
        setbutton(
            button = !button
        )
    }


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
export default BookingPage;