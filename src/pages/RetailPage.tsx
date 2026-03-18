import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  ShoppingCart, Store, Smartphone, LineChart, ArrowRight, CheckCircle2, 
  ShoppingBag, UserX, PackageX, BarChart, ListX, Target, ShieldAlert, 
  Cpu, Database, BrainCircuit, MessageSquare, Eye, TrendingUp, Sparkles, 
  Users, Server, Activity, Search, Layers, Workflow, Lightbulb, Cloud, 
  ShieldCheck, Zap, ChevronRight, Globe, Box, MapPin, Tag, Truck
} from 'lucide-react';

const RetailPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="w-full bg-white font-sans text-gray-900">
      
      {/* 1. Hero Banner */}
      <section className="relative min-h-[60vh] lg:min-h-[70vh] flex items-center pb-10 overflow-hidden bg-gray-900">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMjAiIGN5PSIyMCIgcj0iMSIgZmlsbD0icmdiYSgyNTUsIDI1NSwgMjU1LCAwLjA1KSIvPjwvc3ZnPg==')] opacity-30" />
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-900 to-indigo-900/80" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Hero Content */}
            <div className="lg:col-span-7">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-400/20 text-indigo-300 text-sm font-medium mb-6">
                  <Sparkles className="w-4 h-4" />
                  AI-Powered Retail Transformation
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight mb-6 leading-tight">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">AI-Powered</span> Retail & E-Commerce Transformation
                </h1>
                <p className="text-lg text-gray-300 mb-8 leading-relaxed max-w-xl">
                  Helping retailers unlock growth through AI-driven customer intelligence, intelligent store operations, and unified commerce data platforms.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link to="/contact-us" className="inline-flex items-center justify-center px-6 py-3.5 text-sm font-medium rounded-full text-white bg-gradient-to-r from-indigo-600 to-purple-600 hover:shadow-[0_0_30px_rgba(99,102,241,0.4)] hover:-translate-y-0.5 transition-all">
                    Talk to Retail Experts
                  </Link>
                  <a href="#solutions" className="inline-flex items-center justify-center px-6 py-3.5 text-sm font-medium rounded-full text-white bg-transparent border border-white/30 hover:bg-white/10 transition-all backdrop-blur-sm">
                    Explore Retail Solutions
                  </a>
                </div>
              </motion.div>
            </div>
            
            {/* Hero Visual - Omnichannel Retail Ecosystem */}
            <div className="hidden lg:flex lg:col-span-5 justify-center items-center relative h-[350px] scale-90 origin-center">
              <div className="relative w-full max-w-lg aspect-square flex items-center justify-center">
                
                {/* Central AI Brain */}
                <motion.div 
                  animate={{ scale: [1, 1.05, 1] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute z-30 w-32 h-32 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-full flex items-center justify-center shadow-[0_0_40px_rgba(99,102,241,0.4)] border border-indigo-300/30"
                >
                  <div className="flex flex-col items-center">
                    <BrainCircuit className="w-12 h-12 text-white mb-1" />
                    <span className="text-[10px] font-bold text-white tracking-widest uppercase">Retail AI</span>
                  </div>
                </motion.div>

                {/* Orbiting Nodes */}
                <motion.div 
                  animate={{ rotate: 360 }}
                  transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-0 rounded-full border border-dashed border-indigo-500/30"
                >
                  {/* Store Node */}
                  <div className="absolute top-0 left-1/2 -ml-8 -mt-8 w-16 h-16 bg-gray-800 border border-indigo-400/50 rounded-2xl flex items-center justify-center shadow-lg" style={{ transform: 'rotate(-0deg)' }}>
                    <Store className="w-8 h-8 text-indigo-400" />
                  </div>
                  {/* E-commerce Node */}
                  <div className="absolute bottom-0 left-1/2 -ml-8 -mb-8 w-16 h-16 bg-gray-800 border border-purple-400/50 rounded-2xl flex items-center justify-center shadow-lg" style={{ transform: 'rotate(-180deg)' }}>
                    <ShoppingCart className="w-8 h-8 text-purple-400" />
                  </div>
                  {/* Customer Node */}
                  <div className="absolute top-1/2 left-0 -mt-8 -ml-8 w-16 h-16 bg-gray-800 border border-teal-400/50 rounded-2xl flex items-center justify-center shadow-lg" style={{ transform: 'rotate(-270deg)' }}>
                    <Smartphone className="w-8 h-8 text-teal-400" />
                  </div>
                  {/* Analytics Node */}
                  <div className="absolute top-1/2 right-0 -mt-8 -mr-8 w-16 h-16 bg-gray-800 border border-blue-400/50 rounded-2xl flex items-center justify-center shadow-lg" style={{ transform: 'rotate(-90deg)' }}>
                    <LineChart className="w-8 h-8 text-blue-400" />
                  </div>
                </motion.div>

                {/* Data Flow Particles */}
                <svg className="absolute inset-0 w-full h-full z-10" viewBox="0 0 400 400">
                  <motion.circle cx="200" cy="200" r="150" stroke="url(#flowGrad)" strokeWidth="1" fill="none" strokeDasharray="4 8"
                    animate={{ strokeDashoffset: [0, -24] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                  />
                  <defs>
                    <linearGradient id="flowGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#818cf8" stopOpacity="0.8" />
                      <stop offset="100%" stopColor="#c084fc" stopOpacity="0.2" />
                    </linearGradient>
                  </defs>
                </svg>

                {/* Floating Tags */}
                <div className="absolute inset-0 pointer-events-none z-40">
                  <motion.div className="absolute top-[15%] right-[15%] bg-gray-900/80 border border-indigo-500/30 px-3 py-1.5 rounded-lg backdrop-blur-md" animate={{ y: [-5, 5, -5] }} transition={{ duration: 4, repeat: Infinity, delay: 1 }}>
                    <span className="text-[10px] font-bold text-indigo-300 uppercase tracking-wider">Omnichannel</span>
                  </motion.div>
                  <motion.div className="absolute bottom-[20%] left-[10%] bg-gray-900/80 border border-purple-500/30 px-3 py-1.5 rounded-lg backdrop-blur-md" animate={{ y: [-5, 5, -5] }} transition={{ duration: 4, repeat: Infinity, delay: 0.5 }}>
                    <span className="text-[10px] font-bold text-purple-300 uppercase tracking-wider">Customer 360</span>
                  </motion.div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Retail Industry Challenges */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-4 lg:sticky lg:top-24">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Retail Industry Challenges</h2>
              <p className="text-lg text-gray-600 mb-8">The modern retail landscape is complex. We help overcome the hurdles preventing scalable growth.</p>
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-indigo-50 border border-indigo-100 rounded-2xl p-6 shadow-sm"
              >
                <div className="w-10 h-10 bg-indigo-100 rounded-full flex items-center justify-center mb-4">
                  <Lightbulb className="w-5 h-5 text-indigo-600" />
                </div>
                <p className="text-indigo-900 font-medium leading-relaxed">
                  Rysun solves these challenges by deploying <span className="font-bold">AI and Data-driven retail intelligence</span>, unifying the customer journey, optimizing operations, and turning data into actionable insights.
                </p>
              </motion.div>
            </div>

            <div className="lg:col-span-8">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {[
                  { title: "Fragmented omnichannel customer experience", icon: <Globe className="w-5 h-5" /> },
                  { title: "Lack of personalization", icon: <UserX className="w-5 h-5" /> },
                  { title: "Inventory inefficiencies and stockouts", icon: <PackageX className="w-5 h-5" /> },
                  { title: "Poor store analytics visibility", icon: <Eye className="w-5 h-5" /> },
                  { title: "Manual product catalog management", icon: <ListX className="w-5 h-5" /> },
                  { title: "Marketing attribution challenges", icon: <Target className="w-5 h-5" /> },
                  { title: "Loss prevention and shoplifting issues", icon: <ShieldAlert className="w-5 h-5" /> }
                ].map((challenge, index) => (
                  <motion.div 
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md hover:border-red-100 transition-all flex items-start gap-4 group"
                  >
                    <div className="w-10 h-10 rounded-xl bg-gray-50 text-gray-400 flex items-center justify-center flex-shrink-0 group-hover:bg-red-50 group-hover:text-red-500 transition-colors">
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

      {/* 3. Retail AI & Data Capability Map */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Retail AI & Data Capability Map</h2>
            <p className="text-lg text-gray-600">A unified ecosystem powering modern retail experiences.</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Pillar 1 */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="relative p-8 rounded-3xl bg-gradient-to-b from-indigo-50 to-white border border-indigo-100"
            >
              <div className="w-14 h-14 rounded-2xl bg-indigo-600 text-white flex items-center justify-center mb-6 shadow-lg shadow-indigo-200">
                <BrainCircuit className="w-7 h-7" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">AI for Retail Intelligence</h3>
              <p className="text-gray-600 mb-6">Customer engagement, store intelligence, operations optimization.</p>
              <ul className="space-y-3">
                {['Generative AI Assistants', 'Computer Vision Analytics', 'Predictive Demand Modeling'].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-sm font-medium text-gray-700">
                    <CheckCircle2 className="w-5 h-5 text-indigo-500" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Pillar 2 */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="relative p-8 rounded-3xl bg-gradient-to-b from-purple-50 to-white border border-purple-100"
            >
              <div className="w-14 h-14 rounded-2xl bg-purple-600 text-white flex items-center justify-center mb-6 shadow-lg shadow-purple-200">
                <Database className="w-7 h-7" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Retail Data Foundations</h3>
              <p className="text-gray-600 mb-6">Unified commerce data platforms and customer data platforms.</p>
              <ul className="space-y-3">
                {['Customer 360 & MDM', 'Retail Data Lakehouse', 'Real-time Event Streaming'].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-sm font-medium text-gray-700">
                    <CheckCircle2 className="w-5 h-5 text-purple-500" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Pillar 3 */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="relative p-8 rounded-3xl bg-gradient-to-b from-teal-50 to-white border border-teal-100"
            >
              <div className="w-14 h-14 rounded-2xl bg-teal-600 text-white flex items-center justify-center mb-6 shadow-lg shadow-teal-200">
                <BarChart className="w-7 h-7" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Retail Analytics & Decision Intelligence</h3>
              <p className="text-gray-600 mb-6">Advanced analytics for sales, marketing, and store performance.</p>
              <ul className="space-y-3">
                {['Marketing Attribution', 'Store Performance Dashboards', 'Pricing Optimization'].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-sm font-medium text-gray-700">
                    <CheckCircle2 className="w-5 h-5 text-teal-500" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 4. Retail Solutions & Platforms */}
      <section id="solutions" className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Retail Solutions & Platforms</h2>
            <p className="text-lg text-gray-600">Comprehensive capabilities designed to transform every aspect of the retail value chain.</p>
          </div>

          <div className="max-w-5xl mx-auto space-y-12">
            {[
              {
                title: "Customer Experience Intelligence",
                icon: <Users className="w-6 h-6" />,
                items: ["AI Product Recommendation Engines", "Conversational Commerce Assistants", "AI Customer Support Automation", "Customer Sentiment & Feedback Intelligence"]
              },
              {
                title: "Visual Retail Intelligence",
                icon: <Eye className="w-6 h-6" />,
                items: ["Smart Shelf Monitoring", "Customer Footfall & Behavior Analytics", "Queue Detection & Checkout Optimization", "Shoplifting Detection"]
              },
              {
                title: "Retail Operations Intelligence",
                icon: <Activity className="w-6 h-6" />,
                items: ["AI Demand Forecasting", "Inventory Optimization", "Dynamic Pricing Engines", "AI Supply Chain Optimization"]
              },
              {
                title: "Generative AI for Commerce",
                icon: <Sparkles className="w-6 h-6" />,
                items: ["AI Product Description Generation", "AI Catalog Tagging & Enrichment", "AI Marketing Content Generation", "AI Campaign Automation Assistants"]
              },
              {
                title: "Customer Data Platforms",
                icon: <Database className="w-6 h-6" />,
                items: ["Customer 360 Data Platform", "Customer Identity Resolution (MDM)", "Personalization Data Platforms"]
              },
              {
                title: "Retail Data Platforms",
                icon: <Server className="w-6 h-6" />,
                items: ["Omnichannel Commerce Data Platform", "Retail Data Lakehouse", "Inventory & Supply Chain Data Platform"]
              },
              {
                title: "Retail Analytics Platforms",
                icon: <LineChart className="w-6 h-6" />,
                items: ["Sales Performance Analytics", "Marketing Attribution Analytics", "Store Performance Dashboards"]
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
                  <div className="w-12 h-12 rounded-xl bg-white shadow-sm border border-gray-100 flex items-center justify-center text-indigo-600">
                    {solution.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">{solution.title}</h3>
                </div>
                <div className="md:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
                  {solution.items.map((item, i) => (
                    <div key={i} className="bg-white p-5 rounded-xl border border-gray-100 shadow-sm hover:shadow-md hover:border-indigo-200 transition-all flex items-start gap-3">
                       <CheckCircle2 className="w-5 h-5 text-indigo-500 flex-shrink-0" />
                       <span className="text-gray-700 font-medium">{item}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Rysun Retail Transformation Framework */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Rysun Retail Transformation Framework</h2>
            <p className="text-lg text-gray-600">A structured 5-step journey to AI-first retail excellence.</p>
          </div>

          <div className="relative">
            {/* Connecting Line (Desktop) */}
            <div className="hidden lg:block absolute top-1/2 left-0 w-full h-1 bg-gradient-to-r from-indigo-100 via-purple-100 to-teal-100 -translate-y-1/2 rounded-full" />
            
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
              {[
                { title: "Retail Discovery & Opportunity Mapping", desc: "Retail capability assessment, data maturity analysis, AI opportunity identification.", icon: <Search className="w-6 h-6" /> },
                { title: "Unified Retail Data Foundation", desc: "Customer 360 architecture, retail data lakehouse, omnichannel integration.", icon: <Database className="w-6 h-6" /> },
                { title: "AI Intelligence Layer", desc: "Demand forecasting models, recommendation engines, computer vision analytics.", icon: <BrainCircuit className="w-6 h-6" /> },
                { title: "Commerce System Integration", desc: "Integration with e-commerce platforms, POS systems, ERP, marketing tools.", icon: <Workflow className="w-6 h-6" /> },
                { title: "Continuous Optimization", desc: "AI-driven personalization, pricing optimization, supply chain intelligence.", icon: <TrendingUp className="w-6 h-6" /> }
              ].map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="relative z-10 flex flex-col items-center text-center group"
                >
                  <div className="w-16 h-16 rounded-2xl bg-white border-2 border-indigo-100 flex items-center justify-center mb-6 text-indigo-600 group-hover:bg-indigo-600 group-hover:text-white group-hover:border-indigo-600 transition-all duration-300 shadow-xl shadow-indigo-100/50">
                    {step.icon}
                  </div>
                  <div className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm w-full h-full">
                    <div className="text-xs font-bold text-indigo-500 mb-2 uppercase tracking-wider">Step 0{index + 1}</div>
                    <h3 className="text-base font-bold text-gray-900 mb-2">{step.title}</h3>
                    <p className="text-sm text-gray-500 leading-relaxed">{step.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 6. Retail AI Accelerators */}
      <section className="py-24 bg-gray-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMjAiIGN5PSIyMCIgcj0iMSIgZmlsbD0icmdiYSgyNTUsIDI1NSwgMjU1LCAwLjA1KSIvPjwvc3ZnPg==')] opacity-20" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Retail AI Accelerators</h2>
            <p className="text-lg text-gray-400">Pre-built frameworks to speed up time-to-market and reduce implementation risk.</p>
          </div>

          <div className="flex flex-wrap justify-center gap-6">
            {[
              { title: "Retail Recommendation Engine Framework", desc: "Pre-configured collaborative filtering and deep learning models for personalized product suggestions.", icon: <Tag className="w-6 h-6" /> },
              { title: "Customer 360 Retail Accelerator", desc: "Ready-to-deploy data models and integration pipelines for unified customer profiles.", icon: <Users className="w-6 h-6" /> },
              { title: "Retail Demand Forecasting Accelerator", desc: "Time-series forecasting models optimized for retail seasonality and promotions.", icon: <LineChart className="w-6 h-6" /> },
              { title: "Computer Vision Retail Analytics Accelerator", desc: "Pre-trained models for footfall tracking, queue detection, and shelf analysis.", icon: <Eye className="w-6 h-6" /> },
              { title: "Retail Marketing AI Automation Framework", desc: "Automated campaign generation, audience segmentation, and A/B testing framework.", icon: <Target className="w-6 h-6" /> }
            ].map((accelerator, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-8 hover:border-indigo-400 transition-colors w-full md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)]"
              >
                <div className="w-12 h-12 rounded-xl bg-indigo-500/20 text-indigo-400 flex items-center justify-center mb-6">
                  {accelerator.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{accelerator.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{accelerator.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Retail Impact Stories */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Retail Impact Stories</h2>
            <p className="text-lg text-gray-600">See how we help global retailers turn complex challenges into competitive advantages.</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            <div className="lg:col-span-7">
              <div className="bg-gradient-to-br from-gray-900 to-indigo-900 rounded-3xl overflow-hidden shadow-xl h-full flex flex-col group relative">
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80&w=800')] opacity-20 mix-blend-overlay transition-transform duration-1000 group-hover:scale-105" />
                <div className="p-10 flex-grow flex flex-col relative z-10">
                  <div className="inline-flex items-center px-3 py-1 rounded-full bg-white/10 backdrop-blur-md text-xs font-bold text-white uppercase tracking-wider w-max mb-8 border border-white/20">
                    Retail Success Story
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-6 leading-tight">AI Product Recommendation Platform for a Global Retailer</h3>
                  <div className="grid grid-cols-3 gap-4 mb-10">
                    <div className="bg-white/10 backdrop-blur-md p-5 rounded-2xl border border-white/10">
                      <div className="text-3xl font-black text-indigo-400 mb-1">30%</div>
                      <div className="text-xs text-gray-300 font-medium uppercase tracking-wider">Increase in Conversion</div>
                    </div>
                    <div className="bg-white/10 backdrop-blur-md p-5 rounded-2xl border border-white/10">
                      <div className="text-3xl font-black text-purple-400 mb-1">15%</div>
                      <div className="text-xs text-gray-300 font-medium uppercase tracking-wider">Higher AOV</div>
                    </div>
                    <div className="bg-white/10 backdrop-blur-md p-5 rounded-2xl border border-white/10">
                      <div className="text-3xl font-black text-teal-400 mb-1">2M+</div>
                      <div className="text-xs text-gray-300 font-medium uppercase tracking-wider">Active Users</div>
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
                { title: 'AI Demand Forecasting', industry: 'Supply Chain', desc: 'Reduced stockouts by 25% by deploying predictive models integrating weather, local events, and historical sales.', color: 'text-indigo-600', bg: 'bg-indigo-50' },
                { title: 'Customer 360 Platform', industry: 'Omnichannel Retail', desc: 'Consolidated data from POS, e-commerce, and loyalty programs to enable unified omnichannel personalization.', color: 'text-purple-600', bg: 'bg-purple-50' },
                { title: 'Smart Store Analytics', industry: 'Physical Retail', desc: 'Implemented computer vision for footfall tracking and queue optimization, reducing wait times by 40%.', color: 'text-teal-600', bg: 'bg-teal-50' }
              ].map((story, idx) => (
                <Link key={idx} to="/insights" className="flex flex-col justify-center bg-gray-50 p-6 rounded-3xl shadow-sm border border-gray-100 hover:shadow-md hover:border-gray-200 transition-all group flex-1">
                  <div className={`text-xs font-black ${story.color} uppercase tracking-wider mb-2`}>{story.industry}</div>
                  <h4 className="text-lg font-bold text-gray-900 group-hover:text-indigo-600 transition-colors leading-snug mb-2">{story.title}</h4>
                  <p className="text-sm text-gray-600">{story.desc}</p>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 9. Retail Insights & Thought Leadership */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-12">
            <div className="max-w-2xl">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Retail Insights & Thought Leadership</h2>
              <p className="text-lg text-gray-600">Latest perspectives on AI and data in the retail industry.</p>
            </div>
            <Link to="/insights" className="hidden md:inline-flex items-center text-indigo-600 font-bold hover:text-indigo-700 transition-colors">
              View All Insights <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "The Future of GenAI in Enterprise Retail", category: "Artificial Intelligence", date: "March 10, 2026", image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80&w=600" },
              { title: "Building a Retail Customer 360 Platform", category: "Data Strategy", date: "March 5, 2026", image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=600" },
              { title: "Computer Vision for Smart Stores", category: "Innovation", date: "February 28, 2026", image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&q=80&w=600" }
            ].map((post, index) => (
              <Link key={index} to="/insights" className="flex flex-col bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl border border-gray-100 transition-all group h-full">
                <div className="relative h-48 overflow-hidden">
                  <img src={post.image} alt={post.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" referrerPolicy="no-referrer" />
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md border border-white/20 px-3 py-1 rounded-full text-xs font-bold text-gray-900 uppercase tracking-wider z-10 shadow-sm">
                    {post.category}
                  </div>
                </div>
                <div className="p-8 flex flex-col flex-grow">
                  <div className="text-sm text-gray-500 mb-3 font-medium">{post.date}</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-indigo-600 transition-colors leading-snug flex-grow">{post.title}</h3>
                  <div className="flex items-center text-sm font-bold text-indigo-600 mt-auto">
                    Read Article <ArrowRight className="ml-2 w-4 h-4" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
          
          <div className="mt-8 text-center md:hidden">
            <Link to="/insights" className="inline-flex items-center text-indigo-600 font-bold hover:text-indigo-700 transition-colors">
              View All Insights <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* 10. Why Rysun Labs */}
      <section className="py-24 bg-white">
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
                We combine deep technical expertise with strategic retail business acumen to deliver solutions that drive real impact.
              </p>
              <div className="space-y-6">
                {[
                  { title: "AI-First enterprise transformation approach", icon: <BrainCircuit className="w-5 h-5" /> },
                  { title: "Deep expertise in AI, Data, and Cloud", icon: <Cloud className="w-5 h-5" /> },
                  { title: "Industry-focused retail solutions", icon: <Store className="w-5 h-5" /> },
                  { title: "Pre-built accelerators and frameworks", icon: <Zap className="w-5 h-5" /> },
                  { title: "Proven enterprise delivery experience", icon: <ShieldCheck className="w-5 h-5" /> }
                ].map((feature, index) => (
                  <div key={index} className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-indigo-50 flex items-center justify-center text-indigo-600 flex-shrink-0">
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
              <div className="aspect-square rounded-full bg-gradient-to-tr from-indigo-100 to-purple-50 absolute -inset-8 blur-3xl opacity-50" />
              <img 
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=800" 
                alt="Rysun Labs Team" 
                className="relative rounded-3xl shadow-2xl border border-gray-100 object-cover aspect-[4/3]"
                referrerPolicy="no-referrer"
              />
              
              {/* Floating Stat Card */}
              <div className="absolute -bottom-8 -left-8 bg-white p-6 rounded-2xl shadow-xl border border-gray-100 max-w-xs">
                <div className="flex items-center gap-4 mb-2">
                  <div className="w-12 h-12 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600">
                    <Target className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-gray-900">100+</div>
                    <div className="text-sm text-gray-500 font-medium">Retail Projects Delivered</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 11. Final Call to Action */}
      <section className="relative py-24 bg-gray-900 overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMjAiIGN5PSIyMCIgcj0iMSIgZmlsbD0icmdiYSgyNTUsIDI1NSwgMjU1LCAwLjA1KSIvPjwvc3ZnPg==')] opacity-20" />
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/80 to-purple-900/80" />
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
              Transform Your Retail Business with AI & Data
            </h2>
            <p className="text-xl text-indigo-100 mb-10 max-w-2xl mx-auto">
              Partner with Rysun Labs to build intelligent retail operations and personalized customer experiences.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact-us" className="inline-flex items-center justify-center px-8 py-4 text-base font-medium rounded-full text-indigo-900 bg-white hover:bg-indigo-50 hover:shadow-[0_0_30px_rgba(255,255,255,0.3)] hover:-translate-y-0.5 transition-all">
                Speak with Retail Experts
              </Link>
              <Link to="/contact-us" className="inline-flex items-center justify-center px-8 py-4 text-base font-medium rounded-full text-white bg-transparent border border-white/30 hover:bg-white/10 transition-all backdrop-blur-sm">
                Request a Solution Demo
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

    </div>
  );
};

export default RetailPage;
