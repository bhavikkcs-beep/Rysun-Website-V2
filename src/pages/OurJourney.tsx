import React, { useEffect, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Award, BrainCircuit, Database, Globe, Rocket, Shield, Users, Zap, 
  ArrowRight, Star, CheckCircle2, Cloud, MonitorSmartphone, Briefcase, 
  HeartHandshake, MessageSquare, Mic, Calendar, Video, ChevronRight
} from 'lucide-react';

const Counter = ({ end, suffix = "", title }: { end: number | string, suffix?: string, title: string }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="flex flex-col items-center p-6 bg-white/10 backdrop-blur-md rounded-2xl shadow-lg border border-white/20"
    >
      <div className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white via-rysun-lightblue to-white mb-2">
        {end}{suffix}
      </div>
      <div className="text-sm md:text-base text-slate-200 font-medium text-center">
        {title}
      </div>
    </motion.div>
  );
};

export default function OurJourney() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const { scrollYProgress } = useScroll();
  const yPos = useTransform(scrollYProgress, [0, 1], [0, -100]);

  const timeline = [
    { year: '2000', title: 'The Beginning', desc: 'Rysun was founded with a vision to deliver innovative and reliable technology solutions.', icon: <Rocket className="w-6 h-6" />, image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&q=80&w=800', color: 'from-rysun-blue to-rysun-lightblue' },
    { year: '2005', title: 'Global Client Engagement', desc: 'Expansion into international markets and global client partnerships.', icon: <Globe className="w-6 h-6" />, image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=800', color: 'from-rysun-darkpurple to-rysun-maroon' },
    { year: '2010', title: 'Enterprise Technology Expansion', desc: 'Strengthening enterprise software development capabilities.', icon: <BuildingIcon className="w-6 h-6" />, image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=800', color: 'from-rysun-maroon to-rysun-red' },
    { year: '2015', title: 'Digital Transformation Era', desc: 'Expansion into cloud technologies and digital transformation services.', icon: <Cloud className="w-6 h-6" />, image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80&w=800', color: 'from-rysun-red to-rysun-orange' },
    { year: '2020', title: 'AI & Data Innovation', desc: 'Strategic focus on Artificial Intelligence, Data Engineering, and intelligent automation.', icon: <BrainCircuit className="w-6 h-6" />, image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800', color: 'from-rysun-orange to-rysun-lightblue' },
    { year: '2025', title: 'Silver Jubilee Milestone', desc: 'Celebrating 25 years of innovation, partnerships, and impact.', icon: <Award className="w-6 h-6" />, image: 'https://images.unsplash.com/photo-1511556532299-8f662fc26c06?auto=format&fit=crop&q=80&w=800', color: 'from-rysun-lightblue to-rysun-blue' }
  ];

  const innovations = [
    { title: 'Artificial Intelligence', desc: 'Building intelligent systems and automation solutions.', icon: <BrainCircuit className="w-8 h-8" /> },
    { title: 'Data Engineering & Analytics', desc: 'Transforming enterprise data into valuable insights.', icon: <Database className="w-8 h-8" /> },
    { title: 'Digital Engineering', desc: 'Developing scalable digital products and platforms.', icon: <MonitorSmartphone className="w-8 h-8" /> },
    { title: 'Cloud & Enterprise Solutions', desc: 'Modernizing enterprise technology ecosystems.', icon: <Cloud className="w-8 h-8" /> }
  ];

  const initiatives = [
    { title: 'Innovation Talks Series', icon: <Mic className="w-12 h-12" />, color: 'from-rysun-blue to-rysun-lightblue', colSpan: 'md:col-span-2 lg:col-span-2' },
    { title: 'Client Appreciation Events', icon: <HeartHandshake className="w-12 h-12" />, color: 'from-rysun-darkpurple to-rysun-maroon', colSpan: 'md:col-span-1 lg:col-span-1' },
    { title: 'Employee Recognition Programs', icon: <Award className="w-12 h-12" />, color: 'from-rysun-orange to-rysun-red', colSpan: 'md:col-span-1 lg:col-span-1' },
    { title: 'Community Engagement Initiatives', icon: <Users className="w-12 h-12" />, color: 'from-rysun-lightblue to-rysun-blue', colSpan: 'md:col-span-2 lg:col-span-1' },
    { title: 'Technology Webinars', icon: <Video className="w-12 h-12" />, color: 'from-rysun-maroon to-rysun-orange', colSpan: 'md:col-span-3 lg:col-span-1' }
  ];

  return (
    <div className="w-full bg-slate-50 font-sans text-slate-900 overflow-hidden">
      
      {/* 1. Hero Section */}
      <section className="relative min-h-screen flex items-center pt-20 pb-20 overflow-hidden bg-slate-900">
        {/* Digital Network Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-rysun-darkpurple via-rysun-blue to-slate-900" />
        <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(255,255,255,0.15) 1px, transparent 0)', backgroundSize: '40px 40px' }} />
        
        {/* Animated Silver Accents */}
        <motion.div 
          animate={{ opacity: [0.3, 0.6, 0.3], scale: [1, 1.2, 1] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/4 -left-64 w-96 h-96 bg-slate-400 rounded-full mix-blend-overlay filter blur-[100px] opacity-30" 
        />
        <motion.div 
          animate={{ opacity: [0.2, 0.5, 0.2], scale: [1, 1.5, 1] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute bottom-1/4 -right-64 w-96 h-96 bg-slate-300 rounded-full mix-blend-overlay filter blur-[100px] opacity-20" 
        />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10 flex flex-col items-center text-center mt-10">
          
          {/* Silver Jubilee Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="inline-flex items-center gap-3 px-6 py-2 rounded-full bg-gradient-to-r from-slate-800 to-slate-700 border border-slate-500 shadow-[0_0_30px_rgba(148,163,184,0.2)] mb-8"
          >
            <Award className="w-5 h-5 text-slate-300" />
            <span className="text-sm md:text-base font-bold tracking-widest uppercase text-transparent bg-clip-text bg-gradient-to-r from-slate-200 via-white to-slate-300">
              25 Years Silver Jubilee
            </span>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 tracking-tight leading-tight max-w-5xl"
          >
            Celebrating 25 Years of <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-300 via-slate-100 to-slate-400">
              Inspiration, Innovation & Impact
            </span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl md:text-2xl text-slate-300 mb-8 max-w-3xl font-light"
          >
            A remarkable journey of technology innovation, trusted partnerships, and digital transformation.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-base md:text-lg text-slate-400 mb-12 max-w-4xl leading-relaxed"
          >
            For 25 years, Rysun Labs has been at the forefront of delivering technology-led innovation for global enterprises. From building enterprise platforms to enabling AI-driven digital transformation, our journey reflects a deep commitment to solving complex challenges and creating measurable impact.
            <br /><br />
            As we celebrate our Silver Jubilee year, we honor the people, partnerships, and ideas that shaped our success—and look forward to building the next era of innovation.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <button onClick={() => document.getElementById('timeline')?.scrollIntoView({ behavior: 'smooth' })} className="px-8 py-4 bg-gradient-to-r from-slate-200 to-white text-slate-900 rounded-full font-bold hover:shadow-[0_0_20px_rgba(255,255,255,0.3)] transition-all flex items-center justify-center gap-2">
              Explore Our Journey
              <ArrowRight className="w-5 h-5" />
            </button>
            <button onClick={() => document.getElementById('initiatives')?.scrollIntoView({ behavior: 'smooth' })} className="px-8 py-4 bg-transparent border border-slate-400 text-white rounded-full font-bold hover:bg-slate-800 transition-all flex items-center justify-center gap-2">
              Celebrate With Us
              <Star className="w-5 h-5" />
            </button>
          </motion.div>

          {/* Timeline Animation 2000 -> 2025 */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
            className="mt-20 w-full max-w-2xl mx-auto flex items-center justify-between text-slate-400 font-mono text-sm relative"
          >
            <div className="absolute left-0 right-0 h-px bg-slate-700 top-1/2 -translate-y-1/2 z-0" />
            <motion.div 
              initial={{ width: "0%" }}
              animate={{ width: "100%" }}
              transition={{ duration: 3, delay: 1.5, ease: "easeInOut" }}
              className="absolute left-0 h-px bg-gradient-to-r from-slate-400 to-white top-1/2 -translate-y-1/2 z-0" 
            />
            <div className="relative z-10 bg-slate-900 px-2">2000</div>
            <div className="relative z-10 bg-slate-900 px-2 text-white font-bold text-lg">2025</div>
          </motion.div>

        </div>
      </section>

      {/* 2. Leadership Message */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="w-full lg:w-5/12 relative"
            >
              <div className="absolute inset-0 bg-gradient-to-tr from-slate-200 to-slate-50 rounded-3xl transform -rotate-3 scale-105" />
              <img 
                src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=800" 
                alt="Leadership" 
                className="relative z-10 rounded-3xl shadow-2xl w-full object-cover aspect-[4/5]"
              />
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-slate-100 rounded-full flex items-center justify-center z-20 border-4 border-white shadow-lg">
                <Award className="w-12 h-12 text-slate-400" />
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="w-full lg:w-7/12"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-8">
                A Message from Our Leadership
              </h2>
              <div className="relative">
                <MessageSquare className="absolute -top-6 -left-8 w-16 h-16 text-slate-100 -z-10 transform -scale-x-100" />
                <p className="text-xl text-slate-700 font-medium italic mb-6 leading-relaxed">
                  "Reaching the milestone of 25 years is both a moment of pride and reflection for all of us at Rysun Labs."
                </p>
                <div className="space-y-4 text-slate-600 leading-relaxed">
                  <p>
                    Over the past two and a half decades, our journey has been shaped by curiosity, resilience, and a relentless pursuit of innovation. What began as a vision to build impactful technology solutions has evolved into a trusted partner for enterprises seeking digital transformation.
                  </p>
                  <p>
                    This milestone is not just about celebrating the past—it is about reaffirming our commitment to innovation, collaboration, and delivering value to our clients across the globe.
                  </p>
                  <p>
                    We extend our heartfelt gratitude to our employees, clients, and partners who have been an integral part of this journey.
                  </p>
                </div>
                <div className="mt-8 pt-8 border-t border-slate-100">
                  <h4 className="font-bold text-slate-900 text-lg">Executive Leadership Team</h4>
                  <p className="text-slate-500">Rysun Labs</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 3. Our 25-Year Journey Timeline */}
      <section id="timeline" className="py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">A Journey of Innovation and Growth</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-rysun-blue to-rysun-lightblue mx-auto rounded-full" />
          </div>

          <div className="relative">
            {/* Center Line */}
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-rysun-blue via-rysun-darkpurple to-rysun-orange transform -translate-x-1/2 rounded-full" />
            <div className="md:hidden absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-rysun-blue via-rysun-darkpurple to-rysun-orange rounded-full" />

            <div className="space-y-16 md:space-y-32">
              {timeline.map((item, index) => {
                const isEven = index % 2 === 0;
                return (
                  <motion.div 
                    key={index}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                    className={`relative flex flex-col md:flex-row items-center ${isEven ? 'md:flex-row-reverse' : ''}`}
                  >
                    {/* Timeline Node */}
                    <div className={`absolute left-8 md:left-1/2 transform -translate-x-1/2 flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br ${item.color} shadow-xl z-20 border-4 border-white`}>
                      <div className="text-white">
                        {item.icon}
                      </div>
                    </div>

                    {/* Content Box */}
                    <div className={`w-full md:w-1/2 pl-24 pr-4 md:px-16 ${isEven ? 'md:text-left' : 'md:text-right'}`}>
                      <div className={`relative group ${isEven ? 'md:mr-auto' : 'md:ml-auto'}`}>
                        
                        <div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-video mb-6">
                           <div className={`absolute inset-0 bg-gradient-to-tr ${item.color} opacity-40 mix-blend-multiply z-10 transition-opacity group-hover:opacity-20`} />
                           <img src={item.image} alt={item.title} className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110" />
                           <div className="absolute bottom-4 left-4 z-20">
                             <span className={`inline-block px-6 py-2 rounded-full bg-white/90 backdrop-blur-sm text-slate-900 font-extrabold text-2xl shadow-lg`}>
                               {item.year}
                             </span>
                           </div>
                        </div>

                        <h3 className="text-3xl font-bold text-slate-900 mb-3 group-hover:text-rysun-blue transition-colors">
                          {item.title}
                        </h3>
                        <p className="text-lg text-slate-600 leading-relaxed">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* 4. 25 Years in Numbers */}
      <section className="py-20 bg-rysun-darkpurple relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-rysun-darkpurple via-rysun-blue to-rysun-darkpurple opacity-90" />
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMjAiIGN5PSIyMCIgcj0iMSIgZmlsbD0icmdiYSgyNTUsIDI1NSwgMjU1LCAwLjA1KSIvPjwvc3ZnPg==')] opacity-20" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Our Impact Over the Years</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-rysun-lightblue to-rysun-orange mx-auto rounded-full" />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
            <Counter end="25" suffix="+" title="Years of Innovation" />
            <Counter end="500" suffix="+" title="Projects Delivered" />
            <Counter end="Global" title="Enterprise Clients" />
            <Counter end="AI & Data" title="Digital Expertise" />
            <Counter end="ISO" title="Certifications & Quality" />
          </div>
        </div>
      </section>

      {/* 5. Innovation Areas */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Driving Innovation Across Digital Frontiers</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Our core capabilities that have evolved over 25 years to meet the demands of modern enterprises.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {innovations.map((item, idx) => {
              const colors = [
                'from-rysun-blue to-rysun-lightblue',
                'from-rysun-darkpurple to-rysun-maroon',
                'from-rysun-orange to-rysun-red',
                'from-rysun-lightblue to-rysun-blue'
              ];
              return (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="group p-8 rounded-3xl bg-slate-50 border border-slate-100 hover:bg-white hover:shadow-xl hover:border-slate-200 transition-all relative overflow-hidden"
                >
                  <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${colors[idx % colors.length]} rounded-bl-full opacity-10 group-hover:opacity-20 transition-opacity`} />
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${colors[idx % colors.length]} flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform shadow-lg`}>
                    {item.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-3">{item.title}</h3>
                  <p className="text-slate-600 leading-relaxed relative z-10">{item.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 6. Celebrating Our People */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="w-full lg:w-1/2"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">The People Behind Our Success</h2>
              <div className="w-20 h-1 bg-slate-300 mb-8" />
              <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                Our greatest strength lies in our people. The talented team at Rysun Labs brings together diverse skills, creativity, and dedication to deliver exceptional technology solutions.
              </p>
              <p className="text-lg text-slate-600 leading-relaxed">
                For 25 years, our culture of innovation and collaboration has empowered individuals to push boundaries and build impactful digital experiences.
              </p>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="w-full lg:w-1/2 grid grid-cols-2 gap-4"
            >
              <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=600" alt="Team collaboration" className="rounded-2xl w-full h-48 object-cover shadow-md" />
              <img src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=600" alt="Office culture" className="rounded-2xl w-full h-48 object-cover shadow-md mt-8" />
              <img src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=600" alt="Meeting" className="rounded-2xl w-full h-48 object-cover shadow-md -mt-8" />
              <img src="https://images.unsplash.com/photo-1515169067868-5387ec356754?auto=format&fit=crop&q=80&w=600" alt="Celebration" className="rounded-2xl w-full h-48 object-cover shadow-md" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* 7. Trusted Client Partnerships */}
      <section className="py-24 bg-slate-50 overflow-hidden border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">Building Long-Term Partnerships</h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Over the years, Rysun Labs has built lasting partnerships with organizations across industries such as healthcare, retail, technology, and financial services. Our collaborative approach and technical expertise have enabled us to become a trusted technology partner for enterprises seeking digital innovation.
          </p>
        </div>
        
        {/* Infinite Carousel */}
        <div className="relative w-full flex overflow-x-hidden">
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-slate-50 to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-slate-50 to-transparent z-10" />
          <div className="animate-marquee whitespace-nowrap flex items-center gap-16 py-4">
            {[...Array(2)].map((_, i) => (
              <React.Fragment key={i}>
                <div className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-slate-300 to-slate-400">RetailCorp</div>
                <div className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-slate-300 to-slate-400">HealthPlus</div>
                <div className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-slate-300 to-slate-400">FinTech Global</div>
                <div className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-slate-300 to-slate-400">TechInnovate</div>
                <div className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-slate-300 to-slate-400">LogisticsPro</div>
                <div className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-slate-300 to-slate-400">EduSmart</div>
              </React.Fragment>
            ))}
          </div>
        </div>
      </section>

      {/* 8. Silver Jubilee Year Initiatives */}
      <section id="initiatives" className="py-24 bg-slate-50 relative overflow-hidden">
        {/* Decorative background elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 opacity-30 pointer-events-none">
           <div className="absolute -top-24 -right-24 w-96 h-96 bg-rysun-lightblue rounded-full mix-blend-multiply filter blur-[128px]" />
           <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-rysun-orange rounded-full mix-blend-multiply filter blur-[128px]" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-6">Celebrating Our Silver Jubilee Throughout the Year</h2>
            <div className="w-32 h-1.5 bg-gradient-to-r from-rysun-blue via-rysun-darkpurple to-rysun-maroon mx-auto rounded-full" />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {initiatives.map((item, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.5 }}
                className={`relative overflow-hidden rounded-3xl p-8 flex flex-col justify-end min-h-[240px] group ${item.colSpan}`}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-90 z-0 transition-transform duration-500 group-hover:scale-105`} />
                <div className="absolute inset-0 bg-black/10 z-0" />
                
                {/* Large Background Icon */}
                <div className="absolute -right-6 -top-6 text-white/20 transform group-hover:scale-110 group-hover:rotate-12 transition-all duration-500 z-0 [&>svg]:w-48 [&>svg]:h-48">
                  {item.icon}
                </div>

                <div className="relative z-10">
                  <div className="w-14 h-14 rounded-2xl bg-white/20 backdrop-blur-md flex items-center justify-center text-white mb-6 border border-white/30 shadow-lg">
                    {item.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-white leading-tight">{item.title}</h3>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. The Future of Innovation */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-8">
            <Rocket className="w-8 h-8 text-slate-600" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-8">Looking Ahead to the Next Chapter</h2>
          <p className="text-xl text-slate-600 leading-relaxed mb-6">
            As we celebrate this milestone, Rysun Labs remains focused on the future.
          </p>
          <p className="text-lg text-slate-600 leading-relaxed mb-6">
            With rapid advancements in Artificial Intelligence, data technologies, and digital ecosystems, the next chapter of our journey will be defined by bold ideas, continuous innovation, and deeper global partnerships.
          </p>
          <p className="text-xl font-bold text-slate-800">
            Our mission remains to empower businesses with transformative technology solutions.
          </p>
        </div>
      </section>

      {/* 10. Final Call to Action */}
      <section className="py-24 bg-gradient-to-br from-rysun-blue to-rysun-darkpurple text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMjAiIGN5PSIyMCIgcj0iMSIgZmlsbD0icmdiYSgyNTUsIDI1NSwgMjU1LCAwLjA1KSIvPjwvc3ZnPg==')] opacity-20" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-4xl font-bold mb-6">Be Part of the Next Chapter</h2>
          <p className="text-xl text-slate-200 mb-10">
            Join us as we continue our journey of innovation and impact.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/company/careers" className="px-8 py-4 bg-white text-rysun-blue rounded-full font-bold hover:bg-slate-100 transition-all flex items-center gap-2 shadow-lg">
              Explore Careers <ChevronRight className="w-5 h-5" />
            </Link>
            <Link to="/company/partnerships-alliances" className="px-8 py-4 bg-transparent border-2 border-white/50 text-white rounded-full font-bold hover:bg-white/10 transition-all flex items-center gap-2">
              Partner With Us <HeartHandshake className="w-5 h-5" />
            </Link>
            <Link to="/contact-us" className="px-8 py-4 bg-transparent border-2 border-white/50 text-white rounded-full font-bold hover:bg-white/10 transition-all flex items-center gap-2">
              Contact Us <MessageSquare className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}

// Helper icon
function BuildingIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="16" height="20" x="4" y="2" rx="2" ry="2" />
      <path d="M9 22v-4h6v4" />
      <path d="M8 6h.01" />
      <path d="M16 6h.01" />
      <path d="M12 6h.01" />
      <path d="M12 10h.01" />
      <path d="M12 14h.01" />
      <path d="M16 10h.01" />
      <path d="M16 14h.01" />
      <path d="M8 10h.01" />
      <path d="M8 14h.01" />
    </svg>
  )
}
