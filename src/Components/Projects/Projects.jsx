import React from "react";
import { FaGithub, FaLink, FaNodeJs } from "react-icons/fa";
import {
  ProjectDiv,
  Row,
  ServiceBox,
  ServiceBoxHeader,
  ServiceBoxP,
  A,
  BoxDiv,
} from "./Styles";
import { Container, Common, H1 } from "../../SharedStyles/SharedStyles";
import { FaHtml5, FaReact, FaJs, FaCss3 } from "react-icons/fa";
import { SiMongodb, SiRedux } from "react-icons/si";
const Projects = () => {
  const projects = [
    
    {
      id: 2,
      project_name: "apollo farmacy",
      image: "/project_images/project-1.png",
      project_desc:
        "Apollo 24|7 is an integrated platform that stores all health records being generated physically  across the Apollo ecosystem for each consumer on the app.",
      deploy_link: "https://quirky-neumann-18c833.netlify.app",
      repo_link: "https://github.com/SakethReddy1111/Apollo-247",
      tech_stack: [
        
        <FaJs />,
        <FaHtml5 />,
        <FaCss3 />,
      ],
    },
 
    {
      id: 3,
      project_name: "fragrance outnet",
      image: "/project_images/project-2.png",
      project_desc:
        "A web application to shop for top brand perfumes. we have experienced our second team project in Masai School on the fragranceoutlet.com  website clone.",
      deploy_link: "https://fragrance-outlet-mastered.netlify.app",
      repo_link: "https://github.com/Pranjal7777/Fragranceoutlet",
      tech_stack: [
        <SiMongodb />,
        <FaNodeJs />,
        <FaReact />,
        <FaNodeJs />,
        <FaHtml5 />,
        <FaCss3 />,
        <FaJs />,
      ],
    },
    {
      id: 4,
      project_name: "food website",
      image: "/project_images/project-3.png",
      project_desc:
        " An E-commerce food website online delvery as Quick.",
      deploy_link: "https://new-food-website.vercel.app/",
      repo_link: "https://github.com/saikiran11461/new_food-website",
      tech_stack: [
        <FaHtml5 />,
        <FaCss3 />,
        <FaJs />,
       
      ],
    },
    {
      id: 5,
      project_name: "Notes app",
      image: "/project_images/project-4.png",
      project_desc:
        "created a Basic Sticky Notes app. Built using HTML, CSS and JavaScript. ",
      deploy_link: "https://new-sticky-notes.vercel.app/",
      repo_link: "https://github.com/saikiran11461/new_sticky-notes",
      tech_stack: [<FaHtml5 />, <FaCss3 />, <FaJs />],
    },
    {
      id: 6,
      project_name: "Movies app",
      image: "/project_images/project-9.png",
      project_desc:
        "A basic Movies app shows movies data. Built using HTML, CSS and JavaScript. ",
      deploy_link: "https://new-movies-app.vercel.app/",
      repo_link: "https://github.com/saikiran11461/new_movies_app",
      tech_stack: [<FaHtml5 />, <FaCss3 />, <FaJs />],
    },
    {
      id: 7,
      project_name: "Calculator app",
      image: "/project_images/project-10.png",
      project_desc:
        " A basic calculator app with togle. Built using HTML, CSS and JavaScript. ",
      deploy_link: "https://calc-new-three.vercel.app/",
      repo_link: "https://github.com/saikiran11461/calc_new",
      tech_stack: [<FaHtml5 />, <FaCss3 />, <FaJs />],
    },

    
        
    {
      id: 8,
      project_name: "FATHOME Clone",
      image: "/project_images/project-5.png",
      project_desc:
        "A site Build on Cost, speed, and accuracy. No need to make trade-offs, choose all three. Cost.",
      deploy_link: "https://lying-powder-9405.vercel.app/",
      repo_link: "https://github.com/saikiran11461/lying-powder-9405",
      tech_stack: [<FaReact />, <FaJs />, <FaHtml5 />, <FaCss3 />,<SiRedux />],
    },

    {
      id: 9,
      project_name: "Photo Graph",
      image: "/project_images/project-6.png",
      project_desc:
        "A site Build to showcase our trends on Editing Pics and videous.",
      deploy_link: "https://photograph-webpage.vercel.app/",
      repo_link: "https://github.com/saikiran11461/photograph",
      tech_stack: [<FaReact />, <FaJs />, <FaHtml5 />, <FaCss3 />,<SiRedux />],
    },

    // {
    //   id: 10,
    //   project_name: "Sticky notes",
    //   image: "/project_images/project-7.png",
    //   project_desc:
    //     "Made a site about notes we can make sticky notes",
    //   deploy_link: "https://new-sticky-notes.vercel.app/",
    //   repo_link: "https://github.com/saikiran11461/new_sticky-notes",
    //   tech_stack: [
    //     <FaHtml5 />,
    //     <FaCss3 />,
    //     <FaReact />,
       
    //   ],
    // },

    {
      id: 11,
      project_name: " Birthday Presentation",
      image: "/project_images/project-8.png",
      project_desc:
        "Made a site about Showing the birthdays",
      deploy_link: "https://react-birthday.vercel.app/",
      repo_link: "https://github.com/saikiran11461/react-birthday",
      tech_stack: [
        <FaHtml5 />,
        <FaCss3 />,
        <FaJs />,
       
      ],
    },
    // {
    //   id: 12,
    //   project_name: " Movies app",
    //   image: "/project_images/project-9.png",
    //   project_desc:
    //     "Made a site about showing movies",
    //   deploy_link: "https://new-movies-app.vercel.app/",
    //   repo_link: "https://github.com/saikiran11461/new_movies_app",
    //   tech_stack: [
    //     <FaHtml5 />,
    //     <FaCss3 />,
    //     <FaJs />,
       
    //   ],
    // },
 
   
  ];

  return (
    <Container className="projects">
      <ProjectDiv>
        <Common>
          <H1>Projects</H1>
        </Common>
        <Row>
          {projects.map((item) => (
            <BoxDiv key={item.id}>
              <ServiceBox>
                <img src={item.image} alt="icon" style={{ width: "100%" }} />
                <div style={{ margin: "15px" }}>
                  <ServiceBoxHeader style={{ textAlign: "center" }}>
                    {item.project_name}
                  </ServiceBoxHeader>
                  <ServiceBoxP>{item.project_desc}</ServiceBoxP>
                  {/* <a href="">Read more</a> */}
                  <div
                    style={{
                      margin: "15px 20px",
                      display: "flex",
                      justifyContent: "center",
                    }}
                  >
                    {item.tech_stack.map((item) => (
                      <div className="iconsTechStack">{item}</div>
                    ))}
                  </div>
                  <A
                    href={item.repo_link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaGithub /> Code
                  </A>
                  <A
                    href={item.deploy_link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaLink /> Demo
                  </A>
                </div>
              </ServiceBox>
            </BoxDiv>
          ))}
        </Row>
      </ProjectDiv>
    </Container>
  );
};

export default Projects;
