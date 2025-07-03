import { useState } from "react";
import "./index.css";
import { Link } from "react-router-dom";

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-[#C7E1FF] flex items-center justify-between p-2 relative">
      <p className="font-bold text-white ">CloudMeen.dev</p>

      {/* Hamburger Menu Button */}
      <button
        className="md:hidden text-white p-2"
        onClick={() => setIsOpen(!isOpen)}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          class="bi bi-list"
          viewBox="0 0 16 16"
        >
          <path
            fill-rule="evenodd"
            d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"
          />
        </svg>
      </button>

      {/* Desktop Menu */}
      <div className="hidden md:flex flex-row text-base gap-2">
        <Link className="text-white" to="/">Home</Link>
        <Link className="text-white" to="/about">About</Link>
        <a href="#" className="text-white">
          Projects
        </a>
        <Link className="text-white" to="/skills">Skills</Link>
        <a href="#" className="text-white">
          Contact
        </a>
      </div>

      {/* Mobile Slide Menu */}
      <div
        className={`fixed top-0 right-0 h-full w-2/5 bg-white shadow-md p-5 transform transition-transform duration-300 ease-in-out z-50 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } md:hidden`}
      >
        <button
          className="absolute top-4 right-4"
          onClick={() => setIsOpen(false)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-x"
            viewBox="0 0 16 16"
          >
            <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708" />
          </svg>
        </button>
        <div className="flex flex-col space-y-4 mt-10">
          <a href="#" className="text-[#C7E1FF]">
            Home
          </a>
          <a href="#" className="text-[#C7E1FF]">
            About
          </a>
          <a href="#" className="text-[#C7E1FF]">
            Projects
          </a>
          <a href="#" className="text-[#C7E1FF]">
            Skills
          </a>
          <a href="#" className="text-[#C7E1FF]">
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
}
