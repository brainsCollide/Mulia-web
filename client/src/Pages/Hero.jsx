import HeroImg from "../assets/HeroImg/main.jpg";
import ScrollDown from "../Components/ScrollDown";


const Hero = () => {
  return (
    <div id="hero-section" className="relative w-full h-screen bg-gray-100">
      <div className="grid grid-cols-1 md:grid-cols-2 h-full">
        {/* Left Content */}

        {/* Right Image */}
        <div className="relative">
          <img
            src={HeroImg}
            alt="Hero"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-black via-transparent to-black opacity-60"></div>
        </div>

        <div className="bg-black flex flex-col justify-center items-start px-6 md:px-12 space-y-4">
          <h1 className="text-3xl md:text-5xl font-bold text-slate-200">
            Empower Your Business with Reliable Solutions
          </h1>
          <p className="text-base md:text-lg text-gray-200">
            Tailored instrumentation, electrical, and mechanical services to meet your industrial needs.
          </p>
          <div className="flex flex-wrap gap-4 mt-6">
            <a
              href="/about"
              className="bg-blue-500 text-white px-6 py-3 rounded-lg text-base md:text-lg font-semibold hover:bg-blue-600 transition"
            >
              Learn More
            </a>
            <a
              href="/contact"
              className="bg-gray-300 text-gray-800 px-6 py-3 rounded-lg text-base md:text-lg font-medium hover:bg-gray-400 transition"
            >
              Contact Us
            </a>
          </div>
        </div>

      </div>
      {/* Scroll Down Indicator */}
        <ScrollDown />
    </div>
  );
};

export default Hero;
