import React from "react";
import { motion } from "framer-motion";
import aboutlogo from "../assets/About.jpeg";

const Aboutme = () => {
  return (
    <section id="Aboutme" className="py-16 bg-neutral-900 text-white overflow-hidden">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row items-center gap-10">
          
          {/* Image Section */}
          <motion.div
            className="md:w-5/12"
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <div className="md:ml-4 lg:ml-10">
              <img
                className="w-full rounded-2xl object-cover shadow-lg"
                src={aboutlogo}
                alt="About Us"
              />
            </div>
          </motion.div>

          {/* Text Section */}
          <motion.div
            className="md:w-6/12 md:ml-6"
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
            viewport={{ once: true }}
          >
            <div className="md:ml-4 lg:ml-10">
              <span className="text-gray-400 uppercase tracking-wider text-sm">
                Our Story
              </span>
              <h2 className="text-4xl md:text-5xl font-bold mt-3 mb-4">
                About Us
              </h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
                ad minim veniam, quis nostrud.
              </p>
              <p className="text-gray-400 leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
                ad minim veniam.
              </p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Aboutme;
