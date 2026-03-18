import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2, MessageSquare, Cloud, ShieldCheck, Lock, Server } from 'lucide-react';
import { motion } from 'framer-motion';

export default function CloudSecurityPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="w-full bg-white">
      {/* 1. Hero Section */}
      <section className="relative pt-32 pb-24 lg:pt-40 lg:pb-32 bg-slate-900 overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://picsum.photos/seed/rysun-cloud-security/1920/1080?blur=8')] opacity-20 bg-cover bg-center mix-blend-overlay" />
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900 opacity-90" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight mb-6 leading-tight"
            >
              Cloud, Security & Infrastructure
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-xl text-blue-100 mb-8 leading-relaxed"
            >
              Modernize your IT foundation with scalable cloud architectures, robust cybersecurity frameworks, and resilient infrastructure designed for the digital era.
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
              <h2 className="text-3xl font-bold text-slate-900 mb-6">Secure, Scalable, and Resilient IT Foundations</h2>
              <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                A robust digital transformation requires a secure and flexible infrastructure. We help organizations migrate to the cloud, optimize their operations, and implement zero-trust security models to protect critical assets.
              </p>
              <h3 className="text-xl font-semibold text-slate-900 mb-4">Our infrastructure approach delivers:</h3>
              <ul className="space-y-3">
                {[
                  'Seamless cloud migration and modernization strategies',
                  'Optimized cloud operations for cost efficiency and performance',
                  'Comprehensive cybersecurity and compliance frameworks',
                  'Resilient, highly available infrastructure architectures'
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start">
                    <CheckCircle2 className="w-5 h-5 text-blue-600 mt-1 mr-3 flex-shrink-0" />
                    <span className="text-slate-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-xl border border-slate-100 bg-slate-50 aspect-video flex items-center justify-center relative">
              <img src="https://picsum.photos/seed/rysun-cloud-overview/800/450" alt="Cloud & Security Overview" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
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
            <p className="text-lg text-slate-600">Comprehensive cloud and security services to protect and scale your business.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                icon: <Cloud className="w-6 h-6 text-blue-600" />,
                name: 'Cloud Strategy & Migration',
                desc: 'Develop comprehensive cloud adoption strategies and execute seamless migrations to AWS, Azure, or Google Cloud Platform with minimal disruption.',
              },
              {
                icon: <Server className="w-6 h-6 text-blue-600" />,
                name: 'Cloud Operations (FinOps & DevOps)',
                desc: 'Optimize cloud spend, automate infrastructure provisioning, and streamline operations using advanced FinOps and DevOps practices.',
              },
              {
                icon: <ShieldCheck className="w-6 h-6 text-blue-600" />,
                name: 'Cybersecurity & Zero Trust',
                desc: 'Implement robust security architectures, zero-trust models, and continuous threat monitoring to protect data, applications, and infrastructure.',
              },
              {
                icon: <Lock className="w-6 h-6 text-blue-600" />,
                name: 'Compliance & Risk Management',
                desc: 'Ensure adherence to industry regulations (GDPR, HIPAA, SOC2) and establish comprehensive risk management frameworks for your digital assets.',
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
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">Ready to Secure and Scale Your Cloud?</h2>
          <p className="text-xl text-slate-600 mb-10">
            Partner with Rysun Labs to build a secure, resilient, and optimized cloud infrastructure that accelerates your digital journey.
          </p>
          <Link to="/contact-us" className="inline-flex items-center justify-center px-8 py-4 text-base font-bold rounded-full text-white bg-blue-600 hover:bg-blue-700 transition-all shadow-lg hover:shadow-xl hover:-translate-y-1">
            Secure Your Infrastructure
            <ArrowRight className="w-5 h-5 ml-2" />
          </Link>
        </div>
      </section>
    </div>
  );
}
