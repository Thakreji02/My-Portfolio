import React from "react";

import facebook from "../assets/facebook.png";
import insta from "../assets/insta.png";
import linkdin from "../assets/linkdin.png";
import git from "../assets/github.png"

import Lottie from "lottie-react";
import contact from "../assets/contact.json";

function Contact() {
  return (
    <section
      className="z-40 bg-gray-800 relative py-10 px-5 md:px-0"
      id="contact"
    >
      <div className="mb-16 max-w-7xl mx-auto ">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="md:w-1/2 ">
            <h2 className="text-3xl font-bold mb-3 text-red-500">
              Get in Touch
            </h2>
            <p className="mb-4 text-white/85">
              I'm always open to new opportunities and collaboration. Fell free
              to reach out!
            </p>
            <div className="flex space-x-2">
              <a href="https://m.facebook.com/dheeraj.thakre.94/" target="_blank">
                <img src={facebook} alt="" className="h-6 w-6" />
              </a>
              <a href="https://www.instagram.com/dhiraj_thakre_02/" target="_blank">
                <img src={insta} alt="" className="h-6 w-6" />
              </a>
              <a href="https://www.linkedin.com/in/dhiraj-kant-7043a4258/" target="_blank">
                <img src={linkdin} alt="" className="h-6 w-6" />
              </a>
              <a href="https://github.com/Thakreji02" target="_blank">
                <img src={git} alt="" className="h-6 w-6" />
              </a>
            </div>
            <a href="mailto:thakredheeraj02@gmail.com">
              <Lottie
                animationData={contact}
                className="w-[350px] lg:w-[500px] mx-auto"
              />
            </a>
          </div>
          <form
            action="https://formspree.io/f/xyzdapvz"
            method="POST"
            className="w-full md:w-1/2 bg-gray-100 rounded-lg border border-red-300 shadow-lg shadow-red-500 p-10 mt-20"
          >
            <h1 className="text-gray-900 text-4xl font-bold mb-7">
              Contact me
            </h1>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">
                Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Enter your name"
                className="mt-1 p-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Enter your email"
                className="mt-1 p-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">
                Massage
              </label>
              <textarea
                name="massage"
                id="massage"
                placeholder="Enter your massage"
                className="mt-1 p-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              />
            </div>
            <button
              type="submit"
              className="bg-red-500 text-white px-3 py-2 rounded-lg"
            >
              Send Massage
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
