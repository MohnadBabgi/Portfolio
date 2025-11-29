import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Mail, Linkedin, Send } from 'lucide-react';
import SectionWrapper from '../components/SectionWrapper';

gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".contact-content", {
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
        },
        y: 30,
        opacity: 0,
        duration: 0.8,
        ease: "power2.out"
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="contact" ref={containerRef} className="py-20">
      <SectionWrapper title="Get In Touch" subtitle="Let's work together">
        <div className="contact-content max-w-2xl mx-auto bg-slate-800 rounded-2xl p-8 md:p-12 border border-slate-700 text-center shadow-2xl">
          <div className="w-16 h-16 bg-blue-500/10 rounded-full flex items-center justify-center mx-auto mb-6">
            <Send className="text-blue-500" size={32} />
          </div>
          
          <h3 className="text-2xl font-bold text-white mb-4">Contact Me</h3>
          <p className="text-slate-400 mb-8">
            I'm currently looking for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
          </p>

          <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
            <a 
              href="mailto:mohanadbabgi@gmail.com"
              className="flex items-center gap-3 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-all w-full md:w-auto justify-center"
            >
              <Mail size={20} />
              Email Me
            </a>
            <a 
              href="https://www.linkedin.com/in/mohanadbabgi/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 px-6 py-3 bg-slate-700 hover:bg-slate-600 text-white rounded-lg font-medium transition-all w-full md:w-auto justify-center"
            >
              <Linkedin size={20} />
              LinkedIn
            </a>
          </div>
          
          <div className="mt-8 pt-8 border-t border-slate-700">
            <p className="text-slate-500 text-sm">
              mohanadbabgi@gmail.com
            </p>
          </div>
        </div>
      </SectionWrapper>
    </section>
  );
};

export default Contact;
