// "use client";
// import Hero2 from "@/components/CategoryCarousel";
// import CustomerFeedback from "@/components/CustomerFeedback";
// import VeerBharatHero from "@/components/VeerBharatHero";
// import WhyUsSection from "@/components/WhyUsSection";
// import { motion } from "framer-motion";
// import { Playfair_Display, Poppins } from "next/font/google";
// import Image from "next/image";
// import { useEffect, useRef, useState } from "react";
// import { FaWhatsapp } from "react-icons/fa";
// import HealthBenefits from "../components/HealthBenefits";

// /* ---------- Fonts ---------- */
// const poppins = Poppins({ subsets: ["latin"], weight: ["400", "600", "800"] });
// const playfair = Playfair_Display({
//   subsets: ["latin"],
//   weight: ["700", "800"],
// });

// export default function Home() {
//   return (
//     <main className={`${poppins.className} bg-[#fef9c3] text-[#0b0d11]`}>
//       {/* Video Hero */}
//       <VideoHero videos={["/images/hero-video.mp4"]} />

//       {/* Heading */}

//       <div className="py-16 md:py-20 lg:py-24 text-center bg-gradient-to-b from-white to-gray-50/50">
//         <motion.h1
//           initial={{ y: 40, opacity: 0 }}
//           whileInView={{ y: 0, opacity: 1 }}
//           transition={{
//             duration: 0.9,
//             ease: [0.25, 0.46, 0.45, 0.94],
//             delay: 0.1,
//           }}
//           viewport={{ once: true, margin: "-50px" }}
//           className={`
//       ${playfair.className} 
//       text-4xl md:text-5xl lg:text-6xl 
//       font-extrabold tracking-tight
//       bg-gradient-to-r from-amber-900 via-orange-800 to-green-900
//       bg-clip-text text-transparent
//       leading-tight md:leading-snug
//       px-4 md:px-0
//     `}
//         >
//          Welcome to Veer Bharat,
//           <span className="block mt-2 md:mt-3">
//           Mustard Oil Tradition Meets Nutrition
//           </span>
//         </motion.h1>

//         <motion.div
//           initial={{ scaleX: 0, opacity: 0 }}
//           whileInView={{ scaleX: 1, opacity: 1 }}
//           transition={{
//             duration: 0.8,
//             delay: 0.3,
//             ease: "easeOut",
//           }}
//           viewport={{ once: true }}
//           className="
//       mt-6 md:mt-8 
//       w-40 md:w-48 lg:w-56 
//       mx-auto h-1.5 
//       rounded-full 
//       bg-gradient-to-r 
//       from-amber-400 via-orange-500 to-green-600
//       shadow-lg shadow-amber-200/50
//     "
//         />

//         {/* Optional decorative elements */}
//         <motion.div
//           initial={{ opacity: 0 }}
//           whileInView={{ opacity: 1 }}
//           transition={{ duration: 0.6, delay: 0.5 }}
//           viewport={{ once: true }}
//           className="mt-8 md:mt-12 flex justify-center space-x-2"
//         >
//           {[1, 2, 3].map((item) => (
//             <div key={item} className="w-2 h-2 rounded-full bg-amber-300/60" />
//           ))}
//         </motion.div>
//       </div>

//       {/* Category Carousel */}
//       <Hero2 />

//       {/* Categories Grid */}
//       <CategoriesGrid />

//       {/* Moving Showcase */}
//       <VideoShowcase />

//       {/* ====== FEATURED IMAGE (REPLACES PREVIOUS BRANCHES) ====== */}
//       <FeaturedImageSection />
//       <VeerBharatHero />

//       {/* ====== BRANCHES & GALLERY (REPLACES PREVIOUS FEATURED IMAGE) ====== */}

//       <HealthBenefits />
//       <WhyUsSection />
//       <CustomerFeedback />
//       {/* <Branches /> */}

//       {/* WhatsApp button */}
//       <a
//         href="https://wa.me/6205771930"
//         target="_blank"
//         rel="noopener noreferrer"
//         className="fixed right-5 bottom-5 z-50 flex items-center justify-center w-14 h-14 rounded-full bg-green-500 shadow-lg text-white hover:scale-105 transition"
//         aria-label="WhatsApp"
//       >
//         <FaWhatsapp className="w-6 h-6" />
//       </a>

//       <style jsx>{`
//         .featured-heading {
//           text-shadow: 0 6px 24px rgba(0, 0, 0, 0.5);
//         }
//       `}</style>
//     </main>
//   );
// }

// /* ================= CategoriesGrid ================= */

// function CategoriesGrid() {
//   const categories = [
//     {
//       id: "cat-1",
//       name: "Mustard Oil",
//       image: "/images/Unknown-1.jpeg",
//       description:
//         "Mustard oil with strong aroma & flavor. Perfect for traditional cooking and pickling.",
//     },
//     {
//       id: "cat-2",
//       name: "Soyabean Oil",
//       image: "/images/Unknown-2.jpeg",
//       description:
//         "Light texture, rich in Vitamin E. Great for everyday cooking and heart health.",
//     },
//     {
//       id: "cat-3",
//       name: "Palm Oil",
//       image: "/images/Unknown-3.jpeg",
//       description:
//         "Palm oil for high-heat cooking. High stability & neutral taste for versatile use.",
//     },
//     {
//       id: "cat-4",
//       name: "Rice Bran Oil",
//       image: "/images/Unknown-5.jpeg",
//       description:
//         "Rice bran oil, ideal for frying. Heart friendly & high smoke point for healthy cooking.",
//     },
//   ];

//   return (
//     <section className="relative overflow-hidden bg-gradient-to-br from-purple-50 via-violet-50 to-purple-100 py-20 md:py-28">
//       {/* Enhanced Background Pattern */}
//       <div className="absolute inset-0 opacity-20">
//         <div
//           className="absolute inset-0"
//           style={{
//             backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.15'%3E%3Ccircle cx='40' cy='40' r='3'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
//           }}
//         />
//       </div>

//       {/* Floating Background Elements */}
//       <div className="absolute inset-0 pointer-events-none">
//         <div className="absolute -top-20 -left-20 h-60 w-60 rounded-full bg-amber-200/30 blur-3xl"></div>
//         <div className="absolute -bottom-20 -right-20 h-60 w-60 rounded-full bg-purple-200/30 blur-3xl"></div>
//       </div>

//       <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
//         {/* Enhanced Header Section */}
//         <div className="mb-20 text-center">
//           <div className="inline-flex flex-col items-center">
//             <h2 className="bg-gradient-to-r from-slate-900 via-purple-900 to-slate-900 bg-clip-text text-4xl font-black tracking-tight text-transparent md:text-5xl lg:text-6xl">
//               Explore Categories
//             </h2>
//             <div className="mt-4 h-1.5 w-32 rounded-full bg-gradient-to-r from-amber-400 to-orange-500"></div>
//             <p className="mt-6 max-w-2xl text-lg text-slate-600 md:text-xl">
//               Discover our premium range of edible oils, each crafted with care
//               for your health and taste
//             </p>
//           </div>
//         </div>

