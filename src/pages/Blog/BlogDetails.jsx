// import { Link, useParams } from "react-router-dom";
// import { motion } from "framer-motion";
// import { blogs } from "../../data/blog/blogs";

// const BlogDetails = () => {

//   const { slug } = useParams();

//   const blog = blogs.find(
//     (item) => item.slug === slug
//   );


//   // Blog nahi mila

//   if (!blog) {
//     return (
//       <section className="min-h-[70vh] flex items-center justify-center px-5">

//         <div className="text-center">

//           <h1 className="text-4xl font-bold text-gray-900">
//             Blog Not Found
//           </h1>

//           <p className="mt-4 text-gray-500">
//             The article you are looking for doesn't exist.
//           </p>

//           <Link
//             to="/blog"
//             className="inline-block mt-6 px-6 py-3 rounded-full bg-gradient-to-r from-[#F04F5A] to-[#FFB300] text-white font-semibold"
//           >
//             Back To Blog
//           </Link>

//         </div>

//       </section>
//     );
//   }


//   return (
//     <main className="bg-white">

//       {/* =====================================
//           HERO
//       ====================================== */}

//       <section className="relative min-h-[420px] md:min-h-[520px] overflow-hidden">

//         <img
//           src={blog.image}
//           alt={blog.title}
//           className="absolute inset-0 w-full h-full object-cover"
//         />

//         {/* Overlay */}

//         <div className="absolute inset-0 bg-black/65" />


//         {/* Hero Content */}

//         <div className="relative z-10 min-h-[420px] md:min-h-[520px] flex items-center">

//           <div className="max-w-5xl mx-auto px-5 sm:px-6 lg:px-8 w-full text-center">

//             <motion.div
//               initial={{ opacity: 0, y: 30 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.7 }}
//             >

//               {/* Category */}

//               <span className="inline-block px-4 py-2 rounded-full bg-gradient-to-r from-[#F04F5A] to-[#FFB300] text-white text-xs sm:text-sm font-semibold">
//                 {blog.category}
//               </span>


//               {/* Title */}

//               <h1 className="mt-6 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight text-white">
//                 {blog.title}
//               </h1>


//               {/* Meta */}

//               <div className="mt-6 flex flex-wrap justify-center gap-x-5 gap-y-2 text-sm text-gray-200">

//                 <span>
//                   {blog.date}
//                 </span>

//                 <span className="hidden sm:block">
//                   •
//                 </span>

//                 <span>
//                   By {blog.author}
//                 </span>

//                 <span className="hidden sm:block">
//                   •
//                 </span>

//                 <span>
//                   {blog.readTime}
//                 </span>

//               </div>

//             </motion.div>

//           </div>

//         </div>

//       </section>


//       {/* =====================================
//           ARTICLE
//       ====================================== */}

//       <section className="py-14 md:py-20">

//         <div className="max-w-4xl mx-auto px-5 sm:px-6 lg:px-8">


//           {/* Intro */}

//           <motion.p
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             className="text-lg md:text-xl leading-8 md:leading-9 text-gray-600"
//           >
//             {blog.content.intro}
//           </motion.p>


//           {/* Article Sections */}

//           <div className="mt-12 space-y-12">

//             {blog.content.sections.map((section, index) => (

//               <motion.article
//                 key={index}
//                 initial={{
//                   opacity: 0,
//                   y: 30
//                 }}
//                 whileInView={{
//                   opacity: 1,
//                   y: 0
//                 }}
//                 viewport={{
//                   once: true
//                 }}
//                 transition={{
//                   duration: 0.6
//                 }}
//               >

//                 <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
//                   {section.title}
//                 </h2>

//                 <div className="mt-4 h-1 w-16 rounded-full bg-gradient-to-r from-[#F04F5A] to-[#FFB300]" />

//                 <p className="mt-5 text-gray-600 leading-8">
//                   {section.text}
//                 </p>

