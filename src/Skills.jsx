import { useRef, useState } from "react";
import NavBar from "./NavBar";

export default function Skills() {
  const images = [
    "/assets/Js.png",
    "/assets/Css.png",
    "/assets/Python.png",
    "/assets/Java.png",
    "/assets/Sql.png",
    "/assets/Bootstrap.png",
    "/assets/Tailwind.png",
    "/assets/Html.png",
    "/assets/MySql.png",
    "/assets/React.png",
  ];
  const containerRef = useRef(null);
  const [angle, setAngle] = useState(0);
  const isDragging = useRef(false);
  const lastX = useRef(0);

  const onMouseDown = (e) => {
    isDragging.current = true;
    lastX.current = e.clientX;
  };

  const onMouseMove = (e) => {
    if (!isDragging.current) return;
    const delta = e.clientX - lastX.current;
    setAngle((prev) => prev + delta * 0.5);
    lastX.current = e.clientX;
  };

  const onMouseUp = () => {
    isDragging.current = false;
  };

  // *** เพิ่ม touch events ***
  const onTouchStart = (e) => {
    isDragging.current = true;
    lastX.current = e.touches[0].clientX;
  };

  const onTouchMove = (e) => {
    if (!isDragging.current) return;
    const delta = e.touches[0].clientX - lastX.current;
    setAngle((prev) => prev + delta * 0.5);
    lastX.current = e.touches[0].clientX;
  };

  const onTouchEnd = () => {
    isDragging.current = false;
  };

  return (
    <>
      <NavBar />
      <div className="relative h-screen bg-gradient-to-b from-[#97C7FF] to-[#FEFFDF] w-full overflow-hidden ">
        <div className="bg-green-100 w-screen h-auto flex justify-center items-center pt-5">
          <div className="bg-[url(./assets/skills.png)] bg-cover bg-center bg-no-repeat h-[90px] w-[250px] md:h-[80px] md:w-[250px] xl:h-[120px] "></div>
        </div>

        <div>
          <div
            ref={containerRef}
            className="relative w-full h-screen flex items-center justify-center bg-gradient-to-br from-[#DDEDFF] to-white overflow-hidden select-none"
            onMouseDown={onMouseDown}
            onMouseMove={onMouseMove}
            onMouseUp={onMouseUp}
            onMouseLeave={onMouseUp}
            onTouchStart={onTouchStart}
            onTouchMove={onTouchMove}
            onTouchEnd={onTouchEnd}
          >
            <div
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] z-[2]"
              style={{
                transform: `rotate(${angle}deg)`,
                transition: isDragging.current
                  ? "none"
                  : "transform 0.3s ease-out",
              }}
            >
              {images.map((src, i) => {
                const theta = (360 / images.length) * i;
                const center = 300;
                const radius = 250;
                const x = center + radius * Math.cos((theta * Math.PI) / 180) - 80;
                const y = center + radius * Math.sin((theta * Math.PI) / 180) - 80;

                return (
                  <div
                    key={i}
                    className="absolute w-[160px] h-[160px] bg-cover bg-center bg-no-repeat z-[40]"
                    style={{
                      backgroundImage: `url(${src})`,
                      left: `${x}px`,
                      top: `${y}px`,
                      transform: `rotate(${-angle}deg)`,
                    }}
                  />
                );
              })}
            </div>
          </div>

          <div className="absolute bg-[url(./assets/cloudskillsL.png)] bg-cover bg-center bg-no-repeat w-[590px] h-[380px] md:w-[790px] md:h-[580px] xl:w-[700px] xl:h-[480px] left-0 bottom-0 z-[1]"></div>
          <div className="absolute bg-[url(./assets/cloudskillsR.png)] bg-cover bg-center bg-no-repeat w-[590px] h-[360px] md:w-[550px] md:h-[480px] xl:w-[850px] xl:h-[680px] right-0 bottom-0 z-[4]"></div>
        </div>
      </div>
    </>
  );
}
