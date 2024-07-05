import Image from "next/image"
import './WebHero.css'
import image from "@/constant/Images/image"

const WebHero = () => {
  return (
    <section className="app__web-hero bg-black">
      <div className="mx-auto max-w-7xl p-6 lg:px-8">
        <div className="flex items-center justify-between flex-col lg:flex-row pt-12 md:pt-24 pb-20 md:pb-36">
          <div className="flex-1 text-white">
            <h1 className="text-4xl lg:text-6xl font-extrabold mb-4 capitalize">We Love <span className="highlight">designing</span> websites!<br/>We Love <span className="highlight">creating</span> clients Brand</h1>
            <p className="text-base mb-4 app__text">WebDev has experts who are experienced and know how and what specifications of a company or a product are to be showcased.</p>
            <p className="text-base mb-4 app__text">You get a beautiful website within 4 days</p>
          </div>
          <div className="flex-1">
            <Image src={image.webdev2} alt="dm" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default WebHero;
