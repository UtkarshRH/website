import React from "react";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="bg-gray-50 text-gray-800 mt-6">
      {/* Hero Section */}
      <section className="bg-solution-gradient text-white py-20 text-start">
        <div className="max-w-5xl mx-6">
          <h1 className="text-5xl font-bold mb-6">About Us</h1>
          {/* <p className="text-lg">
            At Smartleaven Technology, we are shaping a smarter, more
            sustainable future through innovation and leadership. Our commitment
            to excellence drives us to deliver top-tier solutions across industries.
          </p> */}
        </div>
      </section>

      {/* Mission and Vision Section */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-6xl mx-auto text-justify">
          <h2 className="text-[2rem] font-bold text-indigo-800 mb-6">
            Company Mission and Vision
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Our mission is to empower businesses with cutting-edge digital
            solutions, while our vision is to lead the industry in innovation
            and sustainability. We believe in driving progress and ensuring our
            products and services contribute to a better, more sustainable world.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="p-8 bg-gray-100 rounded-lg shadow-md hover:shadow-xl transition">
              <h3 className="text-2xl font-bold text-indigo-800 mb-4">
                Our Mission
              </h3>
              <p>
                Our mission is to deliver innovative technologies that solve real-world
                challenges, empower businesses, and drive sustainable growth. By
                focusing on practical and transformative solutions, we aim to bring
                measurable impact to industries globally.
              </p>
              <p className="mt-4">
                We are constantly pushing the boundaries of what's possible in
                the world of digital transformation, helping businesses optimize
                their operations and maximize their potential.
              </p>
            </div>
            <div className="p-8 bg-gray-100 rounded-lg shadow-md hover:shadow-xl transition">
              <h3 className="text-2xl font-bold text-indigo-800 mb-4">
                Our Vision
              </h3>
              <p>
                Our vision is to be a global leader in digital transformation and
                sustainable innovation, shaping the industries of tomorrow. We
                aspire to create a future where technology is seamlessly integrated
                into daily operations, making life easier, smarter, and more
                sustainable.
              </p>
              <p className="mt-4">
                We envision a world where businesses not only succeed but thrive
                by embracing the power of innovation and sustainability, driving
                the global shift towards a smarter, more connected society.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 px-6 bg-gray-100">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-indigo-800 mb-6">
            Get in Touch
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Have questions or want to learn more? Connect with us today.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition">
              <h3 className="text-xl font-semibold text-indigo-800 mb-2">
                India
              </h3>
              <p>
                <strong>Head Office:</strong> <br />
                Phone: +91-7263899810 <br />
                Email: info@smartleaven.com
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition">
              <h3 className="text-xl font-semibold text-indigo-800 mb-2">
                UK
              </h3>
              <p>
                Phone: +44 742 904 7477 <br />
                Phone: +44 131 538 9337 <br />
                Email: info@smartleaven.com
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition">
              <h3 className="text-xl font-semibold text-indigo-800 mb-2">
                USA
              </h3>
              <p>
                <strong>West Coast:</strong> <br />
                Phone: +1 408-438-1246 56346 <br />
                Email: info@smartleaven.com
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
