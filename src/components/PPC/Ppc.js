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

// import image from '@/constant/Images/image'
// import Image from 'next/image'

// const Ppc = () => {
//   return (
//     <section className="we-are-area py-16 md:py-32 flex items-center">
//     <div className="app__container grid grid-cols-1 md:grid-cols-2 gap-8 relative">
//       <div className="we-are-img">
//         <div className="we-are-banner-img">
//           <Image src={image.aboutAni} alt="" />
//         </div>
//       </div>
//         <div className="my-auto">
//           <div className="we-are-content">
//             <div className="section-title">
//               <h2 className="pb-12 primary-heading">What is <span className='highlight'>Pay Per Click</span> Advertising (PPC)</h2>
//             </div>

//             <p className='app__text'>
//             <strong>Have you seen the famous trilogy Unbreakable, Split, and Glass?</strong><br/><br/>
//             Split is the story of a person with 24 different personalities. It is thrilling and horrifying, but in the whole movie, all his personalities represent different traits and parts of his brain.
//             </p>

//             <button className='primary-btn mt-12 shadow-lg'>Get Started</button>
//           </div>
//         </div>
//       </div>
//   </section>
//   )
// }

// export default Ppc