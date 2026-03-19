import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ArrowRight, 
  Globe, 
  BrainCircuit, 
  Database, 
  Zap, 
  Users, 
  ChevronDown, 
  ChevronUp, 
  TrendingUp, 
  Award, 
  Lightbulb, 
  Target,
  PlayCircle,
  FileText,
  Mic,
  Newspaper,
  Linkedin
} from 'lucide-react';
import { Link } from 'react-router-dom';

const executives = [
  {
    name: 'Vishal Shukla',
    title: 'Chief Executive Officer',
    image: 'https://picsum.photos/seed/vishal/400/500',
    linkedin: '#',
    shortIntro: 'Founder and CEO of Rysun Labs since 2001, Vishal Shukla is a visionary technology leader with more than two decades of experience in enterprise AI implementation, digital transformation, and technology innovation.',
    fullBio: 'Under his leadership, Rysun has evolved into a trusted AI, data, and digital innovation partner for global enterprises. He focuses on transforming complex technology challenges into measurable business value through AI-driven, cloud-first solutions. Vishal also actively invests in early-stage AI ventures focused on real-world impact.'
  },
  {
    name: 'Chirag Patel',
    title: 'Chief Strategy Officer',
    image: 'https://picsum.photos/seed/chirag/400/500',
    linkedin: '#',
    shortIntro: 'As Chief Strategy Officer, Chirag Patel drives Rysun’s strategic vision, innovation roadmap, and global growth initiatives.',
    fullBio: 'With extensive experience building and scaling technology businesses across the United States, India, and South Africa, Chirag leads initiatives focused on digital transformation, global partnerships, and market expansion. His expertise in go-to-market strategy, P&L leadership, and venture growth helps position Rysun as a trusted partner for enterprise modernization.'
  },
  {
    name: 'Ankit Modi',
    title: 'Chief Delivery Officer',
    image: 'https://picsum.photos/seed/ankit/400/500',
    linkedin: '#',
    shortIntro: 'Ankit Modi leads global delivery operations at Rysun, ensuring successful execution of complex technology initiatives for enterprise clients.',
    fullBio: 'With nearly two decades of experience in data, AI/ML, business intelligence, and cloud transformation, he orchestrates cross-functional teams to deliver high-impact solutions. Ankit also manages strategic partnerships with major cloud providers and champions innovation and talent development across Rysun’s delivery organization.'
  },
  {
    name: 'Jonah Sigel',
    title: 'Chief Revenue & Marketing Officer',
    image: 'https://picsum.photos/seed/jonah/400/500',
    linkedin: '#',
    shortIntro: 'Jonah Sigel leads revenue growth, marketing strategy, and go-to-market initiatives for Rysun’s AI-driven commerce and data solutions.',
    fullBio: 'With two decades of experience at major technology and retail companies including Amazon, Starbucks, AOL, and Central Garden & Pet, he brings deep expertise in digital transformation, ecommerce growth, and data-driven marketing. Jonah also contributes to industry publications and advises founders on growth strategy and digital innovation.'
  }
];

const impactStats = [
  { value: '25+', label: 'Years of Technology Innovation', icon: <Award className="w-8 h-8" /> },
  { value: 'Global', label: 'Enterprise Clients', icon: <Globe className="w-8 h-8" /> },
  { value: 'Expertise', label: 'AI, Data & Digital Transformation', icon: <BrainCircuit className="w-8 h-8" /> },
  { value: 'Strategic', label: 'Cloud & Technology Partnerships', icon: <Database className="w-8 h-8" /> }
];

const visionThemes = [
  { title: 'Enterprise AI Transformation', icon: <BrainCircuit className="w-6 h-6" /> },
  { title: 'Generative AI Adoption', icon: <Zap className="w-6 h-6" /> },
  { title: 'Data-driven Decision Intelligence', icon: <Database className="w-6 h-6" /> },
  { title: 'Intelligent Automation', icon: <Target className="w-6 h-6" /> },
  { title: 'Digital-first Business Models', icon: <Globe className="w-6 h-6" /> }
];

