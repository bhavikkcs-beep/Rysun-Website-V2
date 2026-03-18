import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2, FileText, MessageSquare, Target, Compass, Zap, BarChart3 } from 'lucide-react';
import { motion } from 'framer-motion';

export default function DigitalStrategyPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="w-full bg-white">
      {/* 1. Hero Section */}
      <section className="relative pt-32 pb-24 lg:pt-40 lg:pb-32 bg-slate-900 overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://picsum.photos/seed/rysun-digital-strategy/1920/1080?blur=8')] opacity-20 bg-cover bg-center mix-blend-overlay" />
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900 opacity-90" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight mb-6 leading-tight"
            >
              Digital Strategy & Transformation
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-xl text-blue-100 mb-8 leading-relaxed"
            >
              Navigate the complexities of the digital age with a clear, actionable strategy. We help enterprises align technology investments with business goals to drive sustainable growth and competitive advantage.
            </motion.p>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex flex-wrap gap-4"
            >
              <Link to="/contact-us" className="inline-flex items-center justify-center px-6 py-3 text-sm font-medium rounded-full text-white bg-blue-600 hover:bg-blue-500 transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5">
                <MessageSquare className="w-4 h-4 mr-2" />
                Talk to an Expert
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 2. Overview Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-6">Architecting Your Digital Future</h2>
              <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                A successful digital transformation requires more than just adopting new technologies. It demands a fundamental shift in how your organization operates, delivers value, and engages with customers.
              </p>
              <h3 className="text-xl font-semibold text-slate-900 mb-4">Our strategic approach delivers:</h3>
              <ul className="space-y-3">
                {[
                  'Clear alignment between digital initiatives and business outcomes',
                  'Comprehensive assessment of digital maturity and readiness',
                  'Actionable roadmaps with measurable milestones',
                  'Change management strategies to ensure organizational adoption'
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start">
                    <CheckCircle2 className="w-5 h-5 text-blue-600 mt-1 mr-3 flex-shrink-0" />
                    <span className="text-slate-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-xl border border-slate-100 bg-slate-50 aspect-video flex items-center justify-center relative">
              <img src="https://picsum.photos/seed/rysun-strategy-overview/800/450" alt="Digital Strategy Overview" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent" />
            </div>
          </div>
        </div>
      </section>

      {/* 3. Core Capabilities */}
      <section className="py-20 bg-slate-50 border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Core Capabilities</h2>
            <p className="text-lg text-slate-600">Comprehensive strategic services to guide your transformation journey.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                icon: <Compass className="w-6 h-6 text-blue-600" />,
                name: 'Digital Maturity Assessment',
                desc: 'Evaluate your current digital capabilities, identify gaps, and benchmark against industry leaders to establish a baseline for transformation.',
              },
              {
                icon: <Target className="w-6 h-6 text-blue-600" />,
                name: 'Transformation Roadmap',
                desc: 'Develop a phased, actionable roadmap that prioritizes initiatives based on business value, technical feasibility, and strategic alignment.',
              },
              {
                icon: <Zap className="w-6 h-6 text-blue-600" />,
                name: 'Operating Model Design',
                desc: 'Redesign organizational structures, processes, and governance models to support agility, innovation, and digital execution.',
              },
              {
                icon: <BarChart3 className="w-6 h-6 text-blue-600" />,
                name: 'Value Realization',
                desc: 'Establish KPIs, measurement frameworks, and continuous monitoring to ensure digital investments deliver expected business outcomes.',
              }
            ].map((service, idx) => (
              <div key={idx} className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow flex gap-6">
                <div className="flex-shrink-0 w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center">
                  {service.icon}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">{service.name}</h3>
                  <p className="text-slate-600 leading-relaxed">{service.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">Ready to Define Your Digital Future?</h2>
          <p className="text-xl text-slate-600 mb-10">
            Partner with Rysun Labs to build a resilient, forward-looking digital strategy that drives measurable business impact.
          </p>
          <Link to="/contact-us" className="inline-flex items-center justify-center px-8 py-4 text-base font-bold rounded-full text-white bg-blue-600 hover:bg-blue-700 transition-all shadow-lg hover:shadow-xl hover:-translate-y-1">
            Schedule a Strategy Session
            <ArrowRight className="w-5 h-5 ml-2" />
          </Link>
        </div>
      </section>
    </div>
  );
}
