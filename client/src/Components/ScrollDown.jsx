import { Link as ScrollLink } from "react-scroll";

const ScrollDown = () => {
  return (
    <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 animate-bounce">
      <ScrollLink
          to="about-section"
          smooth={true}
          duration={500}
          className="text-gray-200 cursor-pointer"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-8 h-8"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
          <span className="sr-only">Scroll Down</span>
        </ScrollLink>
    </div>
  );
};

export default ScrollDown;
