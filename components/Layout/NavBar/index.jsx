import React from 'react';

const NavBar = () => {
  return (
    <nav className="absolute inset-x-0 top-0 flex flex-row justify-around w-full bg-sky-400 bg-opacity-40 text-white z-50 py-4">
      <button className="rounded-full bg-white text-gray-500 w-10 h-10">
        cor
      </button>
      <div className="flex flex-row item-rigth space-x-16">
        <button>Botellas</button>
        <button>Un regalo</button>
      </div>
    </nav>
  );
};

export default NavBar;
