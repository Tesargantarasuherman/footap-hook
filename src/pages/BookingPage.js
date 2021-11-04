import React, { useState } from 'react'
import Card from '../components/Card/Card';
import MonthBooking from '../components/MonthBooking/MonthBooking';

export default function BookingPage() {
    const [state, setstate] = useState([])

    const getTanggal =()=>{
        setstate(
            [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24]
        )
    }

    return (
        <div className="row">
            <div className="col-md-4">
                <Card />
            </div>
            <div className="col-md-4">
                <MonthBooking getTanggal={getTanggal}/>
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
                                <button type="button" className="btn btn-success mx-2 my-2 px-2 booked" style={{width:'40px'}}>{jam}</button>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}
