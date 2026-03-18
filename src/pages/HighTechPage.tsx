import React from 'react';
import { motion } from 'framer-motion';
import { 
  Cpu, 
  Database, 
  LineChart, 
  Zap, 
  Layers, 
  Workflow,
  Bot,
  Code,
  Box,
  Network,
  ArrowRight,
  CheckCircle2,
  BarChart3,
  Server,
  Cloud,
  ShieldCheck,
  Lightbulb,
  Settings,
  BookOpen
} from 'lucide-react';
import { Link } from 'react-router-dom';

const HighTechPage = () => {
  return (
    <div className="bg-white">
      {/* 1. Hero Banner */}
      <section className="relative min-h-[60vh] lg:min-h-[70vh] flex items-center pb-10 overflow-hidden bg-slate-900">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:3rem_3rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-20" />
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-indigo-500/10 rounded-full blur-3xl" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="max-w-3xl">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-medium mb-5 backdrop-blur-sm">
                  <Cpu className="w-3.5 h-3.5" />
                  <span>High-Tech & SaaS Industry</span>
                </div>
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white tracking-tight mb-5 leading-tight">
                  Accelerating High-Tech Innovation with <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">AI and Data</span>
                </h1>
                <p className="text-base text-gray-300 mb-6 leading-relaxed max-w-lg">
                  Helping high-tech and SaaS companies build intelligent products, data-driven platforms, and automated workflows to stay ahead in a rapidly evolving digital ecosystem.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 mb-4">
                  <button className="inline-flex items-center justify-center px-6 py-3 text-sm font-medium rounded-full text-white bg-gradient-to-r from-blue-600 to-indigo-600 hover:shadow-[0_0_30px_rgba(59,130,246,0.5)] hover:-translate-y-0.5 transition-all gap-2">
                    Explore Solutions <ArrowRight className="w-4 h-4" />
                  </button>
                  <button className="inline-flex items-center justify-center px-6 py-3 text-sm font-medium rounded-full text-white bg-transparent border border-white/30 hover:bg-white/10 transition-all backdrop-blur-sm">
                    Talk to an Expert
                  </button>
                </div>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="hidden lg:flex justify-center items-center relative h-[420px] -translate-y-8"
            >
              <div className="relative w-full max-w-lg aspect-square flex items-center justify-center">
                {/* Background Glow */}
                <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/20 to-purple-500/20 rounded-full blur-[80px]" />

                {/* Rotating Rings */}
                <motion.div className="absolute w-[280px] h-[280px] rounded-full border border-blue-500/30 border-dashed" animate={{ rotate: 360 }} transition={{ duration: 30, repeat: Infinity, ease: "linear" }} />
                <motion.div className="absolute w-[380px] h-[380px] rounded-full border border-purple-500/20" animate={{ rotate: -360 }} transition={{ duration: 40, repeat: Infinity, ease: "linear" }} />
                <motion.div className="absolute w-[480px] h-[480px] rounded-full border border-cyan-500/20 border-dotted" animate={{ rotate: 360 }} transition={{ duration: 50, repeat: Infinity, ease: "linear" }} />

                {/* SVG Connections */}
                <svg className="absolute inset-0 w-full h-full z-10 pointer-events-none" viewBox="0 0 500 500">
                   <defs>
                     <linearGradient id="lineGrad1" x1="0%" y1="100%" x2="100%" y2="0%"><stop offset="0%" stopColor="rgba(59,130,246,0)" /><stop offset="100%" stopColor="rgba(59,130,246,0.8)" /></linearGradient>
                     <linearGradient id="lineGrad2" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stopColor="rgba(168,85,247,0)" /><stop offset="100%" stopColor="rgba(168,85,247,0.8)" /></linearGradient>
                     <linearGradient id="lineGrad3" x1="100%" y1="0%" x2="0%" y2="100%"><stop offset="0%" stopColor="rgba(6,182,212,0)" /><stop offset="100%" stopColor="rgba(6,182,212,0.8)" /></linearGradient>
                     <linearGradient id="lineGrad4" x1="100%" y1="100%" x2="0%" y2="0%"><stop offset="0%" stopColor="rgba(236,72,153,0)" /><stop offset="100%" stopColor="rgba(236,72,153,0.8)" /></linearGradient>
                   </defs>
                   {/* Top Right */}
                   <motion.line x1="250" y1="250" x2="400" y2="100" stroke="url(#lineGrad1)" strokeWidth="2" strokeDasharray="6 6" animate={{ strokeDashoffset: [24, 0] }} transition={{ duration: 1, repeat: Infinity, ease: "linear" }} />
                   {/* Bottom Right */}
                   <motion.line x1="250" y1="250" x2="400" y2="400" stroke="url(#lineGrad2)" strokeWidth="2" strokeDasharray="6 6" animate={{ strokeDashoffset: [24, 0] }} transition={{ duration: 1, repeat: Infinity, ease: "linear" }} />
                   {/* Bottom Left */}
                   <motion.line x1="250" y1="250" x2="100" y2="400" stroke="url(#lineGrad3)" strokeWidth="2" strokeDasharray="6 6" animate={{ strokeDashoffset: [24, 0] }} transition={{ duration: 1, repeat: Infinity, ease: "linear" }} />
                   {/* Top Left */}
                   <motion.line x1="250" y1="250" x2="100" y2="100" stroke="url(#lineGrad4)" strokeWidth="2" strokeDasharray="6 6" animate={{ strokeDashoffset: [24, 0] }} transition={{ duration: 1, repeat: Infinity, ease: "linear" }} />
                </svg>

                {/* Central Core */}
                <motion.div
                  className="absolute z-20 w-32 h-32 bg-slate-900/80 backdrop-blur-xl rounded-2xl border border-blue-500/50 shadow-[0_0_50px_rgba(59,130,246,0.3)] flex items-center justify-center overflow-hidden"
                  animate={{ y: [-10, 10, -10] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20" />
                  <motion.div animate={{ rotate: 360 }} transition={{ duration: 10, repeat: Infinity, ease: "linear" }} className="absolute inset-0 border-[4px] border-t-blue-500 border-r-transparent border-b-purple-500 border-l-transparent rounded-2xl opacity-50" />
                  <Cpu className="w-12 h-12 text-white relative z-10" />
                </motion.div>

                {/* Nodes */}
                {/* Top Right: Cloud */}
                <motion.div
                  className="absolute z-20 w-16 h-16 bg-slate-800/90 backdrop-blur-md rounded-xl border border-blue-400/40 shadow-lg shadow-blue-500/20 flex items-center justify-center"
                  style={{ top: '12%', right: '12%' }}
                  animate={{ y: [5, -5, 5] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 0.2 }}
                >
                  <Cloud className="w-7 h-7 text-blue-400" />
                </motion.div>

                {/* Bottom Right: Database */}
                <motion.div
                  className="absolute z-20 w-16 h-16 bg-slate-800/90 backdrop-blur-md rounded-xl border border-purple-400/40 shadow-lg shadow-purple-500/20 flex items-center justify-center"
                  style={{ bottom: '12%', right: '12%' }}
                  animate={{ y: [-5, 5, -5] }}
                  transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                >
                  <Database className="w-7 h-7 text-purple-400" />
                </motion.div>

                {/* Bottom Left: AI/Bot */}
                <motion.div
                  className="absolute z-20 w-16 h-16 bg-slate-800/90 backdrop-blur-md rounded-xl border border-cyan-400/40 shadow-lg shadow-cyan-500/20 flex items-center justify-center"
                  style={{ bottom: '12%', left: '12%' }}
                  animate={{ y: [5, -5, 5] }}
                  transition={{ duration: 3.2, repeat: Infinity, ease: "easeInOut", delay: 0.8 }}
                >
                  <Bot className="w-7 h-7 text-cyan-400" />
                </motion.div>

                {/* Top Left: Security */}
                <motion.div
                  className="absolute z-20 w-16 h-16 bg-slate-800/90 backdrop-blur-md rounded-xl border border-pink-400/40 shadow-lg shadow-pink-500/20 flex items-center justify-center"
                  style={{ top: '12%', left: '12%' }}
                  animate={{ y: [-5, 5, -5] }}
                  transition={{ duration: 3.8, repeat: Infinity, ease: "easeInOut", delay: 1.1 }}
                >
                  <ShieldCheck className="w-7 h-7 text-pink-400" />
                </motion.div>
                
                {/* Floating Data Packets (Small dots) */}
                <motion.div className="absolute z-30 w-3 h-3 bg-blue-400 rounded-full shadow-[0_0_10px_#60a5fa]" animate={{ top: ['50%', '15%'], left: ['50%', '85%'], opacity: [0, 1, 0] }} transition={{ duration: 2, repeat: Infinity, ease: "easeOut" }} />
                <motion.div className="absolute z-30 w-3 h-3 bg-purple-400 rounded-full shadow-[0_0_10px_#c084fc]" animate={{ top: ['50%', '85%'], left: ['50%', '85%'], opacity: [0, 1, 0] }} transition={{ duration: 2.5, repeat: Infinity, ease: "easeOut", delay: 0.5 }} />
                <motion.div className="absolute z-30 w-3 h-3 bg-cyan-400 rounded-full shadow-[0_0_10px_#22d3ee]" animate={{ top: ['50%', '85%'], left: ['50%', '15%'], opacity: [0, 1, 0] }} transition={{ duration: 2.2, repeat: Infinity, ease: "easeOut", delay: 1 }} />
                <motion.div className="absolute z-30 w-3 h-3 bg-pink-400 rounded-full shadow-[0_0_10px_#f472b6]" animate={{ top: ['50%', '15%'], left: ['50%', '15%'], opacity: [0, 1, 0] }} transition={{ duration: 2.8, repeat: Infinity, ease: "easeOut", delay: 1.5 }} />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 2. Industry Overview */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-slate-900 mb-6">
                The Next Era of High-Tech & SaaS
              </h2>
              <p className="text-lg text-slate-600 mb-6">
                The technology industry is undergoing a massive shift. Product-led growth, AI-powered experiences, and the explosion of product data are redefining how software is built, delivered, and consumed.
              </p>
              <p className="text-lg text-slate-600 mb-8">
                To thrive, high-tech companies must evolve from traditional software providers to intelligent platform ecosystems, leveraging data and AI at every layer of their architecture.
              </p>
              
              <div className="space-y-4">
                {[
                  "Transitioning to Product-Led Growth (PLG)",
                  "Embedding AI into core product experiences",
                  "Managing exponential product data growth",
                  "Automating engineering and operational workflows"
                ].map((point, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="mt-1 w-5 h-5 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
                      <CheckCircle2 className="w-3 h-3 text-blue-600" />
                    </div>
                    <span className="text-slate-700">{point}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative"
            >
              {/* Decorative background blob */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-tr from-blue-200 to-purple-200 rounded-full blur-3xl -z-10 opacity-40" />
              
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4 mt-12">
                  {[
                    { title: "Intelligent Products", icon: Lightbulb, color: "text-amber-600", bg: "bg-amber-100", border: "border-amber-200" },
                    { title: "Automated Workflows", icon: Workflow, color: "text-emerald-600", bg: "bg-emerald-100", border: "border-emerald-200" },
                  ].map((item, i) => (
                    <motion.div 
                      key={i} 
                      whileHover={{ y: -5 }}
                      className={`p-6 rounded-2xl bg-white/80 backdrop-blur-sm border ${item.border} shadow-xl shadow-slate-200/50`}
                    >
                      <div className={`w-12 h-12 rounded-xl ${item.bg} flex items-center justify-center mb-4`}>
                        <item.icon className={`w-6 h-6 ${item.color}`} />
                      </div>
                      <h3 className="font-semibold text-slate-900">{item.title}</h3>
                    </motion.div>
                  ))}
                </div>
                <div className="space-y-4">
                  {[
                    { title: "Data Ecosystems", icon: Network, color: "text-blue-600", bg: "bg-blue-100", border: "border-blue-200" },
                    { title: "Predictive Analytics", icon: LineChart, color: "text-purple-600", bg: "bg-purple-100", border: "border-purple-200" }
                  ].map((item, i) => (
                    <motion.div 
                      key={i} 
                      whileHover={{ y: -5 }}
                      className={`p-6 rounded-2xl bg-white/80 backdrop-blur-sm border ${item.border} shadow-xl shadow-slate-200/50`}
                    >
                      <div className={`w-12 h-12 rounded-xl ${item.bg} flex items-center justify-center mb-4`}>
                        <item.icon className={`w-6 h-6 ${item.color}`} />
                      </div>
                      <h3 className="font-semibold text-slate-900">{item.title}</h3>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 3. Key Challenges */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Challenges in the High-Tech Ecosystem</h2>
            <p className="text-lg text-slate-600">Navigating the complexities of modern software delivery and platform scaling.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: BarChart3,
                title: "Understanding Product Usage",
                desc: "Struggling to extract actionable insights from vast amounts of user interaction and telemetry data."
              },
              {
                icon: Layers,
                title: "Scaling SaaS Platforms",
                desc: "Architecting data platforms that can handle multi-tenant scale, real-time processing, and complex analytics."
              },
              {
                icon: Settings,
                title: "Automating Workflows",
                desc: "Manual engineering and operational processes slowing down feature delivery and increasing costs."
              }
            ].map((challenge, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-8 rounded-2xl bg-slate-50 border border-slate-100"
              >
                <div className="w-12 h-12 rounded-lg bg-white border border-slate-200 flex items-center justify-center mb-6 shadow-sm">
                  <challenge.icon className="w-6 h-6 text-slate-700" />
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-3">{challenge.title}</h3>
                <p className="text-slate-600">{challenge.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Solution Framework */}
      <section className="py-20 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold mb-4">Rysun High-Tech AI & Data Solution Framework</h2>
            <p className="text-lg text-slate-400">A comprehensive suite of capabilities designed to transform technology companies into AI-driven platform leaders.</p>
          </div>

          <div className="grid md:grid-cols-5 gap-4">
            {[
              { title: "AI-Powered Product Intelligence", icon: Lightbulb },
              { title: "GenAI for Software Platforms", icon: Bot },
              { title: "Intelligent Automation", icon: Zap },
              { title: "Product Data Platforms", icon: Database },
              { title: "Product Analytics", icon: LineChart }
            ].map((pillar, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-6 rounded-xl bg-slate-800 border border-slate-700 text-center hover:bg-slate-700/50 transition-colors"
              >
                <pillar.icon className="w-8 h-8 text-blue-400 mx-auto mb-4" />
                <h3 className="font-medium text-sm text-slate-200">{pillar.title}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. AI-Powered Product Intelligence */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="w-12 h-12 rounded-lg bg-blue-50 flex items-center justify-center mb-6">
                <Lightbulb className="w-6 h-6 text-blue-600" />
              </div>
              <h2 className="text-3xl font-bold text-slate-900 mb-6">AI-Powered Product Intelligence</h2>
              <p className="text-lg text-slate-600 mb-8">
                Embed intelligence directly into your digital products. We help you build features that learn from user behavior, anticipate needs, and deliver hyper-personalized experiences.
              </p>
              
              <div className="space-y-6">
                {[
                  { title: "Recommendation Engines", desc: "Suggest relevant features, content, or next best actions based on user history." },
                  { title: "User Behavior Prediction", desc: "Anticipate churn risk, upgrade likelihood, or feature adoption patterns." },
                  { title: "AI-Driven Personalization", desc: "Dynamically adapt UI and workflows to individual user preferences." }
                ].map((feature, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="mt-1 w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
                      <CheckCircle2 className="w-4 h-4 text-blue-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-900">{feature.title}</h4>
                      <p className="text-slate-600 text-sm mt-1">{feature.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="bg-slate-50 rounded-2xl p-8 border border-slate-100 shadow-xl relative overflow-hidden">
                {/* Abstract UI Representation */}
                <div className="space-y-4">
                  <div className="h-8 w-1/3 bg-slate-200 rounded animate-pulse" />
                  <div className="grid grid-cols-3 gap-4">
                    {[1, 2, 3].map(i => (
                      <div key={i} className="h-24 bg-white rounded-lg border border-slate-200 shadow-sm p-4 relative overflow-hidden">
                        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-400 to-indigo-400" />
                        <div className="h-4 w-1/2 bg-slate-100 rounded mb-2" />
                        <div className="h-3 w-3/4 bg-slate-50 rounded" />
                      </div>
                    ))}
                  </div>
                  <div className="h-32 bg-white rounded-lg border border-slate-200 shadow-sm p-4 flex items-center justify-center">
                    <div className="flex items-center gap-3 text-blue-600 font-medium">
                      <Bot className="w-5 h-5" />
                      AI Recommended Action
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 6. GenAI for Software Platforms */}
      <section className="py-24 bg-slate-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="order-2 lg:order-1 relative"
            >
               <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-xl">
                 <div className="flex items-center gap-3 border-b border-slate-100 pb-4 mb-4">
                   <div className="w-8 h-8 rounded-full bg-purple-100 flex items-center justify-center">
                     <Bot className="w-4 h-4 text-purple-600" />
                   </div>
                   <div className="font-medium text-slate-900">Platform Copilot</div>
                 </div>
                 <div className="space-y-4">
                   <div className="bg-slate-50 rounded-lg p-3 text-sm text-slate-600 w-3/4">
                     How do I configure the new data pipeline?
                   </div>
                   <div className="bg-purple-50 rounded-lg p-3 text-sm text-purple-900 w-5/6 ml-auto border border-purple-100">
                     I can help with that. Here are the steps to configure your pipeline, or I can automate the setup for you based on your current schema.
                     <div className="mt-3 flex gap-2">
                       <button className="px-3 py-1.5 bg-white rounded border border-purple-200 text-xs font-medium text-purple-700">View Docs</button>
                       <button className="px-3 py-1.5 bg-purple-600 rounded text-white text-xs font-medium">Auto-Configure</button>
                     </div>
                   </div>
                 </div>
               </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="order-1 lg:order-2"
            >
              <div className="w-12 h-12 rounded-lg bg-purple-50 flex items-center justify-center mb-6">
                <Bot className="w-6 h-6 text-purple-600" />
              </div>
              <h2 className="text-3xl font-bold text-slate-900 mb-6">GenAI for Software Platforms</h2>
              <p className="text-lg text-slate-600 mb-8">
                Transform how users interact with your software. Integrate Generative AI to create intelligent copilots, conversational interfaces, and automated content generation.
              </p>
              
              <div className="space-y-6">
                {[
                  { title: "AI Copilots", desc: "In-app assistants that guide users, execute complex tasks, and improve productivity." },
                  { title: "Knowledge Assistants", desc: "Conversational search across documentation, support tickets, and internal wikis." },
                  { title: "AI Customer Support Agents", desc: "Automate L1/L2 support with intelligent agents that understand context and intent." }
                ].map((feature, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="mt-1 w-6 h-6 rounded-full bg-purple-100 flex items-center justify-center flex-shrink-0">
                      <CheckCircle2 className="w-4 h-4 text-purple-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-900">{feature.title}</h4>
                      <p className="text-slate-600 text-sm mt-1">{feature.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 7. Intelligent Automation Platforms */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="w-12 h-12 rounded-lg bg-emerald-50 flex items-center justify-center mb-6">
                <Workflow className="w-6 h-6 text-emerald-600" />
              </div>
              <h2 className="text-3xl font-bold text-slate-900 mb-6">Intelligent Automation Platforms</h2>
              <p className="text-lg text-slate-600 mb-8">
                Accelerate software delivery and streamline operations. We build AI-driven automation platforms that optimize engineering workflows, testing, and deployment.
              </p>
              
              <div className="space-y-6">
                {[
                  { title: "AI Workflow Automation", desc: "Automate repetitive tasks across engineering, ops, and business systems." },
                  { title: "DevOps Assistants", desc: "AI tools to analyze logs, predict deployment failures, and optimize infrastructure." },
                  { title: "Testing Assistants", desc: "Automated test generation, execution, and intelligent bug triaging." }
                ].map((feature, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="mt-1 w-6 h-6 rounded-full bg-emerald-100 flex items-center justify-center flex-shrink-0">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-900">{feature.title}</h4>
                      <p className="text-slate-600 text-sm mt-1">{feature.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="bg-slate-900 rounded-2xl p-8 border border-slate-800 shadow-2xl">
                <div className="flex items-center gap-2 mb-6">
                  <div className="w-3 h-3 rounded-full bg-red-500" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500" />
                  <div className="w-3 h-3 rounded-full bg-green-500" />
                </div>
                <div className="space-y-4 font-mono text-sm">
                  <div className="text-emerald-400">$ AI_AGENT start workflow --type=deployment</div>
                  <div className="text-slate-400">Analyzing recent commits...</div>
                  <div className="text-slate-400">Running automated test suite...</div>
                  <div className="text-blue-400">✓ 452 tests passed</div>
                  <div className="text-slate-400">Checking infrastructure capacity...</div>
                  <div className="text-emerald-400">✓ Capacity verified. Initiating rolling update.</div>
                  <div className="text-white mt-4 flex items-center gap-2">
                    <span className="w-2 h-4 bg-white animate-pulse" />
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 8. Product Data Platforms */}
      <section className="py-24 bg-slate-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
             <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="order-2 lg:order-1 relative"
            >
              <div className="bg-white rounded-2xl p-8 border border-slate-200 shadow-xl">
                <div className="flex flex-col gap-6">
                  {/* Sources */}
                  <div className="flex justify-between items-center px-4">
                    <div className="w-12 h-12 rounded-full bg-slate-100 flex items-center justify-center border border-slate-200"><Box className="w-5 h-5 text-slate-600" /></div>
                    <div className="w-12 h-12 rounded-full bg-slate-100 flex items-center justify-center border border-slate-200"><Box className="w-5 h-5 text-slate-600" /></div>
                    <div className="w-12 h-12 rounded-full bg-slate-100 flex items-center justify-center border border-slate-200"><Box className="w-5 h-5 text-slate-600" /></div>
                  </div>
                  {/* Arrows */}
                  <div className="flex justify-center">
                    <ArrowRight className="w-6 h-6 text-slate-300 rotate-90" />
                  </div>
                  {/* Platform */}
                  <div className="bg-blue-50 border border-blue-100 rounded-xl p-6 text-center">
                    <Database className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                    <div className="font-semibold text-blue-900">Unified Data Lakehouse</div>
                    <div className="text-xs text-blue-700 mt-1">Real-time Event Streaming & Processing</div>
                  </div>
                  {/* Arrows */}
                  <div className="flex justify-center">
                    <ArrowRight className="w-6 h-6 text-slate-300 rotate-90" />
                  </div>
                  {/* Outputs */}
                  <div className="flex justify-between items-center px-4">
                    <div className="w-12 h-12 rounded-full bg-emerald-50 flex items-center justify-center border border-emerald-200"><LineChart className="w-5 h-5 text-emerald-600" /></div>
                    <div className="w-12 h-12 rounded-full bg-purple-50 flex items-center justify-center border border-purple-200"><Bot className="w-5 h-5 text-purple-600" /></div>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="order-1 lg:order-2"
            >
              <div className="w-12 h-12 rounded-lg bg-blue-50 flex items-center justify-center mb-6">
                <Database className="w-6 h-6 text-blue-600" />
              </div>
              <h2 className="text-3xl font-bold text-slate-900 mb-6">Product Data Platforms</h2>
              <p className="text-lg text-slate-600 mb-8">
                Build the foundation for product intelligence. We design scalable, real-time data architectures that unify telemetry, transactional, and user data.
              </p>
              
              <div className="space-y-6">
                {[
                  { title: "Data Lakehouse Architecture", desc: "Combine the flexibility of data lakes with the performance of data warehouses." },
                  { title: "Event Streaming", desc: "Process millions of product events in real-time for immediate insights and actions." },
                  { title: "Unified Analytics Platforms", desc: "Single source of truth for product, marketing, and engineering teams." }
                ].map((feature, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="mt-1 w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
                      <CheckCircle2 className="w-4 h-4 text-blue-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-900">{feature.title}</h4>
                      <p className="text-slate-600 text-sm mt-1">{feature.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 9. Product Analytics */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="w-12 h-12 rounded-lg bg-indigo-50 flex items-center justify-center mb-6">
                <LineChart className="w-6 h-6 text-indigo-600" />
              </div>
              <h2 className="text-3xl font-bold text-slate-900 mb-6">Product Analytics</h2>
              <p className="text-lg text-slate-600 mb-8">
                Drive product-led growth with deep behavioral insights. Understand how users interact with your software to optimize adoption, retention, and monetization.
              </p>
              
              <div className="space-y-6">
                {[
                  { title: "Feature Usage & Adoption", desc: "Track which features drive value and which need improvement." },
                  { title: "Journey Analytics", desc: "Map the end-to-end user journey to identify friction points and drop-offs." },
                  { title: "Churn Prediction", desc: "Identify at-risk accounts before they cancel using predictive models." }
                ].map((feature, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="mt-1 w-6 h-6 rounded-full bg-indigo-100 flex items-center justify-center flex-shrink-0">
                      <CheckCircle2 className="w-4 h-4 text-indigo-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-900">{feature.title}</h4>
                      <p className="text-slate-600 text-sm mt-1">{feature.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200 shadow-xl">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="font-semibold text-slate-900">User Retention</h3>
                  <div className="px-2 py-1 bg-emerald-100 text-emerald-700 text-xs font-medium rounded">+12% YoY</div>
                </div>
                <div className="h-48 flex items-end gap-2">
                  {[40, 30, 50, 45, 60, 75, 85].map((height, i) => (
                    <div key={i} className="flex-1 bg-indigo-100 rounded-t-sm relative group">
                      <div 
                        className="absolute bottom-0 left-0 w-full bg-indigo-500 rounded-t-sm transition-all duration-500"
                        style={{ height: `${height}%` }}
                      />
                    </div>
                  ))}
                </div>
                <div className="flex justify-between mt-4 text-xs text-slate-500">
                  <span>Week 1</span>
                  <span>Week 4</span>
                  <span>Week 8</span>
                  <span>Week 12</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 10. Transformation Approach */}
      <section className="py-20 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold mb-4">Our AI & Data Transformation Approach</h2>
            <p className="text-lg text-slate-400">A proven methodology for delivering high-impact technology solutions.</p>
          </div>

          <div className="grid md:grid-cols-5 gap-8 relative">
            <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-slate-800 -translate-y-1/2 z-0" />
            
            {[
              { title: "Discover", desc: "Assess current architecture and identify high-value AI/Data use cases.", icon: Lightbulb },
              { title: "Design", desc: "Architect scalable platforms and design intelligent product experiences.", icon: Layers },
              { title: "Build", desc: "Develop data pipelines, train models, and integrate AI capabilities.", icon: Code },
              { title: "Deploy", desc: "Implement automated CI/CD and deploy to production environments.", icon: Server },
              { title: "Scale", desc: "Monitor performance, optimize models, and scale infrastructure.", icon: LineChart }
            ].map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="relative z-10 flex flex-col items-center text-center"
              >
                <div className="w-16 h-16 rounded-full bg-slate-800 border-4 border-slate-900 flex items-center justify-center mb-4 shadow-xl">
                  <step.icon className="w-6 h-6 text-blue-400" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
                <p className="text-sm text-slate-400">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 11. Impact Stories */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-600 text-sm font-medium mb-6">
                <LineChart className="w-4 h-4" />
                Impact Stories
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Extraordinary Outcomes in High-Tech</h2>
              <p className="text-lg text-slate-600">See how we've helped leading high-tech companies transform their products and platforms.</p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            <div className="lg:col-span-7">
              <div className="bg-gradient-to-br from-slate-900 to-blue-950 rounded-3xl overflow-hidden shadow-xl h-full flex flex-col group relative">
                <div className="absolute inset-0 bg-[url('https://picsum.photos/seed/rysun-hightech/800/800?blur=4')] opacity-20 mix-blend-overlay transition-transform duration-1000 group-hover:scale-105" />
                <div className="p-10 flex-grow flex flex-col relative z-10">
                  <div className="inline-flex items-center px-3 py-1 rounded-full bg-white/10 backdrop-blur-md text-xs font-bold text-white uppercase tracking-wider w-max mb-8 border border-white/20">
                    SaaS Success Story
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-6 leading-tight">AI-Powered Product Recommendations for a Leading SaaS Provider</h3>
                  <div className="grid grid-cols-3 gap-4 mb-10">
                    <div className="bg-white/10 backdrop-blur-md p-5 rounded-2xl border border-white/10">
                      <div className="text-3xl font-black text-blue-400 mb-1">35%</div>
                      <div className="text-xs text-slate-300 font-medium uppercase tracking-wider">Feature Adoption</div>
                    </div>
                    <div className="bg-white/10 backdrop-blur-md p-5 rounded-2xl border border-white/10">
                      <div className="text-3xl font-black text-emerald-400 mb-1">15%</div>
                      <div className="text-xs text-slate-300 font-medium uppercase tracking-wider">Churn Reduction</div>
                    </div>
                    <div className="bg-white/10 backdrop-blur-md p-5 rounded-2xl border border-white/10">
                      <div className="text-3xl font-black text-purple-400 mb-1">6mo</div>
                      <div className="text-xs text-slate-300 font-medium uppercase tracking-wider">Time to Value</div>
                    </div>
                  </div>
                  <div className="mt-auto">
                    <Link to="/insights/impact-stories" className="inline-flex items-center justify-center px-8 py-4 text-sm font-bold rounded-full text-slate-900 bg-white hover:bg-slate-50 transition-all shadow-lg">
                      Read Full Story <ArrowRight className="ml-2 w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="lg:col-span-5 flex flex-col gap-6">
              {[
                { title: 'SaaS Product Analytics Platform', client: 'Enterprise Software Company', desc: 'Built a modern data lakehouse and unified product analytics dashboard, resulting in a 20% increase in self-serve upgrades.', color: 'text-blue-600', bg: 'bg-blue-50' },
                { title: 'AI DevOps Assistance', client: 'Cloud Infrastructure Provider', desc: 'Deployed an AI-driven DevOps assistant to analyze logs and predict deployment risks, reducing failures by 40%.', color: 'text-emerald-600', bg: 'bg-emerald-50' },
                { title: 'Automated Customer Onboarding', client: 'B2B SaaS Platform', desc: 'Implemented AI-driven workflows to automate the onboarding process, reducing time-to-value by 50%.', color: 'text-purple-600', bg: 'bg-purple-50' }
              ].map((story, idx) => (
                <Link key={idx} to="/insights/impact-stories" className="flex flex-col justify-center bg-slate-50 p-6 rounded-3xl shadow-sm border border-slate-100 hover:shadow-md hover:border-slate-200 transition-all group flex-1">
                  <div className={`text-xs font-black ${story.color} uppercase tracking-wider mb-2`}>{story.client}</div>
                  <h4 className="text-lg font-bold text-slate-900 group-hover:text-blue-600 transition-colors leading-snug mb-2">{story.title}</h4>
                  <p className="text-sm text-slate-600">{story.desc}</p>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 12. Insights & Thought Leadership */}
      <section className="py-24 bg-slate-50 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-600 text-sm font-bold mb-6">
                <BookOpen className="w-4 h-4" />
                Insights & Thought Leadership
              </div>
              <h2 className="text-2xl md:text-4xl font-bold text-slate-900 mb-4">Latest Insights in High-Tech</h2>
              <p className="text-lg text-slate-600">Latest perspectives on AI, data, and product innovation in the high-tech sector.</p>
            </div>
            <Link to="/insights/blogs" className="hidden md:inline-flex items-center text-blue-600 font-bold hover:text-blue-500 transition-colors">
              View All Insights <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                category: "Whitepaper",
                title: "The Future of AI in SaaS Product Platforms",
                image: "hightech-ai",
                date: "Oct 15, 2023"
              },
              {
                category: "Case Study",
                title: "Driving Product-Led Growth with Advanced Data Analytics",
                image: "hightech-data",
                date: "Nov 02, 2023"
              },
              {
                category: "Article",
                title: "Building Scalable Data Lakehouses for Tech Enterprises",
                image: "hightech-cloud",
                date: "Nov 18, 2023"
              }
            ].map((insight, i) => (
              <Link key={i} to="/insights/blogs" className="flex flex-col bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl border border-slate-100 transition-all group h-full">
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={`https://picsum.photos/seed/rysun-${insight.image}/600/400`} 
                    alt={insight.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md border border-white/20 px-3 py-1 rounded-full text-xs font-bold text-slate-900 uppercase tracking-wider z-10 shadow-sm">
                    {insight.category}
                  </div>
                </div>
                <div className="p-8 flex flex-col flex-grow">
                  <div className="text-sm text-slate-500 mb-3 font-medium">{insight.date}</div>
                  <h3 className="text-xl font-bold text-slate-900 mb-4 group-hover:text-blue-600 transition-colors leading-snug flex-grow">{insight.title}</h3>
                  <div className="flex items-center text-sm font-bold text-blue-600 mt-auto">
                    Read Article <ArrowRight className="ml-2 w-4 h-4" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
          <div className="mt-8 text-center md:hidden">
            <Link to="/insights/blogs" className="inline-flex items-center text-blue-600 font-bold hover:text-blue-500 transition-colors">
              View All Insights <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* 13. Why Rysun Labs */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Why Rysun Labs for High-Tech</h2>
            <p className="text-lg text-slate-600">We combine deep technology expertise with product innovation to deliver transformative results.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Bot, title: "AI-First Approach", desc: "Deep expertise in embedding AI into core product experiences." },
              { icon: Database, title: "SaaS Data Experts", desc: "Proven track record in building scalable data platforms for multi-tenant SaaS." },
              { icon: Zap, title: "Solution Accelerators", desc: "Pre-built frameworks to speed up development and time-to-market." },
              { icon: ShieldCheck, title: "Enterprise Delivery", desc: "Rigorous engineering standards and enterprise-grade security practices." }
            ].map((reason, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white p-6 rounded-2xl border border-slate-200 text-center"
              >
                <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center mx-auto mb-4">
                  <reason.icon className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="font-semibold text-slate-900 mb-2">{reason.title}</h3>
                <p className="text-sm text-slate-600">{reason.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 14. Final CTA */}
      <section className="py-24 bg-blue-600 text-white relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff1a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff1a_1px,transparent_1px)] bg-[size:2rem_2rem]" />
        </div>
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Build the Next Generation of Intelligent Products with AI and Data
          </h2>
          <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto">
            Partner with Rysun Labs to accelerate your product roadmap and transform your technology platform.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="px-8 py-4 bg-white text-blue-600 rounded-lg font-bold hover:bg-blue-50 transition-colors">
              Talk to Our Experts
            </button>
            <button className="px-8 py-4 bg-transparent border border-white text-white rounded-lg font-bold hover:bg-white/10 transition-colors">
              Start Your Transformation
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HighTechPage;
