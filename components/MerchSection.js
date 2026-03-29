"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function MerchSection() {
  return (
    <motion.section
      className="relative h-screen overflow-hidden p-8 md:p-16 lg:p-24 bg-black"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.3 }}
    >
      {/* Imagen de fondo para escritorio */}
      <a
        href="https://reycamiseta.com/allison-1/"
        target="_blank"
        rel="noopener noreferrer"
        className="block w-full h-full"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <Image
            src="/img/banner-merch.jpg"
            alt="Allison Tienda Oficial"
            fill
            className="object-contain hidden md:block cursor-pointer hover:opacity-90 transition-opacity"
            priority
            style={{ objectPosition: "center center" }}
          />
        </motion.div>
      </a>

      {/* Imagen de fondo para móvil */}
      <a
        href="https://reycamiseta.com/allison-1/"
        target="_blank"
        rel="noopener noreferrer"
        className="block w-full h-full"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <Image
            src="/img/banner-merch-mobile.jpg"
            alt="Allison Tienda Oficial Mobile"
            fill
            className="object-contain block md:hidden cursor-pointer hover:opacity-90 transition-opacity"
            priority
            style={{ objectPosition: "center center" }}
          />
        </motion.div>
      </a>
    </motion.section>
  );
}
