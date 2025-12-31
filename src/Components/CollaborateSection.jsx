import React, { useState } from "react";
import { motion } from "framer-motion";

const CollaborateSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      // 🔗 Replace this URL with your Google Apps Script Web App URL
      const scriptURL =
        "https://script.google.com/macros/s/AKfycbzspHo8fQfUmoY8Kd5jKugSIoQbUirQ-JLCtCwd-Sd53Ge-QnqQhlmJyFx3-9aJ4DX04Q/exec";

      const response = await fetch(scriptURL, {
        method: "POST",
        mode: "no-cors",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      setSuccess(true);
      setFormData({ name: "", mobile: "", email: "", message: "" });
    } catch (error) {
      console.error("Error:", error);
      alert("Something went wrong. Try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="bg-neutral-950 text-white py-16 px-6 md:px-12">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-3xl mx-auto text-center"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-linear-to-r from-pink-500 to-orange-400 bg-clip-text text-transparent">
          Let’s Collaborate
        </h2>
        <p className="text-neutral-400 mb-10 text-lg">
          Have an idea or a project? Fill out the form below and I’ll reach out
          soon.
        </p>

        <form
          onSubmit={handleSubmit}
          className="bg-neutral-900/60 backdrop-blur-md rounded-2xl p-8 shadow-xl space-y-6"
        >
          <div className="grid md:grid-cols-2 gap-6">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 rounded-xl bg-neutral-800 focus:bg-neutral-700 focus:ring-2 focus:ring-pink-500 outline-none transition"
            />
            <input
              type="tel"
              name="mobile"
              placeholder="Mobile Number"
              value={formData.mobile}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 rounded-xl bg-neutral-800 focus:bg-neutral-700 focus:ring-2 focus:ring-orange-400 outline-none transition"
            />
          </div>

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-4 mb-5 py-3 rounded-xl bg-neutral-800 focus:bg-neutral-700 focus:ring-2 focus:ring-pink-500 outline-none transition"
          />

          <textarea
            name="message"
            placeholder="What kind of work do you need?"
            value={formData.message}
            onChange={handleChange}
            rows="5"
            required
            className="w-full px-4 mb-5 py-3 rounded-xl bg-neutral-800 focus:bg-neutral-700 focus:ring-2 focus:ring-orange-400 outline-none resize-none transition"
          ></textarea>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            type="submit"
            disabled={loading}
            className={`w-full py-3 rounded-3xl font-semibold transition ${
              loading
                ? "bg-neutral-700 cursor-not-allowed"
                : "bg-linear-to-r from-pink-500 to-orange-400 hover:opacity-90"
            }`}
          >
            {loading ? "Sending..." : "Send Message"}
          </motion.button>

          {success && (
            <p className="text-green-400 mt-4">✅ Message sent successfully!</p>
          )}
        </form>
      </motion.div>
    </section>
  );
};

export default CollaborateSection;
