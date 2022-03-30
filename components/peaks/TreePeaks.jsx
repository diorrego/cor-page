import React from 'react';

const TreePeaks = ({ className }) => {
  return (
    <svg
      viewBox="0 0 900 100"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="m0 42 113 3 112 5 113-28 112 11 113 14 112-15 113 4 112 16v49H0Z"
        className="fill-secondary-variant stroke-0"
      />
      <path
        d="m0 59 113 2 112-17 113 17 112-20 113 6 112-2 113 20 112-20v56H0Z"
        className="fill-secondary stroke-0"
      />
      <path
        d="m0 65 113 3 112 13 113-12 112 14 113-19 112 4 113 15 112-8v26H0Z"
        className="fill-surface stroke-0"
      />
    </svg>
  );
};

export default TreePeaks;
