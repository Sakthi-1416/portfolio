import React from 'react'

const Aboutme = () => {
  return (
    <section className="py-16 bg-neutral-900 text-white">
  <div className="container mx-auto px-6 md:px-12">
    <div className="flex flex-col md:flex-row items-center gap-10">
      {/* Image Section */}
      <div className="md:w-5/12">
        <div className="md:ml-4 lg:ml-10">
          <img
            className="w-full rounded-3xl object-cover shadow-lg"
            src="https://freefrontend.dev/assets/square.png"
            alt="About Us"
          />
        </div>
      </div>

      {/* Text Section */}
      <div className="md:w-6/12 md:ml-6">
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
      </div>
    </div>
  </div>
</section>

  )
}

export default Aboutme