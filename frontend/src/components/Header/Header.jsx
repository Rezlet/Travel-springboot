import React, { useRef, useEffect } from "react";
import { Container, Row, Button } from "reactstrap";
import { Link, NavLink } from "react-router-dom";

import logo from "../../assets/images/Logo/logo_travel.png";
import "./header.css";
import { useSelector } from "react-redux";
import { deleteCookie } from "../../shared/GlobalFunction.tsx";

//Menu Home
const nav__link = [
  {
    path: "/home",
    display: "Home",
  },
  {
    path: "/contact",
    display: "Contact",
  },
  {
    path: "/tours",
    display: "Tours",
  },
];

const Header = () => {
  const { user } = useSelector((state) => state.user);

  const handleLogout = () => {
    deleteCookie("token", "/");
    window.location.reload();
  };

  const headerRef = useRef(null);

  const StickHeaderFuc = () => {
    window.addEventListener("scroll", () => {
      try {
        // if (
        //   document.body.scrollTop > 80 ||
        //   document.documentElement.scrollTop > 80
        // ) {
        //   headerRef.current.classList.add("sticky__header");
        // } else {
        //   headerRef.current.classList.remove("sticky__header");
        // }
      } catch (error) {
        console.log(error.message);
      }
    });
  };

  useEffect(() => {
    StickHeaderFuc();
    return window.removeEventListener("scroll", StickHeaderFuc);
  });
  return (
    <header className="header" ref={headerRef}>
      <Container>
        <Row>
          <div
            className="nav__wrapper d-flex align-items-center 
          justify-content-between gap-4"
          >
            {/* ========== Logo ========== */}
            <div className="logo">
              <Link to={"/home"}>
                <img src={logo} alt="" />
              </Link>
            </div>
            {/* =========================== */}

            {/* ========== Menu =========== */}
            <div className="navigation">
              <ul className="menu d-flex align-items-center gap-5">
                {nav__link.map((item, index) => (
                  <li className="nav__items" key={index}>
                    <NavLink
                      to={item.path}
                      className={(NavClass) =>
                        NavClass.isActive ? "active__link" : ""
                      }
                    >
                      {item.display}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </div>
            {/* =========================== */}

            {/* =============Menu Right =========== */}
            <div className="nav__right d-flex align-items-center gap-4">
              {user ? (
                <div className="ms-4 nav__btns d-flex align-items-center gap-4  cursor-pointer">
                  <img
                    src={user.picture}
                    alt=""
                    className="border-circle"
                    style={{
                      width: "35px",
                      height: "35px",
                      borderRadius: "50%",
                    }}
                  />
                  <div className="d-flex flex-column gap-3">
                    <h5
                      className="limit-line-1 m-0"
                      style={{ fontSize: "12px" }}
                    >{`${user.given_name} ${user.family_name}`}</h5>
                  </div>
                  <button
                    style={{ backgroundColor: "#dc3545", color: "#fff" }}
                    className="btn danger_btn p-1"
                    onClick={handleLogout}
                  >
                    Log out
                  </button>
                </div>
              ) : (
                <div className="nav__btns d-flex align-items-center gap-4">
                  <Button className="btn secondary__btn ">
                    <Link to={"/login"}>Login</Link>
                  </Button>
                  <Button className="btn primary__btn">
                    <Link to={"/register"}>Register</Link>
                  </Button>
                </div>
              )}
              <span className="mobile__menu">
                <i className="ri-menu-fill"></i>
              </span>
            </div>
            {/* =================================== */}
          </div>
        </Row>
      </Container>
    </header>
  );
};
export default Header;
