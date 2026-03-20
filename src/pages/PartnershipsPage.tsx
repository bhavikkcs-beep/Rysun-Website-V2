import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  Cloud, 
  Database, 
  Layout, 
  Zap, 
  ShieldCheck, 
  Server, 
  Cpu, 
  Clock, 
  Award, 
  CheckCircle2, 
  Building2, 
  Globe, 
  Briefcase, 
  ChevronRight,
  MonitorSmartphone
} from 'lucide-react';

export default function PartnershipsPage() {
  return (
    <div className="w-full bg-white font-sans text-slate-900">
      {/* 1. Hero Section – Strategic Technology Alliances */}
      <section className="relative min-h-[60vh] lg:min-h-[70vh] flex items-center pb-10 overflow-hidden bg-gray-900">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-indigo-950 to-rysun-darkpurple/80" />
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMjAiIGN5PSIyMCIgcj0iMSIgZmlsbD0icmdiYSgyNTUsIDI1NSwgMjU1LCAwLjA1KSIvPjwvc3ZnPg==')] opacity-40" />
        
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-rysun-lightblue rounded-full"
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
                <stop offset="0%" stopColor="#00A9E9" />
                <stop offset="100%" stopColor="#7B2CBF" />
              </linearGradient>
            </defs>
          </svg>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full mt-24 lg:mt-0">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="max-w-3xl mb-16 lg:mb-0">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-rysun-lightblue text-xs font-medium mb-5 backdrop-blur-sm">
                  <Globe className="w-3.5 h-3.5" />
                  <span>Strategic Technology Alliances</span>
                </div>
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white tracking-tight mb-5 leading-tight">
                  Strategic Technology <span className="text-transparent bg-clip-text bg-gradient-to-r from-rysun-lightblue to-blue-400">Partnerships</span>
                </h1>
                <p className="text-base text-gray-300 mb-6 leading-relaxed max-w-lg">
                  Rysun collaborates with leading global technology providers to deliver scalable AI, Data, and Digital transformation solutions that drive measurable business outcomes.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 mb-8">
                  <Link to="/capabilities/digital" className="inline-flex items-center justify-center px-6 py-3 text-sm font-medium rounded-full text-white bg-gradient-to-r from-rysun-blue to-rysun-lightblue hover:shadow-[0_0_30px_rgba(0,169,233,0.5)] hover:-translate-y-0.5 transition-all">
                    Explore Our Capabilities
                  </Link>
                </div>
              </motion.div>
            </div>

            {/* Intelligent Infographic - Partner Ecosystem */}
            <div className="hidden lg:flex justify-center items-center relative h-[420px] -translate-y-8 w-full">
              <div className="relative w-full max-w-md aspect-square flex items-center justify-center">
                
                {/* Central Hub */}
                <motion.div 
                  animate={{ scale: [1, 1.05, 1] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute z-30 w-32 h-32 bg-gradient-to-br from-rysun-blue to-rysun-darkpurple rounded-full flex items-center justify-center shadow-[0_0_40px_rgba(0,169,233,0.4)] border border-rysun-lightblue/30"
                >
                  <div className="flex flex-col items-center">
                    <Globe className="w-10 h-10 text-white mb-1" />
                    <span className="text-xs font-bold text-white tracking-wider">RYSUN</span>
                  </div>
                </motion.div>

                {/* Orbiting Rings */}
                <div className="absolute inset-0 m-auto w-64 h-64 border border-white/10 rounded-full animate-[spin_20s_linear_infinite]" />
                <div className="absolute inset-0 m-auto w-80 h-80 border border-white/5 rounded-full animate-[spin_30s_linear_infinite_reverse]" />
                
                {/* Partner Nodes */}
                {[
                  { name: 'AWS', angle: -90, color: "text-[#FF9900]", border: "border-[#FF9900]" },
                  { name: 'Microsoft', angle: -18, color: "text-[#00A4EF]", border: "border-[#00A4EF]" },
                  { name: 'Google Cloud', angle: 54, color: "text-[#4285F4]", border: "border-[#4285F4]" },
                  { name: 'Adobe', angle: 126, color: "text-[#FF0000]", border: "border-[#FF0000]" },
                  { name: 'Couchbase', angle: 198, color: "text-[#EA2328]", border: "border-[#EA2328]" }
                ].map((partner, i) => (
                  <motion.div
                    key={`partner-${i}`}
                    className={`absolute top-1/2 left-1/2 px-4 py-2 -ml-10 -mt-5 bg-white rounded-lg flex items-center justify-center shadow-[0_0_20px_rgba(255,255,255,0.2)] z-40 border-2 ${partner.border}`}
                    initial={{ 
                      x: Math.cos((partner.angle * Math.PI) / 180) * 140,
                      y: Math.sin((partner.angle * Math.PI) / 180) * 140
                    }}
                    animate={{ 
                      y: [
                        Math.sin((partner.angle * Math.PI) / 180) * 140 - 10, 
                        Math.sin((partner.angle * Math.PI) / 180) * 140 + 10, 
                        Math.sin((partner.angle * Math.PI) / 180) * 140 - 10
                      ] 
                    }}
                    transition={{ duration: 4, repeat: Infinity, delay: i * 0.5, ease: "easeInOut" }}
                  >
                    <span className={`text-xs font-bold whitespace-nowrap ${partner.color}`}>{partner.name}</span>
                  </motion.div>
                ))}

                {/* Connecting Lines */}
                <svg className="absolute inset-0 w-full h-full z-10" viewBox="0 0 400 400">
                  <defs>
                    <linearGradient id="line-grad-partners" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#00A9E9" stopOpacity="0.8" />
                      <stop offset="100%" stopColor="#7B2CBF" stopOpacity="0.2" />
                    </linearGradient>
                  </defs>
                  {[
                    { angle: -90 }, { angle: -18 }, { angle: 54 }, { angle: 126 }, { angle: 198 }
                  ].map((line, i) => (
                    <motion.line
                      key={`conn-${i}`}
                      x1="200" y1="200"
                      x2={200 + Math.cos((line.angle * Math.PI) / 180) * 140}
                      y2={200 + Math.sin((line.angle * Math.PI) / 180) * 140}
                      stroke="url(#line-grad-partners)"
                      strokeWidth="2"
                      strokeDasharray="4 4"
                      animate={{ strokeDashoffset: [0, -20] }}
                      transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                    />
                  ))}
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Partner Spotlight */}
      <section className="py-24 bg-slate-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10 mix-blend-overlay" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="mb-16">
            <h2 className="text-3xl md:text-5xl font-black text-white mb-6">Partner Spotlight</h2>
            <p className="text-xl text-blue-200 max-w-3xl">Deep expertise and certified capabilities across the world's leading technology platforms.</p>
          </div>

          <div className="space-y-12">
            
            {/* Adobe */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-slate-800/50 border border-slate-700 rounded-3xl p-8 md:p-12 backdrop-blur-sm"
            >
              <div className="flex flex-col md:flex-row gap-12">
                <div className="md:w-1/3 flex flex-col">
                  <div className="text-3xl font-black text-white mb-2">Adobe</div>
                  <div className="inline-block px-3 py-1 bg-red-500/20 text-red-300 border border-red-500/30 rounded-full text-sm font-bold mb-6 self-start">
                    Bronze Solution Partner
                  </div>
                  <p className="text-slate-300 leading-relaxed mb-6">
                    Rysun delivers Adobe Experience Cloud implementations that help organizations create personalized digital experiences and maximize the value of their Adobe investments.
                  </p>
                  <Link to="/contact" className="mt-auto inline-flex items-center text-blue-400 font-bold hover:text-blue-300 transition-colors group">
                    Explore more <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
                <div className="md:w-2/3">
                  <h4 className="text-lg font-bold text-white mb-6 flex items-center">
                    <CheckCircle2 className="w-5 h-5 text-blue-400 mr-2" /> Key Capabilities
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {['Adobe Experience Cloud implementation', 'Customer journey orchestration', 'Marketing automation', 'Digital experience optimization'].map((cap, i) => (
                      <div key={i} className="bg-slate-800 rounded-xl p-4 border border-slate-700 flex items-start">
                        <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 mr-3 flex-shrink-0" />
                        <span className="text-slate-300">{cap}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>

            {/* AWS */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-slate-800/50 border border-slate-700 rounded-3xl p-8 md:p-12 backdrop-blur-sm"
            >
              <div className="flex flex-col md:flex-row gap-12">
                <div className="md:w-1/3 flex flex-col">
                  <div className="text-3xl font-black text-white mb-2">Amazon Web Services</div>
                  <div className="inline-block px-3 py-1 bg-orange-500/20 text-orange-300 border border-orange-500/30 rounded-full text-sm font-bold mb-6 self-start">
                    AWS Advanced Tier Services Partner
                  </div>
                  <p className="text-slate-300 leading-relaxed mb-6">
                    Rysun provides enterprise-grade AWS cloud solutions that help organizations modernize infrastructure, optimize costs, and scale analytics platforms.
                  </p>
                  <Link to="/contact" className="mt-auto inline-flex items-center text-blue-400 font-bold hover:text-blue-300 transition-colors group">
                    Explore more <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
                <div className="md:w-2/3">
                  <h4 className="text-lg font-bold text-white mb-6 flex items-center">
                    <CheckCircle2 className="w-5 h-5 text-blue-400 mr-2" /> Specializations
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {['Amazon Redshift Delivery', 'Cloud data warehouse architecture', 'Scalable analytics platforms', 'AWS Glue Delivery', 'Data integration pipelines', 'Data lake enablement', 'ETL automation'].map((cap, i) => (
                      <div key={i} className="bg-slate-800 rounded-xl p-4 border border-slate-700 flex items-start">
                        <div className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 mr-3 flex-shrink-0" />
                        <span className="text-slate-300">{cap}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Google Cloud */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-slate-800/50 border border-slate-700 rounded-3xl p-8 md:p-12 backdrop-blur-sm"
            >
              <div className="flex flex-col md:flex-row gap-12">
                <div className="md:w-1/3 flex flex-col">
                  <div className="text-3xl font-black text-white mb-2">Google Cloud</div>
                  <div className="inline-block px-3 py-1 bg-blue-500/20 text-blue-300 border border-blue-500/30 rounded-full text-sm font-bold mb-6 self-start">
                    Select Services Partner
                  </div>
                  <p className="text-slate-300 leading-relaxed mb-6">
                    Rysun helps organizations leverage Google Cloud technologies to unlock insights, modernize data platforms, and build AI-powered solutions.
                  </p>
                  <Link to="/contact" className="mt-auto inline-flex items-center text-blue-400 font-bold hover:text-blue-300 transition-colors group">
                    Explore more <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
                <div className="md:w-2/3">
                  <h4 className="text-lg font-bold text-white mb-6 flex items-center">
                    <CheckCircle2 className="w-5 h-5 text-blue-400 mr-2" /> Capabilities
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {['Data analytics platforms', 'AI and machine learning solutions', 'Cloud modernization', 'Scalable digital infrastructure'].map((cap, i) => (
                      <div key={i} className="bg-slate-800 rounded-xl p-4 border border-slate-700 flex items-start">
                        <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 mr-3 flex-shrink-0" />
                        <span className="text-slate-300">{cap}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Microsoft */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-slate-800/50 border border-slate-700 rounded-3xl p-8 md:p-12 backdrop-blur-sm"
            >
              <div className="flex flex-col md:flex-row gap-12">
                <div className="md:w-1/3 flex flex-col">
                  <div className="text-3xl font-black text-white mb-2">Microsoft</div>
                  <div className="inline-block px-3 py-1 bg-yellow-500/20 text-yellow-300 border border-yellow-500/30 rounded-full text-sm font-bold mb-6 self-start">
                    Microsoft Solutions Partner
                  </div>
                  <p className="text-slate-300 leading-relaxed mb-6">
                    Microsoft Solution Partner Designations demonstrating deep technical capability and proven success.
                  </p>
                  <Link to="/contact" className="mt-auto inline-flex items-center text-blue-400 font-bold hover:text-blue-300 transition-colors group">
                    Explore more <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
                <div className="md:w-2/3">
                  <h4 className="text-lg font-bold text-white mb-6 flex items-center">
                    <CheckCircle2 className="w-5 h-5 text-blue-400 mr-2" /> Capabilities
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {[
                      'Modern Work',
                      'Infrastructure (Azure)',
                      'Digital & App Innovation (Azure)',
                      'Data & AI (Azure)',
                      'Security'
                    ].map((cap, i) => (
                      <div key={i} className="bg-slate-800 rounded-xl p-4 border border-slate-700 flex items-start">
                        <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 mr-3 flex-shrink-0" />
                        <span className="text-slate-300">{cap}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Couchbase */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-slate-800/50 border border-slate-700 rounded-3xl p-8 md:p-12 backdrop-blur-sm"
            >
              <div className="flex flex-col md:flex-row gap-12">
                <div className="md:w-1/3 flex flex-col">
                  <div className="text-3xl font-black text-white mb-2">Couchbase</div>
                  <div className="inline-block px-3 py-1 bg-red-500/20 text-red-300 border border-red-500/30 rounded-full text-sm font-bold mb-6 self-start">
                    Technology Partner
                  </div>
                  <p className="text-slate-300 leading-relaxed mb-6">
                    Rysun leverages Couchbase’s modern cloud database platform to build scalable, high-performance applications from cloud to edge environments.
                  </p>
                  <Link to="/contact" className="mt-auto inline-flex items-center text-blue-400 font-bold hover:text-blue-300 transition-colors group">
                    Explore more <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
                <div className="md:w-2/3">
                  <h4 className="text-lg font-bold text-white mb-6 flex items-center">
                    <CheckCircle2 className="w-5 h-5 text-blue-400 mr-2" /> Capabilities
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {['Cloud-native application platforms', 'Distributed data architectures', 'Real-time data processing', 'Couchbase Capella deployment'].map((cap, i) => (
                      <div key={i} className="bg-slate-800 rounded-xl p-4 border border-slate-700 flex items-start">
                        <div className="w-1.5 h-1.5 rounded-full bg-red-500 mt-2 mr-3 flex-shrink-0" />
                        <span className="text-slate-300">{cap}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* 4. Strategic Value of Our Partnerships */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-6">Strategic Value of Our Partnerships</h2>
            <p className="text-xl text-slate-600">How our global alliances translate into direct business value for our clients.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: <Zap className="w-6 h-6" />, title: 'Accelerated Innovation', desc: 'Joint technology capabilities enable faster adoption of AI and digital solutions.' },
              { icon: <ShieldCheck className="w-6 h-6" />, title: 'Enterprise-Grade Platforms', desc: 'Solutions built on trusted global technology ecosystems.' },
              { icon: <Server className="w-6 h-6" />, title: 'Scalable Cloud Architectures', desc: 'Modern cloud-native infrastructure designed for growth and resilience.' },
              { icon: <Cpu className="w-6 h-6" />, title: 'Data & AI Enablement', desc: 'Advanced analytics and AI-powered decision-making capabilities.' },
              { icon: <Clock className="w-6 h-6" />, title: 'Faster Time-to-Value', desc: 'Pre-built integrations and accelerators reduce implementation timelines.' }
            ].map((val, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="p-8 rounded-3xl bg-slate-50 border border-slate-100 hover:border-blue-200 hover:bg-blue-50/50 transition-colors"
              >
                <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center text-blue-600 mb-6">
                  {val.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{val.title}</h3>
                <p className="text-slate-600 leading-relaxed">{val.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 2. Our Technology Partner Ecosystem */}
      <section className="py-24 bg-slate-50 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-6">Our Technology Partner Ecosystem</h2>
            <p className="text-xl text-slate-600">A curated network of industry-leading platforms empowering enterprise transformation.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Cloud & Infrastructure */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-3xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 group flex flex-col h-full"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center group-hover:bg-blue-600 transition-colors duration-300 shrink-0">
                  <Cloud className="w-7 h-7 text-blue-600 group-hover:text-white transition-colors duration-300" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-slate-900">Cloud & Infrastructure</h3>
                  <p className="text-sm text-slate-500 mt-1">Scalable, secure foundations</p>
                </div>
              </div>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-auto">
                {['Amazon Web Services', 'Microsoft Azure', 'Google Cloud', 'VMware'].map((item, i) => (
                  <li key={i} className="flex items-center text-slate-700 font-medium bg-slate-50 px-4 py-3 rounded-xl border border-slate-100 group-hover:border-blue-100 transition-colors">
                    <div className="w-2 h-2 rounded-full bg-blue-500 mr-3 shrink-0" />
                    <span className="truncate">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Digital Experience Platforms */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-white rounded-3xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 group flex flex-col h-full"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 bg-indigo-50 rounded-2xl flex items-center justify-center group-hover:bg-indigo-600 transition-colors duration-300 shrink-0">
                  <Layout className="w-7 h-7 text-indigo-600 group-hover:text-white transition-colors duration-300" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-slate-900">Digital Experience</h3>
                  <p className="text-sm text-slate-500 mt-1">Omnichannel customer journeys</p>
                </div>
              </div>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-auto">
                {['Adobe', 'Sitecore', 'Salesforce', 'Contentful'].map((item, i) => (
                  <li key={i} className="flex items-center text-slate-700 font-medium bg-slate-50 px-4 py-3 rounded-xl border border-slate-100 group-hover:border-indigo-100 transition-colors">
                    <div className="w-2 h-2 rounded-full bg-indigo-500 mr-3 shrink-0" />
                    <span className="truncate">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Data & Application Platforms */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-white rounded-3xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 group flex flex-col h-full"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 bg-emerald-50 rounded-2xl flex items-center justify-center group-hover:bg-emerald-600 transition-colors duration-300 shrink-0">
                  <Database className="w-7 h-7 text-emerald-600 group-hover:text-white transition-colors duration-300" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-slate-900">Data & Apps</h3>
                  <p className="text-sm text-slate-500 mt-1">Real-time insights & agility</p>
                </div>
              </div>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-auto">
                {['Couchbase', 'Snowflake', 'Databricks', 'MongoDB'].map((item, i) => (
                  <li key={i} className="flex items-center text-slate-700 font-medium bg-slate-50 px-4 py-3 rounded-xl border border-slate-100 group-hover:border-emerald-100 transition-colors">
                    <div className="w-2 h-2 rounded-full bg-emerald-500 mr-3 shrink-0" />
                    <span className="truncate">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* AI & Emerging Tech */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="bg-white rounded-3xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 group flex flex-col h-full"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 bg-purple-50 rounded-2xl flex items-center justify-center group-hover:bg-purple-600 transition-colors duration-300 shrink-0">
                  <Cpu className="w-7 h-7 text-purple-600 group-hover:text-white transition-colors duration-300" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-slate-900">AI & Emerging Tech</h3>
                  <p className="text-sm text-slate-500 mt-1">Intelligent automation & GenAI</p>
                </div>
              </div>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-auto">
                {['OpenAI', 'Anthropic', 'Hugging Face', 'NVIDIA'].map((item, i) => (
                  <li key={i} className="flex items-center text-slate-700 font-medium bg-slate-50 px-4 py-3 rounded-xl border border-slate-100 group-hover:border-purple-100 transition-colors">
                    <div className="w-2 h-2 rounded-full bg-purple-500 mr-3 shrink-0" />
                    <span className="truncate">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 5. Quality Certifications & Compliance */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-6">Quality Certifications & Compliance</h2>
            <p className="text-xl text-slate-600">Our commitment to operational excellence and security.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: 'CMMI Level 5', desc: 'Demonstrates the highest level of process maturity in software development and delivery.', logo: "data:image/svg+xml;utf8,%3Csvg viewBox='0 0 200 60' xmlns='http://www.w3.org/2000/svg'%3E%3Ctext x='10' y='40' font-family='Arial, sans-serif' font-weight='bold' font-size='32' fill='%230f172a'%3ECMMI%3C/text%3E%3Ctext x='105' y='40' font-family='Arial, sans-serif' font-weight='bold' font-size='20' fill='%23dc2626'%3ELevel 5%3C/text%3E%3C/svg%3E" },
              { title: 'ISO 9001', desc: 'Quality management system certification ensuring consistent service excellence.', logo: "data:image/svg+xml;utf8,%3Csvg viewBox='0 0 200 60' xmlns='http://www.w3.org/2000/svg'%3E%3Crect x='10' y='10' width='40' height='40' fill='%23dc2626' rx='4'/%3E%3Ctext x='15' y='38' font-family='Arial, sans-serif' font-weight='bold' font-size='22' fill='%23ffffff'%3EISO%3C/text%3E%3Ctext x='60' y='40' font-family='Arial, sans-serif' font-weight='bold' font-size='28' fill='%230f172a'%3E9001%3C/text%3E%3C/svg%3E" },
              { title: 'ISO 27001', desc: 'Information security management certification ensuring strong security practices.', logo: "data:image/svg+xml;utf8,%3Csvg viewBox='0 0 200 60' xmlns='http://www.w3.org/2000/svg'%3E%3Crect x='10' y='10' width='40' height='40' fill='%23dc2626' rx='4'/%3E%3Ctext x='15' y='38' font-family='Arial, sans-serif' font-weight='bold' font-size='22' fill='%23ffffff'%3EISO%3C/text%3E%3Ctext x='60' y='40' font-family='Arial, sans-serif' font-weight='bold' font-size='28' fill='%230f172a'%3E27001%3C/text%3E%3C/svg%3E" }
            ].map((cert, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white rounded-3xl p-8 shadow-sm border border-slate-100 flex flex-col items-center text-center hover:shadow-xl transition-shadow"
              >
                <div className="h-20 mb-6 flex items-center justify-center">
                  <img src={cert.logo} alt={cert.title} className="max-h-full max-w-full object-contain" referrerPolicy="no-referrer" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">{cert.title}</h3>
                <p className="text-slate-600">{cert.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Industry Memberships & Affiliations */}
      <section className="py-24 bg-white border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-6">Industry Memberships & Affiliations</h2>
            <p className="text-xl text-slate-600">Active participants in global technology and business communities.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: 'NASSCOM', desc: 'Premier trade body and chamber of commerce of the Tech industry in India.', logo: "data:image/svg+xml;utf8,%3Csvg viewBox='0 0 200 60' xmlns='http://www.w3.org/2000/svg'%3E%3Ctext x='10' y='40' font-family='Arial, sans-serif' font-weight='bold' font-size='36' fill='%230284c7'%3ENASSCOM%3C/text%3E%3C/svg%3E" },
              { name: 'Gujarat Chamber of Commerce & Industry', desc: 'Promoting trade, commerce, and industry growth.', logo: "data:image/svg+xml;utf8,%3Csvg viewBox='0 0 200 60' xmlns='http://www.w3.org/2000/svg'%3E%3Ctext x='10' y='40' font-family='Arial, sans-serif' font-weight='bold' font-size='36' fill='%231e3a8a'%3EGCCI%3C/text%3E%3C/svg%3E" },
              { name: 'Federation of Indian Export Organisations', desc: 'Apex body of Indian export promotion organizations.', logo: "data:image/svg+xml;utf8,%3Csvg viewBox='0 0 200 60' xmlns='http://www.w3.org/2000/svg'%3E%3Ctext x='10' y='40' font-family='Arial, sans-serif' font-weight='bold' font-size='36' fill='%230369a1'%3EFIEO%3C/text%3E%3C/svg%3E" }
            ].map((member, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="group bg-slate-50 rounded-3xl p-8 border border-slate-100 hover:bg-blue-600 transition-colors duration-300 flex flex-col items-center text-center"
              >
                <div className="h-16 mb-6 flex items-center justify-center bg-white p-2 rounded-lg shadow-sm w-full">
                  <img src={member.logo} alt={member.name} className="max-h-full max-w-full object-contain" referrerPolicy="no-referrer" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 group-hover:text-white mb-3 transition-colors">{member.name}</h3>
                <p className="text-slate-600 group-hover:text-blue-100 transition-colors">{member.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Success Stories Powered by Our Partners */}
      <section className="py-16 bg-white border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-4">Success Stories Powered by Our Partners</h2>
            <p className="text-lg text-gray-600">Real-world impact delivered through strategic technology alliances.</p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            <div className="lg:col-span-7">
              <div className="bg-gradient-to-br from-gray-900 to-rysun-darkpurple rounded-3xl overflow-hidden shadow-xl h-full flex flex-col group relative">
                <div className="absolute inset-0 bg-[url('https://picsum.photos/seed/rysun-cloud-success/800/800?blur=4')] opacity-20 mix-blend-overlay transition-transform duration-1000 group-hover:scale-105" />
                <div className="p-10 flex-grow flex flex-col relative z-10">
                  <div className="inline-flex items-center px-3 py-1 rounded-full bg-white/10 backdrop-blur-md text-xs font-bold text-white uppercase tracking-wider w-max mb-8 border border-white/20">
                    AWS Cloud Transformation
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-6 leading-tight">Cloud Data Platform Modernization for Global Retailer</h3>
                  <div className="grid grid-cols-3 gap-4 mb-10">
                    <div className="bg-white/10 backdrop-blur-md p-5 rounded-2xl border border-white/10">
                      <div className="text-3xl font-black text-rysun-lightblue mb-1">40%</div>
                      <div className="text-xs text-gray-300 font-medium uppercase tracking-wider">Cost Reduction</div>
                    </div>
                    <div className="bg-white/10 backdrop-blur-md p-5 rounded-2xl border border-white/10">
                      <div className="text-3xl font-black text-rysun-orange mb-1">10x</div>
                      <div className="text-xs text-gray-300 font-medium uppercase tracking-wider">Faster Queries</div>
                    </div>
                    <div className="bg-white/10 backdrop-blur-md p-5 rounded-2xl border border-white/10">
                      <div className="text-3xl font-black text-rysun-red mb-1">99.9%</div>
                      <div className="text-xs text-gray-300 font-medium uppercase tracking-wider">Uptime</div>
                    </div>
                  </div>
                  <div className="mt-auto">
                    <Link to="/insights/impact-stories" className="inline-flex items-center justify-center px-8 py-4 text-sm font-bold rounded-full text-gray-900 bg-white hover:bg-gray-50 transition-all shadow-lg">
                      Read Full Story <ArrowRight className="ml-2 w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="lg:col-span-5 flex flex-col gap-6">
              {[
                { title: 'Azure Enterprise Modernization', partner: 'Microsoft Azure', desc: 'Migrated mission-critical applications to Azure, improving performance and reducing operational costs.', color: 'text-rysun-blue', bg: 'bg-blue-50' },
                { title: 'Adobe Digital Experience Transformation', partner: 'Adobe', desc: 'Implemented Adobe Experience Cloud to deliver personalized customer journeys at scale.', color: 'text-rysun-orange', bg: 'bg-orange-50' },
                { title: 'Real-time Edge Analytics', partner: 'Couchbase', desc: 'Deployed Couchbase Capella for high-throughput, low-latency data synchronization across 500+ locations.', color: 'text-rysun-red', bg: 'bg-red-50' }
              ].map((story, idx) => (
                <Link key={idx} to="/insights/impact-stories" className="flex flex-col justify-center bg-gray-50 p-6 rounded-3xl shadow-sm border border-gray-100 hover:shadow-md hover:border-gray-200 transition-all group flex-1">
                  <div className={`text-xs font-black ${story.color} uppercase tracking-wider mb-2`}>{story.partner}</div>
                  <h4 className="text-lg font-bold text-gray-900 group-hover:text-rysun-blue transition-colors leading-snug mb-2">{story.title}</h4>
                  <p className="text-sm text-gray-600">{story.desc}</p>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 8. Call To Action – Partner With Rysun */}
      <section className="py-24 relative overflow-hidden bg-blue-600">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-indigo-700 to-blue-900" />
        <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] mix-blend-overlay" />
        
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 rounded-full bg-blue-400/20 blur-3xl" />
        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 rounded-full bg-indigo-400/20 blur-3xl" />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-black text-white mb-6"
          >
            Accelerate Your Digital Transformation with Rysun
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-xl text-blue-100 mb-10 leading-relaxed"
          >
            Leverage our strategic partnerships with global technology leaders to build scalable, secure, and intelligent digital solutions.
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex flex-col sm:flex-row justify-center gap-4"
          >
            <Link to="/contact-us" className="inline-flex items-center justify-center px-8 py-4 text-base font-bold rounded-full text-blue-900 bg-white hover:bg-blue-50 transition-all shadow-lg hover:shadow-xl hover:-translate-y-1">
              Talk to Our Experts
            </Link>
            <Link to="/capabilities/digital" className="inline-flex items-center justify-center px-8 py-4 text-base font-bold rounded-full text-white bg-white/10 border border-white/20 hover:bg-white/20 transition-all backdrop-blur-sm">
              Explore Our Capabilities
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