//               </motion.article>

//             ))}

//           </div>


//           {/* =====================================
//               GALLERY
//           ====================================== */}

//           {blog.content.gallery?.length > 0 && (

//             <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 gap-5">

//               {blog.content.gallery.map((image, index) => (

//                 <motion.div
//                   key={index}
//                   initial={{
//                     opacity: 0,
//                     scale: 0.95
//                   }}
//                   whileInView={{
//                     opacity: 1,
//                     scale: 1
//                   }}
//                   viewport={{
//                     once: true
//                   }}
//                   className="overflow-hidden rounded-2xl"
//                 >

//                   <img
//                     src={image}
//                     alt=""
//                     className="w-full h-64 md:h-80 object-cover hover:scale-105 transition duration-700"
//                   />

//                 </motion.div>

//               ))}

//             </div>

//           )}


//           {/* =====================================
//               QUOTE
//           ====================================== */}

//           <motion.blockquote
//             initial={{
//               opacity: 0,
//               y: 30
//             }}
//             whileInView={{
//               opacity: 1,
//               y: 0
//             }}
//             viewport={{
//               once: true
//             }}
//             className="my-14 rounded-3xl bg-gradient-to-br from-orange-50 to-red-50 p-7 sm:p-10"
//           >

//             <div className="text-4xl text-orange-500 font-serif">
//               “
//             </div>

//             <p className="mt-2 text-lg md:text-xl italic leading-8 text-gray-700">
//               {blog.content.quote}
//             </p>

//           </motion.blockquote>


//           {/* =====================================
//               CONCLUSION
//           ====================================== */}

//           <div className="mt-12">

//             <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
//               Conclusion
//             </h2>

//             <div className="mt-4 h-1 w-16 rounded-full bg-gradient-to-r from-[#F04F5A] to-[#FFB300]" />

//             <p className="mt-5 text-gray-600 leading-8">
//               {blog.content.conclusion}
//             </p>

//           </div>


//           {/* =====================================
//               BACK TO BLOG
//           ====================================== */}

//           <div className="mt-14 pt-8 border-t border-gray-200">

//             <Link
//               to="/blog"
//               className="inline-flex items-center gap-2 font-semibold text-gray-900 hover:text-[#F04F5A] transition"
//             >
//               ← Back To Blog
//             </Link>

//           </div>

//         </div>

//       </section>

//     </main>
//   );
// };

// export default BlogDetails;


