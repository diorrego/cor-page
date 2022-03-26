import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

import CorLogo from '../../CorLogo';

const NavBar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const updateNavBar = () => {
      if (window.scrollY >= 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', updateNavBar);

    return () => {
      window.removeEventListener('scroll', updateNavBar);
    };
  }, []);

  const classes = {
    navContainer: `
      fixed
      inset-x-0
      top-0
      flex
      flex-row
      justify-between
      px-8
      sm:justify-around
      items-baseline
      w-screen
      z-50
      py-4
      ${
        scrolled
          ? 'bg-surface/60 text-white-cor animation-spin'
          : 'bg-transparent subtitle text-surface animation-apacity'
      }    
      `,
  };

  return (
    <nav className={classes.navContainer}>
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
