import React from "react";
import companyImg from "../assets/AboutUs/company.jpg";
import TimelineItem from "../Components/TimelineItem";
import { ClockIcon, ShieldCheckIcon, UsersIcon, LightBulbIcon, HeartIcon } from "@heroicons/react/24/solid";

const AboutUs = () => {
  const timelineData = [
    { year: "2010", description: "PT. Mulia Solusindo was established in Balikpapan." },
    { year: "2015", description: "Expanded operations to Makassar and Bontang." },
    { year: "2022", description: "Became an Authorized Independent Service Facility (AISF) for Woodward products." },
  ];

  const values = [
    { name: "Timely", description: "Fast and accurate processes with a continuous improvement mindset for the best outcomes.", icon: ClockIcon },
    { name: "Safety", description: "Prioritizing safety, health, and environmental aspects in every business process.", icon: ShieldCheckIcon },
    { name: "Teamwork", description: "Encouraging collaboration through positive and open interactions.", icon: UsersIcon },
    { name: "Innovation", description: "Fostering creativity and providing innovative solutions to add value for all stakeholders.", icon: LightBulbIcon },
    { name: "Customer Satisfaction", description: "Delivering exceptional customer experiences through reliable and trustworthy services.", icon: HeartIcon },
  ];

  return (
    <section id="about-section" className="bg-gray-100 py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Title */}
        <h2 className="text-4xl font-bold text-center text-gray-800">About Us</h2>
        <p className="mt-4 text-lg text-center text-gray-600 mb-20">
          PT. Mulia Solusindo – Empowering Industries with Trusted Solutions.
        </p>

        {/* Introduction */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <img
              src={companyImg}
              alt="About PT. Mulia Solusindo"
              className="rounded-lg shadow-lg"
            />
          </div>

          <div>
            <h3 className="text-2xl font-semibold text-gray-800">Who We Are</h3>
            <p className="mt-4 text-gray-600 text-justify">
              PT. Mulia Solusindo provides all your needs for Woodward and Yokogawa products. We are a company engaged in the supply and service of instrumentation, electrical, and mechanical equipment such as valves, actuators, pumps, compressors, and turbines.
              PT. Mulia Solusindo was established on July 10, 2010, and is headquartered in Balikpapan. We currently have a branch in Makassar and a representative office in Bontang. PT. Mulia Solusindo holds the Certificate of Authorized Service Facility (AISF) for Woodward products and has sole agency rights for Woodward and Yokogawa products in East Kalimantan.
            </p>
          </div>
        </div>

        {/* Interactive Timeline */}
      <div className="relative flex items-center justify-center my-20">
        {/* Horizontal Line */}
        <div className="absolute top-6 left-0 w-full h-px bg-gray-300"></div>

        {/* Timeline Items */}
        {timelineData.map((item, index) => (
          <div key={index} className="relative">
            <TimelineItem year={item.year} description={item.description} />
            {/* Hide the connector on the last item */}
            {index !== timelineData.length - 1 && (
              <div className="absolute top-6 right-0 w-8 h-px bg-gray-300"></div>
            )}
          </div>
        ))}
      </div>


      {/* Mission and Vision */}
      <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="relative bg-blue-100 p-8 flex flex-col justify-center rounded-lg shadow-lg">
          <h4 className="text-3xl font-bold text-gray-800">Our Mission</h4>
          <ul className="mt-4 text-gray-700 list-disc list-inside space-y-3">
            <li>To enhance the company’s quality through innovation, creativity, excellent service, and cost-effectiveness.</li>
            <li>Providing excellent service that exceeds customer expectations, both internally and externally.</li>
            <li>Enhancing employee competence through training and creating growth opportunities for all employees.</li>
            <li>Building mutually beneficial partnerships with customers and business partners.</li>
            <li>Delivering the best return on investment to shareholders.</li>
          </ul>
        </div>

        <div className="relative bg-gray-100 p-8 flex flex-col rounded-lg shadow-lg">
          <h4 className="text-3xl font-bold text-gray-800">Our Vision</h4>
          <p className="mt-4 text-gray-700">
            To become a leading supply and service company in Indonesia in the fields of instrumentation, electrical, and mechanical within the energy sector by placing customer satisfaction as the top priority.
          </p>
        </div>
      </div>

      {/* Core Values */}
      <div className="mt-16">
        <h3 className="text-3xl font-bold text-center text-gray-800">Our Values</h3>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {values.map(({ name, description, icon: Icon }) => (
            <div 
              key={name} 
              className="flex items-center gap-4 p-4 rounded-lg bg-white shadow-lg hover:shadow-lg
              transform transition-transform duration-300 hover:scale-105">
              <Icon className="w-40 h-40 text-blue-500" />
              <div>
                <h4 className="text-lg font-semibold text-gray-800">{name}</h4>
                <p className="text-gray-600">{description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);
};

export default AboutUs;
