import { useState } from "react";
import { Link as ScrollLink } from "react-scroll";
import MsLogo from "../assets/mslogo.jpeg";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // For mobile menu toggle

  const items = [
    { name: "Home", to: "hero-section", isScroll: true },
    { name: "About Us", to: "about-section", isScroll: true },
    { name: "Products and Services", to: "service-section", hasFlyout: true },
    { name: "Our Clients", to: "our-clients", isScroll: true },
    { name: "Contact Us", to: "contact-us", isScroll: true },
    { name: "Careers", link: "#careers" }, // External link
  ];

  return (
    <nav className="sticky top-0 z-50 bg-slate-100 text-black shadow">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="/" className="text-2xl font-bold">
              <img src={MsLogo} alt="MS Logo" className="w-16 h-16" />
            </a>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex flex-grow justify-center space-x-8 items-center">
            {items.map((item, index) => (
              <div key={index} className="relative">
                {item.isScroll ? (
                  <ScrollLink
                    to={item.to}
                    smooth={true}
                    duration={500}
                    className="hover:bg-gray-300 px-4 py-2 rounded-md text-base font-medium cursor-pointer"
                  >
                    {item.name}
                  </ScrollLink>
                ) : (
                  <a
                    href={item.link}
                    className="hover:bg-gray-300 px-4 py-2 rounded-md text-base font-medium"
                  >
                    {item.name}
                  </a>
                )}
              </div>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-black hover:bg-gray-300 focus:outline-none px-3 py-2 rounded-md"
            >
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Overlay and Mobile Menu */}
        {isMenuOpen && (
          <>
            {/* Black Transparent Overlay */}
            <div
              className="fixed inset-0 bg-black/50 z-40"
              onClick={() => setIsMenuOpen(false)} // Close menu when overlay is clicked
            ></div>

            {/* Mobile Menu */}
            <div className="fixed top-16 left-0 w-full bg-white z-50 p-4">
              <div className="space-y-1">
                {items.map((item, index) => (
                  <div key={index}>
                    {item.isScroll ? (
                      <ScrollLink
                        to={item.to}
                        smooth={true}
                        duration={500}
                        className="block px-3 py-2 rounded-md text-base font-medium text-gray-800 hover:bg-gray-300"
                        onClick={() => setIsMenuOpen(false)} // Close menu on click
                      >
                        {item.name}
                      </ScrollLink>
                    ) : (
                      <a
                        href={item.link}
                        className="block px-3 py-2 rounded-md text-base font-medium text-gray-800 hover:bg-gray-300"
                        onClick={() => setIsMenuOpen(false)} // Close menu on click
                      >
                        {item.name}
                      </a>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
