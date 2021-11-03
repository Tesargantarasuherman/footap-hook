import React from 'react'
import './FormCari.css'
export default function FormCari() {
    return (
        <form className="form-cari mb-2">
            <div className="form-row align-items-center">
                <div className="col-auto">
                    <label className="sr-only" htmlFor="inlineFormInput">Lokasi</label>
                    <input type="text" className="form-control form-control-sm form-color-hijau" id="inlineFormInput" placeholder="Lokasi" />
                </div>
                <div className="col-auto">
                    <label className="sr-only" htmlFor="inlineFormInputGroup">Tanggal</label>
                    <div className="input-group">
                        <div className="input-group-prepend">
                            <div className="input-group-text"><span class="lnr lnr-map-marker"></span></div>
                        </div>
                        <input type="date" className="form-control form-control-sm form-color-hijau" id="inlineFormInputGroup" placeholder="Tanggal" />
                    </div>
                </div>
                <div className="col-auto">
                    <button type="submit" className="btn btn-cari btn-sm">Cari Lokasi</button>
                </div>
            </div>
        </form>

    )
}
