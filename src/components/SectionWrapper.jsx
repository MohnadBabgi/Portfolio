import React from 'react';

const SectionWrapper = ({ children, title, subtitle, className = "" }) => {
  return (
    <div className={`container mx-auto px-6 ${className}`}>
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 inline-block relative">
          {title}
          <span className="absolute -bottom-2 left-0 w-full h-1 bg-blue-500 rounded-full"></span>
        </h2>
        {subtitle && <p className="text-slate-400 mt-4 text-lg">{subtitle}</p>}
      </div>
      {children}
    </div>
  );
};

export default SectionWrapper;
