"use client";
import Image from "next/image";
import "./Hero.css";
import image from "@/constant/Images/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const Home = () => {
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [loop, setLoop] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);
  const [showSurprise, setShowSurprise] = useState(false);

  const words = [
    "With Stunning Websites!",
    "Engaging Social Media Marketing!",
    "Powerful Google My Business Optimization!",
    "E-commerce Boost: Sell More Online!",
    "Content Marketing Magic: Attract & Engage!",
    "Targeted Ads That Convert: Reach Your Ideal Audience!",
    "SEO Optimization for Top Rankings: Get Found Online!",
  ];

  useEffect(() => {
    const handleType = () => {
      const currentIndex = loop % words.length;
      const fullText = words[currentIndex];

      setDisplayText(
        isDeleting
          ? fullText.substring(0, displayText.length - 1)
          : fullText.substring(0, displayText.length + 1)
      );

      if (!isDeleting && displayText === fullText) {
        setTypingSpeed(2000);
        setIsDeleting(true);
      } else if (isDeleting && displayText === "") {
        setIsDeleting(false);
        setLoop(loop + 1);
        setTypingSpeed(150);
      } else {
        setTypingSpeed(isDeleting ? 100 : 150);
      }
    };

    const typingInterval = setTimeout(handleType, typingSpeed);

    return () => clearTimeout(typingInterval);
  }, [displayText, isDeleting, loop, typingSpeed, words]);

  useEffect(() => {
    if (loop >= words.length) {
      setTimeout(() => {
        setShowSurprise(true);
        setTimeout(() => {
          setShowSurprise(false);
          setLoop(0);
        }, 5000); // Surprise text duration
      }, 2000); // Delay before showing surprise text
    }
  }, [loop]);

  return (
    <section className="app__hero relative bg-black text-white min-h-screen flex items-center justify-center pt-8">
      <div className="container mx-auto p-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 15 }}
          transition={{ delay: 0.25 }}
          className="flex flex-col items-center"
        >
          {/* Static and Dynamic Text */}
          {!showSurprise && (
            <>
              <h1 className="text-4xl lg:text-6xl font-extrabold mb-6 leading-tight lg:leading-tight">
                Craft Your Brand Story . . . 
                <br />
                <span className="dynamic-text text-[#8103FF]">
                  {displayText}
                </span>
              </h1>
              <p className="text-lg text-white mb-12 mt-8">
                SocialPulse has experts who are experienced and know how and
                what specification of a company or a product are to be
                showcased.
              </p>
              <div className="flex gap-5 mb-8">
                <Link href="/contact" className="primary-btn shadow-lg">
                  Get Started
                </Link>
                <Link href="/about" className="secondary-btn shadow-lg">
                  Know More
                </Link>
              </div>
            </>
          )}

          {/* Surprise Text */}
          {showSurprise && (
            <motion.h2
              className="text-3xl lg:text-5xl font-extrabold text-yellow-400 mt-8 animate-pulse"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
            >
              Lets Grow Your Business Online!
            </motion.h2>
          )}
        </motion.div>
      </div>

      {/* Animation elements */}
      <div className="absolute circle-animation rounded-full animate-[spin_4s_linear_infinite] z-1"></div>
      <div className="absolute half-circle-animation rounded-full animate-[spin_3s_linear_infinite] z-1"></div>
      <div className="absolute square-animation animate-[spin_3s_linear_infinite] z-1"></div>
      <div className="absolute bubble-animation flex h-3 w-3 z-1">
        {/* <span className="animate-[ping_1s_linear_infinite] absolute inline-flex h-full w-full rounded-full bg-yellow-400 opacity-75"></span> */}
        {/* <span className="relative inline-flex rounded-full h-3 w-3 bg-yellow-500"></span> */}
      </div>
      <div className="absolute square-animation-2 animate-[spin_2s_linear_infinite] z-1"></div>
      <div className="absolute square-animation-3 animate-[spin_3s_linear_infinite] z-1"></div>
    </section>
  );
};

export default Home;

// "use client";
// import Image from "next/image";
// import "./Hero.css";
// import image from "@/constant/Images/image";
// import Link from "next/link";
// import { motion } from "framer-motion";
// import { useEffect, useState } from "react";

// const Home = () => {
//   const [displayText, setDisplayText] = useState("");
//   const [isDeleting, setIsDeleting] = useState(false);
//   const [loop, setLoop] = useState(0);
//   const [typingSpeed, setTypingSpeed] = useState(150);

//   const words = [
//     "websites",
//     "SEO",
//     "Content Creation",
//     "YouTube Channel",
//     "Social Media",
//   ];

//   useEffect(() => {
//     const handleType = () => {
//       const currentIndex = loop % words.length;
//       const fullText = words[currentIndex];

//       setDisplayText(
//         isDeleting
//           ? fullText.substring(0, displayText.length - 1)
//           : fullText.substring(0, displayText.length + 1)
//       );

//       if (!isDeleting && displayText === fullText) {
//         setTypingSpeed(2000);
//         setIsDeleting(true);
//       } else if (isDeleting && displayText === "") {
//         setIsDeleting(false);
//         setLoop(loop + 1);
//         setTypingSpeed(150);
//       } else {
//         setTypingSpeed(isDeleting ? 100 : 150);
//       }
//     };

//     const typingInterval = setTimeout(handleType, typingSpeed);

//     return () => clearTimeout(typingInterval);
//   }, [displayText, isDeleting, loop, typingSpeed, words]);

