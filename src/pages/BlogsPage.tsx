import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, Search, Clock, User, Calendar, BrainCircuit, 
  Database, BarChart, Cloud, Cpu, ShoppingCart, HeartPulse, 
  Landmark, Factory, Truck, Mail, Zap
} from 'lucide-react';

const featuredBlogs = [
  {
    id: 301,
    category: 'AI & Generative AI',
    title: 'How AI Copilots Are Transforming Enterprise Productivity',
    excerpt: 'Generative AI copilots are becoming the next productivity layer across enterprise applications, reshaping how teams collaborate and execute tasks.',
    author: 'Rysun AI Team',
    date: 'Mar 15, 2026',
    readTime: '6 min read',
    image: 'https://picsum.photos/seed/rysun-blog-1/800/600'
  },
  {
    id: 302,
    category: 'Data & Analytics',
    title: 'Building Data Platforms for AI-Driven Enterprises',
    excerpt: 'Modern data architectures are essential for enabling scalable AI and advanced analytics. Learn the key components of a future-ready data platform.',
    author: 'Data Engineering Practice',
    date: 'Mar 10, 2026',
    readTime: '8 min read',
    image: 'https://picsum.photos/seed/rysun-blog-2/800/600'
  },
  {
    id: 303,
    category: 'Digital Engineering',
    title: 'The Shift to Composable Digital Architectures',
    excerpt: 'Why leading organizations are moving away from monolithic systems to agile, composable digital platforms for faster time-to-market.',
    author: 'Digital Strategy Team',
    date: 'Mar 05, 2026',
    readTime: '7 min read',
    image: 'https://picsum.photos/seed/rysun-blog-3/800/600'
  }
];

const allBlogs = [
  {
    id: 1,
    topic: 'AI & Generative AI',
    industry: 'High-Tech',
    contentType: 'Technical Deep Dive',
    title: 'Building AI-Powered Knowledge Assistants for Enterprises',
    summary: 'Explore how generative AI and semantic search technologies enable smarter enterprise knowledge systems.',
    author: 'Rysun AI Team',
    date: 'Feb 28, 2026',
    readTime: '7 min read',
    image: 'https://picsum.photos/seed/rysun-blog-4/600/400'
  },
  {
    id: 2,
    topic: 'Intelligent Automation',
    industry: 'Financial Services',
    contentType: 'Industry Insight',
    title: 'Automating Compliance Workflows in Banking',
    summary: 'How intelligent automation is reducing manual errors and accelerating regulatory compliance in financial institutions.',
    author: 'Automation Practice',
    date: 'Feb 22, 2026',
    readTime: '5 min read',
    image: 'https://picsum.photos/seed/rysun-blog-5/600/400'
  },
  {
    id: 3,
    topic: 'Cloud & DevOps',
    industry: 'Retail & E-commerce',
    contentType: 'How-To Guide',
    title: 'Scaling E-commerce Platforms for Peak Events',
    summary: 'A comprehensive guide to leveraging cloud-native architectures to handle massive traffic spikes during holiday sales.',
    author: 'Cloud Engineering',
    date: 'Feb 18, 2026',
    readTime: '9 min read',
    image: 'https://picsum.photos/seed/rysun-blog-6/600/400'
  },
  {
    id: 4,
    topic: 'Data & Analytics',
    industry: 'Healthcare & Life Sciences',
    contentType: 'AI Trends',
    title: 'Predictive Analytics in Patient Care',
    summary: 'Leveraging historical health data to predict patient outcomes and personalize treatment plans.',
    author: 'Healthcare Solutions',
    date: 'Feb 12, 2026',
    readTime: '6 min read',
    image: 'https://picsum.photos/seed/rysun-blog-7/600/400'
  },
  {
    id: 5,
    topic: 'Digital Engineering',
    industry: 'Manufacturing',
    contentType: 'Product Engineering',
    title: 'Digital Twins: Bridging Physical and Digital Manufacturing',
    summary: 'How digital twin technology is optimizing production lines and enabling predictive maintenance in smart factories.',
    author: 'IoT & Digital Team',
    date: 'Feb 05, 2026',
    readTime: '8 min read',
    image: 'https://picsum.photos/seed/rysun-blog-8/600/400'
  },
  {
    id: 6,
    topic: 'AI & Generative AI',
    industry: 'Logistics & Supply Chain',
    contentType: 'Industry Insight',
    title: 'Optimizing Supply Chains with Reinforcement Learning',
    summary: 'Using advanced AI models to dynamically adjust routing and inventory levels in unpredictable global markets.',
    author: 'Supply Chain AI Team',
    date: 'Jan 30, 2026',
    readTime: '7 min read',
    image: 'https://picsum.photos/seed/rysun-blog-9/600/400'
  }
];

