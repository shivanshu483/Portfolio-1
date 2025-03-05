import React from "react";
import { Col, Row } from "react-bootstrap";


import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiPython,
  DiGit,
  DiJava,
} from "react-icons/di";
import { DiPostgresql } from "react-icons/di";
import {
  SiRedis,
  SiFirebase,
  SiNextdotjs,
  SiSolidity,
  SiPostgresql,
} from "react-icons/si";
import { SiMicrosoftexcel } from "react-icons/si";
import { TbBrandGolang } from "react-icons/tb";
import { SiPowerbi } from "react-icons/si";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <DiPostgresql />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiMicrosoftexcel />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPowerbi />
      </Col>
      
     
     
      
     
      <Col xs={4} md={2} className="tech-icons">
        <DiPython />
      </Col>
      
    </Row>
  );
}

export default Techstack;
