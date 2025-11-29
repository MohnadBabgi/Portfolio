import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 py-8 border-t border-slate-800">
      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="text-slate-400 text-sm">
          © {currentYear} Mohanad Babgi. All rights reserved.
        </div>
        
        <div className="flex gap-6">
          <a href="https://github.com/mohanadbabgi" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors">
            <Github size={20} />
          </a>
          <a href="https://www.linkedin.com/in/mohanadbabgi/" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors">
            <Linkedin size={20} />
          </a>
          <a href="mailto:mohanadbabgi@gmail.com" className="text-slate-400 hover:text-white transition-colors">
            <Mail size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