const trendingBlogs = [
  { id: 401, title: 'Data Engineering for AI-Ready Enterprises', readTime: '8 min read', topic: 'Data & Analytics', date: 'Mar 12, 2026' },
  { id: 402, title: 'Intelligent Automation in Financial Services', readTime: '6 min read', topic: 'Intelligent Automation', date: 'Mar 08, 2026' },
  { id: 403, title: 'Designing Scalable AI Platforms', readTime: '9 min read', topic: 'AI & Generative AI', date: 'Mar 02, 2026' },
  { id: 404, title: 'The Future of AI Agents', readTime: '5 min read', topic: 'AI Trends', date: 'Feb 25, 2026' },
];

const topicsList = [
  { name: 'AI & Generative AI', icon: <BrainCircuit className="w-6 h-6" /> },
  { name: 'Data Engineering', icon: <Database className="w-6 h-6" /> },
  { name: 'Advanced Analytics', icon: <BarChart className="w-6 h-6" /> },
  { name: 'Digital Platforms', icon: <Zap className="w-6 h-6" /> },
  { name: 'Cloud & DevOps', icon: <Cloud className="w-6 h-6" /> },
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
  'Technical Deep Dive',
  'Industry Insight',
  'How-To Guide',
  'AI Trends',
  'Product Engineering'
];

