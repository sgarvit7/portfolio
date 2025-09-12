import React from "react";
import ProjectCard from "./ProjectCard";
import gym from "../../assets/gym.jpg";
import keeper from "../../assets/keeper.jpg";
import weather from "../../assets/weather.jpeg";
import dp from "../../assets/dp.jpg";
const Projects = () => {
  return (
    <div id="Projects" className="p-10 md:p-15 text-white ">
      <h1 className="text-2xl md:text-4xl text-white font-bold">Projects</h1>
      <div className="py-12 px-8 flex flex-wrap gap-5">
        <ProjectCard
          title="DocsPath"
          main="DocsPath – A secure and scalable platform for healthcare onboarding, document management, and scheduling.”
DocsPath is a full-stack healthcare onboarding system built with Next.js, TypeScript, and Tailwind CSS. It uses Firebase
Auth for secure authentication, Redux for state management, and integrates Cloudinary for file storage of profile photos
and verification documents. Backend operations are powered by Prisma ORM with PostgreSQL, handling doctor/clinic
onboarding data and scheduling preferences."
          image={dp}
          demo="https://docs-path.vercel.app/"
          sourcecode="https://github.com/sgarvit7/DocsPath"
        />

        <ProjectCard
          title="Gym Management"
          main="Designed and developed a Gym Management System to streamline member registration, subscription tracking and trainer assignment.Implemented user-friendly interfaces for admins, trainers, and members, ensuring smooth operation and easy navigation. Integrated features likeworkout schedules and progress monitoring. Focused on building a scalable,secure, and efficient system using MERN"
          image={gym}
          demo="https://gym-management-sigma-mocha.vercel.app/"
          sourcecode="https://github.com/sgarvit7/Gym-management"
        />
        <ProjectCard
          title="Note Keeper"
          main="ChatGPT said:

The Keeper App is a React-based note-taking application inspired by Google Keep, designed to store and display notes efficiently. It features a clean, modern interface where users can create, view, and delete notes seamlessly. Notes are displayed in a responsive grid layout, making it easy to organize and access them on any device. The app emphasizes simplicity and speed, ensuring a smooth user experience for quick note-taking."
          image={keeper}
          demo="https://keeper-app-ten-gamma.vercel.app/"
          sourcecode="https://github.com/sgarvit7/Keeper-App"
        />
        <ProjectCard
          title="Weather App"
          main="Developed a responsive weather application using HTML, CSS, and JavaScript. Integrated real-time weather data using a public API (OpenWeatherMap) to display current weather conditions on city search. Focused on clean UI and API integration. Implemented error handling for invalid city inputs and ensured smooth user interactions across different screen sizes. "
          image={weather}
          demo="https://weather-by-garvit.netlify.app/"
          sourcecode="https://github.com/sgarvit7/Weather-App"
        />
      </div>
    </div>
  );
};

export default Projects;
