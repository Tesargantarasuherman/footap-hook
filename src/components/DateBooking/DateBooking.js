import React from 'react'
import './DateBooking.css'
function DateBooking(props) {
    return (
        <>
            <div className="row">
                <div className="col-md-12">
                    <button type="button" className="btn btn-success mx-2 my-2 btn-block">Pilih Jam</button>
                </div>
            </div>
            <div className="d-flex justify-content-between flex-wrap">
                {
                    props.state.map(jam => {
                        return (
                            <button type="button" onClick={() => props.set_Price(jam)} className={`btn btn-success mx-2 my-2 px-2 ${jam.status == "booked" ? 'disabled' : ''} `} style={{ width: '40px' }}>{jam.jam}</button>
                        )
                    })
                }
            </div>
        </>
    )
}

export default DateBooking
