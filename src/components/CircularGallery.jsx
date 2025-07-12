import { useRef, useState } from "react";


  const images = [
    "./assets/Js.png",
    "./assets/Css.png",
    "./assets/Python.png",
    "./assets/Java.png",
    "./assets/Sql.png",
    "./assets/Dart.png",
  ];


export default function DragToRotateCircle() {
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
    setAngle((prev) => prev + delta * 0.5); // ปรับค่าความไว
    lastX.current = e.clientX;
  };

  const onMouseUp = () => {
    isDragging.current = false;
  };

  return (
    <div
      ref={containerRef}
      className="w-full h-screen flex items-center justify-center bg-gradient-to-br from-[#DDEDFF] to-white overflow-hidden select-none"
      onMouseDown={onMouseDown}
      onMouseMove={onMouseMove}
      onMouseUp={onMouseUp}
      onMouseLeave={onMouseUp}
    >
      <div
        className="relative"
        style={{
          width: "400px",
          height: "400px",
          transform: `rotate(${angle}deg)`,
          transition: isDragging.current ? "none" : "transform 0.3s ease-out",
        }}
      >
        {images.map((src, i) => {
          const theta = (360 / images.length) * i;
          const radius = 140;
          const x = 200 + radius * Math.cos((theta * Math.PI) / 180) - 40;
          const y = 200 + radius * Math.sin((theta * Math.PI) / 180) - 40;

          return (
            <img
              key={i}
              src={src}
              alt={`img-${i}`}
              className="absolute w-[80px] h-[80px] rounded-full shadow-lg border-4 border-white object-cover cursor-grab"
              style={{ left: `${x}px`, top: `${y}px`, transform: `rotate(${-angle}deg)` }}
            />
          );
        })}
      </div>
    </div>
  );
}
