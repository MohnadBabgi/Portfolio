import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SectionWrapper from '../components/SectionWrapper';
import TechBadge from '../components/TechBadge';

gsap.registerPlugin(ScrollTrigger);

const TechStack = () => {
  const containerRef = useRef(null);

  const categories = [
    {
      title: "Programming Languages",
      skills: ["JavaScript (ES6+)", "TypeScript", "Java", "C#", "Python", "SQL"]
    },
    {
      title: "Frontend",
      skills: ["React", "Vite", "Tailwind CSS", "GSAP Animations"]
    },
    {
      title: "Backend",
      skills: ["Node.js (Express)", "ASP.NET Core Web API"]
    },
    {
      title: "Databases",
      skills: ["PostgreSQL", "SQLite", "Oracle DB", "MySQL"]
    },
    {
      title: "Cloud & DevOps",
      skills: ["AWS EC2", "AWS S3", "AWS IAM", "AWS CloudWatch", "Docker", "Docker Compose", "VirtualBox + Vagrant", "GitHub Actions", "GitLab CI/CD", "Jenkins"]
    }
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".tech-category", {
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
        },
        y: 40,
        opacity: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: "power2.out"
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="tech" ref={containerRef} className="py-20">
      <SectionWrapper title="Tech Stack" subtitle="Tools and technologies I work with">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category, index) => (
            <div key={index} className="tech-category bg-slate-800/50 p-6 rounded-xl border border-slate-700 hover:border-blue-500/50 transition-colors">
              <h3 className="text-xl font-semibold text-white mb-4 border-b border-slate-700 pb-2">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, idx) => (
                  <TechBadge key={idx} name={skill} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </SectionWrapper>
    </section>
  );
};

export default TechStack;
