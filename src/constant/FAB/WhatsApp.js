import Image from "next/image";
import image from "../Images/image";

const WhatsApp = () => {
  return (
    <>
      <a
        className="fixed bottom-1/2 -right-10 py-2 px-3 rounded-lg bg-[#29A71A] text-white z-20 drop-shadow-lg font-semibold flex items-center gap-x-1 -rotate-90"
        hre
        // href="https://wa.me/1234567890"
        target="_blank"
        rel="noopener noreferrer"
        href="https://api.whatsapp.com/send?phone=8451951123&text=I%20came%20across%20your%20website%20,I%20would%20like%20to%20have%20more%20information%20about%20your%20business "
      >
        <Image src={image.whatsapp} height={25} width={25} alt="whats app" />
        <p>What&apos;s App</p>
      </a>
      {/*    <a className="fixed bottom-24 right-4 md:right-8 md:bottom-8 z-20 drop-shadow-lg hidden md:block" href="https://wa.me/7906514988">
    <Image src={image.whatsapp} height={50} width={50} alt="whats app"/>
  </a> */}
    </>
  );
};

export default WhatsApp;
