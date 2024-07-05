"use client";
import { motion } from "framer-motion";
import {
  CodeBracketIcon,
  CodeBracketSquareIcon,
  PencilSquareIcon,
  UserGroupIcon,
} from "@heroicons/react/24/outline";

const features = [
  {
    name: "Website Optimization & Designing",
    description:
      "To represent all the aspects of your product, you need to keep designing your website in different ways to meet the demands of time and customers. Customers do visit the website, but what makes them buy is how irresistible and relatable it is to them.",
    icon: CodeBracketIcon,
  },
  {
    name: "Content Marketing",
    description:
      "70% of consumers would learn about products through content mediums rather than traditional advertising. It is not easy to get people to spend money on something they haven’t heard of before. So, you will need content that will educate your audience about your product. Use infographics and maps to talk about your product.",
    icon: PencilSquareIcon,
  },
  {
    name: "Hire Your IT Experts / PR Experts",
    description:
      "From creating a relevant template to designing your whole website, we create everything you need. Customers are generally not patient enough to read through the link if the website looks boring. We make you look presentable and relatable to your product.",
    icon: CodeBracketSquareIcon,
  },
  {
    name: "Targeted Audience",
    description:
      "We market you to not just your target audience but also your potential audience. Come join us on the journey to making you an influence.",
    icon: UserGroupIcon,
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
    },
  },
};

export default function WeMake() {
  return (
    <div className="bg-black py-24 sm:py-32 text-white border-t border-b border-white">
      <div className="app__container">
        <div className="mx-auto max-w-2xl lg:text-center">
          <p className="mt-2 primary-heading text-white text-center">
            We Make Your <span className="highlight">SEO Service</span> Faster
          </p>
          <p className="mt-6 text-lg leading-8 app__text text-center text-white">
            For more expert opinions about better investments and cute
            promotional aspects, contact WebDev Private Limited. Because,
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
          <motion.dl
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16"
          >
            {features.map((feature) => (
              <motion.div
                variants={itemVariants}
                key={feature.name}
                className="relative pl-24"
              >
                <dt className="text-xl font-extrabold leading-7 text-white">
                  <div className="absolute left-0 top-0 flex h-16 w-16 items-center justify-center rounded-full shadow-lg bg-white hover:bg-indigo-600 text-indigo-600 hover:text-white transform transition-transform hover:scale-110">
                    <feature.icon className="h-6 w-6" aria-hidden="true" />
                  </div>
                  {feature.name}
                </dt>
                <dd className="mt-2 text-base leading-7 text-white">
                  {feature.description}
                </dd>
              </motion.div>
            ))}
          </motion.dl>
        </div>
      </div>
    </div>
  );
}

// "use client";
// import { motion } from "framer-motion";
// import {
//   CodeBracketIcon,
//   CodeBracketSquareIcon,
//   PencilSquareIcon,
//   UserGroupIcon,
// } from "@heroicons/react/24/outline";

// const features = [
//   {
//     name: "Website Optimization & Designing",
//     description:
//       "To represent all the aspects of your product, you need to keep designing your website in different ways to meet the demands of time and customers. Customers do visit the website, but what makes them buy is how irresistible and relatable it is to them.",
//     icon: CodeBracketIcon,
//   },
//   {
//     name: "Content Marketing",
//     description:
//       "70% of consumers would learn about products through content mediums rather than traditional advertising. It is not easy to get people to spend money on something they haven’t heard of before. So, you will need content that will educate your audience about your product. Use infographics and maps to talk about your product.",
//     icon: PencilSquareIcon,
//   },
//   {
//     name: "Hire Your IT Experts / PR Experts",
//     description:
//       "From creating a relevant template to designing your whole website, we create everything you need. Customers are generally not patient enough to read through the link if the website looks boring. We make you look presentable and relatable to your product.",
//     icon: CodeBracketSquareIcon,
//   },
//   {
//     name: "Targeted Audience",
//     description:
//       "We market you to not just your target audience but also your potential audience. Come join us on the journey to making you an influence.",
//     icon: UserGroupIcon,
//   },
//   {
//     name: "SEO & Analytics",
//     description:
//       "Optimize your website for search engines and track the performance to get the best results. Understanding your audience's behavior is key to improving your marketing strategy.",
//     icon: CodeBracketIcon,
//   },
//   {
//     name: "Social Media Management",
//     description:
//       "Manage your social media accounts effectively to increase your online presence and engage with your audience. Regular updates and interaction help build a strong community.",
//     icon: UserGroupIcon,
//   },
// ];

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
//     y: 20,
//   },
//   show: {
//     opacity: 1,
//     y: 0,
//     transition: {
//       duration: 1,
//     },
//   },
// };

