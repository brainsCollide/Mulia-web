import React from "react";
import Pertamina from "../assets/ClientImg/Pertamina.png";
import Chevron from "../assets/ClientImg/chevron.png";
import PLN from "../assets/ClientImg/PLN.png";

const ClientCard = ({ logo, name }) => (
  <div className="flex flex-col items-center justify-center bg-white p-8 rounded-lg shadow-md">
    <img src={logo} alt={`${name} logo`} className="h-32 sm:h-40 object-contain" />
    <p className="text-xl font-medium mt-4">{name}</p>
  </div>
);

const OurClients = () => {
  const clients = [
    { name: "Pertamina", logo: Pertamina },
    { name: "Chevron", logo: Chevron },
    { name: "PLN", logo: PLN },
    { name: "Client D", logo: "/logos/client-d.png" },
    { name: "Client E", logo: "/logos/client-e.png" },
  ];

  return (
    <section id="our-clients" className="bg-gray-100 py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center text-gray-800">Our Clients</h2>
        <p className="mt-4 text-lg text-center text-gray-600">
          We are proud to have collaborated with some of the most respected organizations in the industry.
        </p>
        <div className="mt-12 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-12">
          {clients.map((client, index) => (
            <ClientCard key={index} name={client.name} logo={client.logo} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurClients;
