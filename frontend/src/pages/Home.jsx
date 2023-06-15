import React, { useEffect } from "react";
import { Container, Row, Col } from "reactstrap";

import "../styles/home.css";
import Subtitle from "../shared/Subtitle";
import SearchBar from "../shared/SearchBar";
import ServiceList from "../services/ServiceList";
import FeaturedToursList from "../components/Featured-Tour/FeaturedToursList";
import MasonryImagesGallery from "./../components/Images-Gallery/MasonryImagesGallery";
import Testimonials from "../components/Testimonial/Testimonials";
import Newsletter from "../shared/Newsletter";

import Erath from "../assets/images/Logo/Earth.png";
import ImgTraler from "../assets/images/Traler/landmark.jpg";
import VideoTraler from "../assets/images/Traler/halongBay.mp4";
import ImgTravel_Traler from "../assets/images/Traler/travel.jpg";
import ExperienceImg from "../assets/images/Experience/experience.png";
import { useDispatch, useSelector } from "react-redux";
import { getAllTour } from "../redux/actions/tour.tsx";

const Home = () => {
  const dispatch  = useDispatch()

  useEffect(() => {
    dispatch(getAllTour());
  }, [])
  return (
    <>
      {/* ============Trailer Section ============ */}
      <section>
        <Container>
          <Row>
            <Col lg="6">
              <div className="trailer__content">
                <div className="trailer__subtitle d-flex align-item-center">
                  <Subtitle subtitle={"Know before You Go"} />
                  <img src={Erath} alt="" />
                </div>
                <h1>
                  Traveling opens the door to create
                  <span className="highlight"> Memories</span>
                </h1>
                <p>
                  The company itself is a very smart company, adipsic developer.
                  He has chosen for us the pleasures that are more severe than
                  those pleasures, which are the most worthy pleasures, to
                  endure the distresses of the mind. I was born after being
                  released.
                </p>
              </div>
            </Col>
            <Col lg="2">
              <div className="home__img-box">
                <img src={ImgTraler} alt="" />
              </div>
            </Col>
            <Col lg="2">
              <div className="home__img-box mt-4">
                <video src={VideoTraler} alt="" controls />
              </div>
            </Col>
            <Col lg="2">
              <div className="home__img-box mt-5">
                <img src={ImgTravel_Traler} alt="" />
              </div>
            </Col>
            <SearchBar />
          </Row>
        </Container>
      </section>
      {/* ======================================== */}
      {/* ============ Home Section ============== */}

      <section>
        <Container>
          <Row>
            <Col lg="3">
              <h5 className="service__subtitle">What we serve</h5>
              <h2 className="service__title"> We offter our best services</h2>
            </Col>
            <ServiceList />
          </Row>
        </Container>
      </section>
      {/* ======================================== */}
      {/* ================== Featured tour section ============= */}
      <section>
        <Container>
          <Row>
            <Col lg="12" className="mb-5">
              <Subtitle subtitle={"Explore"} />
              <h2 className="featured__tour-title">Our featured tours</h2>
            </Col>
            <FeaturedToursList />
          </Row>
        </Container>
      </section>
      {/* ====================================================== */}

      {/* ================== Experience section ==================== */}

      <section>
        <Container>
          <Row>
            <Col lg="6">
              <div className="experience__content">
                <Subtitle subtitle={"Experience"} />
                <h2>
                  With our all experience <br /> we will serve you
                </h2>
                <p>
                  The company itself is a very smart company, adipsic developer.
                  <br /> He has chosen for us the pleasures that are more severe
                  than those pleasures
                </p>
              </div>
              <div className="counter__wrapper d-flex align-items-center gap-5">
                <div className="counter__box">
                  <span>12k+</span>
                  <h6>Successfull Trip</h6>
                </div>
                <div className="counter__box">
                  <span>2k+</span>
                  <h6>Regular clients Trip</h6>
                </div>
                <div className="counter__box">
                  <span>3+</span>
                  <h6>Year Experience</h6>
                </div>
              </div>
            </Col>
            <Col lg="6">
              <div className="experience__img">
                <img src={ExperienceImg} alt="" />
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      {/* ========================================================== */}

      {/* ===========gallery section ========== */}
      <section>
        <Container>
          <Row>
            <Col lg="12">
              <Subtitle subtitle={"Gallery"} />
              <h2 className="gallery__tilte">
                Visit our customer tour gallery
              </h2>
            </Col>
            <Col lg="12">
              <MasonryImagesGallery />
            </Col>
          </Row>
        </Container>
      </section>
      {/* ===================================== */}

      {/* ========Testimonial section ========== */}
      <section>
        <Container>
          <Row>
            <Col lg="12">
              <Subtitle subtitle={"Fans Love"} />
              <h2 className="testimonial__title">What our fans say about us</h2>
            </Col>
            <Col lg="12">
              <Testimonials />
            </Col>
          </Row>
        </Container>
      </section>
      {/* ====================================== */}
      <Newsletter />
    </>
  );
};
export default Home;