// export default function WeMake() {
//   return (
//     <div className="bg-black py-24 sm:py-32">
//       <div className="app__container">
//         <div className="mx-auto max-w-2xl lg:text-center">
//           <p className="mt-2 text-2xl font-extrabold text-white text-center">
//             We Make Your <span className="text-[#8103ff]">Seo Service</span> Faster
//           </p>
//           <p className="mt-6 text-lg leading-8 text-white text-center">
//             For more expert opinions about better investments and cute promotional aspects, contact WebDev Private Limited. Because,
//           </p>
//         </div>
//         <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
//           <motion.dl
//             variants={variants}
//             initial="hidden"
//             whileInView="show"
//             className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-10"
//           >
//             {features.map((feature) => (
//               <motion.div
//                 variants={items}
//                 key={feature.name}
//                 className="relative p-6 bg-black border border-transparent hover:border-white transition-all duration-300"
//               >
//                 <dt className="text-xl font-extrabold leading-7 text-white">
//                   <div className="absolute left-0 top-0 flex h-16 w-16 items-center justify-center rounded-full shadow-lg bg-white hover:bg-[#8103FF] text-[#8103FF] hover:text-white">
//                     <feature.icon className="h-6 w-6" aria-hidden="true" />
//                   </div>
//                   {feature.name}
//                 </dt>
//                 <dd className="mt-2 text-base leading-7 text-gray-300">
//                   {feature.description}
//                 </dd>
//               </motion.div>
//             ))}
//           </motion.dl>
//         </div>
//       </div>
//     </div>
//   );
// }
// -------------------------------------------------------------------------------
// "use client";
// import { motion } from "framer-motion";
// import {
//   CodeBracketIcon,
//   CodeBracketSquareIcon,
//   PencilSquareIcon,
//   UserGroupIcon,
// } from "@heroicons/react/24/outline";

// const features = [
//   {
//     name: "Website Optimization & Designing",
//     description:
//       "To represent all the aspects of your product, you need to keep designing your website in different ways to meet the demands of time and customers. Customers do visit the website, but what makes them buy is how irresistible and relatable it is to them.",
//     icon: CodeBracketIcon,
//   },
//   {
//     name: "Content Marketing",
//     description:
//       "70% of consumers would learn about products through content mediums rather than traditional advertising. It is not easy to get people to spend money on something they haven’t heard of before. So, you will need content that will educate your audience about your product. Use infographics and maps to talk about your product.",
//     icon: PencilSquareIcon,
//   },
//   {
//     name: "Hire Your IT Experts / PR Experts",
//     description:
//       "From creating a relevant template to designing your whole website, we create everything you need. Customers are generally not patient enough to read through the link if the website looks boring. We make you look presentable and relatable to your product.",
//     icon: CodeBracketSquareIcon,
//   },
//   {
//     name: "Targeted Audience",
//     description:
//       "We market you to not just your target audience but also your potential audience. Come join us on the journey to making you an influence.",
//     icon: UserGroupIcon,
//   },
// ];

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
//     y: 20,
//   },
//   show: {
//     opacity: 1,
//     y: 0,
//     transition: {
//       duration: 1,
//     },
//   },
// };

// export default function WeMake() {
//   return (
//     <div className="bg-slate-50 py-24 sm:py-32">
//       <div className="app__container">
//         <div className="mx-auto max-w-2xl lg:text-center">
//           <p className="mt-2 primary-heading text-gray-900 text-center">
//             We Make Your <span className="highlight">Seo Service</span> Faster
//           </p>
//           <p className="mt-6 text-lg leading-8 app__text text-center">
//             For more expert opinions about better investments and cute
//             promotional aspects, contact WebDev Private Limited. Because,
//           </p>
//         </div>
//         <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
//           <motion.dl
//             variants={variants}
//             initial="hidden"
//             whileInView="show"
//             className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16"
//           >
//             {features.map((feature) => (
//               <motion.div
//                 variants={items}
//                 key={feature.name}
//                 className="relative pl-24"
//               >
//                 <dt className="text-xl font-extrabold leading-7 text-gray-900">
//                   <div className="absolute left-0 top-0 flex h-16 w-16 items-center justify-center rounded-full shadow-lg bg-white hover:bg-indigo-600 text-indigo-600 hover:text-white">
//                     <feature.icon className="h-6 w-6 " aria-hidden="true" />
//                   </div>
//                   {feature.name}
//                 </dt>
//                 <dd className="mt-2 text-base leading-7 app__text">
//                   {feature.description}
//                 </dd>
//               </motion.div>
//             ))}
//           </motion.dl>
//         </div>
//       </div>
//     </div>
//   );
// }
