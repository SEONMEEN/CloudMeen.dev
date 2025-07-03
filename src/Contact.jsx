import NavBar from "./NavBar";
import "./index.css";

export default function Contact() {
  return (
    <div className="relative bg-gradient-to-r from-[#84BEFF] to-[#C7E1FF] min-h-screen w-full overflow-hidden">
      <NavBar />

      <div className=" h-full w-full">
        <div className=" flex flex-col items-center">
          <div className="z-90 bg-[url('./assets/contact.png')] bg-cover bg-center bg-no-repeat w-[400px] h-[100px]"></div>
        </div>

        <div className=" flex flex-col items-center gap-8 mt-10">
          <div className="flex flex-col items-center">
            <div className="z-90 bg-[url('./assets/github.png')] bg-cover bg-center bg-no-repeat w-[200px] h-[200px]"></div>
            <p className="z-90 text-white modak-regular text-3xl">
              github/SEONMEEN
            </p>
          </div>

          <div className="flex flex-col items-center">
            <div className="z-90 bg-[url('./assets/mail.png')] bg-cover bg-center bg-no-repeat w-[200px] h-[200px]"></div>
            <p className="z-90 text-white modak-regular text-3xl">
              pasagone92@gmail.com
            </p>
          </div>
        </div>
      </div>

      {/* ลูกโป่งลอยขึ้น - อยู่นอก flow ปกติ */}
      <div
        className="absolute bottom-[-100px] left-[40%] w-[90px] h-[200px] z-50 float-up pointer-events-none bg-[url('./assets/balloonyellow.png')] bg-cover bg-center bg-no-repeat"
        style={{ animationDelay: "0s" }}
      ></div>
      <div
        className="absolute bottom-[-120px] left-[10%] w-[90px] h-[200px] z-50 float-up pointer-events-none bg-[url('./assets/balloonblue.png')] bg-cover bg-center bg-no-repeat"
        style={{ animationDelay: "0.5s" }}
      ></div>
      <div
        className="absolute bottom-[-90px] left-[60%] w-[90px] h-[200px] z-50 float-up pointer-events-none bg-[url('./assets/balloonwhite.png')] bg-cover bg-center bg-no-repeat"
        style={{ animationDelay: "1s" }}
      ></div>
      <div
        className="absolute bottom-[-80px] left-[90%] w-[90px] h-[200px] z-50 float-up pointer-events-none bg-[url('./assets/balloongreen.png')] bg-cover bg-center bg-no-repeat"
        style={{ animationDelay: "1.5s" }}
      ></div>
    </div>
  );
}
