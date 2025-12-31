import React from "react";
import post1 from '../assets/slide1.JPEG'
import post2 from '../assets/slide2.JPG'
import post3 from '../assets/slide3.jpeg'



const Carousel = () => {
  return (
    <div
      id="myCarousel"
      className="carousel slide"
      data-bs-ride="carousel"
    >
      {/* Indicators */}
      <div className="carousel-indicators">
        {[0, 1, 2].map((i) => (
          <button
            key={i}
            type="button"
            data-bs-target="#myCarousel"
            data-bs-slide-to={i}
            className={i === 0 ? "active" : ""}
            aria-label={`Slide ${i + 1}`}
            aria-current={i === 0 ? "true" : "false"}
          ></button>
        ))}
      </div>

      {/* Slides */}
      <div className="carousel-inner">
        {[post1, post2, post3].map((img, idx) => (
          <div
            key={idx}
            className={`carousel-item ${idx === 0 ? "active" : ""}`}
          >
            <img
              src={img}
              alt={`Slide ${idx + 1}`}
              className="d-block w-full h-[90vh] sm:h-[65vh] md:h-[75vh] lg:h-[90vh] object-cover  transition-all duration-300"
            />

            {/* Caption */}
            <div className="carousel-caption text-center sm:text-end">
              <h1 className="text-xl sm:text-2xl md:text-4xl font-bold drop-shadow-lg">
                {`Slide ${idx + 1} headline`}
              </h1>
              <p className="opacity-75 text-sm sm:text-base">
                Some placeholder content for slide {idx + 1}.
              </p>
              <p>
                <a
                  href="#"
                  className="btn btn-primary text-sm sm:text-base px-3 py-2 mt-2"
                >
                  Learn more
                </a>
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Controls */}
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#myCarousel"
        data-bs-slide="prev"
      >
        <span
          className="carousel-control-prev-icon"
          aria-hidden="true"
        ></span>
        <span className="visually-hidden">Previous</span>
      </button>

      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#myCarousel"
        data-bs-slide="next"
      >
        <span
          className="carousel-control-next-icon"
          aria-hidden="true"
        ></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default Carousel;
