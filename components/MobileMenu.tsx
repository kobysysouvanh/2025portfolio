"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const menuVariants = {
  open: { y: 0, opacity: 1, },
  closed: { y: "-100%", opacity: 0, },
};

const MobileMenu = ({ isOpen, closeMenu }: { isOpen: boolean; closeMenu: () => void }) => {
  return (
    <motion.div
      className="fixed top-0 left-0 w-full h-full bg-black/80 text-white z-[1000] p-4"
      initial="closed"
      animate={isOpen ? "open" : "closed"}
      variants={menuVariants}
    >
      <ul className="flex flex-col gap-4">
        <li>
          <Link href="/" onClick={closeMenu}>Home</Link>
        </li>
        <li>
          <Link href="/about" onClick={closeMenu}>About</Link>
        </li>
        <li>
          <Link href="/skills" onClick={closeMenu}>Skills</Link>
        </li>
        <li>
          <Link href="/projects" onClick={closeMenu}>Projects</Link>
        </li>
        <li>
          <Link href="/contact" onClick={closeMenu}>Contact</Link>
        </li>
      </ul>
    </motion.div>
  );
};

export default MobileMenu;