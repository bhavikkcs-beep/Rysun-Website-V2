import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, CheckCircle2, ChevronRight, MessageSquare, 
  Lightbulb, Database, Cloud, Cpu, Layers, Zap, ShieldCheck,
  Smartphone, Globe, Workflow, Users, Target, BarChart3,
  Briefcase, Code, Network, Settings, Compass, ShoppingCart,
  HeartPulse, Landmark, Factory, FileText, PlayCircle, Bot, TrendingUp, Search
} from 'lucide-react';

export default function DigitalPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="w-full bg-white font-sans text-slate-900">
      
      {/* 1. Hero Banner – Digital Transformation */}
      <section className="relative min-h-[60vh] lg:min-h-[70vh] flex items-center pb-10 overflow-hidden bg-slate-900">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900" />
        
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <svg className="absolute w-full h-full opacity-20" viewBox="0 0 100 100" preserveAspectRatio="none">
            <motion.path 
              d="M0,50 Q25,30 50,50 T100,50" 
              fill="none" 
              stroke="#3b82f6" 
              strokeWidth="0.5"
              animate={{ d: ["M0,50 Q25,30 50,50 T100,50", "M0,50 Q25,70 50,50 T100,50", "M0,50 Q25,30 50,50 T100,50"] }}
              transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.path 
              d="M0,60 Q25,40 50,60 T100,60" 
              fill="none" 
              stroke="#8b5cf6" 
              strokeWidth="0.5"
              animate={{ d: ["M0,60 Q25,40 50,60 T100,60", "M0,60 Q25,80 50,60 T100,60", "M0,60 Q25,40 50,60 T100,60"] }}
              transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            />
          </svg>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-3xl"
            >
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-300 text-xs font-medium mb-5 backdrop-blur-sm">
                <Globe className="w-3.5 h-3.5" />
                <span>Digital Capabilities</span>
              </div>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white tracking-tight mb-5 leading-tight">
                Reimagining Enterprises Through <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Digital Innovation</span>
              </h1>
              <p className="text-base text-blue-100/80 mb-6 leading-relaxed max-w-lg">
                Rysun helps organizations transform business models, build modern digital platforms, and deliver intelligent customer experiences through strategy, AI, cloud, and product engineering.
              </p>
              
              {/* Capability Themes */}
              <div className="grid grid-cols-2 gap-4 mb-6">
                {[
                  { icon: <Compass className="w-4 h-4" />, text: 'Digital Strategy & Transformation' },
                  { icon: <Lightbulb className="w-4 h-4" />, text: 'Experience & Product Innovation' },
                  { icon: <Bot className="w-4 h-4" />, text: 'Intelligent Automation & AI' },
                  { icon: <Cloud className="w-4 h-4" />, text: 'Cloud & Platform Engineering' }
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-slate-300">
                    <div className="w-6 h-6 rounded-md bg-white/5 flex items-center justify-center text-blue-400">
                      {item.icon}
                    </div>
                    <span className="text-xs font-medium">{item.text}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-3">
                <Link to="#services" className="inline-flex items-center justify-center px-6 py-3 text-sm font-medium rounded-full text-white bg-blue-600 hover:bg-blue-500 transition-all shadow-lg hover:shadow-blue-500/25">
                  Explore Digital Services
                </Link>
                <Link to="/contact-us" className="inline-flex items-center justify-center px-6 py-3 text-sm font-medium rounded-full text-white bg-white/10 hover:bg-white/20 border border-white/10 transition-all backdrop-blur-sm">
                  Talk to an Expert
                </Link>
              </div>
            </motion.div>

            {/* Hero Infographic */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="hidden lg:flex justify-center items-center relative h-[420px] -translate-y-8"
            >
              <div className="relative w-full max-w-md aspect-square flex items-center justify-center">
                {/* Central Core */}
                <motion.div 
                  className="absolute z-30 w-32 h-32 bg-slate-800/90 backdrop-blur-xl rounded-full border border-blue-500/30 shadow-[0_0_40px_rgba(59,130,246,0.3)] flex items-center justify-center"
                  animate={{ y: [-10, 10, -10] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                >
                  <Globe className="w-12 h-12 text-blue-400" />
                </motion.div>

                {/* Orbiting Elements */}
                <motion.div className="absolute w-[280px] h-[280px] rounded-full border border-slate-700/50 border-dashed" animate={{ rotate: 360 }} transition={{ duration: 30, repeat: Infinity, ease: "linear" }}>
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-slate-800 rounded-xl border border-purple-500/30 flex items-center justify-center shadow-lg shadow-purple-500/20">
                    <Smartphone className="w-6 h-6 text-purple-400" />
                  </div>
                  <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-12 h-12 bg-slate-800 rounded-xl border border-emerald-500/30 flex items-center justify-center shadow-lg shadow-emerald-500/20">
                    <Database className="w-6 h-6 text-emerald-400" />
                  </div>
                </motion.div>

                <motion.div className="absolute w-[400px] h-[400px] rounded-full border border-slate-700/30" animate={{ rotate: -360 }} transition={{ duration: 45, repeat: Infinity, ease: "linear" }}>
                  <div className="absolute left-0 top-1/2 -translate-x-1/2 -translate-y-1/2 w-14 h-14 bg-slate-800 rounded-xl border border-blue-500/30 flex items-center justify-center shadow-lg shadow-blue-500/20">
                    <Cloud className="w-7 h-7 text-blue-400" />
                  </div>
                  <div className="absolute right-0 top-1/2 translate-x-1/2 -translate-y-1/2 w-14 h-14 bg-slate-800 rounded-xl border border-pink-500/30 flex items-center justify-center shadow-lg shadow-pink-500/20">
                    <Cpu className="w-7 h-7 text-pink-400" />
                  </div>
                </motion.div>

                {/* Connecting Lines */}
                <svg className="absolute inset-0 w-full h-full z-10 pointer-events-none" viewBox="0 0 500 500">
                  <motion.circle cx="250" cy="250" r="140" fill="none" stroke="rgba(59,130,246,0.2)" strokeWidth="1" strokeDasharray="4 4" animate={{ rotate: 360 }} transition={{ duration: 20, repeat: Infinity, ease: "linear" }} style={{ transformOrigin: 'center' }} />
                  <motion.circle cx="250" cy="250" r="200" fill="none" stroke="rgba(139,92,246,0.1)" strokeWidth="1" />
                </svg>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 2. Digital Transformation Overview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">Digital at Rysun</h2>
            <p className="text-lg text-slate-600 leading-relaxed">
              We enable enterprises to modernize operations, build innovative digital products, and create intelligent experiences that drive sustainable growth. Our holistic approach bridges the gap between strategy and execution.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { icon: <Compass className="w-8 h-8" />, title: 'Strategy', desc: 'Aligning digital initiatives with business goals.' },
              { icon: <Smartphone className="w-8 h-8" />, title: 'Experience', desc: 'Designing human-centric digital interactions.' },
              { icon: <Layers className="w-8 h-8" />, title: 'Platforms', desc: 'Building scalable, cloud-native architectures.' },
              { icon: <Bot className="w-8 h-8" />, title: 'Intelligence', desc: 'Embedding AI and automation into operations.' }
            ].map((pillar, idx) => (
              <div key={idx} className="flex flex-col items-center text-center p-6 rounded-2xl bg-slate-50 border border-slate-100 hover:shadow-md transition-shadow">
                <div className="w-16 h-16 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center mb-4">
                  {pillar.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">{pillar.title}</h3>
                <p className="text-sm text-slate-600">{pillar.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Digital Consulting Services */}
      <section id="services" className="py-24 bg-slate-50 border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Digital Consulting Services</h2>
            <p className="text-lg text-slate-600">Comprehensive capabilities to guide your end-to-end transformation journey.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Digital Strategy & Transformation',
                icon: <Target className="w-6 h-6 text-blue-600" />,
                desc: 'Define your digital vision and roadmap for sustainable growth.',
                items: ['Digital Strategy Consulting', 'Digital Operating Models', 'Product Strategy and Engineering', 'Legacy Transformation', 'Digital Transformation Roadmapping', 'Enterprise Architecture & Technology Strategy']
              },
              {
                title: 'Experience & Product Innovation',
                icon: <Lightbulb className="w-6 h-6 text-purple-600" />,
                desc: 'Design intuitive products that captivate users and foster loyalty.',
                items: ['User Experience Design', 'Product Experience Strategy', 'Customer Journey Engineering', 'Digital Product Innovation']
              },
              {
                title: 'Data, AI & Intelligent Automation',
                icon: <Bot className="w-6 h-6 text-emerald-600" />,
                desc: 'Unlock data value and automate processes with advanced AI.',
                items: ['Data and AI-led Innovation', 'Intelligent Process Automation', 'AI Strategy & Adoption', 'Decision Intelligence & Advanced Analytics']
              },
              {
                title: 'Digital Platforms & Engineering',
                icon: <Code className="w-6 h-6 text-cyan-600" />,
                desc: 'Build scalable, resilient, and modern digital platforms.',
                items: ['App Development and Modernization', 'Enterprise Integration Strategy', 'API & Microservices Architecture', 'Platform Engineering']
              },
              {
                title: 'Cloud, Security & Infrastructure',
                icon: <ShieldCheck className="w-6 h-6 text-pink-600" />,
                desc: 'Modernize your IT foundation with secure cloud architectures.',
                items: ['Cloud Consulting & Security', 'Cloud Migration & Modernization', 'Cloud Governance & FinOps']
              },
              {
                title: 'Future of Work & Digital Workplace',
                icon: <Users className="w-6 h-6 text-amber-600" />,
                desc: 'Empower your workforce with modern collaboration tools.',
                items: ['Digital Workplace Strategy', 'Workplace Experience Design', 'Collaboration & Productivity Platforms']
              }
            ].map((service, idx) => (
              <div key={idx} className="bg-white rounded-2xl p-8 shadow-sm border border-slate-100 hover:shadow-lg transition-all group">
                <div className="w-12 h-12 rounded-xl bg-slate-50 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{service.title}</h3>
                <p className="text-sm text-slate-600 mb-6">{service.desc}</p>
                <ul className="space-y-2">
                  {service.items.map((item, i) => (
                    <li key={i} className="flex items-start text-sm text-slate-700">
                      <ChevronRight className="w-4 h-4 text-blue-500 mt-0.5 mr-2 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Digital Consulting Solutions */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Digital Consulting Solutions</h2>
            <p className="text-lg text-slate-600">Targeted solutions addressing specific enterprise challenges and domains.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: 'Enterprise Planning & Intelligent Decisioning',
                icon: <BarChart3 className="w-6 h-6 text-blue-600" />,
                items: ['Enterprise Planning Solutions', 'Business Analytics Apps', 'Financial Planning & Forecasting Platforms', 'Executive Decision Intelligence Dashboards']
              },
              {
                title: 'Customer Experience & Commerce Transformation',
                icon: <ShoppingCart className="w-6 h-6 text-purple-600" />,
                items: ['Customer Experience Transformation', 'Omnichannel Commerce Platforms', 'Customer Data Platforms', 'Personalization & Recommendation Engines']
              },
              {
                title: 'Sales, Marketing & Revenue Growth',
                icon: <TrendingUp className="w-6 h-6 text-emerald-600" />,
                items: ['Sales Transformation & Performance', 'Marketing Automation & Activation', 'Customer Lifecycle Management Platforms', 'Lead Intelligence & Sales Enablement']
              },
              {
                title: 'Enterprise Operations & Supply Chain',
                icon: <Network className="w-6 h-6 text-amber-600" />,
                items: ['Supply Chain and Logistics', 'Intelligent Order Management', 'Procurement & Supplier Collaboration Platforms']
              },
              {
                title: 'Workforce & Service Experience',
                icon: <Briefcase className="w-6 h-6 text-cyan-600" />,
                items: ['Modern Work Experience', 'Service Experience Transformation', 'Digital Workplace Platforms', 'Employee Experience Platforms']
              },
              {
                title: 'Industry Solutions & Accelerators',
                icon: <Zap className="w-6 h-6 text-pink-600" />,
                items: ['Industry Accelerators', 'Industry Data Models', 'AI Industry Copilots']
              }
            ].map((domain, idx) => (
              <div key={idx} className="flex gap-6 p-6 rounded-2xl bg-slate-50 border border-slate-100 hover:bg-white hover:shadow-md transition-all">
                <div className="flex-shrink-0 w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center border border-slate-100">
                  {domain.icon}
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-4">{domain.title}</h3>
                  <ul className="space-y-2">
                    {domain.items.map((item, i) => (
                      <li key={i} className="flex items-start text-sm text-slate-600">
                        <div className="w-1.5 h-1.5 rounded-full bg-blue-400 mt-1.5 mr-3 flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Our Digital Transformation Approach */}
      <section className="py-24 bg-slate-900 text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Digital Transformation Approach</h2>
            <p className="text-lg text-slate-400">A structured, iterative methodology to ensure successful digital execution.</p>
          </div>

          <div className="relative">
            {/* Connecting Line */}
            <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-slate-700 -translate-y-1/2 z-0" />
            
            <div className="grid grid-cols-1 md:grid-cols-5 gap-8 relative z-10">
              {[
                { step: '01', title: 'Discover', desc: 'Assess digital maturity and opportunities', icon: <Search className="w-6 h-6" /> },
                { step: '02', title: 'Design', desc: 'Define experience strategy and architecture', icon: <Compass className="w-6 h-6" /> },
                { step: '03', title: 'Build', desc: 'Develop platforms and applications', icon: <Code className="w-6 h-6" /> },
                { step: '04', title: 'Scale', desc: 'Deploy AI, automation, and analytics', icon: <TrendingUp className="w-6 h-6" /> },
                { step: '05', title: 'Optimize', desc: 'Continuously improve digital operations', icon: <Settings className="w-6 h-6" /> }
              ].map((phase, idx) => (
                <div key={idx} className="flex flex-col items-center text-center relative group">
                  <div className="w-16 h-16 rounded-full bg-slate-800 border-4 border-slate-900 flex items-center justify-center text-blue-400 mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors shadow-xl">
                    {phase.icon}
                  </div>
                  <div className="text-sm font-bold text-blue-400 mb-2 tracking-wider">PHASE {phase.step}</div>
                  <h3 className="text-xl font-bold mb-2">{phase.title}</h3>
                  <p className="text-sm text-slate-400">{phase.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 6. Accelerators */}
      <section className="py-24 bg-slate-50 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div className="max-w-2xl">
              <h2 className="text-3xl font-bold text-slate-900 mb-4">Accelerators & Frameworks</h2>
              <p className="text-lg text-slate-600">Speed up your transformation journey with our pre-built assets and proven methodologies.</p>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {[
              { icon: <Workflow className="w-6 h-6" />, title: 'Digital Transformation Frameworks' },
              { icon: <Database className="w-6 h-6" />, title: 'Industry Data Models' },
              { icon: <Bot className="w-6 h-6" />, title: 'AI Copilot Accelerators' },
              { icon: <Zap className="w-6 h-6" />, title: 'Automation Frameworks' },
              { icon: <Cloud className="w-6 h-6" />, title: 'Cloud Migration Toolkits' }
            ].map((accel, idx) => (
              <div key={idx} className="bg-white p-6 rounded-2xl border border-slate-200 text-center hover:border-blue-300 hover:shadow-md transition-all flex flex-col items-center justify-center min-h-[160px]">
                <div className="w-12 h-12 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center mb-4">
                  {accel.icon}
                </div>
                <h3 className="text-sm font-bold text-slate-900">{accel.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Impact Stories */}
      <section className="py-16 bg-white border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-4">Impact Stories</h2>
            <p className="text-lg text-gray-600">Real-world examples of how we've helped organizations achieve digital excellence.</p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            <div className="lg:col-span-7">
              <div className="bg-gradient-to-br from-gray-900 to-indigo-950 rounded-3xl overflow-hidden shadow-xl h-full flex flex-col group relative">
                <div className="absolute inset-0 bg-[url('https://picsum.photos/seed/rysun-impact-1/800/800?blur=4')] opacity-20 mix-blend-overlay transition-transform duration-1000 group-hover:scale-105" />
                <div className="p-10 flex-grow flex flex-col relative z-10">
                  <div className="inline-flex items-center px-3 py-1 rounded-full bg-white/10 backdrop-blur-md text-xs font-bold text-white uppercase tracking-wider w-max mb-8 border border-white/20">
                    Retail Success Story
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-6 leading-tight">Digital Commerce Transformation</h3>
                  <p className="text-gray-300 mb-8">Replatformed a global retailer to a headless commerce architecture, significantly increasing online sales and improving customer experience.</p>
                  <div className="grid grid-cols-3 gap-4 mb-10">
                    <div className="bg-white/10 backdrop-blur-md p-5 rounded-2xl border border-white/10">
                      <div className="text-3xl font-black text-blue-400 mb-1">45%</div>
                      <div className="text-xs text-gray-300 font-medium uppercase tracking-wider">Sales Increase</div>
                    </div>
                    <div className="bg-white/10 backdrop-blur-md p-5 rounded-2xl border border-white/10">
                      <div className="text-3xl font-black text-purple-400 mb-1">3x</div>
                      <div className="text-xs text-gray-300 font-medium uppercase tracking-wider">Faster Load</div>
                    </div>
                    <div className="bg-white/10 backdrop-blur-md p-5 rounded-2xl border border-white/10">
                      <div className="text-3xl font-black text-emerald-400 mb-1">99.9%</div>
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
                { title: 'Legacy Modernization to Cloud', industry: 'Financial Services', desc: 'Migrated core banking systems to a cloud-native platform, reducing operational costs by 30%.', color: 'text-blue-600', bg: 'bg-blue-50' },
                { title: 'AI-Driven Operations Automation', industry: 'Manufacturing', desc: 'Implemented intelligent process automation in manufacturing, improving supply chain efficiency by 25%.', color: 'text-purple-600', bg: 'bg-purple-50' },
                { title: 'Customer Experience Transformation', industry: 'Healthcare', desc: 'Designed a unified patient portal for a healthcare provider, boosting patient engagement scores by 60%.', color: 'text-emerald-600', bg: 'bg-emerald-50' }
              ].map((story, idx) => (
                <Link key={idx} to="/insights/impact-stories" className="flex flex-col justify-center bg-gray-50 p-6 rounded-3xl shadow-sm border border-gray-100 hover:shadow-md hover:border-gray-200 transition-all group flex-1">
                  <div className={`text-xs font-black ${story.color} uppercase tracking-wider mb-2`}>{story.industry}</div>
                  <h4 className="text-lg font-bold text-gray-900 group-hover:text-blue-600 transition-colors leading-snug mb-2">{story.title}</h4>
                  <p className="text-sm text-gray-600">{story.desc}</p>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 8. Industries We Serve */}
      <section className="py-20 bg-slate-50 border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl font-bold text-slate-900">Industries We Serve</h2>
          </div>
          <div className="flex flex-wrap justify-center gap-8 md:gap-16">
            {[
              { icon: <ShoppingCart className="w-8 h-8" />, name: 'Retail & E-commerce' },
              { icon: <HeartPulse className="w-8 h-8" />, name: 'Healthcare & Life Sciences' },
              { icon: <Landmark className="w-8 h-8" />, name: 'Financial Services' },
              { icon: <Cpu className="w-8 h-8" />, name: 'High-Tech & SaaS' },
              { icon: <Factory className="w-8 h-8" />, name: 'Manufacturing' }
            ].map((ind, idx) => (
              <div key={idx} className="flex flex-col items-center gap-3 text-slate-600 hover:text-blue-600 transition-colors cursor-pointer">
                <div className="w-16 h-16 rounded-2xl bg-white border border-slate-200 shadow-sm flex items-center justify-center">
                  {ind.icon}
                </div>
                <span className="text-sm font-semibold">{ind.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. Insights & Thought Leadership */}
      <section className="py-16 bg-gray-50 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
            <div className="max-w-2xl">
              <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-4">Insights & Thought Leadership</h2>
              <p className="text-lg text-gray-600">Latest perspectives on digital transformation and enterprise innovation.</p>
            </div>
            <Link to="/insights" className="hidden md:inline-flex items-center text-blue-600 font-bold hover:text-blue-700 transition-colors">
              View All Insights <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: 'Future of Digital Enterprises: Trends for 2026', category: 'Digital Strategy', date: 'March 12, 2026', img: 'digital-trends' },
              { title: 'Building Resilient Digital Platforms', category: 'Platform Engineering', date: 'March 8, 2026', img: 'digital-platform' },
              { title: 'Intelligent Automation at Scale', category: 'Automation', date: 'March 1, 2026', img: 'digital-automation' }
            ].map((blog, idx) => (
              <Link key={idx} to="/insights" className="flex flex-col bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl border border-gray-100 transition-all group h-full">
                <div className="relative h-48 overflow-hidden">
                  <img src={`https://picsum.photos/seed/rysun-${blog.img}/600/400`} alt={blog.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" referrerPolicy="no-referrer" />
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md border border-white/20 px-3 py-1 rounded-full text-xs font-bold text-gray-900 uppercase tracking-wider z-10 shadow-sm">
                    {blog.category}
                  </div>
                </div>
                <div className="p-8 flex flex-col flex-grow">
                  <div className="text-sm text-gray-500 mb-3 font-medium">{blog.date}</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors leading-snug flex-grow">{blog.title}</h3>
                  <div className="flex items-center text-sm font-bold text-blue-600 mt-auto">
                    Read Article <ArrowRight className="ml-2 w-4 h-4" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
          <div className="mt-8 text-center md:hidden">
            <Link to="/insights" className="inline-flex items-center text-blue-600 font-bold hover:text-blue-700 transition-colors">
              View All Insights <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* 10. Why Rysun */}
      <section className="py-24 bg-slate-50 border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Why Rysun</h2>
            <p className="text-lg text-slate-600">The Rysun advantage for your digital transformation.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
            {[
              { icon: <Target className="w-8 h-8" />, title: 'Strategy-to-Execution Expertise' },
              { icon: <Network className="w-8 h-8" />, title: 'AI + Data + Digital Integration' },
              { icon: <Briefcase className="w-8 h-8" />, title: 'Industry-focused Solutions' },
              { icon: <Cloud className="w-8 h-8" />, title: 'Cloud-native Engineering' },
              { icon: <CheckCircle2 className="w-8 h-8" />, title: 'Proven Enterprise Transformation Experience' }
            ].map((reason, idx) => (
              <div key={idx} className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 text-center flex flex-col items-center">
                <div className="w-14 h-14 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center mb-4">
                  {reason.icon}
                </div>
                <h3 className="text-sm font-bold text-slate-900">{reason.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 11. Final Call to Action */}
      <section className="relative py-24 bg-blue-600 overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://picsum.photos/seed/rysun-cta/1920/1080?blur=4')] opacity-10 bg-cover bg-center mix-blend-overlay" />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-blue-600 opacity-90" />
        
        {/* Subtle digital graphics */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <svg className="absolute w-full h-full opacity-20" viewBox="0 0 100 100" preserveAspectRatio="none">
            <path d="M0,100 L100,0" stroke="white" strokeWidth="0.5" strokeDasharray="2 4" />
            <path d="M0,80 L100,-20" stroke="white" strokeWidth="0.5" strokeDasharray="2 4" />
            <path d="M0,120 L100,20" stroke="white" strokeWidth="0.5" strokeDasharray="2 4" />
          </svg>
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-8 tracking-tight">
            Start Your Digital Transformation Journey
          </h2>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/contact-us" className="inline-flex items-center justify-center px-8 py-4 text-base font-bold rounded-full text-blue-600 bg-white hover:bg-slate-50 transition-all shadow-lg hover:shadow-xl hover:-translate-y-1">
              Talk to a Digital Expert
            </Link>
            <Link to="/contact-us" className="inline-flex items-center justify-center px-8 py-4 text-base font-bold rounded-full text-white bg-transparent border-2 border-white/30 hover:bg-white/10 transition-all">
              Schedule a Transformation Assessment
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
