import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  Cpu, 
  Zap, 
  Server, 
  Layout, 
  CheckCircle2, 
  Search, 
  MessageSquare, 
  Settings, 
  Users, 
  Calendar, 
  Coffee, 
  CreditCard, 
  Building2, 
  ShieldCheck, 
  Globe,
  Briefcase,
  Database
} from 'lucide-react';

export default function ProductsPage() {
  return (
    <div className="w-full bg-white font-sans text-slate-900">
      {/* 1. Hero Section – Product Innovation at Rysun */}
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
                  <Zap className="w-3.5 h-3.5" />
                  <span>Product Innovation at Rysun</span>
                </div>
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white tracking-tight mb-5 leading-tight">
                  Innovative Products for the <span className="text-transparent bg-clip-text bg-gradient-to-r from-rysun-lightblue to-blue-400">Modern Enterprise</span>
                </h1>
                <p className="text-xl text-blue-200 mb-8 leading-relaxed max-w-lg">
                  Discover Rysun’s intelligent platforms and digital solutions built to transform experiences, streamline operations, and power business growth.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a href="#products" className="inline-flex items-center justify-center px-6 py-3 text-sm font-medium rounded-full text-white bg-gradient-to-r from-rysun-blue to-rysun-lightblue hover:shadow-[0_0_30px_rgba(0,169,233,0.5)] hover:-translate-y-0.5 transition-all">
                    Explore Our Products
                  </a>
                  <Link to="/contact-us" className="inline-flex items-center justify-center px-6 py-3 text-sm font-medium rounded-full text-white bg-white/10 border border-white/20 hover:bg-white/20 transition-all backdrop-blur-sm">
                    Talk to an Expert
                  </Link>
                </div>
              </motion.div>
            </div>

            {/* AI Innovation Illustration */}
            <div className="hidden lg:flex justify-center items-center relative h-[420px] w-full">
              <div className="relative w-full max-w-md aspect-square flex items-center justify-center">
                <motion.div 
                  animate={{ rotate: 360 }}
                  transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-0 border-2 border-dashed border-rysun-lightblue/30 rounded-full"
                />
                <motion.div 
                  animate={{ rotate: -360 }}
                  transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-8 border border-white/10 rounded-full"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-32 h-32 bg-gradient-to-br from-rysun-blue to-rysun-darkpurple rounded-2xl rotate-45 flex items-center justify-center shadow-[0_0_40px_rgba(0,169,233,0.4)] border border-rysun-lightblue/30 overflow-hidden">
                    <div className="-rotate-45 flex flex-col items-center">
                      <Zap className="w-10 h-10 text-white mb-2" />
                      <span className="text-[10px] font-bold text-white tracking-wider text-center leading-tight">PRODUCT<br/>INNOVATION</span>
                    </div>
                  </div>
                </div>
                {/* Floating Nodes */}
                {[0, 1, 2, 3].map((i) => (
                  <motion.div
                    key={i}
                    className="absolute w-12 h-12 bg-slate-800 rounded-xl flex items-center justify-center border border-slate-700 shadow-lg"
                    initial={{ 
                      x: Math.cos((i * 90 * Math.PI) / 180) * 140,
                      y: Math.sin((i * 90 * Math.PI) / 180) * 140
                    }}
                    animate={{ 
                      y: [
                        Math.sin((i * 90 * Math.PI) / 180) * 140 - 10, 
                        Math.sin((i * 90 * Math.PI) / 180) * 140 + 10, 
                        Math.sin((i * 90 * Math.PI) / 180) * 140 - 10
                      ] 
                    }}
                    transition={{ duration: 4, repeat: Infinity, delay: i * 0.5, ease: "easeInOut" }}
                  >
                    {i === 0 && <Search className="w-5 h-5 text-rysun-lightblue" />}
                    {i === 1 && <MessageSquare className="w-5 h-5 text-rysun-orange" />}
                    {i === 2 && <Settings className="w-5 h-5 text-rysun-red" />}
                    {i === 3 && <Database className="w-5 h-5 text-emerald-400" />}
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Product Innovation Overview */}
      <section className="py-24 bg-slate-50 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-6">Product Innovation Overview</h2>
            <p className="text-lg text-slate-600 leading-relaxed">
              At Rysun, product innovation is driven by a combination of design thinking, deep engineering expertise, and advanced AI capabilities. Our teams focus on building intelligent digital products that solve real-world business challenges while delivering engaging and scalable experiences.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: <Cpu className="w-6 h-6" />, title: 'AI-Powered Innovation' },
              { icon: <Zap className="w-6 h-6" />, title: 'Rapid Product Development' },
              { icon: <Server className="w-6 h-6" />, title: 'Enterprise-Ready Platforms' },
              { icon: <Layout className="w-6 h-6" />, title: 'Experience-Driven Design' }
            ].map((pillar, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow flex flex-col items-center text-center"
              >
                <div className="w-14 h-14 bg-blue-50 rounded-xl flex items-center justify-center text-blue-600 mb-6">
                  {pillar.icon}
                </div>
                <h3 className="text-lg font-bold text-slate-900">{pillar.title}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Featured AI Product Platform – RON! */}
      <section id="products" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center justify-center w-24 h-24 bg-slate-900 rounded-2xl mb-8 shadow-lg">
              <span className="text-3xl font-black text-white">RON!</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-6">RON! – Your Gateway to Next-Gen Enterprise Intelligence</h2>
            <p className="text-xl text-slate-600 leading-relaxed">
              RON introduces a new category of AI-powered enterprise teammates. Each AI Teammate is expertly trained to function like a virtual employee, capable of executing tasks autonomously or working under supervision. These AI teammates enhance productivity, automate workflows, and unlock new levels of operational intelligence.
            </p>
          </div>

          <h3 className="text-2xl font-bold text-slate-900 mb-10 text-center">AI Teammates Under RON</h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {/* ShopMate */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-slate-50 border border-slate-100 rounded-3xl p-8 flex flex-col h-full hover:shadow-xl transition-all duration-300"
            >
              <div className="h-12 flex items-center mb-6">
                <div className="px-4 py-2 bg-blue-100 text-blue-800 font-black rounded-lg text-xl tracking-tight">ShopMate</div>
              </div>
              <h4 className="text-xl font-bold text-slate-900 mb-4">ShopMate – Enable Experiential Commerce for Your Site</h4>
              <p className="text-slate-600 mb-8 flex-grow">
                ShopMate acts as a 24/7 AI-powered shopping assistant that helps visitors discover products, receive personalized recommendations, and make confident purchasing decisions.
              </p>
              <div className="mb-8">
                <h5 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-4">Key Capabilities</h5>
                <ul className="space-y-3">
                  {['Intelligent product search', 'Personalized recommendations', 'Product comparison insights', 'Occasion and life-event-based suggestions'].map((cap, i) => (
                    <li key={i} className="flex items-start text-sm text-slate-700">
                      <CheckCircle2 className="w-4 h-4 text-blue-500 mr-2 mt-0.5 shrink-0" />
                      <span>{cap}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <Link to="/contact-us" className="inline-flex items-center justify-center w-full px-6 py-3 text-sm font-bold rounded-xl text-blue-600 bg-blue-50 hover:bg-blue-100 transition-colors mt-auto">
                Learn More
              </Link>
            </motion.div>

            {/* RevMate */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-slate-50 border border-slate-100 rounded-3xl p-8 flex flex-col h-full hover:shadow-xl transition-all duration-300"
            >
              <div className="h-12 flex items-center mb-6">
                <div className="px-4 py-2 bg-orange-100 text-orange-800 font-black rounded-lg text-xl tracking-tight">RevMate</div>
              </div>
              <h4 className="text-xl font-bold text-slate-900 mb-4">RevMate – AI Marketing Assistant</h4>
              <p className="text-slate-600 mb-8 flex-grow">
                RevMate empowers marketing teams by automating repetitive marketing tasks while enabling deeper personalization and campaign intelligence.
              </p>
              <div className="mb-8">
                <h5 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-4">Key Capabilities</h5>
                <ul className="space-y-3">
                  {['Campaign creation assistance', 'Translation and localization', 'Marketing data retrieval', 'AI-powered content and campaign optimization'].map((cap, i) => (
                    <li key={i} className="flex items-start text-sm text-slate-700">
                      <CheckCircle2 className="w-4 h-4 text-orange-500 mr-2 mt-0.5 shrink-0" />
                      <span>{cap}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <Link to="/contact-us" className="inline-flex items-center justify-center w-full px-6 py-3 text-sm font-bold rounded-xl text-orange-600 bg-orange-50 hover:bg-orange-100 transition-colors mt-auto">
                Learn More
              </Link>
            </motion.div>

            {/* TechMate */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-slate-50 border border-slate-100 rounded-3xl p-8 flex flex-col h-full hover:shadow-xl transition-all duration-300"
            >
              <div className="h-12 flex items-center mb-6">
                <div className="px-4 py-2 bg-emerald-100 text-emerald-800 font-black rounded-lg text-xl tracking-tight">TechMate</div>
              </div>
              <h4 className="text-xl font-bold text-slate-900 mb-4">TechMate – AI IT Operations Assistant</h4>
              <p className="text-slate-600 mb-8 flex-grow">
                TechMate acts as a virtual IT staff member, available 24×7 to support enterprise IT operations and automate routine support tasks.
              </p>
              <div className="mb-8">
                <h5 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-4">Key Capabilities</h5>
                <ul className="space-y-3">
                  {['Password reset automation', 'New employee onboarding workflows', 'IT helpdesk task automation', 'Enterprise system integrations'].map((cap, i) => (
                    <li key={i} className="flex items-start text-sm text-slate-700">
                      <CheckCircle2 className="w-4 h-4 text-emerald-500 mr-2 mt-0.5 shrink-0" />
                      <span>{cap}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <Link to="/contact-us" className="inline-flex items-center justify-center w-full px-6 py-3 text-sm font-bold rounded-xl text-emerald-600 bg-emerald-50 hover:bg-emerald-100 transition-colors mt-auto">
                Learn More
              </Link>
            </motion.div>
          </div>

          {/* RON Labs Call-to-Action */}
          <div className="bg-gradient-to-br from-slate-900 to-indigo-950 rounded-3xl p-10 md:p-16 text-center text-white relative overflow-hidden">
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10 mix-blend-overlay" />
            <div className="relative z-10 max-w-3xl mx-auto">
              <h3 className="text-3xl font-black mb-4">Take a Tour of Ron Labs</h3>
              <p className="text-lg text-blue-200 mb-8">
                Explore the innovation hub where Rysun designs and experiments with next-generation AI teammates and intelligent enterprise products.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Link to="/contact-us" className="inline-flex items-center justify-center px-8 py-4 text-sm font-bold rounded-full text-slate-900 bg-white hover:bg-gray-50 transition-all shadow-lg">
                  Explore Ron Labs
                </Link>
                <a href="#" className="inline-flex items-center justify-center px-8 py-4 text-sm font-bold rounded-full text-white bg-white/10 border border-white/20 hover:bg-white/20 transition-all backdrop-blur-sm">
                  Visit Website
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Industry Solution – eCube */}
      <section className="py-24 bg-slate-50 border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center justify-center px-6 py-3 bg-white border border-slate-200 rounded-xl mb-8 shadow-sm">
              <span className="text-2xl font-black text-blue-600 tracking-tight">eCube</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-6">eCube – Intelligent Club Management Software</h2>
            <p className="text-xl text-slate-600 leading-relaxed">
              eCube is an advanced club management platform designed to streamline operations at leisure clubs and residential societies. Powered by technologies such as Business Intelligence, AI/ML, and Data Analytics, eCube centralizes and automates key administrative and operational workflows.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {/* eCube Enterprise */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white p-10 rounded-3xl border border-slate-200 shadow-sm hover:shadow-lg transition-shadow"
            >
              <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center mb-6">
                <Building2 className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">eCube Enterprise</h3>
              <p className="text-slate-600 text-lg">
                Designed for leisure clubs requiring comprehensive operational automation.
              </p>
            </motion.div>

            {/* eCube Lite */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-white p-10 rounded-3xl border border-slate-200 shadow-sm hover:shadow-lg transition-shadow"
            >
              <div className="w-16 h-16 bg-indigo-50 rounded-2xl flex items-center justify-center mb-6">
                <Users className="w-8 h-8 text-indigo-600" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">eCube Lite</h3>
              <p className="text-slate-600 text-lg">
                Designed for residential society clubs seeking a streamlined digital management platform.
              </p>
            </motion.div>
          </div>

          <h3 className="text-2xl font-bold text-slate-900 mb-8 text-center">Key Features</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-16">
            {[
              { icon: <Users className="w-6 h-6" />, label: 'Membership Management' },
              { icon: <Layout className="w-6 h-6" />, label: 'Amenities Management' },
              { icon: <Calendar className="w-6 h-6" />, label: 'Events Management' },
              { icon: <MessageSquare className="w-6 h-6" />, label: 'Front Desk Management' },
              { icon: <CreditCard className="w-6 h-6" />, label: 'Account Management' },
              { icon: <Coffee className="w-6 h-6" />, label: 'Restaurant Management' }
            ].map((feature, idx) => (
              <div key={idx} className="bg-white p-6 rounded-2xl border border-slate-100 text-center flex flex-col items-center justify-center hover:border-blue-200 hover:bg-blue-50/50 transition-colors">
                <div className="text-blue-600 mb-3">{feature.icon}</div>
                <span className="text-sm font-bold text-slate-700">{feature.label}</span>
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/contact-us" className="inline-flex items-center justify-center px-8 py-4 text-sm font-bold rounded-full text-white bg-blue-600 hover:bg-blue-700 transition-colors shadow-lg">
              Take a Tour of eCube
            </Link>
            <a href="#" className="inline-flex items-center justify-center px-8 py-4 text-sm font-bold rounded-full text-slate-700 bg-white border border-slate-200 hover:bg-slate-50 transition-colors">
              Visit Website
            </a>
          </div>
        </div>
      </section>

      {/* 5. Ron Labs – Innovation Hub */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-slate-900 rounded-3xl overflow-hidden flex flex-col lg:flex-row">
            <div className="lg:w-1/2 p-12 md:p-16 flex flex-col justify-center">
              <h2 className="text-3xl md:text-4xl font-black text-white mb-6">Explore Ron Labs</h2>
              <p className="text-lg text-blue-100 mb-10 leading-relaxed">
                Ron Labs is the innovation hub of Rysun where new digital products, AI teammates, and intelligent platforms are conceptualized, developed, and tested before entering the enterprise ecosystem.
              </p>
              <div>
                <Link to="/contact-us" className="inline-flex items-center justify-center px-8 py-4 text-sm font-bold rounded-full text-slate-900 bg-white hover:bg-gray-50 transition-all shadow-lg">
                  Visit Ron Labs
                </Link>
              </div>
            </div>
            <div className="lg:w-1/2 relative min-h-[300px] lg:min-h-full bg-slate-800">
              <div className="absolute inset-0 bg-[url('https://picsum.photos/seed/innovation-lab/800/800?blur=2')] opacity-40 mix-blend-overlay object-cover" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-24 h-24 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center border border-white/20">
                  <Zap className="w-10 h-10 text-white" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Why Choose Rysun for AI Products */}
      <section className="py-24 bg-slate-50 border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-6">Why Choose Rysun for AI Products</h2>
            <p className="text-xl text-slate-600">Delivering enterprise-grade innovation with a proven track record.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: <Calendar className="w-6 h-6" />, title: '25+ Years of Digital Innovation' },
              { icon: <Cpu className="w-6 h-6" />, title: 'Deep Expertise in AI, Data, and Digital Engineering' },
              { icon: <Server className="w-6 h-6" />, title: 'Enterprise-Ready Product Development' },
              { icon: <Globe className="w-6 h-6" />, title: 'Trusted Technology Partner for Global Businesses' }
            ].map((point, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm text-center flex flex-col items-center"
              >
                <div className="w-14 h-14 bg-blue-50 rounded-full flex items-center justify-center text-blue-600 mb-6">
                  {point.icon}
                </div>
                <h3 className="text-lg font-bold text-slate-900 leading-snug">{point.title}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Final Call to Action */}
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
            Ready to Experience AI-Driven Products?
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-xl text-blue-100 mb-10 leading-relaxed max-w-3xl mx-auto"
          >
            Discover how Rysun’s intelligent products can help your organization enhance customer experiences, improve operational efficiency, and accelerate digital transformation.
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex flex-col sm:flex-row justify-center gap-4"
          >
            <Link to="/contact-us" className="inline-flex items-center justify-center px-8 py-4 text-base font-bold rounded-full text-blue-900 bg-white hover:bg-blue-50 transition-all shadow-lg hover:shadow-xl hover:-translate-y-1">
              Request a Demo
            </Link>
            <Link to="/contact-us" className="inline-flex items-center justify-center px-8 py-4 text-base font-bold rounded-full text-white bg-white/10 border border-white/20 hover:bg-white/20 transition-all backdrop-blur-sm">
              Talk to Product Experts
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
