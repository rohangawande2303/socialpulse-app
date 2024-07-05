import image from "@/constant/Images/image";
import Image from "next/image";
import "./AboutUs.css";

const AboutUs = () => {
  return (
    <section className="we-are-area py-16 md:py-32 flex items-center">
      <div className="app__container grid grid-cols-1 md:grid-cols-2 gap-8 relative">
        <div className="we-are-img">
          <div className="we-are-banner-img">
            <Image src={image.banner} alt="" />
          </div>
          <div className="we-are-animation">
            <Image src={image.like} alt="" className="h2-like" />
            <Image src={image.heart} alt="" className="h2-heart" />
            <Image src={image.message} alt="" className="h2-message" />
            <Image src={image.square} alt="" className="h2-square" />
            <Image src={image.circle} alt="" className="moving-circle" />
            <Image src={image.circle2} alt="" className="moving-circle-right" />
          </div>
        </div>
        <div>
          <div className="">
            <div className="we-are-content">
              <div className="section-title">
                <h2 className="pb-12 primary-heading">
                  About <span className="highlight">Us</span>
                </h2>
              </div>

              <p className="app__text pb-12 text-2xl">
                We&apos;re Social Pulse, a digital marketing agency fueled by
                passion and powered by expertise. We craft magnetic campaigns
                and data-driven strategies to amplify your brand voice and
                ignite growth. Think of us as your secret weapon in the
                ever-evolving digital jungle.
                <br />
              Ready to conquer the online world? Let&apos;s chat!
              </p>
              <div>
                <a href="#">
                  <button className="primary-btn shadow-lg">Read More</button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
