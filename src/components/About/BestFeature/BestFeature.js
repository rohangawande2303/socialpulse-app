"use client";
import { motion } from "framer-motion";
import { ComputerDesktopIcon } from "@heroicons/react/20/solid";
import {
  ArrowPathIcon,
  ArrowTrendingUpIcon,
} from "@heroicons/react/24/outline";

const variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const items = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
    },
  },
};

const BestFeature = () => {
  const feature = [
    {
      name: "Beautiful Websites",
      description:
        "We design websites that are easy to use and help you sell more.",
      icon: ArrowTrendingUpIcon,
    },
    {
      name: "Awesome Content",
      description:
        "We craft engaging content that people love to read and see.",
      icon: ArrowPathIcon,
    },
    {
      name: "Social Media Magic",
      description:
        "We manage your social media to build your online community.",
      icon: ComputerDesktopIcon,
    },
    {
      name: "Targeted Ads",
      description:
        "We create ads that reach the right people at the right time.",
      icon: ArrowTrendingUpIcon,
    },
    {
      name: "Local Business Boost",
      description:
        "We optimize your Google My Business profile so customers can find you easily.",
      icon: ArrowPathIcon,
    },
    {
      name: "Clear Reports",
      description:
        "We track your progress and show you exactly what's working.",
      icon: ComputerDesktopIcon,
    },
  ];

  return (
    <div className="bg-black text-white py-16 sm:py-32">
      <div className="app__container">
        <h1 className="primary-heading mb-8 text-center text-white">
          Our Best <span className="highlight text-indigo-300">Features</span>
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {feature.map((i, k) => (
            <motion.div
              variants={items}
              initial="hidden"
              whileInView="show"
              key={k}
              className="flex flex-col bg-gray-800 text-white shadow-lg py-6 px-4 rounded-lg"
            >
              <div className="relative flex h-16 w-16 mb-4 items-center justify-center rounded-full bg-gray-900">
                <div className="absolute half-circle rounded-full animate-[spin_3s_linear_infinite] z-1">
                  <div className="half-circle-child rounded-full bg-indigo-300"></div>
                </div>
                <i.icon className="h-8 w-8 text-indigo-300" />
              </div>
              <div className="flex-1">
                <h2 className="text-xl font-bold mb-4 text-white">{i.name}</h2>
                <p className="text-base text-white">{i.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BestFeature;

// "use client";
// import { motion } from "framer-motion";
// import image from "@/constant/Images/image";
// import { ComputerDesktopIcon } from "@heroicons/react/20/solid";
// import {
//   ArrowPathIcon,
//   ArrowTrendingUpIcon,
// } from "@heroicons/react/24/outline";
// import Image from "next/image";

// const variants = {
//   hidden: { opacity: 0 },
//   show: {
//     opacity: 1,
//     transition: {
//       staggerChildren: 0.3,
//     },
//   },
// };

// const items = {
//   hidden: {
//     opacity: 0,
//     y: 30,
//   },
//   show: {
//     opacity: 1,
//     y: 0,
//     transition: {
//       duration: 1,
//     },
//   },
// };

// const BestFeature = () => {
//   const feature = [
//     {
//       name: "Link Building",
//       description:
//         "To represent all the aspects of your product, you need to keep designing it in different ways according to the demands of time and customers.",
//       icon: ArrowTrendingUpIcon,
//     },
//     {
//       name: "Monthly SEO Task",
//       description:
//         "Customers do visit the website, but what makes them buy is how irresistible and relatable it is to them.",
//       icon: ArrowPathIcon,
//     },
//     {
//       name: "On Page SEO",
//       description:
//         "A website is the essence and the personality of the company, and unlike humans, this personality can change and can very profitably affect people around the world.",
//       icon: ComputerDesktopIcon,
//     },
//   ];

//   return (
//     <div className="bg-black text-white">
//       <div className="app__container py-16 sm:py-32">
//         <div className="grid grid-cols-1 lg:grid-cols-2">
//           <motion.div
//             variants={variants}
//             initial="hidden"
//             whileInView="show"
//             className="my-auto"
//           >
//             <h1 className="primary-heading mb-8 text-white">
//               Our Best{" "}
//               <span className="highlight text-indigo-300">Features</span>
//             </h1>
//             {feature.map((i, k) => {
//               return (
//                 <motion.div
//                   variants={items}
//                   key={k}
//                   className="flex gap-4 my-6 bg-gray-800 text-white shadow-lg py-10 px-6 rounded-lg"
//                 >
//                   <div className="relative flex h-16 w-16 mb-4 items-center justify-center rounded-full bg-gray-900">
//                     <div className="absolute half-circle rounded-full animate-[spin_3s_linear_infinite] z-1">
//                       <div className="half-circle-child rounded-full bg-indigo-300"></div>
//                     </div>
//                     <i.icon className="h-8 w-8 text-indigo-300" />
//                   </div>
//                   <div className="flex-1">
//                     <h1 className="text-xl font-bold mb-4">{i.name}</h1>
//                     <p className="app__text">{i.description}</p>
//                   </div>
//                 </motion.div>
//               );
//             })}
//           </motion.div>
//           <div className="my-auto">
//             {/* <Image src={image.aboutAni} alt="about" /> */}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default BestFeature;