//         {/* Enhanced Grid Layout */}
//         <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
//           {categories.map((category, index) => (
//             <div
//               key={category.id}
//               className="group relative flex flex-col overflow-hidden rounded-3xl bg-white shadow-2xl transition-all duration-500 hover:scale-105 hover:shadow-3xl"
//               style={{
//                 minHeight: "420px",
//                 animationDelay: `${index * 100}ms`,
//               }}
//             >
//               {/* Image Container */}
//               <div className="relative h-64 overflow-hidden">
//                 <img
//                   src={category.image}
//                   alt={category.name}
//                   className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
//                   loading="lazy"
//                 />

//                 {/* Gradient Overlay */}
//                 <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100"></div>

//                 {/* Premium Badge */}
//                 <div className="absolute top-4 right-4 rounded-full bg-amber-500/90 p-2 shadow-lg backdrop-blur-sm">
//                   <span className="text-sm font-bold text-white">★</span>
//                 </div>

//                 {/* Category Index */}
//                 <div className="absolute top-4 left-4 flex h-8 w-8 items-center justify-center rounded-full bg-white/90 text-sm font-bold text-slate-900 shadow-sm">
//                   {index + 1}
//                 </div>
//               </div>

//               {/* Content Section */}
//               <div className="flex flex-1 flex-col px-6 py-7 text-center">
//                 <h3 className="mb-3 text-xl font-black text-slate-900 transition-colors duration-300 group-hover:text-amber-600 lg:text-2xl">
//                   {category.name}
//                 </h3>

//                 <p className="mb-6 flex-1 text-base leading-relaxed text-slate-600">
//                   {category.description}
//                 </p>

//                 {/* Enhanced CTA Button */}
//                 <a
//                   href="/products"
//                   className="group/button inline-flex items-center justify-center rounded-2xl bg-gradient-to-r from-amber-400 to-orange-500 px-8 py-4 text-sm font-bold text-white shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-amber-500/25"
//                 >
//                   Explore Category
//                   <svg
//                     className="ml-3 h-4 w-4 transition-transform duration-300 group-hover/button:translate-x-1"
//                     fill="none"
//                     stroke="currentColor"
//                     viewBox="0 0 24 24"
//                   >
//                     <path
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       strokeWidth={3}
//                       d="M17 8l4 4m0 0l-4 4m4-4H3"
//                     />
//                   </svg>
//                 </a>
//               </div>

//               {/* Hover Border Effect */}
//               <div className="absolute inset-0 rounded-3xl border-2 border-transparent transition-all duration-300 group-hover:border-amber-200/50"></div>
//             </div>
//           ))}
//         </div>

//         {/* Bottom CTA */}
//         <div className="mt-16 text-center">
//           <a
//             href="/products"
//             className="inline-flex items-center rounded-2xl bg-slate-900 px-10 py-4 font-semibold text-white transition-all duration-300 hover:scale-105 hover:bg-slate-800 hover:shadow-2xl"
//           >
//             View All Products
//             <svg
//               className="ml-3 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1"
//               fill="none"
//               stroke="currentColor"
//               viewBox="0 0 24 24"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth={2}
//                 d="M17 8l4 4m0 0l-4 4m4-4H3"
//               />
//             </svg>
//           </a>
//         </div>
//       </div>
//     </section>
//   );
// }



// function VideoShowcase() {
//   const videos = [
//     {
//       id: "v-1",
//       video: "https://www.youtube.com/embed/7CzsdYLnAD4?si=xjDjX8W30kevuCYc",
//       title: "Coustomer Review | Veer Bharat Mustard Oil | Kachi Ghani Mustard Oil & Soyabean Oil jus watch it.",
//     },
//     {
//       id: "v-2",
//       video: "https://www.youtube.com/embed/_36qbMVzWLY?si=LyoH9t-M_wBzVEOQ",
//       title:
//         "veer Bharat Kachi Ghani Mustard Oil: The Heart of Healthy Indian Cooking. This is our manufacturing process video you must watch it",
//     },
//     {
//       id: "v-3",
//       video: "https://www.youtube.com/embed/0oh__XTrd9g?si=z_xT4BZNj7h-GBby",
//       title: "Planning to build our salea team and distributor network. Prospective candidates can watch this video.",
//     },
//   ];

//   const scrollContainerRef = useRef(null);
//   const videoRef = useRef(null);
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [currentVideo, setCurrentVideo] = useState(null);

//   const scrollLeft = () => {
//     if (scrollContainerRef.current) {
//       scrollContainerRef.current.scrollBy({ left: -420, behavior: "smooth" });
//     }
//   };

//   const scrollRight = () => {
//     if (scrollContainerRef.current) {
//       scrollContainerRef.current.scrollBy({ left: 420, behavior: "smooth" });
//     }
//   };

//   const openVideoModal = (video) => {
//     setCurrentVideo(video);
//     setIsModalOpen(true);
//     document.body.style.overflow = "hidden";
//   };

//   const closeVideoModal = () => {
//     setIsModalOpen(false);
//     setCurrentVideo(null);
//     document.body.style.overflow = "auto";
//     if (videoRef.current) {
//       videoRef.current.pause();
//     }
//   };

//   return (
//     <>
//       <section
//         className="relative w-full overflow-hidden py-12 md:py-16"
//         style={{ backgroundColor: "#fef9c3" }}
//       >
//         <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
//           <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-gray-900 text-center mb-8 md:mb-12">
//             The{" "}
//             <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
//               Veer Bharat
//             </span>{" "}
//             Video Showcase
//           </h2>

//           <div className="relative px-0 md:px-12 lg:px-16">
//             {/* Left Arrow - Desktop Only */}
//             <button
//               onClick={scrollLeft}
//               className="hidden lg:flex absolute left-0 top-1/2 -translate-y-1/2 z-20 w-14 h-14 rounded-full items-center justify-center shadow-2xl transition-all transform hover:scale-110 hover:shadow-purple-400/50 bg-gradient-to-r from-purple-500 to-purple-600"
//               style={{ marginLeft: "-24px" }}
//             >
//               <svg
//                 className="w-7 h-7 text-white"
//                 fill="none"
//                 stroke="currentColor"
//                 viewBox="0 0 24 24"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth={3}
//                   d="M15 19l-7-7 7-7"
//                 />
//               </svg>
//             </button>

