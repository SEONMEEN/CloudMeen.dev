import NavBar from "./NavBar";
import "./index.css";

export default function Contact() {
    return(
        
        <div className="bg-gradient-to-r from-[#84BEFF] to-[#C7E1FF] min-h-screen w-full">
            <NavBar />
            <div className="h-full w-full ">
                <div className="h-auto w-auto  flex flex-col items-center justify-items-center">
                <div className="bg-[url('./assets/contact.png')] bg-cover bg-center bg-no-repeat w-[400px] h-[100px]"></div>
                </div>
                <div className="h-full w-full ">
                    <div className="h-auto w-auto  flex flex-col items-center justify-items-center">
                        <div className="bg-[url('./assets/github.png')] bg-cover bg-center bg-no-repeat w-[200px] h-[200px]"></div>
                        <p className="text-white modak-regular text-3xl">github/SEONMEEN</p>
                    </div>
                    <div className="h-auto w-auto flex flex-col items-center justify-items-center">
                        <div className="bg-[url('./assets/mail.png')] bg-cover bg-center bg-no-repeat w-[200px] h-[200px]"></div>
                        <p className="text-white modak-regular text-3xl">pasagone92@gmail.com</p>
                    </div>
                </div>
            </div>
        </div>
        
    );
}