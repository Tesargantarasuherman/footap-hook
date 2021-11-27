import axios from "axios";
import React, { useEffect, useState } from "react";
import Card from "../components/Card/Card";
import DateBooking from "../components/DateBooking/DateBooking";
import MonthBooking from "../components/MonthBooking/MonthBooking";
import { Base_URL } from "../utils/BaseUrl";

const BookingPage = () => {
  const [state, setstate] = useState([]);
  const [price, setprice] = useState([]);
  const [total_price, settotal_price] = useState(0);
  const [form, setForm] = useState({ bulan: "", tanggal: "", tahun: "" });
  const [formBooking, setFormBooking] = useState({ tanggal: "", jam: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm(
      {
        ...form,
        [name]: value,
      },
      console.log(form)
    );
  };
  const getTanggal = (tanggal) => {
    setForm(
      {
        ...form,
        tanggal: tanggal,
      },
      getTanggal_()
    );
  };
  const getTanggal_ = () => {
    axios
      .get(
        `${Base_URL}/futsal/ambiljadwal/1/${form.tahun}-${form.bulan}-${form.tanggal}`
      )
      .then((res) => {
        setstate(res.data.data);
      }, console.log(state));
  };


  const _setFormBooking = (jam) => {
      let jam_booking = jam.jam
    setFormBooking(
      {
        ...formBooking,
        tanggal: `${form.tahun}-${form.bulan}-${form.tanggal}`,
        jam: jam_booking,
      },
      axios
        .post(`http://localhost:8000/futsal/tambahkeranjang/1/1`, formBooking)
        .then((res) => {
          console.log(res);
        })
    );
  };

  return (
    <div className="row">
      <div className="col-md-4">
        <Card />
      </div>
      <div className="col-md-4">
        <MonthBooking getTanggal={getTanggal} handleChange={handleChange} />
      </div>
      <div className="col-md-4">
        <DateBooking _setFormBooking={_setFormBooking} state={state} />
      </div>
    </div>
  );
};
export default BookingPage;
