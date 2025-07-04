import NavBar from "./NavBar";

export default function Projects() {
  const projects = [
    {
      title: "csit-job-finder",
      description:
        "A web platform designed to connect students and professors within the Computer Science and Information Technology (CSIT) department of Naresuan University. This project facilitates the posting of part-time jobs, internships, and project opportunities, allowing students to gain practical experience and professors to find capable assistants.",
      technologies: ["PHP", "MySQL", "HTML","CSS","Vanilla JavaScript"],
      link: "https://github.com/gittium/csit-job-finder",
    },
    {
      title: "StepIntoStyle",
      description:
        "StepIntoStyle is an online store dedicated to offering a wide variety of stylish and high-quality shoes. Whether you're looking for casual sneakers, formal shoes, boots, or athletic footwear, we've got you covered. Our platform provides an easy way to browse and shop for shoes from top brands, with detailed product descriptions, reviews, and personalized recommendations",
      technologies: ["PHP", "HTML", "CSS"],
      link: "https://github.com/SEONMEEN/StepIntoStyle",
    },
    {
      title: "MYWEBSITE",
      description:
        "MYWEBSITE is a website built by taking an existing template or structure from the internet and then customizing it to fit specific needs. The original layout, design, or functionality was taken from online sources, and then enhancements and adjustments were made to reflect personal preferences, branding, or specific use cases.",
      technologies: ["HTML", "CSS", "JavaScript"],
      link: "https://github.com/SEONMEEN/MYWEBSITE",
    },
    {
      title: "MythosGreece",
      description:
        "MythosGreece is my personal website designed to share the fascinating world of Greek mythology and culture. This platform offers an interactive and educational experience where visitors can dive deep into the stories of gods, heroes, and legendary creatures from ancient Greece.",
      technologies: ["HTML", "Tailwind CSS", " jQuery"],
      link: "https://github.com/SEONMEEN/MythosGreece",
    },
    {
      title: "CloudMeen.dev",
      description:
        "CloudMeen.dev is a personal portfolio website that showcases my skills, projects, and experience in web development with a cloud-themed design. The website serves as an introduction to my professional background, featuring an overview of my technical abilities, past projects, and a way for potential clients or employers to get in touch with me.",
      technologies: ["React", "Vite", "JavaScript", " jQuery", "Tailwind CSS"],
      link: "https://github.com/SEONMEEN/CloudMeen.dev",
    },
  ];
  return (
    <div className="min-h-screen w-full bg-blue-50">
      <NavBar />
      <div className="h-auto w-auto items-center justify-items-center">
        <div className="bg-[url('./assets/projects.png')] bg-cover bg-no-repeat bg-center w-[200px] h-[100px]"></div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-5">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300"
          >
            <div className="p-6">
              <h3 className="text-2xl font-semibold text-gray-800">
                {project.title}
              </h3>
              <p className="mt-2 text-gray-600">{project.description}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {project.technologies.map((tech, idx) => (
                  <span
                    key={idx}
                    className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <a
                href={project.link}
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
