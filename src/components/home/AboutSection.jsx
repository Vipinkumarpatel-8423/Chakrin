import aboutImg from "../../assets/about-1.jpg";
import machineImg from "../../assets/about-2.jpg";

// import {
//   FiCheckCircle,
//   FiArrowUpRight,
//   FiMapPin,
// } from "react-icons/fi";

// const AboutSection = () => {
//   return (
//     <section className="bg-white py-20 lg:py-28">
//       <div className="max-w-7xl mx-auto px-5 lg:px-8">

//         <div className="grid lg:grid-cols-2 gap-16 items-center">

//           {/* LEFT SIDE */}

//           <div className="relative">

//             <img
//               src={aboutImg}
//               alt="Factory"
//               className="w-full h-[520px] object-cover rounded-[35px]"
//             />

//             {/* Floating Image */}

//             <div className="hidden md:block absolute -bottom-12 right-0 w-60">

//               <img
//                 src={machineImg}
//                 alt="Machine"
//                 className="rounded-3xl shadow-2xl border-8 border-white"
//               />

//             </div>

//           </div>

//           {/* RIGHT SIDE */}

//           <div>

//             <span className="uppercase tracking-[4px] text-sm font-semibold text-[#F59E0B]">
//               About Chakrin
//             </span>

//             <h2 className="mt-5 text-4xl md:text-5xl font-extrabold leading-tight text-gray-900">
//               Innovative Digital Textile
//               <span className="text-[#F04F5A]">
//                 {" "}Printing Solutions
//               </span>
//             </h2>

//             <p className="mt-6 text-gray-600 leading-8">
//               Chakrin Digital Textiles is committed to delivering premium
//               digital textile printing solutions with advanced technology,
//               precision manufacturing, and reliable production standards.
//               We focus on quality, innovation, and customer satisfaction
//               to meet the growing demands of the textile industry.
//             </p>

//             {/* Address */}

//             <div className="mt-6 flex items-start gap-3">

//               <div className="w-11 h-11 rounded-full bg-orange-100 flex items-center justify-center">
//                 <FiMapPin className="text-[#F04F5A]" />
//               </div>

//               <div>
//                 <h4 className="font-semibold text-gray-900">
//                   Factory Location
//                 </h4>

//                 <p className="text-gray-600">
//                   Tehsil Israna, VPO Palri,
//                   Haryana - 132145
//                 </p>
//               </div>

//             </div>

//             {/* Features */}

//             <div className="grid sm:grid-cols-2 gap-5 mt-10">

//               <div className="flex gap-3">
//                 <FiCheckCircle className="text-[#F59E0B] text-xl mt-1" />
//                 <span>Advanced Digital Printing Technology</span>
//               </div>

//               <div className="flex gap-3">
//                 <FiCheckCircle className="text-[#F59E0B] text-xl mt-1" />
//                 <span>Premium Textile Manufacturing</span>
//               </div>

//               <div className="flex gap-3">
//                 <FiCheckCircle className="text-[#F59E0B] text-xl mt-1" />
//                 <span>Skilled Technical Team</span>
//               </div>

//               <div className="flex gap-3">
//                 <FiCheckCircle className="text-[#F59E0B] text-xl mt-1" />
//                 <span>Reliable Customer Support</span>
//               </div>

//             </div>

//             {/* Buttons */}

//             <div className="flex flex-wrap gap-5 mt-10">

//               <button className="px-8 py-4 rounded-full bg-gradient-to-r from-[#F04F5A] to-[#FFB300] text-white font-semibold flex items-center gap-2 hover:scale-105 transition">
//                 Learn More
//                 <FiArrowUpRight />
//               </button>

//               <button className="px-8 py-4 rounded-full border border-gray-300 font-semibold hover:bg-gray-100 transition">
//                 Contact Us
//               </button>

//             </div>

//           </div>

//         </div>

//       </div>
//     </section>
//   );
// };

// export default AboutSection;


import {
  FiCheckCircle,
  FiArrowUpRight,
  FiMapPin,
} from "react-icons/fi";

