import React, { useState } from "react";

const projects = [
  {
    id: 1,
    title: "Red Sports Car",
    img: "https://images.unsplash.com/photo-1542362567-b07e54358753?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGNhcnN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=500",
    details: "Vibrant red sports car – perfect for high-end shoots.",
  },
  {
    id: 2,
    title: "Vintage Classic Car",
    img: "https://images.unsplash.com/photo-1503736334956-4c8f8e92946d?auto=format&fit=crop&w=800&q=80",
    details: "Timeless vintage design – editorial style photography.",
  },
  {
    id: 3,
    title: "Electric Vehicle Shoot",
    img: "https://images.unsplash.com/photo-1717526526115-7e7a8906eb75?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzF8fGNhcnMlMjB3YWxscGFwZXJzfGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=500",
    details: "Modern electric car – capturing future mobility.",
  },
  {
    id: 4,
    title: "White Supercar",
    img: "https://images.unsplash.com/photo-1685309203690-802dce37ec0a?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTU3fHxjYXJzJTIwd2FsbHBhcGVyc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=500",
    details: "High-performance white supercar – dramatic automotive.",
  },
  {
    id: 5,
    title: "Street Car Night",
    img: "https://images.unsplash.com/photo-1572194121169-d8cdfaa40ca7?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dmludGFnZSUyMGNhcnN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=500",
    details: "Street car under urban night lights – mood & motion.",
  },
  {
    id: 6,
    title: "Convertible Road Trip",
    img: "https://images.unsplash.com/photo-1724584701075-4a3d86aaa9ed?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTl8fGElMjBtYW4lMjBvbiUyMGElMjBjYXJ8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=500",
    details: "Convertible on open road – lifestyle automotive shoot.",
  },
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
    <section className="bg-neutral-900 flex flex-col items-center justify-center">
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
