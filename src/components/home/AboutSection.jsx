import aboutImg from "../../assets/about-1.jpg";
import machineImg from "../../assets/about-2.jpg";

import {
  FiCheckCircle,
  FiArrowUpRight,
  FiMapPin,
} from "react-icons/fi";

const AboutSection = () => {
  return (
    <section className="bg-white py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-5 lg:px-8">

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* LEFT SIDE */}

          <div className="relative">

            <img
              src={aboutImg}
              alt="Factory"
              className="w-full h-[520px] object-cover rounded-[35px]"
            />

            {/* Floating Image */}

            <div className="hidden md:block absolute -bottom-12 right-0 w-60">

              <img
                src={machineImg}
                alt="Machine"
                className="rounded-3xl shadow-2xl border-8 border-white"
              />

            </div>

          </div>

          {/* RIGHT SIDE */}

          <div>

            <span className="uppercase tracking-[4px] text-sm font-semibold text-[#F59E0B]">
              About Chakrin
            </span>

            <h2 className="mt-5 text-4xl md:text-5xl font-extrabold leading-tight text-gray-900">
              Innovative Digital Textile
              <span className="text-[#F04F5A]">
                {" "}Printing Solutions
              </span>
            </h2>

            <p className="mt-6 text-gray-600 leading-8">
              Chakrin Digital Textiles is committed to delivering premium
              digital textile printing solutions with advanced technology,
              precision manufacturing, and reliable production standards.
              We focus on quality, innovation, and customer satisfaction
              to meet the growing demands of the textile industry.
            </p>

            {/* Address */}

            <div className="mt-6 flex items-start gap-3">

              <div className="w-11 h-11 rounded-full bg-orange-100 flex items-center justify-center">
                <FiMapPin className="text-[#F04F5A]" />
              </div>

              <div>
                <h4 className="font-semibold text-gray-900">
                  Factory Location
                </h4>

                <p className="text-gray-600">
                  Tehsil Israna, VPO Palri,
                  Haryana - 132145
                </p>
              </div>

            </div>

            {/* Features */}

            <div className="grid sm:grid-cols-2 gap-5 mt-10">

              <div className="flex gap-3">
                <FiCheckCircle className="text-[#F59E0B] text-xl mt-1" />
                <span>Advanced Digital Printing Technology</span>
              </div>

              <div className="flex gap-3">
                <FiCheckCircle className="text-[#F59E0B] text-xl mt-1" />
                <span>Premium Textile Manufacturing</span>
              </div>

              <div className="flex gap-3">
                <FiCheckCircle className="text-[#F59E0B] text-xl mt-1" />
                <span>Skilled Technical Team</span>
              </div>

              <div className="flex gap-3">
                <FiCheckCircle className="text-[#F59E0B] text-xl mt-1" />
                <span>Reliable Customer Support</span>
              </div>

            </div>

            {/* Buttons */}

            <div className="flex flex-wrap gap-5 mt-10">

              <button className="px-8 py-4 rounded-full bg-gradient-to-r from-[#F04F5A] to-[#FFB300] text-white font-semibold flex items-center gap-2 hover:scale-105 transition">
                Learn More
                <FiArrowUpRight />
              </button>

              <button className="px-8 py-4 rounded-full border border-gray-300 font-semibold hover:bg-gray-100 transition">
                Contact Us
              </button>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default AboutSection;