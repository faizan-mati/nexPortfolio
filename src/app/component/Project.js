'use client'
import { useState } from 'react';
import Image from "next/image";
import mongo from '../image/mongo.png';
import ims from '../image/ims.png';
import hunartech from '../image/hunartech.png';
import olx from '../image/olx2.png';
import weather from '../image/weather.png';
import quiz from '../image/quiz.png';
import lms from '../image/lms.png';
import mining from '../image/mining.png';
import food from '../image/food.png';
import ecommerece from '../image/ecommerece.png';
import coffee from '../image/coffee2.png';
import gradient from '../image/gradient.png';

export default function Project() {
  // Sample data for demonstration
  const projectsData = [
    {
      id: 1,
      image: ims,
      title: "MANAGEMENT SYSTEM",
      description: "Developed an Institute Management System during my internship at Hunar Foundation. Features include student registration, course schedules, attendance tracking, grade recording, and staff management.",
      url: "https://ims.ebrainware.com/superAdmin/index"
    },
    {
      id: 2,
      image: hunartech,
      title: "TECH WEBSITE",
      description: "Developed a professional agency website during my internship at Hunar Foundation using HTML, CSS, Bootstrap, and PHP.",
      url: "https://hunartech.ebrainware.com/"
    },
    
    {
      id: 3,
      image: weather,
      title: "WEATHER APP",
      description: "Built a weather application using html, css and javaScript fetching real-time weather data from an API. Users can input their location to receive current weather conditions and forecasts.",
      url: "https://faizan-mati.github.io/weatherApp/"
    },
    {
      id: 4,
      image: quiz,
      title: "QUIZ APP",
      description: "Developed an interactive quiz application using React.js and an external quiz API. Users can take quizzes on various topics and receive real-time feedback on their performance.",
      url: "https://quiz-xi-three.vercel.app/"
    },
      {
      id: 5,
      image: ecommerece,
      title: "E-COMMERCE",
      description: "Developed an e-commerce site using HTML, CSS, JavaScript, and Bootstrap. Features include a responsive design, product listings, shopping cart, and checkout functionality.",
      url: "https://ahmed-web-solution.github.io/e-commerce/"
    },
     {
      id: 6,
      image: lms,
      title: "LEARNING MANAGEMENT SYSTEM",
      description: "Developed a responsive static website with HTML, CSS, and Bootstrap, including a navigation bar, hero section, services, portfolio gallery, and contact form.",
      url: "https://faizan-mati.github.io/LMS/index.html"
    },
    {
      id: 7,
      image: olx,
      title: "OLX CLONE",
      description: "Developed an e-commerce website using React and Firebase, featuring user authentication, profile management, product posting, and CRUD operations for users to manage their listings.",
      url: "https://olx-blue.vercel.app/"
    },
      {
      id: 8,
      image: coffee,
      title: "Coffee",
      description: "Developed a responsive static website with HTML, CSS, and Bootstrap, including a navigation bar, hero section, services, gallery, and contact form.",
      url: "https://faizan-mati.github.io/Coffee/"
    },
    // {
    //   id: 7,
    //   image: mining,
    //   title: "MINING",
    //   description: "Created a one-page static website using HTML, CSS, Bootstrap, and JavaScript. Features a clean, responsive design with interactive elements.",
    //   url: "https://faizan-mati.github.io/mining/"
    // },
 
    
    //  {
    //   id: 10,
    //   image: gradient,
    //   title: "GRADIENT",
    //   description: "Responsive site generating and displaying random gradients with HTML, CSS, and JavaScript.",
    //   url: "https://faizan-mati.github.io/gradient/"
    // },
    // {
    //   id: 9,
    //   image: food,
    //   title: "FOOD WEBSITE",
    //   description: "Developed a responsive food website with HTML, CSS, and Bootstrap. Includes sections for menu items, chef profiles, and contact information.",
    //   url: "https://faizan-mati.github.io/Food-Website/"
    // },
   
  ];

  const [projects, setProjects] = useState(projectsData.slice(0, 6)); // Initially show 6 projects
  const [showAll, setShowAll] = useState(false);

  const handleToggleProjects = () => {
    if (showAll) {
      setProjects(projectsData.slice(0, 6)); // Show only the first 6 projects
    } else {
      setProjects(projectsData); // Show all projects
    }
    setShowAll(!showAll); // Toggle showAll state
  };

  return (
    <div className="projectMain">
      <div className="container">
        <div className="row">
          <div className="d-flex flex-column justify-content-center align-items-center">
            <h1 className="educationHeadingMain">My Projects</h1>
          </div>
          {projects.map((project) => (
            <div key={project.id} className="col-lg-4 col-md-6 col-sm-12 project">
              <Image src={project.image} alt={project.title} className="img-fluid" style={{ width: "100%", height: "100%" }} />
              <h1 className="projectHeading">{project.title}</h1>
              <p className="projectPara">{project.description}</p>
              <a href={project.url} className="projectBtn" target="_blank" rel="noopener noreferrer">Visit Website</a>
            </div>
          ))}
          <div className="col-12 text-center">
            <button className="btn-custom2" onClick={handleToggleProjects}>
              {showAll ? "Show Less" : "Show More"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
