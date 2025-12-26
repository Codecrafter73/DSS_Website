// import React, { useEffect, useRef } from "react";
// import {
//   MessageSquare,
//   Map,
//   PenTool,
//   Factory,
//   Truck,
//   Headphones,
//   ArrowRight,
// } from "lucide-react";
// import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";

// // Register GSAP
// gsap.registerPlugin(ScrollTrigger);

// const HowWeWork = () => {
//   const sectionRef = useRef(null);

//   // --- Animation Logic ---
//   useEffect(() => {
//     const ctx = gsap.context(() => {
//       // Animate Header
//       gsap.fromTo(
//         ".process-header",
//         { opacity: 0, y: 30 },
//         {
//           opacity: 1,
//           y: 0,
//           duration: 0.8,
//           scrollTrigger: {
//             trigger: ".process-header",
//             start: "top 85%",
//           },
//         }
//       );

//       // Animate Steps Staggered
//       gsap.fromTo(
//         ".process-card",
//         { opacity: 0, y: 50 },
//         {
//           opacity: 1,
//           y: 0,
//           duration: 0.6,
//           stagger: 0.15,
//           ease: "power2.out",
//           scrollTrigger: {
//             trigger: ".process-grid",
//             start: "top 80%",
//           },
//         }
//       );
//     }, sectionRef);

//     return () => ctx.revert();
//   }, []);

//   const steps = [
//     {
//       id: "01",
//       title: "Consultation & Strategy",
//       desc: "We start by understanding your brand goals, target audience, and location requirements.",
//       icon: MessageSquare,
//       color: "text-blue-400",
//       border: "hover:border-blue-500/50",
//     },
//     {
//       id: "02",
//       title: "Site Survey & Recce",
//       desc: "Our technical team visits the site to measure dimensions and analyze visibility angles.",
//       icon: Map,
//       color: "text-green-400",
//       border: "hover:border-green-500/50",
//     },
//     {
//       id: "03",
//       title: "Design & Prototyping",
//       desc: "We create 3D renders and digital mockups so you can visualize the final outcome.",
//       icon: PenTool,
//       color: "text-purple-400",
//       border: "hover:border-purple-500/50",
//     },
//     {
//       id: "04",
//       title: "Manufacturing",
//       desc: "Precision fabrication using high-grade materials and advanced CNC/Laser technology.",
//       icon: Factory,
//       color: "text-orange-400",
//       border: "hover:border-orange-500/50",
//     },
//     {
//       id: "05",
//       title: "Installation",
//       desc: "Safe and professional installation by our certified team, ensuring structural integrity.",
//       icon: Truck,
//       color: "text-red-400",
//       border: "hover:border-red-500/50",
//     },
//     {
//       id: "06",
//       title: "Support & AMC",
//       desc: "We don't just leave. We provide ongoing maintenance and technical support.",
//       icon: Headphones,
//       color: "text-teal-400",
//       border: "hover:border-teal-500/50",
//     },
//   ];

//   return (
//     <section
//       ref={sectionRef}
//       className="relative py-20 bg-gray-950 overflow-hidden"
//     >
//       {/* Background Decoration */}
//       <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
//         <div className="absolute top-1/4 left-0 w-96 h-96 bg-green-500/10 rounded-full blur-[100px]" />
//         <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-[100px]" />
//       </div>

//       <div className="max-w-7xl mx-auto px-6 relative z-10">
//         {/* Header */}
//         <div className="process-header text-center mb-16">
//           <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
//             Our Work{" "}
//             <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">
//               Process
//             </span>
//           </h2>
//           <div className="w-24 h-1 bg-gradient-to-r from-green-500 to-blue-500 mx-auto rounded-full mb-6" />
//           <p className="text-gray-400 max-w-2xl mx-auto text-lg">
//             From concept to execution, we follow a rigorous workflow to ensure
//             perfection in every pixel and panel.
//           </p>
//         </div>

