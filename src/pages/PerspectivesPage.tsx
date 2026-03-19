import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, Search, Clock, BrainCircuit, Database, 
  Lightbulb, Cloud, Cpu, ShoppingCart, HeartPulse, 
  Landmark, Factory, Truck, Mail
} from 'lucide-react';

const featuredArticles = [
  {
    id: 101,
    topic: 'AI & Generative AI',
    title: 'The Rise of Generative AI Copilots in Enterprise Software',
    summary: 'How AI copilots are transforming productivity and knowledge management in modern enterprises.',
    readTime: '8 min read',
    image: 'https://picsum.photos/seed/rysun-pov-1/800/600'
  },
  {
    id: 102,
    topic: 'Data & Analytics',
    title: 'AI-Powered Customer Intelligence in Retail',
    summary: 'Using predictive analytics and machine learning to deliver hyper-personalized shopping experiences.',
    readTime: '6 min read',
    image: 'https://picsum.photos/seed/rysun-pov-2/800/600'
  },
  {
    id: 103,
    topic: 'Digital Transformation',
    title: 'Navigating the Shift to Composable Architecture',
    summary: 'Why enterprises are moving away from monoliths to agile, composable digital platforms.',
    readTime: '7 min read',
    image: 'https://picsum.photos/seed/rysun-pov-3/800/600'
  }
];

const allArticles = [
  {
    id: 1,
    topic: 'AI & Generative AI',
    industry: 'High-Tech',
    contentType: 'POV Articles',
    title: 'Generative AI Knowledge Assistants for Enterprises',
    summary: 'How GenAI-powered assistants are transforming enterprise knowledge management and employee productivity.',
    readTime: '6 min read',
    image: 'https://picsum.photos/seed/rysun-pov-4/600/400'
  },
  {
    id: 2,
    topic: 'Data & Analytics',
    industry: 'Financial Services',
    contentType: 'Strategy Briefs',
    title: 'Data Modernization for AI Readiness',
    summary: 'A strategic guide to preparing your legacy data infrastructure for advanced AI applications.',
    readTime: '10 min read',
    image: 'https://picsum.photos/seed/rysun-pov-5/600/400'
  },
  {
    id: 3,
    topic: 'Intelligent Automation',
    industry: 'Manufacturing',
    contentType: 'Industry Insights',
    title: 'Scaling Intelligent Automation in Manufacturing',
    summary: 'Overcoming the pilot purgatory to deploy RPA and AI-driven automation at scale.',
    readTime: '5 min read',
    image: 'https://picsum.photos/seed/rysun-pov-6/600/400'
  },
  {
    id: 4,
    topic: 'Cloud & Platforms',
    industry: 'Healthcare & Life Sciences',
    contentType: 'Technology Trends',
    title: 'Building Resilient Healthcare Cloud Platforms',
    summary: 'Ensuring compliance, security, and scalability in modern healthcare IT infrastructure.',
    readTime: '8 min read',
    image: 'https://picsum.photos/seed/rysun-pov-7/600/400'
  },
  {
    id: 5,
    topic: 'Digital Transformation',
    industry: 'Retail & E-commerce',
    contentType: 'POV Articles',
    title: 'The Future of Phygital Retail Experiences',
    summary: 'Bridging the gap between physical stores and digital commerce through immersive technologies.',
    readTime: '7 min read',
    image: 'https://picsum.photos/seed/rysun-pov-8/600/400'
  },
  {
    id: 6,
    topic: 'AI & Generative AI',
    industry: 'Logistics & Supply Chain',
    contentType: 'Strategy Briefs',
    title: 'Predictive Supply Chain Resilience',
    summary: 'Leveraging AI to forecast disruptions and dynamically reroute global supply chains.',
    readTime: '9 min read',
    image: 'https://picsum.photos/seed/rysun-pov-9/600/400'
  }
];

const trendingTopics = [
  { id: 201, title: 'AI Agents Transforming Customer Service', readTime: '5 min read', topic: 'AI & Generative AI' },
  { id: 202, title: 'Data Modernization for AI Readiness', readTime: '10 min read', topic: 'Data & Analytics' },
  { id: 203, title: 'Intelligent Automation in Financial Services', readTime: '7 min read', topic: 'Intelligent Automation' },
  { id: 204, title: 'Building AI-First Digital Platforms', readTime: '6 min read', topic: 'Cloud & Platforms' },
];

