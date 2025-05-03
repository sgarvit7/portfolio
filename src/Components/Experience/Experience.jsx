import React from "react";
import { FaCss3, FaFigma, FaHtml5, FaJs, FaReact, FaJava, FaPython, FaNode,  FaDatabase, FaGithub, FaAndroid, FaBootstrap, FaServer} from "react-icons/fa";
import { FaC } from "react-icons/fa6";
import { SiRedis } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
const Experience = () => {
  return (
    <div id="Experience" className="p-10 md:p-24">
      <h1 className="text-2xl md:text-4xl text-white font-bold">Skills</h1>
      <div className="flex flex-wrap items-center justify-around">
        <div className="flex flex-wrap md:w-4/5 gap-8 md:p-12 py-10">
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <FaHtml5 color="#E34F26" size={100} />
          </span>
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <FaCss3 color="#1572B6" size={100} />
          </span>
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <FaReact color="#61DAFB" size={100} />
          </span>
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <FaJs color="#F7DF1E" size={100} />
          </span>
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <FaFigma color="#F24E1E" size={100} />
          </span>
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <SiMongodb color="#47A248" size={100} />
          </span>
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <FaJava color="#FF4438" size={100} />
          </span>
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <FaNode color="white" size={100} />
          </span>
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <FaPython color="yellow" size={100} />
          </span>
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <FaDatabase color="cyan" size={100} />
          </span>
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <FaGithub color="white" size={100} />
          </span>
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <FaAndroid color="lightgreen" size={100} />
          </span>
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <FaC color="pink" size={100} />
          </span>
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <FaBootstrap color="lightblue" size={100} />
          </span>
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <FaServer color="yellow" size={100} />
          </span>
        </div>
 
      </div>
    </div>
  );
};

export default Experience;