const cultureThemes = [
  { title: 'Empowering Global Talent', desc: 'Fostering a diverse, inclusive environment where top talent thrives.' },
  { title: 'Continuous Learning', desc: 'Investing in upskilling and staying ahead of the technology curve.' },
  { title: 'Innovation-Driven Mindset', desc: 'Encouraging creative problem-solving and out-of-the-box thinking.' },
  { title: 'Building Transformative Solutions', desc: 'Focusing on delivering measurable impact for our enterprise clients.' }
];

const insights = [
  { title: 'The Future of Enterprise AI', category: 'Article', date: 'March 15, 2026', img: 'insight1' },
  { title: 'Navigating Digital Transformation', category: 'Podcast', date: 'March 12, 2026', img: 'insight2' },
  { title: 'Data-Driven Decision Intelligence', category: 'Perspective', date: 'March 8, 2026', img: 'insight4' }
];

const partners = [
  { name: 'Cloud Providers', desc: 'Strategic partnerships with AWS, Azure, and Google Cloud.', icon: <Globe className="w-10 h-10" /> },
  { name: 'Data Platforms', desc: 'Collaborating with Snowflake, Databricks, and leading data ecosystems.', icon: <Database className="w-10 h-10" /> },
  { name: 'AI Ecosystem', desc: 'Integrating with OpenAI, Anthropic, and enterprise AI leaders.', icon: <BrainCircuit className="w-10 h-10" /> }
];

