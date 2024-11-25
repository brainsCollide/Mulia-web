import React from "react";
import companyImg from "../assets/AboutUs/company.jpg";
import TimelineItem from "../Components/TimelineItem";


const AboutUs = () => {
  const timelineData = [
    { year: "2010", description: "PT. Mulia Solusindo was established in Balikpapan." },
    { year: "2015", description: "Expanded operations to Makassar and Bontang." },
    { year: "2022", description: "Became an Authorized Independent Service Facility (AISF) for Woodward products." },
  ];

  return (
    <section id="about-section" className="bg-gray-100 py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Title */}
        <h2 className="text-4xl font-bold text-center text-gray-800">About Us</h2>
        <p className="mt-4 text-lg text-center text-gray-600">
          PT. Mulia Solusindo – Empowering Industries with Trusted Solutions.
        </p>

        {/* Introduction */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Image */}
          <div>
            <img
              src={companyImg}
              alt="About PT. Mulia Solusindo"
              className="rounded-lg shadow-lg"
            />
          </div>
          
          {/* Text Content */}
          <div>
            <h3 className="text-2xl font-semibold text-gray-800">Who We Are</h3>
            <p className="mt-4 text-gray-600 text-justify">
              Established in 2010, PT. Mulia Solusindo specializes in providing
              instrumentation, electrical, and mechanical solutions for energy
              and industrial sectors. With offices in Balikpapan, Makassar, and
              Bontang, we are committed to delivering reliable and innovative
              solutions tailored to our clients' needs.
            </p>
          </div>
        </div>

        {/* Interactive Timeline */}
        <div className="mt-16">
          <h3 className="text-2xl font-semibold text-gray-800 text-center">Our Journey</h3>
          <div className="mt-8 flex flex-col md:flex-row items-center gap-12">
            <div className="relative md:w-1/2 mx-auto">
              <div className="ml-8">
                {timelineData.map((item, index) => (
                  <TimelineItem
                    key={index}
                    year={item.year}
                    description={item.description}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Full-Width Mission & Vision */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Mission Section */}
          <div className="relative bg-blue-100 p-8 flex flex-col justify-center rounded-lg shadow-lg">
            <h4 className="text-3xl font-bold text-gray-800">Our Mission</h4>
            <p className="mt-4 text-gray-700">
              Delivering high-quality solutions while prioritizing safety and
              customer satisfaction. We aim to empower industries with trusted,
              innovative, and sustainable practices.
            </p>
          </div>

          {/* Vision Section */}
          <div className="relative bg-gray-100 p-8 flex flex-col justify-center rounded-lg shadow-lg">
            <h4 className="text-3xl font-bold text-gray-800">Our Vision</h4>
            <p className="mt-4 text-gray-700">
              To be the leading provider of sustainable industrial solutions,
              shaping the future of energy and manufacturing with reliability
              and innovation.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
