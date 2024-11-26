import {
    EnvelopeIcon,
    MapPinIcon,
    PhoneIcon,
  } from "@heroicons/react/24/outline";
  
  const Footer = () => {
    return (
      <footer className="bg-gray-800 text-gray-200 py-12">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          {/* Grid Layout */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Company Info */}
            <div>
              <h3 className="text-lg font-bold text-white mb-4">PT. Mulia Solusindo</h3>
              <p className="text-sm text-gray-400">
                Empowering industries with trusted instrumentation, electrical,
                and mechanical solutions since 2010.
              </p>
            </div>
  
            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li>
                  <a href="#about-section" className="hover:text-blue-400 transition">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#products-and-services" className="hover:text-blue-400 transition">
                    Products & Services
                  </a>
                </li>
                <li>
                  <a href="#our-clients" className="hover:text-blue-400 transition">
                    Our Clients
                  </a>
                </li>
                <li>
                  <a href="#contact-us" className="hover:text-blue-400 transition">
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>
  
            {/* Contact Info */}
            <div>
              <h4 className="text-lg font-semibold text-white mb-4">Contact Info</h4>
              <ul className="space-y-4 text-sm">
                <li className="flex items-center gap-2">
                  <MapPinIcon className="w-5 h-5 text-blue-400" />
                  <span>Balikpapan, Indonesia</span>
                </li>
                <li className="flex items-center gap-2">
                  <PhoneIcon className="w-5 h-5 text-blue-400" />
                  <span>+62 123 456 7890</span>
                </li>
                <li className="flex items-center gap-2">
                  <EnvelopeIcon className="w-5 h-5 text-blue-400" />
                  <span>info@muliasolusindo.com</span>
                </li>
              </ul>
            </div>
          </div>
  
          {/* Footer Bottom */}
          <div className="mt-8 border-t border-gray-700 pt-6 text-center text-sm text-gray-500">
            <p>&copy; {new Date().getFullYear()} PT. Mulia Solusindo. All rights reserved.</p>
          </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  