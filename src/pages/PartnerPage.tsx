import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2, Globe, Shield, Zap } from 'lucide-react';

const unslugify = (slug: string) => {
  return slug
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
};

export default function PartnerPage() {
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
      {/* Hero Section */}
      <section className="relative pt-32 pb-24 bg-gray-900 border-b border-gray-800 overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://picsum.photos/seed/rysun-partner/1920/1080?blur=10')] opacity-20 bg-cover bg-center mix-blend-overlay" />
        <div className="absolute inset-0 bg-gradient-to-br from-rysun-blue/20 via-gray-900 to-rysun-darkpurple/30" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 backdrop-blur-md mb-6">
              <Globe className="w-4 h-4 text-rysun-lightblue" />
              <span className="text-sm font-bold text-blue-100 tracking-wider uppercase">Strategic Partnership</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight mb-6 leading-tight">
              {title}
            </h1>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Accelerate your digital transformation and unlock new possibilities with our strategic alliance and deep expertise in {title} technologies.
            </p>
            <Link to="/contact-us" className="inline-flex items-center justify-center px-8 py-4 text-base font-bold rounded-full text-white bg-gradient-to-r from-rysun-blue to-rysun-lightblue hover:shadow-[0_0_30px_rgba(0,169,233,0.5)] hover:-translate-y-0.5 transition-all">
              Talk to an Expert
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* Value Proposition */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">Why Choose Rysun for {title}?</h2>
            <p className="text-lg text-gray-600">We combine industry knowledge with technical mastery to deliver exceptional results.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: 'Certified Experts', icon: <Shield />, desc: 'Our team consists of highly certified professionals with proven track records.' },
              { title: 'Accelerated Delivery', icon: <Zap />, desc: 'Leverage our pre-built accelerators and frameworks for faster time-to-market.' },
              { title: 'End-to-End Solutions', icon: <CheckCircle2 />, desc: 'From strategy and consulting to implementation and managed services.' }
            ].map((feature, idx) => (
              <div key={idx} className="p-8 rounded-3xl border border-gray-100 bg-gray-50 hover:shadow-xl transition-all">
                <div className="w-14 h-14 rounded-2xl bg-blue-100 flex items-center justify-center text-rysun-blue mb-6">
                  {React.cloneElement(feature.icon as React.ReactElement, { className: 'w-7 h-7' })}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
