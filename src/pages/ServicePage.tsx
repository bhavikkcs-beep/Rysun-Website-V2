import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2, ChevronRight, FileText, MessageSquare } from 'lucide-react';
import { motion } from 'framer-motion';

// Helper to unslugify for display purposes
const unslugify = (slug: string) => {
  return slug
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
};

export default function ServicePage() {
  const { slug } = useParams<{ slug: string }>();
  const [title, setTitle] = useState('');

  useEffect(() => {
    if (slug) {
      setTitle(unslugify(slug));
      window.scrollTo(0, 0);
    }
  }, [slug]);

  if (!title) return null;

  return (
    <div className="w-full bg-white">
      {/* 1. Hero Section */}
      <section className="relative pt-32 pb-24 lg:pt-40 lg:pb-32 bg-gray-50 border-b border-gray-100 overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://picsum.photos/seed/rysun-service/1920/1080?blur=8')] opacity-5 bg-cover bg-center" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 tracking-tight mb-6 leading-tight">
              {title}
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Helping enterprises move from experimentation to scalable, responsible, and business-aligned adoption. Design a clear roadmap, establish governance frameworks, and build the foundation required to scale initiatives across your organization.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/contact-us" className="inline-flex items-center justify-center px-6 py-3 text-sm font-medium rounded-full text-white bg-rysun-blue hover:bg-rysun-lightblue transition-all shadow-md hover:shadow-lg">
                <MessageSquare className="w-4 h-4 mr-2" />
                Talk to an Expert
              </Link>
              <button className="inline-flex items-center justify-center px-6 py-3 text-sm font-medium rounded-full text-gray-700 bg-white border border-gray-200 hover:border-gray-300 hover:bg-gray-50 transition-all shadow-sm">
                <FileText className="w-4 h-4 mr-2" />
                Download Guide
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Overview Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Building the Foundation for Enterprise Success</h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Organizations often struggle to move beyond pilots due to lack of strategy, governance, and operational readiness. Rysun Labs helps enterprises define a clear vision, governance framework, and transformation roadmap that aligns initiatives with business outcomes.
              </p>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Our approach ensures:</h3>
              <ul className="space-y-3">
                {[
                  'Strategic alignment between technology and business goals',
                  'Responsible and ethical adoption practices',
                  'Scalable operating models for enterprise-wide deployment',
                  'Risk-aware governance frameworks and compliance'
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start">
                    <CheckCircle2 className="w-5 h-5 text-rysun-lightblue mt-1 mr-3 flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-xl border border-gray-100 bg-gray-50 aspect-video flex items-center justify-center">
              <img src="https://picsum.photos/seed/rysun-overview/800/450" alt="Overview" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
            </div>
          </div>
        </div>
      </section>

      {/* 3. Services Catalog */}
      <section className="py-20 bg-gray-50 border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our {title} Services</h2>
            <p className="text-lg text-gray-600">Comprehensive solutions tailored to your enterprise maturity and strategic objectives.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                name: 'Strategy & Roadmap Development',
                desc: 'Define a clear roadmap for adoption aligned with enterprise objectives.',
                activities: ['Business opportunity discovery', 'Use case prioritization', 'Capability maturity assessment', 'Investment roadmap']
              },
              {
                name: 'Readiness & Transformation Programs',
                desc: 'Prepare organizations to operationalize technology across business functions.',
                activities: ['Operating model design', 'CoE (Center of Excellence) setup', 'Organizational readiness assessment', 'Adoption strategy']
              },
              {
                name: 'Responsible Implementation',
                desc: 'Ensure systems are transparent, ethical, and compliant with industry standards.',
                activities: ['Policy development', 'Bias detection & fairness evaluation', 'Explainable implementation', 'Ethics governance frameworks']
              },
              {
                name: 'Governance & Risk Management',
                desc: 'Establish governance structures to manage risks and ensure continuous compliance.',
                activities: ['Governance frameworks', 'Model risk management', 'Regulatory compliance alignment', 'Lifecycle governance']
              }
            ].map((service, idx) => (
              <div key={idx} className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <h3 className="text-xl font-bold text-rysun-blue mb-3">{service.name}</h3>
                <p className="text-gray-600 mb-6">{service.desc}</p>
                <h4 className="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-3">Key Activities:</h4>
                <ul className="space-y-2">
                  {service.activities.map((act, i) => (
                    <li key={i} className="flex items-center text-sm text-gray-700">
                      <div className="w-1.5 h-1.5 rounded-full bg-rysun-orange mr-2" />
                      {act}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Our Approach */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Transformation Framework</h2>
            <p className="text-lg text-gray-600">A proven, structured methodology to accelerate value realization and mitigate risk.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { step: '01', title: 'Discover', desc: 'Identify high-impact opportunities aligned with business priorities.' },
              { step: '02', title: 'Assess', desc: 'Evaluate data readiness, technology maturity, and organizational capabilities.' },
              { step: '03', title: 'Design', desc: 'Define architecture, governance model, and transformation roadmap.' },
              { step: '04', title: 'Scale', desc: 'Operationalize with governance, monitoring, and responsible practices.' }
            ].map((phase, idx) => (
              <div key={idx} className="relative p-6 rounded-2xl bg-gray-50 border border-gray-100">
                <div className="text-4xl font-black text-gray-200 mb-4">{phase.step}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{phase.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{phase.desc}</p>
                {idx < 3 && <div className="hidden md:block absolute top-1/2 -right-3 w-6 h-px bg-gray-300" />}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Business Impact */}
      <section className="py-20 bg-rysun-blue text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Business Outcomes</h2>
              <p className="text-lg text-blue-100 mb-8 leading-relaxed">
                Our strategic interventions deliver measurable results, transforming operational efficiency and creating new revenue streams.
              </p>
              <ul className="space-y-4">
                {[
                  'Faster adoption across business units',
                  'Reduced implementation risk and technical debt',
                  'Improved governance and regulatory compliance',
                  'Accelerated ROI from technology investments',
                  'Scalable enterprise operating models'
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center bg-white/10 rounded-lg p-4 backdrop-blur-sm border border-white/5">
                    <CheckCircle2 className="w-5 h-5 text-rysun-lightblue mr-3 flex-shrink-0" />
                    <span className="font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { metric: '40%', label: 'Faster Time-to-Market' },
                { metric: '60%', label: 'Reduction in Risk' },
                { metric: '3x', label: 'ROI Acceleration' },
                { metric: '100%', label: 'Compliance Alignment' }
              ].map((stat, idx) => (
                <div key={idx} className="bg-white/5 p-6 rounded-2xl border border-white/10 text-center backdrop-blur-sm">
                  <div className="text-4xl font-bold text-rysun-lightblue mb-2">{stat.metric}</div>
                  <div className="text-sm text-blue-100 font-medium">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 6 & 7. Related Capabilities & Industries */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Related Capabilities</h3>
              <div className="space-y-3">
                {[
                  'Architecture & Engineering Foundations',
                  'Generative & Agentic Systems',
                  'Applied & Specialized Solutions',
                  'Industry Accelerators'
                ].map((item, idx) => (
                  <Link key={idx} to={`/service/${slugify(item)}`} className="flex items-center justify-between p-4 bg-white rounded-xl border border-gray-100 hover:border-rysun-lightblue hover:shadow-sm transition-all group">
                    <span className="font-medium text-gray-700 group-hover:text-rysun-blue">{item}</span>
                    <ChevronRight className="w-5 h-5 text-gray-400 group-hover:text-rysun-lightblue" />
                  </Link>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Industry Applications</h3>
              <div className="space-y-3">
                {[
                  'Retail & E-Commerce Transformation',
                  'Healthcare Adoption Frameworks',
                  'Financial Services Governance',
                  'High-Tech Product Strategy'
                ].map((item, idx) => (
                  <Link key={idx} to={`/industry/${slugify(item)}`} className="flex items-center justify-between p-4 bg-white rounded-xl border border-gray-100 hover:border-rysun-lightblue hover:shadow-sm transition-all group">
                    <span className="font-medium text-gray-700 group-hover:text-rysun-blue">{item}</span>
                    <ChevronRight className="w-5 h-5 text-gray-400 group-hover:text-rysun-lightblue" />
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 8. Engagement Models */}
      <section className="py-20 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Engagement Models</h2>
            <p className="text-lg text-gray-600">Flexible partnership structures designed to meet your specific enterprise needs.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {['Strategy Workshop', 'Readiness Assessment', 'Transformation Consulting', 'Governance Implementation'].map((model, idx) => (
              <div key={idx} className="p-6 rounded-2xl bg-gray-50 border border-gray-100 text-center hover:bg-white hover:shadow-md transition-all cursor-pointer">
                <h4 className="text-lg font-semibold text-gray-900 mb-2">{model}</h4>
                <p className="text-sm text-gray-500">Fixed-scope engagement to accelerate initial value delivery.</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 10. Call To Action */}
      <section className="py-24 bg-gray-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-rysun-blue/20 to-rysun-darkpurple/20" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Start Your Transformation Journey</h2>
          <p className="text-xl text-gray-300 mb-10">
            Partner with Rysun Labs to define your strategy, establish governance, and scale responsibly across your organization.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/contact-us" className="inline-flex items-center justify-center px-8 py-4 text-base font-medium rounded-full text-gray-900 bg-white hover:bg-gray-50 transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5">
              Schedule Consultation
            </Link>
            <Link to="/contact-us" className="inline-flex items-center justify-center px-8 py-4 text-base font-medium rounded-full text-white bg-transparent border border-white/30 hover:bg-white/10 transition-all">
              Contact Our Experts
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

// Helper function for slugify to match sitemap.ts
function slugify(text: string): string {
  return text
    .toString()
    .toLowerCase()
    .replace(/\s+/g, '-')
    .replace(/[^\w\-]+/g, '')
    .replace(/\-\-+/g, '-')
    .replace(/^-+/, '')
    .replace(/-+$/, '');
}
