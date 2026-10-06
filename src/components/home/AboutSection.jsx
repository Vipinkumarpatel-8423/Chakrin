
import { Link, useLocation } from "react-router-dom";
import aboutImg from "../../assets/about-1.png";
import machineImg from "../../assets/about-2.png";
import aboutVideo from "../../assets/about-video/about-video.mp4";

import { FiArrowUpRight } from "react-icons/fi";

const AboutSection = () => {
  const location = useLocation();

  // Hide Learn More button only on About Us page
  const isAboutPage = location.pathname === "/about-us";

  return (
    <section className="bg-white py-16 lg:py-20 select-none">
      <div className="max-w-7xl mx-auto px-0 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* ================= LEFT SIDE ================= */}

          <div className="relative pb-10 md:pb-12 lg:pb-0">
            {/* Main Video */}

            <div className="relative overflow-hidden rounded-[0px] sm:rounded-[35px]">
              <video
                src={aboutVideo}
                autoPlay
                muted
                loop
                playsInline
                preload="metadata"
                poster={aboutImg}
                className="
                  w-full
                  h-[420px]
                  sm:h-[480px]
                  lg:h-[520px]
                  object-cover
                "
              />

              {/* Video Overlay */}

              <div
                className="
                  absolute
                  inset-0
                  bg-gradient-to-t
                  from-chakrin-heading/20
                  to-transparent
                  pointer-events-none
                "
              />
            </div>

            {/* Floating Image */}

            <div
              className="
                hidden
                md:block
                absolute
                -bottom-8
                lg:-bottom-10
                right-0
                w-52
                lg:w-60
              "
            >
              <img
                src={machineImg}
                alt="Chakrin Digital Textile Printing Machine"
                className="
                  w-full
                  rounded-3xl
                  shadow-2xl
                  border-8
                  border-white
                  object-cover
                "
              />
            </div>
          </div>

          {/* ================= RIGHT SIDE ================= */}

          <div className="px-5">
            {/* Section Label */}

            <span
              className="
                uppercase
                tracking-[4px]
                text-sm
                text-chakrin-primary
                font-semibold
              "
            >
              Who We Are?
            </span>

            {/* Heading */}

            <h2
              className="
                mt-5
                text-4xl
                md:text-5xl
                font-extrabold
                leading-tight
                text-chakrin-heading
              "
            >
              Transforming Fashion Through
              <span className="text-chakrin-primary">
                {" "}
                Digital Textile Printing
              </span>
            </h2>

            {/* Description */}

            <p className="mt-6 text-chakrin-text leading-8">
              The inception of Chakrin Digital Textiles took place in 2021 with
              a vision to transform the world of fashion and textiles. With
              innovation happening in every corner, we envisioned providing
              several possibilities to distinct craft and its beautiful designs.
            </p>

            <p className="mt-4 text-chakrin-text leading-8">
              At Chakrin, you will unlock a world of creativity with
              cutting-edge machinery that helps create detailed designs in
              vibrant colours.
            </p>

            {/* Highlight */}

            <div className="mt-8 flex items-center gap-4">
              <div className="h-12 w-1 shrink-0 rounded-full bg-chakrin-primary" />

              <p
                className="
                  text-xl
                  md:text-2xl
                  font-semibold
                  text-chakrin-primary
                "
              >
                Discover premium material, fabric and innovative prints.
              </p>
            </div>

            {/* ================= BUTTONS ================= */}

            <div
              className="
                flex
                flex-col
                sm:flex-row
                flex-wrap
                gap-4
                sm:gap-5
                mt-10
              "
            >
              {/* Learn More - Hidden on /about-us */}

              {!isAboutPage && (
                <Link
                  to="/about-us"
                  className="
                    px-7
                    sm:px-8
                    py-3.5
                    sm:py-4
                    rounded-full
                    bg-gradient-to-r
                    from-chakrin-primary
                    to-chakrin-secondary
                    text-white
                    font-semibold
                    flex
                    items-center
                    justify-center
                    gap-2
                    shadow-lg
                    shadow-chakrin-primary/20
                    hover:scale-105
                    hover:shadow-xl
                    hover:shadow-chakrin-primary/30
                    transition-all
                    duration-300
                  "
                >
                  Learn More
                  <FiArrowUpRight />
                </Link>
              )}

              {/* Contact Us */}

              <Link
                to="/contact"
                className="
                  px-7
                  sm:px-8
                  py-3.5
                  sm:py-4
                  rounded-full
                  border
                  border-chakrin-border
                  text-chakrin-heading
                  font-semibold
                  flex
                  items-center
                  justify-center
                  hover:bg-chakrin-secondary-light
                  hover:border-chakrin-primary
                  hover:text-chakrin-primary
                  transition-all
                  duration-300
                "
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
