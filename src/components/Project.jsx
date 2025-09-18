import React from "react";

import mpP from "../assets/Mp.png";
import javaP from "../assets/javaP.png";
import docP from "../assets/DocsP.png";
import protP from "../assets/port.png";
import Card from "./Card";

function Project() {
  const projectJson = [
    {
      title: "Mp Wild Life",
      des: "Created a responsive and informative webpage highlighting the National Parks of Madhya Pradesh.",
      image: mpP,
      live: "https://mpwild-life.netlify.app/",
      github: "",
      show:"on",
      status:"done"
    },
    {
      title: "DocsFlow",
      des: "Built an interactive document management UI where users can upload, download, and manage data(Dummy).",
      image: docP,
      live: "live",
      github: "github",
      show:"on",
      status:"done"
    },
    {
      title: "My-Portfolio",
      des: "Welcome to my portfolio! I am an MCA graduate skilled in Java, Python, SQL, and web development, showcasing my projects and passion for technology.",
      image: protP,
      live: "live",
      github: "github",
      show:"on",
      status:"done"
    },
    {
      title: "Fresh Mart",
      des: "Welcome to our Mart Shop – a place where you can explore daily essentials and quality products all in one place. Enjoy smart shopping with great deals and convenience.",
      image: docP,
      live: "live",
      github: "github",
      show:"on",
      status:"pending"
    },
    {
      title: "Person Management",
      des: "Designed REST APIs for CRUD operations using Spring Boot + JPA + MySQL. Performed API testing and validation with Postman, following clean code practices",
      image: javaP,
      live: "live",
      github: "github",
      show:"off",
      status:"done"
    },
  ];
  return (
    <section id="project" className="relative bg-gray-700 py-10 px-4">
      <div className="mb-16 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-white border-b border-red-500 w-max pb-4">
          My Project
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center gap-10">
          {projectJson.map((items) => {
            return <Card item={items} />;
          })}
        </div>
      </div>
    </section>
  );
}

export default Project;
