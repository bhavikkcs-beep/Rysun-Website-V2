import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2, MessageSquare, Database, Bot, Cpu, Zap } from 'lucide-react';
import { motion } from 'framer-motion';

export default function DataAIAutomationPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="w-full bg-white">
      {/* 1. Hero Section */}
      <section className="relative pt-32 pb-24 lg:pt-40 lg:pb-32 bg-slate-900 overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://picsum.photos/seed/rysun-data-ai/1920/1080?blur=8')] opacity-20 bg-cover bg-center mix-blend-overlay" />
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900 opacity-90" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight mb-6 leading-tight"
            >
              Data, AI & Intelligent Automation
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-xl text-blue-100 mb-8 leading-relaxed"
            >
              Unlock the value of your data, harness the power of artificial intelligence, and automate complex processes to drive operational efficiency and innovation.
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
              <h2 className="text-3xl font-bold text-slate-900 mb-6">Transforming Data into Actionable Intelligence</h2>
              <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                Data is the new currency, and AI is the engine that drives its value. We help organizations build robust data foundations, implement advanced AI models, and automate workflows to achieve unprecedented efficiency and insight.
              </p>
              <h3 className="text-xl font-semibold text-slate-900 mb-4">Our approach delivers:</h3>
              <ul className="space-y-3">
                {[
                  'Scalable, secure, and governed data architectures',
                  'Predictive and prescriptive analytics for better decision-making',
                  'Intelligent automation of repetitive, manual tasks',
                  'Responsible and ethical AI implementation'
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start">
                    <CheckCircle2 className="w-5 h-5 text-blue-600 mt-1 mr-3 flex-shrink-0" />
                    <span className="text-slate-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-xl border border-slate-100 bg-slate-50 aspect-video flex items-center justify-center relative">
              <img src="https://picsum.photos/seed/rysun-data-ai-overview/800/450" alt="Data, AI & Automation Overview" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
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
            <p className="text-lg text-slate-600">Comprehensive services to accelerate your data and AI journey.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                icon: <Database className="w-6 h-6 text-blue-600" />,
                name: 'Data Engineering & Platforms',
                desc: 'Design and build scalable data lakes, warehouses, and pipelines to ensure high-quality, accessible data across the enterprise.',
              },
              {
                icon: <Bot className="w-6 h-6 text-blue-600" />,
                name: 'Applied AI & Machine Learning',
                desc: 'Develop and deploy custom AI models, including predictive analytics, natural language processing, and computer vision solutions.',
              },
              {
                icon: <Cpu className="w-6 h-6 text-blue-600" />,
                name: 'Generative AI Solutions',
                desc: 'Harness the power of Large Language Models (LLMs) to automate content creation, enhance customer service, and accelerate innovation.',
              },
              {
                icon: <Zap className="w-6 h-6 text-blue-600" />,
                name: 'Intelligent Automation (RPA)',
                desc: 'Automate complex, rule-based business processes using Robotic Process Automation combined with AI for cognitive decision-making.',
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
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">Ready to Unlock the Power of AI?</h2>
          <p className="text-xl text-slate-600 mb-10">
            Partner with Rysun Labs to build a data-driven, AI-powered organization that leads in the digital era.
          </p>
          <Link to="/contact-us" className="inline-flex items-center justify-center px-8 py-4 text-base font-bold rounded-full text-white bg-blue-600 hover:bg-blue-700 transition-all shadow-lg hover:shadow-xl hover:-translate-y-1">
            Explore AI Solutions
            <ArrowRight className="w-5 h-5 ml-2" />
          </Link>
        </div>
      </section>
    </div>
  );
}
