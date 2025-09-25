import Lottie from "lottie-react";
import React from "react";

import edu from "../assets/Educate.json";

function Education() {
  const educationJson = [
    {
      eName: "🎓Master Of Computer Application (MCA)",
      clgName: "Technocrates Institution Of Technology-(Excellence), Bhopal",
      passingYear: "2022-2024",
      grade: "7.4 CGPA",
    },
    {
      eName: "🎓Bachelor Of Science (B.Sc)",
      clgName: "Govt. J.S.T. PG College, Balaghat",
      passingYear: "2017-2021",
      grade: "60.42%",
    },
    {
      eName: "🎓Higher Secondary (Science)",
      clgName: "Govt. Higher Secondary School Warood, katangi",
      passingYear: "2016-2017",
      grade: "70.42%",
    },
  ];
  return (
    <section id="education" className="relative bg-gray-900 py-10 px-4 ">
      <div className="mb-16 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-white border-b border-red-500 w-max pb-4 mt-20">
          My Education
        </h2>
        <div className="mt-16">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 text-justify mt-5">
            <div className="hidden lg:block mt-6">
              <a href="">
                <Lottie
                  animationData={edu}
                  className="w-[350px] lg:w-[470px] mx-auto"
                />
              </a>
            </div>
            <div className=" border border-red-300 rounded-lg  shadow-lg shadow-red-300 flex flex-col items-left gap-8 p-10  ">
              <div className=" ">
                <h2 className="text-3xl border-b text-white hidden md:block pb-2 border-pink-500 w-max">
                  Education
                </h2>
                {educationJson.map((items) => (
                  <div
                    className="border-l-3
                  
                  
                  border-pink-500 mt-8"
                  >
                    <h2 className="text-2xl text-gray-100 font-semibold ml-3">
                      {items.eName}
                    </h2>
                    <h3 className="text-lg text-gray-100 ml-5 ">
                      {items.clgName}
                    </h3>
                    <p className="ml-5 text-pink-500">
                      {items.passingYear} | {items.grade}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Education;
