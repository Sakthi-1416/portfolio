import { motion } from "framer-motion";
import "bootstrap-icons/font/bootstrap-icons.css";

const InstagramFloat = () => {
  return (
    <motion.a
      href="https://instagram.com/yourprofile"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 bg-linear-to-tr from-pink-500 via-purple-500 to-yellow-500 
                 text-white p-2 rounded-full shadow-xl flex items-center justify-center"
      initial={{ scale: 1 }}
      animate={{ scale: [1, 1.2, 1] }}   // infinite pulse
      transition={{
        duration: 1.5,
        repeat: Infinity,
        repeatType: "loop",
        ease: "easeInOut",
      }}
    >
      <i className="bi bi-instagram text-3xl"></i>
    </motion.a>
  );
};

export default InstagramFloat;
