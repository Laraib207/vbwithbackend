// "use client";
// import React, { useState, useEffect, useRef } from "react";
// import Image from "next/image";
// import Link from "next/link";
// import { motion, AnimatePresence } from "framer-motion";

// function RotatingShowcase({ items = [] }) {
//   const n = items.length || 1;
//   const [index, setIndex] = useState(0);
//   const [radius, setRadius] = useState(180);
//   const containerRef = useRef(null);
//   const rotationDeg = index * (360 / n);

//   useEffect(() => {
//     function setFromWidth() {
//       if (!containerRef.current) return;
//       const w = containerRef.current.clientWidth;
//       const r = Math.min(Math.max(w * 0.2, 100), 260);
//       setRadius(r);
//     }
//     setFromWidth();
//     window.addEventListener("resize", setFromWidth);
//     return () => window.removeEventListener("resize", setFromWidth);
//   }, []);

//   useEffect(() => {
//     const onKey = (e) => {
//       if (e.key === "ArrowRight") setIndex((i) => (i + 1) % n);
//       if (e.key === "ArrowLeft") setIndex((i) => (i - 1 + n) % n);
//     };
//     window.addEventListener("keydown", onKey);
//     return () => window.removeEventListener("keydown", onKey);
//   }, [n]);

//   if (!items.length) return null;

//   const longText = {
//     goodness: "Premium grains sourced from India's finest farms, aged to perfection using traditional techniques. Every batch goes through multi-stage quality checks - color sorting, moisture control, and broken grain removal. We preserve the natural aroma and nutritional integrity while ensuring zero impurities. Our moisture-resistant, food-grade packaging locks in freshness from harvest to your home.",
//     benefits: "Cook up fluffy Basmati biryani or wholesome daily meals - our rice delivers consistent grain length and aromatic excellence. Each grain expands beautifully without sticking, making your cooking effortless. Packed with essential carbs for sustained energy, easy to digest, and perfect with any curry or gravy. Low glycemic options available for balanced nutrition without compromising on authentic taste.",
//     rating: "Veer Bharat Rice is winning hearts in kitchens and restaurants nationwide. Customers rave about the long grains, fragrant aroma, and batch-to-batch consistency. Chefs love the predictable texture for bulk cooking, home cooks celebrate how it transforms everyday meals. Our quality-first approach at competitive prices is building serious word-of-mouth momentum."
//   };

//   return (
//     <section ref={containerRef} className="max-w-7xl mx-auto px-6 mb-16">
//       <div className="grid gap-10 lg:grid-cols-2 items-center">
//         <motion.div 
//           initial={{ opacity: 0, x: -40 }}
//           animate={{ opacity: 1, x: 0 }}
//           transition={{ duration: 0.6 }}
//           className="space-y-6"
//         >
//           <div className="inline-block">
//             <span className="px-4 py-2 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 text-white text-sm font-bold tracking-wide">
//               🌾 PREMIUM COLLECTION
//             </span>
//           </div>
          
//           <h2 className="text-5xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-gray-900 via-purple-900 to-pink-900 leading-tight">
//             {items[index].name}
//           </h2>
          
//           <p className="text-xl text-gray-700 font-medium max-w-xl leading-relaxed">
//             {items[index].short}
//           </p>

//           <div className="mt-6 p-8 bg-gradient-to-br from-white to-purple-50 rounded-3xl shadow-xl border border-purple-100 backdrop-blur-sm">
//             <div className="space-y-6">
//               <div className="group">
//                 <div className="flex items-center gap-3 mb-3">
//                   <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
//                     <span className="text-white text-lg">✨</span>
//                   </div>
//                   <h3 className="text-2xl font-bold text-purple-900">Pure Goodness</h3>
//                 </div>
//                 <p className="text-sm text-gray-700 leading-relaxed pl-13">{longText.goodness}</p>
//               </div>

//               <div className="group">
//                 <div className="flex items-center gap-3 mb-3">
//                   <div className="w-10 h-10 rounded-full bg-gradient-to-br from-pink-500 to-orange-500 flex items-center justify-center">
//                     <span className="text-white text-lg">💪</span>
//                   </div>
//                   <h3 className="text-2xl font-bold text-pink-900">Amazing Benefits</h3>
//                 </div>
//                 <p className="text-sm text-gray-700 leading-relaxed pl-13">{longText.benefits}</p>
//               </div>