//             {/* Right Arrow - Desktop Only */}
//             <button
//               onClick={scrollRight}
//               className="hidden lg:flex absolute right-0 top-1/2 -translate-y-1/2 z-20 w-14 h-14 rounded-full items-center justify-center shadow-2xl transition-all transform hover:scale-110 hover:shadow-purple-400/50 bg-gradient-to-r from-purple-500 to-purple-600"
//               style={{ marginRight: "-24px" }}
//             >
//               <svg
//                 className="w-7 h-7 text-white"
//                 fill="none"
//                 stroke="currentColor"
//                 viewBox="0 0 24 24"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth={3}
//                   d="M9 5l7 7-7 7"
//                 />
//               </svg>
//             </button>

//             {/* Video Cards Container */}
//             <div
//               ref={scrollContainerRef}
//               className="flex gap-4 md:gap-5 lg:gap-6 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide"
//               style={{
//                 scrollbarWidth: "none",
//                 msOverflowStyle: "none",
//                 WebkitOverflowScrolling: "touch",
//               }}
//             >
//               {videos.map((video) => (
//                 <div
//                   key={video.id}
//                   className="flex-shrink-0 w-[85vw] sm:w-[70vw] md:w-[45vw] lg:w-[calc(33.333%-16px)] bg-white rounded-3xl overflow-hidden shadow-2xl hover:shadow-purple-300/40 transition-all duration-500 transform hover:-translate-y-2 snap-center"
//                 >
//                   {/* Video Player */}
//                   <div className="relative bg-gradient-to-br from-purple-900 via-purple-800 to-pink-900 h-56 md:h-64 flex items-center justify-center group overflow-hidden">
//                     {video.video.endsWith(".mp4") ? (
//                       <video
//                         src={video.video}
//                         className="w-full h-full object-cover"
//                         muted
//                         loop
//                         preload="metadata"
//                         onClick={() => openVideoModal(video)}
//                       />
//                     ) : (
//                       <iframe
//                         src={video.video}
//                         title={video.title}
//                         className="w-full h-full object-cover"
//                         frameBorder="0"
//                         allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//                         allowFullScreen
//                         onClick={() => openVideoModal(video)}
//                       />
//                     )}
//                     <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

//                     {/* Play Button Overlay */}
//                     <button
//                       onClick={() => openVideoModal(video)}
//                       className="absolute inset-0 flex items-center justify-center"
//                     >
//                       <div className="relative">
//                         <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-purple-600 rounded-full blur-xl opacity-60 animate-pulse"></div>
//                         <div className="relative w-20 h-20 md:w-24 md:h-24 rounded-full flex items-center justify-center shadow-2xl transform group-hover:scale-125 transition-all duration-300 bg-gradient-to-r from-purple-500 to-purple-600 border-4 border-white/30">
//                           <svg
//                             className="w-10 h-10 md:w-12 md:h-12 text-white ml-1"
//                             fill="currentColor"
//                             viewBox="0 0 24 24"
//                           >
//                             <path d="M8 5v14l11-7z" />
//                           </svg>
//                         </div>
//                       </div>
//                     </button>

//                     {/* Duration Badge */}
//                     <div className="absolute top-4 right-4 px-3 py-1 bg-black/70 backdrop-blur-sm rounded-full text-white text-xs font-semibold">
//                       2:30
//                     </div>
//                   </div>

//                   {/* Video Info */}
//                   <div className="p-5 md:p-6 lg:p-7">
//                     <h3 className="text-gray-800 text-base md:text-lg font-bold mb-4 md:mb-5 leading-snug min-h-[3rem] md:min-h-[3.5rem] line-clamp-2">
//                       {video.title}
//                     </h3>

//                     <button
//                       onClick={() => openVideoModal(video)}
//                       className="w-full md:w-auto inline-flex items-center justify-center gap-2 bg-gradient-to-r from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700 text-white font-bold px-6 md:px-8 py-3 md:py-3.5 rounded-full transition-all transform hover:scale-105 shadow-lg hover:shadow-purple-400/50"
//                     >
//                       <svg
//                         className="w-4 h-4 md:w-5 md:h-5"
//                         fill="currentColor"
//                         viewBox="0 0 24 24"
//                       >
//                         <path d="M8 5v14l11-7z" />
//                       </svg>
//                       Watch Now
//                     </button>
//                   </div>
//                 </div>
//               ))}
//             </div>

//             {/* Mobile Scroll Indicators */}
//             <div className="flex lg:hidden justify-center gap-2 mt-6">
//               {videos.map((_, idx) => (
//                 <div key={idx} className="w-2 h-2 rounded-full bg-purple-400" />
//               ))}
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Video Modal - Half Screen Style */}
//       {isModalOpen && currentVideo && (
//         <div
//           className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-8 bg-black/90 backdrop-blur-md animate-fadeIn"
//           onClick={closeVideoModal}
//         >
//           <div
//             className="relative w-full max-w-5xl bg-gradient-to-br from-gray-900 to-black rounded-2xl shadow-2xl overflow-hidden animate-slideUp"
//             onClick={(e) => e.stopPropagation()}
//             style={{ maxHeight: "85vh" }}
//           >
//             {/* Close Button */}
//             <button
//               onClick={closeVideoModal}
//               className="absolute top-3 right-3 sm:top-4 sm:right-4 z-10 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-sm flex items-center justify-center transition-all hover:scale-110 group"
//             >
//               <svg
//                 className="w-5 h-5 sm:w-6 sm:h-6 text-white group-hover:rotate-90 transition-transform duration-300"
//                 fill="none"
//                 stroke="currentColor"
//                 viewBox="0 0 24 24"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth={2}
//                   d="M6 18L18 6M6 6l12 12"
//                 />
//               </svg>
//             </button>

//             {/* Share Button */}
//             <button
//               className="absolute top-3 right-16 sm:top-4 sm:right-20 z-10 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-sm flex items-center justify-center transition-all hover:scale-110"
//               title="Share"
//             >
//               <svg
//                 className="w-5 h-5 sm:w-6 sm:h-6 text-white"
//                 fill="none"
//                 stroke="currentColor"
//                 viewBox="0 0 24 24"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth={2}
//                   d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"
//                 />
//               </svg>
//             </button>

//             {/* Video Container */}
//             <div className="relative aspect-video bg-black">
//               {currentVideo.video.endsWith(".mp4") ? (
//                 <video
//                   ref={videoRef}
//                   src={currentVideo.video}
//                   className="w-full h-full"
//                   controls
//                   autoPlay
//                   muted={false}
//                 >
//                   Your browser does not support the video tag.
//                 </video>
//               ) : (
//                 <iframe
//                   className="w-full h-full"
//                   src={`${currentVideo.video}?autoplay=1&controls=1&modestbranding=1`}
//                   title={currentVideo.title}
//                   frameBorder="0"
//                   allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//                   allowFullScreen
//                 />
//               )}
//             </div>

