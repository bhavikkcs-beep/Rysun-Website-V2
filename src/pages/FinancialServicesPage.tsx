import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  ArrowRight, ShieldCheck, Database, LineChart, 
  Smartphone, FileText, Zap, CheckCircle2, 
  ChevronRight, Globe, Lock, Briefcase, 
  Building2, Server, Cpu, Cloud, Network,
  CreditCard, PieChart, Users, MessageSquare,
  BrainCircuit, Layers
} from 'lucide-react';
import { Link } from 'react-router-dom';

const FinancialServicesPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="w-full bg-white font-sans text-gray-900">
      
      {/* Section 1 - Hero Banner */}
      <section className="relative min-h-[60vh] lg:min-h-[70vh] flex items-center pb-10 overflow-hidden bg-gray-900">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-slate-900 to-rysun-darkpurple/80" />
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMjAiIGN5PSIyMCIgcj0iMSIgZmlsbD0icmdiYSgyNTUsIDI1NSwgMjU1LCAwLjA1KSIvPjwvc3ZnPg==')] opacity-40" />
        
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-emerald-400 rounded-full"
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

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="max-w-3xl">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-emerald-400 text-xs font-medium mb-5 backdrop-blur-sm">
                  <Building2 className="w-3.5 h-3.5" />
                  <span>Financial Services</span>
                </div>
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white tracking-tight mb-5 leading-tight">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-400">AI-Powered Transformation</span> for Financial Services
                </h1>
                <p className="text-base text-gray-300 mb-6 leading-relaxed max-w-lg">
                  Rysun Labs helps banks and financial institutions modernize customer engagement, automate financial operations, strengthen fraud detection, and unlock data-driven insights using AI, Data, and Digital platforms.
                </p>
                
                <div className="flex flex-wrap gap-3 mb-6">
                  {['Intelligent Digital Banking', 'Fraud & Risk Intelligence', 'Banking Data Platforms', 'Financial Analytics'].map((highlight, idx) => (
                    <div key={idx} className="flex items-center gap-1.5 text-xs text-gray-300 bg-white/5 px-2.5 py-1 rounded-md border border-white/10">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                      {highlight}
                    </div>
                  ))}
                </div>

                <div className="flex flex-col sm:flex-row gap-3 mb-4">
                  <a href="#solutions" className="inline-flex items-center justify-center px-6 py-3 text-sm font-medium rounded-full text-white bg-gradient-to-r from-emerald-500 to-teal-600 hover:shadow-[0_0_30px_rgba(16,185,129,0.5)] hover:-translate-y-0.5 transition-all">
                    Explore Financial Solutions
                  </a>
                  <Link to="/contact-us" className="inline-flex items-center justify-center px-6 py-3 text-sm font-medium rounded-full text-white bg-transparent border border-white/30 hover:bg-white/10 transition-all backdrop-blur-sm">
                    Talk to Our Experts
                  </Link>
                </div>
              </motion.div>
            </div>
            
            {/* Financial Data Visualization Infographic */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="hidden lg:flex justify-center items-center relative h-[420px] -translate-y-8"
            >
              <div className="relative w-full max-w-lg aspect-square flex items-center justify-center">
                {/* Background glow */}
                <div className="absolute inset-0 bg-gradient-to-tr from-emerald-500/20 to-teal-500/20 rounded-full blur-[80px]" />

                {/* Main Financial Dashboard Abstraction */}
                <motion.div
                  className="absolute z-20 w-[85%] h-[65%] bg-slate-800/80 backdrop-blur-xl rounded-2xl border border-slate-600/50 shadow-2xl flex flex-col overflow-hidden"
                  animate={{ y: [-10, 10, -10] }}
                  transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                >
                  {/* Header */}
                  <div className="h-10 bg-slate-900/50 border-b border-slate-700/50 flex items-center px-4 justify-between">
                    <div className="flex gap-2">
                      <div className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
                      <div className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                      <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                    </div>
                    <div className="h-2 w-24 bg-slate-700/50 rounded-full" />
                  </div>
                  
                  {/* Body */}
                  <div className="flex-1 p-5 flex flex-col gap-4">
                    {/* Top Stats */}
                    <div className="flex gap-4 h-20">
                      <div className="flex-1 bg-gradient-to-br from-emerald-500/10 to-teal-500/10 rounded-xl border border-emerald-500/20 p-3 flex flex-col justify-between relative overflow-hidden">
                        <div className="h-2 w-12 bg-emerald-400/50 rounded-full" />
                        <div className="h-4 w-20 bg-emerald-400 rounded-full" />
                        <LineChart className="absolute right-2 bottom-2 w-8 h-8 text-emerald-500/20" />
                      </div>
                      <div className="flex-1 bg-gradient-to-br from-blue-500/10 to-indigo-500/10 rounded-xl border border-blue-500/20 p-3 flex flex-col justify-between relative overflow-hidden">
                        <div className="h-2 w-12 bg-blue-400/50 rounded-full" />
                        <div className="h-4 w-16 bg-blue-400 rounded-full" />
                        <PieChart className="absolute right-2 bottom-2 w-8 h-8 text-blue-500/20" />
                      </div>
                    </div>
                    
                    {/* Chart Area */}
                    <div className="flex-1 bg-slate-900/50 rounded-xl border border-slate-700/50 p-4 flex items-end gap-3 relative overflow-hidden">
                      {/* Grid lines */}
                      <div className="absolute inset-0 flex flex-col justify-between p-4 pointer-events-none opacity-20">
                        <div className="border-b border-slate-500 w-full" />
                        <div className="border-b border-slate-500 w-full" />
                        <div className="border-b border-slate-500 w-full" />
                      </div>
                      {[30, 50, 40, 70, 60, 90, 80].map((h, i) => (
                        <motion.div 
                          key={i}
                          className="flex-1 bg-gradient-to-t from-emerald-600 to-teal-400 rounded-t-sm opacity-80"
                          initial={{ height: `${h}%` }}
                          animate={{ height: [`${h}%`, `${Math.max(20, h - 15)}%`, `${Math.min(100, h + 15)}%`, `${h}%`] }}
                          transition={{ duration: 3 + i, repeat: Infinity, ease: "easeInOut" }}
                        />
                      ))}
                    </div>
                  </div>
                </motion.div>

                {/* Floating Node 1: Security/Fraud */}
                <motion.div
                  className="absolute z-30 -right-4 top-1/4 w-16 h-16 bg-gradient-to-br from-rose-500 to-red-600 rounded-2xl shadow-lg shadow-rose-500/20 border border-white/10 flex items-center justify-center"
                  animate={{ y: [8, -8, 8], rotate: [0, 5, -5, 0] }}
                  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                >
                  <ShieldCheck className="w-8 h-8 text-white" />
                  <div className="absolute -left-1 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-rose-300 shadow-[0_0_10px_#fda4af]" />
                </motion.div>

                {/* Floating Node 2: Mobile Banking */}
                <motion.div
                  className="absolute z-30 -left-6 bottom-1/4 w-14 h-14 bg-gradient-to-br from-blue-400 to-indigo-500 rounded-2xl shadow-lg shadow-blue-500/20 border border-white/10 flex items-center justify-center"
                  animate={{ y: [-6, 6, -6], rotate: [0, -5, 5, 0] }}
                  transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                >
                  <Smartphone className="w-7 h-7 text-white" />
                  <div className="absolute -right-1 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-blue-200 shadow-[0_0_10px_#bfdbfe]" />
                </motion.div>

                {/* Floating Node 3: Data/Transactions */}
                <motion.div
                  className="absolute z-10 left-1/4 -top-6 w-14 h-14 bg-gradient-to-br from-amber-400 to-orange-500 rounded-xl shadow-lg shadow-amber-500/20 border border-white/10 flex items-center justify-center"
                  animate={{ y: [5, -5, 5] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                >
                  <Database className="w-7 h-7 text-white" />
                  <div className="absolute left-1/2 -bottom-1 -translate-x-1/2 w-2 h-2 rounded-full bg-amber-200 shadow-[0_0_10px_#fde68a]" />
                </motion.div>

                {/* Background Tech Rings */}
                <div className="absolute inset-0 z-0 flex items-center justify-center opacity-30 pointer-events-none">
                  <motion.div 
                    className="absolute w-[85%] h-[85%] rounded-full border border-emerald-500/30 border-dashed"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                  />
                  <motion.div 
                    className="absolute w-[105%] h-[105%] rounded-full border border-slate-600/50"
                    animate={{ rotate: -360 }}
                    transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Section 2 - Financial Services Industry Overview */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">The Next Era of Financial Services</h2>
            <p className="text-lg text-gray-600">
              Financial institutions are being fundamentally transformed by AI-powered banking experiences, real-time fraud detection, intelligent financial operations, enterprise data platforms, and advanced analytics.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Fraud & Financial Crime", icon: ShieldCheck, desc: "Sophisticated threats requiring real-time, AI-driven detection and mitigation." },
              { title: "Legacy Banking Systems", icon: Server, desc: "Outdated infrastructure hindering agility, innovation, and seamless customer experiences." },
              { title: "Regulatory Compliance", icon: FileText, desc: "Increasing pressure to meet complex, evolving global financial regulations efficiently." },
              { title: "Fragmented Financial Data", icon: Database, desc: "Siloed data preventing unified customer views and accurate predictive analytics." }
            ].map((challenge, idx) => (
              <div key={idx} className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-emerald-50 text-emerald-600 rounded-xl flex items-center justify-center mb-4">
                  <challenge.icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{challenge.title}</h3>
                <p className="text-sm text-gray-600">{challenge.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 3 - Financial Services Value Chain */}
      <section className="py-20 bg-white border-t border-gray-100 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Financial Services Value Chain</h2>
            <p className="text-lg text-gray-600">
              A holistic approach to modernizing the entire financial ecosystem, from customer touchpoints to core banking data.
            </p>
          </div>

          <div className="relative">
            {/* Connecting Line */}
            <div className="hidden lg:block absolute top-1/2 left-0 w-full h-1 bg-gradient-to-r from-emerald-100 via-teal-200 to-blue-100 -translate-y-1/2 z-0" />
            
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-4 relative z-10">
              {[
                { title: "Customer Engagement & Digital Banking", icon: Smartphone },
                { title: "Financial Operations & Document Processing", icon: FileText },
                { title: "Risk, Fraud & Compliance", icon: ShieldCheck },
                { title: "Banking Data Platforms", icon: Database },
                { title: "Financial Intelligence & Analytics", icon: LineChart },
                { title: "Connected Financial Ecosystem", icon: Network }
              ].map((stage, idx) => (
                <div key={idx} className="flex flex-col items-center text-center group">
                  <div className="w-16 h-16 bg-white border-2 border-emerald-100 rounded-2xl flex items-center justify-center mb-4 group-hover:border-emerald-500 group-hover:shadow-lg group-hover:-translate-y-1 transition-all relative z-10">
                    <stage.icon className="w-7 h-7 text-emerald-600" />
                  </div>
                  <h3 className="text-sm font-bold text-gray-900 leading-tight">{stage.title}</h3>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Section 4 - Solutions Across the Value Chain */}
      <section id="solutions" className="py-20 bg-slate-50 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Solutions Across the Value Chain</h2>
            <p className="text-lg text-gray-600 max-w-3xl">
              Comprehensive AI and data solutions designed to address specific challenges at every stage of the financial services lifecycle.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Pillar 1 */}
            <div className="bg-white rounded-2xl border border-gray-200 p-8 shadow-sm hover:shadow-md transition-shadow flex flex-col h-full">
              <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center mb-6">
                <Smartphone className="w-6 h-6" />
              </div>
              <h3 className="text-xs font-bold text-blue-600 uppercase tracking-wider mb-2">Customer Engagement & Digital Banking</h3>
              <h4 className="text-xl font-bold text-gray-900 mb-4">Intelligent Banking</h4>
              <div className="mb-6 flex-grow">
                <h5 className="text-sm font-semibold text-gray-900 mb-3">Solutions:</h5>
                <ul className="space-y-2">
                  {['AI Banking Chatbots', 'Personalized Financial Assistants', 'AI Customer Communication Automation'].map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
                      <ChevronRight className="w-4 h-4 text-blue-500 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="pt-6 border-t border-gray-100">
                <h5 className="text-sm font-semibold text-gray-900 mb-3">Business Benefits:</h5>
                <div className="flex flex-wrap gap-2">
                  {['24/7 banking support', 'personalized customer experiences', 'reduced call center workload'].map((benefit, i) => (
                    <span key={i} className="inline-flex items-center px-2.5 py-1 rounded-md bg-gray-50 text-xs font-medium text-gray-600 border border-gray-200">
                      {benefit}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Pillar 2 */}
            <div className="bg-white rounded-2xl border border-gray-200 p-8 shadow-sm hover:shadow-md transition-shadow flex flex-col h-full">
              <div className="w-12 h-12 bg-emerald-50 text-emerald-600 rounded-xl flex items-center justify-center mb-6">
                <FileText className="w-6 h-6" />
              </div>
              <h3 className="text-xs font-bold text-emerald-600 uppercase tracking-wider mb-2">Financial Operations & Document Processing</h3>
              <h4 className="text-xl font-bold text-gray-900 mb-4">Financial Document Intelligence</h4>
              <div className="mb-6 flex-grow">
                <h5 className="text-sm font-semibold text-gray-900 mb-3">Solutions:</h5>
                <ul className="space-y-2">
                  {['Loan Application Processing Automation', 'KYC Document Processing', 'Contract Intelligence Systems'].map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
                      <ChevronRight className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="pt-6 border-t border-gray-100">
                <h5 className="text-sm font-semibold text-gray-900 mb-3">Business Benefits:</h5>
                <div className="flex flex-wrap gap-2">
                  {['faster loan approvals', 'reduced manual processing', 'improved compliance'].map((benefit, i) => (
                    <span key={i} className="inline-flex items-center px-2.5 py-1 rounded-md bg-gray-50 text-xs font-medium text-gray-600 border border-gray-200">
                      {benefit}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Pillar 3 */}
            <div className="bg-white rounded-2xl border border-gray-200 p-8 shadow-sm hover:shadow-md transition-shadow flex flex-col h-full">
              <div className="w-12 h-12 bg-rose-50 text-rose-600 rounded-xl flex items-center justify-center mb-6">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="text-xs font-bold text-rose-600 uppercase tracking-wider mb-2">Risk, Fraud & Compliance</h3>
              <h4 className="text-xl font-bold text-gray-900 mb-4">Fraud & Risk Intelligence</h4>
              <div className="mb-6 flex-grow">
                <h5 className="text-sm font-semibold text-gray-900 mb-3">Solutions:</h5>
                <ul className="space-y-2">
                  {['Real-Time Fraud Detection', 'Transaction Risk Scoring Models', 'AML Monitoring Systems'].map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
                      <ChevronRight className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="pt-6 border-t border-gray-100">
                <h5 className="text-sm font-semibold text-gray-900 mb-3">Business Benefits:</h5>
                <div className="flex flex-wrap gap-2">
                  {['early fraud detection', 'reduced financial crime', 'enhanced regulatory compliance'].map((benefit, i) => (
                    <span key={i} className="inline-flex items-center px-2.5 py-1 rounded-md bg-gray-50 text-xs font-medium text-gray-600 border border-gray-200">
                      {benefit}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Pillar 4 */}
            <div className="bg-white rounded-2xl border border-gray-200 p-8 shadow-sm hover:shadow-md transition-shadow flex flex-col h-full">
              <div className="w-12 h-12 bg-indigo-50 text-indigo-600 rounded-xl flex items-center justify-center mb-6">
                <Database className="w-6 h-6" />
              </div>
              <h3 className="text-xs font-bold text-indigo-600 uppercase tracking-wider mb-2">Banking Data Foundations</h3>
              <h4 className="text-xl font-bold text-gray-900 mb-4">Banking Data Platforms</h4>
              <div className="mb-6 flex-grow">
                <h5 className="text-sm font-semibold text-gray-900 mb-3">Solutions:</h5>
                <ul className="space-y-2">
                  {['Banking Data Lakehouse', 'Financial Data Hub', 'Risk & Compliance Data Platforms'].map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
                      <ChevronRight className="w-4 h-4 text-indigo-500 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="pt-6 border-t border-gray-100">
                <h5 className="text-sm font-semibold text-gray-900 mb-3">Business Benefits:</h5>
                <div className="flex flex-wrap gap-2">
                  {['unified financial data ecosystem', 'improved data governance', 'real-time analytics readiness'].map((benefit, i) => (
                    <span key={i} className="inline-flex items-center px-2.5 py-1 rounded-md bg-gray-50 text-xs font-medium text-gray-600 border border-gray-200">
                      {benefit}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Pillar 5 */}
            <div className="bg-white rounded-2xl border border-gray-200 p-8 shadow-sm hover:shadow-md transition-shadow flex flex-col h-full">
              <div className="w-12 h-12 bg-amber-50 text-amber-600 rounded-xl flex items-center justify-center mb-6">
                <LineChart className="w-6 h-6" />
              </div>
              <h3 className="text-xs font-bold text-amber-600 uppercase tracking-wider mb-2">Financial Intelligence & Decisioning</h3>
              <h4 className="text-xl font-bold text-gray-900 mb-4">Financial Analytics Platforms</h4>
              <div className="mb-6 flex-grow">
                <h5 className="text-sm font-semibold text-gray-900 mb-3">Solutions:</h5>
                <ul className="space-y-2">
                  {['Financial Planning & Analysis (FP&A) Platforms', 'Profitability Analytics Platforms', 'Customer Lifetime Value Analytics'].map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
                      <ChevronRight className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="pt-6 border-t border-gray-100">
                <h5 className="text-sm font-semibold text-gray-900 mb-3">Business Benefits:</h5>
                <div className="flex flex-wrap gap-2">
                  {['data-driven financial planning', 'profitability insights', 'predictive financial intelligence'].map((benefit, i) => (
                    <span key={i} className="inline-flex items-center px-2.5 py-1 rounded-md bg-gray-50 text-xs font-medium text-gray-600 border border-gray-200">
                      {benefit}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Pillar 6 */}
            <div className="bg-white rounded-2xl border border-gray-200 p-8 shadow-sm hover:shadow-md transition-shadow flex flex-col h-full">
              <div className="w-12 h-12 bg-teal-50 text-teal-600 rounded-xl flex items-center justify-center mb-6">
                <Network className="w-6 h-6" />
              </div>
              <h3 className="text-xs font-bold text-teal-600 uppercase tracking-wider mb-2">Connected Financial Ecosystem</h3>
              <h4 className="text-xl font-bold text-gray-900 mb-4">Financial Data Integration</h4>
              <div className="mb-6 flex-grow">
                <h5 className="text-sm font-semibold text-gray-900 mb-3">Solutions:</h5>
                <ul className="space-y-2">
                  {['Core Banking Data Integration', 'Payment Data Integration Platforms', 'Financial API Platforms'].map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
                      <ChevronRight className="w-4 h-4 text-teal-500 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="pt-6 border-t border-gray-100">
                <h5 className="text-sm font-semibold text-gray-900 mb-3">Business Benefits:</h5>
                <div className="flex flex-wrap gap-2">
                  {['connected banking systems', 'real-time financial data exchange', 'open banking enablement'].map((benefit, i) => (
                    <span key={i} className="inline-flex items-center px-2.5 py-1 rounded-md bg-gray-50 text-xs font-medium text-gray-600 border border-gray-200">
                      {benefit}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 5 - Rysun Accelerators */}
      <section className="py-24 bg-slate-50 relative overflow-hidden border-t border-gray-100">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-emerald-100/50 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/3 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-blue-100/50 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/3 pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-50 border border-emerald-100 text-emerald-600 text-xs font-bold uppercase tracking-wider mb-5 shadow-sm">
              <Zap className="w-4 h-4" />
              <span>Speed to Market</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Rysun Accelerators for Financial Services</h2>
            <p className="text-lg text-gray-600">
              Pre-built frameworks and engines designed to accelerate delivery, reduce implementation timelines, and ensure enterprise-grade reliability.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "AI Banking Copilot", icon: MessageSquare, desc: "Ready-to-deploy conversational AI for customer support and financial advisory." },
              { title: "Fraud Detection Accelerator", icon: ShieldCheck, desc: "Pre-trained ML models for real-time transaction monitoring and anomaly detection." },
              { title: "KYC Automation Engine", icon: FileText, desc: "Intelligent document processing pipeline for faster customer onboarding." },
              { title: "Financial Data Lakehouse Starter Kit", icon: Database, desc: "Pre-configured data architecture for unified banking analytics." },
              { title: "Banking API Accelerator", icon: Network, desc: "Standardized API gateways for open banking and third-party integration." }
            ].map((accel, idx) => (
              <div key={idx} className={`bg-white border border-gray-200 rounded-2xl p-8 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group relative overflow-hidden ${idx === 3 ? 'lg:col-span-2' : ''} ${idx === 4 ? 'lg:col-span-1' : ''}`}>
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-emerald-400 to-teal-500 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
                
                <div className="w-14 h-14 bg-emerald-50 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-emerald-100 transition-all duration-300">
                  <accel.icon className="w-7 h-7 text-emerald-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-emerald-600 transition-colors">{accel.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-6">{accel.desc}</p>
                
                <div className="flex items-center text-sm font-bold text-emerald-600 opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                  Explore Accelerator <ArrowRight className="ml-2 w-4 h-4" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 6 - Impact Stories */}
      <section className="py-24 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
            <div className="max-w-2xl">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Extraordinary Outcomes</h2>
              <p className="text-lg text-gray-400">
                Discover how we've helped leading financial institutions transform their operations and customer experiences.
              </p>
            </div>
            <Link to="/insights/impact-stories" className="inline-flex items-center text-rysun-lightblue font-medium hover:text-white transition-colors">
              View All Stories <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Featured Story */}
            <div className="group relative rounded-2xl overflow-hidden bg-gray-800 border border-gray-700 hover:border-gray-600 transition-colors flex flex-col">
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="p-8 md:p-10 flex flex-col flex-grow relative z-10">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-medium mb-6 w-max">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  <span>Digital Bank</span>
                </div>
                <h3 className="text-2xl md:text-3xl font-bold mb-4 group-hover:text-emerald-300 transition-colors">
                  AI-powered fraud detection platform for a leading digital bank
                </h3>
                
                <div className="space-y-4 mb-8 flex-grow">
                  <div>
                    <h4 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-1">Challenge</h4>
                    <p className="text-gray-300 text-sm">High false-positive rates in transaction monitoring leading to customer friction and increased manual review costs.</p>
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-1">Solution</h4>
                    <p className="text-gray-300 text-sm">Implemented a real-time machine learning fraud detection engine processing millions of transactions daily.</p>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4 pt-6 border-t border-gray-700">
                  <div>
                    <div className="text-3xl font-bold text-emerald-400 mb-1">40%</div>
                    <div className="text-xs text-gray-400 uppercase tracking-wider">Reduction in False Positives</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-emerald-400 mb-1">&lt;50ms</div>
                    <div className="text-xs text-gray-400 uppercase tracking-wider">Decision Latency</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Other Stories List */}
            <div className="flex flex-col gap-4">
              {[
                {
                  client: "Financial Institution",
                  title: "Automated loan processing system",
                  metrics: "60% faster approvals",
                  icon: FileText
                },
                {
                  client: "Global Bank",
                  title: "Enterprise banking data platform for analytics",
                  metrics: "Unified view of 10M+ customers",
                  icon: Database
                },
                {
                  client: "Retail Bank",
                  title: "AI-powered customer service assistant for digital banking",
                  metrics: "35% deflection rate",
                  icon: MessageSquare
                }
              ].map((story, idx) => (
                <div key={idx} className="group p-6 rounded-2xl bg-gray-800/50 border border-gray-700 hover:bg-gray-800 hover:border-gray-600 transition-all flex items-center gap-6 cursor-pointer">
                  <div className="w-14 h-14 rounded-xl bg-gray-700/50 flex items-center justify-center shrink-0 group-hover:bg-emerald-500/20 group-hover:text-emerald-400 transition-colors">
                    <story.icon className="w-6 h-6 text-gray-400 group-hover:text-emerald-400" />
                  </div>
                  <div className="flex-grow">
                    <div className="text-xs font-medium text-emerald-400 mb-1">{story.client}</div>
                    <h3 className="text-lg font-bold text-gray-200 group-hover:text-white mb-2">{story.title}</h3>
                    <div className="text-sm text-gray-400">{story.metrics}</div>
                  </div>
                  <ChevronRight className="w-5 h-5 text-gray-500 group-hover:text-white transform group-hover:translate-x-1 transition-all" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Section 7 - Technology Ecosystem */}
      <section className="py-20 bg-slate-50 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Technology Ecosystem</h2>
            <p className="text-lg text-gray-600">
              We leverage leading enterprise technologies to build secure, scalable, and intelligent financial solutions.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { category: "Cloud Platforms", icon: Cloud, items: ["AWS", "Azure", "Google Cloud"] },
              { category: "AI & Machine Learning", icon: Cpu, items: ["TensorFlow", "PyTorch", "OpenAI", "Vertex AI"] },
              { category: "Data Platforms", icon: Database, items: ["Snowflake", "Databricks", "Confluent"] },
              { category: "API & Integration", icon: Network, items: ["MuleSoft", "Apigee", "Kafka"] }
            ].map((tech, idx) => (
              <div key={idx} className="flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-white rounded-2xl border border-gray-200 shadow-sm flex items-center justify-center mb-4 text-gray-700">
                  <tech.icon className="w-8 h-8" />
                </div>
                <h3 className="text-base font-bold text-gray-900 mb-3">{tech.category}</h3>
                <ul className="space-y-1">
                  {tech.items.map((item, i) => (
                    <li key={i} className="text-sm text-gray-500">{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 8 - Insights & Thought Leadership */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-12">
            <div className="max-w-2xl">
              <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-4">Insights & Thinking</h2>
              <p className="text-lg text-gray-600">Latest insights on AI, data, and digital transformation in financial services.</p>
            </div>
            <Link to="/insights/blogs" className="hidden md:inline-flex items-center text-rysun-blue font-bold hover:text-rysun-lightblue transition-colors">
              View All Insights <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: 'AI in Banking Transformation', category: 'Blog', date: 'March 15, 2026', img: 'finance-ai' },
              { title: 'Fraud Detection with Machine Learning', category: 'Whitepaper', date: 'March 12, 2026', img: 'finance-fraud' },
              { title: 'Open Banking & API Economy', category: 'Article', date: 'March 8, 2026', img: 'finance-api' }
            ].map((blog, idx) => (
              <Link key={idx} to="/insights/blogs" className="flex flex-col bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl border border-gray-100 transition-all group h-full">
                <div className="relative h-48 overflow-hidden">
                  <img src={`https://picsum.photos/seed/${blog.img}/600/400`} alt={blog.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" referrerPolicy="no-referrer" />
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

      {/* Section 9 - Why Rysun Labs */}
      <section className="py-24 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Why Rysun Labs</h2>
              <p className="text-lg text-gray-600 mb-10">
                We combine deep technical expertise with industry knowledge to deliver transformative financial solutions that drive measurable business impact.
              </p>
              
              <div className="space-y-8">
                {[
                  { title: "Deep Expertise in AI & Data", icon: BrainCircuit, desc: "Specialized teams of data scientists and AI engineers building enterprise-grade intelligent systems." },
                  { title: "Financial Industry Experience", icon: Briefcase, desc: "Proven track record of transforming banking, payments, and financial operations globally." },
                  { title: "Reusable Accelerators", icon: Zap, desc: "Pre-built frameworks and engines to speed up delivery timelines and reduce implementation risk." },
                  { title: "Scalable Enterprise Architectures", icon: Layers, desc: "Solutions designed from the ground up for security, regulatory compliance, and massive scale." }
                ].map((diff, idx) => (
                  <div key={idx} className="flex gap-4 group">
                    <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0 group-hover:bg-emerald-500 group-hover:text-white transition-colors">
                      <diff.icon className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{diff.title}</h3>
                      <p className="text-gray-600">{diff.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-tr from-emerald-100 to-teal-50 rounded-3xl transform rotate-3 scale-105" />
              <img 
                src="https://picsum.photos/seed/finance-team/800/1000" 
                alt="Rysun Labs Team" 
                className="relative z-10 rounded-3xl shadow-xl object-cover w-full h-[600px]"
                referrerPolicy="no-referrer"
              />
              
              {/* Floating Stat Card */}
              <div className="absolute -left-8 top-1/4 z-20 bg-white p-6 rounded-2xl shadow-xl border border-gray-100 animate-bounce" style={{ animationDuration: '3s' }}>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center text-blue-600">
                    <ShieldCheck className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-gray-900">100%</div>
                    <div className="text-sm font-medium text-gray-500 uppercase tracking-wider">Compliant</div>
                  </div>
                </div>
              </div>
              
              {/* Floating Stat Card 2 */}
              <div className="absolute -right-8 bottom-1/4 z-20 bg-white p-6 rounded-2xl shadow-xl border border-gray-100 animate-bounce" style={{ animationDuration: '4s', animationDelay: '1s' }}>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-emerald-50 rounded-full flex items-center justify-center text-emerald-600">
                    <Zap className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-gray-900">3x</div>
                    <div className="text-sm font-medium text-gray-500 uppercase tracking-wider">Faster Delivery</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 10 - Final CTA */}
      <section className="py-24 relative overflow-hidden bg-gray-900">
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-900/40 to-gray-900" />
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMjAiIGN5PSIyMCIgcj0iMSIgZmlsbD0icmdiYSgyNTUsIDI1NSwgMjU1LCAwLjA1KSIvPjwvc3ZnPg==')] opacity-20" />
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Transform Your Financial Services with AI & Data
          </h2>
          <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
            Partner with Rysun Labs to build intelligent banking platforms, modern data ecosystems, and AI-driven financial operations.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/contact-us" className="inline-flex items-center justify-center px-8 py-4 text-base font-bold rounded-full text-gray-900 bg-emerald-400 hover:bg-emerald-300 hover:shadow-[0_0_30px_rgba(52,211,153,0.4)] hover:-translate-y-1 transition-all">
              Talk to Our Experts
            </Link>
            <Link to="/contact-us" className="inline-flex items-center justify-center px-8 py-4 text-base font-bold rounded-full text-white bg-transparent border-2 border-white/20 hover:bg-white/10 transition-all">
              Start Your Transformation Journey
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
};

export default FinancialServicesPage;
