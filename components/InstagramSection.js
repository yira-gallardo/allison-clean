"use client";

import { useEffect } from "react";
import { motion } from "framer-motion";

export default function InstagramSection() {
  useEffect(() => {
    // Load LightWidget script if not already loaded
    if (
      !document.querySelector(
        'script[src="https://cdn.lightwidget.com/widgets/lightwidget.js"]'
      )
    ) {
      const script = document.createElement("script");
      script.src = "https://cdn.lightwidget.com/widgets/lightwidget.js";
      script.async = true;
      document.head.appendChild(script);
    }
  }, []);

  return (
    <motion.section
      className="pt-8 pb-16 relative"
      style={{
        backgroundImage: "url('/img/textura.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.3 }}
    >
      {/* Overlay para mantener la legibilidad del texto */}
      <div className="absolute inset-0 bg-black/60"></div>
      <div className="container mx-auto px-4 relative z-10">
        {/* Instagram Title */}
        <motion.div
          className="flex justify-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <img
            src="/img/igtext_mob.png"
            alt="INSTAGRAM"
            className="w-full max-w-2xl h-auto px-4"
          />
        </motion.div>

        {/* LightWidget Instagram Feed */}
        <motion.div
          className="max-w-6xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          {" "}
          <iframe
            src="https://cdn.lightwidget.com/widgets/09ab80bcab075737b48dba2c4f67b1a5.html"
            scrolling="no"
            allowtransparency="true"
            class="lightwidget-widget"
            style={{
              width: "100%",
              border: 0,
              overflow: "hidden",
              minHeight: "600px", // Ensure minimum height for loading
            }}
            title="Instagram Feed"
          />
        </motion.div>
      </div>
    </motion.section>
  );
}
