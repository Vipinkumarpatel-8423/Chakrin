import { motion } from "framer-motion";
import {
  FiPhone,
  FiMail,
  FiMapPin,
  FiClock,
  FiArrowRight,
} from "react-icons/fi";

import ContactHero from "../../components/Contact/ContactHero";
import ContactMap from "../../components/Contact/ContactMap";

const contactInfo = [
  {
    icon: FiPhone,
    title: "Phone Number",
    value: "+91 90840 00006",
    subText: "Mon - Sat | 9:00 AM - 6:00 PM",
  },
  {
    icon: FiMail,
    title: "Email Address",
    value: "chakrindigitaltextiles@gmail.com",
    subText: "We reply within 24 hours",
  },
  {
    icon: FiMapPin,
    title: "Office Address",
    value: "VPO Palri, Tehsil Israna",
    subText: "Panipat, Haryana - 132145 Located 90 KMs from IGI Airport Delhi",
  },
  {
    icon: FiClock,
    title: "Working Days",
    value: "Monday - Saturday",
    subText: "Sunday Closed",
  },
];

const Contact = () => {
  return (
    <section className="relative overflow-hidden bg-chakrin-secondary-light">

      {/* ================= HERO ================= */}

      <ContactHero />

      {/* ================= DECORATIVE GLOW ================= */}

      <div className="pointer-events-none absolute -left-32 top-40 h-72 w-72 rounded-full bg-chakrin-primary/10 blur-3xl" />

      <div className="pointer-events-none absolute -right-32 bottom-20 h-80 w-80 rounded-full bg-chakrin-secondary/10 blur-3xl" />


      <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">

        {/* ================= CONTACT INFO ================= */}

        <div className="relative z-10 -mt-8 mb-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:-mt-12 lg:grid-cols-4 lg:gap-6">

          {contactInfo.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.title}
                initial={{
                  opacity: 0,
                  y: 40,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.1,
                }}
                whileHover={{
                  y: -7,
                }}
                className="
                  group
                  rounded-2xl
                  border
                  border-chakrin-border
                  bg-white
                  p-5
                  shadow-sm
                  transition-all
                  duration-300
                  hover:border-chakrin-primary/30
                  hover:shadow-xl
                  sm:p-6
                "
              >

                {/* Icon */}

                <div
                  className="
                    mb-5
                    flex
                    h-11
                    w-11
                    items-center
                    justify-center
                    rounded-xl
                    bg-chakrin-secondary-light
                    text-chakrin-primary
                    transition-all
                    duration-300
                    group-hover:bg-chakrin-primary
                    group-hover:text-white
                  "
                >
                  <Icon size={20} />
                </div>


                {/* Title */}

                <h3 className="text-sm font-bold text-chakrin-heading">
                  {item.title}
                </h3>


                {/* Value */}

                <p className="mt-2 break-words text-sm font-semibold text-chakrin-text">
                  {item.value}
                </p>


                {/* Sub Text */}

                <p className="mt-1 text-xs leading-5 text-chakrin-text/60">
                  {item.subText}
                </p>

              </motion.div>
            );
          })}

        </div>


        {/* ================= CONTACT FORM ================= */}

        <div
          className="
            grid
            overflow-hidden
            rounded-3xl
            border
            border-chakrin-border
            bg-white
            shadow-xl
            lg:grid-cols-2
          "
        >

          {/* ================= LEFT CONTENT ================= */}

          <motion.div
            initial={{
              opacity: 0,
              x: -40,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="
              relative
              flex
              flex-col
              justify-center
              overflow-hidden
              bg-chakrin-heading
              p-7
              sm:p-10
              lg:p-14
            "
          >

            {/* Theme Glow */}

            <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-chakrin-primary/20 blur-3xl" />

            <div className="pointer-events-none absolute -bottom-20 -left-20 h-56 w-56 rounded-full bg-chakrin-secondary/10 blur-3xl" />


            <div className="relative z-10">

              <span className="text-xs font-semibold uppercase tracking-[3px] text-chakrin-secondary">
                Start A Conversation
              </span>


              <h3 className="mt-4 text-3xl font-bold leading-tight text-white sm:text-4xl">
                Let’s Build Something
                <span className="block bg-gradient-to-r from-chakrin-primary to-chakrin-secondary bg-clip-text text-transparent">
                  Great Together.
                </span>
              </h3>


              <p className="mt-5 max-w-md text-sm leading-7 text-white/65 sm:text-base">
                Whether you are looking for digital textile printing
                solutions, machinery or technical support, our team is
                ready to assist you.
              </p>


              {/* Divider */}

              <div className="mt-8 h-[2px] w-20 rounded-full bg-gradient-to-r from-chakrin-primary to-chakrin-secondary" />


              <p className="mt-6 text-sm text-white/50">
                Chakrin Digital Textiles
              </p>

            </div>

          </motion.div>


          {/* ================= FORM ================= */}

          <motion.div
            initial={{
              opacity: 0,
              x: 40,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{ once: true }}
            transition={{
              duration: 0.7,
              delay: 0.1,
            }}
            className="p-7 sm:p-10 lg:p-14"
          >

            {/* Form Heading */}

            <div className="mb-7">

              <h3 className="text-2xl font-bold text-chakrin-heading sm:text-3xl">
                Send Your Message
              </h3>

              <p className="mt-2 text-sm text-chakrin-text">
                Get in touch with our team for your textile requirements.
              </p>

            </div>


            <form className="space-y-5">

              {/* Name + Email */}

              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">

                <div>

                  <label className="mb-2 block text-xs font-semibold text-chakrin-heading">
                    Your Name
                  </label>

                  <input
                    type="text"
                    placeholder="Enter your name"
                    className="
                      w-full
                      rounded-xl
                      border
                      border-chakrin-border
                      bg-chakrin-secondary-light/50
                      px-4
                      py-3
                      text-sm
                      text-chakrin-heading
                      outline-none
                      transition
                      placeholder:text-chakrin-text/50
                      focus:border-chakrin-primary
                      focus:bg-white
                      focus:ring-2
                      focus:ring-chakrin-primary/10
                    "
                  />

                </div>


                <div>

                  <label className="mb-2 block text-xs font-semibold text-chakrin-heading">
                    Your Email
                  </label>

                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="
                      w-full
                      rounded-xl
                      border
                      border-chakrin-border
                      bg-chakrin-secondary-light/50
                      px-4
                      py-3
                      text-sm
                      text-chakrin-heading
                      outline-none
                      transition
                      placeholder:text-chakrin-text/50
                      focus:border-chakrin-primary
                      focus:bg-white
                      focus:ring-2
                      focus:ring-chakrin-primary/10
                    "
                  />

                </div>

              </div>


              {/* Phone + Subject */}

              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">

                <div>

                  <label className="mb-2 block text-xs font-semibold text-chakrin-heading">
                    Phone Number
                  </label>

                  <input
                    type="tel"
                    placeholder="Enter phone number"
                    className="
                      w-full
                      rounded-xl
                      border
                      border-chakrin-border
                      bg-chakrin-secondary-light/50
                      px-4
                      py-3
                      text-sm
                      text-chakrin-heading
                      outline-none
                      transition
                      placeholder:text-chakrin-text/50
                      focus:border-chakrin-primary
                      focus:bg-white
                      focus:ring-2
                      focus:ring-chakrin-primary/10
                    "
                  />

                </div>


                <div>

                  <label className="mb-2 block text-xs font-semibold text-chakrin-heading">
                    Subject
                  </label>

                  <input
                    type="text"
                    placeholder="How can we help?"
                    className="
                      w-full
                      rounded-xl
                      border
                      border-chakrin-border
                      bg-chakrin-secondary-light/50
                      px-4
                      py-3
                      text-sm
                      text-chakrin-heading
                      outline-none
                      transition
                      placeholder:text-chakrin-text/50
                      focus:border-chakrin-primary
                      focus:bg-white
                      focus:ring-2
                      focus:ring-chakrin-primary/10
                    "
                  />

                </div>

              </div>


              {/* Message */}

              <div>

                <label className="mb-2 block text-xs font-semibold text-chakrin-heading">
                  Message
                </label>

                <textarea
                  rows="5"
                  placeholder="Write your message..."
                  className="
                    w-full
                    resize-none
                    rounded-xl
                    border
                    border-chakrin-border
                    bg-chakrin-secondary-light/50
                    px-4
                    py-3
                    text-sm
                    text-chakrin-heading
                    outline-none
                    transition
                    placeholder:text-chakrin-text/50
                    focus:border-chakrin-primary
                    focus:bg-white
                    focus:ring-2
                    focus:ring-chakrin-primary/10
                  "
                />

              </div>


              {/* Submit Button */}

              <button
                type="submit"
                className="
                  group
                  inline-flex
                  items-center
                  gap-3
                  rounded-full
                  bg-chakrin-primary
                  px-7
                  py-3.5
                  text-sm
                  font-semibold
                  text-white
                  shadow-lg
                  shadow-chakrin-primary/20
                  transition-all
                  duration-300
                  hover:bg-chakrin-primary-dark
                  hover:scale-[1.03]
                "
              >

                Send Message

                <FiArrowRight
                  className="
                    transition-transform
                    duration-300
                    group-hover:translate-x-1
                  "
                />

              </button>

            </form>

          </motion.div>

        </div>

      </div>


      {/* ================= MAP ================= */}

      <ContactMap />

    </section>
  );
};

export default Contact;