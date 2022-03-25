import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

const NavBar = () => {
  return (
    <nav className="fixed inset-x-0 top-0 flex flex-row justify-around px-2 sm:justify-around items-center w-screen bg-sky-400 bg-opacity-40 text-white z-50 py-4">
      <Link href="/" passHref>
        <button className="rounded-full bg-white text-gray-500 w-10 h-10">
          cor
        </button>
      </Link>

      <div className="flex flex-row item-rigth space-x-5 sm:space-x-16">
        <Link href="/products" passHref>
          <motion.button>Productos</motion.button>
        </Link>
        <Link href="/us" passHref>
          <motion.button>Sobre nosotros</motion.button>
        </Link>
      </div>
    </nav>
  );
};

export default NavBar;
