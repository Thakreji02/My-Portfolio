import React from "react";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

function Footer() {
  return (
    <footer className="relative bg-lime-200 text-gray-800 py-12 px-4 md:px-0">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h1 className="text-xl font-bold  mb-4">PortFolio</h1>
            <p className="mb-4">Welcome to my portfolio!</p>
            <h2 className="mt-1">Follow Us</h2>
            <div className="flex gap-3 mt-1">
              <a
                href="https://m.facebook.com/dheeraj.thakre.94/"
                target="blank"
              >
                <FaFacebook className="w-5 h-5" />
              </a>
              <a
                href="https://www.instagram.com/dhiraj_thakre_02/"
                target="blank"
              >
                <FaInstagram className="w-5 h-5" />
              </a>
              <a href="https://x.com/DhirajThakre02" target="blank">
                <FaTwitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h1 className="text-xl font-bold mb-4">Quick Links</h1>
            <ul className="space-y-2">
              <a href="#home">
                <li className="hover:text-green-500">Home</li>
              </a>
              <a href="#about">
                {" "}
                <li className="hover:text-green-500">About</li>
              </a>
              <a href="#project">
                <li className="hover:text-green-500">Project</li>
              </a>
              <a href="#contact">
                <li className="hover:text-green-500">Contact</li>
              </a>
            </ul>
          </div>
          <div>
            <h1 className="text-xl font-bold mb-4">Contact</h1>
            <p className="mb-2">Dhiraj Kant</p>
            <p className="mb-2">Phone: +91 000000000</p>
            <p className="mb-2">Email: thakredheeraj02@gamil.com</p>
          </div>
        </div>
        <div className=" border-t mt-8 pt-8 border-gray-700 text-center">
          <p>
            &copy;{new Date().getFullYear()} Portfolio. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