//             {/* Video Info */}
//             <div className="p-4 sm:p-6 md:p-8 bg-gradient-to-b from-gray-900 to-black">
//               <div className="flex items-start justify-between gap-4 mb-4">
//                 <div className="flex items-center gap-3">
//                   <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-to-r from-purple-500 to-purple-600 flex items-center justify-center">
//                     <svg
//                       className="w-5 h-5 sm:w-6 sm:h-6 text-white"
//                       fill="currentColor"
//                       viewBox="0 0 24 24"
//                     >
//                       <path d="M12 2L2 7v10c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-10-5z" />
//                     </svg>
//                   </div>
//                   <div>
//                     <h3 className="text-white font-bold text-sm sm:text-base">
//                       Veer Bharat
//                     </h3>
//                     <p className="text-gray-400 text-xs sm:text-sm">
//                       Official Channel
//                     </p>
//                   </div>
//                 </div>
//               </div>

//               <h2 className="text-white text-lg sm:text-xl md:text-2xl font-bold mb-2 leading-tight">
//                 {currentVideo.title}
//               </h2>

//               <div className="flex flex-wrap items-center gap-3 sm:gap-4 text-gray-400 text-xs sm:text-sm">
//                 <span className="flex items-center gap-1">
//                   <svg
//                     className="w-4 h-4"
//                     fill="none"
//                     stroke="currentColor"
//                     viewBox="0 0 24 24"
//                   >
//                     <path
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       strokeWidth={2}
//                       d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
//                     />
//                     <path
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       strokeWidth={2}
//                       d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
//                     />
//                   </svg>
//                   1.2M views
//                 </span>
//                 <span>•</span>
//                 <span>2 days ago</span>
//               </div>
//             </div>
//           </div>
//         </div>
//       )}

//       <style jsx>{`
//         .scrollbar-hide::-webkit-scrollbar {
//           display: none;
//         }
//         .animate-fadeIn {
//           animation: fadeIn 0.3s ease-out;
//         }
//         .animate-slideUp {
//           animation: slideUp 0.3s ease-out;
//         }
//         @keyframes fadeIn {
//           from {
//             opacity: 0;
//           }
//           to {
//             opacity: 1;
//           }
//         }
//         @keyframes slideUp {
//           from {
//             opacity: 0;
//             transform: translateY(50px) scale(0.95);
//           }
//           to {
//             opacity: 1;
//             transform: translateY(0) scale(1);
//           }
//         }
//         .line-clamp-2 {
//           display: -webkit-box;
//           -webkit-line-clamp: 2;
//           -webkit-box-orient: vertical;
//           overflow: hidden;
//         }
//         @media (max-width: 640px) {
//           .snap-x {
//             scroll-snap-type: x mandatory;
//           }
//           .snap-center {
//             scroll-snap-align: center;
//           }
//         }
//         @media (min-width: 1024px) {
//           .flex-shrink-0 {
//             min-width: calc(33.333% - 16px);
//             max-width: calc(33.333% - 16px);
//           }
//         }
//       `}</style>
//     </>
//   );
// }

// /* ================= FEATURED IMAGE SECTION (bg2.jpeg) ================= */
// function FeaturedImageSection() {
//   return (
//     <section className="relative w-full h-screen">
//       {/* Full viewport height container */}
//       <div className="relative w-full h-full flex items-center justify-center">
//         <Image
//           src="/images/bg2.jpeg"
//           alt="Neighbourhood freshness"
//           fill
//           className="object-cover"
//           sizes="100vw"
//           unoptimized
//           priority
//           quality={90}
//         />
//       </div>
//     </section>
//   );
// }
// // ya tumhara existing section

// /* ================= Branches (Gallery) ================= */

// function Branches() {
//   const imgs = [
//     "/images/banner4.jpg",
//     "/images/banner3.jpg",
//     "/images/team1.jpg",
//   ];

//   const cards = [
//     {
//       title: "Authentic Kachi Ghani",
//       subtitle: "Traditional cold-pressed goodness",
//       desc: "Veer Bharat’s Kachi Ghani mustard oil is crafted using time-honoured cold-pressing methods that preserve the natural aroma, pungency and nutrition of mustard seeds. Sourced from trusted farmers, our cold-pressed oil is minimally processed to retain essential fatty acids, natural antioxidants and a bold, restaurant-quality flavor that elevates everyday cooking.",
//       img: imgs[0],
//     },
//     {
//       title: "Unmatched Purity",
//       subtitle: "Double filtration, zero compromise",
//       desc: "Purity is non-negotiable — that’s why we maintain rigorous quality checks at every step. From seed testing to controlled extraction and double-stage filtration, each batch undergoes strict lab analysis to ensure low free fatty acid levels and optimal freshness. Our sealed packaging and batch traceability guarantee you receive oil you can trust.",
//       img: imgs[1],
//     },
//     {
//       title: "Rich, Inviting Flavor",
//       subtitle: "Pungency that defines taste",
//       desc: "A single drizzle of Veer Bharat mustard oil transforms ordinary recipes into memorable meals. Its robust aroma and sustained flavor work beautifully for tempering, pickles and deep frying — delivering consistent frying performance, crisp results and a taste profile that families come back to again and again.",
//       img: imgs[2],
//     },
//   ];

//   return (
//     <section className="py-20 bg-transparent">
//       <div className="container mx-auto max-w-7xl px-6">
//         {/* Header + long descriptive paragraph (200+ words) */}
//         <motion.h2
//           initial={{ y: 16, opacity: 0 }}
//           whileInView={{ y: 0, opacity: 1 }}
//           viewport={{ once: true }}
//           className="text-3xl md:text-4xl font-extrabold mb-4 text-center text-[#0b2b52]"
//         >
//           Why Veer Bharat Mustard Oil
//         </motion.h2>

//         <motion.p
//           initial={{ opacity: 0 }}
//           whileInView={{ opacity: 1 }}
//           viewport={{ once: true }}
//           transition={{ delay: 0.08 }}
//           className="max-w-4xl mx-auto text-center text-gray-700 mb-12 text-lg leading-relaxed"
//           style={{ textAlign: "justify" }}
//         ></motion.p>

//         {/* Three feature cards */}
//         <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
//           {cards.map((c, i) => (
//             <motion.article
//               key={i}
//               initial={{ opacity: 0, y: 18 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ delay: i * 0.08 }}
//               className="relative rounded-2xl overflow-hidden shadow-2xl border border-amber-100 bg-white/60 backdrop-blur-sm transform transition hover:-translate-y-2 duration-300"
//             >
//               {/* Large image area */}
//               <div
//                 className="relative w-full"
//                 style={{ aspectRatio: "1280/700", minHeight: 180 }}
//               >
//                 <Image
//                   src={c.img}
//                   alt={c.title}
//                   fill
//                   className="object-cover object-center transition-transform duration-700 hover:scale-105"
//                   unoptimized
//                 />
//                 <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/10 pointer-events-none" />
//               </div>

