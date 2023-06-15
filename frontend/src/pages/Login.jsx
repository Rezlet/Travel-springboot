import React, { useEffect, useState } from "react";
import { Container, Row, Col, Button, Form, FormGroup } from "reactstrap";

import { useDispatch } from "react-redux";
import LoginImg from "../assets/images/Logo/Login_img.avif";
import avtImg from "../assets/images/Logo/user_img.png";
import { Link } from "react-router-dom";

import { useGoogleLogin } from "@react-oauth/google";
import { loadUser, loadUserGoogle } from "../redux/actions/users.tsx";
import "../styles/login.css";
import { toast } from "react-toastify";
const Login = () => {
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });
  const dispatch = useDispatch();
  const [user, setUser] = useState([]);

  const handlerChange = (e) => {
    setCredentials((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const handlerClick = (e) => {
    e.preventDefault();
  };

  const login = useGoogleLogin({
    onSuccess: (codeResponse) => {
      const now = Math.floor(Date.now() / 1000); // Lấy thời điểm hiện tại dưới dạng Unix Timestamp
      const expires = now + codeResponse.expires_in; // Tính toán thời điểm hết hạn
      const expires_str = new Date(expires * 1000);
      document.cookie = `token=${codeResponse.access_token}; expires=${expires_str}`;
      toast.success("You are login successful !!")
      setUser(codeResponse);
    },
    onError: (error) => console.log(),
  });

  useEffect(() => {
    if (user) {
      dispatch(loadUserGoogle());
      dispatch(loadUser());
    }
  }, [user]);

  return (
    <section>
      <Container>
        <Row>
          <Col lg="8" className="m-auto">
            <div className="login__container d-flex align-items-center justify-content-between">
              <div className="login__img">
                <img src={LoginImg} alt="" />
              </div>
              <div className="login__form">
                <div className="user">
                  <img src={avtImg} alt="" />
                </div>
                <h2>Login</h2>

                <Form onSubmit={handlerClick}>
                  <FormGroup>
                    <input
                      type="email"
                      placeholder="Email"
                      required
                      id="email"
                      onChange={handlerChange}
                    />
                  </FormGroup>
                  <FormGroup>
                    <input
                      type="password"
                      placeholder="Password"
                      required
                      id="password"
                      onChange={handlerChange}
                    />
                  </FormGroup>

                  <div className="options d-flex ">
                    <p className="check">
                      <input
                        className="checkbox"
                        type="checkbox"
                        placeholder={""}
                        pattern={"I arge"}
                      />
                      agree to remember
                    </p>
                    <p className="forgot__password align-items-center">
                      <Link to={"/forgot"}>Forgot Password</Link>
                    </p>
                  </div>
                  <Button
                    className="btn auth__btn secondary__btn "
                    type="submit"
                  >
                    Login
                  </Button>
                  <div className="d-flex align-items-center justify-content-center mt-3">
                    <Button
                      className="btn auth__btn secondary__btn "
                      type="submit"
                      onClick={() => login()}
                    >
                      Login With Google
                    </Button>
                  </div>
                </Form>
                <p>
                  Don't have an account?{" "}
                  <Link to={"/register"}>Create account</Link>
                </p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Login;