//               <div className="group">
//                 <div className="flex items-center gap-3 mb-3">
//                   <div className="w-10 h-10 rounded-full bg-gradient-to-br from-orange-500 to-yellow-500 flex items-center justify-center">
//                     <span className="text-white text-lg">⭐</span>
//                   </div>
//                   <h3 className="text-2xl font-bold text-orange-900">Customer Love</h3>
//                 </div>
//                 <p className="text-sm text-gray-700 leading-relaxed pl-13">{longText.rating}</p>
//               </div>
//             </div>
//           </div>

//           <div className="mt-6 flex items-center gap-4 flex-wrap">
//             <button onClick={() => setIndex((i) => (i - 1 + n) % n)} className="w-14 h-14 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 shadow-lg hover:shadow-2xl hover:scale-110 transition-all flex items-center justify-center text-white text-2xl font-bold">
//               ‹
//             </button>
//             <button onClick={() => setIndex((i) => (i + 1) % n)} className="w-14 h-14 rounded-full bg-gradient-to-br from-pink-500 to-orange-500 shadow-lg hover:shadow-2xl hover:scale-110 transition-all flex items-center justify-center text-white text-2xl font-bold">
//               ›
//             </button>
//             <Link href="/products" className="flex-1 min-w-[200px] text-center rounded-full px-6 py-4 bg-gradient-to-r from-purple-600 via-pink-600 to-orange-600 text-white font-bold text-lg shadow-xl hover:shadow-2xl hover:scale-105 transition-all">
//               Explore All Products →
//             </Link>
//           </div>
//         </motion.div>

//         <motion.div 
//           initial={{ opacity: 0, x: 40 }}
//           animate={{ opacity: 1, x: 0 }}
//           transition={{ duration: 0.6, delay: 0.2 }}
//           className="relative w-full flex justify-center lg:justify-end"
//         >
//           <div className="relative w-[340px] h-[340px] md:w-[540px] md:h-[540px] rounded-3xl p-6 flex items-center justify-center">
//             <motion.div
//               animate={{ rotate: 360 }}
//               transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
//               className="absolute inset-0 w-full h-full pointer-events-none"
//             >
//               <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-400 via-pink-400 to-orange-400 opacity-20 blur-3xl"></div>
//             </motion.div>

//             <motion.svg viewBox="0 0 300 300" className="absolute inset-0 w-full h-full pointer-events-none" animate={{ rotate: rotationDeg * 0.3 }} transition={{ type: "spring", stiffness: 120, damping: 20 }}>
//               <defs>
//                 <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
//                   <stop offset="0%" style={{ stopColor: "#A855F7", stopOpacity: 1 }} />
//                   <stop offset="100%" style={{ stopColor: "#EC4899", stopOpacity: 1 }} />
//                 </linearGradient>
//               </defs>
//               <circle cx="150" cy="150" r="115" stroke="url(#grad1)" strokeWidth="8" fill="none" strokeDasharray="8 10" />
//             </motion.svg>

//             {items.map((it, i) => {
//               const baseAngle = (i * 360) / n;
//               const totalAngle = baseAngle + rotationDeg;
//               const rad = ((totalAngle - 90) * Math.PI) / 180;
//               const x = Math.cos(rad) * radius;
//               const y = Math.sin(rad) * radius;
//               const isActive = i === index;
//               const size = isActive ? 240 : 110;
//               const scale = isActive ? 1 : 0.75;

