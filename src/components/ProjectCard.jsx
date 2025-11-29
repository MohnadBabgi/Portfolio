import React from 'react';
import { Github, ExternalLink } from 'lucide-react';

const ProjectCard = ({ project }) => {
  return (
    <div className="project-card group bg-slate-800 rounded-xl overflow-hidden border border-slate-700 hover:border-blue-500/50 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-blue-500/10 flex flex-col h-full">
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
          {project.title}
        </h3>
        <p className="text-slate-400 mb-6 flex-grow">
          {project.description}
        </p>
        
        <div className="mb-6">
          <div className="flex flex-wrap gap-2">
            {project.tech.map((t, i) => (
              <span key={i} className="text-xs font-medium px-2.5 py-1 bg-slate-700/50 text-blue-300 rounded">
                {t}
              </span>
            ))}
          </div>
        </div>

        <div className="flex gap-4 mt-auto">
          <a 
            href={project.github} 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-slate-300 hover:text-white transition-colors text-sm font-medium"
          >
            <Github size={18} /> Code
          </a>
          <a 
            href={project.demo} 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors text-sm font-medium"
          >
            <ExternalLink size={18} /> Live Demo
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
