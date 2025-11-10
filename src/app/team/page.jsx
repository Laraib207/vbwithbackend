// export default function Team() {
//   const members = [
//     { name: "Nitish Kumar", role: "Managing Director", image: "/team1.jpg" },
//     { name: "HR Manager", role: "Human Resources", image: "/team2.jpg" },
//     { name: "Dedicated Staff", role: "Our Strong Workforce", image: "/team3.jpg" },
//   ];

//   return (
//     <section className="max-w-6xl mx-auto py-16 px-6">
//       <h2 className="text-4xl font-bold text-red-600 text-center mb-12">Meet Our Team</h2>
//       <div className="grid md:grid-cols-3 gap-10">
//         {members.map((m, i) => (
//           <div key={i} className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition p-6 text-center">
//             <img src={m.image} alt={m.name} className="w-32 h-32 rounded-full mx-auto mb-4 object-cover border-4 border-red-500" />
//             <h3 className="text-xl font-bold">{m.name}</h3>
//             <p className="text-gray-600">{m.role}</p>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// }



// "use client";
// import React from "react";

// export default function Team() {
//   const members = [
//     {
//       name: "Nitish Kumar",
//       role: "Managing Director",
//       image: "/team1.jpg",
//       description: "Visionary leader driving company growth and innovation",
//       social: {
//         linkedin: "https://linkedin.com",
//         twitter: "https://twitter.com",
//         email: "mailto:nitish@veerbharat.com"
//       },
//       position: "top",
//       gradient: "from-purple-600 to-blue-600"
//     },
//     {
//       name: "Priya Sharma",
//       role: "HR Head",
//       image: "/team2.jpg",
//       description: "Building strong teams and fostering workplace culture",
//       social: {
//         linkedin: "https://linkedin.com",
//         twitter: "https://twitter.com",
//         email: "mailto:priya@veerbharat.com"
//       },
//       position: "center",
//       gradient: "from-pink-600 to-rose-600"
//     },
//     {
//       name: "Rahul Verma",
//       role: "Digital Marketing & SEO Expert",
//       image: "/team3.jpg",
//       description: "Driving digital presence and search engine optimization",
//       social: {
//         linkedin: "https://linkedin.com",
//         twitter: "https://twitter.com",
//         email: "mailto:rahul@veerbharat.com"
//       },
//       position: "bottom",
//       gradient: "from-orange-600 to-red-600"
//     },
//     {
//       name: "Amit Singh",
//       role: "Website Developer",
//       image: "/team4.jpg",
//       description: "Crafting exceptional digital experiences with cutting-edge tech",
//       social: {
//         linkedin: "https://linkedin.com",
//         github: "https://github.com",
//         email: "mailto:amit@veerbharat.com"
//       },
//       position: "top",
//       gradient: "from-green-600 to-teal-600"
//     },
//     {
//       name: "Sneha Patel",
//       role: "Sales Executive",
//       image: "/team5.jpg",
//       description: "Connecting customers with quality products and services",
//       social: {
//         linkedin: "https://linkedin.com",
//         twitter: "https://twitter.com",
//         email: "mailto:sneha@veerbharat.com"
//       },
//       position: "center",
//       gradient: "from-yellow-600 to-amber-600"
//     },
//     {
//       name: "Vikram Malhotra",
//       role: "Playboy of Our Office 😎",
//       image: "/team6.jpg",
//       description: "Bringing charm, energy and good vibes to the workplace",
//       social: {
//         instagram: "https://instagram.com",
//         twitter: "https://twitter.com",
//         email: "mailto:vikram@veerbharat.com"
//       },
//       position: "bottom",
//       gradient: "from-indigo-600 to-purple-600"
//     },
//   ];

//   return (
//     <section className="py-16 px-4 sm:py-20 sm:px-6 lg:py-24 bg-gradient-to-br from-gray-50 via-white to-gray-100 relative overflow-hidden">
//       {/* Background Decorative Elements */}
//       <div className="absolute top-0 left-0 w-96 h-96 bg-purple-200/30 rounded-full blur-3xl -z-10"></div>
//       <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-200/30 rounded-full blur-3xl -z-10"></div>

