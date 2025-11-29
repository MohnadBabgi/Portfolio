import React from 'react';

const TechBadge = ({ name }) => {
  return (
    <span className="px-4 py-2 bg-slate-800 text-slate-300 rounded-lg text-sm font-medium border border-slate-700 hover:border-blue-500 hover:text-blue-400 transition-colors cursor-default">
      {name}
    </span>
  );
};

export default TechBadge;