//               {/* Wavy divider */}
//               <div className="absolute left-0 right-0 -mt-6 pointer-events-none">
//                 <svg
//                   viewBox="0 0 1440 80"
//                   className="w-full h-8 md:h-10"
//                   preserveAspectRatio="none"
//                   aria-hidden
//                 >
//                   <path
//                     d="M0,40 C120,90 360,0 720,40 C1080,80 1320,10 1440,40 L1440,80 L0,80 Z"
//                     fill="#fffaf0"
//                   />
//                 </svg>
//               </div>

//               {/* Content */}
//               <div className="bg-[#fffaf0] px-6 py-8 pt-12 min-h-[260px]">
//                 <h3 className="text-2xl md:text-3xl font-extrabold mb-1 text-amber-900">
//                   {c.title}
//                 </h3>
//                 <div className="text-sm md:text-base font-semibold text-amber-700 mb-4">
//                   {c.subtitle}
//                 </div>

//                 <p
//                   className="text-gray-700 leading-relaxed text-sm md:text-base"
//                   style={{ textAlign: "justify" }}
//                 >
//                   {c.desc}
//                 </p>

//                 <div className="mt-6 flex items-center justify-between gap-4">
//                   <a
//                     href="/products"
//                     className="inline-block text-sm md:text-base font-bold rounded-full bg-amber-500 px-5 py-3 text-black shadow-md hover:shadow-lg transform hover:-translate-y-0.5 transition"
//                     aria-label={`Explore products - ${c.title}`}
//                   >
//                     Explore Products
//                   </a>

//                   <a
//                     href="/contact"
//                     className="text-sm md:text-base text-amber-900 underline hover:text-amber-700"
//                   >
//                     Contact Us
//                   </a>
//                 </div>
//               </div>

//               {/* Badge */}
//               <div className="absolute left-5 top-5 z-20">
//                 <div className="inline-flex items-center gap-2 bg-white/95 px-3 py-1 rounded-full shadow-sm border border-amber-100">
//                   <svg
//                     width="18"
//                     height="18"
//                     viewBox="0 0 24 24"
//                     fill="none"
//                     aria-hidden
//                   >
//                     <circle
//                       cx="12"
//                       cy="12"
//                       r="9"
//                       stroke="#B45309"
//                       strokeWidth="1.2"
//                     />
//                     <path
//                       d="M8 12l2 2 4-4"
//                       stroke="#B45309"
//                       strokeWidth="1.6"
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                     />
//                   </svg>
//                   <span className="text-xs font-semibold text-amber-900">
//                     Quality Certified
//                   </span>
//                 </div>
//               </div>
//             </motion.article>
//           ))}
//         </div>

//         {/* CTA row below cards - center aligned */}
//         <div className="mt-12 text-center">
//           <h4 className="text-xl font-bold mb-3 text-[#0b2b52]">
//             Discover our full range
//           </h4>
//           <p className="max-w-2xl mx-auto text-gray-600 mb-6">
//             From cold-pressed mustard to high-stability frying oils — find the
//             right oil for your kitchen. Click any category below to explore
//             detailed product pages and specifications.
//           </p>

//           <div className="flex flex-wrap items-center justify-center gap-3">
//             <a
//               href="/products/kachi-ghani"
//               className="px-4 py-2 rounded-full bg-[#fef3d9] text-[#0b2b52] font-semibold shadow-sm hover:scale-105 transition"
//             >
//               Kachi Ghani Mustard Oil
//             </a>
//             <a
//               href="/products/soybean"
//               className="px-4 py-2 rounded-full bg-[#fff3f0] text-[#0b2b52] font-semibold shadow-sm hover:scale-105 transition"
//             >
//               Soybean Oil
//             </a>
//             <a
//               href="/products/palm"
//               className="px-4 py-2 rounded-full bg-[#eef9ff] text-[#0b2b52] font-semibold shadow-sm hover:scale-105 transition"
//             >
//               Palm / Pam Oil
//             </a>
//             <a
//               href="/products/rice-bran"
//               className="px-4 py-2 rounded-full bg-[#f6fff4] text-[#0b2b52] font-semibold shadow-sm hover:scale-105 transition"
//             >
//               Rice Bran Oil
//             </a>
//           </div>
//         </div>
//       </div>

//       {/* Category Section immediately below */}
//       {/* <CategorySection /> */}
//     </section>
//   );
// }

// /* ================== CategorySection ================== */
// function CategorySection() {
//   const categories = [
//     { id: "mustard", title: "Mustard Oil", img: "/images/banner4.jpg" },
//     { id: "soybean", title: "Soybean Oil", img: "/images/banner3.jpg" },
//     { id: "palm", title: "Palm Oil", img: "/images/team1.jpg" },
//     { id: "rice", title: "Rice Bran Oil", img: "/images/banner4.jpg" },
//   ];

//   return (
//     <section className="py-12 bg-transparent mt-12">
//       <div className="container mx-auto max-w-7xl px-6">
//         <motion.h3
//           initial={{ y: 10, opacity: 0 }}
//           whileInView={{ y: 0, opacity: 1 }}
//           className="text-2xl md:text-3xl font-extrabold text-center mb-6 text-[#0b2b52]"
//         >
//           Categories
//         </motion.h3>

//         <p className="text-center max-w-2xl mx-auto text-gray-600 mb-8">
//           Browse our main product categories — each category contains carefully
//           curated products tested for quality and cooking performance.
//         </p>

//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
//           {categories.map((cat) => (
//             <motion.a
//               key={cat.id}
//               href={`/products/category/${cat.id}`}
//               initial={{ opacity: 0, scale: 0.98 }}
//               whileInView={{ opacity: 1, scale: 1 }}
//               transition={{ duration: 0.35 }}
//               className="group block rounded-xl overflow-hidden shadow-lg bg-white/60 backdrop-blur-sm border border-[rgba(8,52,139,0.04)] hover:shadow-2xl transform hover:-translate-y-2 transition"
//             >
//               <div className="relative w-full h-44">
//                 <Image
//                   src={cat.img}
//                   alt={cat.title}
//                   fill
//                   className="object-cover object-center group-hover:scale-105 transition-transform"
//                   unoptimized
//                 />
//               </div>

//               <div className="px-4 py-4">
//                 <h4 className="text-lg font-bold text-[#0b2b52]">
//                   {cat.title}
//                 </h4>
//                 <p className="text-sm text-gray-600 mt-1">
//                   High-quality {cat.title.toLowerCase()} for home & professional
//                   kitchens.
//                 </p>
//               </div>
//             </motion.a>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

// /* ================= VideoHero ================= */

