"use client";
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
          <h1 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-7xl">
            Coming Soon...
          </h1>
          <p className="mt-6 text-base leading-7 text-white">
            We are excited to share with you that our brand new website is
            currently under construction and will be launching soon
          </p>
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
  );
}

// "use client"
// import image from "@/constant/Images/image";
// import Image from "next/image";

// const Social = () => {
//   return (
//     <section className="we-are-area pb-16 md:pb-32 flex items-center">
//       <div className="app__container grid grid-cols-1 md:grid-cols-2 gap-8 relative">
//         <div className="my-auto order-2 md:order-1">
//           <div className="we-are-content">
//             <div className="section-title">
//               <h2 className="pb-12 primary-heading">
//                 SOCIAL MEDIA <span className="highlight">MARKETING</span>
//               </h2>
//             </div>

//             <p className="app__text text-xl">
//               Social media marketing requires both strategy and creativity.
//               It&apos;s so important that around 92% of marketers use social
//               media as part of their marketing efforts. In addition to that, 78%
//               of salespeople engaged in social media are outselling their peers
//               who are not. And nearly 40% of small businesses do not use social
//               media. Even more concerning is that an additional 16% are unlikely
//               to use social media for business at all.
//               <br />
//               <br />
//               We create miracles in an instant. We provide top-notch service in
//               exchange for your trust and help you gain the upper hand among
//               competitors. We know how to change the market&apos;s course and
//               drive customers toward you.
//             </p>
//           </div>
//         </div>

//         <div className="we-are-img hidden md:block order-1 md:order-2">
//           <div className="we-are-banner-img">
//             <Image src={image.social} alt="SEM Marketing" />
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Social;