const AboutSection = () => {
  return (
    <section className="bg-white py-15 lg:py-20">
      <div className="max-w-7xl mx-auto px-5 lg:px-8">

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* LEFT SIDE */}

          <div className="relative">

            {/* Main Image */}
            <img
              src={aboutImg}
              alt="Factory"
              className="
                w-full
                h-[420px]
                sm:h-[480px]
                lg:h-[520px]
                object-cover
                rounded-[30px]
                sm:rounded-[35px]
              "
            />

            {/* Image Overlay */}
            <div
              className="
                absolute
                inset-0
                rounded-[30px]
                sm:rounded-[35px]
                bg-gradient-to-t
                from-[#241B24]/20
                to-transparent
                pointer-events-none
              "
            ></div>

            {/* Floating Image */}

            <div className="hidden md:block absolute -bottom-12 right-0 w-60">

              <img
                src={machineImg}
                alt="Machine"
                className="
                  w-full
                  rounded-3xl
                  shadow-2xl
                  border-8
                  border-white
                "
              />

            </div>

          </div>


          {/* RIGHT SIDE */}

          <div>

            {/* Section Label */}

            <span
              className="
                uppercase
                tracking-[4px]
                text-sm
                font-semibold
                text-chakrin-primary
              "
            >
              About Chakrin
            </span>


            {/* Heading */}

            <h2
              className="
                mt-5
                text-3xl
                sm:text-4xl
                md:text-5xl
                font-extrabold
                leading-tight
                text-chakrin-heading
              "
            >
              Innovative Digital Textile

              <span
                className="
                  text-transparent
                  bg-clip-text
                  bg-gradient-to-r
                  from-chakrin-primary
                  to-chakrin-secondary
                "
              >
                {" "}Printing Solutions
              </span>

            </h2>


            {/* Description */}

            <p
              className="
                mt-6
                text-chakrin-text
                leading-8
                text-base
                sm:text-lg
              "
            >
              Chakrin Digital Textiles is committed to delivering premium
              digital textile printing solutions with advanced technology,
              precision manufacturing, and reliable production standards.
              We focus on quality, innovation, and customer satisfaction
              to meet the growing demands of the textile industry.
            </p>


            {/* Address */}

            <div className="mt-6 flex items-start gap-3">

              <div
                className="
                  w-11
                  h-11
                  shrink-0
                  rounded-full
                  bg-chakrin-secondary-light
                  flex
                  items-center
                  justify-center
                "
              >
                <FiMapPin
                  className="text-chakrin-primary text-lg"
                />
              </div>


              <div>

                <h4 className="font-semibold text-chakrin-heading">
                  Factory Location
                </h4>

                <p className="text-chakrin-text">
                  Tehsil Israna, VPO Palri,
                  Haryana - 132145
                </p>

              </div>

            </div>


            {/* Features */}

            <div className="grid sm:grid-cols-2 gap-5 mt-10">

              <div className="flex gap-3">

                <FiCheckCircle
                  className="
                    text-chakrin-primary
                    text-xl
                    mt-1
                    shrink-0
                  "
                />

                <span className="text-chakrin-heading">
                  Advanced Digital Printing Technology
                </span>

              </div>


              <div className="flex gap-3">

                <FiCheckCircle
                  className="
                    text-chakrin-primary
                    text-xl
                    mt-1
                    shrink-0
                  "
                />

                <span className="text-chakrin-heading">
                  Premium Textile Manufacturing
                </span>

              </div>


              <div className="flex gap-3">

                <FiCheckCircle
                  className="
                    text-chakrin-primary
                    text-xl
                    mt-1
                    shrink-0
                  "
                />

                <span className="text-chakrin-heading">
                  Skilled Technical Team
                </span>

              </div>


              <div className="flex gap-3">

                <FiCheckCircle
                  className="
                    text-chakrin-primary
                    text-xl
                    mt-1
                    shrink-0
                  "
                />

                <span className="text-chakrin-heading">
                  Reliable Customer Support
                </span>

              </div>

            </div>


            {/* Buttons */}

            <div className="flex flex-col sm:flex-row flex-wrap gap-4 sm:gap-5 mt-10">

              {/* Primary Button */}

              <button
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
              </button>


              {/* Secondary Button */}

              <button
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
                  hover:bg-chakrin-secondary-light
                  hover:border-chakrin-primary
                  hover:text-chakrin-primary
                  transition-all
                  duration-300
                "
              >
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