import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  ArrowRight, Database, Cloud, BarChart3, Server, 
  ShieldCheck, Layers, Cpu, FileText, 
  Search, TrendingUp, Eye, Zap, MessageSquare, 
  CheckCircle2, ChevronRight, Globe, Sparkles,
  LineChart, PieChart, Activity, Workflow, Lightbulb
} from 'lucide-react';
import { Link } from 'react-router-dom';

const DataPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="w-full bg-white font-sans text-gray-900">
      
      {/* Section 1 - Hero Banner */}
      <section className="relative min-h-[60vh] lg:min-h-[70vh] flex items-center pb-10 overflow-hidden bg-gray-900">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-indigo-900 to-teal-900/80" />
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMjAiIGN5PSIyMCIgcj0iMSIgZmlsbD0icmdiYSgyNTUsIDI1NSwgMjU1LCAwLjA1KSIvPjwvc3ZnPg==')] opacity-40" />
        
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-teal-400 rounded-full"
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
                <stop offset="0%" stopColor="#2dd4bf" />
                <stop offset="100%" stopColor="#3b82f6" />
              </linearGradient>
            </defs>
          </svg>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full mt-20 lg:mt-0">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="max-w-3xl">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-teal-400 text-xs font-medium mb-5 backdrop-blur-sm">
                  <Database className="w-3.5 h-3.5" />
                  <span>Data Services & Solutions</span>
                </div>
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white tracking-tight mb-5 leading-tight">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-blue-400">Transform Data</span> into Strategic Advantage
                </h1>
                <p className="text-base text-gray-300 mb-8 leading-relaxed max-w-lg">
                  Design modern data platforms, enable advanced analytics, and build scalable data-driven products with end-to-end data services from strategy to innovation.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-3 mb-4">
                  <a href="#services" className="inline-flex items-center justify-center px-6 py-3 text-sm font-medium rounded-full text-white bg-gradient-to-r from-blue-600 to-teal-500 hover:shadow-[0_0_30px_rgba(45,212,191,0.4)] hover:-translate-y-0.5 transition-all">
                    Explore Data Services
                  </a>
                  <Link to="/contact-us" className="inline-flex items-center justify-center px-6 py-3 text-sm font-medium rounded-full text-white bg-transparent border border-white/30 hover:bg-white/10 transition-all backdrop-blur-sm">
                    Talk to Data Experts
                  </Link>
                </div>
              </motion.div>
            </div>
            
            {/* 2D Intelligent Infographic - Redesigned & Scaled Down */}
            <div className="hidden lg:flex justify-center items-center relative h-[420px] -translate-y-4 scale-75 transform origin-center">
              <div className="relative w-full max-w-lg aspect-square flex items-center justify-center">
                
                {/* Isometric Stacked Layers */}
                <div className="relative w-64 h-64" style={{ transform: 'rotateX(60deg) rotateZ(-45deg)', transformStyle: 'preserve-3d' }}>
                  
                  {/* Layer 1: Data Sources */}
                  <motion.div 
                    animate={{ z: [0, 10, 0] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0 }}
                    className="absolute inset-0 bg-blue-500/20 border-2 border-blue-400/50 rounded-2xl backdrop-blur-sm flex items-center justify-center shadow-[0_0_30px_rgba(59,130,246,0.3)]"
                    style={{ transform: 'translateZ(0px)' }}
                  >
                    <Cloud className="w-12 h-12 text-blue-300" style={{ transform: 'rotateZ(45deg) rotateX(-60deg)' }} />
                  </motion.div>

                  {/* Layer 2: Data Platform */}
                  <motion.div 
                    animate={{ z: [40, 50, 40] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                    className="absolute inset-0 bg-teal-500/20 border-2 border-teal-400/50 rounded-2xl backdrop-blur-sm flex items-center justify-center shadow-[0_0_30px_rgba(45,212,191,0.3)]"
                    style={{ transform: 'translateZ(40px)' }}
                  >
                    <Database className="w-12 h-12 text-teal-300" style={{ transform: 'rotateZ(45deg) rotateX(-60deg)' }} />
                  </motion.div>

                  {/* Layer 3: Analytics */}
                  <motion.div 
                    animate={{ z: [80, 90, 80] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                    className="absolute inset-0 bg-purple-500/20 border-2 border-purple-400/50 rounded-2xl backdrop-blur-sm flex items-center justify-center shadow-[0_0_30px_rgba(168,85,247,0.3)]"
                    style={{ transform: 'translateZ(80px)' }}
                  >
                    <BarChart3 className="w-12 h-12 text-purple-300" style={{ transform: 'rotateZ(45deg) rotateX(-60deg)' }} />
                  </motion.div>

                  {/* Layer 4: Applications */}
                  <motion.div 
                    animate={{ z: [120, 130, 120] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
                    className="absolute inset-0 bg-indigo-500/20 border-2 border-indigo-400/50 rounded-2xl backdrop-blur-sm flex items-center justify-center shadow-[0_0_30px_rgba(99,102,241,0.3)]"
                    style={{ transform: 'translateZ(120px)' }}
                  >
                    <Layers className="w-12 h-12 text-indigo-300" style={{ transform: 'rotateZ(45deg) rotateX(-60deg)' }} />
                  </motion.div>

                  {/* Connecting Data Streams (Vertical Lines) */}
                  <motion.div 
                    className="absolute top-1/2 left-1/4 w-0.5 h-32 bg-gradient-to-t from-blue-400 via-teal-400 to-indigo-400"
                    style={{ transform: 'rotateX(-90deg) translateZ(60px) translateY(-16px)', transformOrigin: 'bottom' }}
                    animate={{ opacity: [0.3, 1, 0.3] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                  <motion.div 
                    className="absolute top-1/2 right-1/4 w-0.5 h-32 bg-gradient-to-t from-blue-400 via-teal-400 to-indigo-400"
                    style={{ transform: 'rotateX(-90deg) translateZ(60px) translateY(-16px)', transformOrigin: 'bottom' }}
                    animate={{ opacity: [0.3, 1, 0.3] }}
                    transition={{ duration: 2, repeat: Infinity, delay: 1 }}
                  />
                </div>
                
                {/* Floating Labels */}
                <div className="absolute inset-0 pointer-events-none">
                  <motion.div className="absolute top-[10%] left-[10%] bg-gray-900/80 border border-indigo-500/30 px-3 py-1.5 rounded-lg backdrop-blur-md" animate={{ y: [-5, 5, -5] }} transition={{ duration: 4, repeat: Infinity, delay: 1.5 }}>
                    <span className="text-xs font-bold text-indigo-300">Data-Driven Apps</span>
                  </motion.div>
                  <motion.div className="absolute top-[30%] right-[5%] bg-gray-900/80 border border-purple-500/30 px-3 py-1.5 rounded-lg backdrop-blur-md" animate={{ y: [-5, 5, -5] }} transition={{ duration: 4, repeat: Infinity, delay: 1 }}>
                    <span className="text-xs font-bold text-purple-300">Real-Time Analytics</span>
                  </motion.div>
                  <motion.div className="absolute bottom-[30%] left-[5%] bg-gray-900/80 border border-teal-500/30 px-3 py-1.5 rounded-lg backdrop-blur-md" animate={{ y: [-5, 5, -5] }} transition={{ duration: 4, repeat: Infinity, delay: 0.5 }}>
                    <span className="text-xs font-bold text-teal-300">Cloud Data Platforms</span>
                  </motion.div>
                  <motion.div className="absolute bottom-[10%] right-[10%] bg-gray-900/80 border border-blue-500/30 px-3 py-1.5 rounded-lg backdrop-blur-md" animate={{ y: [-5, 5, -5] }} transition={{ duration: 4, repeat: Infinity, delay: 0 }}>
                    <span className="text-xs font-bold text-blue-300">Strategy & Governance</span>
                  </motion.div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2 - Introduction */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Build the Foundation for <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-teal-600">Data-Driven Enterprises</span>
            </h2>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              Organizations generate massive amounts of data every day, but the real value lies in transforming that data into actionable intelligence and scalable digital capabilities.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              Rysun Labs helps enterprises design modern data architectures, implement scalable data platforms, unlock advanced analytics, and develop innovative data products that accelerate digital transformation.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Section 3 - Data Services */}
      <section id="services" className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Data Services</h2>
            <p className="text-lg text-gray-600">Comprehensive data solutions to accelerate your digital journey.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Data Strategy, Governance & Advisory",
                icon: <ShieldCheck className="w-6 h-6 text-blue-600" />,
                items: [
                  "Data Strategy & Roadmap Development",
                  "Data Maturity Assessment",
                  "Data Governance Framework Implementation",
                  "Enterprise Data Catalog Implementation",
                  "Data Mesh / Data Fabric Strategy"
                ]
              },
              {
                title: "Data Architecture & Platforms",
                icon: <Server className="w-6 h-6 text-teal-600" />,
                items: [
                  "Cloud Data Architecture Design",
                  "Data Lake & Lakehouse Implementation",
                  "IoT Data Platform Implementation"
                ]
              },
              {
                title: "Data Engineering & Integration",
                icon: <Workflow className="w-6 h-6 text-indigo-600" />,
                items: [
                  "Custom ETL / ELT Pipeline Development",
                  "Real-Time Data Streaming Architecture",
                  "Golden Record Service (Master Data Management)",
                  "API & Data Hub Development",
                  "Data Virtualization Implementation",
                  "Reverse ETL Solutions"
                ]
              },
              {
                title: "Data Modernization & Migration",
                icon: <Cloud className="w-6 h-6 text-purple-600" />,
                items: [
                  "Legacy Data Warehouse Modernization",
                  "Cloud Data Migration Services",
                  "Database Migration (RDBMS → NoSQL)"
                ]
              },
              {
                title: "Analytics & Business Intelligence",
                icon: <BarChart3 className="w-6 h-6 text-pink-600" />,
                items: [
                  "BI Dashboard Development",
                  "Customer 360 Analytics Platforms",
                  "Self-Service Analytics Implementation",
                  "Embedded Analytics Solutions",
                  "Financial Analytics Platforms",
                  "Marketing & Sales Analytics Platforms"
                ]
              },
              {
                title: "Data Product Engineering",
                icon: <Layers className="w-6 h-6 text-orange-600" />,
                items: [
                  "Custom Data Application Development",
                  "Data / AI Product Prototyping",
                  "Data Engineering Talent Services",
                  "Data Science Talent Services",
                  "BI Developer Resourcing"
                ]
              }
            ].map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 group"
              >
                <div className="w-12 h-12 rounded-xl bg-gray-50 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{service.title}</h3>
                <ul className="space-y-3">
                  {service.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-teal-500 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-600 text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 4 - Enterprise Data Solutions */}
      <section id="solutions" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Enterprise Data Solutions</h2>
            <p className="text-lg text-gray-600">Scalable platforms designed for modern data-driven organizations.</p>
          </div>

          <div className="max-w-5xl mx-auto">
            <div className="flex flex-col">
              {[
                {
                  title: "Enterprise Data Platforms",
                  items: ["Enterprise Data Lakehouse Platforms", "Data Mesh / Data Fabric Platforms", "Cloud-native Data Platforms", "Enterprise Data Hubs"]
                },
                {
                  title: "Customer Data Intelligence Platforms",
                  items: ["Customer 360 Data Platforms", "Customer Identity Resolution Platforms", "Customer Behavior Analytics Platforms"]
                },
                {
                  title: "Real-Time Data Intelligence",
                  items: ["Real-Time Data Streaming Platforms", "Event-driven Data Platforms", "Operational Intelligence Systems"]
                },
                {
                  title: "Advanced Analytics Platforms",
                  items: ["Business Intelligence Platforms", "Self-Service Analytics Platforms", "Embedded Analytics Platforms", "Decision Intelligence Platforms"]
                },
                {
                  title: "Data Governance & Compliance Platforms",
                  items: ["Enterprise Data Governance Platforms", "Metadata & Data Catalog Platforms", "Data Quality & Observability Platforms", "Data Compliance Monitoring Systems"]
                },
                {
                  title: "Data Application & Product Platforms",
                  items: ["Custom Data Applications", "Data-driven SaaS Products", "Analytics Applications", "Data Product Platforms"]
                }
              ].map((solution, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group flex flex-col md:flex-row gap-6 md:gap-12 py-10 border-b border-gray-200 last:border-0"
                >
                  <div className="md:w-1/3 flex flex-col">
                    <span className="text-5xl font-light text-gray-300 mb-4 group-hover:text-teal-500 transition-colors">0{index + 1}</span>
                    <h3 className="text-2xl font-bold text-gray-900">{solution.title}</h3>
                  </div>
                  <div className="md:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-4 mt-2 md:mt-0">
                    {solution.items.map((item, i) => (
                      <div key={i} className="flex items-start gap-3 p-4 rounded-xl bg-gray-50 group-hover:bg-teal-50/50 transition-colors">
                        <div className="w-2 h-2 rounded-full bg-teal-400 mt-2 flex-shrink-0" />
                        <span className="text-gray-700 font-medium">{item}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Section 5 - Data Transformation Methodology */}
      <section className="py-24 bg-gray-900 text-white overflow-hidden relative">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMjAiIGN5PSIyMCIgcj0iMSIgZmlsbD0icmdiYSgyNTUsIDI1NSwgMjU1LCAwLjA1KSIvPjwvc3ZnPg==')] opacity-20" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">From Data Strategy to Data Innovation</h2>
            <p className="text-lg text-gray-400">Our proven methodology for delivering scalable data solutions.</p>
          </div>

          <div className="relative">
            {/* Connecting Line */}
            <div className="hidden lg:block absolute top-1/2 left-0 w-full h-0.5 bg-gray-800 -translate-y-1/2" />
            
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
              {[
                { title: "Discover", desc: "Assess data maturity and architecture", icon: <Search className="w-6 h-6" /> },
                { title: "Architect", desc: "Design scalable data platforms", icon: <Layers className="w-6 h-6" /> },
                { title: "Engineer", desc: "Build pipelines and integrations", icon: <Workflow className="w-6 h-6" /> },
                { title: "Analyze", desc: "Enable analytics and insights", icon: <BarChart3 className="w-6 h-6" /> },
                { title: "Innovate", desc: "Develop data products and applications", icon: <Lightbulb className="w-6 h-6" /> }
              ].map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="relative z-10 flex flex-col items-center text-center group"
                >
                  <div className="w-16 h-16 rounded-2xl bg-gray-800 border border-gray-700 flex items-center justify-center mb-6 text-teal-400 group-hover:bg-teal-500 group-hover:text-white group-hover:border-teal-400 transition-all duration-300 shadow-lg">
                    {step.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                  <p className="text-sm text-gray-400">{step.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Section 6 - Technology Ecosystem */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Technologies We Work With</h2>
            <p className="text-lg text-gray-600">Partnering with leading platforms to deliver best-in-class data solutions.</p>
          </div>

          <div className="max-w-5xl mx-auto flex flex-col gap-6">
            {[
              { category: "Cloud Platforms", tech: ["AWS", "Azure", "Google Cloud"], icon: <Cloud className="w-6 h-6" /> },
              { category: "Data Platforms", tech: ["Snowflake", "Databricks", "BigQuery", "Redshift"], icon: <Database className="w-6 h-6" /> },
              { category: "Streaming & Processing", tech: ["Kafka", "Spark", "Flink"], icon: <Activity className="w-6 h-6" /> },
              { category: "Analytics & BI", tech: ["Power BI", "Tableau", "Looker"], icon: <PieChart className="w-6 h-6" /> }
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
                    <span key={i} className="px-5 py-2.5 rounded-full bg-gray-50 border border-gray-200 text-gray-800 font-medium hover:border-teal-400 hover:bg-teal-50 transition-colors cursor-default">
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 7 - Why Rysun Labs */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Why Enterprises Choose Rysun</h2>
              <p className="text-lg text-gray-600 mb-8">
                We combine deep technical expertise with strategic business acumen to deliver data solutions that drive real impact.
              </p>
              <div className="space-y-6">
                {[
                  "End-to-end data transformation expertise",
                  "Cloud-native data architecture frameworks",
                  "Deep data engineering capabilities",
                  "Advanced analytics and BI expertise",
                  "Flexible engagement and delivery models"
                ].map((feature, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="w-6 h-6 rounded-full bg-teal-100 flex items-center justify-center flex-shrink-0 mt-1">
                      <CheckCircle2 className="w-4 h-4 text-teal-600" />
                    </div>
                    <span className="text-gray-700 font-medium">{feature}</span>
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
              <div className="aspect-square rounded-3xl overflow-hidden relative">
                <img 
                  src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop" 
                  alt="Data Analytics Dashboard" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-blue-900/40 to-transparent" />
              </div>
              
              {/* Floating Stat Card */}
              <motion.div 
                animate={{ y: [-10, 10, -10] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-8 -left-8 bg-white p-6 rounded-2xl shadow-xl border border-gray-100 max-w-xs"
              >
                <div className="flex items-center gap-4 mb-2">
                  <div className="w-12 h-12 rounded-full bg-teal-100 flex items-center justify-center">
                    <TrendingUp className="w-6 h-6 text-teal-600" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-gray-900">10x</div>
                    <div className="text-sm text-gray-500">Faster Insights</div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Section 8 - Impact Stories */}
      <section className="py-16 bg-white border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-4">Data Transformation in Action</h2>
            <p className="text-lg text-gray-600">Discover how we've helped leading organizations unlock the power of their data.</p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            <div className="lg:col-span-7">
              <div className="bg-gradient-to-br from-gray-900 to-teal-900 rounded-3xl overflow-hidden shadow-xl h-full flex flex-col group relative">
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=2070&auto=format&fit=crop')] opacity-20 mix-blend-overlay transition-transform duration-1000 group-hover:scale-105" />
                <div className="p-10 flex-grow flex flex-col relative z-10">
                  <div className="inline-flex items-center px-3 py-1 rounded-full bg-white/10 backdrop-blur-md text-xs font-bold text-white uppercase tracking-wider w-max mb-8 border border-white/20">
                    Retail Success Story
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-6 leading-tight">Enterprise Data Lakehouse for Retail Analytics</h3>
                  <div className="grid grid-cols-3 gap-4 mb-10">
                    <div className="bg-white/10 backdrop-blur-md p-5 rounded-2xl border border-white/10">
                      <div className="text-3xl font-black text-teal-400 mb-1">10x</div>
                      <div className="text-xs text-gray-300 font-medium uppercase tracking-wider">Faster Insights</div>
                    </div>
                    <div className="bg-white/10 backdrop-blur-md p-5 rounded-2xl border border-white/10">
                      <div className="text-3xl font-black text-blue-400 mb-1">40%</div>
                      <div className="text-xs text-gray-300 font-medium uppercase tracking-wider">Cost Reduction</div>
                    </div>
                    <div className="bg-white/10 backdrop-blur-md p-5 rounded-2xl border border-white/10">
                      <div className="text-3xl font-black text-purple-400 mb-1">360°</div>
                      <div className="text-xs text-gray-300 font-medium uppercase tracking-wider">Customer View</div>
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
                { title: 'Real-Time Data Streaming Platform for Operational Intelligence', industry: 'Manufacturing', desc: 'Enabled real-time monitoring and predictive maintenance across 50+ global facilities.', color: 'text-blue-600', bg: 'bg-blue-50' },
                { title: 'Customer 360 Analytics Platform for Marketing Optimization', industry: 'Financial Services', desc: 'Unified customer data to deliver personalized financial products and increase conversion by 25%.', color: 'text-teal-600', bg: 'bg-teal-50' },
                { title: 'Cloud Data Warehouse Modernization', industry: 'Healthcare', desc: 'Migrated legacy systems to a cloud-native architecture, improving query performance by 80%.', color: 'text-purple-600', bg: 'bg-purple-50' }
              ].map((story, idx) => (
                <Link key={idx} to="/insights/impact-stories" className="flex flex-col justify-center bg-gray-50 p-6 rounded-3xl shadow-sm border border-gray-100 hover:shadow-md hover:border-gray-200 transition-all group flex-1">
                  <div className={`text-xs font-black ${story.color} uppercase tracking-wider mb-2`}>{story.industry}</div>
                  <h4 className="text-lg font-bold text-gray-900 group-hover:text-teal-600 transition-colors leading-snug mb-2">{story.title}</h4>
                  <p className="text-sm text-gray-600">{story.desc}</p>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Section 9 - Insights & Thought Leadership */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center mb-12">
            <div className="max-w-2xl text-center md:text-left mb-6 md:mb-0">
              <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-4">Latest Insights on Data & Analytics</h2>
              <p className="text-lg text-gray-600">Expert perspectives on modern data architecture and strategy.</p>
            </div>
            <Link to="/insights/blogs" className="hidden md:inline-flex items-center text-teal-600 font-bold hover:text-teal-500 transition-colors">
              View All Insights <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "The Rise of Data Mesh Architecture", category: "Architecture", date: "March 10, 2026", image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=600&auto=format&fit=crop" },
              { title: "Designing Modern Data Lakehouse Platforms", category: "Data Engineering", date: "March 5, 2026", image: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?q=80&w=600&auto=format&fit=crop" },
              { title: "Real-Time Data as a Competitive Advantage", category: "Strategy", date: "February 28, 2026", image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=600&auto=format&fit=crop" }
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
                  <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-teal-600 transition-colors leading-snug flex-grow">{blog.title}</h3>
                  <div className="flex items-center text-sm font-bold text-teal-600 mt-auto">
                    Read Article <ArrowRight className="ml-2 w-4 h-4" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
          <div className="mt-8 text-center md:hidden">
            <Link to="/insights/blogs" className="inline-flex items-center text-teal-600 font-bold hover:text-teal-500 transition-colors">
              View All Insights <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Section 10 - Final Call To Action */}
      <section className="py-24 bg-gray-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/40 to-teal-900/40" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Start Your Data Transformation Journey</h2>
          <p className="text-xl text-gray-300 mb-10">
            Partner with Rysun Labs to build modern data platforms, unlock analytics insights, and create innovative data-driven solutions.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/contact-us" className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 text-base font-medium rounded-full text-white bg-teal-500 hover:bg-teal-400 transition-all shadow-lg">
              Talk to Data Experts
            </Link>
            <a href="#services" className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 text-base font-medium rounded-full text-white bg-white/10 hover:bg-white/20 border border-white/20 transition-all backdrop-blur-sm">
              Explore Data Services
            </a>
          </div>
        </div>
      </section>

    </div>
  );
};

export default DataPage;
