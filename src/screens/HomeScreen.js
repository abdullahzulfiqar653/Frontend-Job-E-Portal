import React, { useEffect } from "react";
import { HashLink } from "react-router-hash-link";
import { useDispatch, useSelector } from "react-redux";
import { Row, Col, Container } from "react-bootstrap";
import ProductCarousel from "../components/ProductCarousel";
import JobScreen from "./JobScreen";
import { checkAuthenticated } from "../actions/auth";

const HomeScreen = ({ match }) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(checkAuthenticated());
  }, []);

  return (
    <>
      <Container className="pb-4 px-0">
        <ProductCarousel />
        <Row className="our_services" style={{ marginTop: "80px" }}>
          <Col sm={12} lg={12} xl={12}>
            <JobScreen />
          </Col>
        </Row>
      </Container>
      <Row className="content-row p-0 m-0">
        <Col xs={10} md={9} className="p-0 m-0">
          <h1>
            Every Application Is Individual Field and <br />
            <span>Monitored under Lawyer Supervision.</span>
          </h1>
        </Col>
      </Row>
    </>
  );
};

export default HomeScreen;
