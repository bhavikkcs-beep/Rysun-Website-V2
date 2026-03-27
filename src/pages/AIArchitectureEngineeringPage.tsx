import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  ArrowRight, Cpu, Database, Network, 
  ShieldCheck, Layers, Bot, Zap, 
  CheckCircle2, Target, Settings, Search,
  TrendingUp, Globe, Monitor, Box
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

export default function AIArchitectureEngineeringPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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
                  <Cpu className="w-3.5 h-3.5" />
                  <span>AI Capabilities</span>
                </div>
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white tracking-tight mb-5 leading-tight">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-rysun-lightblue to-blue-400">AI Architecture & Engineering</span> for Enterprise-Grade Intelligence
                </h1>
                <p className="text-base text-gray-300 mb-6 leading-relaxed max-w-lg">
                  Design, build, and operationalize scalable AI platforms with robust infrastructure, automated ML pipelines, and enterprise-grade model lifecycle management.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-3 mb-4">
                  <Link to="/contact-us" className="inline-flex items-center justify-center px-6 py-3 text-sm font-medium rounded-full text-white bg-gradient-to-r from-rysun-blue to-rysun-lightblue hover:shadow-[0_0_30px_rgba(0,169,233,0.5)] hover:-translate-y-0.5 transition-all">
                    Talk to an AI Architect
                  </Link>
                  <Link to="/capabilities/ai" className="inline-flex items-center justify-center px-6 py-3 text-sm font-medium rounded-full text-white bg-transparent border border-white/30 hover:bg-white/10 transition-all backdrop-blur-sm">
                    Explore AI Capabilities
                  </Link>
                </div>
              </motion.div>
            </div>
            
            {/* 2D Intelligent Infographic - AI Architecture */}
            <div className="hidden lg:flex justify-center items-center relative h-[450px]">
              <div className="relative w-full max-w-lg aspect-square flex items-center justify-center">
                
                {/* Central Hub */}
                <motion.div 
                  className="absolute z-30 w-32 h-32 rounded-full bg-gradient-to-br from-rysun-blue to-rysun-darkpurple p-1 shadow-[0_0_40px_rgba(0,169,233,0.4)]"
                  animate={{ scale: [1, 1.05, 1] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                >
                  <div className="w-full h-full rounded-full bg-gray-900 flex items-center justify-center border border-white/20">
                    <Cpu className="w-12 h-12 text-white" />
                  </div>
                </motion.div>

                {/* Orbiting Nodes */}
                <div className="absolute inset-0 z-20 animate-[spin_30s_linear_infinite]">
                  {/* Node 1: Data */}
                  <div className="absolute top-4 left-1/2 -translate-x-1/2 -translate-y-1/2">
                    <motion.div 
                      className="w-16 h-16 rounded-2xl bg-white/10 backdrop-blur-md border border-blue-400/30 flex flex-col items-center justify-center gap-1 shadow-[0_0_15px_rgba(96,165,250,0.2)] animate-[spin_30s_linear_infinite_reverse]"
                    >
                      <Database className="w-5 h-5 text-blue-400" />
                      <span className="text-[9px] font-bold text-white uppercase tracking-wider">Data</span>
                    </motion.div>
                  </div>

                  {/* Node 2: Pipeline */}
                  <div className="absolute top-1/2 right-4 translate-x-1/2 -translate-y-1/2">
                    <motion.div 
                      className="w-16 h-16 rounded-2xl bg-white/10 backdrop-blur-md border border-teal-400/30 flex flex-col items-center justify-center gap-1 shadow-[0_0_15px_rgba(45,212,191,0.2)] animate-[spin_30s_linear_infinite_reverse]"
                    >
                      <Network className="w-5 h-5 text-teal-400" />
                      <span className="text-[9px] font-bold text-white uppercase tracking-wider">Pipeline</span>
                    </motion.div>
                  </div>

                  {/* Node 3: Deploy */}
                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 translate-y-1/2">
                    <motion.div 
                      className="w-16 h-16 rounded-2xl bg-white/10 backdrop-blur-md border border-purple-400/30 flex flex-col items-center justify-center gap-1 shadow-[0_0_15px_rgba(192,132,252,0.2)] animate-[spin_30s_linear_infinite_reverse]"
                    >
                      <Box className="w-5 h-5 text-purple-400" />
                      <span className="text-[9px] font-bold text-white uppercase tracking-wider">Deploy</span>
                    </motion.div>
                  </div>

                  {/* Node 4: Monitor */}
                  <div className="absolute top-1/2 left-4 -translate-x-1/2 -translate-y-1/2">
                    <motion.div 
                      className="w-16 h-16 rounded-2xl bg-white/10 backdrop-blur-md border border-rose-400/30 flex flex-col items-center justify-center gap-1 shadow-[0_0_15px_rgba(251,113,133,0.2)] animate-[spin_30s_linear_infinite_reverse]"
                    >
                      <Monitor className="w-5 h-5 text-rose-400" />
                      <span className="text-[9px] font-bold text-white uppercase tracking-wider">Monitor</span>
                    </motion.div>
                  </div>
                </div>

                {/* Connection Lines */}
                <svg className="absolute inset-0 w-full h-full z-10" viewBox="0 0 100 100">
                  <circle cx="50" cy="50" r="40" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="0.5" strokeDasharray="2 2" />
                  <circle cx="50" cy="50" r="25" fill="none" stroke="rgba(255,255,255,0.05)" strokeWidth="0.5" />
                  
                  {/* Animated Data Particles */}
                  <motion.circle cx="50" cy="10" r="1.5" fill="#60A5FA"
                    animate={{ cx: [50, 50], cy: [10, 50], opacity: [0, 1, 0] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                  />
                  <motion.circle cx="90" cy="50" r="1.5" fill="#2DD4BF"
                    animate={{ cx: [90, 50], cy: [50, 50], opacity: [0, 1, 0] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "linear", delay: 0.5 }}
                  />
                  <motion.circle cx="50" cy="90" r="1.5" fill="#C084FC"
                    animate={{ cx: [50, 50], cy: [90, 50], opacity: [0, 1, 0] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "linear", delay: 1 }}
                  />
                  <motion.circle cx="10" cy="50" r="1.5" fill="#FB7185"
                    animate={{ cx: [10, 50], cy: [50, 50], opacity: [0, 1, 0] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "linear", delay: 1.5 }}
                  />
                </svg>

                {/* Background Grid & Glow */}
                <div className="absolute inset-0 bg-gradient-to-t from-rysun-blue/5 via-transparent to-rysun-darkpurple/5 rounded-full blur-3xl" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Introduction */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div {...fadeIn}>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Engineering the Foundations of Enterprise AI</h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Successful AI initiatives require more than just experimental models. They demand scalable architecture, robust ML pipelines, centralized feature engineering systems, and continuous monitoring.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                At Rysun, we focus on building production-ready AI systems. We engineer the underlying infrastructure and operational frameworks that allow enterprises to deploy, scale, and manage AI models reliably and securely.
              </p>
            </motion.div>
            
            <motion.div 
              className="relative h-[400px] bg-gray-50 rounded-2xl border border-gray-100 overflow-hidden flex items-center justify-center p-8"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMiIgY3k9IjIiIHI9IjEiIGZpbGw9InJnYmEoMCwgMCwgMCwgMC4wNSkiLz48L3N2Zz4=')] opacity-50" />
              
              <div className="w-full max-w-md space-y-4 relative z-10">
                {[
                  { name: "Monitoring Layer", color: "bg-rose-100 text-rose-700 border-rose-200" },
                  { name: "Deployment Layer", color: "bg-purple-100 text-purple-700 border-purple-200" },
                  { name: "ML Pipeline Layer", color: "bg-indigo-100 text-indigo-700 border-indigo-200" },
                  { name: "Feature Engineering Layer", color: "bg-teal-100 text-teal-700 border-teal-200" },
                  { name: "Data Layer", color: "bg-blue-100 text-blue-700 border-blue-200" }
                ].map((layer, idx) => (
                  <motion.div 
                    key={idx}
                    className={`w-full py-4 px-6 rounded-xl border ${layer.color} font-semibold text-center shadow-sm relative overflow-hidden`}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                  >
                    <div className="absolute inset-0 bg-white/40" />
                    <span className="relative z-10">{layer.name}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Section 3: Core Capabilities */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div className="text-center max-w-3xl mx-auto mb-16" {...fadeIn}>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">AI Architecture & Engineering Capabilities</h2>
            <p className="text-lg text-gray-600">
              Comprehensive engineering services to build, deploy, and manage enterprise-grade AI platforms.
            </p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
          >
            {[
              {
                title: "Enterprise AI Architecture & Infrastructure Design",
                desc: "Design scalable AI platforms integrating cloud infrastructure, data ecosystems, and model deployment environments.",
                icon: <Layers className="w-8 h-8 text-rysun-blue" />
              },
              {
                title: "End-to-End ML Pipeline Development",
                desc: "Automate data ingestion, feature engineering, training, validation, and deployment pipelines.",
                icon: <Network className="w-8 h-8 text-indigo-600" />
              },
              {
                title: "Feature Store Implementation",
                desc: "Centralize feature management to enable reusable, consistent features across AI models.",
                icon: <Database className="w-8 h-8 text-teal-600" />
              },
              {
                title: "Continuous Training (CT) & Model Lifecycle Management",
                desc: "Automate retraining workflows, model versioning, and lifecycle governance.",
                icon: <Zap className="w-8 h-8 text-purple-600" />
              },
              {
                title: "Model Observability & Monitoring",
                desc: "Monitor model performance, detect data drift, and ensure reliability.",
                icon: <Monitor className="w-8 h-8 text-rose-600" />
              },
              {
                title: "AutoML Enablement",
                desc: "Accelerate model development with automated experimentation and hyperparameter optimization.",
                icon: <Bot className="w-8 h-8 text-orange-500" />
              }
            ].map((card, index) => (
              <motion.div 
                key={index}
                className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group"
                variants={fadeIn}
              >
                <div className="w-14 h-14 rounded-xl bg-gray-50 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  {card.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{card.title}</h3>
                <p className="text-gray-600 leading-relaxed">{card.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Section 4: AI Engineering Framework */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div className="text-center max-w-3xl mx-auto mb-16" {...fadeIn}>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Our AI Engineering Framework</h2>
            <p className="text-lg text-gray-600">
              A structured lifecycle approach to building and operationalizing AI systems.
            </p>
          </motion.div>

          <div className="relative">
            {/* Connecting Line */}
            <div className="hidden lg:block absolute top-1/2 left-0 w-full h-1 bg-gradient-to-r from-blue-100 via-indigo-200 to-purple-100 -translate-y-1/2 z-0" />
            
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 relative z-10">
              {[
                { step: "01", title: "Architecture Design", desc: "Define AI platform architecture and infrastructure.", icon: <Layers className="w-6 h-6" /> },
                { step: "02", title: "Data & Feature Engineering", desc: "Build scalable pipelines and feature stores.", icon: <Database className="w-6 h-6" /> },
                { step: "03", title: "Model Development", desc: "Develop, train, and optimize machine learning models.", icon: <Cpu className="w-6 h-6" /> },
                { step: "04", title: "Deployment & Integration", desc: "Deploy models into enterprise systems.", icon: <Box className="w-6 h-6" /> },
                { step: "05", title: "Monitoring & Improvement", desc: "Monitor performance and enable continuous retraining.", icon: <Monitor className="w-6 h-6" /> }
              ].map((item, index) => (
                <motion.div 
                  key={index}
                  className="flex flex-col items-center text-center bg-white lg:bg-transparent p-6 lg:p-0 rounded-2xl lg:rounded-none border lg:border-none border-gray-100 shadow-sm lg:shadow-none"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="w-16 h-16 rounded-full bg-white border-4 border-indigo-50 flex items-center justify-center text-indigo-600 shadow-md mb-6 relative z-10">
                    {item.icon}
                  </div>
                  <div className="text-sm font-bold text-indigo-600 mb-2">Phase {item.step}</div>
                  <h3 className="text-lg font-bold text-gray-900 mb-3">{item.title}</h3>
                  <p className="text-sm text-gray-600">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Section 5: Technology Ecosystem */}
      <section className="py-24 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div className="text-center max-w-3xl mx-auto mb-16" {...fadeIn}>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Technology Ecosystem We Work With</h2>
            <p className="text-lg text-gray-400">
              We leverage leading platforms and frameworks to build robust AI architectures.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {[
              { category: "AI / ML Frameworks", items: ["TensorFlow", "PyTorch", "Scikit-learn", "XGBoost"] },
              { category: "MLOps Platforms", items: ["MLflow", "Kubeflow", "SageMaker", "Vertex AI"] },
              { category: "Data Engineering", items: ["Apache Spark", "Apache Airflow", "Kafka"] },
              { category: "Feature Stores", items: ["Feast", "Tecton"] },
              { category: "Infrastructure", items: ["Kubernetes", "Docker", "AWS", "Azure", "Google Cloud"] }
            ].map((group, idx) => (
              <motion.div 
                key={idx}
                className="bg-white/5 border border-white/10 rounded-xl p-6 backdrop-blur-sm"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
              >
                <h3 className="text-sm font-bold text-rysun-lightblue uppercase tracking-wider mb-4">{group.category}</h3>
                <ul className="space-y-3">
                  {group.items.map((item, i) => (
                    <li key={i} className="text-gray-300 flex items-center gap-2 text-sm">
                      <div className="w-1.5 h-1.5 rounded-full bg-indigo-500" />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 6: Business Impact */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div className="text-center max-w-3xl mx-auto mb-16" {...fadeIn}>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Business Outcomes Delivered</h2>
            <p className="text-lg text-gray-600">
              Measurable impact through robust AI engineering.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Card 1 - Wide */}
            <motion.div 
              className="lg:col-span-2 relative overflow-hidden p-8 rounded-3xl border border-blue-100 bg-gradient-to-br from-blue-50 to-white shadow-sm hover:shadow-lg transition-all duration-300 group flex flex-col justify-between min-h-[240px]"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="relative z-10 w-full flex flex-col md:flex-row md:items-center justify-between gap-6 h-full">
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">Model Deployment</h3>
                  <p className="text-gray-600 leading-relaxed max-w-sm">Automated ML pipelines accelerate production readiness and reduce time-to-market.</p>
                </div>
                <div className="flex flex-col items-start md:items-end">
                  <span className="text-6xl md:text-7xl font-black text-blue-600 tracking-tight leading-none mb-2">40%</span>
                  <span className="text-xl font-bold text-gray-700 uppercase tracking-wider">Faster</span>
                </div>
              </div>
              <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-blue-200 rounded-full opacity-20 blur-3xl group-hover:scale-150 transition-transform duration-700" />
            </motion.div>
            
            {/* Card 2 - Tall */}
            <motion.div 
              className="lg:row-span-2 relative overflow-hidden p-8 rounded-3xl border border-teal-100 bg-gradient-to-br from-teal-50 to-white shadow-sm hover:shadow-lg transition-all duration-300 group flex flex-col justify-between min-h-[240px] lg:min-h-[500px]"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <div className="relative z-10 flex flex-col h-full">
                <div className="mb-auto">
                  <span className="text-6xl md:text-7xl font-black text-teal-600 tracking-tight leading-none block mb-2">100%</span>
                  <span className="text-xl font-bold text-gray-700 uppercase tracking-wider block mb-8">Improved</span>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">Model Reliability</h3>
                  <p className="text-gray-600 leading-relaxed">Continuous monitoring, automated retraining, and robust governance ensure stable AI performance.</p>
                </div>
              </div>
              <div className="absolute -top-20 -right-20 w-64 h-64 bg-teal-200 rounded-full opacity-20 blur-3xl group-hover:scale-150 transition-transform duration-700" />
            </motion.div>

            {/* Card 3 - Square */}
            <motion.div 
              className="relative overflow-hidden p-8 rounded-3xl border border-purple-100 bg-gradient-to-br from-purple-50 to-white shadow-sm hover:shadow-lg transition-all duration-300 group flex flex-col justify-between min-h-[240px]"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <div className="relative z-10 flex flex-col h-full">
                <div className="flex items-baseline gap-2 mb-4">
                  <span className="text-5xl font-black text-purple-600 tracking-tight">60%</span>
                  <span className="text-lg font-bold text-gray-700 uppercase">Reduced</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Operational Overhead</h3>
                <p className="text-sm text-gray-600 leading-relaxed">Automated lifecycle management streamlines AI operations.</p>
              </div>
              <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-purple-200 rounded-full opacity-20 blur-2xl group-hover:scale-150 transition-transform duration-700" />
            </motion.div>

            {/* Card 4 - Square */}
            <motion.div 
              className="relative overflow-hidden p-8 rounded-3xl border border-indigo-100 bg-gradient-to-br from-indigo-50 to-white shadow-sm hover:shadow-lg transition-all duration-300 group flex flex-col justify-between min-h-[240px]"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <div className="relative z-10 flex flex-col h-full">
                <div className="flex items-baseline gap-2 mb-4">
                  <span className="text-5xl font-black text-indigo-600 tracking-tight">10x</span>
                  <span className="text-lg font-bold text-gray-700 uppercase">Scalable</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">AI Infrastructure</h3>
                <p className="text-sm text-gray-600 leading-relaxed">Enterprise architecture enables large-scale AI deployments.</p>
              </div>
              <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-indigo-200 rounded-full opacity-20 blur-2xl group-hover:scale-150 transition-transform duration-700" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Section 7: Use Cases */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div className="text-center max-w-3xl mx-auto mb-16" {...fadeIn}>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Example Use Cases</h2>
            <p className="text-lg text-gray-600">
              How we apply AI architecture and engineering across industries.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: "Real-Time Fraud Detection Platforms",
                desc: "Streaming pipelines with real-time model inference.",
                icon: <ShieldCheck className="w-6 h-6 text-rysun-blue" />
              },
              {
                title: "AI-Powered Recommendation Engines",
                desc: "Scalable recommendation infrastructure with feature stores.",
                icon: <Target className="w-6 h-6 text-indigo-600" />
              },
              {
                title: "Predictive Maintenance Systems",
                desc: "IoT-driven ML pipelines with continuous training.",
                icon: <Settings className="w-6 h-6 text-teal-600" />
              },
              {
                title: "Customer Intelligence Platforms",
                desc: "Automated feature engineering and predictive analytics.",
                icon: <Search className="w-6 h-6 text-purple-600" />
              }
            ].map((useCase, index) => (
              <motion.div 
                key={index}
                className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm flex items-start gap-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="w-12 h-12 rounded-lg bg-gray-50 flex items-center justify-center flex-shrink-0">
                  {useCase.icon}
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{useCase.title}</h3>
                  <p className="text-gray-600">{useCase.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 8: Why Rysun */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div {...fadeIn}>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Why Enterprises Choose Rysun</h2>
              <p className="text-lg text-gray-600 mb-8">
                We combine deep engineering expertise with strategic vision to build AI platforms that deliver lasting value.
              </p>
              
              <ul className="space-y-4">
                {[
                  "Enterprise-scale AI architecture expertise",
                  "Advanced MLOps engineering capabilities",
                  "Cloud-native AI platforms",
                  "Responsible AI and governance integration",
                  "Scalable infrastructure design"
                ].map((point, index) => (
                  <motion.li 
                    key={index}
                    className="flex items-center gap-3"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <CheckCircle2 className="w-6 h-6 text-green-500 flex-shrink-0" />
                    <span className="text-gray-800 font-medium">{point}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
            
            <motion.div 
              className="relative h-[450px] rounded-3xl overflow-hidden bg-gradient-to-br from-gray-900 via-indigo-950 to-rysun-darkpurple flex items-center justify-center p-8 border border-gray-800 shadow-2xl"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
            >
              <div className="absolute inset-0 opacity-20 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMjAiIGN5PSIyMCIgcj0iMSIgZmlsbD0icmdiYSgyNTUsIDI1NSwgMjU1LCAwLjA1KSIvPjwvc3ZnPg==')]" />
              
              {/* Isometric Enterprise Stack */}
              <div className="relative w-full h-full flex flex-col items-center justify-center gap-6" style={{ perspective: '1000px' }}>
                {[
                  { icon: <ShieldCheck className="w-6 h-6 text-green-400" />, label: "Governance & Security", color: "border-green-500/40 bg-green-500/10", shadow: "shadow-[0_20px_40px_rgba(34,197,94,0.15)]", delay: 0 },
                  { icon: <Cpu className="w-6 h-6 text-blue-400" />, label: "AI Models & Inference", color: "border-blue-500/40 bg-blue-500/10", shadow: "shadow-[0_20px_40px_rgba(59,130,246,0.15)]", delay: 0.2 },
                  { icon: <Network className="w-6 h-6 text-purple-400" />, label: "MLOps & Pipelines", color: "border-purple-500/40 bg-purple-500/10", shadow: "shadow-[0_20px_40px_rgba(168,85,247,0.15)]", delay: 0.4 },
                  { icon: <Database className="w-6 h-6 text-teal-400" />, label: "Data Infrastructure", color: "border-teal-500/40 bg-teal-500/10", shadow: "shadow-[0_20px_40px_rgba(20,184,166,0.15)]", delay: 0.6 }
                ].map((layer, i) => (
                  <motion.div
                    key={i}
                    className={`relative w-64 h-16 rounded-xl border ${layer.color} backdrop-blur-md flex items-center px-6 gap-4 ${layer.shadow}`}
                    initial={{ opacity: 0, y: 50, rotateX: 50, rotateZ: -15 }}
                    whileInView={{ opacity: 1, y: 0, rotateX: 50, rotateZ: -15 }}
                    viewport={{ once: true }}
                    transition={{ duration: 4, delay: layer.delay, repeat: Infinity, ease: "easeInOut" }}
                    animate={{
                      y: [0, -8, 0],
                    }}
                    style={{
                      transformStyle: "preserve-3d",
                    }}
                  >
                    <div className="bg-gray-900/80 p-2 rounded-lg border border-gray-700/50">
                      {layer.icon}
                    </div>
                    <span className="text-white font-bold tracking-wide text-sm">{layer.label}</span>
                    
                    {/* Connecting lines between layers */}
                    {i < 3 && (
                      <div className="absolute -bottom-8 left-12 w-px h-8 bg-gradient-to-b from-white/30 to-transparent" />
                    )}
                    {i < 3 && (
                      <div className="absolute -bottom-8 right-12 w-px h-8 bg-gradient-to-b from-white/30 to-transparent" />
                    )}
                  </motion.div>
                ))}
                
                {/* Glowing Base */}
                <motion.div 
                  className="absolute bottom-0 w-64 h-32 bg-rysun-blue/20 rounded-full blur-3xl -z-10"
                  animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Section 9: Extraordinary Outcomes */}
      <section className="py-16 bg-white border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center max-w-3xl mx-auto">
            <motion.h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-4" {...fadeIn}>Extraordinary Outcomes</motion.h2>
            <motion.p className="text-lg text-gray-600" {...fadeIn}>See how we help global enterprises turn complex challenges into competitive advantages through AI Architecture & Engineering.</motion.p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            <div className="lg:col-span-7">
              <div className="bg-gradient-to-br from-gray-900 to-rysun-darkpurple rounded-3xl overflow-hidden shadow-xl h-full flex flex-col group relative">
                <div className="absolute inset-0 bg-[url('https://picsum.photos/seed/finance-ai-arch/800/800?blur=4')] opacity-20 mix-blend-overlay transition-transform duration-1000 group-hover:scale-105" />
                <div className="p-10 flex-grow flex flex-col relative z-10">
                  <div className="inline-flex items-center px-3 py-1 rounded-full bg-white/10 backdrop-blur-md text-xs font-bold text-white uppercase tracking-wider w-max mb-8 border border-white/20">
                    Financial Services Success Story
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-6 leading-tight">Enterprise-Wide AI Architecture Implementation</h3>
                  <div className="grid grid-cols-3 gap-4 mb-10">
                    <div className="bg-white/10 backdrop-blur-md p-5 rounded-2xl border border-white/10">
                      <div className="text-3xl font-black text-rysun-lightblue mb-1">100%</div>
                      <div className="text-xs text-gray-300 font-medium uppercase tracking-wider">Scalability</div>
                    </div>
                    <div className="bg-white/10 backdrop-blur-md p-5 rounded-2xl border border-white/10">
                      <div className="text-3xl font-black text-rysun-orange mb-1">40%</div>
                      <div className="text-xs text-gray-300 font-medium uppercase tracking-wider">Faster Deployment</div>
                    </div>
                    <div className="bg-white/10 backdrop-blur-md p-5 rounded-2xl border border-white/10">
                      <div className="text-3xl font-black text-rysun-red mb-1">Zero</div>
                      <div className="text-xs text-gray-300 font-medium uppercase tracking-wider">Downtime</div>
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
                { title: 'Scalable ML Pipelines', industry: 'Healthcare', desc: 'Safely launched 3 GenAI pilots with zero privacy breaches and high patient trust.', color: 'text-rysun-blue', bg: 'bg-blue-50' },
                { title: 'AI Infrastructure Modernization', industry: 'Retail', desc: 'Scaled 5 AI initiatives globally, resulting in a 25% increase in operational efficiency.', color: 'text-rysun-orange', bg: 'bg-orange-50' },
                { title: 'Automated Feature Engineering', industry: 'Manufacturing', desc: 'Established automated bias detection and explainable AI frameworks across 12 global plants.', color: 'text-rysun-red', bg: 'bg-red-50' }
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

      {/* Section 10: Latest Insights */}
      <section className="py-16 bg-gray-50 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
            <div className="max-w-2xl">
              <motion.h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-4" {...fadeIn}>Latest Insights</motion.h2>
              <motion.p className="text-lg text-gray-600" {...fadeIn}>Insights on AI architecture, engineering, and digital transformation from our experts.</motion.p>
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

      {/* Section 12: Final CTA */}
      <section className="relative py-24 overflow-hidden bg-gray-900">
        <div className="absolute inset-0 bg-gradient-to-br from-rysun-blue/20 to-rysun-darkpurple/20" />
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMjAiIGN5PSIyMCIgcj0iMSIgZmlsbD0icmdiYSgyNTUsIDI1NSwgMjU1LCAwLjA1KSIvPjwvc3ZnPg==')] opacity-30" />
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.div {...fadeIn}>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              Build a Production-Ready AI Platform
            </h2>
            <p className="text-xl text-indigo-100 mb-10 max-w-2xl mx-auto">
              Transform experimental AI initiatives into scalable enterprise systems with robust architecture and automated ML pipelines.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link to="/contact-us" className="inline-flex items-center justify-center px-8 py-4 text-base font-bold rounded-full text-white bg-rysun-blue hover:bg-blue-700 transition-all shadow-lg hover:shadow-xl hover:-translate-y-1">
                Schedule an AI Architecture Consultation
              </Link>
              <Link to="/capabilities/ai" className="inline-flex items-center justify-center px-8 py-4 text-base font-bold rounded-full text-white bg-white/10 hover:bg-white/20 border border-white/20 transition-all">
                Explore AI Services
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
