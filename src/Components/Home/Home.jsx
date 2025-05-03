import React from "react";
import avatarImg from "../../assets/img2.png";
import TextChange from "../TextChange";
import "./home.css";

const Home = () => {
  return (
    <div className="text-white flex w-full justify-between items-start p-10 md:p-20">
      <div className="md:w-2/4 md:pt-10 ">
        <h1 className="text-xl md:text-6xl font-bold flex leading-normal tracking-tighter">
          <TextChange />
        </h1>
        <p className="text-sm md:text-2xl mt-6 tracking-tight ">
          A highly skilled Full Stack Developer with expertise in front-end and
          back-end development, proficient in HTML, CSS, JavaScript,and
          frameworks like React and Node.js. Experienced in building responsive
          web applications, managing APIs, and working with databases such as
          MongoDB and MySQL. Adept at deploying applications using cloud services
          and version control systems like Git. Strong problem-solving abilities,
          a collaborative mindset, and acommitment to delivering scalable,
          user-centric solutions indynamic team environments.
        </p>
        <button className="mt-5 md:md-10 text-white py02 px-3 text-sm md:text-lg md:py-2 md:px-4 hover:opacity-85 duration-300 hover:scale-105 font-semibold rounded-3xl bg-[#465697]">
         <a href="https://www.linkedin.com/in/garvit-sharma-958a04308/"> Contact Me </a>
        </button>
      </div>
      <div className=" w-1/3 image1 content-center border-2">
        <img className=" h-50vh" src={avatarImg} alt="" />
      </div>
    </div>
  );
};

export default Home;