// function VideoHero({ videos = [] }) {
//   const vidRef = useRef(null);
//   const [playing, setPlaying] = useState(true);

//   useEffect(() => {
//     const v = vidRef.current;
//     if (!v) return;
//     v.muted = true;
//     v.playsInline = true;
//     v.preload = "metadata";
//     v.play().catch(() => setPlaying(false));
//   }, [videos]);

//   function toggle() {
//     const v = vidRef.current;
//     if (!v) return;
//     if (v.paused) {
//       v.play().catch(() => setPlaying(false));
//       setPlaying(true);
//     } else {
//       v.pause();
//       setPlaying(false);
//     }
//   }

//   return (
//     <section className="relative w-full overflow-hidden bg-black border-b border-white/6">
//       <div className="relative h-[60vh] md:h-[72vh] lg:h-[82vh]">
//         <video
//           ref={vidRef}
//           src={videos[0]}
//           className="w-full h-full object-cover"
//           autoPlay
//           muted
//           loop
//           playsInline
//           preload="metadata"
//         />

//         <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/30 pointer-events-none" />

//         <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none px-6 text-center">
//           {/* <motion.h1
//             initial={{ y: 40, opacity: 0 }}
//             animate={{ y: 0, opacity: 1 }}
//             transition={{ duration: 1 }}
//             className={`${playfair.className} text-3xl md:text-5xl lg:text-6xl font-extrabold text-white max-w-4xl`}
//           >
//             Veer Bharat Mustard Oil Tradition Meets Nutrition
//           </motion.h1> */}


//           {/* <motion.h2
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ delay: 0.9, duration: 0.8 }}
//             className={`${poppins.className} text-lg md:text-2xl font-bold text-amber-300 mt-3`}
//           >
//             मज़ा आ गया
//           </motion.h2> */}
//         </div>

//         <button
//           onClick={toggle}
//           className="absolute right-6 top-6 z-30 flex items-center gap-2 rounded-full bg-white/20 backdrop-blur px-4 py-2 text-sm font-semibold border border-white/10 hover:scale-105 transition"
//         >
//           {playing ? "Pause" : "Play"}
//         </button>
//       </div>
//     </section>
//   );
// }







"use client";
import Hero2 from "@/components/CategoryCarousel";
import CustomerFeedback from "@/components/CustomerFeedback";
import VeerBharatHero from "@/components/VeerBharatHero";
import WhyUsSection from "@/components/WhyUsSection";
import { motion } from "framer-motion";
import { Playfair_Display, Poppins } from "next/font/google";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { FaWhatsapp } from "react-icons/fa";
import HealthBenefits from "../components/HealthBenefits";

/* ---------- Fonts ---------- */
const poppins = Poppins({ subsets: ["latin"], weight: ["400", "600", "800"] });
const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["700", "800"],
});

