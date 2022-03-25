import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

import CorLogo from '../../CorLogo';

const NavBar = () => {
  return (
    <nav className="fixed inset-x-0 top-0 flex flex-row justify-between px-8 sm:justify-around items-baseline w-screen bg-surface bg-opacity-60 text-white-cor z-50 py-4">
      <Link href="/" passHref>
        <motion.button>
          <CorLogo />
        </motion.button>
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
