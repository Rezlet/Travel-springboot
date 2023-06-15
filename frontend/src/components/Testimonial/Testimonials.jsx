import React from "react";
import Slider from "react-slick";

import avt from "../../assets/images/Customers/Crush.jpg";

const Testimonials = () => {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 1000,
    swipeToSlider: true,
    autoplaySpeed: 2000,
    slidesToShow: 3,
    // slidesToScroll: 1,

    responsive: [
      {
        bearkpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        bearkpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <Slider {...settings}>
      <div className="testimonails py-4 px-3">
        <p>
          The company itself is a very smart company, adipsic developer. He has
          chosen for us the pleasures that are more severe than those pleasures,
          which are the most worthy pleasures, to endure the distresses of the
          mind. I was born after being released.
        </p>
        <div className="d-flex align-items-center gap-4 mt-3">
          <img src={avt} className="w-25 h-25 rounded-2" alt="" />
          <div>
            <h6 className="mb-0 mt-3">John Doe</h6>
            <p>Customer</p>
          </div>
        </div>
      </div>
      <div className="testimonails py-4 px-3">
        <p>
          The company itself is a very smart company, adipsic developer. He has
          chosen for us the pleasures that are more severe than those pleasures,
          which are the most worthy pleasures, to endure the distresses of the
          mind. I was born after being released.
        </p>
        <div className="d-flex align-items-center gap-4 mt-3">
          <img src={avt} className="w-25 h-25 rounded-2" alt="" />
          <div>
            <h6 className="mb-0 mt-3">John Doe</h6>
            <p>Customer</p>
          </div>
        </div>
      </div>
      <div className="testimonails py-4 px-3">
        <p>
          The company itself is a very smart company, adipsic developer. He has
          chosen for us the pleasures that are more severe than those pleasures,
          which are the most worthy pleasures, to endure the distresses of the
          mind. I was born after being released.
        </p>
        <div className="d-flex align-items-center gap-4 mt-3">
          <img src={avt} className="w-25 h-25 rounded-2" alt="" />
          <div>
            <h6 className="mb-0 mt-3">John Doe</h6>
            <p>Customer</p>
          </div>
        </div>
      </div>
      <div className="testimonails py-4 px-3">
        <p>
          The company itself is a very smart company, adipsic developer. He has
          chosen for us the pleasures that are more severe than those pleasures,
          which are the most worthy pleasures, to endure the distresses of the
          mind. I was born after being released.
        </p>
        <div className="d-flex align-items-center gap-4 mt-3">
          <img src={avt} className="w-25 h-25 rounded-2" alt="" />
          <div>
            <h6 className="mb-0 mt-3">John Doe</h6>
            <p>Customer</p>
          </div>
        </div>
      </div>
    </Slider>
  );
};

export default Testimonials;
