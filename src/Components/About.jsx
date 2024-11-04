import React, { useEffect, useRef, useState } from 'react';

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
        observer.disconnect();
      }
    });

    if (ref.current) {
      observer.observe(ref.current);
    }
  }, []);

  const skills = [
    {
      title: 'Frontend',
      description: 'I have experience in front-end development, creating responsive and optimized websites, with a focus on aesthetics and functionality.',
      image: '/img/Frontend.png',
    },
    {
      title: 'UI/UX Designer',
      description: 'I have experience in designing aesthetic user interfaces and seamless user experiences, focusing on user needs and business goals.',
      image: '/img/UI.png',
    },
    {
      title: 'Quality Assurance',
      description: 'I have experience in Quality Assurance, focusing on developing and implementing effective test plans to ensure application functionality and stability.',
      image: '/img/QA.png',
    },
  ];

  return (
    <section
      id="about"
      ref={ref}
      className={`py-16 bg-gray-100 text-center transition-opacity duration-1000 ${
        isVisible ? 'opacity-100' : 'opacity-0'
      }`}
    >
      <div className="container mx-auto text-center px-5">
        <h1 className="text-4xl font-bold text-gray-800 mb-10">About</h1>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 px-5">
          {skills.map((skill, index) => (
            <div
              key={index}
              className={`bg-white p-6 shadow-lg rounded-lg transform transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              } hover:scale-105 hover:shadow-xl`}
            >
              <div>
                <img
                  src={skill.image}
                  alt={skill.title}
                  className="w-16 h-16 mx-auto mb-4"
                />
                <h4 className="text-2xl font-semibold text-gray-800">
                  {skill.title}
                </h4>
                <p className="text-gray-600 mt-2">{skill.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
