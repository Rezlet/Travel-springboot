import React, { useEffect, useRef, useState } from "react";
import { Container, Row, Col, Form, ListGroup } from "reactstrap";
import { useParams } from "react-router-dom";

import "../styles/tour-details.css";
import tourData from "../assets/data/tours";
import calculateAvgRating from "../utils/AvgRating";
import Booking from "../components/Booking/Booking";

import avatar from "../assets/images/Customers/Crush.jpg";
import { useDispatch, useSelector } from "react-redux";
import { server } from "../shared/server.tsx";
import { getTourById } from "../redux/actions/tour.tsx";
import { getPaymentUrl } from "../redux/actions/payment.tsx";
import { toast } from "react-toastify";

const TourDetails = () => {
  const { id } = useParams();
  const { tour, tours } = useSelector((state) => state.tour);
  // this is an static data later we will call our API and load tour data
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getTourById(id));
  }, []);

  const {
    photo,
    title,
    desc,
    price,
    reviews,
    city,
    address,
    distance,
    maxGroupSize,
  } = tour;

  const reviewsMsgRef = useRef("");

  const [tourRating, setTourRating] = useState(null);

  const submitHandler = (e) => {
    e.preventDefault();
    const reviewText = reviewsMsgRef.current.value;

    alert(`${reviewText}, ${tourRating}`);
  };



  const { totalRating, avgRating } = calculateAvgRating(reviews);

  //format date
  const Options = { day: "numeric", month: "long", year: "numeric" };
  return (
    <>
      <section>
        <Container>
          <Row>
            <Col lg="8">
              <div className="tour__content">
                <img src={`${server}/${photo}`} alt="" />
                <div className="tour__info">
                  <h2>{title}</h2>
                  <div className="d-flex align-items-center gap-5">
                    <span className="tour__rating d-flex align-items-center gap-1">
                      <i
                        className="ri-star-fill"
                        style={{ color: "var(--secondary-color)" }}
                      ></i>
                      {avgRating === 0 ? null : avgRating}
                      {/* 
                      {totalRating === 0 ? (
                        "Not rated"
                      ) : (
                        <span>({reviews.length})</span>
                      )} */}
                    </span>
                    <span>
                      <i className="ri-map-pin-fill"></i>
                      {address}
                    </span>
                  </div>

                  <div className="tour__extra-details">
                    <span>
                      <i className="ri-map-pin-2-line"></i> {city}
                    </span>
                    <span>
                      <i className="ri-money-dollar-circle-fill"></i>$ {price}
                      /per person
                    </span>
                    <span>
                      <i className="ri-map-pin-time-fill"></i>
                      {distance} K/m
                    </span>
                    <span>
                      <i className="ri-group-fill"></i> {maxGroupSize} people
                    </span>
                  </div>
                  <h5>Description</h5>
                  <p>{desc}</p>
                </div>

                <div className="tour__reviews mt-4">
                  {/* <h4>Reviews ({reviews.length} review) </h4> */}

                  <Form onSubmit={submitHandler}>
                    <div className="d-flex align-items-center gap-3 mb-4 rating__group">
                      <span onClick={() => setTourRating(1)}>
                        1 <i className="ri-star-fill"></i>
                      </span>
                      <span onClick={() => setTourRating(2)}>
                        2 <i className="ri-star-fill"></i>
                      </span>
                      <span onClick={() => setTourRating(3)}>
                        3 <i className="ri-star-fill"></i>
                      </span>
                      <span onClick={() => setTourRating(4)}>
                        4 <i className="ri-star-fill"></i>
                      </span>
                      <span onClick={() => setTourRating(5)}>
                        5 <i className="ri-star-fill"></i>
                      </span>
                    </div>
                    <div className="reviews__input">
                      <input
                        type="text"
                        placeholder="share your thoughts"
                        ref={reviewsMsgRef}
                        required
                      />
                      <button onClick={() => {toast.success("thanh cong ")}} className="btn primary__btn" type="submit">
                        Submit
                      </button>
                    </div>
                  </Form>

                  <ListGroup className="user__reviews">
                    {reviews?.map((reviews, index) => (
                      <div className="reviews__item" key={index}>
                        <img src={avatar} alt="" />

                        <div className="w-100">
                          <div
                            className="d-flex align-items-center 
                          justify-content-between"
                          >
                            <div>
                              <h5>Nguyễn Quỳnh Như</h5>
                              <p>
                                {new Date("07-22-2023").toLocaleDateString(
                                  "en-UK",
                                  Options
                                )}
                              </p>
                            </div>
                            <span className="d-flex align-items-center">
                              5 <i className="ri-star-fill"></i>
                            </span>
                          </div>
                          <h6>Amazing Tours</h6>
                        </div>
                      </div>
                    ))}
                  </ListGroup>
                </div>
              </div>
            </Col>
            {/* Booking */}
            <Col lg="4">
              <Booking tours={tour} avgRating={avgRating} />
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default TourDetails;