//         {/* Process Grid */}
//         <div className="process-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {steps.map((step, index) => (
//             <div
//               key={index}
//               className={`process-card group relative p-8 bg-white/[0.02] backdrop-blur-sm border border-white/10 rounded-3xl transition-all duration-300 hover:-translate-y-2 ${step.border}`}
//             >
//               {/* Connector Line (Desktop Only - visual cue) */}
//               {index !== steps.length - 1 && (
//                 <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-[1px] bg-gradient-to-r from-white/10 to-transparent z-0 transform -translate-y-1/2"></div>
//               )}

//               {/* Number Background */}
//               <div className="absolute top-4 right-6 text-6xl font-black text-white/[0.03] group-hover:text-white/[0.05] transition-colors select-none">
//                 {step.id}
//               </div>

//               {/* Icon */}
//               <div
//                 className={`relative w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
//               >
//                 <step.icon className={`w-7 h-7 ${step.color}`} />
//               </div>

//               {/* Content */}
//               <h3 className="text-xl font-bold text-white mb-3 group-hover:text-green-400 transition-colors">
//                 {step.title}
//               </h3>
//               <p className="text-gray-400 text-sm leading-relaxed">
//                 {step.desc}
//               </p>

//               {/* Hover Indicator */}
//               <div className="mt-6 flex items-center gap-2 text-xs font-bold text-gray-500 uppercase tracking-wider opacity-0 group-hover:opacity-100 transition-opacity transform translate-y-2 group-hover:translate-y-0">
//                 <span>Next Step</span>
//                 <ArrowRight className="w-3 h-3" />
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default HowWeWork;




import {
  FileText,
  PencilRuler,
  Building2,
  BadgeCheck,
  Truck,
  Wrench
} from "lucide-react";
import { useMemo } from "react";
import bg from "../assets/banner2.jpg";

const steps = [
  {
    id: 1,
    title: "Requirement Gathering",
    icon: FileText,
    description: "Understanding client needs, location, and display goals.",
  },
  {
    id: 2,
    title: "Site Survey",
    icon: Building2,
    description: "Analyzing installation site for structure, access, and visibility.",
  },
  {
    id: 3,
    title: "Design & Prototyping",
    icon: PencilRuler,
    description: "Crafting signage layouts and 3D mockups for approval.",
  },
  {
    id: 4,
    title: "Fabrication",
    icon: Wrench,
    description: "Manufacturing signage using selected materials and methods.",
  },
  {
    id: 5,
    title: "Quality Check",
    icon: BadgeCheck,
    description: "Ensuring build quality, durability, and finishing standards.",
  },
  {
    id: 6,
    title: "Installation",
    icon: Truck,
    description: "Safely delivering and mounting signage on-site with precision.",
  },
];