//       <div className="max-w-7xl mx-auto">
//         {/* Section Header */}
//         <div className="text-center mb-16">
//           <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-gray-900 mb-4">
//             Meet Our <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">Dream Team</span>
//           </h2>
//           <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">
//             The passionate people behind Veer Bharat's success
//           </p>
//           <div className="mt-6 w-32 h-1.5 bg-gradient-to-r from-purple-600 via-pink-600 to-red-600 mx-auto rounded-full"></div>
//         </div>

//         {/* Team Grid */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mb-8">
//           {members.map((member, index) => (
//             <div
//               key={index}
//               className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden transform hover:-translate-y-2"
//               style={{
//                 animation: `fadeInUp 0.6s ease-out ${index * 0.1}s both`
//               }}
//             >
//               {/* Gradient Background */}
//               <div className={`absolute inset-0 bg-gradient-to-br ${member.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>

//               {/* Card Content */}
//               <div className="relative p-6">
//                 {/* Image Container with Position-based Styling */}
//                 <div className={`relative mb-6 ${
//                   member.position === 'top' ? 'flex justify-start' :
//                   member.position === 'center' ? 'flex justify-center' :
//                   'flex justify-end'
//                 }`}>
//                   <div className="relative">
//                     {/* Decorative Ring */}
//                     <div className={`absolute -inset-2 bg-gradient-to-br ${member.gradient} rounded-full opacity-20 group-hover:opacity-40 transition-opacity blur-sm`}></div>
                    
//                     {/* Image */}
//                     <div className="relative w-32 h-32 rounded-full overflow-hidden border-4 border-white shadow-xl group-hover:scale-110 transition-transform duration-500">
//                       <img
//                         src={member.image}
//                         alt={member.name}
//                         className="w-full h-full object-cover"
//                       />
//                     </div>

//                     {/* Status Badge */}
//                     <div className={`absolute -bottom-2 -right-2 w-8 h-8 bg-gradient-to-br ${member.gradient} rounded-full border-4 border-white shadow-lg flex items-center justify-center`}>
//                       <span className="text-white text-xs font-bold">✓</span>
//                     </div>
//                   </div>
//                 </div>

//                 {/* Text Content */}
//                 <div className={`text-${member.position === 'top' ? 'left' : member.position === 'center' ? 'center' : 'right'}`}>
//                   <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-purple-600 group-hover:to-pink-600 group-hover:bg-clip-text transition-all duration-300">
//                     {member.name}
//                   </h3>
//                   <p className={`text-sm font-semibold bg-gradient-to-r ${member.gradient} bg-clip-text text-transparent mb-3`}>
//                     {member.role}
//                   </p>
//                   <p className="text-sm text-gray-600 leading-relaxed mb-4">
//                     {member.description}
//                   </p>
//                 </div>

//                 {/* Social Links */}
//                 <div className="flex gap-3 justify-center pt-4 border-t border-gray-100">
//                   {member.social.linkedin && (
//                     <a
//                       href={member.social.linkedin}
//                       target="_blank"
//                       rel="noopener noreferrer"
//                       className={`w-10 h-10 rounded-full bg-gradient-to-br ${member.gradient} flex items-center justify-center text-white hover:scale-110 transition-transform shadow-md`}
//                     >
//                       <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
//                         <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
//                       </svg>
//                     </a>
//                   )}
//                   {member.social.twitter && (
//                     <a
//                       href={member.social.twitter}
//                       target="_blank"
//                       rel="noopener noreferrer"
//                       className={`w-10 h-10 rounded-full bg-gradient-to-br ${member.gradient} flex items-center justify-center text-white hover:scale-110 transition-transform shadow-md`}
//                     >
//                       <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
//                         <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"/>
//                       </svg>
//                     </a>
//                   )}
//                   {member.social.github && (
//                     <a
//                       href={member.social.github}
//                       target="_blank"
//                       rel="noopener noreferrer"
//                       className={`w-10 h-10 rounded-full bg-gradient-to-br ${member.gradient} flex items-center justify-center text-white hover:scale-110 transition-transform shadow-md`}
//                     >
//                       <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
//                         <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
//                       </svg>
//                     </a>
//                   )}
//                   {member.social.instagram && (
//                     <a
//                       href={member.social.instagram}
//                       target="_blank"
//                       rel="noopener noreferrer"
//                       className={`w-10 h-10 rounded-full bg-gradient-to-br ${member.gradient} flex items-center justify-center text-white hover:scale-110 transition-transform shadow-md`}
//                     >
//                       <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
//                         <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
//                       </svg>
//                     </a>
//                   )}
//                   {member.social.email && (
//                     <a
//                       href={member.social.email}
//                       className={`w-10 h-10 rounded-full bg-gradient-to-br ${member.gradient} flex items-center justify-center text-white hover:scale-110 transition-transform shadow-md`}
//                     >
//                       <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
//                       </svg>
//                     </a>
//                   )}
//                 </div>
//               </div>