const topicsList = [
  { name: 'AI & Generative AI', icon: <BrainCircuit className="w-6 h-6" /> },
  { name: 'Data & Analytics', icon: <Database className="w-6 h-6" /> },
  { name: 'Digital Transformation', icon: <Lightbulb className="w-6 h-6" /> },
  { name: 'Cloud & Platforms', icon: <Cloud className="w-6 h-6" /> },
  { name: 'Intelligent Automation', icon: <Cpu className="w-6 h-6" /> }
];

const industriesList = [
  { name: 'Retail & E-commerce', icon: <ShoppingCart className="w-6 h-6" /> },
  { name: 'Healthcare & Life Sciences', icon: <HeartPulse className="w-6 h-6" /> },
  { name: 'Financial Services', icon: <Landmark className="w-6 h-6" /> },
  { name: 'High-Tech', icon: <Cpu className="w-6 h-6" /> },
  { name: 'Manufacturing', icon: <Factory className="w-6 h-6" /> },
  { name: 'Logistics & Supply Chain', icon: <Truck className="w-6 h-6" /> }
];

const contentTypesList = [
  'POV Articles',
  'Strategy Briefs',
  'Industry Insights',
  'Technology Trends'
];

export default function PerspectivesPage() {
  const [activeTopic, setActiveTopic] = useState('All');
  const [activeIndustry, setActiveIndustry] = useState('All');
  const [activeContentType, setActiveContentType] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const filteredArticles = allArticles.filter(article => {
    const matchTopic = activeTopic === 'All' || article.topic === activeTopic;
    const matchIndustry = activeIndustry === 'All' || article.industry === activeIndustry;
    const matchContentType = activeContentType === 'All' || article.contentType === activeContentType;
    const matchSearch = article.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                        article.summary.toLowerCase().includes(searchQuery.toLowerCase());
    return matchTopic && matchIndustry && matchContentType && matchSearch;
  });

  const scrollToFilters = () => {
    document.getElementById('filters')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="w-full bg-white font-sans text-slate-900">
      
      {/* 1. Hero Section */}
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
            Perspectives
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-base text-blue-100/80 max-w-3xl mx-auto mb-10 leading-relaxed"
          >
            Strategic viewpoints and expert insights from Rysun Labs leaders on AI, Data, Digital transformation, and emerging technologies shaping the future of business.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto"
          >
            {topicsList.map((topic, idx) => (
              <span key={idx} className="px-4 py-2 rounded-full bg-white/10 border border-white/20 text-sm font-medium text-white backdrop-blur-md">
                {topic.name}
              </span>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 2. Featured Perspectives */}
      <section className="py-24 bg-slate-50 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-slate-900">Featured Perspectives</h2>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Main Featured Article */}
            <div className="lg:col-span-8 group cursor-pointer">
              <div className="relative rounded-3xl overflow-hidden shadow-md hover:shadow-xl transition-all h-full bg-white border border-slate-100 flex flex-col">
                <div className="relative h-72 lg:h-96 overflow-hidden">
                  <img src={featuredArticles[0].image} alt={featuredArticles[0].title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" referrerPolicy="no-referrer" />
                  <div className="absolute top-6 left-6">
                    <span className="bg-blue-600/90 backdrop-blur-sm px-4 py-2 rounded-full text-xs font-bold text-white shadow-sm uppercase tracking-wider">
                      {featuredArticles[0].topic}
                    </span>
                  </div>
                </div>
                <div className="p-8 lg:p-10 flex flex-col flex-grow">
                  <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4 group-hover:text-blue-600 transition-colors leading-tight">
                    {featuredArticles[0].title}
                  </h3>
                  <p className="text-lg text-slate-600 mb-8 flex-grow">
                    {featuredArticles[0].summary}
                  </p>
                  <div className="flex items-center justify-between mt-auto pt-6 border-t border-slate-100">
                    <div className="flex items-center text-sm text-slate-500 font-medium">
                      <Clock className="w-4 h-4 mr-2" />
                      {featuredArticles[0].readTime}
                    </div>
                    <Link to={`/insights/perspectives-povs/${featuredArticles[0].id}`} className="inline-flex items-center text-sm font-bold text-blue-600 hover:text-blue-700">
                      Read Perspective <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* Secondary Featured Articles */}
            <div className="lg:col-span-4 flex flex-col gap-8">
              {featuredArticles.slice(1).map(article => (
                <div key={article.id} className="group cursor-pointer rounded-3xl overflow-hidden shadow-sm hover:shadow-lg transition-all bg-white border border-slate-100 flex flex-col h-full">
                  <div className="relative h-48 overflow-hidden">
                    <img src={article.image} alt={article.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" referrerPolicy="no-referrer" />
                    <div className="absolute top-4 left-4">
                      <span className="bg-slate-900/80 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-white shadow-sm uppercase tracking-wider">
                        {article.topic}
                      </span>
                    </div>
                  </div>
                  <div className="p-6 flex flex-col flex-grow">
                    <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors leading-snug">
                      {article.title}
                    </h3>
                    <p className="text-sm text-slate-600 mb-6 flex-grow line-clamp-2">
                      {article.summary}
                    </p>
                    <div className="flex items-center justify-between mt-auto pt-4 border-t border-slate-100">
                      <div className="flex items-center text-xs text-slate-500 font-medium">
                        <Clock className="w-3.5 h-3.5 mr-1.5" />
                        {article.readTime}
                      </div>
                      <Link to={`/insights/perspectives-povs/${article.id}`} className="inline-flex items-center text-xs font-bold text-blue-600 hover:text-blue-700">
                        Read <ArrowRight className="w-3.5 h-3.5 ml-1" />
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
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
                placeholder="Search perspectives..." 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all bg-slate-50 focus:bg-white"
              />
            </div>
            
            <div className="flex flex-wrap gap-4 w-full lg:w-auto">
              <select 
                value={activeTopic}
                onChange={(e) => setActiveTopic(e.target.value)}
                className="px-4 py-3 rounded-xl border border-slate-200 bg-white text-slate-700 font-medium focus:ring-2 focus:ring-blue-500 outline-none appearance-none pr-10 relative min-w-[160px]"
                style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%2364748b'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 9l-7 7-7-7'%3E%3C/path%3E%3C/svg%3E")`, backgroundPosition: 'right 1rem center', backgroundRepeat: 'no-repeat', backgroundSize: '1.2em' }}
              >
                <option value="All">All Topics</option>
                {topicsList.map(topic => <option key={topic.name} value={topic.name}>{topic.name}</option>)}
              </select>

              <select 
                value={activeIndustry}
                onChange={(e) => setActiveIndustry(e.target.value)}
                className="px-4 py-3 rounded-xl border border-slate-200 bg-white text-slate-700 font-medium focus:ring-2 focus:ring-blue-500 outline-none appearance-none pr-10 relative min-w-[160px]"
                style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%2364748b'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 9l-7 7-7-7'%3E%3C/path%3E%3C/svg%3E")`, backgroundPosition: 'right 1rem center', backgroundRepeat: 'no-repeat', backgroundSize: '1.2em' }}
              >
                <option value="All">All Industries</option>
                {industriesList.map(ind => <option key={ind.name} value={ind.name}>{ind.name}</option>)}
              </select>

              <select 
                value={activeContentType}
                onChange={(e) => setActiveContentType(e.target.value)}
                className="px-4 py-3 rounded-xl border border-slate-200 bg-white text-slate-700 font-medium focus:ring-2 focus:ring-blue-500 outline-none appearance-none pr-10 relative min-w-[160px]"
                style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%2364748b'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 9l-7 7-7-7'%3E%3C/path%3E%3C/svg%3E")`, backgroundPosition: 'right 1rem center', backgroundRepeat: 'no-repeat', backgroundSize: '1.2em' }}
              >
                <option value="All">All Content Types</option>
                {contentTypesList.map(type => <option key={type} value={type}>{type}</option>)}
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Perspectives Library (Main Grid) */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredArticles.map(article => (
              <div key={article.id} className="group rounded-3xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-xl transition-all bg-white flex flex-col h-full">
                <div className="relative h-56 overflow-hidden">
                  <img src={article.image} alt={article.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" referrerPolicy="no-referrer" />
                  <div className="absolute top-4 left-4 flex flex-col gap-2">
                    <span className="bg-blue-600/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-white shadow-sm w-max uppercase tracking-wider">
                      {article.topic}
                    </span>
                  </div>
                </div>
                <div className="p-8 flex flex-col flex-grow">
                  <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors line-clamp-2">{article.title}</h3>
                  <p className="text-sm text-slate-600 mb-8 flex-grow line-clamp-2">{article.summary}</p>
                  
                  <div className="flex items-center justify-between mt-auto pt-6 border-t border-slate-100">
                    <div className="flex items-center text-sm text-slate-500 font-medium">
                      <Clock className="w-4 h-4 mr-2" />
                      {article.readTime}
                    </div>
                    <Link to={`/insights/perspectives-povs/${article.id}`} className="inline-flex items-center text-sm font-bold text-blue-600 hover:text-blue-700">
                      Read Perspective <ArrowRight className="w-4 h-4 ml-1" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
          {filteredArticles.length === 0 && (
            <div className="text-center py-20">
              <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Search className="w-8 h-8 text-slate-400" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">No perspectives found</h3>
              <p className="text-slate-500">Try adjusting your filters or search query.</p>
            </div>
          )}
        </div>
      </section>

      {/* 5. Trending Insights Section */}
      <section className="py-20 bg-slate-50 border-y border-slate-100 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900">Trending Insights</h2>
          </div>
          
          <div className="flex overflow-x-auto pb-8 -mx-4 px-4 sm:mx-0 sm:px-0 gap-6 snap-x">
            {trendingTopics.map((trend) => (
              <div key={trend.id} className="min-w-[300px] md:min-w-[350px] snap-start bg-white p-8 rounded-3xl border border-slate-200 shadow-sm hover:shadow-md transition-all group cursor-pointer flex flex-col">
                <div className="text-xs font-bold text-blue-600 uppercase tracking-wider mb-4">{trend.topic}</div>
                <h3 className="text-lg font-bold text-slate-900 mb-6 group-hover:text-blue-600 transition-colors">{trend.title}</h3>
                <div className="mt-auto flex items-center justify-between">
                  <div className="flex items-center text-xs text-slate-500 font-medium">
                    <Clock className="w-3.5 h-3.5 mr-1.5" />
                    {trend.readTime}
                  </div>
                  <ArrowRight className="w-4 h-4 text-slate-300 group-hover:text-blue-600 transition-colors" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Subscribe to Insights */}
      <section className="py-24 bg-white border-t border-slate-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-6">
            <Mail className="w-8 h-8 text-blue-600" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Stay Ahead with Rysun Perspectives</h2>
          <p className="text-lg text-slate-600 mb-10 max-w-2xl mx-auto">
            Get the latest insights on AI, Data, and Digital transformation delivered directly to your inbox.
          </p>
          <form className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto" onSubmit={(e) => e.preventDefault()}>
            <input 
              type="email" 
              placeholder="Enter your business email" 
              required
              className="flex-grow px-6 py-4 rounded-full border border-slate-200 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
            />
            <button 
              type="submit"
              className="px-8 py-4 rounded-full bg-blue-600 text-white font-bold hover:bg-blue-700 transition-colors shadow-md hover:shadow-lg whitespace-nowrap"
            >
              Subscribe Now
            </button>
          </form>
          <p className="text-xs text-slate-400 mt-4">
            By subscribing, you agree to our Privacy Policy and Terms of Service.
          </p>
        </div>
      </section>

      {/* 9. Call-to-Action Section */}
      <section className="relative py-24 bg-slate-900 overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://picsum.photos/seed/rysun-cta-pov/1920/1080?blur=4')] opacity-10 bg-cover bg-center mix-blend-overlay" />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-indigo-950 to-slate-900 opacity-90" />
        
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <svg className="absolute w-full h-full opacity-20" viewBox="0 0 100 100" preserveAspectRatio="none">
            <path d="M0,100 L100,0" stroke="#3b82f6" strokeWidth="0.5" strokeDasharray="2 4" />
            <path d="M0,80 L100,-20" stroke="#8b5cf6" strokeWidth="0.5" strokeDasharray="2 4" />
          </svg>
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-8 tracking-tight">
            Looking for Strategic Guidance on AI and Digital Transformation?
          </h2>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/contact-us" className="inline-flex items-center justify-center px-8 py-4 text-base font-bold rounded-full text-slate-900 bg-white hover:bg-slate-50 transition-all shadow-lg hover:shadow-xl hover:-translate-y-1">
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
