import React from 'react';

const NavBar = () => {
  return (
    <nav className="absolute inset-x-0 top-0 flex flex-row justify-around w-full bg-green-600 z-50 py-4">
      <button className="rounded-full bg-yellow-200 text-gray-500 w-10 h-10">
        cor
      </button>
      <div className="flex flex-row item-rigth space-x-6">
        <button>Botellas</button>
        <button>Un regalo</button>
      </div>
    </nav>
  );
};

export default NavBar;
