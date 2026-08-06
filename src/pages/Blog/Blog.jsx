// import { motion } from "framer-motion";
// import {
//   FiArrowUpRight,
//   FiCalendar,
//   FiUser,
//   FiChevronRight,
//   FiHome,
// } from "react-icons/fi";
// import { Link } from "react-router-dom";

// import blogBg from "../../assets/blog/blog-bg.jpeg";

// import blog1 from "../../assets/blog/blog1.jpeg";
// import blog2 from "../../assets/blog/blog2.jpeg";
// import blog3 from "../../assets/blog/blog3.jpeg";
// import blog4 from "../../assets/blog/blog4.jpeg";
// import blog5 from "../../assets/blog/blog5.jpeg";
// import blog6 from "../../assets/blog/blog6.jpeg";

// import { blogs } from "../../data/blog/blogs";

// const Blog = () => {
//   return (
//     <>
//       <section className="relative min-h-[360px] sm:min-h-[420px] lg:min-h-[480px] overflow-hidden">

//         {/* Background Image */}
//         <motion.div
//           initial={{ scale: 1.05 }}
//           animate={{ scale: 1 }}
//           transition={{ duration: 1.2, ease: "easeOut" }}
//           className="absolute inset-0"
//         >
//           <img
//             src={blogBg}
//             alt="Chakrin Digital Textile Blog"
//             className="h-full w-full object-cover"
//           />
//         </motion.div>

//         {/* Dark Overlay */}
//         <div className="absolute inset-0 bg-black/65" />

//         {/* Gradient Overlay */}
//         <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-black/70" />

//         {/* Decorative Glow */}
//         <div className="absolute -left-20 top-1/2 h-64 w-64 -translate-y-1/2 rounded-full bg-orange-500/10 blur-[100px]" />

//         <div className="relative z-10 flex min-h-[360px] sm:min-h-[420px] lg:min-h-[480px] items-center justify-center px-5">

//           <motion.div
//             initial={{ opacity: 0, y: 35 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8 }}
//             className="text-center text-white"
//           >

//             {/* Small Label */}
//             {/* <motion.div
//               initial={{ opacity: 0, y: 15 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ delay: 0.2, duration: 0.6 }}
//               className="mb-4 flex items-center justify-center gap-3"
//             >
//               <span className="h-px w-8 bg-orange-400 sm:w-12" />

//               <span className="text-[10px] font-semibold uppercase tracking-[4px] text-orange-400 sm:text-xs">
//                 Chakrin Digital
//               </span>

//               <span className="h-px w-8 bg-orange-400 sm:w-12" />
//             </motion.div> */}

//             {/* Main Heading */}
//             <motion.h1
//               initial={{ opacity: 0, scale: 0.95 }}
//               animate={{ opacity: 1, scale: 1 }}
//               transition={{ delay: 0.3, duration: 0.7 }}
//               className="text-5xl font-extrabold tracking-tight sm:text-6xl md:text-7xl lg:text-8xl"
//             >
//               Our Blog
//             </motion.h1>

//             {/* Description */}
//             {/* <motion.p
//               initial={{ opacity: 0, y: 15 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ delay: 0.45, duration: 0.6 }}
//               className="mx-auto mt-4 max-w-xl text-sm leading-6 text-gray-200 sm:text-base"
//             >
//               Insights, ideas and innovations shaping the future of
//               digital textile printing.
//             </motion.p> */}

//             {/* Breadcrumb */}
//             <motion.div
//               initial={{ opacity: 0, y: 15 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ delay: 0.6, duration: 0.6 }}
//               className="mt-7 flex items-center justify-center gap-2 text-xs font-semibold uppercase tracking-wide sm:text-sm"
//             >
//               <Link
//                 to="/"
//                 className="flex items-center gap-2 text-white hover:text-orange-400 duration-300"
//               >
//                 <FiHome />
//                 Home
//               </Link>


//               <FiChevronRight className="text-orange-400" />

//               <span className="text-orange-400">
//                 Blog
//               </span>
//             </motion.div>

//           </motion.div>
//         </div>

//         {/* Bottom Curve */}
//         <div className="absolute bottom-0 left-0 h-8 w-full bg-white [clip-path:ellipse(60%_100%_at_50%_100%)] sm:h-10" />

