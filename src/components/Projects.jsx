import NavBar from "./NavBar";
import React, { useEffect, useState } from "react";
import { getProjects } from "../javascript/projects.js";

export default function Projects() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const loadProjects = async () => {
      const data = await getProjects();
      setProjects(data);
    };
    loadProjects();
  }, []);

  return (
    <div className="min-h-screen w-full bg-blue-50">
      <NavBar />
      <div className="h-auto w-auto items-center justify-items-center">
        <div className="bg-[url('./assets/projects.png')] bg-cover bg-no-repeat bg-center w-[200px] h-[100px]"></div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-5">
        {projects.map((proj, i) => (
          <div
            key={i}
            className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300"
          >
            <div className="p-6">
              <h3 className="text-2xl font-semibold text-gray-800">
                {proj.title}
              </h3>
              <p className="mt-2 text-gray-600">{proj.description}</p>
              <a
                href={proj.link}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-block text-blue-500 font-semibold"
              >
                View Project
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