export default function LeadershipPage() {
  const [expandedExec, setExpandedExec] = useState<number | null>(null);

  return (
    <div className="w-full bg-white font-sans text-slate-900">
      
      {/* 1. Hero Section */}
      <section className="relative min-h-[60vh] lg:min-h-[70vh] flex items-center pt-24 pb-16 overflow-hidden bg-slate-900">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-indigo-950 to-blue-900" />
        <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] mix-blend-overlay" />
        
        {/* Subtle AI/Data Network Graphics */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-40">
          <svg className="absolute w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            <motion.path 
              d="M0,80 Q25,60 50,80 T100,80" 
              fill="none" 
              stroke="#60a5fa" 
              strokeWidth="0.2"
              animate={{ d: ["M0,80 Q25,60 50,80 T100,80", "M0,80 Q25,100 50,80 T100,80", "M0,80 Q25,60 50,80 T100,80"] }}
              transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.path 
              d="M0,20 Q25,40 50,20 T100,20" 
              fill="none" 
              stroke="#a78bfa" 
              strokeWidth="0.3"
              animate={{ d: ["M0,20 Q25,40 50,20 T100,20", "M0,20 Q25,0 50,20 T100,20", "M0,20 Q25,40 50,20 T100,20"] }}
              transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
            />
          </svg>
          {[...Array(15)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1.5 h-1.5 bg-blue-400 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                opacity: Math.random() * 0.5 + 0.1
              }}
              animate={{
                y: [0, -20, 0],
                opacity: [0.1, 0.6, 0.1],
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
                className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 border border-white/20 text-blue-200 text-sm font-bold uppercase tracking-wider mb-6 backdrop-blur-md"
              >
                Company Leadership
              </motion.div>
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6 tracking-tight leading-tight"
              >
                Leadership at <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">Rysun</span>
              </motion.h1>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-lg md:text-xl text-blue-100 mb-10 leading-relaxed max-w-2xl font-light"
              >
                Meet the visionaries driving Rysun’s mission to help enterprises unlock the power of AI, Data, and Digital Innovation.
              </motion.p>

              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="flex flex-wrap gap-4"
              >
                <Link to="/company/culture" className="inline-flex items-center justify-center px-8 py-4 text-sm font-bold rounded-full text-white bg-blue-600 hover:bg-blue-700 transition-all shadow-lg hover:shadow-xl hover:-translate-y-1">
                  Explore Our Culture
                </Link>
                <Link to="/company/careers" className="inline-flex items-center justify-center px-8 py-4 text-sm font-bold rounded-full text-white bg-white/10 border border-white/20 hover:bg-white/20 transition-all backdrop-blur-sm">
                  Join Our Team
                </Link>
              </motion.div>
            </div>
            
            {/* 2D Intelligent Infographic - Leadership Hub */}
            <div className="hidden lg:flex justify-center items-center relative h-[380px]">
              <div className="relative w-full max-w-md aspect-square flex items-center justify-center">
                
                {/* Central Hub */}
                <motion.div 
                  animate={{ scale: [1, 1.05, 1] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute z-30 w-32 h-32 bg-gradient-to-br from-blue-600 to-indigo-800 rounded-full flex items-center justify-center shadow-[0_0_40px_rgba(37,99,235,0.4)] border border-blue-400/30"
                >
                  <div className="flex flex-col items-center">
                    <Users className="w-12 h-12 text-white mb-1" />
                    <span className="text-[10px] font-bold text-white tracking-widest uppercase">Vision</span>
                  </div>
                </motion.div>

                {/* Connecting Lines */}
                <div className="absolute inset-0 flex items-center justify-center z-10">
                  <div className="w-full h-px bg-gradient-to-r from-transparent via-blue-400/50 to-transparent absolute" />
                  <div className="h-full w-px bg-gradient-to-b from-transparent via-blue-400/50 to-transparent absolute" />
                </div>

                {/* Animated Nodes */}
                {[
                  { icon: <Target className="w-5 h-5" />, label: "Strategy", angle: 0 },
                  { icon: <BrainCircuit className="w-5 h-5" />, label: "Innovation", angle: 90 },
                  { icon: <Globe className="w-5 h-5" />, label: "Global", angle: 180 },
                  { icon: <Zap className="w-5 h-5" />, label: "Impact", angle: 270 }
                ].map((node, i) => {
                  const radius = 120;
                  const x = Math.cos((node.angle * Math.PI) / 180) * radius;
                  const y = Math.sin((node.angle * Math.PI) / 180) * radius;
                  
                  return (
                    <motion.div
                      key={i}
                      className="absolute z-20 flex flex-col items-center"
                      initial={{ x: 0, y: 0, opacity: 0 }}
                      animate={{ x, y, opacity: 1 }}
                      transition={{ duration: 1, delay: 0.5 + (i * 0.2), type: "spring" }}
                    >
                      <div className="w-12 h-12 bg-slate-800/80 backdrop-blur-md border border-blue-500/30 rounded-full flex items-center justify-center text-blue-300 shadow-[0_0_15px_rgba(59,130,246,0.2)] mb-2">
                        {node.icon}
                      </div>
                      <span className="text-xs font-medium text-blue-200 bg-slate-900/50 px-2 py-0.5 rounded backdrop-blur-sm border border-white/5">{node.label}</span>
                    </motion.div>
                  );
                })}
                
                {/* Orbiting Ring */}
                <motion.div 
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  className="absolute w-[240px] h-[240px] rounded-full border border-dashed border-blue-400/20 z-0"
                />
                <motion.div 
                  animate={{ rotate: -360 }}
                  transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                  className="absolute w-[320px] h-[320px] rounded-full border border-blue-400/10 z-0"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Leadership Philosophy */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-6 leading-tight">
                Leadership That Inspires <span className="text-blue-600">Innovation and Impact</span>
              </h2>
              <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                At Rysun, our leadership team is united by a shared commitment to driving innovation, enterprise transformation, and long-term client success. We believe that true digital transformation requires more than just technology—it requires visionary thinking, deep industry expertise, and a relentless focus on delivering measurable business value through AI, data, and digital technologies.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-6"
            >
              {[
                { title: 'Vision-driven leadership', icon: <Target className="w-6 h-6" /> },
                { title: 'Customer-centric innovation', icon: <Lightbulb className="w-6 h-6" /> },
                { title: 'Technology-led transformation', icon: <Zap className="w-6 h-6" /> },
                { title: 'Collaborative global teams', icon: <Globe className="w-6 h-6" /> }
              ].map((theme, idx) => (
                <div key={idx} className="bg-slate-50 p-6 rounded-2xl border border-slate-100 hover:shadow-lg transition-shadow">
                  <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center text-blue-600 mb-4">
                    {theme.icon}
                  </div>
                  <h3 className="text-lg font-bold text-slate-900">{theme.title}</h3>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* 3. Executive Leadership Team */}
      <section className="py-24 bg-slate-50 border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-6">Executive Leadership Team</h2>
            <p className="text-xl text-slate-600">The experienced minds guiding our global strategy and execution.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {executives.map((exec, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 flex flex-col sm:flex-row"
              >
                <div className="sm:w-2/5 h-64 sm:h-auto overflow-hidden relative flex-shrink-0">
                  <img src={exec.image} alt={exec.name} className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500" referrerPolicy="no-referrer" />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent sm:hidden" />
                </div>
                <div className="p-8 flex flex-col flex-grow">
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h3 className="text-2xl font-bold text-slate-900">{exec.name}</h3>
                      <p className="text-blue-600 font-medium text-sm mb-4">{exec.title}</p>
                    </div>
                    <a href={exec.linkedin} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-blue-600 transition-colors">
                      <Linkedin className="w-5 h-5" />
                    </a>
                  </div>
                  
                  <p className="text-slate-600 text-sm leading-relaxed mb-4">
                    {exec.shortIntro}
                  </p>
                  
                  <AnimatePresence>
                    {expandedExec === idx && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="overflow-hidden"
                      >
                        <p className="text-slate-600 text-sm leading-relaxed mb-4 pt-4 border-t border-slate-100">
                          {exec.fullBio}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                  
                  <div className="mt-auto pt-4">
                    <button 
                      onClick={() => setExpandedExec(expandedExec === idx ? null : idx)}
                      className="flex items-center text-sm font-bold text-blue-600 hover:text-blue-800 transition-colors"
                    >
                      {expandedExec === idx ? (
                        <>Read Less <ChevronUp className="w-4 h-4 ml-1" /></>
                      ) : (
                        <>Read More <ChevronDown className="w-4 h-4 ml-1" /></>
                      )}
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Leadership Impact */}
      <section className="py-24 bg-slate-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5 mix-blend-overlay" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-5xl font-black text-white mb-6">Driving Innovation for Global Enterprises</h2>
            <p className="text-xl text-slate-400">Our leadership has consistently shaped Rysun’s growth and industry impact.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {impactStats.map((stat, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-white/5 border border-white/10 rounded-3xl p-8 text-center hover:bg-white/10 transition-colors"
              >
                <div className="w-16 h-16 mx-auto bg-blue-500/20 rounded-2xl flex items-center justify-center text-blue-400 mb-6">
                  {stat.icon}
                </div>
                <div className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400 mb-2">
                  {stat.value}
                </div>
                <div className="text-sm font-bold text-slate-300 uppercase tracking-wider">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Vision for the Future */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative rounded-3xl overflow-hidden aspect-square lg:aspect-auto lg:h-[600px]"
            >
              <img src="https://picsum.photos/seed/rysun-future/800/800" alt="Future Vision" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-900/80 to-transparent mix-blend-multiply" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-32 h-32 border border-white/30 rounded-full flex items-center justify-center animate-[spin_10s_linear_infinite]">
                  <div className="w-24 h-24 border border-blue-400/50 rounded-full animate-[spin_5s_linear_infinite_reverse]" />
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-6 leading-tight">
                Building the Future with <span className="text-blue-600">AI, Data and Digital Innovation</span>
              </h2>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                Rysun’s leadership is intensely focused on the next horizon of enterprise technology. We are building the capabilities, partnerships, and platforms to help our clients lead in an AI-first world.
              </p>
              
              <div className="space-y-4">
                {visionThemes.map((theme, idx) => (
                  <div key={idx} className="flex items-center gap-4 bg-slate-50 p-4 rounded-xl border border-slate-100">
                    <div className="w-10 h-10 bg-white rounded-lg shadow-sm flex items-center justify-center text-blue-600 flex-shrink-0">
                      {theme.icon}
                    </div>
                    <span className="text-lg font-bold text-slate-800">{theme.title}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 6. Culture of Innovation */}
      <section className="py-24 bg-slate-50 border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-6">A Culture Built on Innovation and Collaboration</h2>
            <p className="text-xl text-slate-600">Our leadership actively shapes a culture where ideas flourish and talent thrives.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {cultureThemes.map((theme, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 flex gap-6 items-start hover:shadow-md transition-shadow"
              >
                <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center text-blue-600 flex-shrink-0 mt-1">
                  <Users className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">{theme.title}</h3>
                  <p className="text-slate-600 leading-relaxed">{theme.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Leadership Insights */}
      <section className="py-24 bg-slate-50 border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
            <div className="max-w-2xl">
              <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-4">Leadership Insights</h2>
              <p className="text-xl text-slate-600">Thought leadership and industry perspectives from our executives.</p>
            </div>
            <Link to="/insights/perspectives-povs" className="hidden md:inline-flex items-center text-blue-600 font-bold hover:text-blue-800 transition-colors">
              View All Insights <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {insights.map((insight, idx) => (
              <Link key={idx} to="/insights/perspectives-povs" className="flex flex-col bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl border border-slate-100 transition-all group h-full">
                <div className="relative h-48 overflow-hidden">
                  <img src={`https://picsum.photos/seed/rysun-${insight.img}/600/400`} alt={insight.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" referrerPolicy="no-referrer" />
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
            <Link to="/insights/perspectives-povs" className="inline-flex items-center text-blue-600 font-bold hover:text-blue-800 transition-colors">
              View All Insights <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* 8. Strategic Partnerships */}
      <section className="py-24 bg-slate-50 border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-6">Strategic Partnerships</h2>
            <p className="text-xl text-slate-600">Collaborating with global technology leaders to drive enterprise innovation.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {partners.map((partner, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-white p-10 rounded-3xl shadow-sm border border-slate-100 text-center hover:shadow-lg transition-shadow"
              >
                <div className="w-20 h-20 mx-auto bg-slate-50 rounded-2xl flex items-center justify-center text-slate-700 mb-6 border border-slate-100">
                  {partner.icon}
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">{partner.name}</h3>
                <p className="text-slate-600 leading-relaxed">{partner.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. Join Our Team */}
      <section className="py-24 bg-blue-600 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10 mix-blend-overlay" />
        <div className="absolute top-0 right-0 -mt-20 -mr-20 w-96 h-96 bg-blue-500 rounded-full blur-3xl opacity-50 pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 -mb-20 -ml-20 w-96 h-96 bg-indigo-500 rounded-full blur-3xl opacity-50 pointer-events-none"></div>
        
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-black text-white mb-6 leading-tight">
              Work With Leaders Shaping the Future of AI and Digital Innovation
            </h2>
            <p className="text-xl text-blue-100 mb-10 max-w-3xl mx-auto">
              Ready to accelerate your career? Join a global team of innovators, creators, and problem-solvers building transformative solutions for the world's leading enterprises.
            </p>
            <Link to="/company/careers" className="inline-flex items-center justify-center px-8 py-4 text-lg font-bold rounded-full text-blue-600 bg-white hover:bg-gray-50 transition-all shadow-lg hover:shadow-xl hover:-translate-y-1">
              Explore Careers <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </motion.div>
        </div>
      </section>

    </div>
  );
}
