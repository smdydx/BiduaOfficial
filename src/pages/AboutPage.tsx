// app/about/page.tsx
"use client";

import { motion, useMotionTemplate, useMotionValue, animate, time } from "framer-motion";
import { useEffect, useState } from "react";

const AboutPage = () => {
  const [isHovering, setIsHovering] = useState(-1);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth scrolling setup
  useEffect(() => {
    document.documentElement.style.scrollBehavior = "smooth";
    return () => {
      document.documentElement.style.scrollBehavior = "auto";
    };
  }, []);

  // Background gradient animation
  const backgroundImage = useMotionTemplate`radial-gradient(600px at ${mouseX}px ${mouseY}px, rgba(29, 78, 216, 0.15), transparent 80%)`;

  const handleMouseMove = (e: React.MouseEvent) => {
    const { clientX, clientY } = e;
    mouseX.set(clientX);
    mouseY.set(clientY);
  };

  // Core data
  const coreValues = [
    {
      title: "Innovation-First",
      desc: "Every idea is a launchpad to transformation.",
      icon: "💡"
    },
    {
      title: "Pan-India Execution",
      desc: "Rural and urban coverage for every solution.",
      icon: "🗺️"
    },
    {
      title: "Trust & Transparency",
      desc: "Strong ethics, secure systems, and verified services.",
      icon: "🤝"
    },
    {
      title: "Scalability & Speed",
      desc: "Rapid go-to-market execution in each division.",
      icon: "⚡"
    },
  ];

  const categories = [
    {
      title: "Human Verification & Safety",
      items: [
        "Employee, maid, driver & tenant physical verification",
        "Video/photo verification & live location tagging",
        "Verified maid, tenant & worker marketplace",
        "DNA-based family trace system",
        "Organ donation NGO initiative",
      ],
      color: "from-blue-600 to-blue-400" 
    },
    {
      title: "Hospitality & Sleeping Pods",
      items: [
        "NAPLOO sleeping pod manufacturing and hotel chains",
        "Capsule pods for highways, airports, hospitals, IT parks",
        "Hotel franchise models and B&B microhotels",
        "Property referral & leaseback investment system",
      ],
      color: "from-blue-600 to-blue-400" 
    },
    {
      title: "Tech & Smart Gadgets",
      items: [
        "USB with online + offline cloud sync (BIDUA CloudDrive)",
        "Powerbank with Wi-Fi, emergency light, hidden cam",
        "Transparent LED business cards",
        "Smart pendrive with SIM + WiFi upload",
        "NFC digital visiting cards",
	      "Video brochure and digital business cards",
	      "Mobile anti-theft & remote locking apps",
      ],
      color: "from-blue-600 to-blue-400" 
    },
    {
      title: "Agriculture, Farming & Plantation",
      items: [
        "Sandalwood, Mahogany & Moringa plantations",
        "Aeroponic & vertical farming systems",
        "Omega-3 enriched egg production",
        "Vanilla cultivation support",
        "Cow/buffalo rural trade platform",
      ],
      color: "from-blue-600 to-blue-400" 
    },
    {
      title: "Health, Lifestyle & Beauty",
      items: [
        "Anti-dark spot, melanin-reducing cream (Day & Night)",
        "Weight loss & obesity care centers",
        "Old age homes & Alzheimer's care Units",
        "Oxygen bars & wellness lounges",
        "Crystal elixir water bottles",
      ],
      color: "from-blue-600 to-blue-400" 
    },

    
    {
      title: "Energy, Environment & Green Tech",
      items: [
        "Pyramid-based energy models",
        "Free electricity using magnetic motors",
        "Rubber bricks from tyre scrap",
        "Eco-friendly ACs without compressors",
        "Smart immersion rods with timers",
      ],
      color: "from-blue-600 to-blue-400" 
    },

    {
      title: "Blockchain, Crypto & Web3",
      items: [
        "Blockchain-based crowdfunding & lottery",
        "Token creation platforms (BIDUA Token)",
        "P2P fundraise platform over blockchain",
        "Crypto exchange development",
        "Decentralized community donation system",
      ],
      color: "from-blue-600 to-blue-400" 
    },
    
    {
      title: "Education & Rural Upliftment",
      items: [
        "Rural kids’ parks and tech zones",
        "Play school chain in semi-urban areas",
        "Ed-tech apps for tier 2/3 towns",
        "Employment generation platform",
        "Hostel-based learning pods",
      ],
      color: "from-blue-600 to-blue-400" 
    },
    
    {
      title: "IT Services & Software (BIDUA IT Connect)",
      items: [
        "CRM, ERP, HRM, Inventory, School ERP",
        "Mobile apps (food, cab, learning, dating, rental)",
        "Matrimony, job portal, classified platforms",
        "Blockchain node hosting & cloud solutions",
        "Secure RDP & VPN hosting",
        ],
        color: "from-blue-600 to-blue-400" 
    },

    {
      title: "Automotive & Mobility",
      items: [
        "Used car dealership chain",
        "Mobile car wash service",
        "Motorcycle + car on-demand servicing",
        "Smart tyre center cap accessories",
        ],    
        color: "from-blue-600 to-blue-400" 
    },
     
    {
      title: "Retail, FMCG & OEM",
      items: [
        "OEM product supply across India (FMCG, gadgets, etc.)",
        "Grocery delivery (B2C + B2B models)",
        "Frozen food & packaged food brands",
        "Water bottle, spices, herbal items, health products",
        "Amazon/Flipkart/Indiamart seller assistance",
        ],
        color: "from-blue-600 to-blue-400" 
    },

    {
      title: "Real Estate, Rental & Infra",
      items: [
        "Brokerless rental portal",
        "Hostel, hotel, PG management systems",
        "Saadi.com-style matrimonial + real estate",
        "House construction, concrete recycling",
        "Smart kitchen solutions (Annapurna kitchens)",
        ],
        color: "from-blue-600 to-blue-400" 
    },

    {
      title: "Miscellaneous Futuristic Ideas",
      items: [
        "Haunted video content app",
        "Cat parks (urban pet community)",
        "Live newspaper with QR-linked video",
        "Emergency bed for hospital wait times",
        "Lehnga folding machine",
        "Milk spill stopper",
        "Remote-controlled mosquito repellant with cam",
        "Recharge + wallet integration portal",
        ],
        color: "from-blue-600 to-blue-400" 
    },



  ];

  return (
    <div 
      className="min-h-screen w-full overflow-x-hidden relative"
      onMouseMove={handleMouseMove}
    >
      {/* Animated gradient background */}
      <motion.div
        className="fixed inset-0 -z-50 overflow-hidden"
        style={{ backgroundImage }}
      >
        {/* Dynamic smoke particles */}
        {[...Array(15)].map((_, i) => {
          const size = Math.random() * 200 + 100;
          const duration = Math.random() * 20 + 20;
          const delay = Math.random() * 10;
          const x = Math.random() * 100;
          const y = Math.random() * 100;
          
          return (
            <motion.div
              key={i}
              initial={{
                opacity: 0,
                x: `${x}vw`,
                y: `${y}vh`,
                scale: 0.5 + Math.random(),
              }}
              animate={{
                opacity: [0, 0.2, 0],
                x: `${x + (Math.random() * 40 - 20)}vw`,
                y: `${y + (Math.random() * 40 - 20)}vh`,
                transition: {
                  duration: duration,
                  delay: delay,
                  repeat: Infinity,
                  repeatType: "reverse",
                  ease: "linear",
                },
              }}
              className={`absolute rounded-full bg-gradient-to-br ${
                i % 3 === 0 
                  ? "from-blue-300/30 to-pink-300/30" 
                  : i % 3 === 1 
                    ? "from-purple-300/30 to-blue-300/30" 
                    : "from-pink-300/30 to-purple-300/30"
              } blur-[80px]`}
              style={{
                width: `${size}px`,
                height: `${size}px`,
              }}
            />
          );
        })}
      </motion.div>

      <div className="container mx-auto px-4 py-12 md:py-60 relative z-10">
        {/* Hero section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-24"
        >
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-3xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-400 mb-8 leading-tight"
          >
            About BIDUA Industries
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-sm md:text-lg text-gray-500 max-w-4xl mx-auto leading-relaxed"
          >
           BIDUA Industries Pvt Ltd is an ambitious Indian conglomerate founded with the mission to transform bold ideas into sustainable ventures.
           From high-tech product innovation to everyday community services, BIDUA operates at the intersection of technology, infrastructure, and social impact.
           We aim to create a future-ready India by solving real-world problems across urban and rural landscapes.

          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6 }}
            className="mt-12"
          >
            <div className="inline-block relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-300 to-gray-300 rounded-xl blur opacity-75 group-hover:opacity-100 transition duration-200"></div>
              <button className="relative px-8 py-4 bg-white rounded-xl text-blue-600 font-bold text-lg leading-none">
                Explore Our Ventures
              </button>
            </div>
          </motion.div>
        </motion.section>

        {/* Vision card - Floating 3D effect */}
        <motion.section
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, type: "spring" }}
          viewport={{ once: true, margin: "-100px" }}
          className="mb-28"
        >
          <motion.div
            whileHover={{ y: -10 }}
            className="relative"
          >
            <div className="absolute -inset-4 bg-gradient-to-br from-blue-600/20 via-pink-600/20 to-purple-600/20 rounded-3xl blur-xl opacity-70"></div>
            <div className="relative bg-white/90 backdrop-blur-xl rounded-2xl shadow-2xl overflow-hidden border border-white/20">
              <div className="p-10 md:p-14">
                <motion.h2 
                  className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-400 mb-6"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  Our Vision
                </motion.h2>
                <motion.p
                  className="text-lg text-gray-500 leading-relaxed"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 }}
                  viewport={{ once: true }}
                >
                  To become India’s most visionary multi-sector enterprise by creating 100+ meaningful, scalable, and futuristic businesses that directly impact millions of lives, empower local economies, and lead global innovation.
                </motion.p>
              </div>
            </div>
          </motion.div>
        </motion.section>

        {/* Core values - Interactive orb cards */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: "-100px" }}
          className="mb-28"
        >
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-400 mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
          >
            Our Core Values
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {coreValues.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 + 0.3, type: "spring" }}
                viewport={{ once: true, margin: "-50px" }}
                whileHover={{ y: -15 }}
                onMouseEnter={() => setIsHovering(index)}
                onMouseLeave={() => setIsHovering(-1)}
                className="relative h-full"
              >
                <div className={`absolute -inset-0.5 rounded-2xl blur opacity-75 transition duration-500 ${
                  isHovering === index ? 'opacity-100' : ''
                } ${
                  index % 4 === 0 ? 'bg-blue-500/30' :
                  index % 4 === 1 ? 'bg-purple-500/30' :
                  index % 4 === 2 ? 'bg-pink-500/30' : 'bg-indigo-500/30'
                }`}></div>
                <div className="relative h-full bg-white/90 backdrop-blur-md rounded-2xl p-8 shadow-lg border border-white/20 overflow-hidden">
                  <div className={`absolute -right-10 -top-10 w-32 h-32 rounded-full opacity-20 blur-xl ${
                    index % 4 === 0 ? 'bg-blue-400' :
                    index % 4 === 1 ? 'bg-purple-400' :
                    index % 4 === 2 ? 'bg-pink-400' : 'bg-indigo-400'
                  }`}></div>
                  <div className="relative z-10">
                    <div className={`text-4xl mb-4 ${
                      index % 4 === 0 ? 'text-blue-500' :
                      index % 4 === 1 ? 'text-purple-500' :
                      index % 4 === 2 ? 'text-pink-500' : 'text-indigo-500'
                    }`}>
                      {value.icon}
                    </div>
                    <h3 className="text-xl font-bold text-gray-800 mb-3">{value.title}</h3>
                    <p className="text-gray-600">{value.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Venture categories - Staggered floating cards */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: "-100px" }}
          className="mb-28"
        >
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-400 mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
          >
            Idea's Lists under BIDUA Vision
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categories.map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ 
                  delay: index * 0.1, 
                  type: "spring",
                  stiffness: 100,
                  damping: 10
                }}
                viewport={{ once: true, margin: "-50px" }}
                whileHover={{ 
                  y: -10,
                  boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
                }}
                className={`relative group overflow-hidden rounded-2xl shadow-xl bg-gradient-to-br ${category.color} h-full`}
              >
                <div className="absolute inset-0 bg-white/5 backdrop-blur-sm"></div>
                <div className="relative z-10 p-8 h-full flex flex-col">
                  <h3 className="text-2xl font-bold text-white mb-6">{category.title}</h3>
                  <ul className="space-y-3 flex-grow">
                    {category.items.map((item, itemIndex) => (
                      <motion.li 
                        key={itemIndex}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: itemIndex * 0.05 + index * 0.1 }}
                        viewport={{ once: true }}
                        className="flex items-start text-white/90"
                      >
                        <span className="inline-block w-2 h-2 rounded-full mt-2 mr-3 bg-white/80 flex-shrink-0"></span>
                        <span>{item}</span>
                      </motion.li>
                    ))}
                  </ul>
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 + 0.3 }}
                    viewport={{ once: true }}
                    className="mt-8"
                  >
                    <button className="px-6 py-2 bg-white/10 backdrop-blur-md rounded-lg text-white border border-white/20 hover:bg-white/20 transition-all">
                      Explore
                    </button>
                  </motion.div>
                </div>
                
                {/* Floating orb animation */}
                <motion.div
                  initial={{ x: -50, y: -50 }}
                  animate={{
                    x: [0, 20, 0, -20, 0],
                    y: [0, 20, 0, -20, 0],
                  }}
                  transition={{
                    duration: 15 + index * 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className={`absolute -right-20 -bottom-20 w-40 h-40 rounded-full opacity-20 blur-xl ${
                    category.color.includes('blue') ? 'bg-blue-400' :
                    category.color.includes('purple') ? 'bg-purple-400' :
                    category.color.includes('pink') ? 'bg-pink-400' :
                    category.color.includes('green') ? 'bg-green-400' :
                    category.color.includes('red') ? 'bg-red-400' : 'bg-indigo-400'
                  }`}
                ></motion.div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Final CTA - Parallax effect */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: "-100px" }}
          className="relative rounded-3xl overflow-hidden mb-28"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-blue-600/90 to-pink-600/90 z-0"></div>
          <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] bg-[length:40px_40px] opacity-10 mix-blend-overlay z-0"></div>
          
          <motion.div
            initial={{ y: 50 }}
            whileInView={{ y: 0 }}
            transition={{ type: "spring", stiffness: 50 }}
            viewport={{ once: true }}
            className="relative z-10 p-12 md:p-20 text-center"
          >
            <motion.h2
              className="text-3xl md:text-5xl font-bold text-white mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              viewport={{ once: true }}
            >
              Join the Innovation Revolution
            </motion.h2>
            
            <motion.p
              className="text-xl text-white/90 mb-12 max-w-3xl mx-auto leading-relaxed"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              viewport={{ once: true }}
            >
              BIDUA is not just a company — it's a movement to engineer India's future. With over 100 business models already mapped, we're just getting started.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.6, type: "spring" }}
              viewport={{ once: true }}
              className="flex flex-col sm:flex-row justify-center gap-4"
            >
              <button className="px-8 py-4 bg-white rounded-xl text-blue-600 font-bold text-lg leading-none hover:bg-gray-100 transition-all shadow-lg hover:shadow-xl">
                Partner With Us
              </button>
              <button className="px-8 py-4 bg-transparent rounded-xl text-white font-bold text-lg leading-none border-2 border-white hover:bg-white/10 transition-all shadow-lg hover:shadow-xl">
                Explore Careers
              </button>
            </motion.div>
          </motion.div>
          
          {/* Floating elements */}
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className={`absolute ${
                i % 3 === 0 ? 'bg-blue-400/30' :
                i % 3 === 1 ? 'bg-pink-400/30' : 'bg-purple-400/30'
              } rounded-full blur-xl`}
              initial={{
                opacity: 0,
                x: Math.random() * 200 - 100,
                y: Math.random() * 200 - 100,
                scale: 0.5 + Math.random(),
              }}
              animate={{
                opacity: [0.3, 0.6, 0.3],
                x: Math.random() * 100 - 50,
                y: Math.random() * 100 - 50,
                transition: {
                  duration: 15 + Math.random() * 10,
                  repeat: Infinity,
                  repeatType: "reverse",
                  ease: "easeInOut",
                },
              }}
              style={{
                width: `${100 + Math.random() * 150}px`,
                height: `${100 + Math.random() * 150}px`,
              }}
            />
          ))}
        </motion.section>

        {/* Signature quote */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center"
        >
          <motion.div
            initial={{ scale: 0.9 }}
            whileInView={{ scale: 1 }}
            transition={{ type: "spring" }}
            viewport={{ once: true }}
            className="inline-block"
          >
            <div className="text-2xl md:text-3xl italic font-medium bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-pink-600 mb-4">
              "If it can improve lives, we will build it."
            </div>
            <div className="text-lg text-gray-600 font-bold">
              — Team BIDUA
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default AboutPage;