//       </section>

//       <section className="bg-[#F7F8FA] py-20 sm:py-24 lg:py-28">

//         <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">

//           {/* ================= HEADING ================= */}

//           <motion.div
//             initial={{ opacity: 0, y: 35 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.7 }}
//             className="mb-12 text-center sm:mb-16"
//           >

//             <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[4px] text-[#F15A4A] sm:text-sm">
//               <span className="h-[1px] w-7 bg-[#F15A4A]" />
//               Insights & Stories
//               <span className="h-[1px] w-7 bg-[#F15A4A]" />
//             </span>

//             <h2 className="mx-auto mt-5 max-w-3xl text-3xl font-bold leading-tight text-[#101828] sm:text-4xl lg:text-5xl">
//               Ideas That Shape The
//               <span className="text-[#F15A4A]"> Textile Future</span>
//             </h2>

//             <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-gray-500 sm:text-base">
//               Explore industry insights, digital textile innovations,
//               production knowledge and the latest trends from the world
//               of textiles.
//             </p>

//           </motion.div>


//           {/* ================= FEATURED BLOG ================= */}

//           <motion.div
//             initial={{ opacity: 0, y: 40 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.8 }}
//             className="mb-12 overflow-hidden rounded-[28px] bg-white shadow-[0_15px_50px_rgba(0,0,0,0.06)] lg:mb-16"
//           >

//             <div className="grid lg:grid-cols-2">

//               {/* Image */}

//               <div className="group relative min-h-[280px] overflow-hidden sm:min-h-[380px] lg:min-h-[450px]">

//                 <img
//                   src={blogs[0].image}
//                   alt={blogs[0].title}
//                   className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-105"
//                 />

//                 {/* Image Overlay */}

//                 <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />

//                 {/* Category */}

//                 <span className="absolute left-5 top-5 rounded-full bg-gradient-to-r from-[#F04F5A] to-[#FFB000] px-4 py-2 text-xs font-semibold text-white shadow-lg sm:left-7 sm:top-7 sm:text-sm">
//                   {blogs[0].category}
//                 </span>

//               </div>


//               {/* Content */}

//               <div className="flex flex-col justify-center p-7 sm:p-10 lg:p-14">

//                 <div className="mb-5 flex flex-wrap items-center gap-x-5 gap-y-2 text-xs text-gray-400">

//                   <span className="flex items-center gap-2">
//                     <FiCalendar className="text-[#F15A4A]" />
//                     {blogs[0].date}
//                   </span>

//                   <span className="flex items-center gap-2">
//                     <FiUser className="text-[#F15A4A]" />
//                     {blogs[0].author}
//                   </span>

//                 </div>

//                 <h3 className="text-2xl font-bold leading-tight text-[#111827] sm:text-3xl lg:text-4xl">
//                   {blogs[0].title}
//                 </h3>

//                 <p className="mt-5 text-sm leading-7 text-gray-500 sm:text-base">
//                   {blogs[0].excerpt}
//                 </p>

//                 <LInk
//                   to={`/blog/${blogs[0].slug}`}
//                   className="group/btn mt-7 flex w-fit items-center gap-2 font-semibold text-[#111827] transition hover:text-[#F15A4A]">

//                   Read Article

//                   <span className="flex h-9 w-9 items-center justify-center rounded-full bg-gray-100 transition group-hover/btn:bg-[#F15A4A] group-hover/btn:text-white">
//                     <FiArrowUpRight />
//                   </span>

//                 </LInk>

//               </div>

//             </div>

//           </motion.div>


//           {/* ================= BLOG GRID ================= */}

//           <div className="grid grid-cols-1 gap-7 sm:grid-cols-2 xl:grid-cols-3">

//             {blogs.slice(1).map((blog, index) => (

//               <motion.article
//                 key={index}
//                 initial={{
//                   opacity: 0,
//                   y: 45,
//                 }}
//                 whileInView={{
//                   opacity: 1,
//                   y: 0,
//                 }}
//                 viewport={{
//                   once: true,
//                   margin: "-80px",
//                 }}
//                 transition={{
//                   duration: 0.6,
//                   delay: index * 0.1,
//                 }}
//                 whileHover={{
//                   y: -8,
//                 }}
//                 className="group overflow-hidden rounded-[24px] bg-white shadow-[0_10px_35px_rgba(0,0,0,0.05)] transition-shadow duration-500 hover:shadow-[0_20px_50px_rgba(0,0,0,0.10)]"
//               >

