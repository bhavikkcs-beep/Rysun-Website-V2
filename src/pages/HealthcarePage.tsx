import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, BrainCircuit, Activity, Database, HeartPulse, 
  Stethoscope, Microscope, Dna, ShieldCheck, FileText, 
  Users, Building2, LineChart, Cloud, Server, Workflow, 
  CheckCircle2, Sparkles, Lightbulb, ChevronRight,
  Pill, Syringe, Laptop
} from 'lucide-react';

export default function HealthcarePage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="w-full bg-white font-sans text-gray-900">
      
      {/* 1. Hero Banner */}
      <section className="relative min-h-[60vh] lg:min-h-[70vh] flex items-center pb-10 overflow-hidden bg-gray-900">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMjAiIGN5PSIyMCIgcj0iMSIgZmlsbD0icmdiYSgyNTUsIDI1NSwgMjU1LCAwLjA1KSIvPjwvc3ZnPg==')] opacity-30" />
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-teal-950 to-indigo-950/80" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            {/* Hero Content */}
            <div className="max-w-3xl">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-teal-500/10 border border-teal-400/20 text-teal-300 text-sm font-medium mb-6">
                  <HeartPulse className="w-4 h-4" />
                  AI-Powered Healthcare Transformation
                </div>
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white tracking-tight mb-5 leading-tight">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-indigo-400">AI-Powered</span> Transformation for Healthcare & Life Sciences
                </h1>
                <p className="text-base text-gray-300 mb-6 leading-relaxed max-w-lg">
                  Helping healthcare providers, hospitals, and life sciences organizations unlock the power of AI, data, and intelligent automation to improve patient outcomes, optimize hospital operations, and enable data-driven clinical decision making.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-3 mb-4">
                  <a href="#solutions" className="inline-flex items-center justify-center px-6 py-3 text-sm font-medium rounded-full text-white bg-gradient-to-r from-teal-600 to-indigo-600 hover:shadow-[0_0_30px_rgba(20,184,166,0.4)] hover:-translate-y-0.5 transition-all">
                    Explore Healthcare Solutions
                  </a>
                  <Link to="/contact-us" className="inline-flex items-center justify-center px-6 py-3 text-sm font-medium rounded-full text-white bg-transparent border border-white/30 hover:bg-white/10 transition-all backdrop-blur-sm">
                    Talk to Our Experts
                  </Link>
                </div>
              </motion.div>
            </div>
            
            {/* Hero Visual - Healthcare AI Ecosystem */}
            <div className="hidden lg:flex justify-center items-center relative h-[420px] -translate-y-8">
              <div className="relative w-full max-w-md aspect-square flex items-center justify-center scale-75 origin-center">
                
                {/* EKG / Heartbeat SVG Animation */}
                <svg className="absolute inset-0 w-full h-full text-teal-500/30" viewBox="0 0 100 100" preserveAspectRatio="none">
                  <motion.path
                    d="M0,50 L20,50 L30,20 L40,80 L50,50 L100,50"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{ pathLength: 1, opacity: 1 }}
                    transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                  />
                  <motion.path
                    d="M0,50 L20,50 L30,20 L40,80 L50,50 L100,50"
                    fill="none"
                    stroke="url(#glowGradient)"
                    strokeWidth="3"
                    className="blur-sm"
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{ pathLength: 1, opacity: 0.5 }}
                    transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                  />
                  <defs>
                    <linearGradient id="glowGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="rgba(20,184,166,0)" />
                      <stop offset="50%" stopColor="rgba(20,184,166,1)" />
                      <stop offset="100%" stopColor="rgba(20,184,166,0)" />
                    </linearGradient>
                  </defs>
                </svg>

                {/* Central Glowing Shield */}
                <motion.div 
                  animate={{ scale: [1, 1.05, 1], opacity: [0.8, 1, 0.8] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute z-30 w-32 h-32 bg-gray-900/80 backdrop-blur-xl rounded-full flex items-center justify-center shadow-[0_0_40px_rgba(20,184,166,0.4)] border border-teal-400/50"
                >
                  <div className="flex flex-col items-center">
                    <ShieldCheck className="w-12 h-12 text-teal-400 mb-1" />
                    <span className="text-teal-300 text-[10px] font-bold tracking-widest uppercase">Clinical AI</span>
                  </div>
                </motion.div>

                {/* Floating Medical Hexagons */}
                {[
                  { icon: <Dna className="w-6 h-6" />, pos: "top-4 left-4", delay: 0 },
                  { icon: <Microscope className="w-6 h-6" />, pos: "top-4 right-4", delay: 0.5 },
                  { icon: <HeartPulse className="w-6 h-6" />, pos: "bottom-4 left-4", delay: 1 },
                  { icon: <Stethoscope className="w-6 h-6" />, pos: "bottom-4 right-4", delay: 1.5 },
                ].map((node, i) => (
                  <motion.div
                    key={i}
                    className={`absolute ${node.pos} w-16 h-16 bg-gradient-to-br from-teal-500/20 to-indigo-500/20 backdrop-blur-md border border-teal-400/30 rounded-2xl flex items-center justify-center text-teal-300 shadow-[0_0_20px_rgba(20,184,166,0.2)] z-20`}
                    animate={{ y: [0, -15, 0], rotate: [0, 5, -5, 0] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: node.delay }}
                  >
                    {node.icon}
                  </motion.div>
                ))}

                {/* Connecting Rings */}
                <div className="absolute inset-0 border border-teal-500/20 rounded-full animate-[spin_30s_linear_infinite]" />
                <div className="absolute inset-8 border border-indigo-500/20 rounded-full animate-[spin_20s_linear_infinite_reverse]" />
              </div>
            </div>
            
          </div>
        </div>
      </section>

      {/* 2. Healthcare Industry Challenges */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-4 lg:sticky lg:top-24">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Healthcare Industry Challenges</h2>
              <p className="text-lg text-gray-600 mb-8">Addressing the critical hurdles preventing scalable growth and optimal patient care.</p>
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-teal-50 border border-teal-100 rounded-2xl p-6 shadow-sm"
              >
                <div className="w-10 h-10 bg-teal-100 rounded-full flex items-center justify-center mb-4">
                  <Lightbulb className="w-5 h-5 text-teal-600" />
                </div>
                <p className="text-teal-900 font-medium leading-relaxed">
                  Rysun solves these challenges by deploying <span className="font-bold">AI and Data-driven clinical intelligence</span>, unifying the patient journey, optimizing operations, and turning data into actionable insights.
                </p>
              </motion.div>
            </div>

            <div className="lg:col-span-8">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {[
                  { title: "Fragmented patient and clinical data", icon: <Database className="w-5 h-5" /> },
                  { title: "Inefficient medical documentation processes", icon: <FileText className="w-5 h-5" /> },
                  { title: "Limited patient engagement and digital experiences", icon: <Users className="w-5 h-5" /> },
                  { title: "Operational inefficiencies in hospitals", icon: <Building2 className="w-5 h-5" /> },
                  { title: "Rising healthcare costs and resource constraints", icon: <LineChart className="w-5 h-5" /> },
                  { title: "Compliance and healthcare data governance", icon: <ShieldCheck className="w-5 h-5" /> }
                ].map((challenge, index) => (
                  <motion.div 
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md hover:border-teal-200 transition-all flex items-start gap-4 group relative overflow-hidden"
                  >
                    <div className="absolute top-0 left-0 w-1 h-full bg-teal-500 transform origin-bottom scale-y-0 group-hover:scale-y-100 transition-transform duration-300" />
                    <div className="w-10 h-10 rounded-xl bg-gray-50 text-gray-400 flex items-center justify-center flex-shrink-0 group-hover:bg-teal-50 group-hover:text-teal-600 transition-colors">
                      {challenge.icon}
                    </div>
                    <h3 className="text-base font-bold text-gray-900 leading-snug pt-2">{challenge.title}</h3>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Our AI & Data Transformation Approach */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Our AI & Data Transformation Approach</h2>
            <p className="text-lg text-gray-600">
              A structured, proven methodology to take your healthcare AI initiatives from concept to enterprise-scale deployment.
            </p>
          </div>

          <div className="relative">
            {/* Horizontal Line */}
            <div className="hidden md:block absolute top-1/2 left-0 w-full h-1 bg-gray-100 -translate-y-1/2" />
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {[
                {
                  step: "01",
                  title: "Discover & Diagnose",
                  items: [
                    "Healthcare data maturity assessment",
                    "AI opportunity identification",
                    "Clinical workflow analysis"
                  ]
                },
                {
                  step: "02",
                  title: "Design & Architect",
                  items: [
                    "Healthcare data architecture",
                    "AI model design",
                    "Patient journey optimization"
                  ]
                },
                {
                  step: "03",
                  title: "Build & Accelerate",
                  items: [
                    "AI solution development",
                    "Data platform implementation",
                    "Intelligent automation deployment"
                  ]
                },
                {
                  step: "04",
                  title: "Scale & Optimize",
                  items: [
                    "AI model improvement",
                    "Data governance and compliance",
                    "Continuous analytics optimization"
                  ]
                }
              ].map((phase, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="relative"
                >
                  <div className="bg-white border-2 border-teal-500 w-12 h-12 rounded-full flex items-center justify-center text-teal-600 font-bold text-lg mb-6 relative z-10 mx-auto md:mx-0">
                    {phase.step}
                  </div>
                  <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100 h-full">
                    <h3 className="text-xl font-bold text-gray-900 mb-4">{phase.title}</h3>
                    <ul className="space-y-3">
                      {phase.items.map((item, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
                          <CheckCircle2 className="w-4 h-4 text-teal-500 mt-0.5 flex-shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 4. Healthcare AI & Data Solutions */}
      <section id="solutions" className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Healthcare AI & Data Solutions</h2>
            <p className="text-lg text-gray-600">Comprehensive capabilities designed to transform every aspect of the healthcare value chain.</p>
          </div>

          <div className="max-w-5xl mx-auto space-y-12">
            {[
              {
                title: "Clinical Intelligence",
                desc: "AI-powered clinical insights to assist healthcare professionals with diagnosis, treatment planning, and predictive healthcare analytics.",
                icon: <Microscope className="w-6 h-6" />,
                items: ["AI Medical Imaging Analysis", "Disease Detection Models", "Clinical Decision Support Systems"]
              },
              {
                title: "Healthcare Document Intelligence",
                desc: "AI-driven automation of medical documents and healthcare administrative workflows using NLP and machine learning.",
                icon: <FileText className="w-6 h-6" />,
                items: ["Medical Record Processing", "Clinical Documentation Automation", "Insurance Claim Processing"]
              },
              {
                title: "Patient Engagement AI",
                desc: "Intelligent patient engagement solutions that improve communication, digital health access, and patient experience.",
                icon: <Users className="w-6 h-6" />,
                items: ["AI Patient Chatbots", "Virtual Health Assistants", "Voice-based Appointment Scheduling"]
              },
              {
                title: "Hospital Operations Intelligence",
                desc: "AI and predictive analytics to optimize hospital operations, resource utilization, and operational efficiency.",
                icon: <Building2 className="w-6 h-6" />,
                items: ["Patient Flow Optimization", "Bed Occupancy Prediction", "Staff Scheduling Optimization"]
              },
              {
                title: "Healthcare Data Platforms",
                desc: "Scalable healthcare data platforms that unify clinical, operational, and patient data for analytics and AI.",
                icon: <Database className="w-6 h-6" />,
                items: ["Clinical Data Lakehouse", "Patient Data Integration Platform", "Healthcare Data Hub"]
              },
              {
                title: "Healthcare Analytics",
                desc: "Advanced analytics enabling healthcare organizations to monitor performance, improve outcomes, and enhance patient care.",
                icon: <LineChart className="w-6 h-6" />,
                items: ["Population Health Analytics", "Clinical Outcome Analytics", "Patient Experience Analytics"]
              },
              {
                title: "Healthcare Data Modernization",
                desc: "Modernizing legacy healthcare data systems into scalable cloud-based platforms with strong governance.",
                icon: <Server className="w-6 h-6" />,
                items: ["EMR Data Migration", "Healthcare Data Warehouse Modernization", "Healthcare Data Governance Framework"]
              }
            ].map((solution, index) => (
              <motion.div 
                key={index} 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex flex-col md:flex-row gap-8 items-start border-b border-gray-200 pb-12 last:border-0 last:pb-0"
              >
                <div className="md:w-1/3 flex flex-col gap-4">
                  <div className="w-12 h-12 rounded-xl bg-white shadow-sm border border-gray-100 flex items-center justify-center text-teal-600">
                    {solution.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">{solution.title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{solution.desc}</p>
                </div>
                <div className="md:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
                  {solution.items.map((item, i) => (
                    <div key={i} className="bg-white p-5 rounded-xl border border-gray-100 shadow-sm hover:shadow-md hover:border-teal-200 transition-all flex items-start gap-3">
                       <CheckCircle2 className="w-5 h-5 text-teal-500 flex-shrink-0" />
                       <span className="text-gray-700 font-medium">{item}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Our Healthcare AI Accelerators */}
      <section className="py-24 bg-gray-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMjAiIGN5PSIyMCIgcj0iMSIgZmlsbD0icmdiYSgyNTUsIDI1NSwgMjU1LCAwLjA1KSIvPjwvc3ZnPg==')] opacity-20" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Healthcare AI Accelerators</h2>
            <p className="text-lg text-gray-400">Pre-built frameworks to speed up time-to-market and reduce implementation risk.</p>
          </div>

          <div className="flex flex-wrap justify-center gap-6">
            {[
              { title: "AI Medical Imaging Framework", desc: "Pre-built AI models for medical image analysis.", icon: <Microscope className="w-6 h-6" /> },
              { title: "Healthcare NLP Engine", desc: "Extract insights from clinical documents and medical records.", icon: <FileText className="w-6 h-6" /> },
              { title: "Patient Engagement Bot Framework", desc: "AI chatbot framework for healthcare patient interactions.", icon: <Users className="w-6 h-6" /> },
              { title: "Healthcare Data Lakehouse Accelerator", desc: "Reference architecture for unified healthcare data platforms.", icon: <Database className="w-6 h-6" /> },
              { title: "Clinical Analytics Dashboard Kit", desc: "Pre-built dashboards for clinical outcomes and operational analytics.", icon: <LineChart className="w-6 h-6" /> }
            ].map((accelerator, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-8 hover:border-teal-400 transition-colors w-full md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)]"
              >
                <div className="w-12 h-12 rounded-xl bg-teal-500/20 text-teal-400 flex items-center justify-center mb-6">
                  {accelerator.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{accelerator.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{accelerator.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Impact Stories */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Impact Stories</h2>
            <p className="text-lg text-gray-600">See how we help healthcare organizations turn complex challenges into competitive advantages.</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            <div className="lg:col-span-7">
              <div className="bg-gradient-to-br from-gray-900 to-teal-900 rounded-3xl overflow-hidden shadow-xl h-full flex flex-col group relative">
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=800')] opacity-20 mix-blend-overlay transition-transform duration-1000 group-hover:scale-105" />
                <div className="p-10 flex-grow flex flex-col relative z-10">
                  <div className="inline-flex items-center px-3 py-1 rounded-full bg-white/10 backdrop-blur-md text-xs font-bold text-white uppercase tracking-wider w-max mb-8 border border-white/20">
                    Healthcare Success Story
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-6 leading-tight">AI-Powered Radiology Analysis for a Leading Hospital Network</h3>
                  <div className="grid grid-cols-3 gap-4 mb-10">
                    <div className="bg-white/10 backdrop-blur-md p-5 rounded-2xl border border-white/10">
                      <div className="text-3xl font-black text-teal-400 mb-1">40%</div>
                      <div className="text-xs text-gray-300 font-medium uppercase tracking-wider">Faster Diagnosis</div>
                    </div>
                    <div className="bg-white/10 backdrop-blur-md p-5 rounded-2xl border border-white/10">
                      <div className="text-3xl font-black text-indigo-400 mb-1">99%</div>
                      <div className="text-xs text-gray-300 font-medium uppercase tracking-wider">Accuracy Rate</div>
                    </div>
                    <div className="bg-white/10 backdrop-blur-md p-5 rounded-2xl border border-white/10">
                      <div className="text-3xl font-black text-blue-400 mb-1">500k+</div>
                      <div className="text-xs text-gray-300 font-medium uppercase tracking-wider">Scans Processed</div>
                    </div>
                  </div>
                  <div className="mt-auto">
                    <Link to="/insights" className="inline-flex items-center justify-center px-8 py-4 text-sm font-bold rounded-full text-gray-900 bg-white hover:bg-gray-50 transition-all shadow-lg">
                      Read Full Story <ArrowRight className="ml-2 w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="lg:col-span-5 flex flex-col gap-6">
              {[
                { title: 'Hospital Bed Utilization Optimization', industry: 'Hospital Operations', desc: 'AI-based prediction model that improved bed utilization and patient flow, increasing operational efficiency by 30%.', color: 'text-teal-600', bg: 'bg-teal-50' },
                { title: 'Clinical Documentation Automation', industry: 'Clinical Intelligence', desc: 'Reduced manual documentation workload for clinicians by 60% using advanced AI NLP engines.', color: 'text-indigo-600', bg: 'bg-indigo-50' },
                { title: 'Patient Data Lakehouse Implementation', industry: 'Healthcare Data', desc: 'Unified patient records across 50+ facilities for real-time care insights and population health analytics.', color: 'text-blue-600', bg: 'bg-blue-50' }
              ].map((story, idx) => (
                <Link key={idx} to="/insights" className="flex flex-col justify-center bg-gray-50 p-6 rounded-3xl shadow-sm border border-gray-100 hover:shadow-md hover:border-gray-200 transition-all group flex-1">
                  <div className={`text-xs font-black ${story.color} uppercase tracking-wider mb-2`}>{story.industry}</div>
                  <h4 className="text-lg font-bold text-gray-900 group-hover:text-teal-600 transition-colors leading-snug mb-2">{story.title}</h4>
                  <p className="text-sm text-gray-600">{story.desc}</p>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 7. Technology Ecosystem */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Technology Ecosystem</h2>
            <p className="text-lg text-gray-600">Partnering with leading platforms to deliver secure, compliant, and scalable healthcare solutions.</p>
          </div>

          <div className="max-w-5xl mx-auto flex flex-col gap-6">
            {[
              { category: "Cloud Platforms", tech: ["AWS", "Azure", "Google Cloud"], icon: <Cloud className="w-6 h-6" /> },
              { category: "AI & Machine Learning", tech: ["TensorFlow", "PyTorch", "Vertex AI"], icon: <BrainCircuit className="w-6 h-6" /> },
              { category: "Healthcare Standards", tech: ["FHIR", "HL7", "DICOM"], icon: <ShieldCheck className="w-6 h-6" /> },
              { category: "Data Platforms", tech: ["Snowflake", "Databricks", "BigQuery"], icon: <Database className="w-6 h-6" /> }
            ].map((group, index) => (
              <motion.div 
                key={index} 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex flex-col md:flex-row gap-6 items-start md:items-center p-6 rounded-3xl bg-white border border-gray-100 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="md:w-1/3 flex items-center gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-teal-50 text-teal-600 flex items-center justify-center">
                    {group.icon}
                  </div>
                  <h3 className="text-lg font-bold text-gray-900">{group.category}</h3>
                </div>
                <div className="md:w-2/3 flex flex-wrap gap-3">
                  {group.tech.map((tech, i) => (
                    <span key={i} className="px-5 py-2.5 rounded-full bg-gray-50 border border-gray-200 text-gray-800 font-medium hover:border-teal-400 hover:bg-teal-50 transition-colors cursor-default shadow-sm">
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. Insights & Thought Leadership */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-12">
            <div className="max-w-2xl">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Insights & Thought Leadership</h2>
              <p className="text-lg text-gray-600">Perspectives on AI, data, and digital transformation in healthcare.</p>
            </div>
            <Link to="/insights" className="hidden md:inline-flex items-center text-teal-600 font-bold hover:text-teal-700 transition-colors">
              View All Insights <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "The Future of AI in Healthcare", category: "Artificial Intelligence", date: "March 15, 2026", image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=600" },
              { title: "Building Intelligent Hospitals with Data Platforms", category: "Data Strategy", date: "March 10, 2026", image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=600" },
              { title: "AI for Clinical Decision Support", category: "Clinical Innovation", date: "March 5, 2026", image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=600" }
            ].map((post, index) => (
              <Link 
                key={index}
                to="/insights"
                className="flex flex-col bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl border border-gray-100 transition-all group h-full"
              >
                <div className="relative h-48 overflow-hidden">
                  <img src={post.image} alt={post.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" referrerPolicy="no-referrer" />
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md border border-white/20 px-3 py-1 rounded-full text-xs font-bold text-gray-900 uppercase tracking-wider z-10 shadow-sm">
                    {post.category}
                  </div>
                </div>
                <div className="p-8 flex flex-col flex-grow">
                  <div className="text-sm text-gray-500 mb-3 font-medium">{post.date}</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-teal-600 transition-colors leading-snug flex-grow">{post.title}</h3>
                  <div className="flex items-center text-sm font-bold text-teal-600 mt-auto">
                    Read Article <ArrowRight className="ml-2 w-4 h-4" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
          
          <div className="mt-8 text-center md:hidden">
            <Link to="/insights" className="inline-flex items-center gap-2 text-teal-600 font-medium hover:text-teal-700 transition-colors">
              View All Insights <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* 9. Why Rysun Labs */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Why Rysun Labs</h2>
              <p className="text-lg text-gray-600 mb-8">
                We combine deep technical expertise with strategic healthcare domain knowledge to deliver solutions that drive real impact.
              </p>
              <div className="space-y-6">
                {[
                  { title: "AI-First Healthcare Solutions", icon: <BrainCircuit className="w-5 h-5" /> },
                  { title: "Deep Data Engineering Expertise", icon: <Database className="w-5 h-5" /> },
                  { title: "Healthcare Data Platform Architecture", icon: <Server className="w-5 h-5" /> },
                  { title: "Pre-built AI Accelerators", icon: <Sparkles className="w-5 h-5" /> },
                  { title: "Enterprise-Grade Scalable Solutions", icon: <ShieldCheck className="w-5 h-5" /> }
                ].map((feature, index) => (
                  <div key={index} className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-teal-50 flex items-center justify-center text-teal-600 flex-shrink-0">
                      {feature.icon}
                    </div>
                    <span className="text-gray-800 font-medium">{feature.title}</span>
                  </div>
                ))}
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=800" 
                  alt="Healthcare Professionals" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              
              {/* Floating Stat Card */}
              <div className="absolute -bottom-8 -left-8 bg-white p-6 rounded-2xl shadow-xl border border-gray-100 max-w-[240px]">
                <div className="flex items-center gap-4 mb-2">
                  <div className="w-12 h-12 bg-teal-50 rounded-full flex items-center justify-center text-teal-600">
                    <HeartPulse className="w-6 h-6" />
                  </div>
                  <div className="text-3xl font-bold text-gray-900">100+</div>
                </div>
                <div className="text-sm text-gray-600 font-medium">Healthcare AI Models Deployed</div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 10. Call to Action */}
      <section className="py-24 bg-gray-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMjAiIGN5PSIyMCIgcj0iMSIgZmlsbD0icmdiYSgyNTUsIDI1NSwgMjU1LCAwLjA1KSIvPjwvc3ZnPg==')] opacity-20" />
        <div className="absolute inset-0 bg-gradient-to-br from-teal-900/50 to-indigo-900/50" />
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Transform Healthcare with AI & Data</h2>
            <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
              Partner with Rysun Labs to build intelligent healthcare systems that improve patient outcomes and operational efficiency.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link to="/contact-us" className="inline-flex items-center justify-center px-8 py-4 text-base font-bold rounded-full text-gray-900 bg-white hover:bg-gray-50 transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5">
                Schedule a Consultation
              </Link>
              <Link to="/contact-us" className="inline-flex items-center justify-center px-8 py-4 text-base font-bold rounded-full text-white bg-transparent border border-white/30 hover:bg-white/10 transition-all backdrop-blur-sm">
                Contact Healthcare Experts
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

    </div>
  );
}