const Step = ({ id, title, Icon, description, index }) => (
  <div
    className="text-center relative flex flex-col items-center"
    data-aos="fade-up"
    data-aos-delay={index * 300}
  >
    <div className="lg:w-20 w-16 lg:h-20 h-16 group flex items-center justify-center rounded-full border-2 border-white bg-white text-black hover:bg-transparent hover:text-white transition duration-500 relative">
      <Icon size={40} />
      <div className="absolute lg:h-7 lg:w-7 flex justify-center items-center group-hover:top-0  -top-1 -right-1 bg-white text-black font-bold text-xs px-2 py-0.5 rounded-full border">
        {id}
      </div>
    </div>
    <h3 className="font-semibold lg:mt-3 text-white text-lg">{title}</h3>
    <p className="md:block hidden text-gray-300 text-sm mt-1 max-w-xs mx-auto px-2">{description}</p>

    {((index !== steps.length - 1) && (index !== 2)) && (
       <svg
        className="absolute lg:block hidden right-0 top-5 translate-y-1/2 translate-x-24"
        xmlns="http://www.w3.org/2000/svg"
        width="160"
        height="54"
        viewBox="0 0 222 74"
        fill="none"
        aria-hidden="true"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M4.91203 36.6111C2.02591 33.9082 0.220762 29.7777 0.0017416 25.814C-0.0865733 24.2477 3.21286 24.23 3.30117 25.8105C3.68269 32.6723 8.76257 38.0708 15.6971 38.117C24.4622 38.1755 32.8205 33.1684 40.3477 28.6591C41.4967 27.9708 42.6264 27.294 43.7353 26.6486C44.7327 26.0686 45.7298 25.4874 46.727 24.9061C54.9619 20.1061 63.2067 15.3004 71.7523 11.071C86.8223 3.61254 104.729 -3.23508 121.643 1.63781C132.345 4.72203 142.002 12.6557 147.496 22.6486C150.745 21.1779 154.125 20.0024 157.594 19.1582C177.517 14.3101 204.111 18.5502 217.862 35.449C217.307 33.7876 216.752 32.1265 216.197 30.4654C215.342 27.9066 214.487 25.3479 213.632 22.7882C213.13 21.2787 215.956 21.3001 216.648 21.9962C216.772 22.1223 216.897 22.2475 217.021 22.3727C217.146 22.4979 217.27 22.623 217.394 22.7491C217.812 23.1711 217.697 23.5351 217.332 23.7912C218.015 25.8339 218.697 27.8762 219.38 29.9184C220.235 32.4758 221.089 35.0332 221.944 37.5915C222.368 38.8595 220.269 38.998 219.52 38.7494C218.889 38.5397 218.256 38.3414 217.622 38.1546C216.948 38.2781 216.187 38.1472 215.811 37.6553C215.811 37.6546 215.811 37.654 215.81 37.6534C211.85 36.6282 207.824 36.0459 203.694 35.9081C201.684 35.8406 201.67 33.7877 203.691 33.8587C207.011 33.969 210.279 34.3359 213.501 34.9629C209.117 30.3967 203.27 26.8807 197.675 24.436C182.458 17.7867 163.758 17.8936 148.648 24.9047C150.473 28.7676 151.678 32.8918 152.098 37.1296C153.352 49.7807 147.3 63.6854 136.501 70.6041C130.39 74.5216 119.124 76.6206 115.864 67.951C112.561 59.1748 118.941 48.2215 123.992 41.5053C129.457 34.2437 136.568 28.2276 144.613 24.0486C141.079 17.3498 135.6 11.5722 129.04 7.59041C113.493 -1.84637 94.9155 3.34616 79.4922 10.2435C70.9874 14.046 62.9744 18.7902 54.9673 23.5308C47.2462 28.1021 39.5307 32.6701 31.3853 36.3873C23.5111 39.9816 12.1574 43.3948 4.91203 36.6111ZM145.74 26.3625C135.254 32.0095 126.079 41.2227 121.18 52.1532C118.704 57.6831 115.238 70.1246 124.338 71.6128C135.837 73.4916 145.121 58.983 147.717 49.6812C149.949 41.6762 148.961 33.5704 145.74 26.3625Z"
          fill="#7a7878"
        />
      </svg>

    )}
  </div>
);

export default function HowWeWork() {
  const memoizedSteps = useMemo(() => steps, []);

  return (
    <div className="relative text-center py-8 px-4 bg-black text-white z-10">
      {/* Background Image */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `url(${bg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          opacity: 0.1,
          zIndex: -1,
        }}
      ></div>

      {/* Header */}
      <div className="container mx-auto mb-10">
        <h2 className="text-3xl md:text-5xl font-bold text-white mt-2">
          Our Signage <span className="bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">Process</span>
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-green-500 to-blue-500 mx-auto mt-4"></div>
      </div>

      {/* Steps */}
      <div className="overflow-visible">
      <div className="mb-4  grid grid-cols-2 md:grid-cols-3 lg:gap-16 gap-6 max-w-7xl mx-auto relative overflow-visible px-4">
        {memoizedSteps.map(({ id, title, icon, description }, index) => (
          <Step
            key={id}
            id={id}
            title={title}
            Icon={icon}
            index={index}
            description={description}
          />
        ))}
      </div>
      </div>
    </div>
  );
}
