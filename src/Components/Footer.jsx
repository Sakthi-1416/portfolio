import React from "react";

const Footer = () => {
  return (
    <footer className="bg-(--bg) w-full  text-(--text) border-t border-white/10 py-10 ">
      <div className="container px-4 md:px-10">
        <div className="row gy-4">
          {/* Section 1 */}
          <div className="col-6 col-md-2">
            <h5 className="text-white mb-3">Useful Links</h5>
            <ul className="nav flex-column gap-2">
              <li>
                <a
                  href="#"
                  className="text-(--accent-light) hover:text-(--accent) transition"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-(--accent-light) hover:text-(--accent) transition"
                >
                  About Me
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-(--accent-light)r:text-[var(--accent)] transition"
                >
                  Portfolio
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-(--accent-light) hover:text-(--accent) transition"
                >
                  Gallery
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-(--accent-light) hover:text-(--accent) transition"
                >
                  Contact 
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="col-md-5 offset-md-1">
            <h5 className="text-white mb-2">Book a Photoshoot or Collaboration</h5>
            <p className="text-sm text-gray-400 mb-3">
               I capture moments that tell your story. If you’re looking for professional photography services, let’s connect and create something unforgettable.
            </p>
            {/* <div className="d-flex flex-column flex-sm-row w-100 gap-2">
              <input
                id="newsletter1"
                type="email"
                className="form-control bg-white/10 border border-white/20 text-white placeholder-gray-400"
                placeholder="Email address"
              />
              <button
                className=" w-auto p-2 rounded-2xl! bg-blue-600 text-white hover:bg-blue-900"
                type="button"
              >
                Subscribe
              </button>
            </div> */}
          </div>
        </div>

        <div className="d-flex flex-column flex-sm-row justify-content-between align-items-center mt-5 border-t border-white/10 pt-4">
          <p className="text-gray-400 m-0">
            © 2025 Joe Creations, Inc. All rights reserved.
          </p>
          <ul className="list-unstyled d-flex gap-3 mt-3 mt-sm-0">
            <li>
              <a
                href="#"
                className="text-(--accent-light) hover:text-(--accent) transition"
                aria-label="Instagram"
              >
                <i className="bi bi-instagram text-[#E1306C] hover:drop-shadow-[0_0_10px_#E1306C] text-2xl"></i>
              </a>
            </li>
            <li>
              <a
                href="#"
                aria-label="Facebook"
                className="transition transform hover:scale-110 !hover:border-b-0"
              >
                <i className="bi bi-facebook text-[#1877F2] hover:drop-shadow-[0_0_10px_#1877F2] text-2xl"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
