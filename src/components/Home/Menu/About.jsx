import React from "react";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="bg-gray-50 text-gray-800 mt-6">
      {/* Hero Section */}
      <section className="bg-solution-gradient text-white py-20 text-start">
        <div className="max-w-5xl mx-12">
          <h1 className="text-5xl font-bold mb-6">About Us</h1>
          <p className="text-lg">
            At Smartleaven Technology, we are shaping a smarter, more
            sustainable future through innovation and leadership. Our commitment
            to excellence drives us to deliver top-tier solutions across industries.
          </p>
        </div>
      </section>

      {/* Mission and Vision Section */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-indigo-800 mb-6">
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

      {/* Sustainability and Industry Leadership */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-indigo-800 mb-6">
            Sustainability and Industry Leadership
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            We are committed to creating a sustainable future while setting
            benchmarks in industry innovation. Through our industry-leading
            products and services, we aim to address global challenges and make a
            lasting impact on society and the environment.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition">
              <h3 className="text-xl font-semibold text-indigo-800 mb-4">
                Environmental Stewardship
              </h3>
              <p>
                At Smartleaven Technology, we believe in minimizing our carbon
                footprint and environmental impact. We are actively working
                towards achieving sustainability in our operations and encouraging
                eco-friendly practices both internally and within the products
                and services we offer.
              </p>
              <p className="mt-4">
                By utilizing renewable energy sources, reducing waste, and
                prioritizing green technologies, we ensure that every solution we
                provide aligns with our commitment to a healthier planet.
              </p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition">
              <h3 className="text-xl font-semibold text-indigo-800 mb-4">
                Industry Innovation
              </h3>
              <p>
                We are proud to be at the forefront of technological advancement,
                pioneering solutions in artificial intelligence, machine learning,
                and Internet of Things (IoT). Our cutting-edge solutions help
                businesses across industries streamline operations, improve
                efficiency, and foster digital transformation.
              </p>
              <p className="mt-4">
                We don't just follow trends—we set them, constantly exploring new
                technologies to deliver smarter, more scalable solutions.
              </p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition">
              <h3 className="text-xl font-semibold text-indigo-800 mb-4">
                Community Impact
              </h3>
              <p>
                We understand the importance of giving back to the communities we
                serve. Through strategic partnerships, philanthropic efforts, and
                employee volunteerism, we actively contribute to positive societal
                change.
              </p>
              <p className="mt-4">
                Whether it's supporting local education, promoting diversity and
                inclusion, or aiding global relief efforts, we’re dedicated to
                making a meaningful difference in the world.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Careers Section */}
      {/* <section className="py-20 px-6 bg-solution-gradient text-white text-center">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-6">Careers at Smartleaven</h2>
          <p className="text-lg mb-8">
            Join a team of innovators dedicated to making a difference. Explore
            opportunities to grow your career with us and help shape the future
            of technology.
          </p>
          <Link
            to='career'
            className="inline-block bg-white text-indigo-800 font-semibold py-3 px-6 rounded-lg shadow-md hover:bg-gray-200 transition"
          >
            Explore Careers
          </Link>
        </div>
      </section> */}

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
                Address
              </h3>
              <p>1234 Technology Drive, City, Country</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition">
              <h3 className="text-xl font-semibold text-indigo-800 mb-2">
                Phone
              </h3>
              <p>+1 (234) 567-890</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition">
              <h3 className="text-xl font-semibold text-indigo-800 mb-2">
                Email
              </h3>
              <p>contact@smartleaven.com</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
