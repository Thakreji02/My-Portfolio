import React from "react";
import java from "../assets/java.png";
import spring from "../assets/spring.png";
import react from "../assets/react1.png";
import html1 from "../assets/html1.png";
import css1 from "../assets/css1.png";
import js1 from "../assets/js1.png";
import tailwind1 from "../assets/tailwind1.png";
import git from "../assets/github.png";
import boot from "../assets/bootstrap1.png";
import postgres from "../assets/postgres.png";
import postman from "../assets/postman.png";
import python from "../assets/python.png";

function About() {
  return (
    <div className="relative" id="about">
      <div className="bg-gray-900 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-2">
            <h3 className="text-center text-red-500">ABOUT ME</h3>
            <h1 className="text-3xl text-white font-bold">Hi, I'm Dhiraj Kant</h1>
            <p className="max-w-2xl text-xl text-gray-300 lg:mx-auto ">
              A Java Full Stack Developer & Frontend-Web Developer.
            </p>
          </div>
          <div className="mt-10">
            <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 text-justify">
              <div>
                <h3 className="text-red-600 font-semibold text-2xl">
                  My Journey
                </h3>
                <p className="mt-4 text-lg text-gray-300">
                  I am a passionate Java Full Stack Developer & Web
                  Developer-Frontend Developer with strong skills in building
                  scalable and user-friendly applications. On the frontend, I
                  work with HTML, CSS, JavaScript, Bootstrap, Tailwind, and
                  React to design responsive interfaces. On the backend, I
                  specialize in Java and Spring Boot for creating secure and
                  efficient systems. I also have programming knowledge in Python
                  for problem-solving and scripting tasks. My toolkit includes
                  PostgreSQL, Postman, and GitHub for database management, API
                  testing, and version control. I focus on writing clean,
                  maintainable code and continuously improving my development
                  skills.
                </p>
                <div className="flex mt-5 gap-5 justify-center ml-0 lg:ml-20 bg-gray-200 max-w-70 lg:max-w-sm  rounded-full">
                  <img src={react} alt="" className="w-15 h-15" />
                  <img src={java} alt="" className="w-15 h-15" />
                  <img src={spring} alt="" className="w-15 h-15" />
                </div>
              </div>
              <div className="border border-red-300 rounded-lg md:p-7 py-7 shadow-lg shadow-red-300 flex flex-col items-center gap-8  ">
                <h1 className="text-2xl font-semibold text-red-600">
                  Skills & Expertise
                </h1>
                <div className="flex items-center justify-center flex-wrap gap-3 text-gray-300">
                  <div className="border border-red-300 shadow-md shadow-red-300 flex w-max items-center px-2 py-1 rounded-lg gap-1 hover:scale-102">
                    <img src={html1} alt="" className="w-10" />
                    <span className="font-semibold">HTML</span>
                  </div>
                  <div className="border border-red-300 shadow-md shadow-red-300 flex w-max items-center px-2 py-1 rounded-lg gap-1 hover:scale-102">
                    <img src={css1} alt="" className="w-10" />
                    <span className="font-semibold">CSS</span>
                  </div>
                  <div className="border border-red-300 shadow-md shadow-red-300 flex w-max items-center px-2 py-1 rounded-lg gap-1 hover:scale-102">
                    <img src={js1} alt="" className="w-10" />
                    <span className="font-semibold">JavaScript</span>
                  </div>
                  <div className="border border-red-300 shadow-md shadow-red-300 flex w-max items-center px-2 py-1 rounded-lg gap-1 hover:scale-102">
                    <img src={boot} alt="" className="w-10" />
                    <span className="font-semibold">Bootstrap</span>
                  </div>
                  <div className="border border-red-300 shadow-md shadow-red-300 flex w-max items-center px-2 py-1 rounded-lg gap-1 hover:scale-102">
                    <img src={tailwind1} alt="" className="w-10" />
                    <span className="font-semibold">Tailwind CSS</span>
                  </div>
                  <div className="border border-red-300 shadow-md shadow-red-300 flex w-max items-center px-2 py-1 rounded-lg gap-1 hover:scale-102">
                    <img src={react} alt="" className="w-10" />
                    <span className="font-semibold">React js</span>
                  </div>
                  <div className="border border-red-300 shadow-md shadow-red-300 flex w-max items-center px-2 py-1 rounded-lg gap-1 hover:scale-102">
                    <img src={java} alt="" className="w-10" />
                    <span className="font-semibold">Java</span>
                  </div>
                  <div className="border border-red-300 shadow-md shadow-red-300 flex w-max items-center px-2 py-1 rounded-lg gap-1 hover:scale-102">
                    <img src={python} alt="" className="w-10" />
                    <span className="font-semibold">Python</span>
                  </div>
                  <div className="border border-red-300 shadow-md shadow-red-300 flex w-max items-center px-2 py-1 rounded-lg gap-1 hover:scale-102">
                    <img src={spring} alt="" className="w-10" />
                    <span className="font-semibold">Spring Boot</span>
                  </div>
                  <div className="border border-red-300 shadow-md shadow-red-300 flex w-max items-center px-2 py-1 rounded-lg gap-1 hover:scale-102">
                    <img src={postgres} alt="" className="w-10" />
                    <span className="font-semibold">PostgreSQL</span>
                  </div>
                  <div className="border border-red-300 shadow-md shadow-red-300 flex w-max items-center px-2 py-1 rounded-lg gap-1 hover:scale-102">
                    <img src={postman} alt="" className="w-10" />
                    <span className="font-semibold">PostMan</span>
                  </div>
                  <div className="border border-red-300 shadow-md shadow-red-300 flex w-max items-center px-2 py-1 rounded-lg gap-1 hover:scale-102">
                    <img src={git} alt="" className="w-10" />
                    <span className="font-semibold">GitHub</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
