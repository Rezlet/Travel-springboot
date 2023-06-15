import React from "react";
import { Col } from "reactstrap";

import ServiceCard from "./ServiceCard";

import WeatherImg from "../assets/images/Service/weather.png";
import GiuderImg from "../assets/images/Service/guide.png";
import CustomizationImg from "../assets/images/Service/customization.png";

const serviceData = [
  {
    imgUrl: WeatherImg,
    title: "Calculate Weather",
    desc: "The company itself is a very smart company, adipsic developer.",
  },
  {
    imgUrl: GiuderImg,
    title: "Best Tours Giude",
    desc: "The company itself is a very smart company, adipsic developer.",
  },
  {
    imgUrl: CustomizationImg,
    title: "Customization",
    desc: "The company itself is a very smart company, adipsic developer.",
  },
];

const ServiceList = () => {
  return (
    <>
      {serviceData.map((item, index) => (
        <Col lg="3" key={index}>
          <ServiceCard item={item} />
        </Col>
      ))}
    </>
  );
};

export default ServiceList;
