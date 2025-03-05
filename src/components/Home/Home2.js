import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
            As a motivated Data Analyst, I excel in data manipulation, statistical analysis, 
            and visualization using Python, Excel, and SQL. I am passionate about transforming data 
            into actionable insights to drive business decisions. My focus is on contributing to 
            data-driven strategies that enhance performance while continuously advancing my skills.
              <br />
              <br />I am fluent in classics like<i><b className="purple">Python, SQL, and Excel</b></i> , 
              with a strong interest in data analysis, business intelligence, 
              and data-driven decision-making.
              
              <br />
              <br />
              My field of interest lies in building robust data models, 
              performing in-depth statistical analysis, and creating impactful
               visualizations that drive business strategies.
              <i>
                <b className="purple">statistical analysis and creating impactful visualizations  </b> and
                also in areas related to{" "}
                <b className="purple">
                  Blockchain.
                </b>
              </i>
              <br />
              <br />
              Whenever possible, I also apply my passion for data analysis by utilizing tools 
              such as <b className="purple">Power BI</b> and <b className="purple">
                  {" "}
                  Python libraries like Pandas, NumPy,
                </b> and <b className="purple"> Matplotlib </b> 
              I am always eager to explore emerging data technologies and methodologies to enhance 
              the quality and efficiency of my analytical work." 
              <i>
                
              </i>
            
              <i>
                
              </i>
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/shivanshu483"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/shivanshu-sharma-465046237"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
