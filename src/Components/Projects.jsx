import React, { useState } from "react";
import img29 from "../assets/29.JPG";
import img30 from "../assets/30.jpeg";
import img31 from "../assets/31.JPG";
import img32 from "../assets/32.JPG";
import img33 from "../assets/33.JPG";
import img34 from "../assets/34.JPG";
import img35 from "../assets/35.jpeg";
import img38 from "../assets/38.jpeg";
import img39 from "../assets/39.PNG";
import img40 from "../assets/40.jpeg";
import img41 from "../assets/41.jpeg";
import img42 from "../assets/42.jpeg";


const projects = [
  { id: 29, title: "Project 29", img: img29, details: "Automotive shoot" },
  { id: 30, title: "Project 30", img: img30, details: "Automotive shoot" },
  { id: 31, title: "Project 31", img: img31, details: "Automotive shoot" },
  { id: 32, title: "Project 32", img: img32, details: "Automotive shoot" },
  { id: 33, title: "Project 33", img: img33, details: "Automotive shoot" },
  { id: 34, title: "Project 34", img: img34, details: "Automotive shoot" },
  { id: 35, title: "Project 35", img: img35, details: "Automotive shoot" },
  { id: 38, title: "Project 38", img: img38, details: "Automotive shoot" },
  { id: 39, title: "Project 39", img: img39, details: "Automotive shoot" },
  { id: 40, title: "Project 40", img: img40, details: "Automotive shoot" },
  { id: 41, title: "Project 41", img: img41, details: "Automotive shoot" },
  { id: 42, title: "Project 42", img: img42, details: "Automotive shoot" },
];


const ProjectCard = ({ project }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <div
   
      className="relative rounded-2xl overflow-hidden shadow-lg cursor-pointer md:h-72 h-[70vh] snap-start"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Image */}
      <img
        src={project.img}
        alt={project.title}
        className={`w-full h-full object-cover transition-transform duration-500 ${
          hovered ? "scale-110" : "scale-100"
        }`}
      />

      {/* Desktop Hover Overlay */}
      <div
        className={`absolute inset-0 flex flex-col justify-center items-center text-center p-4 transition-all duration-500 ${
          hovered ? "bg-black/50 opacity-100" : "opacity-0 bg-black/0"
        } hidden md:flex`}
      >
        <h3
          className={`text-white text-2xl font-bold mb-2 transition-all duration-500 ${
            hovered ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
          }`}
        >
          {project.title}
        </h3>
        <p
          className={`text-gray-200 text-base transition-all duration-500 delay-100 ${
            hovered ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
          }`}
        >
          {project.details}
        </p>
      </div>

      {/* Mobile Text Always Visible */}
      <div className="absolute bottom-0 left-0 right-0 bg-linear-to-t from-black/70 to-transparent p-6 md:hidden">
        <h3 className="text-white text-2xl font-bold mb-2">{project.title}</h3>
        <p className="text-gray-300 text-sm">{project.details}</p>
      </div>
    </div>
  );
};

const Projects = () => {
  return (
    <section  id="Portfolio" className=" bg-neutral-900 flex flex-col items-center justify-center">
      <h2 className="text-4xl font-bold text-white mb-10 text-center pt-10 pb-5">
        My Works
      </h2>

      {/* Mobile stacked scroll with partial next image visible */}
      <div className="block md:hidden overflow-y-scroll h-[70vh] snap-y snap-mandatory scroll-smooth px-4 space-y-6 pb-6">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>

      {/* Desktop grid */}
      <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-6 px-10 pb-10">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
