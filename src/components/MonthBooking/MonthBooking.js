import React, { useState } from 'react'
import './MonthBooking.css'
export default function MonthBooking() {
    const [state, setstate] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31])
    return (
        <>
            <div className="row">
                <div className="col-md-3">
                    <button type="button" className="btn btn-success mx-2 my-2">&lsaquo;</button>
                </div>
                <div className="col-md-6">
                    <button type="button" className="btn btn-success mx-2 my-2 btn-block">Desember</button>
                </div>
                <div className="col-md-3">
                    <button type="button" className="btn btn-success mx-2 my-2 float-right">&rsaquo;</button>
                </div>
            </div>
            <div className="d-flex justify-content-between flex-wrap">
                {
                    state.map(tanggal => {
                        return (
                            <button type="button" className="btn button-month mx-2 my-2 px-2  booked" style={{ width: '40px' }}>{tanggal}</button>
                        )
                    })
                }
            </div>
        </>
    )
}
