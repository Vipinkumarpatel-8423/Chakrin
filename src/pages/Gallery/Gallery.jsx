import { motion } from "framer-motion";
import { FiArrowDown, FiMaximize2, FiHome } from "react-icons/fi";
import { Link } from "react-router-dom";

// Gallery Images
import g1 from "../../assets/gallery/g1.jpg";
import g2 from "../../assets/gallery/g2.jpg";
import g3 from "../../assets/gallery/g3.jpg";
import g4 from "../../assets/gallery/g4.jpg";
import g5 from "../../assets/gallery/g5.jpg";
import g6 from "../../assets/gallery/g6.jpg";
import g7 from "../../assets/gallery/g2.jpg";
import g8 from "../../assets/gallery/g5.jpg";

// Hero Image
import galleryHero from "../../assets/gallery/gallery-hero.jpeg";

const galleryImages = [
  {
    image: g1,
    title: "Digital Textile Printing",
    category: "Production",
  },
  {
    image: g2,
    title: "Advanced Machinery",
    category: "Technology",
  },
  {
    image: g3,
    title: "Textile Innovation",
    category: "Innovation",
  },
  {
    image: g4,
    title: "Our Manufacturing Unit",
    category: "Infrastructure",
  },
  {
    image: g5,
    title: "Quality & Precision",
    category: "Quality",
  },
  {
    image: g6,
    title: "Production Process",
    category: "Production",
  },
  {
    image: g7,
    title: "Modern Textile Solutions",
    category: "Technology",
  },
  {
    image: g8,
    title: "Our Journey",
    category: "Moments",
  },
];