//                 {/* Image */}

//                 <div className="relative h-[230px] overflow-hidden sm:h-[250px]">

//                   <img
//                     src={blog.image}
//                     alt={blog.title}
//                     className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
//                   />

//                   {/* Overlay */}

//                   <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-60" />

//                   {/* Category */}

//                   <span className="absolute left-5 top-5 rounded-full bg-white/95 px-4 py-2 text-xs font-semibold text-gray-800 shadow-md backdrop-blur-sm">
//                     {blog.category}
//                   </span>

//                 </div>


//                 {/* Content */}

//                 <div className="p-6 sm:p-7">

//                   {/* Meta */}

//                   <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-[11px] uppercase tracking-wide text-gray-400">

//                     <span className="flex items-center gap-1.5">
//                       <FiCalendar className="text-[#F15A4A]" />
//                       {blog.date}
//                     </span>

//                     <span className="flex items-center gap-1.5">
//                       <FiUser className="text-[#F15A4A]" />
//                       {blog.author}
//                     </span>

//                   </div>


//                   {/* Title */}

//                   <h3 className="mt-4 text-xl font-bold leading-snug text-[#101828] transition duration-300 group-hover:text-[#F15A4A] sm:text-2xl">
//                     {blog.title}
//                   </h3>


//                   {/* Description */}

//                   <p className="mt-4 line-clamp-3 text-sm leading-6 text-gray-500">
//                     {blog.excerpt}
//                   </p>


//                   {/* Read More */}

//                   <div className="mt-6 border-t border-gray-100 pt-5">

//                     <button className="group/read flex items-center gap-2 text-sm font-semibold text-gray-800 transition hover:text-[#F15A4A]">

//                       Read More

// <span className="transition duration-300 group-hover/read:translate-x-1">
//   <FiArrowUpRight />
// </span>

//                     </button>

//                   </div>

//                 </div>

//               </motion.article>

//             ))}

//           </div>


//           {/* ================= BOTTOM CTA ================= */}

//           <motion.div
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.7 }}
//             className="mt-14 flex flex-col items-center justify-between gap-5 rounded-3xl bg-[#111827] px-7 py-8 text-center sm:px-10 lg:flex-row lg:text-left"
//           >

//             <div>

//               <h3 className="text-xl font-bold text-white sm:text-2xl">
//                 Want to explore more textile insights?
//               </h3>

//               <p className="mt-2 text-sm text-gray-400">
//                 Discover our latest articles, ideas and industry updates.
//               </p>

//             </div>

//             <button className="flex shrink-0 items-center gap-2 rounded-full bg-gradient-to-r from-[#F04F5A] to-[#FFB000] px-7 py-3.5 text-sm font-semibold text-white shadow-lg transition duration-300 hover:scale-105">

//               View All Blogs

//               <FiArrowUpRight />

//             </button>

//           </motion.div>

//         </div>

//       </section>

//     </>
//   );
// };

// export default Blog;


import { Link } from "react-router-dom";
import { blogs } from "../../data/blog/blogs";
import { motion } from "framer-motion";
import blogBg from "../../assets/blog/blog-bg.jpeg";
import {
  FiArrowUpRight,
  FiCalendar,
  FiUser,
  FiChevronRight,
  FiHome,
} from "react-icons/fi";


