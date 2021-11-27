import React from 'react'
import './DateBooking.css'
const DateBooking = (props) => {
    return (
        <>
            <div className="row">
                <div className="col-md-12">
                    <button type="button" className="btn btn-success mx-2 my-2 btn-block">Pilih Jam</button>
                </div>
            </div>
            <div className="d-flex justify-content-between flex-wrap">
                {
                    props.state.length != 0 ? (
                        props.state.map(jam => {
                            return (
                                <button onClick={() => props._setFormBooking(jam)} className={`btn btn-success mx-2 my-2 px-2 ${jam.status == "booked" ? 'disabled' : ''} `} style={{ width: '40px' }}>{jam.jam}</button>
                            )
                        })
                    ) : (
                        <div className="card text-white bg-danger ml-2 col-md-12" >
                            <div className="card-header text-center">Oopss</div>
                            <div className="card-body">
                                <h5 className="card-title text-center">Jadwal Tidak Tersedia</h5>
                            </div>
                        </div>
                    )
                }
            </div>
        </>
    )
}

export default DateBooking