export default function BlogsPage() {
  const [activeTopic, setActiveTopic] = useState('All');
  const [activeIndustry, setActiveIndustry] = useState('All');
  const [activeContentType, setActiveContentType] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [sortOption, setSortOption] = useState('Latest');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const filteredBlogs = allBlogs.filter(blog => {
    const matchTopic = activeTopic === 'All' || blog.topic === activeTopic;
    const matchIndustry = activeIndustry === 'All' || blog.industry === activeIndustry;
    const matchContentType = activeContentType === 'All' || blog.contentType === activeContentType;
    const matchSearch = blog.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                        blog.summary.toLowerCase().includes(searchQuery.toLowerCase());
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
            Rysun Blog
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-base text-blue-100/80 max-w-3xl mx-auto mb-10 leading-relaxed"
          >
            Insights, technology trends, and practical perspectives on AI, Data, Digital transformation, and enterprise innovation.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto"
          >
            {['AI & Generative AI', 'Data & Analytics', 'Digital Engineering', 'Intelligent Automation', 'Cloud & Platforms'].map((tag, idx) => (
              <span key={idx} className="px-4 py-2 rounded-full bg-white/10 border border-white/20 text-sm font-medium text-white backdrop-blur-md">
                {tag}
              </span>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 2. Featured Blog Posts */}
      <section className="py-24 bg-slate-50 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-slate-900">Featured Blogs</h2>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Main Featured Article */}
            <div className="lg:col-span-8 group cursor-pointer">
              <div className="relative rounded-3xl overflow-hidden shadow-md hover:shadow-xl transition-all h-full bg-white border border-slate-100 flex flex-col">
                <div className="relative h-72 lg:h-96 overflow-hidden">
                  <img src={featuredBlogs[0].image} alt={featuredBlogs[0].title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" referrerPolicy="no-referrer" />
                  <div className="absolute top-6 left-6">
                    <span className="bg-blue-600/90 backdrop-blur-sm px-4 py-2 rounded-full text-xs font-bold text-white shadow-sm uppercase tracking-wider">
                      {featuredBlogs[0].category}
                    </span>
                  </div>
                </div>
                <div className="p-8 lg:p-10 flex flex-col flex-grow">
                  <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4 group-hover:text-blue-600 transition-colors leading-tight">
                    {featuredBlogs[0].title}
                  </h3>
                  <p className="text-lg text-slate-600 mb-8 flex-grow">
                    {featuredBlogs[0].excerpt}
                  </p>
                  <div className="flex flex-wrap items-center gap-4 text-sm text-slate-500 font-medium mb-6">
                    <div className="flex items-center"><User className="w-4 h-4 mr-1.5" /> {featuredBlogs[0].author}</div>
                    <div className="flex items-center"><Calendar className="w-4 h-4 mr-1.5" /> {featuredBlogs[0].date}</div>
                    <div className="flex items-center"><Clock className="w-4 h-4 mr-1.5" /> {featuredBlogs[0].readTime}</div>
                  </div>
                  <div className="mt-auto pt-6 border-t border-slate-100">
                    <Link to={`/insights/blogs/${featuredBlogs[0].id}`} className="inline-flex items-center text-sm font-bold text-blue-600 hover:text-blue-700">
                      Read Blog <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* Secondary Featured Articles */}
            <div className="lg:col-span-4 flex flex-col gap-8">
              {featuredBlogs.slice(1).map(blog => (
                <div key={blog.id} className="group cursor-pointer rounded-3xl overflow-hidden shadow-sm hover:shadow-lg transition-all bg-white border border-slate-100 flex flex-col h-full">
                  <div className="relative h-48 overflow-hidden">
                    <img src={blog.image} alt={blog.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" referrerPolicy="no-referrer" />
                    <div className="absolute top-4 left-4">
                      <span className="bg-slate-900/80 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-white shadow-sm uppercase tracking-wider">
                        {blog.category}
                      </span>
                    </div>
                  </div>
                  <div className="p-6 flex flex-col flex-grow">
                    <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors leading-snug">
                      {blog.title}
                    </h3>
                    <p className="text-sm text-slate-600 mb-6 flex-grow line-clamp-2">
                      {blog.excerpt}
                    </p>
                    <div className="flex flex-wrap items-center gap-3 text-xs text-slate-500 font-medium mb-4">
                      <div className="flex items-center"><Calendar className="w-3.5 h-3.5 mr-1" /> {blog.date}</div>
                      <div className="flex items-center"><Clock className="w-3.5 h-3.5 mr-1" /> {blog.readTime}</div>
                    </div>
                    <div className="mt-auto pt-4 border-t border-slate-100">
                      <Link to={`/insights/blogs/${blog.id}`} className="inline-flex items-center text-xs font-bold text-blue-600 hover:text-blue-700">
                        Read Blog <ArrowRight className="w-3.5 h-3.5 ml-1" />
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
            <div className="relative w-full lg:w-80">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
              <input 
                type="text" 
                placeholder="Search blogs..." 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all bg-slate-50 focus:bg-white"
              />
            </div>
            
            <div className="flex flex-wrap gap-3 w-full lg:w-auto">
              <select 
                value={activeTopic}
                onChange={(e) => setActiveTopic(e.target.value)}
                className="px-4 py-3 rounded-xl border border-slate-200 bg-white text-slate-700 font-medium focus:ring-2 focus:ring-blue-500 outline-none appearance-none pr-10 relative min-w-[140px]"
                style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%2364748b'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 9l-7 7-7-7'%3E%3C/path%3E%3C/svg%3E")`, backgroundPosition: 'right 1rem center', backgroundRepeat: 'no-repeat', backgroundSize: '1.2em' }}
              >
                <option value="All">All Topics</option>
                {['AI & Generative AI', 'Data & Analytics', 'Digital Engineering', 'Intelligent Automation', 'Cloud & DevOps'].map(topic => <option key={topic} value={topic}>{topic}</option>)}
              </select>

              <select 
                value={activeIndustry}
                onChange={(e) => setActiveIndustry(e.target.value)}
                className="px-4 py-3 rounded-xl border border-slate-200 bg-white text-slate-700 font-medium focus:ring-2 focus:ring-blue-500 outline-none appearance-none pr-10 relative min-w-[140px]"
                style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%2364748b'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 9l-7 7-7-7'%3E%3C/path%3E%3C/svg%3E")`, backgroundPosition: 'right 1rem center', backgroundRepeat: 'no-repeat', backgroundSize: '1.2em' }}
              >
                <option value="All">All Industries</option>
                {industriesList.map(ind => <option key={ind.name} value={ind.name}>{ind.name}</option>)}
              </select>

              <select 
                value={activeContentType}
                onChange={(e) => setActiveContentType(e.target.value)}
                className="px-4 py-3 rounded-xl border border-slate-200 bg-white text-slate-700 font-medium focus:ring-2 focus:ring-blue-500 outline-none appearance-none pr-10 relative min-w-[140px]"
                style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%2364748b'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 9l-7 7-7-7'%3E%3C/path%3E%3C/svg%3E")`, backgroundPosition: 'right 1rem center', backgroundRepeat: 'no-repeat', backgroundSize: '1.2em' }}
              >
                <option value="All">All Content Types</option>
                {contentTypesList.map(type => <option key={type} value={type}>{type}</option>)}
              </select>

              <select 
                value={sortOption}
                onChange={(e) => setSortOption(e.target.value)}
                className="px-4 py-3 rounded-xl border border-slate-200 bg-white text-slate-700 font-medium focus:ring-2 focus:ring-blue-500 outline-none appearance-none pr-10 relative min-w-[120px]"
                style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%2364748b'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 9l-7 7-7-7'%3E%3C/path%3E%3C/svg%3E")`, backgroundPosition: 'right 1rem center', backgroundRepeat: 'no-repeat', backgroundSize: '1.2em' }}
              >
                <option value="Latest">Latest</option>
                <option value="Most Popular">Most Popular</option>
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Blog Library (Main Grid) */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredBlogs.map(blog => (
              <div key={blog.id} className="group rounded-3xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-xl transition-all bg-white flex flex-col h-full">
                <div className="relative h-56 overflow-hidden">
                  <img src={blog.image} alt={blog.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" referrerPolicy="no-referrer" />
                  <div className="absolute top-4 left-4 flex flex-col gap-2">
                    <span className="bg-blue-600/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-white shadow-sm w-max uppercase tracking-wider">
                      {blog.topic}
                    </span>
                  </div>
                </div>
                <div className="p-8 flex flex-col flex-grow">
                  <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors line-clamp-2">{blog.title}</h3>
                  <p className="text-sm text-slate-600 mb-6 flex-grow line-clamp-2">{blog.summary}</p>
                  
                  <div className="flex flex-col gap-2 mb-6">
                    <div className="text-sm font-medium text-slate-900">By {blog.author}</div>
                    <div className="flex items-center text-xs text-slate-500 font-medium">
                      {blog.date} <span className="mx-2">•</span> {blog.readTime}
                    </div>
                  </div>

                  <div className="mt-auto pt-4 border-t border-slate-100">
                    <Link to={`/insights/blogs/${blog.id}`} className="inline-flex items-center text-sm font-bold text-blue-600 hover:text-blue-700">
                      Read Blog <ArrowRight className="w-4 h-4 ml-1" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
          {filteredBlogs.length === 0 && (
            <div className="text-center py-20">
              <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Search className="w-8 h-8 text-slate-400" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">No blogs found</h3>
              <p className="text-slate-500">Try adjusting your filters or search query.</p>
            </div>
          )}
        </div>
      </section>

      {/* 5. Trending Blogs Section */}
      <section className="py-20 bg-slate-50 border-y border-slate-100 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900">Trending Blogs</h2>
          </div>
          
          <div className="flex overflow-x-auto pb-8 -mx-4 px-4 sm:mx-0 sm:px-0 gap-6 snap-x">
            {trendingBlogs.map((trend) => (
              <div key={trend.id} className="min-w-[300px] md:min-w-[350px] snap-start bg-white p-8 rounded-3xl border border-slate-200 shadow-sm hover:shadow-md transition-all group cursor-pointer flex flex-col">
                <div className="text-xs font-bold text-blue-600 uppercase tracking-wider mb-4">{trend.topic}</div>
                <h3 className="text-lg font-bold text-slate-900 mb-6 group-hover:text-blue-600 transition-colors">{trend.title}</h3>
                <div className="mt-auto flex items-center justify-between pt-4 border-t border-slate-100">
                  <div className="flex items-center text-xs text-slate-500 font-medium">
                    <Calendar className="w-3.5 h-3.5 mr-1" /> {trend.date}
                  </div>
                  <div className="flex items-center text-xs text-slate-500 font-medium">
                    <Clock className="w-3.5 h-3.5 mr-1" /> {trend.readTime}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Newsletter / Blog Subscription */}
      <section className="py-24 bg-white border-t border-slate-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-6">
            <Mail className="w-8 h-8 text-blue-600" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Stay Updated with the Rysun Blog</h2>
          <p className="text-lg text-slate-600 mb-10 max-w-2xl mx-auto">
            Get the latest insights on AI, Data, and Digital innovation delivered directly to your inbox.
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
        <div className="absolute inset-0 bg-[url('https://picsum.photos/seed/rysun-cta-blog/1920/1080?blur=4')] opacity-10 bg-cover bg-center mix-blend-overlay" />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-indigo-950 to-slate-900 opacity-90" />
        
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <svg className="absolute w-full h-full opacity-20" viewBox="0 0 100 100" preserveAspectRatio="none">
            <path d="M0,100 L100,0" stroke="#3b82f6" strokeWidth="0.5" strokeDasharray="2 4" />
            <path d="M0,80 L100,-20" stroke="#8b5cf6" strokeWidth="0.5" strokeDasharray="2 4" />
          </svg>
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-8 tracking-tight">
            Looking to Accelerate Your AI and Digital Transformation Journey?
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