//               {/* Hover Effect Border */}
//               <div className={`absolute inset-0 border-2 border-transparent group-hover:border-gradient-to-br group-hover:${member.gradient} rounded-2xl pointer-events-none`}></div>
//             </div>
//           ))}

//           {/* Who's Next Card */}
//           <div className="group relative bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden transform hover:-translate-y-2 border-4 border-dashed border-gray-300">
//             <div className="relative p-6 h-full flex flex-col items-center justify-center min-h-[400px]">
//               {/* Question Mark Circle */}
//               <div className="relative mb-6">
//                 <div className="absolute -inset-2 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full opacity-20 group-hover:opacity-40 transition-opacity blur-sm animate-pulse"></div>
//                 <div className="relative w-32 h-32 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform duration-500">
//                   <span className="text-6xl text-white font-bold">?</span>
//                 </div>
//               </div>

//               {/* Text */}
//               <h3 className="text-3xl sm:text-4xl font-black text-center mb-4 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
//                 Who's Next?
//               </h3>
//               <p className="text-lg font-semibold text-gray-600 mb-2 text-center">
//                 🌟 Lucky Star 🌟
//               </p>
//               <p className="text-sm text-gray-500 text-center max-w-xs">
//                 Could this be YOU? Join our amazing team and be part of something extraordinary!
//               </p>

//               {/* Decorative Elements */}
//               <div className="absolute top-4 right-4 w-12 h-12 bg-yellow-400 rounded-full opacity-20 animate-bounce"></div>
//               <div className="absolute bottom-4 left-4 w-8 h-8 bg-pink-400 rounded-full opacity-20 animate-ping"></div>
//               <div className="absolute top-1/2 left-4 w-6 h-6 bg-purple-400 rounded-full opacity-20 animate-pulse"></div>

//               {/* CTA Button */}
//               <button className="mt-6 px-8 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
//                 Apply Now
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* CSS Animations */}
//       <style>{`
//         @keyframes fadeInUp {
//           from {
//             opacity: 0;
//             transform: translateY(30px);
//           }
//           to {
//             opacity: 1;
//             transform: translateY(0);
//           }
//         }
//       `}</style>
//     </section>
//   );
// }


"use client";
import React from "react";

