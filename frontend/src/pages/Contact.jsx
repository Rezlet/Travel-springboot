import React from "react";
import { Container, Row, Col } from "reactstrap";

const Contact = () => {
  return (
    <section>
      <Container>
        <Row>
          <Col>
            <div className="contact__name">
              <h2 className=" text-center align-items-center">
                Author:Le Anh Tuan - Ta Thach Loi
              </h2>

              <div className="contact__form">
                <h2 className="form__ui">
                  <i className="ri-facebook-fill"></i>
                  <h2 className="name__form">
                    đây là code phần contact**=== Giới thiệu phần bản thần của
                    lập trình viên
                  </h2>
                </h2>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Contact;
