import React from "react";
import { Col, Row } from "react-bootstrap";
import { SiJupyter } from "react-icons/si";
import { SiGooglecolab } from "react-icons/si";
import { SiMicrosoftexcel } from "react-icons/si";
import {
  SiVisualstudiocode,
  SiPostman,
  SiSlack,
  SiVercel,
  SiMacos,
} from "react-icons/si";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
      <SiJupyter />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <SiGooglecolab />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <SiMicrosoftexcel />
      </Col>
     
    </Row>
  );
}

export default Toolstack;
