import React, { useState } from 'react'
import './MonthBooking.css'

const MonthBooking =(props)=> {
    const [state, setstate] = useState([
        { 'id': 1, 'status': '', 'tanggal': 1 },
        { 'id': 2, 'status': '', 'tanggal': 2 },
        { 'id': 3, 'status': '', 'tanggal': 3 },
        { 'id': 4, 'status': '', 'tanggal': 4 },
        { 'id': 5, 'status': '', 'tanggal': 5 },
        { 'id': 6, 'status': '', 'tanggal': 6 },
        { 'id': 7, 'status': '', 'tanggal': 7 },
        { 'id': 8, 'status': '', 'tanggal': 8 },
        { 'id': 9, 'status': '', 'tanggal': 9 },
        { 'id': 10, 'status': '', 'tanggal': 10 },
        { 'id': 11, 'status': '', 'tanggal': 11 },
        { 'id': 12, 'status': '', 'tanggal': 12 },
        { 'id': 13, 'status': '', 'tanggal': 13 },
        { 'id': 14, 'status': '', 'tanggal': 14 },
        { 'id': 15, 'status': '', 'tanggal': 15 },
        { 'id': 16, 'status': '', 'tanggal': 16 },
        { 'id': 17, 'status': '', 'tanggal': 17 },
        { 'id': 18, 'status': '', 'tanggal': 18 },
        { 'id': 19, 'status': '', 'tanggal': 19 },
        { 'id': 20, 'status': '', 'tanggal': 20 },
        { 'id': 21, 'status': '', 'tanggal': 21 },
        { 'id': 22, 'status': '', 'tanggal': 22 },
        { 'id': 23, 'status': '', 'tanggal': 23 },
        { 'id': 24, 'status': '', 'tanggal': 24 },
        { 'id': 25, 'status': '', 'tanggal': 25 },
        { 'id': 26, 'status': '', 'tanggal': 26 },
        { 'id': 27, 'status': '', 'tanggal': 27 },
        { 'id': 28, 'status': '', 'tanggal': 28 },
        { 'id': 29, 'status': '', 'tanggal': 29 },
        { 'id': 30, 'status': '', 'tanggal': 30 },
        { 'id': 31, 'status': '', 'tanggal': 31 },
    ])
    return (
        <>
            <div className="row">
                <div className="col-md-6">
                    <div className="form-group my-2">
                        <select onChange={(e)=>props.handleChange(e)} className="form-control" name="bulan">
                            <option value={1}>Januari</option>
                            <option value={2}>Februari</option>
                            <option value={3}>Maret</option>
                            <option value={4}>April</option>
                            <option value={5}>Mei</option>
                            <option value={6}>Juni</option>
                            <option value={7}>Juli</option>
                            <option value={8}>Agustus</option>
                            <option value={9}>September</option>
                            <option value={10}>Oktober</option>
                            <option value={11}>November</option>
                            <option value={12} >Desember</option>
                        </select>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="form-group my-2">
                        <select onChange={(e)=>props.handleChange(e)} className="form-control" name="tahun">
                            <option value={2020}>2020</option>
                            <option value={2021}>2021</option>
                            <option value={2022}>2022</option>
                            <option value={2023}>2023</option>
                        </select>
                    </div>
                </div>
            </div>
            <div className="d-flex justify-content-between flex-wrap">
                {
                    state.map(tanggal => {
                        return (
                            <button onClick={() => props.getTanggal(tanggal.tanggal)} className={`btn button-month mx-2 my-2 px-2 ${tanggal.status == 'booked' ? 'booked' : ''} `} style={{ width: '40px' }}>{tanggal.tanggal}</button>
                        )
                    })
                }
            </div>
        </>
    )
}
export default MonthBooking