//               return (
//                 <motion.div
//                   key={it.id}
//                   className="absolute cursor-pointer"
//                   style={{
//                     left: `calc(50% + ${x}px)`,
//                     top: `calc(50% + ${y}px)`,
//                     transform: `translate(-50%, -50%) scale(${scale})`,
//                     transition: "left 0.5s, top 0.5s, transform 0.4s",
//                     zIndex: isActive ? 50 : 10,
//                     width: size,
//                     height: size,
//                   }}
//                   whileHover={{ scale: isActive ? 1.05 : 0.8 }}
//                   onClick={() => setIndex(i)}
//                 >
//                   <div className="relative rounded-3xl overflow-hidden bg-white" style={{ width: "100%", height: "100%", boxShadow: isActive ? "0 25px 50px rgba(168,85,247,0.3)" : "0 10px 25px rgba(0,0,0,0.1)", border: isActive ? "3px solid #EC4899" : "2px solid rgba(0,0,0,0.05)" }}>
//                     <Image src={it.image} alt={it.name} fill style={{ objectFit: "cover" }} priority={isActive} />
//                     {isActive && (
//                       <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="absolute inset-0 bg-gradient-to-t from-purple-900/40 to-transparent"></motion.div>
//                     )}
//                   </div>
//                 </motion.div>
//               );
//             })}

//             <motion.div 
//               animate={{ y: [0, -10, 0] }}
//               transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
//               className="absolute left-1/2 top-4 -translate-x-1/2 z-40"
//             >
//               <div className="w-16 h-16 rounded-full overflow-hidden border-4 border-white shadow-2xl bg-gradient-to-br from-purple-400 to-pink-400">
//                 <Image src={items[(index + 1) % n].image} alt="mini" width={64} height={64} style={{ objectFit: "cover" }} />
//               </div>
//             </motion.div>
//           </div>
//         </motion.div>
//       </div>
//     </section>
//   );
// }

// export default function BrandRicePage() {
//   const [modalVideo, setModalVideo] = useState(null);
//   const closeModal = () => setModalVideo(null);

//   useEffect(() => {
//     const onKey = (e) => {
//       if (e.key === "Escape") closeModal();
//     };
//     window.addEventListener("keydown", onKey);
//     return () => window.removeEventListener("keydown", onKey);
//   }, []);

//   const showcaseItems = [
//     { id: 1, name: "Ultra Premium Basmati", short: "Extra-long grains with insane aroma. Perfect for that next-level biryani experience.", image: "/images/rice-1.jpg" },
//     { id: 2, name: "Daily Comfort Rice", short: "Your everyday hero. Nutritious, fluffy, and always delivers perfect results.", image: "/images/rice-2.jpg" }
//   ];

//   const productVariants = [
//     { id: 1, name: "Premium Basmati Rice 5kg", price: "450", image: "/images/rice-1.jpg", description: "Aged basmati with extra long grains - perfect for celebrations & special moments", video: "/videos/rice-demo.mp4", badge: "🔥 Best Seller" },
//     { id: 2, name: "Daily Basmati Rice 10kg", price: "850", image: "/images/rice-2.jpg", description: "Value-packed quality basmati for everyday cooking without compromise", video: "/videos/rice-demo.mp4", badge: "💰 Great Value" },
//     { id: 3, name: "Sona Masoori Rice 25kg", price: "1800", image: "/images/rice-1.jpg", description: "Lightweight aromatic rice - the South Indian cuisine secret weapon", video: "/videos/rice-demo.mp4", badge: "⭐ Premium Choice" }
//   ];

//   return (
//     <main className="min-h-screen py-16 bg-gradient-to-br from-purple-50 via-pink-50 to-orange-50">
//       <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNhODU1ZjciIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDE0YzQgMCA4LTQgOC04cy00LTgtOC04LTggNC04IDggNCA4IDggOHoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-40"></div>
      
//       <div className="max-w-7xl mx-auto px-6 relative z-10">
//         <RotatingShowcase items={showcaseItems} />

//         <motion.header 
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//           className="mb-12 text-center"
//         >
//           <motion.div
//             animate={{ scale: [1, 1.05, 1] }}
//             transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
//             className="inline-block mb-4"
//           >
//             <span className="text-6xl">🌾</span>
//           </motion.div>
//           <h1 className="text-5xl md:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-pink-600 to-orange-600 mb-4">
//             Veer Bharat Rice
//           </h1>
//           <p className="text-xl md:text-2xl text-gray-700 max-w-3xl mx-auto font-medium">
//             Premium grains that transform every meal into a celebration. Aged. Aromatic. Absolutely Amazing.
//           </p>
//         </motion.header>

