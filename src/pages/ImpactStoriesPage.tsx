import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, Search, ShoppingCart, HeartPulse, Landmark, 
  Cpu, Factory, Truck
} from 'lucide-react';

const featuredStories = [
  {
    id: 1,
    industry: 'Retail & E-commerce',
    title: 'AI-driven Demand Forecasting for Retail',
    summary: 'Implemented a machine learning-based forecasting engine to optimize inventory and reduce stockouts across global supply chains.',
    metrics: [
      { label: 'Inventory Optimization', value: '28%' },
      { label: 'Improved Forecast Accuracy', value: '35%' }
    ],
    image: 'https://picsum.photos/seed/rysun-impact-retail/800/600',
    color: 'blue'
  },
  {
    id: 2,
    industry: 'Financial Services',
    title: 'AI-powered Fraud Detection Platform for Banking',
    summary: 'Built a real-time anomaly detection system using advanced neural networks to identify and prevent fraudulent transactions.',
    metrics: [
      { label: 'Reduction in Fraud Losses', value: '60%' },
      { label: 'Transaction Monitoring', value: 'Real-time' }
    ],
    image: 'https://picsum.photos/seed/rysun-impact-finance/800/600',
    color: 'purple'
  },
  {
    id: 3,
    industry: 'Healthcare & Life Sciences',
    title: 'Digital Patient Experience Transformation',
    summary: 'Designed and engineered a unified digital health platform to streamline patient onboarding and telehealth services.',
    metrics: [
      { label: 'Patient Engagement', value: '+45%' },
      { label: 'Reduction in Wait Times', value: '30%' }
    ],
    image: 'https://picsum.photos/seed/rysun-impact-health/800/600',
    color: 'emerald'
  }
];

const allStories = [
  {
    id: 4,
    industry: 'Retail & E-commerce',
    capability: 'AI & Generative AI',
    impact: 'Revenue Growth',
    title: 'AI-Powered Product Recommendation Engine',
    summary: 'Built a machine learning platform that analyzes customer behavior to personalize product suggestions.',
    metric: '+32% conversion rate',
    image: 'https://picsum.photos/seed/rysun-impact-4/600/400'
  },
  {
    id: 5,
    industry: 'Manufacturing',
    capability: 'Intelligent Automation',
    impact: 'Operational Efficiency',
    title: 'Smart Factory Automation System',
    summary: 'Deployed IoT sensors and predictive maintenance algorithms to optimize production lines.',
    metric: '40% less downtime',
    image: 'https://picsum.photos/seed/rysun-impact-5/600/400'
  },
  {
    id: 6,
    industry: 'High-Tech',
    capability: 'Cloud Engineering',
    impact: 'Cost Optimization',
    title: 'Global Cloud Infrastructure Migration',
    summary: 'Migrated legacy on-premise systems to a scalable multi-cloud architecture with zero downtime.',
    metric: '35% cost savings',
    image: 'https://picsum.photos/seed/rysun-impact-6/600/400'
  },
  {
    id: 7,
    industry: 'Financial Services',
    capability: 'Data Engineering & Analytics',
    impact: 'Customer Experience',
    title: 'Unified Customer Data Platform',
    summary: 'Created a centralized data hub to provide a 360-degree view of customer financial health.',
    metric: '50% faster onboarding',
    image: 'https://picsum.photos/seed/rysun-impact-7/600/400'
  },
  {
    id: 8,
    industry: 'Healthcare & Life Sciences',
    capability: 'Digital Platforms',
    impact: 'Operational Efficiency',
    title: 'Telemedicine Platform Engineering',
    summary: 'Developed a secure, HIPAA-compliant telehealth application for remote patient care.',
    metric: '1M+ virtual visits',
    image: 'https://picsum.photos/seed/rysun-impact-8/600/400'
  },
  {
    id: 9,
    industry: 'Logistics & Supply Chain',
    capability: 'AI & Generative AI',
    impact: 'Cost Optimization',
    title: 'Dynamic Route Optimization Engine',
    summary: 'Implemented AI algorithms to optimize delivery routes based on real-time traffic and weather data.',
    metric: '20% fuel reduction',
    image: 'https://picsum.photos/seed/rysun-impact-9/600/400'
  }
];

