import React from "react";
import hero from "../assets/hero.png";
import jsi from "../assets/jsi.png";
import react from "../assets/react.png";
import tail from "../assets/tailwind.png";
import face from "../assets/facebook.png";
import insta from "../assets/insta.png";
import link from "../assets/linkdin.png";
import twit from "../assets/twitter.png";

function Hero() {
  return (
    <section className="relative" id="home">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row p-3 md:p-0 lg:p-0 items-center lg:h-[90vh] justify-between">
          <div className="md:w-1/2 mb-8 md:mb-0 flex flex-col space-y-4 px-0 lg:px-0 lg:mt-0 mt-10">
            <h1 className="lg:text-7xl text-4xl font-bold lg:leading-snug ">
              Hi There, <br />
              I'm Dhiraj <span className="text-red-500">Kant</span>
            </h1>
            <p className="md:text-2xl text-xl mb-4">
              Web Developer & Java Full Stack Developer
            </p>
            <p className="mb-4">
              I'm a passionate web developer with expertise in React, Next.js,
              and modern web technologies. I love creating beautiful and
              functional website that solve real world problems.
            </p>
            <a
              href="/resume.pdf"
              download="Dhiraj_Kant_Resume.pdf"
              className=" bg-black text-white px-3 py-2 w-max rounded-md"
            >
              Download CV
            </a>
          </div>
          <div className="md:w-1/2 relative flex justify-center items-end mt-8">
            <img src={hero} alt="" className="lg:h-[90vh]" />
            <img
              src={react}
              alt=""
              className="absolute w-10 top-36 left-0 rounded-full md:hidden"
            />
            <img
              src={jsi}
              alt=""
              className="absolute w-10 top-0 right-5 rounded-full md:hidden"
            />
            <img
              src={tail}
              alt=""
              className="absolute w-10 bottom-36 right-0 rounded-full md:hidden"
            />
          </div>
        </div>
      </div>
      <div className="absolute top-40 right-10 bg-gray-300 p-4 lg:flex flex-col gap-6 rounded-full md:hidden hidden ">
        <a href="https://m.facebook.com/dheeraj.thakre.94/" target="blank">
          <img src={face} alt="" className="w-15  hover:scale-102" />
        </a>
        <a href="https://www.instagram.com/dhiraj_thakre_02/" target="blank">
          <img src={insta} alt="" className="w-15  hover:scale-102" />
        </a>
        <a
          href="https://www.linkedin.com/in/dhiraj-kant-7043a4258/"
          target="blank"
        >
          <img src={link} alt="" className="w-15 hover:scale-102" />
        </a>
        <a href="https://x.com/DhirajThakre02" target="blank">
          <img src={twit} alt="" className="w-15  hover:scale-102" />
        </a>
      </div>
    </section>
  );
}

export default Hero;