//         <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
//           {productVariants.map((p, idx) => (
//             <motion.article 
//               key={p.id}
//               initial={{ opacity: 0, y: 40 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.5, delay: idx * 0.1 }}
//               className="relative group bg-white rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 border-2 border-transparent hover:border-purple-400"
//             >
//               <div className="absolute top-4 right-4 z-20">
//                 <span className="px-3 py-1 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 text-white text-xs font-bold shadow-lg">
//                   {p.badge}
//                 </span>
//               </div>

//               <div className="relative h-72 w-full overflow-hidden">
//                 <div className="absolute inset-0 bg-gradient-to-t from-purple-900/20 to-transparent z-10"></div>
//                 <Image src={p.image} alt={p.name} fill className="object-cover group-hover:scale-110 transition-transform duration-500" />
//               </div>

//               <div className="p-6">
//                 <h2 className="text-2xl md:text-3xl font-black text-gray-900 mb-2">{p.name}</h2>
//                 <p className="text-gray-600 text-sm md:text-base mb-4 leading-relaxed">{p.description}</p>

//                 <div className="flex items-center gap-3 mb-4">
//                   <div className="flex-1">
//                     <span className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">₹{p.price}</span>
//                   </div>
//                   <span className="px-3 py-1 rounded-full bg-gradient-to-r from-green-400 to-emerald-400 text-white text-xs font-bold">
//                     ✓ Premium Quality
//                   </span>
//                 </div>

//                 <div className="flex items-center gap-3">
//                   <button className="flex-1 rounded-full px-5 py-3 bg-gradient-to-r from-purple-600 via-pink-600 to-orange-600 text-white font-bold shadow-lg hover:shadow-xl hover:scale-105 transition-all">
//                     Add to Cart
//                   </button>
//                   <button onClick={() => setModalVideo({ src: p.video, name: p.name })} className="w-12 h-12 rounded-full border-2 border-purple-600 text-purple-600 hover:bg-purple-600 hover:text-white transition-all flex items-center justify-center text-xl">
//                     ▶
//                   </button>
//                 </div>
//               </div>
//             </motion.article>
//           ))}
//         </div>

//         <AnimatePresence>
//           {modalVideo && (
//             <motion.div key="video-modal" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.2 }} className="fixed inset-0 z-50 flex items-center justify-center p-6 backdrop-blur-sm">
//               <div className="absolute inset-0 bg-black/80" onClick={closeModal} />
//               <motion.div initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.9, opacity: 0 }} transition={{ duration: 0.2 }} className="relative max-w-5xl w-full rounded-3xl overflow-hidden shadow-2xl bg-gradient-to-br from-purple-900 to-pink-900">
//                 <div className="absolute right-4 top-4 z-20">
//                   <button onClick={closeModal} className="rounded-full bg-white/90 backdrop-blur-sm px-4 py-2 font-bold hover:bg-white transition">✕ Close</button>
//                 </div>
//                 <video src={modalVideo.src} controls autoPlay className="w-full h-[60vh] md:h-[75vh] object-cover bg-black" />
//                 <div className="p-6 bg-gradient-to-t from-black/60 to-transparent text-white">
//                   <div className="text-2xl font-black">{modalVideo.name}</div>
//                   <div className="text-sm text-white/90 mt-1">Veer Bharat — Experience Premium Quality</div>
//                 </div>
//               </motion.div>
//             </motion.div>
//           )}
//         </AnimatePresence>
//       </div>
//     </main>
//   );
// }




"use client";
import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

