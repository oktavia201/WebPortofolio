import React, { useEffect, useRef } from 'react';

const Home = () => {
  const textRef = useRef(null);
  const imgRef = useRef(null);

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
    };

    const handleIntersect = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('opacity-100', 'translate-y-0');
          entry.target.classList.remove('opacity-0', 'translate-y-10');
        } else {
          entry.target.classList.remove('opacity-100', 'translate-y-0');
          entry.target.classList.add('opacity-0', 'translate-y-10');
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersect, observerOptions);

    if (textRef.current) observer.observe(textRef.current);
    if (imgRef.current) observer.observe(imgRef.current);

    return () => {
      if (textRef.current) observer.unobserve(textRef.current);
      if (imgRef.current) observer.unobserve(imgRef.current);
    };
  }, []);

  return (
    <main className="container mx-auto px-5">
      <section
        id="home"
        className="flex justify-between mt-10 mb-10 space-y-10 lg:space-y-0 lg:space-x-10"
      >
        <div
          ref={textRef}
          className="text-left space-y-4 opacity-0 translate-y-10 transition-all duration-700"
        >
          <h2 className="text-5xl font-bold">Hi👋, I'm Oktavia</h2>
          <p className="text-lg leading-relaxed">
            I'm a student in the Information Technology Diploma Program,
            studying to specialize in web development. With excellent
            communication, collaboration, and analytical skills, I effectively
            fulfill feature requirements. I have a curious mindset, accept
            feedback, and continue to learn. With confidence, trust, and a
            creative mindset, I contribute to strategic initiatives and deliver
            outstanding results.
          </p>
          <a
            href="/Resume_OktaviaSimatupang.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-4 px-8 py-3 bg-cyan-600 text-white font-bold rounded-full"
          >
            Resume
          </a>
        </div>
        <div
          ref={imgRef}
          className="opacity-0 translate-y-10 transition-all duration-700"
        >
          <img
            src="/img/Oktavia.jpg"
            alt="photo"
            className="w-[200px] md:w-[300px] lg:w-[500px] border-4 border-white shadow-lg rounded-full"
          />
        </div>
      </section>
    </main>
  );
};

export default Home;
