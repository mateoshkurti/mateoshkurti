import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg1,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg2,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg3,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg1,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg2,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg3,
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <h2>Relevant Experience</h2><br></br>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                      <Nav.Item>
                        <Nav.Link eventKey="first">Work Experience</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">Projects</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="third">Awards & Education</Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                      <Tab.Pane eventKey="first">
                        <h3>Software Engineering Senior Associate</h3>
                        <p><strong>KUBRA Data Transfer Ltd. • 2022 - Present</strong></p>
                        <ul>
                          <li>Led and actively participated in significant company-wide projects across the entire software development life cycle, resulting in the successful delivery of 4 new services in the past year. Contributed to software architecture, developed tools utilizing C# logic, and played a key role in roadmap and release planning for solutions.</li>

                          <li>Initiated and developed a reporting tool to provide management and team members with customizable, periodic reports on performance, areas of improvement, and work quality. Utilized a combination of C#, React.JS, and SQL programming to accomplish this task.</li>

                          <li>Oversaw the recruit learning cycle and provided support to all teams during escalations, tight project timelines, and resource constraints.</li>

                          <li>Maintained client communication channels and translated conversations into actionable ideas for tools, resulting in the development of several provided microservices.</li>
                        </ul>
                        <br />
                        <h3>Software Engineering Associate</h3>
                        <p><strong>KUBRA Data Transfer Ltd. • 2020 - 2022</strong></p>
                        <ul><li>Balanced programming and customer support responsibilities, consistently resolving over 20 tickets weekly. This involved investigating, analyzing, and rectifying issues promptly, ensuring smooth customer experiences. Maintained direct communication with clients via phone and email, offering on-call support after-hours.</li>

                          <li>Implemented code enhancements and application edits, including the creation of new functions and procedures to improve user experiences. During escalations, prioritized client satisfaction by providing empathetic support and effective solutions.</li>

                          <li>Authored knowledge base articles on newly introduced services, facilitating understanding and utilization for both internal teams and clients.</li>
                        </ul>
                      </Tab.Pane>
                      <Tab.Pane eventKey="second">
                        <h3>KUBRA iAssist</h3>
                        <p><strong>Solution Architect & Project Technical Lead</strong></p>
                        <p>This cloud-based application is designed to assist both internal and external users with all KUBRA products. It provides automated and after-hours support, eliminating the need for constant management. Additionally, it serves as a knowledge base, offering answers to product and procedural questions, and handling small-scale support tasks efficiently.</p>

                        <h3>KUBRA iMonitor</h3>
                        <p><strong>Initiator, Solution Architect & Lead</strong></p>
                        <p>This application, developed using C#, ASP.Net, and MS SQL, is automated and multi-threaded. It monitors all enterprise services and logs, with a particular emphasis on post-change monitoring. It provides extensive data and reports on recurring issues, facilitating transparency and enabling potential process improvements.</p>

                      </Tab.Pane>
                      <Tab.Pane eventKey="third">
                        <h3>Awards</h3>
                        <p>Judge's Choice • 2023<br />KUBRA, Hackathon</p>
                        <p>BEST MARKETING PLAN • 2019<br />Junior Achievement</p>
                        <br />
                        <h3>Education</h3>
                        <p>Diploma in Computer Systems Technician: Software Engineering • 2021<br />Sheridan College</p>

                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
