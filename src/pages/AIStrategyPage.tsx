import React from 'react';
import { motion } from 'framer-motion';
import { 
  Network, ShieldCheck, Scale, Users, 
  Map, BarChart, Lock, CheckCircle2, 
  ArrowRight, Search, Target, Settings, 
  Zap, TrendingUp, Shield, Layers,
  ChevronRight
} from 'lucide-react';
import { Link } from 'react-router-dom';

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 }
};

const staggerContainer = {
  initial: { opacity: 0 },
  whileInView: { opacity: 1 },
  viewport: { once: true },
  transition: { staggerChildren: 0.2 }
};

export default function AIStrategyPage() {
  return (
    <div className="bg-white font-sans text-gray-900">
      {/* Section 1: Hero Banner */}
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

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full pt-24 lg:pt-0">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="max-w-3xl">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-rysun-lightblue text-xs font-medium mb-5 backdrop-blur-sm">
                  <Target className="w-3.5 h-3.5" />
                  <span>AI Capabilities</span>
                </div>
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white tracking-tight mb-5 leading-tight">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-rysun-lightblue to-blue-400">AI Strategy, Governance</span> & Transformation
                </h1>
                <p className="text-base text-gray-300 mb-6 leading-relaxed max-w-lg">
                  Rysun Labs helps organizations define their AI strategy, assess readiness, implement responsible AI frameworks, and establish governance models that enable scalable and compliant AI adoption.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-3 mb-4">
                  <Link to="/contact-us" className="inline-flex items-center justify-center px-6 py-3 text-sm font-medium rounded-full text-white bg-gradient-to-r from-rysun-blue to-rysun-lightblue hover:shadow-[0_0_30px_rgba(0,169,233,0.5)] hover:-translate-y-0.5 transition-all">
                    Start Your AI Strategy Journey
                  </Link>
                  <Link to="/contact-us" className="inline-flex items-center justify-center px-6 py-3 text-sm font-medium rounded-full text-white bg-transparent border border-white/30 hover:bg-white/10 transition-all backdrop-blur-sm">
                    Talk to an AI Expert
                  </Link>
                </div>
              </motion.div>
            </div>
            
            {/* 2D Intelligent Infographic - AI Strategy & Governance */}
            <div className="hidden lg:flex justify-center items-center relative h-[420px] -translate-y-8">
              <div className="relative w-full max-w-md aspect-square flex items-center justify-center">
                
                {/* Central Governance Hub */}
                <motion.div 
                  animate={{ scale: [1, 1.05, 1] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute z-30 w-32 h-32 bg-gradient-to-br from-indigo-600 to-purple-800 rounded-full flex items-center justify-center shadow-[0_0_40px_rgba(79,70,229,0.4)] border border-indigo-400/30"
                >
                  <div className="flex flex-col items-center">
                    <ShieldCheck className="w-12 h-12 text-white mb-1" />
                    <span className="text-[10px] font-bold text-white tracking-widest uppercase">Governance</span>
                  </div>
                </motion.div>

                {/* Connecting Lines */}
                <div className="absolute inset-0 flex items-center justify-center z-10">
                  <div className="w-full h-px bg-gradient-to-r from-transparent via-indigo-400/50 to-transparent absolute" />
                  <div className="h-full w-px bg-gradient-to-b from-transparent via-indigo-400/50 to-transparent absolute" />
                  <div className="w-full h-px bg-gradient-to-r from-transparent via-indigo-400/50 to-transparent absolute rotate-45" />
                  <div className="h-full w-px bg-gradient-to-b from-transparent via-indigo-400/50 to-transparent absolute rotate-45" />
                </div>

                {/* Animated Data Packets */}
                {[
                  { x: [-150, 0], y: [0, 0], delay: 0 }, // Left to Center
                  { x: [150, 0], y: [0, 0], delay: 0.5 }, // Right to Center
                  { x: [0, 0], y: [-150, 0], delay: 1 }, // Top to Center
                  { x: [0, 0], y: [150, 0], delay: 1.5 }, // Bottom to Center
                  { x: [-100, 0], y: [-100, 0], delay: 0.25 }, // Top-Left to Center
                  { x: [100, 0], y: [100, 0], delay: 0.75 } // Bottom-Right to Center
                ].map((anim, i) => (
                  <motion.div
                    key={i}
                    className="absolute top-1/2 left-1/2 w-2 h-2 -ml-1 -mt-1 bg-indigo-300 rounded-full shadow-[0_0_10px_#818cf8] z-15"
                    animate={{
                      x: anim.x,
                      y: anim.y,
                      opacity: [0, 1, 0]
                    }}
                    transition={{ duration: 2, repeat: Infinity, delay: anim.delay, ease: "linear" }}
                  />
                ))}

                {/* Service Nodes */}
                {/* 1. Strategy (Top) */}
                <motion.div 
                  animate={{ y: [-140, -148, -140] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0 }}
                  className="absolute top-1/2 left-1/2 z-20 w-40 -ml-20 -mt-6 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-3 shadow-lg"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-blue-500/20 flex items-center justify-center">
                      <Target className="w-4 h-4 text-blue-400" />
                    </div>
                    <div className="text-xs font-bold text-white">AI Strategy</div>
                  </div>
                </motion.div>

                {/* 2. Compliance (Right) */}
                <motion.div 
                  animate={{ x: [140, 148, 140] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                  className="absolute top-1/2 left-1/2 z-20 w-40 -ml-20 -mt-6 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-3 shadow-lg"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-teal-500/20 flex items-center justify-center">
                      <Scale className="w-4 h-4 text-teal-400" />
                    </div>
                    <div className="text-xs font-bold text-white">Compliance</div>
                  </div>
                </motion.div>

                {/* 3. Transformation (Bottom) */}
                <motion.div 
                  animate={{ y: [140, 148, 140] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                  className="absolute top-1/2 left-1/2 z-20 w-40 -ml-20 -mt-6 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-3 shadow-lg"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-purple-500/20 flex items-center justify-center border border-purple-500/30">
                      <Zap className="w-4 h-4 text-purple-400" />
                    </div>
                    <div className="text-xs font-bold text-white">Transformation</div>
                  </div>
                </motion.div>

                {/* 4. Risk Mgmt (Left) */}
                <motion.div 
                  animate={{ x: [-140, -148, -140] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 3 }}
                  className="absolute top-1/2 left-1/2 z-20 w-40 -ml-20 -mt-6 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-3 shadow-lg"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-rose-500/20 flex items-center justify-center">
                      <Lock className="w-4 h-4 text-rose-400" />
                    </div>
                    <div className="text-xs font-bold text-white">Risk Mgmt</div>
                  </div>
                </motion.div>
                
                {/* Orbiting Rings */}
                <motion.div 
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-0 border border-indigo-500/20 rounded-full border-dashed"
                />
                <motion.div 
                  animate={{ rotate: -360 }}
                  transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-4 border border-purple-500/20 rounded-full"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: AI Transformation Overview */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div className="text-center max-w-3xl mx-auto mb-16" {...fadeIn}>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">From AI Vision to Enterprise Adoption</h2>
            <p className="text-lg text-gray-600">
              Successfully transitioning from AI experimentation to enterprise-wide adoption requires a structured approach. We guide organizations through every critical phase of their AI journey.
            </p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
          >
            {[
              { icon: Map, title: "Strategic AI Roadmaps", desc: "Define AI vision and long-term transformation strategy." },
              { icon: ShieldCheck, title: "Responsible AI Frameworks", desc: "Ensure ethical, transparent, and compliant AI systems." },
              { icon: Scale, title: "AI Governance Structures", desc: "Establish oversight and risk management for AI models." },
              { icon: Users, title: "Organizational Transformation", desc: "Prepare teams, processes, and infrastructure for AI adoption." }
            ].map((card, idx) => (
              <motion.div key={idx} variants={fadeIn} className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <div className="w-14 h-14 bg-indigo-50 rounded-xl flex items-center justify-center mb-6 text-rysun-blue">
                  <card.icon className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{card.title}</h3>
                <p className="text-gray-600 leading-relaxed">{card.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Section 3: Core Services */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div className="text-center mb-20" {...fadeIn}>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Our AI Strategy & Governance Services</h2>
            <div className="w-24 h-1 bg-rysun-blue mx-auto rounded-full"></div>
          </motion.div>

          <div className="space-y-24">
            {/* Service 1 */}
            <div className="flex flex-col lg:flex-row items-center gap-16">
              <motion.div className="lg:w-1/2" {...fadeIn}>
                <h3 className="text-3xl font-bold text-gray-900 mb-6">AI Strategy & Roadmap Development</h3>
                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                  Develop a clear roadmap identifying high-value AI opportunities and aligning AI investments with business objectives.
                </p>
                <ul className="space-y-4">
                  {[
                    "Business use case identification",
                    "AI maturity assessment",
                    "ROI prioritization",
                    "Strategic AI roadmap creation"
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start">
                      <CheckCircle2 className="w-6 h-6 text-rysun-blue mr-3 flex-shrink-0" />
                      <span className="text-gray-700 font-medium">{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
              <motion.div className="lg:w-1/2 w-full" {...fadeIn}>
                <div className="bg-slate-50 rounded-3xl p-8 border border-slate-100 relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-100 rounded-full blur-3xl opacity-50 -translate-y-1/2 translate-x-1/2"></div>
                  {/* Timeline Illustration */}
                  <div className="relative z-10 space-y-6">
                    {[1, 2, 3].map((step) => (
                      <div key={step} className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-full bg-white shadow-sm flex items-center justify-center font-bold text-rysun-blue border border-indigo-50">
                          Q{step}
                        </div>
                        <div className="flex-1 h-16 bg-white rounded-xl shadow-sm border border-indigo-50 flex items-center px-4">
                          <div className={`h-2 rounded-full bg-rysun-blue w-${step * 1/3}`} style={{ width: `${step * 30}%` }}></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Service 2 */}
            <div className="flex flex-col lg:flex-row-reverse items-center gap-16">
              <motion.div className="lg:w-1/2" {...fadeIn}>
                <h3 className="text-3xl font-bold text-gray-900 mb-6">AI Readiness & Transformation Programs</h3>
                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                  Assess organizational readiness and build internal capabilities required for enterprise AI adoption.
                </p>
                <ul className="space-y-4">
                  {[
                    "Technology stack evaluation",
                    "Data readiness assessment",
                    "Skills gap analysis",
                    "Change management planning"
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start">
                      <CheckCircle2 className="w-6 h-6 text-rysun-blue mr-3 flex-shrink-0" />
                      <span className="text-gray-700 font-medium">{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
              <motion.div className="lg:w-1/2 w-full" {...fadeIn}>
                <div className="bg-slate-50 rounded-3xl p-12 border border-slate-100 flex items-end justify-center h-[320px] gap-4">
                  {/* Maturity Ladder Illustration */}
                  {[40, 60, 80, 100].map((height, idx) => (
                    <div key={idx} className="w-16 bg-gradient-to-t from-rysun-blue to-indigo-400 rounded-t-lg relative group" style={{ height: `${height}%` }}>
                      <div className="absolute -top-8 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity text-sm font-bold text-rysun-blue">
                        L{idx + 1}
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Service 3 */}
            <div className="flex flex-col lg:flex-row items-center gap-16">
              <motion.div className="lg:w-1/2" {...fadeIn}>
                <h3 className="text-3xl font-bold text-gray-900 mb-6">Responsible AI & Ethics Implementation</h3>
                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                  Implement frameworks that ensure fairness, transparency, and responsible use of AI technologies.
                </p>
                <ul className="space-y-4">
                  {[
                    "Bias detection and mitigation",
                    "Explainable AI frameworks",
                    "Ethical AI governance policies",
                    "Responsible AI monitoring"
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start">
                      <CheckCircle2 className="w-6 h-6 text-rysun-blue mr-3 flex-shrink-0" />
                      <span className="text-gray-700 font-medium">{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
              <motion.div className="lg:w-1/2 w-full" {...fadeIn}>
                <div className="bg-slate-50 rounded-3xl p-8 border border-slate-100 flex items-center justify-center h-[320px] relative">
                  {/* Trustworthy AI Diagram */}
                  <div className="w-48 h-48 rounded-full border-4 border-indigo-100 flex items-center justify-center relative">
                    <Shield className="w-16 h-16 text-rysun-blue" />
                    <div className="absolute -top-4 bg-white px-3 py-1 rounded-full shadow-sm text-sm font-bold text-gray-700 border border-gray-100">Fairness</div>
                    <div className="absolute -bottom-4 bg-white px-3 py-1 rounded-full shadow-sm text-sm font-bold text-gray-700 border border-gray-100">Transparency</div>
                    <div className="absolute -left-12 bg-white px-3 py-1 rounded-full shadow-sm text-sm font-bold text-gray-700 border border-gray-100">Privacy</div>
                    <div className="absolute -right-12 bg-white px-3 py-1 rounded-full shadow-sm text-sm font-bold text-gray-700 border border-gray-100">Security</div>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Service 4 */}
            <div className="flex flex-col lg:flex-row-reverse items-center gap-16">
              <motion.div className="lg:w-1/2" {...fadeIn}>
                <h3 className="text-3xl font-bold text-gray-900 mb-6">AI Governance & Risk Management Framework</h3>
                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                  Establish governance systems that manage AI risks and ensure lifecycle oversight of AI models.
                </p>
                <ul className="space-y-4">
                  {[
                    "Model risk management (MRM)",
                    "AI auditing and compliance",
                    "Model lineage tracking",
                    "AI lifecycle governance"
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start">
                      <CheckCircle2 className="w-6 h-6 text-rysun-blue mr-3 flex-shrink-0" />
                      <span className="text-gray-700 font-medium">{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
              <motion.div className="lg:w-1/2 w-full" {...fadeIn}>
                <div className="bg-slate-50 rounded-3xl p-8 border border-slate-100 flex items-center justify-center h-[320px]">
                  {/* Governance Architecture Diagram */}
                  <div className="w-full max-w-sm space-y-4">
                    <div className="bg-white p-4 rounded-xl shadow-sm border border-indigo-100 text-center font-bold text-gray-800">Governance Oversight</div>
                    <div className="flex justify-center">
                      <div className="w-px h-6 bg-indigo-200"></div>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="bg-white p-4 rounded-xl shadow-sm border border-indigo-100 text-center text-sm font-semibold text-gray-700">Risk Management</div>
                      <div className="bg-white p-4 rounded-xl shadow-sm border border-indigo-100 text-center text-sm font-semibold text-gray-700">Compliance</div>
                    </div>
                    <div className="flex justify-center">
                      <div className="w-px h-6 bg-indigo-200"></div>
                    </div>
                    <div className="bg-white p-4 rounded-xl shadow-sm border border-indigo-100 text-center font-bold text-gray-800">AI Model Lifecycle</div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: AI Transformation Methodology */}
      <section className="py-24 bg-slate-900 text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div className="text-center mb-16" {...fadeIn}>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Our AI Strategy Framework</h2>
            <p className="text-lg text-slate-400 max-w-2xl mx-auto">A proven, step-by-step methodology to guide your enterprise from initial discovery to full-scale AI transformation.</p>
          </motion.div>

          <div className="relative">
            {/* Connecting Line (Desktop) */}
            <div className="hidden lg:block absolute top-1/2 left-0 w-full h-0.5 bg-slate-800 -translate-y-1/2 z-0"></div>
            
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 relative z-10">
              {[
                { step: "1", title: "Discover", desc: "Identify high-value AI opportunities.", icon: Search },
                { step: "2", title: "Assess", desc: "Evaluate AI maturity, data readiness, and infrastructure.", icon: Target },
                { step: "3", title: "Strategize", desc: "Create a prioritized AI roadmap.", icon: Map },
                { step: "4", title: "Govern", desc: "Implement responsible AI and governance frameworks.", icon: Shield },
                { step: "5", title: "Transform", desc: "Deploy and scale AI across the enterprise.", icon: Zap }
              ].map((item, idx) => (
                <motion.div 
                  key={idx} 
                  className="bg-slate-800/50 backdrop-blur-sm p-6 rounded-2xl border border-slate-700 text-center hover:bg-slate-800 transition-colors relative"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                >
                  <div className="w-12 h-12 mx-auto bg-rysun-blue rounded-full flex items-center justify-center mb-4 shadow-lg shadow-blue-900/50">
                    <item.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-sm font-bold text-rysun-lightblue mb-2 uppercase tracking-wider">Step {item.step}</div>
                  <h4 className="text-xl font-bold mb-3">{item.title}</h4>
                  <p className="text-slate-400 text-sm">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Section 5: AI Maturity Model */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div className="text-center mb-16" {...fadeIn}>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">AI Maturity Assessment Model</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">Understand where your organization stands and chart the path to becoming an AI-driven enterprise.</p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col space-y-4">
              {[
                { level: "Level 4", title: "AI-Driven Enterprise", desc: "AI embedded in strategic decision-making.", width: "100%", color: "bg-indigo-900" },
                { level: "Level 3", title: "Integrated AI", desc: "AI embedded into enterprise workflows.", width: "85%", color: "bg-indigo-700" },
                { level: "Level 2", title: "Operational AI", desc: "Production AI solutions.", width: "70%", color: "bg-rysun-blue" },
                { level: "Level 1", title: "Experimentation", desc: "AI pilots and prototypes.", width: "55%", color: "bg-blue-400" }
              ].map((tier, idx) => (
                <motion.div 
                  key={idx}
                  className={`${tier.color} text-white p-6 rounded-r-2xl shadow-md flex flex-col sm:flex-row sm:items-center justify-between`}
                  style={{ width: tier.width }}
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                >
                  <div>
                    <span className="text-sm font-bold opacity-80 uppercase tracking-wider block mb-1">{tier.level}</span>
                    <h4 className="text-xl font-bold">{tier.title}</h4>
                  </div>
                  <p className="sm:text-right mt-2 sm:mt-0 opacity-90 max-w-xs">{tier.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Section 6: Business Impact */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div className="text-center mb-16" {...fadeIn}>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Business Outcomes Enabled by AI Strategy</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { title: "Faster enterprise AI adoption", icon: Zap },
              { title: "Improved AI governance and compliance", icon: ShieldCheck },
              { title: "Reduced implementation risks", icon: TrendingUp },
              { title: "Higher return on AI investments", icon: BarChart }
            ].map((metric, idx) => (
              <motion.div 
                key={idx}
                className="bg-slate-50 p-8 rounded-2xl border border-slate-100 flex items-center gap-6 hover:bg-white hover:shadow-lg transition-all"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
              >
                <div className="w-16 h-16 bg-white rounded-full shadow-sm flex items-center justify-center flex-shrink-0 text-rysun-blue">
                  <metric.icon className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">{metric.title}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 7: Impact Stories */}
      <section className="py-16 bg-white border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center max-w-3xl mx-auto">
            <motion.h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-4" {...fadeIn}>Extraordinary Outcomes</motion.h2>
            <motion.p className="text-lg text-gray-600" {...fadeIn}>See how we help global enterprises turn complex challenges into competitive advantages through AI Strategy & Governance.</motion.p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            <div className="lg:col-span-7">
              <div className="bg-gradient-to-br from-gray-900 to-rysun-darkpurple rounded-3xl overflow-hidden shadow-xl h-full flex flex-col group relative">
                <div className="absolute inset-0 bg-[url('https://picsum.photos/seed/finance-ai/800/800?blur=4')] opacity-20 mix-blend-overlay transition-transform duration-1000 group-hover:scale-105" />
                <div className="p-10 flex-grow flex flex-col relative z-10">
                  <div className="inline-flex items-center px-3 py-1 rounded-full bg-white/10 backdrop-blur-md text-xs font-bold text-white uppercase tracking-wider w-max mb-8 border border-white/20">
                    Financial Services Success Story
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-6 leading-tight">Enterprise-Wide AI Governance Framework Implementation</h3>
                  <div className="grid grid-cols-3 gap-4 mb-10">
                    <div className="bg-white/10 backdrop-blur-md p-5 rounded-2xl border border-white/10">
                      <div className="text-3xl font-black text-rysun-lightblue mb-1">100%</div>
                      <div className="text-xs text-gray-300 font-medium uppercase tracking-wider">Compliance</div>
                    </div>
                    <div className="bg-white/10 backdrop-blur-md p-5 rounded-2xl border border-white/10">
                      <div className="text-3xl font-black text-rysun-orange mb-1">40%</div>
                      <div className="text-xs text-gray-300 font-medium uppercase tracking-wider">Faster Deployment</div>
                    </div>
                    <div className="bg-white/10 backdrop-blur-md p-5 rounded-2xl border border-white/10">
                      <div className="text-3xl font-black text-rysun-red mb-1">Zero</div>
                      <div className="text-xs text-gray-300 font-medium uppercase tracking-wider">Model Risks</div>
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
                { title: 'Responsible GenAI Roadmap', industry: 'Healthcare', desc: 'Safely launched 3 GenAI pilots with zero privacy breaches and high patient trust.', color: 'text-rysun-blue', bg: 'bg-blue-50' },
                { title: 'AI Readiness & Transformation', industry: 'Retail', desc: 'Scaled 5 AI initiatives globally, resulting in a 25% increase in operational efficiency.', color: 'text-rysun-orange', bg: 'bg-orange-50' },
                { title: 'Ethical AI Governance Policy', industry: 'Manufacturing', desc: 'Established automated bias detection and explainable AI frameworks across 12 global plants.', color: 'text-rysun-red', bg: 'bg-red-50' }
              ].map((story, idx) => (
                <Link key={idx} to="/insights/impact-stories" className="flex flex-col justify-center bg-gray-50 p-6 rounded-3xl shadow-sm border border-gray-100 hover:shadow-md hover:border-gray-200 transition-all group flex-1">
                  <div className={`text-xs font-black ${story.color} uppercase tracking-wider mb-2`}>{story.industry}</div>
                  <h4 className="text-lg font-bold text-gray-900 group-hover:text-rysun-blue transition-colors leading-snug mb-2">{story.title}</h4>
                  <p className="text-sm text-gray-600">{story.desc}</p>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Section 8: Latest Insights */}
      <section className="py-16 bg-gray-50 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
            <div className="max-w-2xl">
              <motion.h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-4" {...fadeIn}>Latest Insights</motion.h2>
              <motion.p className="text-lg text-gray-600" {...fadeIn}>Insights on AI strategy, governance, and digital transformation from our experts.</motion.p>
            </div>
            <Link to="/insights/blogs" className="hidden md:inline-flex items-center text-rysun-blue font-bold hover:text-rysun-lightblue transition-colors">
              View All Insights <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: 'The Future of GenAI in Enterprise Retail', category: 'Artificial Intelligence', date: 'March 10, 2026', img: 'retail-ai', color: 'text-rysun-blue', bg: 'bg-blue-50' },
              { title: 'Building Resilient Data Pipelines for Real-Time Analytics', category: 'Data Engineering', date: 'March 5, 2026', img: 'data-pipeline', color: 'text-rysun-orange', bg: 'bg-orange-50' },
              { title: 'Navigating Cloud Migration Security Challenges', category: 'Cloud & DevOps', date: 'February 28, 2026', img: 'cloud-security', color: 'text-rysun-lightblue', bg: 'bg-sky-50' }
            ].map((blog, idx) => (
              <Link key={idx} to="/insights/blogs" className="flex flex-col bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl border border-gray-100 transition-all group h-full">
                <div className="relative h-48 overflow-hidden">
                  <img src={`https://picsum.photos/seed/rysun-${blog.img}/600/400`} alt={blog.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" referrerPolicy="no-referrer" />
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md border border-white/20 px-3 py-1 rounded-full text-xs font-bold text-gray-900 uppercase tracking-wider z-10 shadow-sm">
                    {blog.category}
                  </div>
                </div>
                <div className="p-8 flex flex-col flex-grow">
                  <div className="text-sm text-gray-500 mb-3 font-medium">{blog.date}</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-rysun-blue transition-colors leading-snug flex-grow">{blog.title}</h3>
                  <div className="flex items-center text-sm font-bold text-rysun-blue mt-auto">
                    Read Article <ArrowRight className="ml-2 w-4 h-4" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
          <div className="mt-8 text-center md:hidden">
            <Link to="/insights/blogs" className="inline-flex items-center text-rysun-blue font-bold hover:text-rysun-lightblue transition-colors">
              View All Insights <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Section 9: Why Rysun Labs */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div className="text-center mb-16" {...fadeIn}>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Why Rysun Labs</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Enterprise AI Strategy Expertise", icon: Target },
              { title: "Responsible AI Frameworks", icon: ShieldCheck },
              { title: "End-to-End AI Implementation", icon: Layers },
              { title: "Cross-Industry AI Experience", icon: Network }
            ].map((prop, idx) => (
              <motion.div 
                key={idx}
                className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 text-center hover:-translate-y-1 transition-transform"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
              >
                <div className="w-14 h-14 mx-auto bg-indigo-50 rounded-full flex items-center justify-center mb-6 text-rysun-blue">
                  <prop.icon className="w-7 h-7" />
                </div>
                <h3 className="text-lg font-bold text-gray-900">{prop.title}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 10: Final Call to Action */}
      <section className="py-24 bg-gradient-to-br from-slate-900 via-indigo-900 to-purple-900 text-white text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="cta-grid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="1" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#cta-grid)" />
          </svg>
        </div>
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div {...fadeIn}>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Start Your AI Transformation Journey</h2>
            <p className="text-xl text-indigo-200 mb-10 max-w-2xl mx-auto font-light">
              Partner with Rysun Labs to design and implement a responsible AI strategy that drives innovation and long-term business value.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link to="/contact-us" className="inline-flex items-center justify-center px-8 py-4 text-base font-bold rounded-full text-white bg-rysun-blue hover:bg-blue-700 transition-all shadow-lg hover:shadow-xl hover:-translate-y-1">
                Schedule AI Strategy Workshop
                <ChevronRight className="ml-2 w-5 h-5" />
              </Link>
              <Link to="/contact-us" className="inline-flex items-center justify-center px-8 py-4 text-base font-bold rounded-full text-white bg-white/10 hover:bg-white/20 border border-white/20 transition-all">
                Talk to AI Experts
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
