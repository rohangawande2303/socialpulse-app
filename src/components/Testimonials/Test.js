'use client';

import React, { useEffect, useState, useRef, useCallback } from "react";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

// Utility function
export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

// InfiniteMovingCards Component
export const InfiniteMovingCards = ({
  items,
  direction = "left",
  speed = "fast",
  pauseOnHover = true,
  className,
}) => {
  const containerRef = useRef(null);
  const scrollerRef = useRef(null);

  const [start, setStart] = useState(false);

  const getDirection = useCallback(() => {
    if (containerRef.current) {
      containerRef.current.style.setProperty(
        "--animation-direction",
        direction === "left" ? "forwards" : "reverse"
      );
    }
  }, [direction]);

  const getSpeed = useCallback(() => {
    if (containerRef.current) {
      const duration =
        speed === "fast" ? "20s" : speed === "normal" ? "40s" : "80s";
      containerRef.current.style.setProperty("--animation-duration", duration);
    }
  }, [speed]);

  const addAnimation = useCallback(() => {
    if (containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children);

      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        if (scrollerRef.current) {
          scrollerRef.current.appendChild(duplicatedItem);
        }
      });

      getDirection();
      getSpeed();
      setStart(true);
    }
  }, [getDirection, getSpeed]);

  useEffect(() => {
    addAnimation();
  }, [addAnimation]);

  return (
    <div
      ref={containerRef}
      className={cn(
        "scroller relative z-20 max-w-7xl overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]",
        className,
        "pt-16"
      )}
    >
      <ul
        ref={scrollerRef}
        className={cn(
          "flex min-w-full shrink-0 gap-4 w-max flex-nowrap",
          start && "animate-scroll"
        )}
      >
        {items.map((item) => (
          <li
            key={item.name}
            className={cn(
              "w-[400px] max-w-full relative rounded-2xl border border-b-0 flex-shrink-0 border-slate-700 px-8 py-6 md:w-[500px] lg:w-[600px] hover:border-white",
              pauseOnHover && "hover:[animation-play-state:paused]"
            )}
            style={{
              background:
                "linear-gradient(180deg, var(--slate-800), var(--slate-900))",
            }}
          >
            <blockquote>
              <div
                aria-hidden="true"
                className="user-select-none -z-1 pointer-events-none absolute -left-0.5 -top-0.5 h-[calc(100%_+_4px)] w-[calc(100%_+_4px)]"
              ></div>
              <span className="relative z-20 text-sm leading-[1.6] text-gray-100 font-normal sm:text-base md:text-lg lg:text-xl xl:text-2xl">
                {item.quote}
              </span>
              <div className="relative z-20 mt-6 flex flex-row items-center">
                <span className="flex flex-col gap-1">
                  <span className="text-sm leading-[1.6] text-gray-400 font-normal sm:text-base md:text-lg lg:text-xl xl:text-2xl">
                    {item.name}
                  </span>
                  <span className="text-sm leading-[1.6] text-gray-400 font-normal sm:text-base md:text-lg lg:text-xl xl:text-2xl">
                    {item.title}
                  </span>
                </span>
              </div>
            </blockquote>
          </li>
        ))}
      </ul>

      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .animate-scroll {
          animation: scroll var(--animation-duration) linear infinite;
          animation-direction: var(--animation-direction);
        }

        .scroller:hover .animate-scroll {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
};

// InfiniteMovingCardsDemo Component
export function InfiniteMovingCardsDemo() {
  return (
    <div className="pb-40 rounded-md flex flex-col antialiased my-4 dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
      <InfiniteMovingCards
        items={testimonials}
        direction="right"
        speed="slow"
      />
    </div>
  );
}

// Testimonials data
const testimonials = [
  {
    quote:
      "Increased Leads & Brand Awareness for Metal Fabrication Shop in Thane: Social Pulse helped Bajarang Fabricators, a metal fabrication shop in Thane, achieve a 60% increase in quality leads and brand awareness within just 3 months. Utilizing Google My Business (GMB) optimization and strategic ad campaigns with minimal spend, Social Pulse effectively reached Bajarang Fabricators' target audience, driving significant growth",
    name: "J.P. Mishra",
    title: "Bajarang Fabricators",
  },
  {
    quote:
      "Top 3 GMB Ranking & Lead Generation for Air Cool Services: Social Pulse's expertise in Google My Business optimization propelled Air Cool Services' profile to the top 3 search results in just 3 months. Their impressive understanding of Air Cool Services' needs translated into targeted strategies that generated valuable leads.",
    name: "Ajay Mishra",
    title: "Air Cool Services",
  },
  {
    quote: "Social Media & GMB Success for Shree Ram Mobile: Shree Ram Mobile is thrilled with the results achieved through Social Pulse's social media marketing and GMB services.  Within 6 months, Social Pulse's targeted strategies not only increased mobile sales by 45% but also significantly boosted brand presence in Thane City.  Social Pulse's content creation expertise further enhanced the impact of the campaign.",
    name: "Edgar Allan Poe",
    title: "Shree Ram Mobile",
  },
  {
    quote:
      "Skyline Realtors: Targeted Lead Generation & Brand Growth: Social Pulse's combined social media marketing and GMB expertise empowered Skyline Realtors to achieve impressive results. Their strategies generated high-quality leads within a limited budget, boosting brand presence by 65% in the KDMC market. Social Pulse's content creation skills further fueled the success of the campaign.",
    name: "Vinay Mahadik",
    title: "Skyline Realtors",
  },
  {
    quote:
      "Mamta Cosmetics: Enhanced Brand Awareness Through Social Media: Social Pulse's creative social media campaigns and targeted ads were instrumental in increasing brand awareness by 30% for Mamta Cosmetics in just 3 months. Their strategic approach perfectly aligned with Mamta Cosmetics' target audience, driving significant growth.",
    name: "Mamta Wadhwani",
    title: "Mamta Cosmetics",
  },
];

// Export the main component to be used in the application
export default function Testimonials() {
  return (
    <div className="flex flex-col items-center justify-center relative overflow-hidden bg-black">
      <div className="my-8 p-8 max-w-7xl w-full">
        <InfiniteMovingCards
          items={testimonials}
          direction="right"
          speed="slow"
        />
      </div>
    </div>
  );
}


  // return <InfiniteMovingCardsDemo />;


// "use client";
// import image from "@/constant/Images/image";
// import { ChatBubbleLeftRightIcon } from "@heroicons/react/24/outline";
// import Image from "next/image";
// import { useEffect, useState } from "react";

// const Test = () => {
//   const testimonials = [
//     {
//       id: 1,
//       name: "WebDev.com",
//       message:
//         "We have a great business relationship with WebDev. We had worked with several other marketing companies in the past who did not deliver results and I am happy to say WebDev is doing that for us. They help bring our vision to life in a way that makes sense",
//       imgUrl: image.client,
//     },
//     {
//       id: 2,
//       name: "WebDev.com",
//       message:
//         "WebDev has done a wonderful job redesigning our website to take it from plain and functional to amazingly professional. We would highly recommend WebDev to any business that needs a hand improving their internet traffic or their business.",
//       imgUrl: image.client,
//     },
//     {
//       id: 3,
//       name: "WebDev.com",
//       message:
//         "Today we work with statistics and more accurate data and realize the digital space is an essential tool for Clinica da Mama to position itself in an increasingly competitive field",
//       imgUrl: image.client,
//     },
//     {
//       id: 4,
//       name: "WebDev.com",
//       message:
//         "It really met my requirements. You guys were very patient even though there were delays from my side. The price was competitive and all our requirements were met. If somebody were to ask me for something similar, I would definitely recommend you guys!",
//       imgUrl: image.client,
//     },
//   ];

//   const [activeSlide, setActiveSlide] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setActiveSlide((prevState) => (prevState + 1) % testimonials.length);
//     }, 3000);

//     return () => clearInterval(interval);
//   }, [testimonials.length]);

//   return (
//     <section className="py-24 sm:py-32 bg-[#FAF1F2]">
//       <div className="app__container grid grid-cols-1 md:grid-cols-2">
//         <div className="relative left-[5%] right-[5%] h-80">
//           <ChatBubbleLeftRightIcon className="absolute h-60 w-60 md:bottom-12 right-12 text-[#ffdbc2]" />
//           <div className="absolute md:top-12 pr-8">
//             <h4 className="highlight z-2">Testimonials</h4>
//             <h1 className="mt-2 text-4xl font-extrabold">
//               See What Our <br />
//               <span className="highlight">Client</span> Says
//             </h1>
//             <p className="mt-4 app__text">
//             Discover what our clients are saying about our digital marketing solutions. Read testimonials from satisfied customers and learn how WebDev has helped businesses like yours achieve their marketing goals.
//             </p>
//           </div>
//         </div>
//         <div className="relative bg-white h-80 shadow-lg px-6 py-12 rounded-xl">
//           <Image
//             src={image.quote}
//             className="absolute bottom-0 right-2"
//             height={150}
//             width={150}
//             alt=""
//           />
//           {testimonials.map((testimonial, index) => (
//             <div
//               key={testimonial.id}
//               className={`slide-test app__text ${
//                 activeSlide === index ? "activeSlider-test" : ""
//               }`}
//             >
//               <p>&ldquo; {testimonial.message} &rdquo;</p>
//               <div className="flex items-center justify-start gap-4 mt-6">
//                 <Image src={testimonial.imgUrl} height={50} width={50} alt="" />
//                 <h3 className="text-xl font-semibold">{testimonial.name}</h3>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Test;
