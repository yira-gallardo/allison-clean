"use client";

import Image from "next/image";
import Navigation from "./Navigation";
import { motion } from "framer-motion";

export default function Banner() {
  return (
    <motion.div
      className="relative h-screen overflow-hidden bg-black"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      {/* Imagen de fondo para escritorio */}
      <motion.div
        initial={{ scale: 1.1, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
      >
        <a
          href="https://linktr.ee/allisonband"
          target="_blank"
          rel="noopener noreferrer"
          className="block w-full h-full cursor-pointer"
        >
          <Image
            src="/img/banner.jpg"
            alt="Allison Euforia Tour Banner"
            fill
            className="object-cover hidden md:block hover:opacity-90 transition-opacity duration-300"
            priority
          />
        </a>
      </motion.div>

      {/* Imagen de fondo para móvil */}
      <motion.div
        className="bg-black"
        initial={{ scale: 1.1, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
      >
        <a
          href="https://linktr.ee/allisonband"
          target="_blank"
          rel="noopener noreferrer"
          className="block w-full h-full cursor-pointer"
        >
          <Image
            src="/img/banner-mobile.jpg"
            alt="Allison Euforia Tour Banner Mobile"
            fill
            className="object-contain block md:hidden hover:opacity-90 transition-opacity duration-300"
            priority
          />
        </a>
      </motion.div>

      {/* Navegación superior - posicionada absolutamente */}
      <motion.div
        className="absolute top-0 left-0 right-0 z-20"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        <Navigation />
      </motion.div>
    </motion.div>
  );
}
