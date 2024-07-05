"use client";
import Image from "next/image";
import Link from "next/link";
import image from "../Images/image";
import {
  SpeakerWaveIcon,
  CurrencyDollarIcon,
  ChartBarIcon,
  ComputerDesktopIcon,
  RocketLaunchIcon,
  CommandLineIcon,
  CodeBracketIcon,
} from "@heroicons/react/24/outline";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { useState, useRef } from "react";
import { useSelectedLayoutSegment } from "next/navigation";
import { motion } from "framer-motion";

const products = [
  {
    name: "Digital Marketing",
    description: "Maximizing online presence through strategic promotion.",
    href: "/services/digital-marketing",
    icon: SpeakerWaveIcon,
  },
  {
    name: "PPC Service",
    description: "Effective Advertising Through Pay-Per-Click",
    href: "/services/ppc-service",
    icon: CurrencyDollarIcon,
  },
  {
    name: "SMO Service",
    description: "Boosting Online Presence through SMO Services",
    href: "/services/smo-service",
    icon: ChartBarIcon,
  },
  {
    name: "SEO Service",
    description: "Boosting online presence through expert optimization",
    href: "/services/seo-service",
    icon: ComputerDesktopIcon,
  },
  {
    name: "Social Marketing",
    description: "Promoting Brands Through Social Media Engagement.",
    href: "/services/social-marketing",
    icon: RocketLaunchIcon,
  },
  {
    name: "Website Optimization",
    description: "Maximizing website performance for optimal results.",
    href: "/services/website-optimization",
    icon: CommandLineIcon,
  },
  {
    name: "Web Development",
    description: "Creating dynamic websites with coding expertise.",
    href: "/services/web-development",
    icon: CodeBracketIcon,
  },
];

const Header = () => {
  const [hover, setHover] = useState(false);
  const segment = useSelectedLayoutSegment();
  const dropdownRef = useRef(null);

  const handleMouseEnter = () => {
    setHover(true);
  };

  const handleMouseLeave = () => {
    setHover(false);
  };

  return (
    <header
      ref={dropdownRef}
      className={`sticky top-0 z-50 bg-black border-b border-gray-200`} // Ensure bg is always black
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between p-3 lg:px-4">
        <div className="flex flex-1">
          <Link href="/" className="-m-1.5 p-1.5 flex items-center">
            <Image
              className="h-16 w-auto"
              src={image.logo3}
              alt="logo image of the website"
              width={500}
              height={500}
            />
            <span className="ml-2 text-xl font-bold text-white">
              SOCIAL PULSE
            </span>
          </Link>
        </div>

        <div className="hidden md:flex justify-center items-center gap-0 lg:gap-7 text-white">
          <motion.div whileHover={{ scale: 1.1 }}>
            <Link
              href="/"
              className="px-3 py-2 text-sm navlink-white active-white"
            >
              Home
            </Link>
          </motion.div>

          <motion.div whileHover={{ scale: 1.1 }}>
            <Link href="/about" className="px-3 py-2 text-sm navlink-white">
              About Us
            </Link>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.1 }}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <button className="px-3 py-2 text-sm flex items-center navlink-white">
              Our Services
              <ChevronDownIcon
                className={`h-5 w-5 flex-none ${hover ? "rotate-180" : ""}`}
                aria-hidden="true"
              />
            </button>
          </motion.div>

          <motion.div whileHover={{ scale: 1.1 }}>
            <Link href="/portfolio" className="px-3 py-2 text-sm navlink-white">
              Portfolio
            </Link>
          </motion.div>

          <motion.div whileHover={{ scale: 1.1 }}>
            <Link href="/contact" className="px-3 py-2 text-sm navlink-white">
              Contact Us
            </Link>
          </motion.div>
        </div>

        <div className="flex flex-1 justify-end">
          <a
            href="tel:+918451951123"
            target="_blank"
            rel="noopener noreferrer"
            className="navbar-btn shadow-lg"
          >
            Call Us
          </a>
        </div>
      </div>

      <div
        className={`p-4 absolute z-99 top-[5.5rem] lg:left-[20%] lg:right-[20%] bg-black rounded-lg shadow-lg grid grid-cols-2 transition-all duration-300 ease-in-out ${
          hover ? "opacity-100 visible mt-2" : "opacity-0 invisible"
        }`}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {products.map((item) => (
          <div
            key={item.name}
            className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-800"
          >
            <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-900 group-hover:bg-black">
              <item.icon
                className="h-6 w-6 text-white group-hover:text-indigo-200"
                aria-hidden="true"
              />
            </div>
            <div className="flex-auto">
              <Link
                href={item.href}
                className="block font-semibold text-white group-hover:text-indigo-200"
              >
                {item.name}
                <span className="absolute inset-0" />
              </Link>
              <p className="mt-1 text-gray-300 group-hover:text-indigo-200">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </header>
  );
};

export default Header;
