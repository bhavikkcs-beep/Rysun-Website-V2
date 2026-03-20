import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  ArrowRight, BrainCircuit, Network, Cpu, Database, 
  Lightbulb, ShieldCheck, Layers, Bot, FileText, 
  Search, TrendingUp, Eye, Zap, MessageSquare, 
  CheckCircle2, ChevronRight, Globe, Sparkles
} from 'lucide-react';
import { Link } from 'react-router-dom';

const AIPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="w-full bg-white font-sans text-gray-900">
      
      {/* Section 1 - Hero Banner */}
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

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="max-w-3xl">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-rysun-lightblue text-xs font-medium mb-5 backdrop-blur-sm">
                  <BrainCircuit className="w-3.5 h-3.5" />
                  <span>Artificial Intelligence</span>
                </div>
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white tracking-tight mb-5 leading-tight">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-rysun-lightblue to-blue-400">AI Services & Solutions</span> for Intelligent Enterprises
                </h1>
                <p className="text-base text-gray-300 mb-6 leading-relaxed max-w-lg">
                  From AI strategy and enterprise architecture to generative AI systems and scalable business solutions, Rysun Labs helps organizations design, build, and operationalize artificial intelligence. Turn enterprise data into intelligent decision-making and measurable business impact.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-3 mb-4">
                  <a href="#services" className="inline-flex items-center justify-center px-6 py-3 text-sm font-medium rounded-full text-white bg-gradient-to-r from-rysun-blue to-rysun-lightblue hover:shadow-[0_0_30px_rgba(0,169,233,0.5)] hover:-translate-y-0.5 transition-all">
                    Explore AI Services
                  </a>
                  <a href="#solutions" className="inline-flex items-center justify-center px-6 py-3 text-sm font-medium rounded-full text-white bg-transparent border border-white/30 hover:bg-white/10 transition-all backdrop-blur-sm">
                    Explore AI Solutions
                  </a>
                </div>
              </motion.div>
            </div>
            
            {/* 2D Intelligent Infographic - AI Services & Solutions Hub */}
            <div className="hidden lg:flex justify-center items-center relative h-[420px] -translate-y-8">
              <div className="relative w-full max-w-md aspect-square flex items-center justify-center">
                
                {/* Central AI Hub */}
                <motion.div 
                  animate={{ scale: [1, 1.05, 1] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute z-30 w-32 h-32 bg-gradient-to-br from-rysun-blue to-rysun-darkpurple rounded-full flex items-center justify-center shadow-[0_0_40px_rgba(0,169,233,0.4)] border border-rysun-lightblue/30"
                >
                  <div className="flex flex-col items-center">
                    <BrainCircuit className="w-12 h-12 text-white mb-1" />
                    <span className="text-[10px] font-bold text-white tracking-widest uppercase">AI Core</span>
                  </div>
                </motion.div>

                {/* Connecting Lines */}
                <div className="absolute inset-0 flex items-center justify-center z-10">
                  <div className="w-full h-px bg-gradient-to-r from-transparent via-rysun-lightblue/50 to-transparent absolute" />
                  <div className="h-full w-px bg-gradient-to-b from-transparent via-rysun-lightblue/50 to-transparent absolute" />
                </div>

                {/* Animated Data Packets */}
                {[
                  { x: [-150, 0], y: [0, 0], delay: 0 }, // Left to Center
                  { x: [150, 0], y: [0, 0], delay: 0.5 }, // Right to Center
                  { x: [0, 0], y: [-150, 0], delay: 1 }, // Top to Center
                  { x: [0, 0], y: [150, 0], delay: 1.5 } // Bottom to Center
                ].map((anim, i) => (
                  <motion.div
                    key={i}
                    className="absolute top-1/2 left-1/2 w-2 h-2 -ml-1 -mt-1 bg-rysun-lightblue rounded-full shadow-[0_0_10px_#00A9E9] z-15"
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
                    <div className="w-8 h-8 rounded-lg bg-rysun-lightblue/20 flex items-center justify-center">
                      <Lightbulb className="w-4 h-4 text-rysun-lightblue" />
                    </div>
                    <div className="text-xs font-bold text-white">AI Strategy</div>
                  </div>
                </motion.div>

                {/* 2. Engineering (Right) */}
                <motion.div 
                  animate={{ x: [140, 148, 140] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                  className="absolute top-1/2 left-1/2 z-20 w-40 -ml-20 -mt-6 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-3 shadow-lg"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-rysun-orange/20 flex items-center justify-center">
                      <Cpu className="w-4 h-4 text-rysun-orange" />
                    </div>
                    <div className="text-xs font-bold text-white">Engineering</div>
                  </div>
                </motion.div>

                {/* 3. GenAI (Bottom) */}
                <motion.div 
                  animate={{ y: [140, 148, 140] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                  className="absolute top-1/2 left-1/2 z-20 w-40 -ml-20 -mt-6 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-3 shadow-lg"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-rysun-darkpurple/40 flex items-center justify-center border border-indigo-500/30">
                      <Sparkles className="w-4 h-4 text-indigo-300" />
                    </div>
                    <div className="text-xs font-bold text-white">Generative AI</div>
                  </div>
                </motion.div>

                {/* 4. Solutions (Left) */}
                <motion.div 
                  animate={{ x: [-140, -148, -140] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 3 }}
                  className="absolute top-1/2 left-1/2 z-20 w-40 -ml-20 -mt-6 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-3 shadow-lg"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-rysun-red/20 flex items-center justify-center">
                      <Layers className="w-4 h-4 text-rysun-red" />
                    </div>
                    <div className="text-xs font-bold text-white">AI Solutions</div>
                  </div>
                </motion.div>

                {/* Background decorative rings */}
                <div className="absolute inset-4 rounded-full border border-rysun-lightblue/10 animate-[spin_20s_linear_infinite]" />
                <div className="absolute inset-12 rounded-full border border-rysun-blue/10 border-dashed animate-[spin_30s_linear_infinite_reverse]" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2 - AI Transformation Overview */}
      <section className="py-24 bg-gray-50 border-b border-gray-100 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-rysun-blue/5 to-transparent pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Accelerating Enterprise AI Transformation</h2>
            <p className="text-lg text-gray-600">
              We help organizations adopt AI faster and more securely through comprehensive strategy, robust engineering, and scalable platforms tailored to your business needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "AI Strategy & Governance",
                desc: "Define enterprise AI vision, governance frameworks, and transformation roadmaps.",
                icon: <ShieldCheck className="w-8 h-8 text-rysun-blue" />
              },
              {
                title: "Enterprise AI Engineering",
                desc: "Design scalable AI platforms, ML pipelines, and infrastructure.",
                icon: <Network className="w-8 h-8 text-rysun-darkpurple" />
              },
              {
                title: "Generative & Applied AI",
                desc: "Develop intelligent systems using LLMs, multimodal AI, and automation.",
                icon: <BrainCircuit className="w-8 h-8 text-rysun-orange" />
              },
              {
                title: "Industry AI Solutions",
                desc: "Deliver ready-to-deploy AI accelerators for enterprise use cases.",
                icon: <Layers className="w-8 h-8 text-rysun-red" />
              }
            ].map((item, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group"
              >
                <div className="w-16 h-16 rounded-2xl bg-gray-50 flex items-center justify-center mb-6 group-hover:bg-rysun-blue/5 transition-colors">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 3 - AI Services */}
      <section id="services" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16 max-w-3xl">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Comprehensive AI Services</h2>
            <p className="text-lg text-gray-600">
              Our services cover the full AI lifecycle—from initial strategy and architectural design to model development, deployment, and continuous optimization.
            </p>
          </div>

          <div className="space-y-8">
            {[
              {
                title: "AI Strategy, Governance & Transformation",
                icon: <Lightbulb className="w-6 h-6 text-rysun-blue" />,
                items: [
                  "AI Strategy & Roadmap Development",
                  "AI Readiness & Transformation Programs",
                  "Responsible AI & Ethics Implementation",
                  "AI Governance & Risk Management Framework"
                ]
              },
              {
                title: "AI Architecture & Engineering",
                icon: <Cpu className="w-6 h-6 text-rysun-darkpurple" />,
                items: [
                  "Enterprise AI Architecture & Infrastructure Design",
                  "End-to-End ML Pipeline Development",
                  "Feature Store Implementation",
                  "Continuous Training (CT) & Model Lifecycle Management",
                  "Model Observability & Monitoring",
                  "AutoML Enablement"
                ]
              },
              {
                title: "Generative AI & Agentic Systems",
                icon: <Bot className="w-6 h-6 text-rysun-orange" />,
                items: [
                  "Enterprise GenAI Platform Implementation",
                  "Custom LLM Development",
                  "Retrieval Augmented Generation (RAG) Systems",
                  "Prompt Engineering & Safety Frameworks"
                ]
              },
              {
                title: "Applied AI Solutions Development",
                icon: <Zap className="w-6 h-6 text-rysun-red" />,
                items: [
                  "Computer Vision Model Development",
                  "Video Analytics Systems",
                  "Intelligent Document Processing (IDP)",
                  "NLP & Text Analytics Solutions",
                  "Speech AI & Voice Assistant Development"
                ]
              },
              {
                title: "Industry AI Accelerator Development",
                icon: <TrendingUp className="w-6 h-6 text-rysun-blue" />,
                items: [
                  "AI Use Case Discovery Workshops",
                  "AI Proof of Concept (PoC) Development",
                  "AI Pilot Implementation",
                  "Enterprise AI Scaling Programs"
                ]
              }
            ].map((service, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="flex flex-col md:flex-row gap-6 bg-gray-50 rounded-3xl p-8 border border-gray-100 hover:border-rysun-blue/20 transition-colors"
              >
                <div className="md:w-1/3">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 rounded-xl bg-white shadow-sm flex items-center justify-center">
                      {service.icon}
                    </div>
                    <h3 className="text-xl font-bold text-gray-900">{service.title}</h3>
                  </div>
                </div>
                <div className="md:w-2/3">
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {service.items.map((item, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-rysun-lightblue shrink-0 mt-0.5" />
                        <span className="text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 4 - AI Solutions */}
      <section id="solutions" className="py-24 bg-gray-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://picsum.photos/seed/ai-network/1920/1080?blur=10')] opacity-10 mix-blend-overlay" />
        <div className="absolute inset-0 bg-gradient-to-br from-rysun-blue/10 via-gray-900 to-rysun-darkpurple/20" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Enterprise AI Solutions</h2>
            <p className="text-lg text-gray-400">
              Pre-built, customizable enterprise AI solution frameworks designed to solve specific business challenges and accelerate time-to-value.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Intelligent Virtual Assistants",
                icon: <MessageSquare className="w-6 h-6" />,
                items: ["AI Customer Support Assistants", "Enterprise Knowledge Assistants", "AI Helpdesk Automation", "Voice-based Digital Assistants"]
              },
              {
                title: "Document Intelligence Automation",
                icon: <FileText className="w-6 h-6" />,
                items: ["Intelligent Document Processing Platforms", "Contract Intelligence Systems", "Invoice & Financial Document Processing", "Knowledge Base Document Intelligence"]
              },
              {
                title: "Enterprise Knowledge Intelligence",
                icon: <Search className="w-6 h-6" />,
                items: ["Enterprise Knowledge Copilot", "Internal Knowledge Search Platforms", "AI Research Assistants", "Document-based Q&A Systems (RAG)"]
              },
              {
                title: "Predictive Intelligence Platforms",
                icon: <TrendingUp className="w-6 h-6" />,
                items: ["Demand Forecasting Systems", "Risk Prediction Platforms", "Churn Prediction Engines", "Predictive Maintenance Systems"]
              },
              {
                title: "Visual Intelligence Systems",
                icon: <Eye className="w-6 h-6" />,
                items: ["Image Recognition Platforms", "Video Analytics Systems", "Object Detection & Monitoring Systems", "Quality Inspection Systems"]
              },
              {
                title: "Generative AI Productivity Solutions",
                icon: <Zap className="w-6 h-6" />,
                items: ["AI Content Generation Platforms", "AI Coding Assistants", "AI Marketing Content Generators", "AI Document Authoring Assistants"]
              }
            ].map((sol, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-colors"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-rysun-blue to-rysun-lightblue flex items-center justify-center text-white">
                    {sol.icon}
                  </div>
                  <h3 className="text-xl font-bold">{sol.title}</h3>
                </div>
                <ul className="space-y-3">
                  {sol.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-gray-300">
                      <ChevronRight className="w-5 h-5 text-rysun-lightblue shrink-0" />
                      <span className="text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 5 - AI Methodology */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Our Approach to Enterprise AI</h2>
            <p className="text-lg text-gray-600">
              A structured, proven methodology to take your AI initiatives from concept to enterprise-scale deployment.
            </p>
          </div>

          <div className="relative">
            {/* Horizontal Line */}
            <div className="hidden md:block absolute top-1/2 left-0 w-full h-1 bg-gray-100 -translate-y-1/2" />
            
            <div className="grid grid-cols-1 md:grid-cols-6 gap-8">
              {[
                { step: "1", title: "Discover", desc: "Identify high-impact AI opportunities and use cases." },
                { step: "2", title: "Design", desc: "Define AI architecture, data pipelines, and solution blueprint." },
                { step: "3", title: "Develop", desc: "Build machine learning models and AI systems." },
                { step: "4", title: "Deploy", desc: "Integrate AI solutions into enterprise workflows." },
                { step: "5", title: "Scale", desc: "Operationalize AI across departments and platforms." },
                { step: "6", title: "Optimize", desc: "Continuously monitor and improve AI performance." }
              ].map((phase, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="relative flex flex-col items-center text-center group"
                >
                  <div className="w-16 h-16 rounded-full bg-white border-4 border-gray-100 flex items-center justify-center text-xl font-bold text-gray-400 mb-6 relative z-10 group-hover:border-rysun-blue group-hover:text-rysun-blue transition-colors shadow-sm">
                    {phase.step}
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{phase.title}</h3>
                  <p className="text-sm text-gray-600">{phase.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Section 6 - Impact Stories */}
      <section className="py-16 bg-white border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-4">Extraordinary Outcomes</h2>
            <p className="text-lg text-gray-600">See how we help global enterprises turn complex challenges into competitive advantages through AI.</p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            <div className="lg:col-span-7">
              <div className="bg-gradient-to-br from-gray-900 to-rysun-darkpurple rounded-3xl overflow-hidden shadow-xl h-full flex flex-col group relative">
                <div className="absolute inset-0 bg-[url('https://picsum.photos/seed/retail-ai/800/800?blur=4')] opacity-20 mix-blend-overlay transition-transform duration-1000 group-hover:scale-105" />
                <div className="p-10 flex-grow flex flex-col relative z-10">
                  <div className="inline-flex items-center px-3 py-1 rounded-full bg-white/10 backdrop-blur-md text-xs font-bold text-white uppercase tracking-wider w-max mb-8 border border-white/20">
                    Retail Success Story
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-6 leading-tight">AI Recommendation Engine Improving Customer Conversions</h3>
                  <div className="grid grid-cols-3 gap-4 mb-10">
                    <div className="bg-white/10 backdrop-blur-md p-5 rounded-2xl border border-white/10">
                      <div className="text-3xl font-black text-rysun-lightblue mb-1">35%</div>
                      <div className="text-xs text-gray-300 font-medium uppercase tracking-wider">Revenue Increase</div>
                    </div>
                    <div className="bg-white/10 backdrop-blur-md p-5 rounded-2xl border border-white/10">
                      <div className="text-3xl font-black text-rysun-orange mb-1">50%</div>
                      <div className="text-xs text-gray-300 font-medium uppercase tracking-wider">Better Targeting</div>
                    </div>
                    <div className="bg-white/10 backdrop-blur-md p-5 rounded-2xl border border-white/10">
                      <div className="text-3xl font-black text-rysun-red mb-1">24/7</div>
                      <div className="text-xs text-gray-300 font-medium uppercase tracking-wider">Personalization</div>
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
                { title: 'AI-Powered Medical Imaging', industry: 'Healthcare', desc: '40% faster diagnostic turnaround time improving accuracy.', color: 'text-rysun-blue', bg: 'bg-blue-50' },
                { title: 'Real-Time Fraud Detection', industry: 'Financial Services', desc: '$2.5M saved annually in fraud prevention reducing financial risk.', color: 'text-rysun-orange', bg: 'bg-orange-50' },
                { title: 'Predictive Maintenance Engine', industry: 'Manufacturing', desc: 'Decreased equipment downtime by 25% with predictive analytics.', color: 'text-rysun-red', bg: 'bg-red-50' }
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

      {/* Section 7 - Technology Ecosystem */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-12">Powered by Leading AI Technologies</h2>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
            {["TensorFlow", "PyTorch", "LangChain", "OpenAI", "AWS AI", "Azure AI", "Google Cloud AI"].map((tech, idx) => (
              <div key={idx} className="text-xl font-bold text-gray-400 hover:text-gray-900 transition-colors">
                {tech}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 8 - Why Rysun Labs */}
      <section className="py-24 bg-gray-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-rysun-darkpurple/20 to-gray-900" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Why Rysun Labs for AI</h2>
            <p className="text-lg text-gray-400">
              We combine deep engineering expertise with strategic vision to deliver AI solutions that drive real business value.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { title: "AI-First Engineering Culture", desc: "Built from the ground up with an AI-centric approach to problem-solving, ensuring intelligent design in every solution.", icon: <BrainCircuit className="w-8 h-8 text-rysun-blue" /> },
              { title: "Enterprise-Scale AI Platforms", desc: "Proven experience deploying robust, scalable AI architectures that integrate seamlessly with your existing enterprise systems.", icon: <Network className="w-8 h-8 text-rysun-orange" /> },
              { title: "Responsible AI & Governance", desc: "Strict adherence to ethical AI practices, security, and compliance to ensure your AI systems are trustworthy and transparent.", icon: <ShieldCheck className="w-8 h-8 text-rysun-lightblue" /> },
              { title: "Deep Industry Expertise", desc: "Tailored AI solutions that understand your specific domain challenges, from retail and healthcare to financial services.", icon: <Layers className="w-8 h-8 text-rysun-red" /> }
            ].map((item, idx) => (
              <motion.div 
                key={idx} 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-sm hover:bg-white/10 transition-all duration-300 group flex gap-6"
              >
                <div className="w-16 h-16 rounded-2xl bg-white/10 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300">
                  {item.icon}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-rysun-lightblue transition-colors">{item.title}</h3>
                  <p className="text-gray-400 leading-relaxed">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 9 - Latest Insights */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
            <div className="max-w-2xl">
              <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-4">Latest AI Insights</h2>
              <p className="text-lg text-gray-600">Insights on AI, data, and digital transformation from our experts.</p>
            </div>
            <Link to="/insights/blogs" className="hidden md:inline-flex items-center text-rysun-blue font-bold hover:text-rysun-lightblue transition-colors">
              View All Insights <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "The Rise of Agentic AI Systems", category: "Thought Leadership", date: "March 10, 2026", image: "https://picsum.photos/seed/ai-blog1/600/400" },
              { title: "Enterprise RAG Architecture Best Practices", category: "Engineering", date: "March 5, 2026", image: "https://picsum.photos/seed/ai-blog2/600/400" },
              { title: "Responsible AI Implementation Strategies", category: "Governance", date: "February 28, 2026", image: "https://picsum.photos/seed/ai-blog3/600/400" }
            ].map((blog, idx) => (
              <Link key={idx} to="/insights/blogs" className="flex flex-col bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl border border-gray-100 transition-all group h-full">
                <div className="relative h-48 overflow-hidden">
                  <img src={blog.image} alt={blog.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" referrerPolicy="no-referrer" />
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

      {/* Section 10 - Call to Action */}
      <section className="py-24 bg-gray-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-rysun-blue/20 to-rysun-darkpurple/20" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Start Your AI Transformation</h2>
          <p className="text-xl text-gray-300 mb-10">
            Partner with Rysun Labs to design, build, and scale enterprise AI systems.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/contact-us" className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 text-base font-medium rounded-full text-white bg-rysun-blue hover:bg-rysun-lightblue transition-all shadow-lg">
              Talk to AI Experts
            </Link>
            <Link to="/contact-us" className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 text-base font-medium rounded-full text-white bg-white/10 hover:bg-white/20 border border-white/20 transition-all backdrop-blur-sm">
              Schedule AI Discovery Workshop
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
};

export default AIPage;
