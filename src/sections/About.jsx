import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SectionWrapper from '../components/SectionWrapper';

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const containerRef = useRef(null);
  
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".about-item", {
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
        },
        y: 30,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: "power2.out"
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const items = [
    { icon: "💡", text: "I enjoy coding — building things for fun, experimenting, and learning every day." },
    { icon: "☁️", text: "Experience with AWS (EC2, S3, IAM, RDS, CloudWatch)" },
    { icon: "🧪", text: "I enjoy problem-solving and debugging." },
    { icon: "📘", text: "Always learning and improving — from backend architecture to UI/UX polish." }
  ];

  return (
    <section id="about" ref={containerRef} className="py-20 bg-slate-800/50">
      <SectionWrapper title="About Me" subtitle="Who I am and what I do">
        <div className="grid md:grid-cols-2 gap-8 mt-10">
          <div className="space-y-6">
            {items.map((item, index) => (
              <div key={index} className="about-item flex items-start gap-4 p-4 rounded-xl bg-slate-800 hover:bg-slate-700/80 transition-colors border border-slate-700/50">
                <span className="text-3xl">{item.icon}</span>
                <p className="text-lg text-slate-300 pt-1">{item.text}</p>
              </div>
            ))}
          </div>
          <div className="about-item relative hidden md:block">
             {/* Abstract visual representation */}
             <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-2xl border border-slate-700/50 flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="text-6xl mb-4">👨‍💻</div>
                  <h3 className="text-2xl font-bold text-white mb-2">Passionate Developer</h3>
                  <p className="text-slate-400">Turning ideas into reality through code.</p>
                </div>
             </div>
          </div>
        </div>
      </SectionWrapper>
    </section>
  );
};

export default About;
