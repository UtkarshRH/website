import React from "react";

const hrEmail = "hr@smartleaven.com";

const benefits = [
  "Competitive Salary",
  "Remote Work Flexibility",
  "Health Insurance",
  "Learning & Development Opportunities",
  "Team Outings & Celebrations",
  "Diverse & Inclusive Work Environment",
];

const Career = () => {
  return (
    <div className="bg-[#eee7e7] min-h-screen text-gray-800 mt-6">
      {/* Hero Section */}
      <section className="bg-solution-gradient text-white py-20 px-6 ">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 uppercase">Join Our Team</h1>
      </section>

      {/* How to Apply */}
      <section className="py-16 px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
          How to Apply
        </h2>
        <p className="text-center max-w-3xl mx-auto mb-10 text-gray-700">
          We're always on the lookout for talented individuals to join our
          growing team. If you're passionate about making an impact and ready
          to contribute, we'd love to hear from you!
        </p>
        <div className="text-center">
          <p className="text-lg md:text-xl mb-6">
            Please send your updated resume and a cover letter to our HR team at{" "}
            <span className="font-bold text-[#0048FF]">{hrEmail}</span>.
          </p>
          <p className="text-lg">
            We'll get back to you if your profile matches any of our openings.
          </p>
        </div>
      </section>

      {/* Life at Our Company */}
      {/* <section className="bg-[#FFFFFF] py-16 px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
          Life at Our Company
        </h2>
        <p className="text-center max-w-3xl mx-auto mb-10 text-gray-700">
          We believe in fostering a culture where everyone can thrive. Our
          supportive environment ensures that our employees feel valued and
          motivated to bring their best to work.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <img
            src="https://source.unsplash.com/400x300/?team,work"
            alt="Team"
            className="rounded-lg shadow-lg"
          />
          <img
            src="https://source.unsplash.com/400x300/?office"
            alt="Office"
            className="rounded-lg shadow-lg"
          />
          <img
            src="https://source.unsplash.com/400x300/?happy,employee"
            alt="Employee"
            className="rounded-lg shadow-lg"
          />
        </div>
      </section> */}

      {/* Benefits */}
      <section className="py-16 px-8 bg-solution-gradient text-white">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
          Perks & Benefits
        </h2>
        <ul className="max-w-3xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-4">
          {benefits.map((benefit, index) => (
            <li key={index} className="text-lg font-medium">
              <span className="inline-block bg-white text-[#0048FF] rounded-full p-2 mr-3">
                ✔
              </span>
              {benefit}
            </li>
          ))}
        </ul>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-8 bg-[#F0F0F0] text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Ready to Take the Next Step?
        </h2>
        <p className="text-lg md:text-xl mb-6 text-gray-700">
          Join us on our journey to create a meaningful impact.
        </p>
        <a
          href={`mailto:${hrEmail}`}
          className="bg-solution-gradient text-white font-bold py-3 px-6 rounded-lg shadow-lg hover:opacity-90 transition-opacity duration-300"
        >
          Send Your Resume
        </a>
      </section>
    </div>
  );
};

export default Career;
