import Link from "next/link";

export default function ComingSoon() {
    return (
      <>
        {/*
          This example requires updating your template:
  
          ```
          <html class="h-full">
          <body class="h-full">
          ```
        */} 
        <main className="grid min-h-full place-items-center bg-black px-6 py-24 sm:py-32 lg:px-8">
          <div className="text-center">
            <p className="text-base font-semibold text-white">This Page is</p>
            <h1 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-7xl">Coming Soon...</h1>
            <p className="mt-6 text-base leading-7 text-white">We are excited to share with you that our brand new website is currently under construction and will be launching soon</p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link
                href="/"
                className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Go back home
              </Link>
            </div>
          </div>
        </main>
      </>
    )
}

// import image from "@/constant/Images/image";
// import Image from "next/image";
// import React from "react";

// const WebOptimization = () => {
//   return (
//     <section className="we-are-area py-16 md:py-32">
//       <div className="app__container grid grid-cols-1 md:grid-cols-2 gap-8 relative">
//         <div className="my-auto order-2 md:order-1">
//           <div className="we-are-content">
//             <div className="section-title">
//               <h2 className="pb-12 primary-heading">
//                 Website <span className="highlight">Optimization</span>
//               </h2>
//             </div>

//             <p className="app__text">
//               Website optimization is the process of using tools, advanced
//               strategies, and experiments to convert a normal website into a
//               top-quality website with a high level of performance.
//               <br />
//               <br />
//               The process of using tools, advanced strategies, and experiments
//               to convert a normal website into a top-order website with a high
//               level of performance is known as website optimization.
//               <br />
//               <br />
//               By optimizing your website, you can not only tap into an untapped
//               market in the most effective and efficient manner, without paying
//               for advertising but also open doors to more conversions and
//               revenue gains.
//             </p>
//           </div>
//         </div>

//         <div className="we-are-img order-1 md:order-2">
//           <div className="we-are-banner-img">
//             <Image src={image.semMarketing} alt="SEM Marketing" />
//           </div>
//         </div>
//       </div>
//       <div className="app__container my-auto order-2 md:order-1">
//         <div className="we-are-content">
//           <p className="app__text">
//           By optimizing your website, we help you gain your visitors trust.
//           start building a relationship, and let you sell products without
//           having to jump on a sales call.
//           <br />
//           <br />
//           In the past decade, the internet has become a priest of old times.
//           where consumers go and ask for help before making any decision.
//           <br />
//           <br />
//           The internet is taking over the role of &quot;asking a friend&quot; in all
//           industries. So, by positioning your business correctly, you can
//           consistently win people who had previously never heard of your
//           company into customers.
//           <br />
//           <br />
//           And we, at WebDev, make sure that you have a good impression in the
//           views of the all-knowing priest (INTERNET).
//           <br />
//           <br />
//           We optimize your website your content and put your website on the
//           map so that, when consumers search for relevant terms, your
//           website and business will always show up.
//           <br />
//           <br />
//           The foundation of our website optimization process is to identify
//           the problems, the issues in one&apos;s website. We use available software.
//           tools to search for potential issues with SEO, page speed, and mobile
//           usability, and more.
//           <br />
//           <br />
//           WebDev is the complete solution for every issue. We not only have a
//           team of engineers who identify and rectify problems on your site and
//           make it presentable. But we also have a large team of highly
//           talented content writers who take on the task of editing contents
//           and make your site eye-catchy, a team of designers who improve user
//           experience, as well as website managers who improve site structure.
//           <br />
//           <br />
//           <strong>FIGURE OUT WHAT YOUR CUSTOMERS ARE SEARCHING FOR</strong>
//           <br />
//           We understand which keywords and terms your target customers are using.
//           actively searching. This knowledge helps us with everything, from
//           planning and writing content for your website, to creating landing
//           pages, campaigns, and tracking your results.
//           <br />
//           <br />
//           <strong>OPTIMIZE YOUR WEBSITE CONTENT</strong>
//           <br />
//           We make sure the content is written, the contents are structured, and your
//           Site structure, navigation, external links, and many other little
//           details matter.
//           </p>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default WebOptimization;
