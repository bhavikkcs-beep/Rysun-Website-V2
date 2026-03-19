import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, BrainCircuit, Database, Zap, Globe, Award, 
  CheckCircle2, Target, Lightbulb, Users, Shield, Rocket, 
  MapPin, Building, ChevronRight, BarChart, ChevronLeft
} from 'lucide-react';

export default function AboutUsPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [hoveredIndustry, setHoveredIndustry] = useState<number>(0);
  const [activeTimelineIndex, setActiveTimelineIndex] = useState<number>(0);

  const values = [
    { icon: <Target className="w-6 h-6" />, title: 'Create Impact', desc: 'We focus on delivering measurable business outcomes and sustained value for our clients.', image: 'https://picsum.photos/seed/rysun-impact/600/400' },
    { icon: <Lightbulb className="w-6 h-6" />, title: 'Be Curious', desc: 'We continuously learn, explore new technologies, and challenge the status quo.', image: 'https://picsum.photos/seed/rysun-curious/600/400' },
    { icon: <Rocket className="w-6 h-6" />, title: 'Be Agile', desc: 'We adapt quickly, move fast, and embrace change to stay ahead in a dynamic world.', image: 'https://picsum.photos/seed/rysun-agile/600/400' },
    { icon: <Users className="w-6 h-6" />, title: 'Be Cohesive', desc: 'We collaborate seamlessly across teams, geographies, and disciplines.', image: 'https://picsum.photos/seed/rysun-cohesive/600/400' },
    { icon: <Zap className="w-6 h-6" />, title: 'Be Bold', desc: 'We take calculated risks, innovate fearlessly, and lead with conviction.', image: 'https://picsum.photos/seed/rysun-bold/600/400' },
    { icon: <Shield className="w-6 h-6" />, title: 'Be Trusted', desc: 'We act with integrity, transparency, and a deep sense of responsibility.', image: 'https://picsum.photos/seed/rysun-trusted/600/400' }
  ];

  const capabilities = [
    { icon: <BrainCircuit className="w-10 h-10" />, title: 'AI', desc: 'AI and machine learning solutions that transform business operations through predictive intelligence and automation.' },
    { icon: <Database className="w-10 h-10" />, title: 'Data', desc: 'Data engineering, analytics, and insight-driven platforms that enable organizations to become truly data-centric.' },
    { icon: <Zap className="w-10 h-10" />, title: 'Digital', desc: 'Modern digital platforms, customer experience engineering, and cloud-native applications that power intelligent enterprises.' }
  ];

  const industries = [
    { name: 'Retail & Ecommerce', desc: 'AI-powered customer experience platforms and intelligent retail operations.', img: 'retail' },
    { name: 'Healthcare', desc: 'Secure, data-driven healthcare platforms that improve patient outcomes and operational efficiency.', img: 'health' },
    { name: 'High-Tech', desc: 'AI-driven product engineering and innovation for digital product companies.', img: 'tech' },
    { name: 'Financial Services', desc: 'AI-driven fraud detection, risk management, and personalized banking experiences.', img: 'finance' }
  ];

  const strengths = [
    'Leadership in Data Strategy',
    'AI-first Digital Innovation',
    'Product Engineering Expertise',
    'Industry Domain Knowledge',
    'Full-stack Technology Solutions',
    'Consulting + Engineering Execution'
  ];

  const timeline = [
    { year: '2001', title: 'The beginning', desc: 'Founded in August 2001 as Krish Technologies. Product engineering services focus. First focus verticals Retail and Entertainment.' },
    { year: '2003', title: 'First CX solutions', desc: 'Changed the face of the movie and mall going experience in the country. Built a multi-brand and multi-lingual e-marketplace for a Polish retailer.' },
    { year: '2006', title: 'Making headlines', desc: 'Top market share in the Gujarat entertainment industry and second largest pan-India. E-procurement and live auction platform for logistics. Team size 20. First corporate office.' },
    { year: '2007', title: 'The Launchpad', desc: 'Set up our first Enterprise Application Development & Delivery Center. Specialized department for Web & Mobile app development. Incorporated as KCS Private Limited. Team grew to 50.' },
    { year: '2008', title: 'Designful thinking', desc: 'UX UI Design as a focused competency. Offshore product engineering partner for first US-based customers. First major win in Financial Services. Forayed in the Middle East.' },
    { year: '2009', title: 'Putting quality in focus', desc: 'Became ISO 9001:2008 certified.' },
    { year: '2010', title: 'Health matters', desc: 'New division focused on Healthcare. ML-based remote health monitoring platform and digital health wallet. Ran successful clinical trials with leading American university. Collaborated with international non-profits on mother and child health.' },
    { year: '2011', title: 'Big strides', desc: 'Dropped anchor in USA with onshore development center. Acquired first global large enterprise account for Technology Consulting. Dedicated SharePoint competency. Team size 75 members.' },
    { year: '2012', title: 'Golden wins', desc: 'Became Microsoft Gold certified partner. Award-winning consumer app for leading power utility in India. Breaking ground with product and data services across EMEA.' },
    { year: '2013', title: 'Data everywhere', desc: 'Dedicated COE for Data & Analytics. Touchdown in UK. New products launched - iNet and eDocs. Customers in 15 countries.' },
    { year: '2014', title: 'Covering new ground', desc: 'Launched operations in South Africa. New product for Logistics domain - TrackNet. Pelican gets new wings. Team of 120.' },
    { year: '2015', title: 'Quality, level up', desc: 'Launched Smart Town, a residential society management app and platform. ISO 27001 certified. Multi-language app development.' },
    { year: '2018', title: 'Expanding the edge', desc: 'CMMi Level 3 for our project practices. Team size 275. Added City Gold office. Presence in Bay area.' },
    { year: '2019', title: 'Purpose driven', desc: 'Improved quality of life for persons with special needs with award winning app.' },
    { year: '2020', title: 'Good governance', desc: 'Enabling citizen services with User Experience design. Dedicated COE for Microsoft Power Platform. Set up Pune office.' },
    { year: '2021', title: 'Scale and speed', desc: 'Set up Florida office. CMMI Level 5 for V2.0 for DEV. Acquired Biarca, Inc. to build a conscious culture of security. Delivery center at Hyderabad.' },
    { year: '2022', title: 'Moving in on innovation', desc: 'Facial recognition solution in education domain. State-of-the-art research and delivery centers in Ahmedabad and Pune. Team size of 500+.' },
    { year: '2023', title: 'Powering up possibilities', desc: 'New, re-energized identity.' }
  ];

  return (
    <div className="w-full bg-white font-sans text-slate-900">
      
      {/* 1. Hero Section */}
      <section className="relative min-h-[60vh] lg:min-h-[70vh] flex items-center pb-10 overflow-hidden bg-slate-900">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-indigo-950 to-slate-900" />
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMjAiIGN5PSIyMCIgcj0iMSIgZmlsbD0icmdiYSgyNTUsIDI1NSwgMjU1LCAwLjA1KSIvPjwvc3ZnPg==')] opacity-40" />
        
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-blue-400 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                opacity: Math.random() * 0.5 + 0.1
              }}
              animate={{
                y: [0, -30, 0],
                opacity: [0.1, 0.8, 0.1],
                scale: [1, 1.5, 1]
              }}
              transition={{
                duration: Math.random() * 3 + 2,
                repeat: Infinity,
                ease: "easeInOut",
                delay: Math.random() * 2
              }}
            />
          ))}
          <svg className="absolute inset-0 w-full h-full opacity-20" viewBox="0 0 100 100" preserveAspectRatio="none">
            <motion.path 
              d="M0,50 Q25,30 50,50 T100,50" 
              fill="none" 
              stroke="url(#grad1)" 
              strokeWidth="0.5"
              animate={{ d: ["M0,50 Q25,30 50,50 T100,50", "M0,50 Q25,70 50,50 T100,50", "M0,50 Q25,30 50,50 T100,50"] }}
              transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
            />
            <defs>
              <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#3b82f6" />
                <stop offset="100%" stopColor="#8b5cf6" />
              </linearGradient>
            </defs>
          </svg>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full pt-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="max-w-3xl">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-blue-400 text-xs font-medium mb-5 backdrop-blur-sm">
                  <Globe className="w-3.5 h-3.5" />
                  <span>About Rysun</span>
                </div>
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white tracking-tight mb-5 leading-tight">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">25 Years of AI, Data</span> & Digital Innovation
                </h1>
                <p className="text-base text-gray-300 mb-6 leading-relaxed max-w-lg">
                  Rysun is an AI, Data, and Digital innovation company with a 25-year legacy of delivering technology-led business transformation. We partner with global enterprises to reimagine strategy, modernize operations, and build AI-first intelligent ecosystems that deliver measurable business impact.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-3 mb-4">
                  <Link to="/capabilities" className="inline-flex items-center justify-center px-6 py-3 text-sm font-medium rounded-full text-white bg-gradient-to-r from-blue-600 to-indigo-600 hover:shadow-[0_0_30px_rgba(59,130,246,0.5)] hover:-translate-y-0.5 transition-all">
                    Explore Our Capabilities
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </div>
              </motion.div>
            </div>
            
            {/* 2D Intelligent Infographic */}
            <div className="hidden lg:flex justify-center items-center relative h-[420px] -translate-y-8">
              <div className="relative w-full max-w-md aspect-square flex items-center justify-center">
                
                {/* Central Hub */}
                <motion.div 
                  animate={{ scale: [1, 1.05, 1] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute z-30 w-32 h-32 bg-gradient-to-br from-blue-600 to-indigo-900 rounded-full flex items-center justify-center shadow-[0_0_40px_rgba(59,130,246,0.4)] border border-blue-400/30"
                >
                  <div className="flex flex-col items-center">
                    <Globe className="w-12 h-12 text-white mb-1" />
                    <span className="text-[10px] font-bold text-white tracking-widest uppercase">Rysun</span>
                  </div>
                </motion.div>

                {/* Connecting Lines */}
                <div className="absolute inset-0 flex items-center justify-center z-10">
                  <div className="w-full h-px bg-gradient-to-r from-transparent via-blue-400/50 to-transparent absolute" />
                  <div className="h-full w-px bg-gradient-to-b from-transparent via-blue-400/50 to-transparent absolute" />
                </div>

                {/* Animated Data Packets */}
                {[
                  { x: [-150, 0], y: [0, 0], delay: 0 },
                  { x: [150, 0], y: [0, 0], delay: 0.5 },
                  { x: [0, 0], y: [-150, 0], delay: 1 },
                  { x: [0, 0], y: [150, 0], delay: 1.5 }
                ].map((anim, i) => (
                  <motion.div
                    key={i}
                    className="absolute top-1/2 left-1/2 w-2 h-2 -ml-1 -mt-1 bg-blue-400 rounded-full shadow-[0_0_10px_#3b82f6] z-15"
                    animate={{
                      x: anim.x,
                      y: anim.y,
                      opacity: [0, 1, 0]
                    }}
                    transition={{ duration: 2, repeat: Infinity, delay: anim.delay, ease: "linear" }}
                  />
                ))}

                {/* Service Nodes */}
                <motion.div 
                  animate={{ y: [-140, -148, -140] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0 }}
                  className="absolute top-1/2 left-1/2 z-20 w-40 -ml-20 -mt-6 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-3 shadow-lg"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-blue-400/20 flex items-center justify-center">
                      <BrainCircuit className="w-4 h-4 text-blue-400" />
                    </div>
                    <div className="text-xs font-bold text-white">AI Innovation</div>
                  </div>
                </motion.div>

                <motion.div 
                  animate={{ x: [140, 148, 140] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                  className="absolute top-1/2 left-1/2 z-20 w-40 -mt-6 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-3 shadow-lg"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-indigo-400/20 flex items-center justify-center">
                      <Database className="w-4 h-4 text-indigo-400" />
                    </div>
                    <div className="text-xs font-bold text-white">Data Strategy</div>
                  </div>
                </motion.div>

                <motion.div 
                  animate={{ y: [140, 148, 140] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                  className="absolute top-1/2 left-1/2 z-20 w-40 -ml-20 -mt-6 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-3 shadow-lg"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-purple-400/20 flex items-center justify-center">
                      <Zap className="w-4 h-4 text-purple-400" />
                    </div>
                    <div className="text-xs font-bold text-white">Digital Agility</div>
                  </div>
                </motion.div>

                <motion.div 
                  animate={{ x: [-140, -148, -140] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 3 }}
                  className="absolute top-1/2 left-1/2 z-20 w-40 -ml-40 -mt-6 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-3 shadow-lg"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-teal-400/20 flex items-center justify-center">
                      <Shield className="w-4 h-4 text-teal-400" />
                    </div>
                    <div className="text-xs font-bold text-white">Trusted Partner</div>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Who We Are */}
      <section className="py-32 bg-white relative overflow-hidden">
        <div className="absolute top-0 right-0 -mt-20 -mr-20 w-96 h-96 bg-blue-50 rounded-full blur-3xl opacity-50 pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 -mb-20 -ml-20 w-96 h-96 bg-indigo-50 rounded-full blur-3xl opacity-50 pointer-events-none"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-slate-100 text-slate-700 text-sm font-bold uppercase tracking-wider mb-6">
                Who We Are
              </div>
              <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-8 leading-tight">
                Global Consulting & <br/><span className="text-blue-600">Technology Partner</span>
              </h2>
              <p className="text-xl text-slate-700 mb-6 leading-relaxed font-medium">
                Rysun is a global consulting and technology partner helping enterprises transform through AI, data, and digital innovation.
              </p>
              <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                Our expertise spans artificial intelligence, data engineering, digital platforms, and experience design. From advisory and strategy to architecture, implementation, and managed services, we guide organizations through the complete transformation lifecycle, ensuring technology investments translate into sustained business value.
              </p>
              <p className="text-lg text-slate-600 leading-relaxed">
                Over the past two decades, Rysun has continuously evolved alongside the technology landscape, enabling businesses to operate smarter, move faster, and serve customers better.
              </p>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-600 to-indigo-600 rounded-[2.5rem] transform rotate-3 scale-105 -z-10 opacity-20"></div>
              <div className="absolute inset-0 bg-gradient-to-bl from-cyan-400 to-blue-500 rounded-[2.5rem] transform -rotate-3 scale-105 -z-10 opacity-20"></div>
              <img src="https://picsum.photos/seed/rysun-global-tech/800/1000" alt="Global Tech Company" className="rounded-[2.5rem] shadow-2xl w-full object-cover h-[600px]" referrerPolicy="no-referrer" />
              
              {/* Floating Badge */}
              <motion.div 
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-10 -left-10 bg-white p-8 rounded-3xl shadow-2xl border border-slate-100 max-w-sm"
              >
                <div className="flex items-center gap-5 mb-3">
                  <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center text-white shadow-lg">
                    <Globe className="w-7 h-7" />
                  </div>
                  <div className="text-3xl font-black text-slate-900">Global</div>
                </div>
                <p className="text-base text-slate-600 font-medium">Delivery centers across US, UK, and India</p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 3. Vision & Purpose */}
      <section className="py-32 bg-slate-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://picsum.photos/seed/rysun-vision/1920/1080?blur=10')] opacity-20 mix-blend-overlay bg-cover bg-center" />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-slate-900/90 to-slate-900" />
        
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 border border-white/20 text-white text-sm font-bold uppercase tracking-wider mb-10 backdrop-blur-md">
              Vision & Purpose
            </div>
            <h2 className="text-5xl md:text-7xl font-black text-white mb-10 tracking-tight leading-tight">
              Inspire the future <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400">with technology.</span>
            </h2>
            <div className="w-24 h-1.5 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-10 rounded-full"></div>
            <p className="text-2xl text-slate-300 max-w-4xl mx-auto leading-relaxed font-light">
              Our vision reflects our commitment to innovation, forward thinking, and pushing the boundaries of what technology can achieve for businesses worldwide.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 4. Our Core Values */}
      <section className="py-32 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-6">Our Core Values</h2>
            <p className="text-xl text-slate-600">The principles that guide our decisions, shape our culture, and define how we partner with our clients.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((val, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="group relative bg-white rounded-[2rem] overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 border border-slate-100"
              >
                <div className="h-48 overflow-hidden relative">
                  <div className="absolute inset-0 bg-slate-900/20 group-hover:bg-slate-900/10 transition-colors z-10" />
                  <img src={val.image} alt={val.title} className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700" referrerPolicy="no-referrer" />
                  <div className="absolute top-6 left-6 z-20 w-14 h-14 bg-white/90 backdrop-blur-md rounded-2xl flex items-center justify-center text-blue-600 shadow-lg group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                    {val.icon}
                  </div>
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-slate-900 mb-4 group-hover:text-blue-600 transition-colors">{val.title}</h3>
                  <p className="text-slate-600 leading-relaxed text-lg">{val.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Our Journey */}
      <section className="py-32 bg-slate-900 text-white overflow-hidden relative">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5 mix-blend-overlay" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-4xl mx-auto mb-20">
            <h2 className="text-4xl md:text-5xl font-black text-white mb-6">Our Journey & Transformation</h2>
            <p className="text-xl text-slate-400 mb-10">
              Rysun is derived from the Rising Sun, symbolizing growth, energy, brilliance, insight, and inspiration. It reflects our belief in new beginnings, scalable innovation, and infinite possibilities.
            </p>
          </div>

          {/* Interactive Horizontal Timeline */}
          <div className="relative mt-16">
            {/* Navigation Buttons */}
            <div className="flex justify-end gap-4 mb-8">
              <button 
                onClick={() => setActiveTimelineIndex(Math.max(0, activeTimelineIndex - 1))}
                disabled={activeTimelineIndex === 0}
                className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center hover:bg-blue-600 disabled:opacity-30 disabled:cursor-not-allowed transition-all duration-300 border border-white/20 hover:border-blue-500 shadow-lg"
              >
                <ChevronLeft className="w-6 h-6 text-white" />
              </button>
              <button 
                onClick={() => setActiveTimelineIndex(Math.min(timeline.length - 1, activeTimelineIndex + 1))}
                disabled={activeTimelineIndex === timeline.length - 1}
                className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center hover:bg-blue-600 disabled:opacity-30 disabled:cursor-not-allowed transition-all duration-300 border border-white/20 hover:border-blue-500 shadow-lg"
              >
                <ChevronRight className="w-6 h-6 text-white" />
              </button>
            </div>

            <div className="overflow-hidden relative w-full pb-8">
              <motion.div 
                className="flex gap-6 items-stretch"
                animate={{ x: `calc(-${activeTimelineIndex * 100}% - ${activeTimelineIndex * 24}px)` }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
              >
                {timeline.map((item, idx) => (
                  <div 
                    key={idx} 
                    className={`w-full md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] flex-shrink-0`}
                  >
                    <div className={`h-full p-8 rounded-[2rem] border transition-all duration-500 relative flex flex-col ${idx === activeTimelineIndex ? 'bg-gradient-to-br from-blue-600 to-indigo-700 border-blue-400/50 shadow-[0_0_40px_rgba(59,130,246,0.3)] scale-[1.02]' : 'bg-white/5 border-white/10 hover:bg-white/10 opacity-60 hover:opacity-100'}`}>
                      {idx === activeTimelineIndex && (
                        <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-blue-300 to-purple-300 rounded-t-[2rem]" />
                      )}
                      
                      <div className="flex items-center justify-between mb-8">
                        <div className={`text-5xl md:text-6xl font-black tracking-tighter ${idx === activeTimelineIndex ? 'text-transparent bg-clip-text bg-gradient-to-r from-blue-100 to-white' : 'text-white/40'}`}>
                          {item.year}
                        </div>
                        <div className={`w-12 h-12 rounded-full flex items-center justify-center ${idx === activeTimelineIndex ? 'bg-white/20 text-white' : 'bg-white/5 text-white/40'}`}>
                          <ArrowRight className={`w-5 h-5 ${idx === activeTimelineIndex ? '-rotate-45' : ''} transition-transform duration-300`} />
                        </div>
                      </div>
                      
                      <h3 className={`text-2xl font-bold mb-4 ${idx === activeTimelineIndex ? 'text-white' : 'text-slate-200'}`}>
                        {item.title}
                      </h3>
                      
                      <p className={`text-base md:text-lg leading-relaxed flex-grow ${idx === activeTimelineIndex ? 'text-blue-50' : 'text-slate-400'}`}>
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </motion.div>
            </div>
            
            {/* Timeline Track */}
            <div className="mt-8 relative h-1.5 bg-white/10 rounded-full overflow-hidden">
              <motion.div 
                className="absolute top-0 left-0 h-full bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full"
                initial={{ width: '0%' }}
                animate={{ width: `${((activeTimelineIndex + 1) / timeline.length) * 100}%` }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* 6. Our Capabilities */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-6">Our Capabilities</h2>
            <p className="text-xl text-slate-600">Comprehensive technology solutions to drive your digital transformation journey.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {capabilities.map((cap, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-slate-50 rounded-[2.5rem] p-12 border border-slate-100 shadow-sm hover:shadow-2xl hover:border-blue-200 transition-all duration-500 group text-center flex flex-col items-center"
              >
                <div className="w-24 h-24 bg-white rounded-3xl shadow-md flex items-center justify-center text-blue-600 mb-8 group-hover:scale-110 group-hover:bg-blue-600 group-hover:text-white transition-all duration-500">
                  {cap.icon}
                </div>
                <h3 className="text-3xl font-bold text-slate-900 mb-6">{cap.title}</h3>
                <p className="text-lg text-slate-600 leading-relaxed">{cap.desc}</p>
              </motion.div>
            ))}
          </div>
          
          <div className="text-center">
            <Link to="/capabilities" className="inline-flex items-center justify-center px-8 py-4 text-lg font-bold rounded-full text-white bg-blue-600 hover:bg-blue-700 transition-all shadow-lg hover:shadow-xl hover:-translate-y-1">
              Explore All Capabilities <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* 7. Industries We Serve (Home Page Style) */}
      <section className="py-32 bg-slate-900 text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16">
            <h2 className="text-4xl md:text-5xl font-black mb-6">Industries We Serve</h2>
            <p className="text-xl text-slate-400 max-w-3xl">Deep domain expertise combined with technology innovation to solve complex industry challenges.</p>
          </div>
          
          {/* Desktop Interactive Accordion */}
          <div className="hidden lg:flex h-[600px] gap-4 w-full">
            {industries.map((ind, idx) => {
              const isActive = hoveredIndustry === idx;
              return (
                <motion.div
                  key={idx}
                  onHoverStart={() => setHoveredIndustry(idx)}
                  className={`relative rounded-[2.5rem] overflow-hidden cursor-pointer border border-white/10 transition-all duration-500 ease-in-out`}
                  animate={{ width: isActive ? '40%' : '20%' }}
                  initial={{ width: idx === 0 ? '40%' : '20%' }}
                >
                  <img 
                    src={`https://picsum.photos/seed/rysun-ind-${ind.img}/800/1000`} 
                    alt={ind.name} 
                    className="absolute inset-0 w-full h-full object-cover opacity-60 transition-transform duration-700 hover:scale-105" 
                    referrerPolicy="no-referrer" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent" />
                  
                  <div className="absolute bottom-0 left-0 p-10 w-full flex flex-col justify-end h-full">
                    <div className="flex items-center gap-6 mb-6">
                      <div className="w-16 h-16 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center flex-shrink-0 border border-white/20">
                        <span className="font-bold text-2xl">{idx + 1}</span>
                      </div>
                      {isActive && (
                        <motion.h3 
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          className="text-4xl font-black text-white whitespace-nowrap"
                        >
                          {ind.name}
                        </motion.h3>
                      )}
                    </div>
                    
                    {!isActive && (
                      <h3 className="text-2xl font-bold text-white absolute bottom-12 left-32 whitespace-nowrap origin-left -rotate-90 translate-y-full opacity-70">
                        {ind.name}
                      </h3>
                    )}

                    <AnimatePresence>
                      {isActive && (
                        <motion.div 
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 20 }}
                          className="overflow-hidden"
                        >
                          <p className="text-xl text-slate-200 mb-8 leading-relaxed max-w-lg">
                            {ind.desc}
                          </p>
                          <Link to={`/industry/${ind.name.toLowerCase().replace(/ & /g, '-').replace(/ /g, '-')}`} className="inline-flex items-center text-lg font-bold text-blue-400 hover:text-blue-300 transition-colors">
                            Explore Solutions <ArrowRight className="w-5 h-5 ml-2" />
                          </Link>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Mobile Stack Layout */}
          <div className="flex flex-col gap-6 lg:hidden">
            {industries.map((ind, idx) => (
              <div key={idx} className="relative rounded-3xl overflow-hidden h-[400px] border border-white/10">
                <img 
                  src={`https://picsum.photos/seed/rysun-ind-${ind.img}/800/600`} 
                  alt={ind.name} 
                  className="absolute inset-0 w-full h-full object-cover opacity-60" 
                  referrerPolicy="no-referrer" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/60 to-transparent" />
                <div className="absolute bottom-0 left-0 p-8 w-full">
                  <h3 className="text-3xl font-bold text-white mb-4">{ind.name}</h3>
                  <p className="text-lg text-slate-300 mb-6">{ind.desc}</p>
                  <Link to={`/industry/${ind.name.toLowerCase().replace(/ & /g, '-').replace(/ /g, '-')}`} className="inline-flex items-center text-base font-bold text-blue-400">
                    Explore Solutions <ArrowRight className="w-5 h-5 ml-2" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. What Makes Rysun Different */}
      <section className="py-32 bg-slate-50 border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-8">What Makes Rysun Different</h2>
              <p className="text-xl text-slate-600 mb-12 leading-relaxed">
                We combine the strategic advisory capabilities of a premium consulting firm with the deep technical execution expertise of an engineering powerhouse.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                {strengths.map((strength, idx) => (
                  <div key={idx} className="flex items-start group">
                    <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center mr-4 flex-shrink-0 group-hover:bg-blue-600 transition-colors duration-300">
                      <CheckCircle2 className="w-5 h-5 text-blue-600 group-hover:text-white transition-colors duration-300" />
                    </div>
                    <span className="text-lg text-slate-800 font-bold mt-0.5">{strength}</span>
                  </div>
                ))}
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="grid grid-cols-2 gap-6"
            >
              <div className="space-y-6 mt-12">
                <div className="bg-white p-10 rounded-[2rem] shadow-xl border border-slate-100 text-center hover:-translate-y-2 transition-transform duration-300">
                  <div className="text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 mb-4">25+</div>
                  <div className="text-sm font-bold text-slate-500 uppercase tracking-wider">Years Experience</div>
                </div>
                <div className="bg-white p-10 rounded-[2rem] shadow-xl border border-slate-100 text-center hover:-translate-y-2 transition-transform duration-300">
                  <div className="text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600 mb-4">500+</div>
                  <div className="text-sm font-bold text-slate-500 uppercase tracking-wider">Tech Experts</div>
                </div>
              </div>
              <div className="space-y-6">
                <div className="bg-white p-10 rounded-[2rem] shadow-xl border border-slate-100 text-center hover:-translate-y-2 transition-transform duration-300">
                  <div className="text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600 mb-4">CMMI</div>
                  <div className="text-sm font-bold text-slate-500 uppercase tracking-wider">Level 5 Certified</div>
                </div>
                <div className="bg-white p-10 rounded-[2rem] shadow-xl border border-slate-100 text-center hover:-translate-y-2 transition-transform duration-300">
                  <div className="text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-teal-600 mb-4">Global</div>
                  <div className="text-sm font-bold text-slate-500 uppercase tracking-wider">Delivery Model</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 9. Life at Rysun */}
      <section className="py-24 bg-gray-50 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-8">
            <div className="max-w-2xl">
              <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-4">Life at Rysun</h2>
              <p className="text-lg text-gray-600">
                Join a global team of innovators, creators, and problem-solvers. We foster a culture of continuous learning, collaboration, and excellence.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 h-auto md:h-[600px]">
            {/* Main Video Card */}
            <div className="md:col-span-8 rounded-3xl overflow-hidden relative group shadow-sm border border-gray-200 bg-black h-[400px] md:h-full">
              <iframe 
                className="absolute inset-0 w-full h-full"
                src="https://www.youtube.com/embed/SIJ-0CM_BQM?si=XUnjsf98Ga3hMunz&autoplay=0&mute=1&controls=1&loop=1&playlist=SIJ-0CM_BQM" 
                title="Life at Rysun Corporate Video" 
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen
              ></iframe>
            </div>
            
            <div className="md:col-span-4 flex flex-col gap-6 h-[600px] md:h-full">
              {/* Latest Event Card */}
              <div className="flex-1 rounded-3xl overflow-hidden relative group shadow-sm border border-gray-200 bg-white flex flex-col">
                <div className="h-32 relative overflow-hidden">
                  <img src="https://picsum.photos/seed/rysun-event/600/300" alt="Latest Event" className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" referrerPolicy="no-referrer" />
                  <div className="absolute top-4 left-4 bg-blue-600 text-white px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider shadow-sm z-10">
                    Latest Event
                  </div>
                </div>
                <div className="p-6 flex flex-col flex-grow justify-between">
                  <div>
                    <div className="text-sm text-gray-500 mb-2 font-medium">October 15-17, 2026 • Las Vegas, NV</div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2 leading-tight group-hover:text-blue-600 transition-colors">Tech Innovators Summit 2026</h3>
                    <p className="text-gray-600 text-sm line-clamp-2">Join Rysun experts as we discuss the future of enterprise AI and data analytics.</p>
                  </div>
                  <Link to="/company/events" className="inline-flex items-center text-sm font-bold text-blue-600 mt-4 group-hover:translate-x-1 transition-transform">
                    Event Details <ArrowRight className="ml-1 w-4 h-4" />
                  </Link>
                </div>
              </div>

              {/* Apply Now CTA Card */}
              <div className="flex-1 rounded-3xl overflow-hidden relative group shadow-sm border border-gray-200 bg-gradient-to-br from-blue-600 to-indigo-900 flex flex-col justify-center items-center text-center p-8">
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10 mix-blend-overlay"></div>
                <div className="relative z-10">
                  <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4 backdrop-blur-sm border border-white/20">
                    <Users className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-3">Be a Part of Rysun</h3>
                  <p className="text-white/80 text-sm mb-6 max-w-[250px] mx-auto">
                    Ready to accelerate your career? Explore open roles and join our global team.
                  </p>
                  <Link to="/company/careers" className="inline-flex items-center justify-center px-6 py-3 text-sm font-bold rounded-full text-blue-700 bg-white hover:bg-gray-50 transition-colors shadow-md hover:shadow-lg transform hover:-translate-y-0.5">
                    Apply Now <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
