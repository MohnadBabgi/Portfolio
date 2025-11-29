import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SectionWrapper from '../components/SectionWrapper';
import ProjectCard from '../components/ProjectCard';
import projectsData from '../data/projects.json';

gsap.registerPlugin(ScrollTrigger);

const Projects = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".project-card-wrapper", {
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
        },
        y: 50,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: "power2.out"
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="projects" ref={containerRef} className="py-20 bg-slate-800/30">
      <SectionWrapper title="Featured Projects" subtitle="Some of the things I've built">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map((project) => (
            <div key={project.id} className="project-card-wrapper h-full">
              <ProjectCard project={project} />
            </div>
          ))}
        </div>
      </SectionWrapper>
    </section>
  );
};

export default Projects;
