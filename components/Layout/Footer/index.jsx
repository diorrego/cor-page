import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { AiFillInstagram, AiFillFacebook } from 'react-icons/ai';

import CorLogo from '../../CorLogo';

const Footer = () => {
  return (
    <footer className="flex flex-col space-y-16 px-8 sm:px-0 pt-8 pb-40 w-full bg-background text-white-cor">
      <section className="flex flex-row justify-around items-baseline w-full">
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
      </section>
      <section className="flex flex-row justify-around items-center w-full">
        <div>agua@corchile.com</div>
        <div className="flex flex-row space-x-2 text-3xl items-center">
          <motion.button>
            <AiFillFacebook />
          </motion.button>
          <motion.button>
            <AiFillInstagram />
          </motion.button>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