const industries = [
  { name: 'Retail & E-commerce', icon: <ShoppingCart className="w-6 h-6" /> },
  { name: 'Healthcare & Life Sciences', icon: <HeartPulse className="w-6 h-6" /> },
  { name: 'Financial Services', icon: <Landmark className="w-6 h-6" /> },
  { name: 'High-Tech', icon: <Cpu className="w-6 h-6" /> },
  { name: 'Manufacturing', icon: <Factory className="w-6 h-6" /> },
  { name: 'Logistics & Supply Chain', icon: <Truck className="w-6 h-6" /> }
];

const capabilities = [
  'AI & Generative AI',
  'Data Engineering & Analytics',
  'Intelligent Automation',
  'Digital Platforms',
  'Cloud Engineering'
];

const businessImpacts = [
  'Revenue Growth',
  'Cost Optimization',
  'Operational Efficiency',
  'Customer Experience'
];

export default function ImpactStoriesPage() {
  const [activeIndustry, setActiveIndustry] = useState('All');
  const [activeCapability, setActiveCapability] = useState('All');
  const [activeImpact, setActiveImpact] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const filteredStories = allStories.filter(story => {
    const matchIndustry = activeIndustry === 'All' || story.industry === activeIndustry;
    const matchCapability = activeCapability === 'All' || story.capability === activeCapability;
    const matchImpact = activeImpact === 'All' || story.impact === activeImpact;
    const matchSearch = story.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                        story.summary.toLowerCase().includes(searchQuery.toLowerCase());
    return matchIndustry && matchCapability && matchImpact && matchSearch;
  });

  return (
    <div className="w-full bg-white font-sans text-slate-900">
      {/* 1. Hero / Page Introduction */}
      <section className="relative min-h-[60vh] lg:min-h-[70vh] flex items-center pt-20 pb-10 overflow-hidden bg-slate-900">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900" />
        <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] mix-blend-overlay" />
        
        <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-30">
          <svg className="absolute w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            <motion.path 
              d="M0,50 Q25,30 50,50 T100,50" 
              fill="none" 
              stroke="#3b82f6" 
              strokeWidth="0.5"
              animate={{ d: ["M0,50 Q25,30 50,50 T100,50", "M0,50 Q25,70 50,50 T100,50", "M0,50 Q25,30 50,50 T100,50"] }}
              transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
            />
          </svg>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center w-full">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-5 tracking-tight"
          >
            Impact Stories
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-base text-blue-100/80 max-w-3xl mx-auto mb-10 leading-relaxed"
          >
            Discover how organizations transform their business with AI, Data, and Digital innovation delivered by Rysun Labs.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto"
          >
            <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-5">
              <div className="text-3xl font-black text-blue-400 mb-1">100+</div>
              <div className="text-xs text-slate-300 font-medium uppercase tracking-wider">Transformation Programs Delivered</div>
            </div>
            <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-5">
              <div className="text-3xl font-black text-purple-400 mb-1">25+</div>
              <div className="text-xs text-slate-300 font-medium uppercase tracking-wider">Industries Served</div>
            </div>
            <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-5">
              <div className="text-3xl font-black text-emerald-400 mb-1">15+</div>
              <div className="text-xs text-slate-300 font-medium uppercase tracking-wider">AI Accelerators Developed</div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2. Featured Impact Stories */}
      <section className="py-24 bg-slate-50 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-slate-900">Featured Stories</h2>
          </div>
          <div className="space-y-12">
            {featuredStories.map((story, idx) => (
              <div key={story.id} className={`flex flex-col lg:flex-row gap-8 items-center ${idx % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}>
                <div className="w-full lg:w-1/2">
                  <div className="relative rounded-3xl overflow-hidden shadow-xl aspect-[4/3] group">
                    <img src={story.image} alt={story.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" referrerPolicy="no-referrer" />
                    <div className="absolute inset-0 bg-slate-900/10 group-hover:bg-transparent transition-colors" />
                  </div>
                </div>
                <div className="w-full lg:w-1/2 lg:px-8">
                  <div className="inline-flex items-center px-3 py-1 rounded-full bg-blue-50 text-blue-600 text-xs font-bold uppercase tracking-wider mb-6">
                    {story.industry}
                  </div>
                  <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6 leading-tight">{story.title}</h3>
                  <p className="text-lg text-slate-600 mb-8">{story.summary}</p>
                  
                  <div className="grid grid-cols-2 gap-6 mb-10">
                    {story.metrics.map((metric, mIdx) => (
                      <div key={mIdx} className="border-l-4 border-blue-500 pl-4">
                        <div className="text-3xl font-black text-slate-900 mb-1">{metric.value}</div>
                        <div className="text-sm text-slate-500 font-medium">{metric.label}</div>
                      </div>
                    ))}
                  </div>

                  <Link to={`/insights/impact-stories/${story.id}`} className="inline-flex items-center justify-center px-8 py-4 text-sm font-bold rounded-full text-white bg-blue-600 hover:bg-blue-700 transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5">
                    View Story <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Smart Filters and Search */}
      <section id="filters" className="py-8 bg-white border-b border-slate-100 sticky top-16 z-40 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
            <div className="relative w-full lg:w-96">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
              <input 
                type="text" 
                placeholder="Search stories..." 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all bg-slate-50 focus:bg-white"
              />
            </div>
            
            <div className="flex flex-wrap gap-4 w-full lg:w-auto">
              <select 
                value={activeIndustry}
                onChange={(e) => setActiveIndustry(e.target.value)}
                className="px-4 py-3 rounded-xl border border-slate-200 bg-white text-slate-700 font-medium focus:ring-2 focus:ring-blue-500 outline-none appearance-none pr-10 relative min-w-[160px]"
                style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%2364748b'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 9l-7 7-7-7'%3E%3C/path%3E%3C/svg%3E")`, backgroundPosition: 'right 1rem center', backgroundRepeat: 'no-repeat', backgroundSize: '1.2em' }}
              >
                <option value="All">All Industries</option>
                {industries.map(ind => <option key={ind.name} value={ind.name}>{ind.name}</option>)}
              </select>

              <select 
                value={activeCapability}
                onChange={(e) => setActiveCapability(e.target.value)}
                className="px-4 py-3 rounded-xl border border-slate-200 bg-white text-slate-700 font-medium focus:ring-2 focus:ring-blue-500 outline-none appearance-none pr-10 relative min-w-[160px]"
                style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%2364748b'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 9l-7 7-7-7'%3E%3C/path%3E%3C/svg%3E")`, backgroundPosition: 'right 1rem center', backgroundRepeat: 'no-repeat', backgroundSize: '1.2em' }}
              >
                <option value="All">All Capabilities</option>
                {capabilities.map(cap => <option key={cap} value={cap}>{cap}</option>)}
              </select>

              <select 
                value={activeImpact}
                onChange={(e) => setActiveImpact(e.target.value)}
                className="px-4 py-3 rounded-xl border border-slate-200 bg-white text-slate-700 font-medium focus:ring-2 focus:ring-blue-500 outline-none appearance-none pr-10 relative min-w-[160px]"
                style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%2364748b'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 9l-7 7-7-7'%3E%3C/path%3E%3C/svg%3E")`, backgroundPosition: 'right 1rem center', backgroundRepeat: 'no-repeat', backgroundSize: '1.2em' }}
              >
                <option value="All">All Impacts</option>
                {businessImpacts.map(imp => <option key={imp} value={imp}>{imp}</option>)}
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Impact Stories Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredStories.map(story => (
              <div key={story.id} className="group rounded-3xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-xl transition-all bg-white flex flex-col h-full">
                <div className="relative h-56 overflow-hidden">
                  <img src={story.image} alt={story.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" referrerPolicy="no-referrer" />
                  <div className="absolute top-4 left-4 flex flex-col gap-2">
                    <span className="bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-slate-800 shadow-sm w-max">
                      {story.industry}
                    </span>
                    <span className="bg-blue-600/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-white shadow-sm w-max">
                      {story.capability}
                    </span>
                  </div>
                </div>
                <div className="p-8 flex flex-col flex-grow">
                  <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors line-clamp-2">{story.title}</h3>
                  <p className="text-sm text-slate-600 mb-6 flex-grow line-clamp-2">{story.summary}</p>
                  
                  <div className="bg-slate-50 rounded-xl p-4 mb-6 border border-slate-100">
                    <div className="text-xs text-slate-500 font-semibold uppercase tracking-wider mb-1">Impact</div>
                    <div className="text-lg font-bold text-slate-900">{story.metric}</div>
                  </div>

                  <Link to={`/insights/impact-stories/${story.id}`} className="inline-flex items-center text-sm font-bold text-blue-600 hover:text-blue-700 mt-auto">
                    View Impact Story <ArrowRight className="w-4 h-4 ml-1" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
          {filteredStories.length === 0 && (
            <div className="text-center py-20">
              <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Search className="w-8 h-8 text-slate-400" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">No stories found</h3>
              <p className="text-slate-500">Try adjusting your filters or search query.</p>
            </div>
          )}
        </div>
      </section>

      {/* 5. Impact Snapshot Section */}
      <section className="py-20 bg-slate-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://picsum.photos/seed/rysun-snapshot/1920/1080?blur=4')] opacity-10 mix-blend-overlay" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-200 mb-2">120+</div>
              <div className="text-sm text-slate-400 font-semibold uppercase tracking-wider">Digital Transformation Projects</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-purple-200 mb-2">40+</div>
              <div className="text-sm text-slate-400 font-semibold uppercase tracking-wider">AI Implementations</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-emerald-200 mb-2">30%</div>
              <div className="text-sm text-slate-400 font-semibold uppercase tracking-wider">Avg. Efficiency Improvement</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-200 mb-2">20+</div>
              <div className="text-sm text-slate-400 font-semibold uppercase tracking-wider">Global Clients</div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Call-to-Action Section */}
      <section className="relative py-24 bg-blue-600 overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://picsum.photos/seed/rysun-cta-impact/1920/1080?blur=4')] opacity-10 bg-cover bg-center mix-blend-overlay" />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-blue-600 opacity-90" />
        
        {/* Subtle digital graphics */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <svg className="absolute w-full h-full opacity-20" viewBox="0 0 100 100" preserveAspectRatio="none">
            <path d="M0,100 L100,0" stroke="white" strokeWidth="0.5" strokeDasharray="2 4" />
            <path d="M0,80 L100,-20" stroke="white" strokeWidth="0.5" strokeDasharray="2 4" />
            <path d="M0,120 L100,20" stroke="white" strokeWidth="0.5" strokeDasharray="2 4" />
          </svg>
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-8 tracking-tight">
            Ready to Create Your Next Impact Story?
          </h2>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/contact-us" className="inline-flex items-center justify-center px-8 py-4 text-base font-bold rounded-full text-blue-600 bg-white hover:bg-slate-50 transition-all shadow-lg hover:shadow-xl hover:-translate-y-1">
              Talk to an Expert
            </Link>
            <Link to="/capabilities" className="inline-flex items-center justify-center px-8 py-4 text-base font-bold rounded-full text-white bg-transparent border-2 border-white/30 hover:bg-white/10 transition-all">
              Explore Our Capabilities
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
