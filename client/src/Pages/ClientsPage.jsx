import React from "react";
import Pertamina from "../assets/ClientImg/Pertamina.png";
import Chevron from "../assets/ClientImg/chevron.png";
import PLN from "../assets/ClientImg/PLN.png";
import Schneider from "../assets/ClientImg/Schneider.png";
import Adaro from "../assets/ClientImg/adaro.png";

const ClientCard = ({ logo, name }) => (
  <div className="group flex flex-col items-center justify-center bg-white p-8 md:p-12 rounded-xl shadow-lg transition-transform transform hover:scale-105 hover:shadow-2xl">
    <img
      src={logo}
      alt={`${name} logo`}
      className="h-32 md:h-48 object-contain"
    />
    <p className="text-xl md:text-2xl font-bold mt-6 text-gray-700 group-hover:text-blue-500 transition-colors">
      {name}
    </p>
  </div>
);

const OurClients = () => {
  const clients = [
    { name: "Pertamina", logo: Pertamina },
    { name: "Chevron", logo: Chevron },
    { name: "PLN", logo: PLN },
    { name: "Schneider", logo: Schneider },
    { name: "Adaro", logo: Adaro },
  ];

  return (
    <section
      id="our-clients"
      className="bg-gradient-to-br from-gray-100 to-gray-200 py-24"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Title */}
        <h2 className="text-5xl font-extrabold text-center text-gray-800">
          Our Clients
        </h2>
        <p className="mt-6 text-lg md:text-xl text-center text-gray-600">
          We are proud to have collaborated with some of the most respected
          organizations in the industry.
        </p>

        {/* Clients Grid */}
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12 lg:gap-16">
          {clients.map((client, index) => (
            <ClientCard key={index} name={client.name} logo={client.logo} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurClients;
