import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import python1 from "../../Assets/Projects/python1.webp";
import python3 from "../../Assets/Projects/python3.webp";
import powerbi from "../../Assets/Projects/powerbi.webp";
import excel from "../../Assets/Projects/excel.webp";
import python2 from "../../Assets/Projects/python2.webp";
import sql from "../../Assets/Projects/sql.webp";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={excel}
              isBlog={false}
              title="Consumer Complaint Analysis - Excel"
              description="The project will analyze customer complaint data to identify the
top five issues and their frequency. It will also visualize monthly
trends in complaint volumes. This will help prioritize critical areas and guide timely intervention ."
              ghLink="https://docs.google.com/spreadsheets/d/1b4_EnIjwVwv0bJe4n2dmSpfu34CyBUnB/edit?usp=drive_link&ouid=116145153766944028426&rtpof=true&sd=true"
              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={sql}
              isBlog={false}
              title="Mobile Manufacture Data Analysis - SQL"
              description="Analyze customer demographics, regional distribution, and
spending patterns. Identify top-selling cellphone models and
trends driving their popularity. Examine geographic sales performance and highlight high-performing regions."
              ghLink="https://drive.google.com/file/d/1HqTZQpqpsmj71XL8wQ1NRBCEGJ4zKgae/view?usp=drive_link"
              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={powerbi}
              isBlog={false}
              title="E-Com Sales Analysis - Power BI"
              description="Analyze customer purchasing behavior to identify popular product categories. Determine the store type with the highest sales in value and quantity. Identify key customer demographics and their contribution to revenue."
              ghLink="https://drive.google.com/file/d/1_atlMrslDNrCWWakprE7JDRw6vwC-tQJ/view?usp=drive_link"
                          
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={python1}
              isBlog={false}
              title="Data importing, understanding, manipulation, analysis, and visualization in Python."
              description="Practice data importing and understanding in Python. Learn data manipulation and analysis techniques. Develop skills in data
visualization for clear insights."
              ghLink="https://drive.google.com/file/d/1Ttc1xs57xjE8im6O2YPUD7Z5Z
Zk-SMjz/view?usp=drive_link. "
              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={python2}
              isBlog={false}
              title="Python Data Visualization"
              description="Explore Python tools for visualizing data effectively. Learn
techniques for creating various types of charts and graphs. Analyze data patterns and insights through visual representation."
              ghLink="https://drive.google.com/file/d/1SU6gbp7dR_Bs8H7Aj2I7YUoSFx9yi8j7/view?usp=drive_link. "
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={python3}
              isBlog={false}
              title="End to End E-Commerce Analytics in Python"
              description="Develop a comprehensive e-commerce analytics solution using
Python. Analyze customer behavior, sales trends, and product
performance. Generate actionable insights to optimize e- commerce strategies. ."
              ghLink="https://drive.google.com/file/d/1Exz0qXYu9ADH8H0HbrdLFhgYrocWtn38/view?usp=drive_link"
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here 
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