function RotatingShowcase({ items = [] }) {
  const n = items.length || 1;
  const [index, setIndex] = useState(0);
  const [radius, setRadius] = useState(180);
  const containerRef = useRef(null);
  const rotationDeg = index * (360 / n);

  useEffect(() => {
    function setFromWidth() {
      if (!containerRef.current) return;
      const w = containerRef.current.clientWidth;
      const r = Math.min(Math.max(w * 0.2, 100), 260);
      setRadius(r);
    }
    setFromWidth();
    window.addEventListener("resize", setFromWidth);
    return () => window.removeEventListener("resize", setFromWidth);
  }, []);

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "ArrowRight") setIndex((i) => (i + 1) % n);
      if (e.key === "ArrowLeft") setIndex((i) => (i - 1 + n) % n);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [n]);

  if (!items.length) return null;

  const longText = {
    goodness: "Veer Bharat Rice Bran Oil is extracted from the nutrient-rich outer layer of rice grains using advanced refining technology. Packed with Oryzanol - a unique antioxidant found only in rice bran - this oil delivers exceptional health benefits. Our multi-stage filtration process ensures crystal-clear purity while preserving essential vitamins and minerals. Every batch is tested for quality and packaged in food-grade containers to maintain freshness.",
    benefits: "The secret weapon for healthy cooking! High smoke point makes it perfect for deep frying without breaking down or smoking. Rich in Vitamin E and natural antioxidants that support heart health and immunity. Light, neutral taste lets your spices and ingredients shine. Helps maintain healthy cholesterol levels naturally. Perfect for Indian tadkas, stir-fries, baking, and salad dressings - truly versatile oil.",
    rating: "Rice Bran Oil is rapidly becoming India's favorite health-conscious cooking choice. Nutritionists recommend it for balanced diets, chefs love its stability at high heat, and home cooks appreciate how it doesn't overpower flavors. Veer Bharat customers consistently praise the light texture, clean taste, and visible health improvements. Our competitive pricing makes premium nutrition accessible to every kitchen."
  };

  return (
    <section ref={containerRef} className="max-w-7xl mx-auto px-6 mb-16">
      <div className="grid gap-10 lg:grid-cols-2 items-center">
        <motion.div 
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-6"
        >
          <div className="inline-block">
            <span className="px-4 py-2 rounded-full bg-gradient-to-r from-teal-500 to-cyan-500 text-white text-sm font-bold tracking-wide">
              💚 HEART-HEALTHY CHOICE
            </span>
          </div>
          
          <h2 className="text-5xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-gray-900 via-teal-900 to-cyan-900 leading-tight">
            {items[index].name}
          </h2>
          
          <p className="text-xl text-gray-700 font-medium max-w-xl leading-relaxed">
            {items[index].short}
          </p>

          <div className="mt-6 p-8 bg-gradient-to-br from-white to-teal-50 rounded-3xl shadow-xl border border-teal-100 backdrop-blur-sm">
            <div className="space-y-6">
              <div className="group">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-teal-500 to-cyan-500 flex items-center justify-center">
                    <span className="text-white text-lg">✨</span>
                  </div>
                  <h3 className="text-2xl font-bold text-teal-900">Pure Goodness</h3>
                </div>
                <p className="text-sm text-gray-700 leading-relaxed pl-13">{longText.goodness}</p>
              </div>

              <div className="group">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-cyan-500 to-blue-500 flex items-center justify-center">
                    <span className="text-white text-lg">💪</span>
                  </div>
                  <h3 className="text-2xl font-bold text-cyan-900">Amazing Benefits</h3>
                </div>
                <p className="text-sm text-gray-700 leading-relaxed pl-13">{longText.benefits}</p>
              </div>

              <div className="group">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-indigo-500 flex items-center justify-center">
                    <span className="text-white text-lg">⭐</span>
                  </div>
                  <h3 className="text-2xl font-bold text-blue-900">Customer Love</h3>
                </div>
                <p className="text-sm text-gray-700 leading-relaxed pl-13">{longText.rating}</p>
              </div>
            </div>
          </div>

          <div className="mt-6 flex items-center gap-4 flex-wrap">
            <button onClick={() => setIndex((i) => (i - 1 + n) % n)} className="w-14 h-14 rounded-full bg-gradient-to-br from-teal-500 to-cyan-500 shadow-lg hover:shadow-2xl hover:scale-110 transition-all flex items-center justify-center text-white text-2xl font-bold">
              ‹
            </button>
            <button onClick={() => setIndex((i) => (i + 1) % n)} className="w-14 h-14 rounded-full bg-gradient-to-br from-cyan-500 to-blue-500 shadow-lg hover:shadow-2xl hover:scale-110 transition-all flex items-center justify-center text-white text-2xl font-bold">
              ›
            </button>
            <Link href="/products" className="flex-1 min-w-[200px] text-center rounded-full px-6 py-4 bg-gradient-to-r from-teal-600 via-cyan-600 to-blue-600 text-white font-bold text-lg shadow-xl hover:shadow-2xl hover:scale-105 transition-all">
              Explore All Products →
            </Link>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative w-full flex justify-center lg:justify-end"
        >
          <div className="relative w-[340px] h-[340px] md:w-[540px] md:h-[540px] rounded-3xl p-6 flex items-center justify-center">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0 w-full h-full pointer-events-none"
            >
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-teal-400 via-cyan-400 to-blue-400 opacity-20 blur-3xl"></div>
            </motion.div>

            <motion.svg viewBox="0 0 300 300" className="absolute inset-0 w-full h-full pointer-events-none" animate={{ rotate: rotationDeg * 0.3 }} transition={{ type: "spring", stiffness: 120, damping: 20 }}>
              <defs>
                <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" style={{ stopColor: "#14B8A6", stopOpacity: 1 }} />
                  <stop offset="100%" style={{ stopColor: "#06B6D4", stopOpacity: 1 }} />
                </linearGradient>
              </defs>
              <circle cx="150" cy="150" r="115" stroke="url(#grad1)" strokeWidth="8" fill="none" strokeDasharray="8 10" />
            </motion.svg>

            {items.map((it, i) => {
              const baseAngle = (i * 360) / n;
              const totalAngle = baseAngle + rotationDeg;
              const rad = ((totalAngle - 90) * Math.PI) / 180;
              const x = Math.cos(rad) * radius;
              const y = Math.sin(rad) * radius;
              const isActive = i === index;
              const size = isActive ? 240 : 110;
              const scale = isActive ? 1 : 0.75;

              return (
                <motion.div
                  key={it.id}
                  className="absolute cursor-pointer"
                  style={{
                    left: `calc(50% + ${x}px)`,
                    top: `calc(50% + ${y}px)`,
                    transform: `translate(-50%, -50%) scale(${scale})`,
                    transition: "left 0.5s, top 0.5s, transform 0.4s",
                    zIndex: isActive ? 50 : 10,
                    width: size,
                    height: size,
                  }}
                  whileHover={{ scale: isActive ? 1.05 : 0.8 }}
                  onClick={() => setIndex(i)}
                >
                  <div className="relative rounded-3xl overflow-hidden bg-white" style={{ width: "100%", height: "100%", boxShadow: isActive ? "0 25px 50px rgba(20,184,166,0.3)" : "0 10px 25px rgba(0,0,0,0.1)", border: isActive ? "3px solid #06B6D4" : "2px solid rgba(0,0,0,0.05)" }}>
                    <Image src={it.image} alt={it.name} fill style={{ objectFit: "cover" }} priority={isActive} />
                    {isActive && (
                      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="absolute inset-0 bg-gradient-to-t from-teal-900/40 to-transparent"></motion.div>
                    )}
                  </div>
                </motion.div>
              );          
            })}

            <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="absolute left-1/2 top-4 -translate-x-1/2 z-40"
            >
              <div className="w-16 h-16 rounded-full overflow-hidden border-4 border-white shadow-2xl bg-gradient-to-br from-teal-400 to-cyan-400">
                <Image src={items[(index + 1) % n].image} alt="mini" width={64} height={64} style={{ objectFit: "cover" }} />
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default function RiceBranOilPage() {
  const [modalVideo, setModalVideo] = useState(null);
  const closeModal = () => setModalVideo(null);

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") closeModal();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const showcaseItems = [
    { id: 1, name: "Premium Rice Bran Oil", short: "Heart-healthy oil with unique Oryzanol. Your kitchen's new wellness champion.", image: "/images/rice-bran-1.jpg" },
    { id: 2, name: "Pure Rice Bran Extract", short: "Light, neutral taste meets high-heat stability. Perfect for every cooking style.", image: "/images/rice-bran-2.jpg" }
  ];

  const productVariants = [
    { id: 1, name: "Rice Bran Oil 15L Tin", price: "2,400", image: "/images/rice-bran-15l.jpg", description: "Bulk pack for commercial kitchens - high smoke point, rich in antioxidants", video: "/videos/rice-bran-demo.mp4", badge: "🔥 Best for Frying" },
    { id: 2, name: "Rice Bran Oil 5L Jar", price: "800", image: "/images/rice-bran-5l.jpg", description: "Family pack with easy-pour design - perfect for daily healthy cooking", video: "/videos/rice-bran-demo.mp4", badge: "💚 Heart Healthy" },
    { id: 3, name: "Rice Bran Oil 1L Bottle", price: "165", image: "/images/rice-bran-1l.jpg", description: "Most popular size - ideal balance of health, taste, and versatility", video: "/videos/rice-bran-demo.mp4", badge: "⭐ Top Choice" }
  ];

  return (
    <main className="min-h-screen py-16 bg-gradient-to-br from-teal-50 via-cyan-50 to-blue-50">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMxNGI4YTYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDE0YzQgMCA4LTQgOC04cy00LTgtOC04LTggNC04IDggNCA4IDggOHoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-40"></div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <RotatingShowcase items={showcaseItems} />

        <motion.header 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <motion.div
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="inline-block mb-4"
          >
            <span className="text-6xl">💚</span>
          </motion.div>
          <h1 className="text-5xl md:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-teal-600 via-cyan-600 to-blue-600 mb-4">
            Veer Bharat Rice Bran Oil
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 max-w-3xl mx-auto font-medium">
            The heart-healthy choice with high smoke point. Rich in Oryzanol. Perfect for every cooking style.
          </p>
        </motion.header>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {productVariants.map((p, idx) => (
            <motion.article 
              key={p.id}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="relative group bg-white rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 border-2 border-transparent hover:border-teal-400"
            >
              <div className="absolute top-4 right-4 z-20">
                <span className="px-3 py-1 rounded-full bg-gradient-to-r from-teal-500 to-cyan-500 text-white text-xs font-bold shadow-lg">
                  {p.badge}
                </span>
              </div>

              <div className="relative h-72 w-full overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-teal-900/20 to-transparent z-10"></div>
                <Image src={p.image} alt={p.name} fill className="object-cover group-hover:scale-110 transition-transform duration-500" />
              </div>

              <div className="p-6">
                <h2 className="text-2xl md:text-3xl font-black text-gray-900 mb-2">{p.name}</h2>
                <p className="text-gray-600 text-sm md:text-base mb-4 leading-relaxed">{p.description}</p>

                <div className="flex items-center gap-3 mb-4">
                  <div className="flex-1">
                    <span className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-cyan-600">₹{p.price}</span>
                  </div>
                  <span className="px-3 py-1 rounded-full bg-gradient-to-r from-green-400 to-emerald-400 text-white text-xs font-bold">
                    ✓ Oryzanol Rich
                  </span>
                </div>

                <div className="flex items-center gap-3">
                  <button className="flex-1 rounded-full px-5 py-3 bg-gradient-to-r from-teal-600 via-cyan-600 to-blue-600 text-white font-bold shadow-lg hover:shadow-xl hover:scale-105 transition-all">
                    Add to Cart
                  </button>
                  <button onClick={() => setModalVideo({ src: p.video, name: p.name })} className="w-12 h-12 rounded-full border-2 border-teal-600 text-teal-600 hover:bg-teal-600 hover:text-white transition-all flex items-center justify-center text-xl">
                    ▶
                  </button>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        <AnimatePresence>
          {modalVideo && (
            <motion.div key="video-modal" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.2 }} className="fixed inset-0 z-50 flex items-center justify-center p-6 backdrop-blur-sm">
              <div className="absolute inset-0 bg-black/80" onClick={closeModal} />
              <motion.div initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.9, opacity: 0 }} transition={{ duration: 0.2 }} className="relative max-w-5xl w-full rounded-3xl overflow-hidden shadow-2xl bg-gradient-to-br from-teal-900 to-cyan-900">
                <div className="absolute right-4 top-4 z-20">
                  <button onClick={closeModal} className="rounded-full bg-white/90 backdrop-blur-sm px-4 py-2 font-bold hover:bg-white transition">✕ Close</button>
                </div>
                <video src={modalVideo.src} controls autoPlay className="w-full h-[60vh] md:h-[75vh] object-cover bg-black" />
                <div className="p-6 bg-gradient-to-t from-black/60 to-transparent text-white">
                  <div className="text-2xl font-black">{modalVideo.name}</div>
                  <div className="text-sm text-white/90 mt-1">Veer Bharat — Heart-Healthy Rice Bran Oil</div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </main>
  );
}
