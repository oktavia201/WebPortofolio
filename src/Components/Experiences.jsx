import React, { useEffect } from 'react';

const useInViewAnimation = () => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('opacity-100', 'translate-y-0');
            entry.target.classList.remove('opacity-0', 'translate-y-10');
          } else {
            entry.target.classList.remove('opacity-100', 'translate-y-0');
            entry.target.classList.add('opacity-0', 'translate-y-10');
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll('.animate-on-scroll');
    elements.forEach((element) => observer.observe(element));

    return () => {
      elements.forEach((element) => observer.unobserve(element));
    };
  }, []);
};

const Experiences = () => {
  useInViewAnimation();

  return (
    <section id="experiences" className="py-10 bg-gray-200">
      <div className="container mx-auto">
        {/* Title Section */}
        <h1 className="text-4xl font-bold text-gray-800 mb-10 text-center animate-on-scroll opacity-0 translate-y-10 transition-all duration-700">
          Experiences and Skills
        </h1>

        {/* Flex Container for Experience and Skills Titles */}
        <div className="flex flex-col md:flex-row justify-between mb-8">
          <div className="text-left p-5 w-full md:w-1/2">
            <h2 className="text-3xl font-bold text-gray-800 h-16 flex items-center animate-on-scroll opacity-0 translate-y-10 transition-all duration-700">
              Experience
            </h2>
          </div>
          <div className="text-left p-5 w-full md:w-1/2">
            <h2 className="text-3xl font-bold text-gray-800 h-16 flex items-center animate-on-scroll opacity-0 translate-y-10 transition-all duration-700">
              Technical Skills
            </h2>
          </div>
        </div>

        {/* Main Content Container */}
        <div className="flex flex-wrap justify-between">
          {/* Experiences List */}
          <div className="space-y-5 w-full md:w-1/2 mb-10">
            {[ // Experience data
              {
                title: 'Coder & UI/UX Designer at TobaZell',
                description:
                  'This project is making a game called TobaZell made with IOS-based technology while participating in the Foundation Program at Apple Developer Academy @Infinite Learning.',
                date: '10 Jun 2024 - 19 Jul 2024',
              },
              {
                title:
                  'Project Manager, User Interface Design, Quality Assurance at Bulbul Creative-Ta Design',
                description:
                  'This project facilitates admins in the product sales process and helps customers in ordering goods in the form of handicrafts.',
                date: 'Jan 2024 - Jun 2024',
              },
              {
                title:
                  'Quality Assurance at Wijaya Farma Drug Store Website Design',
                description:
                  'This project aids admins in the product sales process and provides customers with information about medicines and diseases.',
                date: 'Jan 2023 - Jun 2023',
              },
            ].map((experience, index) => (
              <div
                key={index}
                className="text-left bg-white p-5 shadow-md rounded-lg animate-on-scroll opacity-0 translate-y-10 transition-all duration-700 transform hover:scale-105 hover:shadow-xl"
              >
                <h4 className="font-semibold">{experience.title}</h4>
                <p>{experience.description}</p>
                <h4 className="text-sm text-gray-500">{experience.date}</h4>
              </div>
            ))}
          </div>

          {/* Technical Skills List */}
          <div className="w-full md:w-1/2 mt-1 p-5 text-left">
            <p className="mb-4 animate-on-scroll opacity-0 translate-y-10 transition-all duration-700">
              I have honed my skills in various areas of technology, focusing on
              frontend development, UI/UX design, and quality assurance.
            </p>
            <ul className="list-disc list-inside text-left space-y-2">
              {[ // Technical skills data
                'HTML',
                'CSS',
                'JavaScript',
                'Figma',
                'MySQL',
                'Selenium',
                'Cucumber',
                'Robot Framework',
                'VSCode',
                'XCode',
              ].map((skill, index) => (
                <li
                  key={index}
                  className="mb-2 animate-on-scroll opacity-0 translate-y-10 transition-all duration-700"
                >
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experiences;