import { Link, useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { blogs } from "../../data/blog/blogs";

const BlogDetails = () => {

  const { slug } = useParams();

  const blog = blogs.find(
    (item) => item.slug === slug
  );


  // Blog nahi mila

  if (!blog) {
    return (
      <section className="min-h-[70vh] flex items-center justify-center px-5">

        <div className="text-center">

          <h1 className="text-4xl font-bold text-gray-900">
            Blog Not Found
          </h1>

          <p className="mt-4 text-gray-500">
            The article you are looking for doesn't exist.
          </p>

          <Link
            to="/blog"
            className="inline-block mt-6 px-6 py-3 rounded-full bg-gradient-to-r from-[#F04F5A] to-[#FFB300] text-white font-semibold"
          >
            Back To Blog
          </Link>

        </div>

      </section>
    );
  }


  return (
    <main className="bg-white">

      {/* =====================================
          HERO
      ====================================== */}

      <section className="relative min-h-[420px] md:min-h-[520px] overflow-hidden">

        <img
          src={blog.image}
          alt={blog.title}
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Overlay */}

        <div className="absolute inset-0 bg-black/65" />


        {/* Hero Content */}

        <div className="relative z-10 min-h-[420px] md:min-h-[520px] flex items-center">

          <div className="max-w-5xl mx-auto px-5 sm:px-6 lg:px-8 w-full text-center">

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >

              {/* Category */}

              <span className="inline-block px-4 py-2 rounded-full bg-gradient-to-r from-[#F04F5A] to-[#FFB300] text-white text-xs sm:text-sm font-semibold">
                {blog.category}
              </span>


              {/* Title */}

              <h1 className="mt-6 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight text-white">
                {blog.title}
              </h1>


              {/* Meta */}

              <div className="mt-6 flex flex-wrap justify-center gap-x-5 gap-y-2 text-sm text-gray-200">

                <span>
                  {blog.date}
                </span>

                <span className="hidden sm:block">
                  •
                </span>

                <span>
                  By {blog.author}
                </span>

                <span className="hidden sm:block">
                  •
                </span>

                <span>
                  {blog.readTime}
                </span>

              </div>

            </motion.div>

          </div>

        </div>

      </section>


      {/* =====================================
          ARTICLE
      ====================================== */}

      <section className="py-14 md:py-20">

        <div className="max-w-4xl mx-auto px-5 sm:px-6 lg:px-8">


          {/* Intro */}

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-lg md:text-xl leading-8 md:leading-9 text-gray-600"
          >
            {blog.content.intro}
          </motion.p>


          {/* Article Sections */}

          <div className="mt-12 space-y-12">

            {blog.content.sections.map((section, index) => (

              <motion.article
                key={index}
                initial={{
                  opacity: 0,
                  y: 30
                }}
                whileInView={{
                  opacity: 1,
                  y: 0
                }}
                viewport={{
                  once: true
                }}
                transition={{
                  duration: 0.6
                }}
              >

                <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
                  {section.title}
                </h2>

                <div className="mt-4 h-1 w-16 rounded-full bg-gradient-to-r from-[#F04F5A] to-[#FFB300]" />

                <p className="mt-5 text-gray-600 leading-8">
                  {section.text}
                </p>

              </motion.article>

            ))}

          </div>


          {/* =====================================
              GALLERY
          ====================================== */}

          {blog.content.gallery?.length > 0 && (

            <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 gap-5">

              {blog.content.gallery.map((image, index) => (

                <motion.div
                  key={index}
                  initial={{
                    opacity: 0,
                    scale: 0.95
                  }}
                  whileInView={{
                    opacity: 1,
                    scale: 1
                  }}
                  viewport={{
                    once: true
                  }}
                  className="overflow-hidden rounded-2xl"
                >

                  <img
                    src={image}
                    alt=""
                    className="w-full h-64 md:h-80 object-cover hover:scale-105 transition duration-700"
                  />

                </motion.div>

              ))}

            </div>

          )}


          {/* =====================================
              QUOTE
          ====================================== */}

          <motion.blockquote
            initial={{
              opacity: 0,
              y: 30
            }}
            whileInView={{
              opacity: 1,
              y: 0
            }}
            viewport={{
              once: true
            }}
            className="my-14 rounded-3xl bg-gradient-to-br from-orange-50 to-red-50 p-7 sm:p-10"
          >

            <div className="text-4xl text-orange-500 font-serif">
              “
            </div>

            <p className="mt-2 text-lg md:text-xl italic leading-8 text-gray-700">
              {blog.content.quote}
            </p>

          </motion.blockquote>


          {/* =====================================
              CONCLUSION
          ====================================== */}

          <div className="mt-12">

            <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
              Conclusion
            </h2>

            <div className="mt-4 h-1 w-16 rounded-full bg-gradient-to-r from-[#F04F5A] to-[#FFB300]" />

            <p className="mt-5 text-gray-600 leading-8">
              {blog.content.conclusion}
            </p>

          </div>


          {/* =====================================
              BACK TO BLOG
          ====================================== */}

          <div className="mt-14 pt-8 border-t border-gray-200">

            <Link
              to="/blog"
              className="inline-flex items-center gap-2 font-semibold text-gray-900 hover:text-[#F04F5A] transition"
            >
              ← Back To Blog
            </Link>

          </div>

        </div>

      </section>

    </main>
  );
};

export default BlogDetails;