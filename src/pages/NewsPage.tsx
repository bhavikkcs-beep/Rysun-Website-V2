import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Search, Filter, ChevronDown, ArrowRight, Calendar, 
  ExternalLink, Download, Mail, ChevronRight, Newspaper,
  Award, Globe, Building2, Megaphone
} from 'lucide-react';

export default function NewsPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [activeCategory, setActiveCategory] = useState('All');

  const categories = [
    'Company Announcements',
    'Partnerships',
    'Awards & Recognitions',
    'Media Coverage',
    'Corporate Milestones'
  ];

  const featuredNews = [
    {
      category: 'Company Announcements',
      title: 'Rysun Announces New AI Innovation Initiative',
      summary: 'Rysun expands its AI innovation capabilities to help enterprises accelerate digital transformation through advanced AI platforms and data intelligence.',
      date: 'March 2026',
      image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=1200'
    }
  ];

  const newsGrid = [
    {
      category: 'Partnerships',
      title: 'Rysun Expands Strategic Partnership to Accelerate AI Innovation',
      summary: 'The collaboration aims to enable enterprises to adopt scalable AI-driven digital transformation strategies.',
      date: 'March 2026',
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=800'
    },
    {
      category: 'Awards & Recognitions',
      title: 'Rysun Recognized as Leader in Digital Engineering',
      summary: 'Top industry analysts highlight Rysun\'s exceptional delivery and innovation in digital platform engineering.',
      date: 'February 2026',
      image: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&q=80&w=800'
    },
    {
      category: 'Corporate Milestones',
      title: 'Rysun Opens New Innovation Hub in Europe',
      summary: 'Expanding our global footprint to better serve European enterprise clients with localized AI and data expertise.',
      date: 'January 2026',
      image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=800'
    },
    {
      category: 'Company Announcements',
      title: 'Launch of Next-Gen Data Analytics Platform',
      summary: 'Empowering businesses to make real-time, data-driven decisions with our new proprietary analytics suite.',
      date: 'December 2025',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800'
    },
    {
      category: 'Media Coverage',
      title: 'CEO Discusses the Future of AI in Enterprise',
      summary: 'An exclusive interview on how artificial intelligence is reshaping the landscape of global business operations.',
      date: 'November 2025',
      image: 'https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&q=80&w=800'
    },
    {
      category: 'Partnerships',
      title: 'Strategic Alliance with Leading Cloud Provider',
      summary: 'A new partnership to deliver seamless, secure, and scalable cloud infrastructure solutions to our clients.',
      date: 'October 2025',
      image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=800'
    }
  ];

  const pressReleases = [
    {
      title: 'Rysun Celebrates 25 Years of Innovation and Digital Excellence',
      date: 'January 2026',
      description: 'Marking a quarter-century of delivering transformative technology solutions to global enterprises.'
    },
    {
      title: 'Rysun Reports Record Growth in AI and Data Services for Q4',
      date: 'December 2025',
      description: 'Strong demand for intelligent automation drives unprecedented growth in the final quarter.'
    },
    {
      title: 'Rysun Acquires Boutique Data Science Firm to Enhance Capabilities',
      date: 'September 2025',
      description: 'Strategic acquisition bolsters Rysun\'s position as a leader in advanced analytics and machine learning.'
    }
  ];

  const mediaMentions = [
    {
      outlet: 'Tech Insider',
      headline: 'Tech industry media highlights Rysun’s leadership in AI-powered enterprise solutions.',
      excerpt: 'In a recent industry report, Rysun Labs was praised for its innovative approach to integrating AI into legacy enterprise systems, significantly improving operational efficiency.',
      link: '#'
    },
    {
      outlet: 'Global Business Review',
      headline: 'How Rysun is Shaping the Future of Digital Transformation',
      excerpt: 'An in-depth look at Rysun\'s methodology for guiding Fortune 500 companies through complex digital overhauls.',
      link: '#'
    },
    {
      outlet: 'Data & Analytics Today',
      headline: 'Rysun\'s New Data Platform Sets Industry Standard',
      excerpt: 'Reviewers are calling Rysun\'s latest data engineering platform a "game-changer" for real-time business intelligence.',
      link: '#'
    }
  ];

  const categoryIcons: Record<string, React.ReactNode> = {
    'Company Announcements': <Megaphone className="w-8 h-8" />,
    'Partnerships': <Globe className="w-8 h-8" />,
    'Awards & Recognitions': <Award className="w-8 h-8" />,
    'Media Coverage': <Newspaper className="w-8 h-8" />,
    'Corporate Milestones': <Building2 className="w-8 h-8" />
  };

  return (
    <div className="w-full bg-slate-50 font-sans text-slate-900">
      
      {/* 1. Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden bg-rysun-darkpurple text-white">
        <div className="absolute inset-0 bg-gradient-to-br from-rysun-darkpurple via-rysun-blue to-slate-900 opacity-90" />
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMjAiIGN5PSIyMCIgcj0iMSIgZmlsbD0icmdiYSgyNTUsIDI1NSwgMjU1LCAwLjA1KSIvPjwvc3ZnPg==')] opacity-20" />
        
        {/* Abstract Shapes */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-rysun-lightblue rounded-full mix-blend-multiply filter blur-[128px] opacity-40 animate-pulse" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-rysun-orange rounded-full mix-blend-multiply filter blur-[128px] opacity-20" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl"
          >
            <h1 className="text-5xl md:text-7xl font-extrabold mb-6 tracking-tight">News</h1>
            <p className="text-xl md:text-2xl text-slate-200 mb-10 leading-relaxed font-light">
              Stay updated with the latest announcements, partnerships, recognitions, and milestones from Rysun as we continue to innovate in AI, Data, and Digital transformation.
            </p>
            
            <div className="flex flex-wrap gap-3">
              {categories.map((cat, idx) => (
                <span key={idx} className="px-4 py-2 rounded-full bg-white/10 border border-white/20 text-sm font-medium backdrop-blur-sm hover:bg-white/20 transition-colors cursor-pointer">
                  {cat}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2. Featured News */}
      <section className="py-20 bg-white relative -mt-10 rounded-t-[3rem] z-20 shadow-[0_-10px_40px_rgba(0,0,0,0.05)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-slate-900 flex items-center gap-3">
              <span className="w-8 h-1 bg-rysun-blue rounded-full"></span>
              Featured News
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-8">
            {featuredNews.map((news, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="group relative rounded-3xl overflow-hidden shadow-xl border border-slate-100 flex flex-col md:flex-row bg-slate-50"
              >
                <div className="w-full md:w-1/2 relative overflow-hidden aspect-video md:aspect-auto">
                  <div className="absolute inset-0 bg-slate-900/20 group-hover:bg-transparent transition-colors z-10" />
                  <img 
                    src={news.image} 
                    alt={news.title} 
                    className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="w-full md:w-1/2 p-8 md:p-12 flex flex-col justify-center bg-white relative">
                  <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-rysun-blue to-rysun-lightblue" />
                  <div className="flex items-center gap-4 mb-6">
                    <span className="px-4 py-1.5 rounded-full bg-rysun-blue/10 text-rysun-blue text-sm font-bold tracking-wide uppercase">
                      {news.category}
                    </span>
                    <span className="text-slate-500 text-sm font-medium flex items-center gap-1.5">
                      <Calendar className="w-4 h-4" /> {news.date}
                    </span>
                  </div>
                  <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 leading-tight group-hover:text-rysun-blue transition-colors">
                    {news.title}
                  </h3>
                  <p className="text-lg text-slate-600 mb-8 leading-relaxed line-clamp-2">
                    {news.summary}
                  </p>
                  <Link to="#" className="inline-flex items-center gap-2 text-rysun-blue font-bold text-lg hover:text-rysun-darkpurple transition-colors w-max">
                    Read More <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Smart Filters and Search */}
      <section className="py-8 bg-slate-50 border-y border-slate-200 sticky top-16 z-30 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-4">
            
            {/* Search */}
            <div className="relative w-full lg:w-1/3">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
              <input 
                type="text" 
                placeholder="Search news..." 
                className="w-full pl-12 pr-4 py-3 rounded-xl border border-slate-300 bg-white focus:outline-none focus:ring-2 focus:ring-rysun-blue focus:border-transparent transition-all shadow-sm"
              />
            </div>

            {/* Filters */}
            <div className="flex flex-wrap items-center gap-3 w-full lg:w-auto">
              <div className="relative flex-1 lg:flex-none">
                <select className="w-full appearance-none pl-4 pr-10 py-3 rounded-xl border border-slate-300 bg-white text-slate-700 font-medium focus:outline-none focus:ring-2 focus:ring-rysun-blue shadow-sm cursor-pointer">
                  <option value="">Category</option>
                  <option value="Company Announcements">Company Announcements</option>
                  <option value="Partnerships">Partnerships</option>
                  <option value="Awards & Recognitions">Awards & Recognitions</option>
                  <option value="Media Coverage">Media Coverage</option>
                  <option value="Event Participation">Event Participation</option>
                </select>
                <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500 pointer-events-none" />
              </div>

              <div className="relative flex-1 lg:flex-none">
                <select className="w-full appearance-none pl-4 pr-10 py-3 rounded-xl border border-slate-300 bg-white text-slate-700 font-medium focus:outline-none focus:ring-2 focus:ring-rysun-blue shadow-sm cursor-pointer">
                  <option value="">Year</option>
                  <option value="2026">2026</option>
                  <option value="2025">2025</option>
                  <option value="2024">2024</option>
                  <option value="Earlier">Earlier</option>
                </select>
                <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500 pointer-events-none" />
              </div>

              <div className="relative flex-1 lg:flex-none">
                <select className="w-full appearance-none pl-4 pr-10 py-3 rounded-xl border border-slate-300 bg-white text-slate-700 font-medium focus:outline-none focus:ring-2 focus:ring-rysun-blue shadow-sm cursor-pointer">
                  <option value="">Region</option>
                  <option value="Global">Global</option>
                  <option value="North America">North America</option>
                  <option value="India">India</option>
                </select>
                <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500 pointer-events-none" />
              </div>

              <div className="relative flex-1 lg:flex-none">
                <select className="w-full appearance-none pl-4 pr-10 py-3 rounded-xl border border-slate-300 bg-white text-slate-700 font-medium focus:outline-none focus:ring-2 focus:ring-rysun-blue shadow-sm cursor-pointer">
                  <option value="Latest">Sort: Latest</option>
                  <option value="Most Viewed">Sort: Most Viewed</option>
                </select>
                <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500 pointer-events-none" />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 4. News Library (Main Grid) */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {newsGrid.map((news, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl border border-slate-100 transition-all flex flex-col h-full"
              >
                <div className="relative h-56 overflow-hidden">
                  <img 
                    src={news.image} 
                    alt={news.title} 
                    className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 rounded-full bg-white/90 backdrop-blur-sm text-rysun-blue text-xs font-bold uppercase tracking-wider shadow-sm">
                      {news.category}
                    </span>
                  </div>
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <div className="text-slate-500 text-sm font-medium flex items-center gap-1.5 mb-3">
                    <Calendar className="w-4 h-4" /> {news.date}
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-rysun-blue transition-colors line-clamp-2">
                    {news.title}
                  </h3>
                  <p className="text-slate-600 mb-6 line-clamp-2 flex-grow">
                    {news.summary}
                  </p>
                  <Link to="#" className="inline-flex items-center gap-2 text-rysun-blue font-bold hover:text-rysun-darkpurple transition-colors mt-auto">
                    Read More <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
          
          <div className="mt-16 text-center">
            <button className="px-8 py-3 bg-white border-2 border-slate-200 text-slate-700 rounded-full font-bold hover:border-rysun-blue hover:text-rysun-blue transition-colors shadow-sm">
              Load More News
            </button>
          </div>
        </div>
      </section>

      {/* 5. Press Releases Section */}
      <section className="py-24 bg-white border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div>
              <h2 className="text-3xl font-bold text-slate-900 flex items-center gap-3 mb-4">
                <span className="w-8 h-1 bg-rysun-orange rounded-full"></span>
                Press Releases
              </h2>
              <p className="text-lg text-slate-600 max-w-2xl">
                Official statements and announcements from Rysun Labs.
              </p>
            </div>
            <Link to="#" className="text-rysun-blue font-bold hover:underline flex items-center gap-2">
              View All Releases <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="space-y-4">
            {pressReleases.map((release, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="group flex flex-col md:flex-row md:items-center justify-between p-6 md:p-8 rounded-2xl bg-slate-50 border border-slate-100 hover:bg-white hover:shadow-lg hover:border-slate-200 transition-all gap-6"
              >
                <div className="flex-grow">
                  <div className="text-slate-500 text-sm font-medium flex items-center gap-1.5 mb-2">
                    <Calendar className="w-4 h-4" /> Published: {release.date}
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold text-slate-900 mb-2 group-hover:text-rysun-blue transition-colors">
                    {release.title}
                  </h3>
                  <p className="text-slate-600">
                    {release.description}
                  </p>
                </div>
                <div className="flex-shrink-0 flex gap-3">
                  <Link to="#" className="inline-flex items-center justify-center px-6 py-3 bg-rysun-blue text-white rounded-full font-bold hover:bg-rysun-darkpurple transition-colors">
                    Read Release
                  </Link>
                  <Link to="#" className="inline-flex items-center justify-center p-3 bg-white border border-slate-200 text-slate-600 rounded-full hover:bg-slate-50 hover:text-rysun-blue transition-colors" title="Download PDF">
                    <Download className="w-5 h-5" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Media Mentions */}
      <section className="py-24 bg-slate-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-rysun-darkpurple to-slate-900 opacity-90" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Rysun in the News</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-rysun-lightblue to-rysun-blue mx-auto rounded-full" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {mediaMentions.map((mention, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white/5 border border-white/10 p-8 rounded-3xl backdrop-blur-sm hover:bg-white/10 transition-colors group flex flex-col h-full"
              >
                <div className="text-rysun-lightblue font-bold text-sm tracking-widest uppercase mb-4 flex items-center gap-2">
                  <ExternalLink className="w-4 h-4" /> {mention.outlet}
                </div>
                <h3 className="text-xl font-bold mb-4 group-hover:text-white text-slate-100 leading-snug">
                  "{mention.headline}"
                </h3>
                <p className="text-slate-400 mb-8 flex-grow">
                  {mention.excerpt}
                </p>
                <Link to={mention.link} className="inline-flex items-center gap-2 text-white font-medium hover:text-rysun-lightblue transition-colors mt-auto">
                  Read Full Article <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Explore by Category */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Explore by Category</h2>
            <p className="text-lg text-slate-600">Browse our newsroom by specific topics and areas of interest.</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
            {categories.map((cat, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
                className="group cursor-pointer bg-white p-6 rounded-2xl border border-slate-200 hover:border-rysun-blue hover:shadow-lg transition-all text-center flex flex-col items-center justify-center gap-4 aspect-square"
              >
                <div className="w-16 h-16 rounded-full bg-slate-50 flex items-center justify-center text-slate-400 group-hover:bg-rysun-blue/10 group-hover:text-rysun-blue transition-colors">
                  {categoryIcons[cat]}
                </div>
                <h3 className="font-bold text-slate-900 group-hover:text-rysun-blue transition-colors text-sm md:text-base">
                  {cat}
                </h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. Media Contact Section */}
      <section className="py-20 bg-white border-t border-slate-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="w-20 h-20 bg-rysun-blue/10 rounded-full flex items-center justify-center mx-auto mb-8">
            <Mail className="w-10 h-10 text-rysun-blue" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">Media & Press Inquiries</h2>
          <p className="text-xl text-slate-600 mb-10 leading-relaxed">
            For press requests, interviews, or additional information about Rysun, please contact our communications team.
          </p>
          <button className="px-8 py-4 bg-slate-900 text-white rounded-full font-bold hover:bg-slate-800 transition-all flex items-center gap-2 mx-auto shadow-lg hover:shadow-xl">
            Contact Media Team <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </section>

      {/* 9. Final Call-to-Action Section */}
      <section className="py-24 bg-gradient-to-br from-rysun-blue to-rysun-darkpurple text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMjAiIGN5PSIyMCIgcj0iMSIgZmlsbD0icmdiYSgyNTUsIDI1NSwgMjU1LCAwLjA1KSIvPjwvc3ZnPg==')] opacity-20" />
        
        {/* Abstract Shapes */}
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-rysun-lightblue rounded-full mix-blend-multiply filter blur-[100px] opacity-50" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-rysun-orange rounded-full mix-blend-multiply filter blur-[100px] opacity-30" />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-10">Discover How Rysun is Driving Innovation</h2>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/insights/impact-stories" className="px-8 py-4 bg-white text-rysun-blue rounded-full font-bold hover:bg-slate-100 transition-all flex items-center justify-center gap-2 shadow-lg">
              Explore Impact Stories <ArrowRight className="w-5 h-5" />
            </Link>
            <Link to="/insights/perspectives" className="px-8 py-4 bg-transparent border-2 border-white/50 text-white rounded-full font-bold hover:bg-white/10 transition-all flex items-center justify-center gap-2">
              View Perspectives <ExternalLink className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
