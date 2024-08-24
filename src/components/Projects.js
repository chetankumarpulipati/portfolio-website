import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.jpeg";
import projImg2 from "../assets/img/project-img2.jpg";
import projImg3 from "../assets/img/project-img3.jpeg";
import projImg4 from "../assets/img/house-price.jpg";
import projImg5 from "../assets/img/Predictive-Maintenance.png"
import projImg6 from "../assets/img/sentiment-analysis.jpg";
import projImg7 from "../assets/img/weather-app-screenshot.png"
import projImg8 from "../assets/img/task-master.png";
import projImg9 from "../assets/img/ai-text-summarizer.png";
import projImg10 from "../assets/img/gdsc_mbu.jpeg";
import projImg11 from "../assets/img/notes-app.png";
import projImg12 from "../assets/img/food-order.jpg";
import colorSharp2 from "../assets/img/color-sharp2.jpg";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "WeatherWise",
      description: "A web application that fetches real-time weather data from a backend API and displays it in a user-friendly interface. Users can search for weather conditions by city or zip code.",
      imgUrl: projImg7,
    },
    {
      title: "TaskMaster",
      description: "A PWA that allows users to manage their to-do lists offline, with automatic syncing when they come back online. Features include push notifications, home screen installation, and offline support.",
      imgUrl: projImg8,
    },
    {
      title: "AI Text Summarization Web App",
      description: "AI Text Summarization Web Application is a text summarizing tool. It uses Hugging Face Inference API to summarize large text. Built with Node.js, Express.js, HTML, CSS, and JavaScript. Simplifies text comprehension, saving time and effort. User-friendly interface for easy text summarization.",
      imgUrl: projImg9,
    },
    {
      title: "House Price Prediction",
      description: "House price prediction uses historical data and machine learning algorithms to estimate the market value of properties. By analyzing factors like location, size, amenities, and market trends, these models can provide accurate predictions for buyers, sellers, and real estate professionals. This information is invaluable for making informed decisions in the real estate market.",
      imgUrl: projImg4,
    },
    {
      title: "Predictive Maintenance",
      description: "This project leverages the power of the Internet of Things (IoT) and machine learning to predict equipment failures before they happen. By constantly monitoring sensor data from machines (like temperature, vibration, and pressure), the model learns normal operating patterns.",
      imgUrl: projImg5,
    },
    {
      title: "Sentiment Analysis",
      description: "This project dives into the world of social media to uncover the true sentiments hidden within the deluge of online conversations. Focusing on platforms like Twitter, Facebook, and Instagram, the project utilizes cutting-edge Natural Language Processing (NLP) techniques to extract, process, and analyze text data from posts, comments, and reviews.",
      imgUrl: projImg6,
    },
    {
      title: "GDSC MBU",
      description: "This project is an Android application developed using Kotlin and Java. It utilizes Gradle for build automation and dependency management. The application is designed to provide a seamless user experience with a focus on performance and reliability. The project structure follows the standard Android architecture, ensuring maintainability and scalability.",
      imgUrl: projImg10,
    },
    {
      title: "Notes Taking App",
      description: "A React Native app for creating and managing notes, with features like note organization and integration, built using JavaScript and React Native for a seamless user experience.",
      imgUrl: projImg11,
    },
    {
      title: "Food Order App with React Native",
      description: "User can order the items veg or non veg and get the item delivered by choosing quantity and entering address.",
      imgUrl: projImg12,
    },
  ];

  return (
      <section className="project" id="projects">
        <Container>
          <Row>
            <Col size={12}>
              <TrackVisibility>
                {({ isVisible }) =>
                    <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                      <h2>Projects</h2>
                      <p>Here's a glimpse into my project portfolio.</p>
                      <Tab.Container id="projects-tabs" defaultActiveKey="first">
                        <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                          <Nav.Item>
                            <Nav.Link eventKey="first">Web Projects</Nav.Link>
                          </Nav.Item>
                          <Nav.Item>
                            <Nav.Link eventKey="second">Data Science Projects</Nav.Link>
                          </Nav.Item>
                          <Nav.Item>
                            <Nav.Link eventKey="third">Android Apps</Nav.Link>
                          </Nav.Item>
                        </Nav>
                        <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                          <Tab.Pane eventKey="first">
                            <Row>
                              {
                                projects.slice(0,3).map((project, index) => {
                                  return (
                                      <ProjectCard
                                          key={index}
                                          {...project}
                                      />
                                  )
                                })
                              }
                            </Row>
                          </Tab.Pane>
                          <Tab.Pane eventKey="second">
                            <Row>
                              {
                                projects.slice(3,6).map((project, index) => {
                                  return (
                                      <ProjectCard
                                          key={index}
                                          {...project}
                                      />
                                  )
                                })
                              }
                            </Row>
                          </Tab.Pane>
                          <Tab.Pane eventKey="third">
                            <Row>
                              {
                                projects.slice(6,9).map((project, index) => {
                                  return (
                                      <ProjectCard
                                          key={index}
                                          {...project}
                                      />
                                  )
                                })
                              }
                            </Row>
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