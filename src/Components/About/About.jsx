import React from "react";
import AboutImg from "../../assets/img3.jpg";
import { IoArrowForward } from "react-icons/io5";

const About = () => {
  return (
    <div
      id="About"
      className="text-white md:flex overflow-hidden items-center md:flex-wrap md:justify-center bg-black shadow-xl mx-0 md:mx-20 bg-opacity-30 rounded-lg p-12"
    >
      <div>
        <h2 className="text-2xl md:text-4xl font-bold">About</h2>
        <div className="md:flex flex-wrap flex-col md:flex-row items-center">
          <img className="md:h-80" src={AboutImg} alt="About img" />

          <ul>
            <div className="flex gap-3 py-4">
              <IoArrowForward size={30} className="mt-1" />

              <span className="w-96">
                <h1 className="text-xl md:text-2xl font-semibold leading-normal">
                  Frontend developer
                </h1>
                <p className="text-sm md:text-md leading-tight">
                  Frontend developer skilled in building responsive,
                  user-friendly interfaces with React. Proficient in modern
                  JavaScript, component-based architecture, and translating
                  designs into clean, efficient code.
                </p>
              </span>
            </div>
            <div className="flex gap-3 py-4">
              <IoArrowForward size={30} className="mt-1" />

              <span className="w-96">
                <h1 className="text-xl md:text-2xl font-semibold leading-normal">
                  Database developer
                </h1>
                <p className="text-sm md:text-md leading-tight">
                  Database developer skilled in designing, implementing, and
                  optimizing relational and non-relational databases. Proficient
                  in SQL, data modeling, normalization, and writing efficient
                  queries, with experience in MySQL, PostgreSQL, and MongoDB.
                </p>
              </span>
            </div>
            <div className="flex gap-3 py-4">
              <IoArrowForward size={30} className="mt-1" />

              <span className="w-96">
                <h1 className="text-xl md:text-2xl font-semibold leading-normal">
                  Backend developer
                </h1>
                <p className="text-sm md:text-md leading-tight">
                  Backend developer proficient in building scalable and
                  efficient server-side applications using Node.js and Express.
                  Skilled in RESTful API development, database integration
                  (MongoDB, SQL), and ensuring performance, security, and
                  reliability of web services.
                </p>
              </span>
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;
