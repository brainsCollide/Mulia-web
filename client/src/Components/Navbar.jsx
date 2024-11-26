import { useState } from "react";
import { Popover } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { Link as ScrollLink } from "react-scroll";
import MsLogo from "../assets/mslogo.jpeg";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State to toggle mobile menu

  const items = [
    { name: "Home", to: "hero-section", isScroll: true },
    { name: "About Us", to: "about-section", isScroll: true },
    {
      name: "Products and Services",
      to: "products-and-services",
      hasFlyout: true,
      subItems: [
        { name: "Services", to: "products-and-services", isScroll: true },
        { name: "Yokogawa", to: "yokogawa-section" },
        { name: "Woodward", to: "woodward-section" },
      ],
    },
    { name: "Our Clients", to: "our-clients", isScroll: true },
    { name: "Contact Us", to: "contact-us", isScroll: true },
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
                {item.hasFlyout ? (
                  <Popover className="relative">
                    {/* Main Button */}
                    <Popover.Button className="inline-flex items-center gap-x-1 text-sm font-semibold text-gray-900 hover:bg-gray-300 px-4 py-2 rounded-md">
                      <ScrollLink
                        to={item.to}
                        smooth={true}
                        duration={500}
                        className="cursor-pointer"
                      >
                        {item.name}
                      </ScrollLink>
                      <ChevronDownIcon className="w-5 h-5" aria-hidden="true" />
                    </Popover.Button>

                    {/* Dropdown Menu */}
                    <Popover.Panel className="absolute z-10 mt-2 w-48 rounded-md bg-white shadow-lg ring-1 ring-black/5">
                      <div className="py-1">
                        {item.subItems.map((subItem, subIndex) => (
                          <ScrollLink
                            key={subIndex}
                            to={subItem.to}
                            smooth={true}
                            duration={500}
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer"
                          >
                            {subItem.name}
                          </ScrollLink>
                        ))}
                      </div>
                    </Popover.Panel>
                  </Popover>
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
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-6 h-6"
              >
                {isMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white shadow-md rounded-lg mt-2 p-4">
            {items.map((item, index) => (
              <div key={index} className="relative">
                {item.hasFlyout ? (
                  <>
                    <ScrollLink
                      to={item.to}
                      smooth={true}
                      duration={500}
                      className="block px-4 py-2 text-base font-medium text-gray-800 hover:bg-gray-300 rounded-md"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.name}
                    </ScrollLink>
                    <div className="mt-2">
                      {item.subItems.map((subItem, subIndex) => (
                        <ScrollLink
                          key={subIndex}
                          to={subItem.to}
                          smooth={true}
                          duration={500}
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-200"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          {subItem.name}
                        </ScrollLink>
                      ))}
                    </div>
                  </>
                ) : item.isScroll ? (
                  <ScrollLink
                    to={item.to}
                    smooth={true}
                    duration={500}
                    className="block px-4 py-2 text-base font-medium text-gray-800 hover:bg-gray-300 rounded-md"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </ScrollLink>
                ) : (
                  <a
                    href={item.link}
                    className="block px-4 py-2 text-base font-medium text-gray-800 hover:bg-gray-300 rounded-md"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </a>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
