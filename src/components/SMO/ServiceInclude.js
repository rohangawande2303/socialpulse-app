'use client';
import { motion } from 'framer-motion';
import {
  ChartBarIcon,
  DocumentMagnifyingGlassIcon,
  MagnifyingGlassIcon,
  PresentationChartBarIcon,
  UserCircleIcon,
} from '@heroicons/react/24/outline';

const variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const items = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
    },
  },
};

const ServiceInclude = () => {
  const services = [
    {
      heading: 'Account Setup',
      desc: "Everything was he's help designer, she's something cat that lively. In then to written to period, stand understood.",
      imgUrl: UserCircleIcon,
      hoverBg: 'bg-pink-600 hover:bg-pink-700',
      iconColor: 'text-pink-600',
    },
    {
      heading: 'Keyword Selection',
      desc: "Everything was he's help designer, she's something cat that lively. In then to written to period, stand understood.",
      imgUrl: MagnifyingGlassIcon,
      hoverBg: 'bg-blue-600 hover:bg-blue-700',
      iconColor: 'text-blue-600',
    },
    {
      heading: 'Bid Management',
      desc: "Everything was he's help designer, she's something cat that lively. In then to written to period, stand understood.",
      imgUrl: ChartBarIcon,
      hoverBg: 'bg-yellow-600 hover:bg-yellow-700',
      iconColor: 'text-yellow-600',
    },
    {
      heading: 'Analysis & Reporting',
      desc: "Everything was he's help designer, she's something cat that lively. In then to written to period, stand understood.",
      imgUrl: DocumentMagnifyingGlassIcon,
      hoverBg: 'bg-purple-600 hover:bg-purple-700',
      iconColor: 'text-purple-600',
    },
  ];

  return (
    <section className="py-16 md:py-32 bg-black">
      <div className="app__container">
        <div className="row">
          <div className="primary-heading pb-12 text-center text-white">
            <h2>
              What Do Our <br />
              <span className="highlight">SMO Services</span> Include
            </h2>
          </div>
        </div>
        <motion.div
          variants={variants}
          initial="hidden"
          whileInView="show"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4"
        >
          {services.map((service, key) => (
            <motion.div variants={items} key={key}>
              <div className={`common-single-card px-6 py-12 ${service.hoverBg} rounded-lg transition-all duration-300`}>
                <div className={`common-card-icon mx-auto w-[4.5rem] bg-black p-4 shadow-lg rounded-full ${service.iconColor}`}>
                  <service.imgUrl className="w-10 h-10" />
                </div>
                <div className="text-center text-black">
                  <div className="card-title">
                    <h3 className="text-xl font-bold mt-6 mb-3">{service.heading}</h3>
                  </div>
                  <p className="text-black">{service.desc}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ServiceInclude;
