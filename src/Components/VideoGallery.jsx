import React, { useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Instagram } from "lucide-react";
import video1 from '../assets/video1.mp4'
import video2 from '../assets/video2.mp4'
import video3 from '../assets/video3.mp4'

const videos = [
  {
    src: video1,
    link: "https://www.instagram.com/",
  },
  {
    src: video2,
    link: "https://www.instagram.com/",
  },
  {
    src: video3,
    link: "https://www.instagram.com/",
  },
  {
    src: "https://www.pexels.com/download/video/3226454/",
    link: "https://www.instagram.com/",
  },
  {
    src: "https://www.pexels.com/download/video/5198956/",
    link: "https://www.instagram.com/",
  },
];

const VideoGallery = () => {
  const videoRefs = useRef([]);
  const [activeVideo, setActiveVideo] = useState(null);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [touchedIndex, setTouchedIndex] = useState(null);

  // --- Desktop Hover
  const handleMouseEnter = (index) => {
    setHoveredIndex(index);
    videoRefs.current.forEach((video, i) => {
      if (video) {
        if (i === index) video.play();
        else video.pause();
      }
    });
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
    videoRefs.current.forEach((video) => video && video.pause());
  };

  // --- Mobile Touch (tap once = preview, twice = fullscreen)
  const handleTouch = (index) => {
    if (touchedIndex === index) {
      setActiveVideo(index);
      setTouchedIndex(null);
      setTimeout(() => {
        if (videoRefs.current[index]) videoRefs.current[index].play();
      }, 200);
    } else {
      setTouchedIndex(index);
      videoRefs.current.forEach((video, i) => {
        if (video) {
          if (i === index) video.play();
          else video.pause();
        }
      });
    }
  };

  // --- Desktop Click -> Fullscreen
  const handleVideoClick = (index) => {
    setActiveVideo(index);
    setTimeout(() => {
      if (videoRefs.current[index]) videoRefs.current[index].play();
    }, 200);
  };

  const handleClose = () => {
    if (activeVideo !== null && videoRefs.current[activeVideo]) {
      videoRefs.current[activeVideo].pause();
    }
    setActiveVideo(null);
  };

  return (
    <section id="Gallery" className="bg-neutral-900 py-10">
      <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-8 p-5">
        Video Gallery
      </h2>

      {/* --- Scrollable video row --- */}
      <div
        className="
          flex justify-center items-center gap-3
          overflow-x-auto scroll-smooth touch-pan-x
          px-8 sm:px-6 scroll-px-8
          sm:[scrollbar-width:thin]
          sm:[-ms-overflow-style:auto]
          sm:[&::-webkit-scrollbar]:h-1.5
          sm:[&::-webkit-scrollbar-track]:bg-transparent
          sm:[&::-webkit-scrollbar-thumb]:bg-neutral-700
          sm:[&::-webkit-scrollbar-thumb]:rounded-full
          sm:[&::-webkit-scrollbar-thumb:hover]:bg-neutral-500
        "
      >
        {videos.map((video, i) => {
          const isHovered = hoveredIndex === i;
          const isTouched = touchedIndex === i;

          return (
            <div
              key={i}
              className={`
                relative shrink-0 
                w-44 sm:w-48 md:w-56 
                h-72 sm:h-80 md:h-84
                rounded-xl overflow-hidden bg-black
                transition-all duration-500 cursor-pointer
                ${isHovered || isTouched ? "w-56 sm:w-64" : ""}
              `}
              onMouseEnter={() => handleMouseEnter(i)}
              onMouseLeave={handleMouseLeave}
              onClick={() => handleVideoClick(i)}
              onTouchStart={() => handleTouch(i)}
            >
              <video
                ref={(el) => (videoRefs.current[i] = el)}
                src={video.src}
                className={`
                  w-full h-full object-cover transition-all duration-500
                  ${isHovered || isTouched ? "grayscale-0 scale-105" : "grayscale"}
                `}
                muted
                loop
                playsInline
              />
            </div>
          );
        })}
      </div>

      {/* --- Fullscreen Overlay --- */}
      <AnimatePresence>
        {activeVideo !== null && (
          <motion.div
            className="fixed inset-0 bg-black/90 flex flex-col justify-center items-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {/* Close Button */}
            <button
              onClick={handleClose}
              className="absolute top-4 right-4 text-white bg-neutral-800 hover:bg-neutral-700 rounded-full p-2 transition"
            >
              <X size={24} />
            </button>

            {/* Fullscreen Video */}
            <video
              ref={(el) => (videoRefs.current[activeVideo] = el)}
              src={videos[activeVideo].src}
              className="
                w-[90vw] sm:w-[80vw] md:w-[60vw]
                max-w-[1000px] max-h-[80vh]
                rounded-xl shadow-lg object-contain
              "
              controls
              autoPlay
              playsInline
            />

            {/* Instagram Button */}
            <a
              href={videos[activeVideo].link}
              target="_blank"
              rel="noopener noreferrer"
              className="
                mt-6 inline-flex items-center gap-2
                bg-linear-to-r from-pink-500 to-orange-400
                text-white font-semibold px-5 py-2 rounded-full
                shadow-md hover:scale-105 transition-transform
              "
            >
              <Instagram size={20} />
              View on Instagram
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default VideoGallery;
