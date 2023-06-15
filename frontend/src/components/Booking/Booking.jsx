import React, { useState } from "react";
import { Form, FormGroup, ListGroup, ListGroupItem, Button } from "reactstrap";

import "./booking.css";
import { useDispatch } from "react-redux";
import { getPaymentUrl } from "../../redux/actions/payment.tsx";
import { toast } from "react-toastify";

const Booking = ({ tours, avgRating }) => {
  const { price } = tours;

  const dispatch = useDispatch();

  const handleBooking = () => {
    console.log(credentials);
    if (
      credentials.email == "" ||
      credentials.fullname == "" ||
      credentials.phone == "" ||
      credentials.guestSize == 0 ||
      credentials.bookAt == ""
    ) {
      toast.error("Check your information!!");
      return; 
    }
    dispatch(getPaymentUrl(price));
  };

  const [credentials, setCredentials] = useState({
    userId: "01",
    email: "",
    fullname: "",
    phone: "",
    guestSize: 1,
    bookAt: "",
  });

  const handlerChange = (e) => {
    setCredentials((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const ServiceFee = 10;
  const totalAmount = Number(price);

  return (
    <div className="booking">
      <div
        className="booking__top d-flex align-items-center 
      justify-content-between"
      >
        <h3>
          ${price} <span>/per person</span>
        </h3>
        <span className="tour__rating d-flex align-items-center gap-1">
          <i className="ri-star-fill"></i> {avgRating === 0 ? null : avgRating}(
          0)
        </span>
      </div>

      {/* ======== Booking Form ====== */}
      <div className="booking__form">
        <h5>Information</h5>
        <Form className="booking_info-form" onSubmit={handleBooking}>
          <FormGroup>
            <input
              type="text"
              placeholder="Full Name"
              id="fullname"
              required
              onChange={handlerChange}
            />
          </FormGroup>
          <FormGroup>
            <input
              type="email"
              placeholder="Email"
              id="email"
              required
              onChange={handlerChange}
            />
          </FormGroup>
          <FormGroup>
            <input
              type="number"
              placeholder="Phone"
              id="phone"
              required
              onChange={handlerChange}
            />
          </FormGroup>
          <FormGroup className="d-flex align-content-center gap-3">
            <input
              type="date"
              placeholder=""
              id="bookAt"
              required
              onChange={handlerChange}
            />
            <input
              type="number"
              placeholder="Guest Size"
              id="guestSize"
              max={10}
              min={1}
              required
              onChange={handlerChange}
            />
          </FormGroup>
        </Form>
      </div>
      {/* ============================ */}
      {/* ============ Booking Bottom========= */}
      <div className="booking__bottom">
        <ListGroup>
          <ListGroupItem className="border-0 px-0">
            <h5 className="d-flex align-items-center gap-1">
              ${price} <i className="ri-close-line"></i> 1 person
            </h5>
            <span>${price}</span>
          </ListGroupItem>
          <ListGroupItem className="border-0 px-0">
            <h5>Service charge</h5>
            <span>${ServiceFee}</span>
          </ListGroupItem>
          <ListGroupItem className="border-0 px-0 total">
            <h5>Total</h5>
            <span>${totalAmount}</span>
          </ListGroupItem>
        </ListGroup>
        <Button onClick={handleBooking} className="btn primary__btn w-100 mt-4">
          Book Now
        </Button>
      </div>

      {/* ==================================== */}
    </div>
  );
};

export default Booking;
