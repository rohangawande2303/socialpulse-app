import image from "@/constant/Images/image";
import { CheckCircleIcon } from "@heroicons/react/24/outline";
import Image from "next/image";

const Smo = () => {
  return (
    <section className="we-are-area pb-16 md:pb-32 flex items-center">
      <div className="app__container grid grid-cols-1 md:grid-cols-2 gap-8 relative">
        <div className="my-auto order-2 md:order-1">
          <div className="we-are-content">
            <div className="section-title mt-0">
              <h2 className="pb-12 text-3xl md:text-4xl font-bold primary-heading mt-0">
                What is <span className="highlight">Social Media Optimization?</span>
              </h2>
            </div>

            <p className="text-lg md:text-xl app__text mt-0">
              Social Media Optimization is a digital marketing method that focuses on making your social media platforms engaging enough to bring traffic to your website. Some of the major roles of SMO are:
            </p>

            <ul role="list" className="mt-8 space-y-8 text-lg md:text-xl app__text">
              <li className="flex gap-x-3">
                <CheckCircleIcon
                  className="mt-1 h-6 w-6 flex-none text-indigo-600"
                  aria-hidden="true"
                />
                <span>Create shareable content</span>
              </li>
              <li className="flex gap-x-3">
                <CheckCircleIcon
                  className="mt-1 h-6 w-6 flex-none text-indigo-600"
                  aria-hidden="true"
                />
                <span>Make sharing content easy</span>
              </li>
              <li className="flex gap-x-3">
                <CheckCircleIcon
                  className="mt-1 h-6 w-6 flex-none text-indigo-600"
                  aria-hidden="true"
                />
                <span>Providing value to users</span>
              </li>
              <li className="flex gap-x-3">
                <CheckCircleIcon
                  className="mt-1 h-6 w-6 flex-none text-indigo-600"
                  aria-hidden="true"
                />
                <span>Rewarding loyal followers</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="we-are-img order-1 md:order-2">
          <div className="we-are-banner-img">
            <Image src={image.semMarketing} alt="SEM Marketing" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Smo;
