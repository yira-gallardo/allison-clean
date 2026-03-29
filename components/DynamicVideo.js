"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function DynamicVideo({ channelHandle }) {
  const [latestVideo, setLatestVideo] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchLatestVideo = async () => {
      if (!channelHandle) {
        setError("Channel handle is required");
        setLoading(false);
        return;
      }

      try {
        const response = await fetch(
          `/api/youtube/latest?channelHandle=${encodeURIComponent(
            channelHandle
          )}`
        );

        if (!response.ok) {
          const errorData = await response.json();
          throw new Error(errorData.error || "Failed to fetch video");
        }

        const videoData = await response.json();
        setLatestVideo(videoData);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchLatestVideo();
  }, [channelHandle]);

  if (loading) {
    return (
      <motion.section
        className="relative min-h-screen overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900 to-black">
          <div className="relative z-10 h-full flex items-center justify-center px-4">
            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <motion.div
                className="animate-spin rounded-full h-12 md:h-16 w-12 md:w-16 border-b-2 border-orange-500 mx-auto mb-4"
                animate={{ rotate: 360 }}
                transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
              ></motion.div>
              <motion.p
                className="text-white text-base md:text-lg"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.4, delay: 0.4 }}
              >
                Loading latest video...
              </motion.p>
            </motion.div>
          </div>
        </div>
      </motion.section>
    );
  }

  if (error) {
    return (
      <section className="relative min-h-screen overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900 to-black">
          <div className="relative z-10 h-full flex items-center justify-center px-4">
            <div className="text-center">
              <h2 className="text-4xl md:text-6xl lg:text-8xl font-bold text-orange-500 mb-6 md:mb-8 tracking-wider">
                V I D E O
              </h2>
              <p className="text-red-400 text-base md:text-lg mb-4">
                Error: {error}
              </p>
              <p className="text-gray-400 text-sm md:text-base">
                Please check your API configuration
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  }

  if (!latestVideo) {
    return (
      <section className="relative min-h-screen overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900 to-black">
          <div className="relative z-10 h-full flex items-center justify-center px-4">
            <div className="text-center">
              <h2 className="text-4xl md:text-6xl lg:text-8xl font-bold text-orange-500 mb-6 md:mb-8 tracking-wider">
                V I D E O
              </h2>
              <p className="text-gray-400 text-sm md:text-base">
                No videos found
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  }

  const videoId = latestVideo.snippet.resourceId.videoId;

  return (
    <motion.section
      className="relative min-h-screen overflow-hidden bg-black"
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.3 }}
    >
      {/* Embedded YouTube Player - Responsive */}
      <motion.div
        className="w-full h-screen"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <iframe
          className="w-full h-full"
          src={`https://www.youtube.com/embed/${videoId}?autoplay=0&rel=0&modestbranding=1`}
          title={latestVideo.snippet.title}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
      </motion.div>
    </motion.section>
  );
}
