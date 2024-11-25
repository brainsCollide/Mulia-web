import React from "react";

const ContactUs = () => {
  return (
    <section id="contact-us" className="bg-gray-100 py-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center text-gray-800">Contact Us</h2>
        <p className="mt-4 text-lg text-center text-gray-600">
          Reach out to us for inquiries, collaborations, or to learn more about our services.
        </p>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Contact Info */}
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold text-gray-800">Get in Touch</h3>
            <p className="mt-4 text-gray-600">
              We’re here to help. Contact us using the information below.
            </p>
            <ul className="mt-4 space-y-4 text-gray-700">
              <li>
                <strong>Address:</strong> JL. Mulawarman, No. 124 RT. 022, Sepinggan, Sepinggan,
                Kecamatan Balikpapan Selatan, Kota Balikpapan, Kalimantan Timur 76115, Indonesia
              </li>
              <li>
                <strong>Phone:</strong> +62 123 456 7890
              </li>
              <li>
                <strong>Email:</strong> info@muliasolusindo.com
              </li>
            </ul>
          </div>

          {/* Location Map */}
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold text-gray-800">Our Location</h3>
            <div className="mt-4">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.8604442304395!2d116.9260211!3d-1.2555223!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2df1444d8d014089%3A0x2d28f44773c6c6c5!2sPT.%20Mulia%20Solusindo!5e0!3m2!1sid!2str!4v1732564800329!5m2!1sid!2str"
                width="100%"
                height="250"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Company Location"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
