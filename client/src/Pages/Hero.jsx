import HeroImg from "../assets/HeroImg/main.jpg";

const Hero = () => {
    return (
      <div id="hero-section" className="relative w-full h-screen bg-gray-100">
        <div className="grid grid-cols-1 md:grid-cols-2 h-full">
          {/* Left Content */}
          <div className="bg-black flex flex-col justify-center items-start px-6 md:px-12">
            <h1 className="text-4xl md:text-6xl font-bold text-slate-200">
              Empowering Industries with Trusted Solutions
            </h1>
            <p className="mt-4 text-lg md:text-xl text-gray-200">
              Specializing in instrumentation, electrical, and mechanical solutions for energy and industrial sectors.
            </p>
            <div className="mt-6 flex space-x-4">
              <a
                href="/about"
                className="bg-blue-500 text-white px-6 py-3 rounded-lg text-lg hover:bg-blue-600 transition"
              >
                Learn More
              </a>
              <a
                href="/contact"
                className="bg-gray-300 text-gray-800 px-6 py-3 rounded-lg text-lg hover:bg-gray-400 transition"
              >
                Contact Us
              </a>
            </div>
          </div>
  
          {/* Right Image */}
          <div className="relative">
            <img
              src={HeroImg}
              alt="Hero"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40"></div>
          </div>
        </div>
      </div>
    );
  };
  
  export default Hero;
  