export default function Team() {
  const members = [
    {
      name: "Charu ",
      role: "HR Head & Manager",
      image: "/images/sunflower-blog.jpg",
      description: "Experienced managing director leading company growth and innovation with a passion for excellence and teamwork",
      achievements: ["Technical Excellence", "15+ Years Experience, Industry Leader,Visionary Leadership"],
      social: {
        linkedin: "https://linkedin.com",
        email: "mailto:chandrashekar@company.com"
      },
      position: "left",
      gradient: "from-indigo-600 via-purple-600 to-pink-600"
    },
    {
      name: "Md Laraib",
      role: "Full Stack Developer",
      image: "/images/team2.jpg",
      description: "Skilled web developer crafting seamless digital experiences with expertise in modern frameworks and responsive design techniques. i develop high-quality websites that engage users and drive results.",
      achievements: ["Full-stack", "E-commarce", "1+ Years Experience"],
      social: {
        linkedin: "https://",
        // twitter: "https://twitter.com",
        email: "laraibsiddiqui10ki@gmail.com",
        Protofilo :"https://lightyellow-falcon-969571.hostingersite.com"
      },
      position: "center",
      gradient: "from-blue-600 via-cyan-600 to-teal-600"
    },
    {
      name: "Tahir",
      role: "Digetal Marketing & SEO Expert",
      image: "/images/TahirBhai.jpeg",
      description: " Dynamic marketing leader driving brand growth and online presence with innovative strategies and data-driven insights ,SEO expertise to boost visibility and engagement. Deep Knowledge of digital trends and consumer behavior.",
      achievements: ["Digital Strategy", "SEO Mastery", "5+ Years Experience"],
      social: {
        linkedin: "https://linkedin.com",
        twitter: "https://twitter.com",
        email: "mailto:kailash@company.com"
      },
      position: "right",
      gradient: "from-orange-600 via-red-600 to-pink-600"
    },
    // {
    //   name: "Tanya ",
    //   role: "Sales Executive & Client Relations",
    //   image: "/team4.jpg",
    //   description: "Dynamic sales executive driving revenue growth and client satisfaction through strategic relationship management and innovative sales techniques. Proven track record of exceeding targets and delivering exceptional results.",
    //   achievements: ["Sales Growth", "Client Retention", "1+ Years Experience"],
    //   social: {
    //     linkedin: "https://linkedin.com",
    //     github: "https://github.com",
    //     email: "mailto:abhisekh@company.com"
    //   },
    //   position: "left",
    //   gradient: "from-emerald-600 via-green-600 to-teal-600"
    // },


    // {
    //   name: "Raj Kumar panday",
    //   role: "sales Executive",
    //   image: "/team5.jpg",
    //   description: "Sales executive driving revenue growth and client satisfaction through strategic relationship management and innovative sales techniques",
    //   achievements: ["Sales Growth", "Client Retention", "1+ Years Experience"],
    //   social: {
    //     linkedin: "https://linkedin.com",
    //     twitter: "https://twitter.com",
    //     email: "mailto:priya@company.com"
    //   },
    //   position: "center",
    //   gradient: "from-rose-600 via-pink-600 to-fuchsia-600"
    // },


    // {
    //   name: "Anjul Kumar",
    //   role: "Graphic Designer",
    //   image: "/team6.jpg",
    //   description: "Creative graphic designer crafting visually stunning designs that elevate brand identity and engage audiences across digital and print media",
    //   achievements: ["Visual Storytelling", "Branding Expert", "Creative Direction"],
    //   social: {
    //     linkedin: "https://linkedin.com",
    //     github: "https://github.com",
    //     email: "mailto:rajesh@company.com"
    //   },
    //   position: "right",
    //   gradient: "from-violet-600 via-purple-600 to-indigo-600"
    // },
    // {
    //   name: "Sneha Patel",
    //   role: "SEO & Digital Marketing Expert",
    //   image: "/team7.jpg",
    //   description: "Driving online visibility and traffic growth with strategic SEO and comprehensive digital marketing campaigns",
    //   achievements: ["SEO Mastery", "Content Strategy", "Analytics Expert"],
    //   social: {
    //     linkedin: "https://linkedin.com",
    //     twitter: "https://twitter.com",
    //     email: "mailto:sneha@company.com"
    //   },
    //   position: "left",
    //   gradient: "from-amber-600 via-yellow-600 to-orange-600"
    // },
    // {
    //   name: "Vikram Singh",
    //   role: "Creative Designer & Branding Expert",
    //   image: "/team8.jpg",
    //   description: "Creating stunning visual identities and memorable brand experiences that captivate audiences",
    //   achievements: ["Visual Design", "Brand Identity", "Creative Direction"],
    //   social: {
    //     instagram: "https://instagram.com",
    //     linkedin: "https://linkedin.com",
    //     email: "mailto:vikram@company.com"
    //   },
    //   position: "center",
    //   gradient: "from-cyan-600 via-blue-600 to-indigo-600"
    // },
  ];

  return (
    <section className="relative py-24 px-4 sm:py-32 sm:px-6 lg:py-40 bg-gradient-to-br from-[#DFC6F6] via-[#fef9c3] to-[#DFC6F6] overflow-hidden">
      {/* Classical Elegant Background */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="absolute top-0 left-0 w-full h-full" style={{
          backgroundImage: `radial-gradient(circle at 20% 50%, rgba(99, 102, 241, 0.15) 0%, transparent 50%),
                           radial-gradient(circle at 80% 80%, rgba(168, 85, 247, 0.15) 0%, transparent 50%),
                           radial-gradient(circle at 40% 20%, rgba(236, 72, 153, 0.15) 0%, transparent 50%)`
        }}></div>
      </div>

      {/* Decorative Corner Elements */}
      <div className="absolute top-0 left-0 w-64 h-64 border-l-2 border-t-2 border-purple-200 opacity-30"></div>
      <div className="absolute bottom-0 right-0 w-64 h-64 border-r-2 border-b-2 border-pink-200 opacity-30"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Sophisticated Header Section */}
        <div className="text-center mb-24">
          {/* Ornamental Top Line */}
          <div className="flex items-center justify-center mb-8 gap-4">
            <div className="w-24 h-[2px] bg-gradient-to-r from-transparent via-purple-400 to-purple-600"></div>
            <div className="w-3 h-3 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 animate-pulse"></div>
            <div className="w-24 h-[2px] bg-gradient-to-l from-transparent via-pink-400 to-pink-600"></div>
          </div>

          {/* Badge */}
          <div className="inline-block mb-8">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 blur-xl opacity-50 animate-pulse"></div>
              <span className="relative px-8 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white text-sm font-bold uppercase tracking-[0.2em] rounded-full shadow-2xl inline-block border-2 border-white/20">
                Our Elite Team
              </span>
            </div>
          </div>

          {/* Main Heading */}
          <h2 className="text-6xl sm:text-7xl lg:text-8xl font-black text-gray-900 mb-8 leading-[1.1] tracking-tight">
            Meet The{" "}
            <span className="relative inline-block">
              <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-rose-600 bg-clip-text text-transparent">
                Visionaries
              </span>
              <svg className="absolute -bottom-4 left-0 w-full" height="12" viewBox="0 0 200 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M2 10C60 4 140 4 198 10" stroke="url(#gradient)" strokeWidth="3" strokeLinecap="round"/>
                <defs>
                  <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#9333ea"/>
                    <stop offset="50%" stopColor="#ec4899"/>
                    <stop offset="100%" stopColor="#f43f5e"/>
                  </linearGradient>
                </defs>
              </svg>
            </span>
          </h2>

          {/* Subtitle */}
          <p className="text-2xl sm:text-3xl text-gray-600 max-w-4xl mx-auto leading-relaxed font-light mb-8">
            The brilliant minds and passionate experts driving <span className="font-semibold text-gray-800">innovation</span> and <span className="font-semibold text-gray-800">excellence</span>
          </p>

          {/* Ornamental Bottom Line */}
          <div className="flex items-center justify-center gap-3">
            <div className="w-32 h-[3px] bg-gradient-to-r from-purple-600 to-pink-600 rounded-full"></div>
            <div className="w-20 h-[3px] bg-gradient-to-r from-pink-600 to-rose-600 rounded-full"></div>
            <div className="w-12 h-[3px] bg-gradient-to-r from-rose-600 to-red-600 rounded-full"></div>
          </div>
        </div>

        {/* Premium Team Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 lg:gap-10">
          {members.map((member, index) => (
            <div
              key={index}
              className="group relative"
              style={{
                animation: `floatIn 1s ease-out ${index * 0.1}s both`
              }}
            >
              {/* Card Container */}
              <div className="relative bg-white rounded-[2rem] shadow-xl hover:shadow-2xl transition-all duration-700 overflow-hidden transform hover:-translate-y-4 border border-gray-100">
                
                {/* Gradient Glow on Hover */}
                <div className={`absolute -inset-[1px] bg-gradient-to-br ${member.gradient} opacity-0 group-hover:opacity-100 transition-all duration-700 blur-2xl -z-10`}></div>

                {/* Card Inner Content */}
                <div className="relative bg-white rounded-[2rem] p-8">
                  
                  {/* Large Image Section */}
                  <div className={`mb-8 flex ${
                    member.position === 'left' ? 'justify-start' :
                    member.position === 'center' ? 'justify-center' :
                    'justify-end'
                  }`}>
                    <div className="relative">
                      {/* Elegant Rotating Border */}
                      <div className={`absolute -inset-6 bg-gradient-to-br ${member.gradient} rounded-full opacity-20 group-hover:opacity-40 transition-all duration-1000 blur-xl group-hover:rotate-180 transform`}></div>
                      
                      {/* Main Image - EXTRA LARGE */}
                      <div className="relative">
                        <div className="w-52 h-52 sm:w-56 sm:h-56 rounded-full overflow-hidden border-[6px] border-white shadow-2xl group-hover:scale-110 group-hover:rotate-3 transition-all duration-700 relative">
                          <img
                            src={member.image}
                            alt={member.name}
                            className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                          />
                          {/* Premium Overlay */}
                          <div className={`absolute inset-0 bg-gradient-to-br ${member.gradient} opacity-0 group-hover:opacity-25 transition-opacity duration-700`}></div>
                          
                          {/* Sparkle Effect */}
                          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                            <div className="absolute top-4 right-4 w-2 h-2 bg-white rounded-full animate-ping"></div>
                            <div className="absolute bottom-6 left-6 w-1.5 h-1.5 bg-white rounded-full animate-ping" style={{animationDelay: '0.3s'}}></div>
                          </div>
                        </div>

                        {/* Elegant Verification Badge */}
                        <div className={`absolute -bottom-4 -right-4 w-16 h-16 bg-gradient-to-br ${member.gradient} rounded-full border-[6px] border-white shadow-2xl flex items-center justify-center transform group-hover:scale-110 group-hover:rotate-12 transition-all duration-500`}>
                          <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Text Content with Better Typography */}
                  <div className={`text-${member.position === 'left' ? 'left' : member.position === 'center' ? 'center' : 'right'}`}>
                    {/* Name - Larger & Bold */}
                    <h3 className="text-3xl sm:text-4xl font-black text-gray-900 mb-3 leading-tight group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-purple-600 group-hover:to-pink-600 group-hover:bg-clip-text transition-all duration-500">
                      {member.name}
                    </h3>
                    
                    {/* Role Badge - More Prominent */}
                    <div className="inline-block mb-5">
                      <div className={`px-5 py-2.5 rounded-2xl bg-gradient-to-r ${member.gradient} shadow-xl transform group-hover:scale-105 transition-all duration-500`}>
                        <p className="text-sm sm:text-base font-bold text-white uppercase tracking-widest">
                          {member.role}
                        </p>
                      </div>
                    </div>
                    
                    {/* Description - Better Readability */}
                    <p className="text-base sm:text-lg text-gray-600 leading-relaxed mb-6 font-light">
                      {member.description}
                    </p>

                    {/* Achievements - Refined Style */}
                    <div className="mb-7 space-y-3">
                      {member.achievements.map((achievement, idx) => (
                        <div key={idx} className="flex items-center gap-3 text-sm sm:text-base text-gray-700">
                          <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${member.gradient} animate-pulse`}></div>
                          <span className="font-semibold">{achievement}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Social Links - Elegant Design */}
                  <div className="flex gap-4 justify-center pt-7 border-t-2 border-gray-100 mt-7">
                    {member.social.linkedin && (
                      <a
                        href={member.social.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${member.gradient} flex items-center justify-center text-white hover:scale-110 hover:-rotate-6 transition-all duration-500 shadow-lg hover:shadow-2xl`}
                      >
                        <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                        </svg>
                      </a>
                    )}
                    {member.social.twitter && (
                      <a
                        href={member.social.twitter}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${member.gradient} flex items-center justify-center text-white hover:scale-110 hover:-rotate-6 transition-all duration-500 shadow-lg hover:shadow-2xl`}
                      >
                        <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"/>
                        </svg>
                      </a>
                    )}
                    {member.social.github && (
                      <a
                        href={member.social.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${member.gradient} flex items-center justify-center text-white hover:scale-110 hover:-rotate-6 transition-all duration-500 shadow-lg hover:shadow-2xl`}
                      >
                        <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                        </svg>
                      </a>
                    )}
                    {member.social.instagram && (
                      <a
                        href={member.social.instagram}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${member.gradient} flex items-center justify-center text-white hover:scale-110 hover:-rotate-6 transition-all duration-500 shadow-lg hover:shadow-2xl`}
                      >
                        <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                        </svg>
                      </a>
                    )}
                    {member.social.email && (
                      <a
                        href={member.social.email}
                        className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${member.gradient} flex items-center justify-center text-white hover:scale-110 hover:-rotate-6 transition-all duration-500 shadow-lg hover:shadow-2xl`}
                      >
                        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                        </svg>
                      </a>
                    )}
                  </div>
                </div>

                {/* Luxurious Shine Effect */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-1000 pointer-events-none overflow-hidden rounded-[2rem]">
                  <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-white/40 via-white/10 to-transparent transform -skew-x-12 translate-x-[-100%] group-hover:translate-x-[200%] transition-transform duration-1500"></div>
                </div>
              </div>
            </div>
          ))}

          {/* Elegant "Join Us" Card */}
          <div className="group relative" style={{animation: `floatIn 1s ease-out ${members.length * 0.1}s both`}}>
            <div className="relative bg-gradient-to-br from-purple-50 via-pink-50 to-rose-50 rounded-[2rem] shadow-xl hover:shadow-2xl transition-all duration-700 overflow-hidden transform hover:-translate-y-4 border-4 border-dashed border-purple-300 h-full min-h-[600px]">
              <div className="relative p-8 h-full flex flex-col items-center justify-center">
                
                {/* Decorative Floating Elements */}
                <div className="absolute top-8 right-8 w-24 h-24 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full opacity-20 animate-float"></div>
                <div className="absolute bottom-12 left-12 w-20 h-20 bg-gradient-to-br from-pink-400 to-rose-400 rounded-full opacity-20 animate-float" style={{animationDelay: '0.5s'}}></div>
                <div className="absolute top-1/3 left-8 w-16 h-16 bg-gradient-to-br from-rose-400 to-red-400 rounded-full opacity-20 animate-float" style={{animationDelay: '1s'}}></div>

                {/* Central Icon - Larger */}
                <div className="relative mb-10">
                  <div className="absolute -inset-8 bg-gradient-to-br from-purple-400 via-pink-400 to-rose-400 rounded-full opacity-30 group-hover:opacity-50 transition-opacity blur-3xl animate-pulse"></div>
                  <div className="relative w-48 h-48 rounded-full bg-gradient-to-br from-purple-600 via-pink-600 to-rose-600 flex items-center justify-center shadow-2xl group-hover:scale-110 group-hover:rotate-12 transition-all duration-700 border-8 border-white">
                    <svg className="w-24 h-24 text-white animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 4v16m8-8H4"/>
                    </svg>
                  </div>
                </div>

                {/* Text Content - Larger Typography */}
                <h3 className="text-5xl sm:text-6xl font-black text-center mb-5 bg-gradient-to-r from-purple-600 via-pink-600 to-rose-600 bg-clip-text text-transparent leading-tight">
                  Join Our Team!
                </h3>
                <p className="text-2xl font-bold text-purple-600 mb-4 text-center">
                  🌟 Be The Next Star 🌟
                </p>
                <p className="text-lg sm:text-xl text-gray-600 text-center max-w-sm leading-relaxed mb-10 font-light">
                  We're looking for talented individuals ready to make an impact. Join our amazing team and be part of something <span className="font-semibold">extraordinary!</span>
                </p>

                {/* Premium CTA Button - Larger */}
                <button className="relative px-12 py-5 bg-gradient-to-r from-purple-600 via-pink-600 to-rose-600 text-white font-black text-xl rounded-3xl shadow-2xl hover:shadow-3xl transform hover:scale-110 transition-all duration-500 group-hover:from-purple-700 group-hover:via-pink-700 group-hover:to-rose-700 overflow-hidden">
                  <span className="relative z-10">Apply Now</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-white/30 to-transparent transform -skew-x-12 translate-x-[-100%] group-hover:translate-x-[200%] transition-transform duration-1000"></div>
                </button>

                {/* Decorative Dots */}
                <div className="absolute bottom-6 right-6 flex gap-2">
                  <div className="w-4 h-4 rounded-full bg-purple-400 animate-pulse"></div>
                  <div className="w-4 h-4 rounded-full bg-pink-400 animate-pulse" style={{animationDelay: '0.2s'}}></div>
                  <div className="w-4 h-4 rounded-full bg-rose-400 animate-pulse" style={{animationDelay: '0.4s'}}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Classical Elegant CSS Animations */}
      <style jsx>{`
        @keyframes floatIn {
          0% {
            opacity: 0;
            transform: translateY(60px) scale(0.9);
          }
          100% {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0) rotate(0deg);
          }
          50% {
            transform: translateY(-20px) rotate(5deg);
          }
        }

        .animate-float {
          animation: float 6s ease-in-out infinite;
        }

        @media (max-width: 640px) {
          .text-6xl { font-size: 3rem; }
          .text-7xl { font-size: 3.5rem; }
          .text-8xl { font-size: 4rem; }
        }
      `}</style>
    </section>
  );
}