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
    title: "Hotline Number",
    value: "+91 90840 00006",
    subText: "Mon - Sat | 9:00 AM - 6:00 PM",
  },
  {
    icon: FiMail,
    title: "Support Email",
    value: "support@chakrin.com",
    subText: "We reply within 24 hours",
  },
  {
    icon: FiMapPin,
    title: "Office Address",
    value: "Palri, Israna, Haryana",
    subText: "132145, India",
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
    <section className="relative overflow-hidden bg-[#f8f9fb] ">

      {/* Decorative Background */}
      <ContactHero />
      <div className="pointer-events-none absolute -left-32 top-10 h-72 w-72 rounded-full bg-orange-400/10 blur-3xl" />

      <div className="pointer-events-none absolute -right-32 bottom-0 h-80 w-80 rounded-full bg-red-400/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">

        {/* Heading */}




        {/* Contact Information Cards */}

        <div className="mb-14 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-5">

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
                className="group rounded-2xl border border-gray-100 bg-white p-5 shadow-sm transition-shadow duration-300 hover:shadow-xl sm:p-6"
              >

                {/* Icon */}

                <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl bg-orange-50 text-orange-500 transition-all duration-300 group-hover:bg-gradient-to-r group-hover:from-[#F04F5A] group-hover:to-[#FFB300] group-hover:text-white">
                  <Icon size={20} />
                </div>

                <h3 className="text-sm font-bold text-gray-900">
                  {item.title}
                </h3>

                <p className="mt-2 break-words text-sm font-medium text-gray-700">
                  {item.value}
                </p>

                <p className="mt-1 text-xs leading-5 text-gray-400">
                  {item.subText}
                </p>

              </motion.div>
            );
          })}

        </div>


        {/* Contact Form Area */}

        <div className="grid overflow-hidden rounded-3xl bg-white shadow-xl lg:grid-cols-2">

          {/* Left Content */}

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
            className="relative flex flex-col justify-center overflow-hidden bg-[#111827] p-7 sm:p-10 lg:p-14"
          >

            {/* Background Glow */}

            <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-orange-500/20 blur-3xl" />

            <div className="relative z-10">

              <span className="text-xs font-semibold uppercase tracking-[3px] text-orange-400">
                Start A Conversation
              </span>

              <h3 className="mt-4 text-3xl font-bold leading-tight text-white sm:text-4xl">
                Let’s Build Something
                <span className="block text-orange-400">
                  Great Together.
                </span>
              </h3>

              <p className="mt-5 max-w-md text-sm leading-7 text-gray-300 sm:text-base">
                Whether you are looking for digital textile printing
                solutions, machinery or technical support, our team is
                ready to assist you.
              </p>

              <div className="mt-8 h-px w-24 bg-gradient-to-r from-[#F04F5A] to-[#FFB300]" />

              <p className="mt-6 text-sm text-gray-400">
                Chakrin Digital Textile Solutions
              </p>

            </div>

          </motion.div>


          {/* Form */}

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

            <div className="mb-7">

              {/* <span className="text-xs font-semibold uppercase tracking-[3px] text-orange-500">
                Contact Us
              </span> */}

              <h3 className="mt-2 text-2xl font-bold text-gray-900 sm:text-3xl">
                Send Your Message
              </h3>

            </div>


            <form className="space-y-5">

              {/* Name + Email */}

              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">

                <div>
                  <label className="mb-2 block text-xs font-semibold text-gray-700">
                    Your Name
                  </label>

                  <input
                    type="text"
                    placeholder="Enter your name"
                    className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm outline-none transition focus:border-orange-400 focus:bg-white focus:ring-2 focus:ring-orange-100"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-xs font-semibold text-gray-700">
                    Your Email
                  </label>

                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm outline-none transition focus:border-orange-400 focus:bg-white focus:ring-2 focus:ring-orange-100"
                  />
                </div>

              </div>


              {/* Phone + Subject */}

              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">

                <div>
                  <label className="mb-2 block text-xs font-semibold text-gray-700">
                    Phone Number
                  </label>

                  <input
                    type="tel"
                    placeholder="Enter phone number"
                    className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm outline-none transition focus:border-orange-400 focus:bg-white focus:ring-2 focus:ring-orange-100"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-xs font-semibold text-gray-700">
                    Subject
                  </label>

                  <input
                    type="text"
                    placeholder="How can we help?"
                    className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm outline-none transition focus:border-orange-400 focus:bg-white focus:ring-2 focus:ring-orange-100"
                  />
                </div>

              </div>


              {/* Message */}

              <div>

                <label className="mb-2 block text-xs font-semibold text-gray-700">
                  Message
                </label>

                <textarea
                  rows="5"
                  placeholder="Write your message..."
                  className="w-full resize-none rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm outline-none transition focus:border-orange-400 focus:bg-white focus:ring-2 focus:ring-orange-100"
                />

              </div>


              {/* Button */}

              <button
                type="submit"
                className="group inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-[#F04F5A] to-[#FFB300] px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-orange-500/20 transition duration-300 hover:scale-[1.03]"
              >
                Send Message

                <FiArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />

              </button>

            </form>

          </motion.div>

        </div>

      </div>
      <ContactMap />
    </section>
  );
};

export default Contact;