const Gallery = () => {
  const scrollToGallery = () => {
    document.getElementById("gallery-grid")?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <main className="bg-white">

      {/* =====================================================
          GALLERY HERO
      ====================================================== */}

      <section className="relative min-h-[520px] sm:min-h-[580px] lg:min-h-[650px] overflow-hidden">

        {/* Background Image */}

        <motion.div
          initial={{ scale: 1.08 }}
          animate={{ scale: 1 }}
          transition={{
            duration: 1.5,
            ease: "easeOut",
          }}
          className="absolute inset-0"
        >
          <img
            src={galleryHero}
            alt="Chakrin Gallery"
            className="h-full w-full object-cover"
          />
        </motion.div>

        {/* Dark Overlay */}

        <div className="absolute inset-0 bg-black/60" />

        {/* Gradient */}

        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/40 to-black/80" />

        {/* Decorative Glow */}

        <div className="pointer-events-none absolute -left-32 top-20 h-72 w-72 rounded-full bg-orange-500/20 blur-3xl" />

        <div className="pointer-events-none absolute -right-32 bottom-10 h-80 w-80 rounded-full bg-red-500/20 blur-3xl" />

        {/* Content */}

        <div className="relative z-10 flex min-h-[520px] sm:min-h-[580px] lg:min-h-[650px] items-center justify-center px-5 py-20">

          <motion.div
            initial={{
              opacity: 0,
              y: 50,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.9,
              ease: "easeOut",
            }}
            className="mx-auto max-w-4xl text-center text-white"
          >

            {/* Small Label */}

            <motion.div
              initial={{
                opacity: 0,
                y: 20,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay: 0.2,
                duration: 0.6,
              }}
              className="mb-5"
            >
              <span className="inline-flex items-center rounded-full border border-white/30 bg-white/10 px-5 py-2 text-[10px] font-semibold uppercase tracking-[4px] backdrop-blur-md sm:text-xs">
                Our Gallery
              </span>
            </motion.div>

            {/* Heading */}

            <h1 className="text-4xl font-extrabold leading-tight sm:text-5xl md:text-6xl lg:text-7xl">
              Moments That
              <span className="block bg-gradient-to-r from-[#FFB300] via-orange-400 to-[#F04F5A] bg-clip-text text-transparent">
                Define Our Journey
              </span>
            </h1>

            {/* Description */}

            {/* <p className="mx-auto mt-6 max-w-2xl text-sm leading-7 text-gray-200 sm:text-base sm:leading-8 lg:text-lg">
              Explore our world of digital textile innovation, advanced
              technology, creative solutions and the people behind our
              journey.
            </p> */}

            {/* Breadcrumb */}

            <div className="mt-8 flex items-center justify-center gap-3 text-xs font-semibold uppercase tracking-wider sm:text-sm">
              <Link
                to="/"
                className="flex items-center gap-2 text-white hover:text-orange-400 duration-300"
              >
                <FiHome />
                Home
              </Link>


              <span className="text-orange-400">
                /
              </span>

              <span className="text-orange-400 font-semibold">
                Gallery
              </span>
            </div>

            {/* Scroll Button */}

            <motion.button
              onClick={scrollToGallery}
              whileHover={{
                scale: 1.08,
              }}
              whileTap={{
                scale: 0.95,
              }}
              className="mx-auto mt-10 flex h-12 w-12 items-center justify-center rounded-full border border-white/30 bg-white/10 text-white backdrop-blur-md transition hover:bg-white/20"
              aria-label="Scroll to gallery"
            >
              <FiArrowDown className="animate-bounce text-lg" />
            </motion.button>

          </motion.div>
        </div>

        {/* Bottom Shape */}

        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent" />

      </section>


      {/* =====================================================
          GALLERY SECTION
      ====================================================== */}

      <section
        id="gallery-grid"
        className="relative overflow-hidden bg-white py-20 sm:py-24 lg:py-28"
      >

        {/* Background Decoration */}

        <div className="pointer-events-none absolute -left-40 top-20 h-80 w-80 rounded-full bg-orange-100/60 blur-3xl" />

        <div className="pointer-events-none absolute -right-40 bottom-20 h-96 w-96 rounded-full bg-red-100/50 blur-3xl" />


        <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">

          {/* Heading */}

          <motion.div
            initial={{
              opacity: 0,
              y: 40,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
              amount: 0.2,
            }}
            transition={{
              duration: 0.7,
            }}
            className="mx-auto mb-12 max-w-3xl text-center sm:mb-16"
          >

            <span className="text-xs font-semibold uppercase tracking-[4px] text-orange-500">
              Inside Chakrin
            </span>

            <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl">
              A Glimpse Into
              <span className="block bg-gradient-to-r from-[#F04F5A] to-[#FFB300] bg-clip-text text-transparent">
                Our World
              </span>
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-gray-500 sm:text-base">
              From our manufacturing floor to innovative textile solutions,
              discover the moments, technology and craftsmanship that make
              Chakrin different.
            </p>

          </motion.div>


          {/* Gallery Grid */}

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-12 lg:gap-6">

            {galleryImages.map((item, index) => {

              /*
                Different sizes for desktop
                Mobile/tablet automatically becomes normal grid
              */

              const gridClass =
                index === 0
                  ? "lg:col-span-7 lg:row-span-2"
                  : index === 1
                    ? "lg:col-span-5"
                    : index === 2
                      ? "lg:col-span-5"
                      : index === 3
                        ? "lg:col-span-4"
                        : index === 4
                          ? "lg:col-span-4"
                          : index === 5
                            ? "lg:col-span-4"
                            : "lg:col-span-6";

              return (
                <motion.div
                  key={index}
                  initial={{
                    opacity: 0,
                    y: 40,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  viewport={{
                    once: true,
                    amount: 0.15,
                  }}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.08,
                  }}
                  className={`group relative overflow-hidden rounded-2xl bg-gray-100 shadow-sm ${gridClass}`}
                >

                  {/* Image */}

                  <img
                    src={item.image}
                    alt={item.title}
                    className={`
                      h-[280px]
                      w-full
                      object-cover
                      transition duration-700
                      group-hover:scale-110
                      sm:h-[300px]
                      lg:h-[330px]
                      ${index === 0
                        ? "lg:h-full lg:min-h-[680px]"
                        : ""
                      }
                    `}
                  />

                  {/* Overlay */}

                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 transition duration-500 group-hover:opacity-100" />

                  {/* Category */}

                  <div className="absolute left-5 top-5">

                    <span className="rounded-full bg-white/90 px-4 py-2 text-[10px] font-bold uppercase tracking-wider text-gray-900 shadow-lg backdrop-blur-sm sm:text-xs">
                      {item.category}
                    </span>

                  </div>


                  {/* Content */}

                  <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-6">

                    <div className="flex items-end justify-between gap-4">

                      <div>

                        <h3 className="text-lg font-bold text-white sm:text-xl lg:text-2xl">
                          {item.title}
                        </h3>

                        <p className="mt-2 text-xs text-gray-300 sm:text-sm">
                          Explore our latest work and experiences.
                        </p>

                      </div>

                      {/* Icon */}

                      <motion.div
                        whileHover={{
                          rotate: 45,
                        }}
                        className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white text-gray-900 shadow-lg"
                      >
                        <FiMaximize2 />
                      </motion.div>

                    </div>

                  </div>

                </motion.div>
              );
            })}

          </div>

        </div>

      </section>

    </main>
  );
};

export default Gallery;