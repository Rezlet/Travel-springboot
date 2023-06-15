import React from "react";
import { Card, CardBody } from "reactstrap";
import { Link } from "react-router-dom";
import { getPaymentUrl } from "../redux/actions/payment.tsx";
import "./tour-card.css";
import calculateAvgRating from "../utils/AvgRating";
import { useDispatch, useSelector } from "react-redux";
import { server } from "./server.tsx";

const TourCard = ({ tour }) => {
  const { user } = useSelector((state) => state.user);
  const { id, title, photo, price, city, featured, reviews, address } = tour;
  const { totalRating, avgRating } = calculateAvgRating(reviews);
  const dispatch = useDispatch();

  function handleBooking(money) {
    dispatch(getPaymentUrl(money,user.id,id ));
  }

  return (
    <div className="tour__card">
      <Card>
        <div className="tour__img">
          <Link to={`/tours/${id}`}>
            <img src={`${server}/${photo}`} alt="" />
            {featured && <span>Featured</span>}
          </Link>
        </div>
      </Card>
      <CardBody>
        <div className="card__top d-flex align-items-center justify-content-between">
          <span className="tour__location d-flex align-items-center gap-1">
            <i className="ri-map-pin-line"></i> {city} - {address}
          </span>
          <span className="tour__rating d-flex align-items-center gap-1">
            <i className="ri-star-fill"></i>{" "}
            {avgRating === 0 ? null : avgRating}
            {totalRating === 0 ? "Not rated" : <span>({reviews.length})</span>}
          </span>
        </div>

        <h5 className="tour__title">
          <Link to={`/tours/${id}`}>{title}</Link>
        </h5>
        <div className="card__bottom d-flex align-items-center justify-content-between">
          <h5>
            {price}K <span>/ Per person</span>
          </h5>
          {user ? (
            <button className="btn booking__btn">
              <Link onClick={() => handleBooking(price)}>Book Now</Link>
            </button>
          ) : (
            <button className="btn booking__btn">
              <Link to={`/tours/${id}`}>Book Now</Link>
            </button>
          )}
        </div>
      </CardBody>
    </div>
  );
};

export default TourCard;
