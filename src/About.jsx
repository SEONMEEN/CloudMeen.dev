import NavBar from "./NavBar";

export default function About() {
  return (
    <>
      <NavBar />
      <div className="bg-gradient-to-r from-[#DDEDFF] to-[#FFFFFF] w-full h-screen pt-5 relative overflow-hidden ">
        <div className="h-auto w-auto  flex flex-col items-center sm:left-0 sm:absolute md:left-1/2 md:transform md:-translate-x-1/2 md:pt-auto xl:p-5 xl:left-0 xl:absolute xl:-translate-x-0 ">
          <div className="bg-[url(./assets/cloudabout.png)] bg-cover bg-center bg-no-repeat  h-[50px] w-[250px] md:h-[90px] md:w-[450px] xl:h-[120px] xl:w-[600px]"></div>
          <p className="text-md text-gray-500 p-5 sm:w-[300px] md:w-[450px] xl:w-[600px] xl:pt-15 xl:text-3xl">
            I'm{" "}
            <span className="font-semibold text-[#84BEFF] sm:text-black">Pasagone Suwan</span>
            , a passionate
            <span className="font-semibold text-[#A5C59D]">
              {" "}
              Computer Science{" "}
            </span>{" "}
            student driven by a love for
            <span className="font-semibold text-[#FF8C8E]">
              {" "}
              web development
            </span>
            ,
            <span className="font-semibold text-[#8D89FF]">
              {" "}
              machine learning
            </span>
            , and crafting impactful
            <span className="font-semibold text-[#FF9EEA]">
              {" "}
              digital solutions
            </span>{" "}
            through clean, efficient
            <span className="font-semibold text-[#FFC787]"> code</span>.
          </p>
        </div>
        <div
  className="absolute bottom-0 left-1/2 transform -translate-x-1/2 
             sm:left-auto sm:right-0 sm:translate-x-0
             bg-[url(./assets/Profile.png)] bg-cover bg-center bg-no-repeat 
             h-[400px] w-[300px] md:left-1/2 md:transform md:-translate-x-1/2 md:h-[600px] md:w-[500px]
             xl:left-auto xl:right-0 xl:translate-x-0 xl:h-[700px] xl:w-[600px]"
></div>

      </div>
    </>
  );
}
