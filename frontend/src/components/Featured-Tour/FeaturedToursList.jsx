import React from "react";
import { Col } from "reactstrap";

import TourCard from "../../shared/TourCard";
import tourData from "../../assets/data/tours";
import { useSelector } from "react-redux";

const FeaturedToursList = () => {
  const { tours } = useSelector((state) => state.tour)
  
  return (
    <>
      {tours.map((tour) => (
        <Col lg="3" className="mb-4" key={tour.id}>
          <TourCard tour={tour} />
        </Col>
      ))}
    </>
  );
};

export default FeaturedToursList;