const Blog = () => {
  return (

    <>
      <section className="relative min-h-[360px] sm:min-h-[420px] lg:min-h-[480px] overflow-hidden">

        {/* Background Image */}
        <motion.div
          initial={{ scale: 1.05 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="absolute inset-0"
        >
          <img
            src={blogBg}
            alt="Chakrin Digital Textile Blog"
            className="h-full w-full object-cover"
          />
        </motion.div>

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/65" />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-black/70" />

        {/* Decorative Glow */}
        <div className="absolute -left-20 top-1/2 h-64 w-64 -translate-y-1/2 rounded-full bg-orange-500/10 blur-[100px]" />

        <div className="relative z-10 flex min-h-[360px] sm:min-h-[420px] lg:min-h-[480px] items-center justify-center px-5">

          <motion.div
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center text-white"
          >

            {/* Small Label */}
            {/* <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="mb-4 flex items-center justify-center gap-3"
            >
              <span className="h-px w-8 bg-orange-400 sm:w-12" />

              <span className="text-[10px] font-semibold uppercase tracking-[4px] text-orange-400 sm:text-xs">
                Chakrin Digital
              </span>

              <span className="h-px w-8 bg-orange-400 sm:w-12" />
            </motion.div> */}

            {/* Main Heading */}
            <motion.h1
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3, duration: 0.7 }}
              className="text-5xl font-extrabold tracking-tight sm:text-6xl md:text-7xl lg:text-8xl"
            >
              Our Blog
            </motion.h1>

            {/* Description */}
            {/* <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.45, duration: 0.6 }}
              className="mx-auto mt-4 max-w-xl text-sm leading-6 text-gray-200 sm:text-base"
            >
              Insights, ideas and innovations shaping the future of
              digital textile printing.
            </motion.p> */}

            {/* Breadcrumb */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="mt-7 flex items-center justify-center gap-2 text-xs font-semibold uppercase tracking-wide sm:text-sm"
            >
              <Link
                to="/"
                className="flex items-center gap-2 text-white hover:text-orange-400 duration-300"
              >
                <FiHome />
                Home
              </Link>


              <FiChevronRight className="text-orange-400" />

              <span className="text-orange-400">
                Blog
              </span>
            </motion.div>

          </motion.div>
        </div>

        {/* Bottom Curve */}
        <div className="absolute bottom-0 left-0 h-8 w-full bg-white [clip-path:ellipse(60%_100%_at_50%_100%)] sm:h-10" />

      </section>


      <section className="py-20 bg-white">

        <div className="max-w-7xl mx-auto px-5">

          {/* Heading */}

          <div className="text-center mb-14">

            {/* <span className="text-sm uppercase tracking-[4px] text-orange-500 font-semibold">
            Our Blog
          </span> */}

            <h2 className="mt-3 text-4xl md:text-5xl font-bold text-gray-900">
              Latest Textile Insights
            </h2>

            <p className="mt-4 max-w-2xl mx-auto text-gray-500">
              Explore the latest trends, technologies and insights from
              the textile industry.
            </p>

          </div>


          {/* Blog Grid */}

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

            {blogs.map((blog) => (

              <article
                key={blog.id}
                className="group overflow-hidden rounded-3xl bg-white border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-500"
              >

                {/* Image */}

                <div className="relative overflow-hidden">

                  <img
                    src={blog.image}
                    alt={blog.title}
                    className="w-full h-64 object-cover group-hover:scale-105 transition duration-700"
                  />

                  <span className="absolute top-5 left-5 px-4 py-2 rounded-full bg-gradient-to-r from-[#F04F5A] to-[#FFB300] text-white text-xs font-semibold">
                    {blog.category}
                  </span>

                </div>


                {/* Content */}

                <div className="p-6">

                  <div className="flex flex-wrap gap-3 text-xs text-gray-400 mb-4">

                    <span>{blog.date}</span>

                    <span>•</span>

                    <span>{blog.readTime}</span>

                  </div>


                  <h3 className="text-xl font-bold text-gray-900 leading-snug">
                    {blog.title}
                  </h3>


                  <p className="mt-4 text-gray-500 text-sm leading-7">
                    {blog.shortDescription}
                  </p>


                  {/* Read More */}

                  <div className="mt-6 border-t border-gray-100 pt-5">
                    <Link
                      to={`/blog/${blog.slug}`}
                      className="group/read flex items-center gap-2 text-sm font-semibold text-gray-800 transition hover:text-[#F15A4A] "
                    >
                      Read More
                      <span className="transition duration-300 group-hover/read:translate-x-1">
                        <FiArrowUpRight />
                      </span>
                    </Link>

                  </div>

                </div>

              </article>

            ))}

          </div>

        </div>

      </section>
    </>
  );
};

export default Blog;