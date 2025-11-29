import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

const Hero = () => {
  const heroRef = useRef(null);
  const textRefs = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(textRefs.current, {
        y: 50,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        ease: "power3.out",
        delay: 0.5
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  const addToRefs = (el) => {
    if (el && !textRefs.current.includes(el)) {
      textRefs.current.push(el);
    }
  };

  return (
    <section id="hero" ref={heroRef} className="min-h-screen flex items-center justify-center pt-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl -z-10"></div>

      <div className="container mx-auto px-6 text-center">
        <h2 ref={addToRefs} className="text-xl md:text-2xl font-medium text-blue-400 mb-4">
          👋 Hi, I'm
        </h2>
        <h1 ref={addToRefs} className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight">
          Mohanad Babgi
        </h1>
        <h3 ref={addToRefs} className="text-2xl md:text-3xl text-slate-300 mb-4">
          IT Student at King Abdulaziz University (FCIT)
        </h3>
        <p ref={addToRefs} className="text-xl text-slate-400 max-w-2xl mx-auto mb-8">
          💻 Full-Stack Developer | Cloud & DevOps Enthusiast
        </p>
        <p ref={addToRefs} className="text-lg text-slate-500 max-w-xl mx-auto mb-10">
          🚀 I enjoy designing and building practical, user-friendly software that solves real problems.
        </p>
        
        <div ref={addToRefs} className="flex justify-center gap-4">
          <button 
            onClick={() => document.getElementById('projects').scrollIntoView({ behavior: 'smooth' })}
            className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-full font-medium transition-all transform hover:scale-105"
          >
            View Work
          </button>
          <button 
            onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
            className="px-8 py-3 border border-slate-600 hover:border-slate-400 text-slate-300 hover:text-white rounded-full font-medium transition-all"
          >
            Contact Me
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
