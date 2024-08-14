import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.jpeg";
import projImg2 from "../assets/img/project-img2.jpg";
import projImg3 from "../assets/img/project-img3.jpeg";
import projImg4 from "../assets/img/house-price.jpg";
import projImg5 from "../assets/img/Predictive-Maintenance.png"
import projImg6 from "../assets/img/sentiment-analysis.jpg";
import colorSharp2 from "../assets/img/color-sharp2.jpg";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "WeatherWise",
      description: "A web application that fetches real-time weather data from a backend API and displays it in a user-friendly interface. Users can search for weather conditions by city or zip code.",
      imgUrl: projImg1,
    },
    {
      title: "TaskMaster",
      description: "A PWA that allows users to manage their to-do lists offline, with automatic syncing when they come back online. Features include push notifications, home screen installation, and offline support.",
      imgUrl: projImg1,
    },
    {
      title: "Galaxy Explorer",
      description: "An interactive website that takes users on a journey through the solar system. Features include scrolling animations, parallax effects, and gamification elements like quizzes and rewards.",
      imgUrl: projImg1,
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
      title: "Fitness Tracker",
      description: "A fitness tracking app that monitors users' daily activity levels and provides personalized workout recommendations. The app includes features like step tracking, calorie counting, and workout logging.",
      imgUrl: projImg3,
    },
    {
      title: "Recipe Finder",
      description: "A recipe search app that helps users discover new dishes and plan meals. The app allows users to search for recipes by ingredients, cuisine, or dietary preferences, and save their favorite recipes for later.",
      imgUrl: projImg1,
    },
    {
      title: "Language Translator",
      description: "A language translation app that translates text and speech between multiple languages. The app uses machine learning algorithms to improve translation accuracy and provide real-time language support for users.",
      imgUrl: projImg2,
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