//   return (
//     <section className="app__hero relative bg-black text-white min-h-screen flex items-start md:items-center pt-8 md:pt-0">
//       <div className="container mx-auto p-6 lg:px-8 z-2">
//         <div className="flex flex-col lg:flex-row items-center justify-between w-full">
//           <motion.div
//             initial={{ opacity: 0, y: 15 }}
//             animate={{ opacity: 1, y: 0 }}
//             exit={{ opacity: 0, y: 15 }}
//             transition={{ delay: 0.25 }}
//             className="flex-1 lg:pr-8"
//           >
//             <h1 className="text-4xl lg:text-6xl text-white font-extrabold mb-4 capitalize leading-normal lg:leading-normal">
//               We develop amazing
//               <br />
//               <span className="dynamic-text">{displayText}</span>
//             </h1>
//             <p className="text-base text-white mb-4">
//               SocialPulse has experts who are experienced and know how and what
//               specification of a company or a product are to be showcased.
//             </p>
//             <div className="flex gap-5">
//               <Link href="/contact" className="primary-btn shadow-lg">
//                 Get Started
//               </Link>
//               <Link href="/about" className="secondary-btn shadow-lg">
//                 Know More
//               </Link>
//             </div>
//           </motion.div>
//           <div className="flex-1 hidden lg:flex justify-center items-center lg:pl-8">
//             <Image src={image.webdev} alt="dm" className="hero-image" />
//           </div>
//         </div>
//       </div>

//       {/* Animation elements */}
//       <div className="absolute circle-animation rounded-full animate-[spin_4s_linear_infinite] z-1">
//         <div className="circle-animation-child rounded-full"></div>
//       </div>
//       <div className="absolute half-circle-animation rounded-full animate-[spin_3s_linear_infinite] z-1">
//         <div className="half-circle-animation-child rounded-full"></div>
//       </div>
//       <div className="absolute square-animation animate-[spin_3s_linear_infinite] z-1">
//         <div className="square-animation-child"></div>
//       </div>
//       <div className="absolute bubble-animation flex h-3 w-3 z-1">
//         <span className="animate-[ping_1s_linear_infinite] absolute inline-flex h-full w-full rounded-full bg-yellow-400 opacity-75"></span>
//         <span className="relative inline-flex rounded-full h-3 w-3 bg-yellow-500"></span>
//       </div>
//       <div className="absolute square-animation-2 animate-[spin_2s_linear_infinite] z-1">
//         <div className="square-animation-child-2"></div>
//       </div>
//       <div className="absolute square-animation-3 animate-[spin_3s_linear_infinite] z-1">
//         <div className="square-animation-child-3"></div>
//       </div>
//     </section>
//   );
// };

// export default Home;

// "use client";
// import Image from "next/image";
// import "./Hero.css";
// import image from "@/constant/Images/image";
// import Link from "next/link";
// import { motion } from "framer-motion";

// const Home = () => {
//   return (
//     <section className="app__hero relative">
//       <div className="mx-auto max-w-7xl p-6 lg:px-8 z-2">
//         <div className="flex items-center justify-between py-32 md:py-36">
//           <motion.div
//             initial={{ opacity: 0, y: 15 }}
//             animate={{ opacity: 1, y: 0 }}
//             exit={{ opacity: 0, y: 15 }}
//             transition={{ delay: 0.25 }}
//             className="flex-1"
//           >
//             <h1 className="text-4xl lg:text-6xl text-white font-extrabold mb-4 capitalize">
//               {/* You speak and we help you execute it in your own way!! Welcome To
//               Social Pulse ! */}
//               We develop amazing websites for your business
//             </h1>
//             <p className="text-base text-white mb-4">
//               SocialPulse have experts who are experienced and knows how and
//               what specification of a company or a product are to be showcased.
//             </p>
//             <div className="flex gap-5">
//               <Link href="/contact" className="primary-btn shadow-lg">
//                 Get Started
//               </Link>
//               <Link href="/about" className="secondary-btn shadow-lg">
//                 Know More
//               </Link>
//             </div>
//           </motion.div>
//           <div className=" flex-1 hidden lg:block">
//             <Image src={image.webdev} alt="dm" />
//           </div>
//         </div>
//       </div>

//       <div className="absolute circle-animation rounded-full animate-[spin_4s_linear_infinite] z-1">
//         <div className="circle-animation-child rounded-full"></div>
//       </div>
//       <div className="absolute half-circle-animation rounded-full animate-[spin_3s_linear_infinite] z-1">
//         <div className="half-circle-animation-child rounded-full"></div>
//       </div>
//       <div className="absolute square-animation animate-[spin_3s_linear_infinite] z-1">
//         <div className="square-animation-child"></div>
//       </div>
//       <div className="absolute bubble-animation flex h-3 w-3 z-1">
//         <span className="animate-[ping_1s_linear_infinite] absolute inline-flex h-full w-full rounded-full bg-yellow-400 opacity-75"></span>
//         <span className="relative inline-flex rounded-full h-3 w-3 bg-yellow-500"></span>
//       </div>
//       <div className="absolute square-animation-2 animate-[spin_2s_linear_infinite] z-1">
//         <div className="square-animation-child-2"></div>
//       </div>
//       <div className="absolute square-animation-3 animate-[spin_3s_linear_infinite] z-1">
//         <div className="square-animation-child-3"></div>
//       </div>
//     </section>
//   );
// };

// export default Home;
