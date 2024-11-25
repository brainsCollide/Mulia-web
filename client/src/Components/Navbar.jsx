import { useState } from "react";
import { Link as ScrollLink } from "react-scroll";
import MsLogo from "../assets/mslogo.jpeg";

const Navbar = () => {
  const [isFlyoutOpen, setIsFlyoutOpen] = useState(false); // For flyout toggle
  const [isMenuOpen, setIsMenuOpen] = useState(false); // For mobile menu toggle

  const items = [
    { name: "Home", to: "hero-section", isScroll: true },
    { name: "About Us", to: "about-section", isScroll: true },
    { name: "Products and Services", to: "service-section ", hasFlyout: true },
    { name: "Our Clients", link: "#clients" }, // External link
    { name: "Contact Us", to: "service-section", isScroll: true },
    { name: "Careers", link: "#careers" }, // External link
  ];

  const flyouts = [
    { name: "Services", link: "#services" },
    { name: "Yokogawa", link: "#yokogawa" },
    { name: "Woodward", link: "#woodward" },
  ];

  return (
    <nav className="bg-slate-100 text-black shadow">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Navbar Container */}
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
                {item.hasFlyout ? (
                  <>
                    {/* Flyout Toggle Button */}
                    <button
                      onClick={() => setIsFlyoutOpen(!isFlyoutOpen)}
                      className="inline-flex items-center gap-x-1 text-sm font-semibold text-gray-900"
                      aria-expanded={isFlyoutOpen}
                    >
                      {item.name}
                      <svg
                        className="w-5 h-5"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          fillRule="evenodd"
                          d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </button>

                    {/* Flyout Menu */}
                    {isFlyoutOpen && (
                      <div
                        className="absolute left-1/2 z-10 mt-5 w-screen max-w-md -translate-x-1/2 px-4"
                        onMouseLeave={() => setIsFlyoutOpen(false)}
                      >
                        <div className="overflow-hidden rounded-3xl bg-white text-sm shadow-lg ring-1 ring-gray-900/5">
                          <div className="p-4">
                            {flyouts.map((flyout, flyoutIndex) => (
                              <div
                                key={flyoutIndex}
                                className="group relative flex gap-x-6 rounded-lg p-4 hover:bg-gray-50"
                              >
                                <a href={flyout.link} className="font-semibold text-gray-900">
                                  {flyout.name}
                                </a>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    )}
                  </>
                ) : item.isScroll ? (
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
      </div>
    </nav>
  );
};

export default Navbar;
