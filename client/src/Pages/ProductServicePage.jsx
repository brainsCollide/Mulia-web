import React from "react";
import Pipe from "../assets/ProductImg/Pipe.jpg";
import Valve from "../assets/ProductImg/Valve.jpg";
import Sensor from "../assets/ProductImg/Sensor.jpg";
import { motion } from "framer-motion"; // For animations

const ServiceCard = ({ title, description, image }) => (
  <motion.div
    className="bg-white p-6 rounded-lg shadow-lg"
    whileHover={{ scale: 1.05 }} // Scale animation on hover
    whileTap={{ scale: 0.95 }} // Slight shrink on tap
  >
    <img src={image} alt={title} className="w-full h-40 object-cover rounded-lg" />
    <h3 className="text-2xl font-semibold text-gray-800 mt-4">{title}</h3>
    <p className="mt-4 text-gray-600">{description}</p>
  </motion.div>
);

const ProductCard = ({ name, features, image }) => (
  <motion.div
    className="bg-gray-200 p-6 rounded-lg shadow-lg"
    whileHover={{ scale: 1.05 }} // Scale animation on hover
    whileTap={{ scale: 0.95 }} // Slight shrink on tap
  >
    <img src={image} alt={name} className="w-full h-40 object-cover rounded-lg" />
    <h3 className="text-2xl font-semibold text-gray-900 mt-4">{name}</h3>
    <ul className="mt-4 text-gray-700">
      {features.map((feature, index) => (
        <li key={index} className="list-disc ml-4">
          {feature}
        </li>
      ))}
    </ul>
  </motion.div>
);

const ProductsAndServicesPage = () => {
  const servicesData = [
    {
      title: "Instrumentation Solutions",
      description:
        "Design and installation of advanced instrumentation systems. Maintenance and calibration of industrial instruments.",
      image: Pipe,
    },
    {
      title: "Electrical Engineering",
      description:
        "Electrical system design, troubleshooting, and upgrades. Power system analysis and safety audits.",
      image: Valve,
    },
    {
      title: "Mechanical Solutions",
      description:
        "Mechanical maintenance and repairs for industrial equipment. Customized mechanical parts manufacturing.",
      image: Sensor,
    },
    {
      title: "Energy Solutions",
      description:
        "Renewable energy consulting and system installation. Energy optimization and audits.",
      image: Pipe,
    },
  ];

  const productsData = [
    {
      name: "Pressure Sensors",
      features: ["High accuracy", "Durable build", "Wide range of applications"],
      image: Sensor,
    },
    {
      name: "Industrial Valves",
      features: [
        "Customizable for various industries",
        "Efficient flow control",
        "Reliable performance",
      ],
      image: Valve,
    },
    {
      name: "Automation Controllers",
      features: ["Smart integration", "Real-time monitoring", "User-friendly interface"],
      image: Pipe,
    },
  ];

  return (
    <section id="products-and-services" className="bg-gray-100 py-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Title */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl font-bold text-gray-800">Products and Services</h2>
          <p className="mt-4 text-lg text-gray-600">
            Explore our range of services and products tailored to meet your needs.
          </p>
        </motion.div>

        {/* Services Section */}
        <motion.div
          className="mt-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <h3 className="text-3xl font-bold text-gray-800">Our Services</h3>
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {servicesData.map((service, index) => (
              <ServiceCard
                key={index}
                title={service.title}
                description={service.description}
                image={service.image}
              />
            ))}
          </div>
        </motion.div>

        {/* Products Section */}
        <motion.div
          className="mt-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <h3 className="text-3xl font-bold text-gray-800">Our Products</h3>
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {productsData.map((product, index) => (
              <ProductCard
                key={index}
                name={product.name}
                features={product.features}
                image={product.image}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProductsAndServicesPage;
