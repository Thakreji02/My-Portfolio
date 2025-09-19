import React from "react";
import gitimg from "../assets/github.png";

function Card({ item }) {
  return (
    <div className="border border-red-500  rounded-lg w-[350px] lg:w-[400px] bg-red-50">
      <img src={item.image} alt="" className="rounded-lg" />
      <div className="p-4">
        <h1 className="font-semibold text-xl mb-2">{item.title}</h1>
        <p className="text-justify line-clamp-3 h-20">{item.des}</p>
        <div className="flex gap-4 mt-4">
          <button className="bg-red-500 text-white px-3 py-2 rounded-md ">
            {item.show === "on" ? (
              <a href={item.live} target="_blank">
                Live Demo
              </a>
            ) : (
              <p>Code</p>
            )}
          </button>
          <button className="bg-black text-white px-3 py-2 rounded-md">
            <a href={item.github} target="_blank" className="flex gap-1">
              <img src={gitimg} alt="" className="w-6" />
              Github
            </a>
          </button>
          {item.status==="pending"?<p className="text-red-800 mt-4 md:ml-19">Pending</p>:<p className="text-green-900 mt-6 text-right"></p>}
        </div>
      </div>
    </div>
  );
}

export default Card;