export default function Home() {
  // Add Google verification meta tag on component mount
  useEffect(() => {
    // Check if meta tag already exists
    const existingMeta = document.querySelector('meta[name="google-site-verification"]');
    
    if (!existingMeta) {
      const meta = document.createElement('meta');
      meta.name = 'google-site-verification';
      meta.content = 'r98v6O5kAtTe-6BdgRB11PQgQTopFn7x464rMPuWkIQ';
      document.head.appendChild(meta);
    }
  }, []);

  return (
    <main className={`${poppins.className} bg-[#fef9c3] text-[#0b0d11]`}>
      {/* Video Hero */}
      <VideoHero videos={["/images/hero-video.mp4"]} />

      {/* Heading */}

      <div className="py-16 md:py-20 lg:py-24 text-center bg-gradient-to-b from-white to-gray-50/50">
        <motion.h1
          initial={{ y: 40, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{
            duration: 0.9,
            ease: [0.25, 0.46, 0.45, 0.94],
            delay: 0.1,
          }}
          viewport={{ once: true, margin: "-50px" }}
          className={`
      ${playfair.className} 
      text-4xl md:text-5xl lg:text-6xl 
      font-extrabold tracking-tight
      bg-gradient-to-r from-amber-900 via-orange-800 to-green-900
      bg-clip-text text-transparent
      leading-tight md:leading-snug
      px-4 md:px-0
    `}
        >
          Welcome to Veer Bharat,
          <span className="block mt-2 md:mt-3">
            Mustard Oil Tradition Meets Nutrition
          </span>
        </motion.h1>

        <motion.div
          initial={{ scaleX: 0, opacity: 0 }}
          whileInView={{ scaleX: 1, opacity: 1 }}
          transition={{
            duration: 0.8,
            delay: 0.3,
            ease: "easeOut",
          }}
          viewport={{ once: true }}
          className="
      mt-6 md:mt-8 
      w-40 md:w-48 lg:w-56 
      mx-auto h-1.5 
      rounded-full 
      bg-gradient-to-r 
      from-amber-400 via-orange-500 to-green-600
      shadow-lg shadow-amber-200/50
    "
        />

        {/* Optional decorative elements */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-8 md:mt-12 flex justify-center space-x-2"
        >
          {[1, 2, 3].map((item) => (
            <div key={item} className="w-2 h-2 rounded-full bg-amber-300/60" />
          ))}
        </motion.div>
      </div>

      {/* Category Carousel */}
      <Hero2 />

      {/* Categories Grid */}
      <CategoriesGrid />

      {/* Moving Showcase */}
      <VideoShowcase />

      {/* ====== FEATURED IMAGE (REPLACES PREVIOUS BRANCHES) ====== */}
      <FeaturedImageSection />
      <VeerBharatHero />

      {/* ====== BRANCHES & GALLERY (REPLACES PREVIOUS FEATURED IMAGE) ====== */}

      <HealthBenefits />
      <WhyUsSection />
      <CustomerFeedback />
      {/* <Branches /> */}

      {/* WhatsApp button */}
      <a
        href="https://wa.me/6205771930"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed right-5 bottom-5 z-50 flex items-center justify-center w-14 h-14 rounded-full bg-green-500 shadow-lg text-white hover:scale-105 transition"
        aria-label="WhatsApp"
      >
        <FaWhatsapp className="w-6 h-6" />
      </a>

      <style jsx>{`
        .featured-heading {
          text-shadow: 0 6px 24px rgba(0, 0, 0, 0.5);
        }
      `}</style>
    </main>
  );
}

/* ================= CategoriesGrid ================= */

function CategoriesGrid() {
  const categories = [
    {
      id: "cat-1",
      name: "Mustard Oil",
      image: "/images/Unknown-1.jpeg",
      description:
        "Mustard oil with strong aroma & flavor. Perfect for traditional cooking and pickling.",
    },
    {
      id: "cat-2",
      name: "Soyabean Oil",
      image: "/images/Unknown-2.jpeg",
      description:
        "Light texture, rich in Vitamin E. Great for everyday cooking and heart health.",
    },
    {
      id: "cat-3",
      name: "Palm Oil",
      image: "/images/Unknown-3.jpeg",
      description:
        "Palm oil for high-heat cooking. High stability & neutral taste for versatile use.",
    },
    {
      id: "cat-4",
      name: "Rice Bran Oil",
      image: "/images/Unknown-5.jpeg",
      description:
        "Rice bran oil, ideal for frying. Heart friendly & high smoke point for healthy cooking.",
    },
  ];

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-purple-50 via-violet-50 to-purple-100 py-20 md:py-28">
      {/* Enhanced Background Pattern */}
      <div className="absolute inset-0 opacity-20">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.15'%3E%3Ccircle cx='40' cy='40' r='3'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      {/* Floating Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-20 -left-20 h-60 w-60 rounded-full bg-amber-200/30 blur-3xl"></div>
        <div className="absolute -bottom-20 -right-20 h-60 w-60 rounded-full bg-purple-200/30 blur-3xl"></div>
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
        {/* Enhanced Header Section */}
        <div className="mb-20 text-center">
          <div className="inline-flex flex-col items-center">
            <h2 className="bg-gradient-to-r from-slate-900 via-purple-900 to-slate-900 bg-clip-text text-4xl font-black tracking-tight text-transparent md:text-5xl lg:text-6xl">
              Explore Categories
            </h2>
            <div className="mt-4 h-1.5 w-32 rounded-full bg-gradient-to-r from-amber-400 to-orange-500"></div>
            <p className="mt-6 max-w-2xl text-lg text-slate-600 md:text-xl">
              Discover our premium range of edible oils, each crafted with care
              for your health and taste
            </p>
          </div>
        </div>

        {/* Enhanced Grid Layout */}
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {categories.map((category, index) => (
            <div
              key={category.id}
              className="group relative flex flex-col overflow-hidden rounded-3xl bg-white shadow-2xl transition-all duration-500 hover:scale-105 hover:shadow-3xl"
              style={{
                minHeight: "420px",
                animationDelay: `${index * 100}ms`,
              }}
            >
              {/* Image Container */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={category.image}
                  alt={category.name}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100"></div>

                {/* Premium Badge */}
                <div className="absolute top-4 right-4 rounded-full bg-amber-500/90 p-2 shadow-lg backdrop-blur-sm">
                  <span className="text-sm font-bold text-white">★</span>
                </div>

                {/* Category Index */}
                <div className="absolute top-4 left-4 flex h-8 w-8 items-center justify-center rounded-full bg-white/90 text-sm font-bold text-slate-900 shadow-sm">
                  {index + 1}
                </div>
              </div>

              {/* Content Section */}
              <div className="flex flex-1 flex-col px-6 py-7 text-center">
                <h3 className="mb-3 text-xl font-black text-slate-900 transition-colors duration-300 group-hover:text-amber-600 lg:text-2xl">
                  {category.name}
                </h3>

                <p className="mb-6 flex-1 text-base leading-relaxed text-slate-600">
                  {category.description}
                </p>

                {/* Enhanced CTA Button */}
                <a
                  href="/products"
                  className="group/button inline-flex items-center justify-center rounded-2xl bg-gradient-to-r from-amber-400 to-orange-500 px-8 py-4 text-sm font-bold text-white shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-amber-500/25"
                >
                  Exploree Category
                  <svg
                    className="ml-3 h-4 w-4 transition-transform duration-300 group-hover/button:translate-x-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={3}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </a>
              </div>

              {/* Hover Border Effect */}
              <div className="absolute inset-0 rounded-3xl border-2 border-transparent transition-all duration-300 group-hover:border-amber-200/50"></div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <a
            href="/products"
            className="inline-flex items-center rounded-2xl bg-slate-900 px-10 py-4 font-semibold text-white transition-all duration-300 hover:scale-105 hover:bg-slate-800 hover:shadow-2xl"
          >
            View All Products
            <svg
              className="ml-3 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}

function VideoShowcase() {
  const videos = [
    {
      id: "v-1",
      video: "https://www.youtube.com/embed/7CzsdYLnAD4?si=xjDjX8W30kevuCYc",
      title: "Coustomer Review | Veer Bharat Mustard Oil | Kachi Ghani Mustard Oil & Soyabean Oil jus watch it.",
    },
    {
      id: "v-2",
      video: "https://www.youtube.com/embed/_36qbMVzWLY?si=LyoH9t-M_wBzVEOQ",
      title:
        "veer Bharat Kachi Ghani Mustard Oil: The Heart of Healthy Indian Cooking. This is our manufacturing process video you must watch it",
    },
    {
      id: "v-3",
      video: "https://www.youtube.com/embed/0oh__XTrd9g?si=z_xT4BZNj7h-GBby",
      title: "Planning to build our salea team and distributor network. Prospective candidates can watch this video.",
    },
  ];

  const scrollContainerRef = useRef(null);
  const videoRef = useRef(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentVideo, setCurrentVideo] = useState(null);

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -420, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 420, behavior: "smooth" });
    }
  };

  const openVideoModal = (video) => {
    setCurrentVideo(video);
    setIsModalOpen(true);
    document.body.style.overflow = "hidden";
  };

  const closeVideoModal = () => {
    setIsModalOpen(false);
    setCurrentVideo(null);
    document.body.style.overflow = "auto";
    if (videoRef.current) {
      videoRef.current.pause();
    }
  };

  return (
    <>
      <section
        className="relative w-full overflow-hidden py-12 md:py-16"
        style={{ backgroundColor: "#fef9c3" }}
      >
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-gray-900 text-center mb-8 md:mb-12">
            The{" "}
            <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              Veer Bharat
            </span>{" "}
            Video Showcase
          </h2>

          <div className="relative px-0 md:px-12 lg:px-16">
            {/* Left Arrow - Desktop Only */}
            <button
              onClick={scrollLeft}
              className="hidden lg:flex absolute left-0 top-1/2 -translate-y-1/2 z-20 w-14 h-14 rounded-full items-center justify-center shadow-2xl transition-all transform hover:scale-110 hover:shadow-purple-400/50 bg-gradient-to-r from-purple-500 to-purple-600"
              style={{ marginLeft: "-24px" }}
            >
              <svg
                className="w-7 h-7 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={3}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>

            {/* Right Arrow - Desktop Only */}
            <button
              onClick={scrollRight}
              className="hidden lg:flex absolute right-0 top-1/2 -translate-y-1/2 z-20 w-14 h-14 rounded-full items-center justify-center shadow-2xl transition-all transform hover:scale-110 hover:shadow-purple-400/50 bg-gradient-to-r from-purple-500 to-purple-600"
              style={{ marginRight: "-24px" }}
            >
              <svg
                className="w-7 h-7 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={3}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>

            {/* Video Cards Container */}
            <div
              ref={scrollContainerRef}
              className="flex gap-4 md:gap-5 lg:gap-6 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide"
              style={{
                scrollbarWidth: "none",
                msOverflowStyle: "none",
                WebkitOverflowScrolling: "touch",
              }}
            >
              {videos.map((video) => (
                <div
                  key={video.id}
                  className="flex-shrink-0 w-[85vw] sm:w-[70vw] md:w-[45vw] lg:w-[calc(33.333%-16px)] bg-white rounded-3xl overflow-hidden shadow-2xl hover:shadow-purple-300/40 transition-all duration-500 transform hover:-translate-y-2 snap-center"
                >
                  {/* Video Player */}
                  <div className="relative bg-gradient-to-br from-purple-900 via-purple-800 to-pink-900 h-56 md:h-64 flex items-center justify-center group overflow-hidden">
                    {video.video.endsWith(".mp4") ? (
                      <video
                        src={video.video}
                        className="w-full h-full object-cover"
                        muted
                        loop
                        preload="metadata"
                        onClick={() => openVideoModal(video)}
                      />
                    ) : (
                      <iframe
                        src={video.video}
                        title={video.title}
                        className="w-full h-full object-cover"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        onClick={() => openVideoModal(video)}
                      />
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                    {/* Play Button Overlay */}
                    <button
                      onClick={() => openVideoModal(video)}
                      className="absolute inset-0 flex items-center justify-center"
                    >
                      <div className="relative">
                        <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-purple-600 rounded-full blur-xl opacity-60 animate-pulse"></div>
                        <div className="relative w-20 h-20 md:w-24 md:h-24 rounded-full flex items-center justify-center shadow-2xl transform group-hover:scale-125 transition-all duration-300 bg-gradient-to-r from-purple-500 to-purple-600 border-4 border-white/30">
                          <svg
                            className="w-10 h-10 md:w-12 md:h-12 text-white ml-1"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path d="M8 5v14l11-7z" />
                          </svg>
                        </div>
                      </div>
                    </button>

                    {/* Duration Badge */}
                    <div className="absolute top-4 right-4 px-3 py-1 bg-black/70 backdrop-blur-sm rounded-full text-white text-xs font-semibold">
                      2:30
                    </div>
                  </div>

                  {/* Video Info */}
                  <div className="p-5 md:p-6 lg:p-7">
                    <h3 className="text-gray-800 text-base md:text-lg font-bold mb-4 md:mb-5 leading-snug min-h-[3rem] md:min-h-[3.5rem] line-clamp-2">
                      {video.title}
                    </h3>

                    <button
                      onClick={() => openVideoModal(video)}
                      className="w-full md:w-auto inline-flex items-center justify-center gap-2 bg-gradient-to-r from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700 text-white font-bold px-6 md:px-8 py-3 md:py-3.5 rounded-full transition-all transform hover:scale-105 shadow-lg hover:shadow-purple-400/50"
                    >
                      <svg
                        className="w-4 h-4 md:w-5 md:h-5"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M8 5v14l11-7z" />
                      </svg>
                      Watch Now
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Mobile Scroll Indicators */}
            <div className="flex lg:hidden justify-center gap-2 mt-6">
              {videos.map((_, idx) => (
                <div key={idx} className="w-2 h-2 rounded-full bg-purple-400" />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Video Modal */}
      {isModalOpen && currentVideo && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-8 bg-black/90 backdrop-blur-md animate-fadeIn"
          onClick={closeVideoModal}
        >
          <div
            className="relative w-full max-w-5xl bg-gradient-to-br from-gray-900 to-black rounded-2xl shadow-2xl overflow-hidden animate-slideUp"
            onClick={(e) => e.stopPropagation()}
            style={{ maxHeight: "85vh" }}
          >
            <button
              onClick={closeVideoModal}
              className="absolute top-3 right-3 sm:top-4 sm:right-4 z-10 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-sm flex items-center justify-center transition-all hover:scale-110 group"
            >
              <svg
                className="w-5 h-5 sm:w-6 sm:h-6 text-white group-hover:rotate-90 transition-transform duration-300"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>

            <div className="relative aspect-video bg-black">
              {currentVideo.video.endsWith(".mp4") ? (
                <video
                  ref={videoRef}
                  src={currentVideo.video}
                  className="w-full h-full"
                  controls
                  autoPlay
                  muted={false}
                >
                  Your browser does not support the video tag.
                </video>
              ) : (
                <iframe
                  className="w-full h-full"
                  src={`${currentVideo.video}?autoplay=1&controls=1&modestbranding=1`}
                  title={currentVideo.title}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              )}
            </div>

            <div className="p-4 sm:p-6 md:p-8 bg-gradient-to-b from-gray-900 to-black">
              <h2 className="text-white text-lg sm:text-xl md:text-2xl font-bold mb-2 leading-tight">
                {currentVideo.title}
              </h2>
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }
        .animate-slideUp {
          animation: slideUp 0.3s ease-out;
        }
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(50px) scale(0.95);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </>
  );
}

/* ================= FEATURED IMAGE SECTION ================= */
function FeaturedImageSection() {
  return (
    <section className="relative w-full h-screen">
      <div className="relative w-full h-full flex items-center justify-center">
        <Image
          src="/images/bg2.jpeg"
          alt="Neighbourhood freshness"
          fill
          className="object-cover"
          sizes="100vw"
          unoptimized
          priority
          quality={90}
        />
      </div>
    </section>
  );
}

/* ================= VideoHero ================= */

function VideoHero({ videos = [] }) {
  const vidRef = useRef(null);
  const [playing, setPlaying] = useState(true);

  useEffect(() => {
    const v = vidRef.current;
    if (!v) return;
    v.muted = true;
    v.playsInline = true;
    v.preload = "metadata";
    v.play().catch(() => setPlaying(false));
  }, [videos]);

  function toggle() {
    const v = vidRef.current;
    if (!v) return;
    if (v.paused) {
      v.play().catch(() => setPlaying(false));
      setPlaying(true);
    } else {
      v.pause();
      setPlaying(false);
    }
  }

  return (
    <section className="relative w-full overflow-hidden bg-black border-b border-white/6">
      <div className="relative h-[60vh] md:h-[72vh] lg:h-[82vh]">
        <video
          ref={vidRef}
          src={videos[0]}
          className="w-full h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
        />

        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/30 pointer-events-none" />

        <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none px-6 text-center">
        </div>

        <button
          onClick={toggle}
          className="absolute right-6 top-6 z-30 flex items-center gap-2 rounded-full bg-white/20 backdrop-blur px-4 py-2 text-sm font-semibold border border-white/10 hover:scale-105 transition"
        >
          {playing ? "Pause" : "Play"}
        </button>
      </div>
    </section>
  );
}