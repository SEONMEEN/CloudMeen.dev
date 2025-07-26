import "../index.css";
import NavBar from "./NavBar";
import { Link } from "react-router-dom";
function Home() {
  return (
    <>
      <NavBar />
      <div className="relative h-screen bg-gradient-to-t from-[#C7E1FF] to-white overflow-hidden">
        <div className="absolute top-[20%] left-1/2 transform -translate-x-1/2 flex flex-col justify-items-center items-center ">
          <div className="bg-[url(./assets/cloudtext.png)] bg-cover bg-center bg-no-repeat h-[150px] w-[250px] mb-5 lg:h-[200px] lg:w-[350px]"></div>
        </div>
        <div className="absolute bottom-0 left-0 bg-[url(./assets/cloudbt.png)] bg-cover bg-center bg-no-repeat h-[500px] w-[800px] md:h-full md:w-full"></div>
        <div
          className="absolute top-0 -left-30 transform -translate-x-5
  bg-[url('./assets/cloud1.png')] bg-cover bg-center bg-no-repeat
  h-[150px] w-[250px] animate-float"
        ></div>
        <div
          className="absolute bottom-0 right-30 transform -translate-x-5
  bg-[url('./assets/cloud2.png')] bg-cover bg-center bg-no-repeat
  h-[150px] w-[250px] animate-float"
        ></div>
        <div
          className="absolute top-100 left-50 transform -translate-x-5
  bg-[url('./assets/cloud3.png')] bg-cover bg-center bg-no-repeat
  h-[150px] w-[250px] animate-float"
        ></div>
      </div>
    </>
  );
}

export default Home;
