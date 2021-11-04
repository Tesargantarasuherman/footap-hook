import React, { useState } from 'react'
import './MonthBooking.css'
export default function MonthBooking({getTanggal}) {
    const [state, setstate] = useState([
        { 'id':1,'status': 'booked', 'tanggal': 1 },
        { 'id':2,'status': '', 'tanggal': 2 },
        { 'id':3,'status': '', 'tanggal': 3 },
        { 'id':4,'status': 'booked', 'tanggal': 4 },
        { 'id':5,'status': 'booked', 'tanggal': 5 },
        { 'id':6,'status': '', 'tanggal': 6 },
        { 'id':7,'status': 'booked', 'tanggal': 7 },
        { 'id':8,'status': 'booked', 'tanggal': 8 },
        { 'id':9,'status': 'booked', 'tanggal': 9 },
        { 'id':10,'status': 'booked', 'tanggal': 10 },
        { 'id':11,'status': 'booked', 'tanggal': 11},
        { 'id':12,'status': 'booked', 'tanggal': 12 },
        { 'id':13,'status': 'booked', 'tanggal': 13 },
        { 'id':14,'status': 'booked', 'tanggal': 14},
        { 'id':15,'status': 'booked', 'tanggal': 15},
        { 'id':16,'status': 'booked', 'tanggal': 16},
        { 'id':17,'status': 'booked', 'tanggal': 17},
        { 'id':18,'status': 'booked', 'tanggal': 18},
        { 'id':19,'status': 'booked', 'tanggal': 19},
        { 'id':20,'status': 'booked', 'tanggal': 20},
        { 'id':21,'status': 'booked', 'tanggal': 21},
        { 'id':22,'status': 'booked', 'tanggal': 22},
        { 'id':23,'status': 'booked', 'tanggal': 23},
        { 'id':24,'status': 'booked', 'tanggal': 24},
        { 'id':25,'status': 'booked', 'tanggal': 25},
        { 'id':26,'status': 'booked', 'tanggal': 26},
        { 'id':27,'status': 'booked', 'tanggal': 27},
        { 'id':28,'status': 'booked', 'tanggal': 28},
        { 'id':29,'status': 'booked', 'tanggal': 29},
        { 'id':30,'status': 'booked', 'tanggal': 30},
        { 'id':31,'status': 'booked', 'tanggal': 31},
    ])
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
                            <button type="button" onClick={getTanggal} className={`btn button-month mx-2 my-2 px-2 ${tanggal.status =='booked' ? 'booked':''} `} style={{ width: '40px' }}>{tanggal.tanggal}</button>
                        )
                    })
                }
            </div>
        </>
    )
}