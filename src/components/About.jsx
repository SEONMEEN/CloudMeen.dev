import NavBar from "./NavBar";

export default function About() {
  return (
    <>
      <NavBar />
      <div className="bg-gradient-to-br from-sky-50 via-blue-50 to-white min-h-screen relative overflow-hidden">
        {/* Floating cloud decorations */}
        <div
          className="absolute top-10 left-10 w-20 h-12 bg-[url('./assets/cloud1.png')] bg-cover bg-center bg-no-repeat
  h-[100px] w-[250px]  animate-float"
        ></div>

        {/* Main content container */}
        <div className="container mx-auto px-6 py-16 flex flex-col lg:flex-row items-center justify-between min-h-screen">
          {/* Text content */}
          <div className="flex-1 max-w-2xl space-y-8 z-10">
            {/* Cloud header with improved styling */}
            <div className="relative">
              <div className="bg-[url(./assets/cloudabout.png)] bg-cover bg-center bg-no-repeat h-[50px] w-[250px] md:h-[90px] md:w-[450px] xl:h-[120px] xl:w-[600px] mx-auto lg:mx-0 drop-shadow-lg"></div>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-100/20 to-transparent rounded-2xl blur-xl"></div>
            </div>

            {/* Enhanced description */}
            <div className="space-y-6">
              <p className="text-lg md:text-xl lg:text-2xl text-slate-700 leading-relaxed text-center lg:text-left">
                I'm{" "}
                <span className="font-bold text-sky-600 bg-sky-50 px-2 py-1 rounded-lg">
                  Pasagone Suwan
                </span>
                , a passionate{" "}
                <span className="font-semibold text-emerald-600 bg-emerald-50 px-2 py-1 rounded-lg">
                  Computer Science
                </span>{" "}
                student driven by innovation and creativity.
              </p>

              <p className="text-base md:text-lg lg:text-xl text-slate-600 leading-relaxed text-center lg:text-left">
                I specialize in{" "}
                <span className="font-semibold text-rose-500 bg-rose-50 px-2 py-1 rounded-lg">
                  web development
                </span>
                ,{" "}
                <span className="font-semibold text-indigo-500 bg-indigo-50 px-2 py-1 rounded-lg">
                  machine learning
                </span>
                , and crafting impactful{" "}
                <span className="font-semibold text-purple-500 bg-purple-50 px-2 py-1 rounded-lg">
                  digital solutions
                </span>{" "}
                through clean, efficient{" "}
                <span className="font-semibold text-amber-500 bg-amber-50 px-2 py-1 rounded-lg">
                  code
                </span>
                .
              </p>

              <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/20">
                <h3 className="text-lg font-semibold text-slate-700 mb-4 text-center lg:text-left">
                  Areas of Expertise
                </h3>
                <div className="flex flex-wrap gap-3 justify-center lg:justify-start">
                  <span className="px-4 py-2 bg-gradient-to-r from-blue-100 to-blue-50 text-blue-700 rounded-full text-sm font-medium shadow-sm">
                    Frontend Development
                  </span>
                  <span className="px-4 py-2 bg-gradient-to-r from-green-100 to-green-50 text-green-700 rounded-full text-sm font-medium shadow-sm">
                    AI & ML
                  </span>
                  <span className="px-4 py-2 bg-gradient-to-r from-purple-100 to-purple-50 text-purple-700 rounded-full text-sm font-medium shadow-sm">
                    Full Stack
                  </span>
                  <span className="px-4 py-2 bg-gradient-to-r from-pink-100 to-orange-50 text-orange-700 rounded-full text-sm font-medium shadow-sm">
                    UX/UI
                  </span>
                  <span className="px-4 py-2 bg-gradient-to-r from-orange-100 to-orange-50 text-orange-700 rounded-full text-sm font-medium shadow-sm">
                    Problem Solving
                  </span>
                  
                </div>
              </div>
            </div>
          </div>

          <div className="flex-shrink-0 mt-12 lg:mt-0 lg:ml-12">
            <div className="relative">


              {/* Profile image */}
              <div
                className="relative bg-[url(./assets/Profile.png)] bg-cover bg-center bg-no-repeat 
                            h-80 w-64 md:h-96 md:w-80 lg:h-[500px] lg:w-96
                            rounded-3xl shadow-2xl border-4 border-white/50 backdrop-blur-sm
                            hover:scale-105 transition-transform duration-300 ease-out"
              >
                
              </div>

              {/* Floating elements around profile */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-white/60 rounded-full animate-pulse"></div>
              <div className="absolute -bottom-10 -left-16 w-6 h-6 bg-[url('./assets/cloud3.png')] bg-cover bg-center bg-no-repeat
  h-[150px] w-[250px] animate-float delay-300"></div>
            </div>
          </div>
        </div>

        {/* Bottom cloud decoration */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white/40 to-transparent"></div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0px) translateX(0px);
          }
          25% {
            transform: translateY(-10px) translateX(5px);
          }
          50% {
            transform: translateY(-5px) translateX(-5px);
          }
          75% {
            transform: translateY(-15px) translateX(3px);
          }
        }

        @keyframes float-delayed {
          0%,
          100% {
            transform: translateY(0px) translateX(0px);
          }
          25% {
            transform: translateY(-15px) translateX(-3px);
          }
          50% {
            transform: translateY(-8px) translateX(8px);
          }
          75% {
            transform: translateY(-12px) translateX(-2px);
          }
        }

        .animate-float {
          animation: float 6s ease-in-out infinite;
        }

        .animate-float-delayed {
          animation: float-delayed 8s ease-in-out infinite;
        }
      `}</style>
    </>
  );
}
