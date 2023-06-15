import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "reactstrap";

import "../styles/tours.css";

import CommonSection from "../shared/CommonSection";
import TourCard from "../shared/TourCard";
import SearchBar from "../shared/SearchBar";
import Newsletter from "../shared/Newsletter";
import { getAllTour } from "../redux/actions/tour.tsx";
import { useDispatch, useSelector } from "react-redux";

const Tour = () => {
  const { tours, isLoading } = useSelector((state) => state.tour);
  const [currentPage, setCurrentPage] = useState(1);
  const [toursPerPage, setTourPerPage] = useState(8);
  const lastPostIndex = currentPage * toursPerPage;
  const firstPostIndex = lastPostIndex - toursPerPage;

  const totalPage = Math.ceil(tours.length / toursPerPage);
  console.log(lastPostIndex, firstPostIndex);

  const tourData = tours.slice(firstPostIndex, lastPostIndex);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllTour());
  }, []);

  return (
    <>
      <CommonSection title={"All Tour"} />
      <section>
        <Container>
          <Row>
            <SearchBar />
          </Row>
        </Container>
      </section>
      <section className="pt-0">
        <Container>
          <Row>
            {tourData?.map((tour) => (
              <Col lg="3" key={tour.id} className="pt-5">
                <TourCard tour={tour} />
              </Col>
            ))}

            <Col lg="12">
              <div className="pagination d-flex align-items-center justify-content-center mt-4 gap-3">
                {[...Array(totalPage).keys()].map((number) => (
                  <span
                    key={number}
                    onClick={() => setCurrentPage(number + 1)}
                    className={currentPage === number ? "active__page" : ""}
                  >
                    {number + 1}
                  </span>
                ))}
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <section className="pt-0">
        <Row>
          <Col lg="12">
            <Newsletter />
          </Col>
        </Row>
      </section>
    </>
  );
};

export default Tour;
