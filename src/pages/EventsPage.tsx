import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, Search, Calendar, Clock, MapPin, Video, 
  Users, BrainCircuit, Database, Lightbulb, Cloud, Cpu, 
  ShoppingCart, HeartPulse, Landmark, Factory, Truck, Mail, PlayCircle,
  MonitorPlay, Mic
} from 'lucide-react';

const featuredEvent = {
  title: 'AI Copilots for Enterprise Productivity',
  description: 'Explore how generative AI copilots are transforming enterprise productivity and knowledge management in this exclusive live session.',
  date: 'April 24, 2026',
  time: '11:00 AM EST',
  format: 'Live Webinar',
  speakers: 'Rysun AI Leadership Team',
  image: 'https://picsum.photos/seed/rysun-event-featured/1200/600',
  topic: 'AI & Generative AI'
};

const upcomingEvents = [
  {
    id: 501,
    topic: 'AI & Generative AI',
    title: 'Enterprise AI Copilots: The Next Productivity Revolution',
    description: 'Join us for a deep dive into implementing AI copilots securely within your enterprise architecture.',
    date: 'May 8, 2026',
    time: '10:00 AM EST',
    format: 'Live Webinar',
    speaker: 'Dr. Sarah Chen, Chief AI Officer',
    image: 'https://picsum.photos/seed/rysun-event-1/600/400'
  },
  {
    id: 502,
    topic: 'Data & Analytics',
    title: 'Modernizing Legacy Data for the AI Era',
    description: 'A strategic workshop on migrating legacy data systems to scalable, AI-ready cloud architectures.',
    date: 'May 15, 2026',
    time: '1:00 PM EST',
    format: 'Virtual Workshop',
    speaker: 'James Wilson, Head of Data Engineering',
    image: 'https://picsum.photos/seed/rysun-event-2/600/400'
  },
  {
    id: 503,
    topic: 'Digital Transformation',
    title: 'The Composable Enterprise Summit',
    description: 'Discover how leading organizations are building agile, resilient digital platforms using composable architecture.',
    date: 'June 2-3, 2026',
    time: '9:00 AM EST',
    format: 'Virtual Conference',
    speaker: 'Rysun Digital Strategy Team',
    image: 'https://picsum.photos/seed/rysun-event-3/600/400'
  }
];

const onDemandWebinars = [
  {
    id: 601,
    topic: 'Data & Analytics',
    title: 'Building AI-Ready Data Platforms',
    summary: 'Learn how modern data architectures enable scalable AI and advanced analytics.',
    duration: '45 minutes',
    speaker: 'Data Engineering Practice',
    image: 'https://picsum.photos/seed/rysun-webinar-1/600/400'
  },
  {
    id: 602,
    topic: 'Intelligent Automation',
    title: 'Scaling RPA in Financial Services',
    summary: 'Overcoming pilot purgatory to deploy intelligent automation at scale across banking operations.',
    duration: '50 minutes',
    speaker: 'Automation Center of Excellence',
    image: 'https://picsum.photos/seed/rysun-webinar-2/600/400'
  },
  {
    id: 603,
    topic: 'Cloud & Platforms',
    title: 'Cloud Security Posture Management',
    summary: 'Best practices for securing multi-cloud environments against emerging threats.',
    duration: '60 minutes',
    speaker: 'Cloud Security Team',
    image: 'https://picsum.photos/seed/rysun-webinar-3/600/400'
  }
];

const pastEvents = [
  {
    id: 701,
    title: 'Global Digital Transformation Summit 2025',
    date: 'Nov 12-14, 2025',
    location: 'Las Vegas, NV',
    recap: 'Rysun leaders presented keynote sessions on the future of composable architecture and AI-driven operations.',
  },
  {
    id: 702,
    title: 'AI in Healthcare Symposium',
    date: 'Sep 28, 2025',
    location: 'Boston, MA',
    recap: 'An exclusive panel discussion on leveraging predictive analytics for personalized patient care.',
  },
  {
    id: 703,
    title: 'Retail Innovation Forum',
    date: 'Aug 15, 2025',
    location: 'Virtual Event',
    recap: 'Exploring the convergence of physical and digital retail experiences through immersive technologies.',
  }
];

const speakersList = [
  {
    name: 'Dr. Sarah Chen',
    role: 'Chief AI Officer',
    expertise: 'Generative AI, Machine Learning',
    image: 'https://picsum.photos/seed/speaker1/200/200'
  },
  {
    name: 'James Wilson',
    role: 'Head of Data Engineering',
    expertise: 'Cloud Data Platforms, Analytics',
    image: 'https://picsum.photos/seed/speaker2/200/200'
  },
  {
    name: 'Elena Rodriguez',
    role: 'VP, Digital Transformation',
    expertise: 'Digital Strategy, Composable Architecture',
    image: 'https://picsum.photos/seed/speaker3/200/200'
  },
  {
    name: 'Michael Chang',
    role: 'Director of Intelligent Automation',
    expertise: 'RPA, Process Mining',
    image: 'https://picsum.photos/seed/speaker4/200/200'
  }
];

const topicsList = [
  { name: 'AI & Generative AI', icon: <BrainCircuit className="w-6 h-6" /> },
  { name: 'Data & Analytics', icon: <Database className="w-6 h-6" /> },
  { name: 'Digital Transformation', icon: <Lightbulb className="w-6 h-6" /> },
  { name: 'Cloud & Platforms', icon: <Cloud className="w-6 h-6" /> },
  { name: 'Intelligent Automation', icon: <Cpu className="w-6 h-6" /> }
];

const eventTypesList = [
  'Webinar',
  'Virtual Event',
  'Conference',
  'Workshop',
  'Panel Discussion'
];

const industriesList = [
  'Retail & E-commerce',
  'Healthcare & Life Sciences',
  'Financial Services',
  'High-Tech',
  'Manufacturing'
];

export default function EventsPage() {
  const [activeTopic, setActiveTopic] = useState('All');
  const [activeEventType, setActiveEventType] = useState('All');
  const [activeIndustry, setActiveIndustry] = useState('All');
  const [activeStatus, setActiveStatus] = useState('Upcoming');
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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
            <motion.circle cx="25" cy="30" r="1" fill="#8b5cf6" animate={{ opacity: [0.2, 1, 0.2] }} transition={{ duration: 3, repeat: Infinity }} />
            <motion.circle cx="75" cy="70" r="1" fill="#3b82f6" animate={{ opacity: [0.2, 1, 0.2] }} transition={{ duration: 4, repeat: Infinity, delay: 1 }} />
            <motion.circle cx="50" cy="50" r="1.5" fill="#ec4899" animate={{ opacity: [0.2, 1, 0.2], scale: [1, 1.5, 1] }} transition={{ duration: 2, repeat: Infinity }} />
          </svg>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center w-full">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-5 tracking-tight"
          >
            Events
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-base text-blue-100/80 max-w-3xl mx-auto mb-10 leading-relaxed"
          >
            Join Rysun experts and industry leaders to explore the latest innovations in AI, Data, and Digital transformation through live events and on-demand webinars.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto"
          >
            {['AI & Generative AI', 'Data & Analytics', 'Digital Transformation', 'Intelligent Automation', 'Industry Innovation'].map((tag, idx) => (
              <span key={idx} className="px-4 py-2 rounded-full bg-white/10 border border-white/20 text-sm font-medium text-white backdrop-blur-md">
                {tag}
              </span>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 2. Featured Upcoming Event */}
      <section className="py-24 bg-slate-50 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative rounded-3xl overflow-hidden shadow-xl bg-white border border-slate-100 flex flex-col lg:flex-row group">
            <div className="w-full lg:w-1/2 relative overflow-hidden min-h-[300px] lg:min-h-[400px]">
              <img src={featuredEvent.image} alt={featuredEvent.title} className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" referrerPolicy="no-referrer" />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent lg:bg-gradient-to-r lg:from-transparent lg:via-slate-900/20 lg:to-slate-900/80" />
              <div className="absolute top-6 left-6">
                <span className="bg-blue-600/90 backdrop-blur-sm px-4 py-2 rounded-full text-xs font-bold text-white shadow-sm uppercase tracking-wider flex items-center">
                  <MonitorPlay className="w-4 h-4 mr-2" />
                  {featuredEvent.format}
                </span>
              </div>
            </div>
            <div className="w-full lg:w-1/2 p-8 lg:p-12 flex flex-col justify-center">
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-blue-50 text-blue-600 text-xs font-bold uppercase tracking-wider mb-6 w-max">
                {featuredEvent.topic}
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 leading-tight">
                {featuredEvent.title}
              </h2>
              <p className="text-lg text-slate-600 mb-8">
                {featuredEvent.description}
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
                <div className="flex items-start">
                  <Calendar className="w-5 h-5 text-blue-600 mr-3 mt-0.5" />
                  <div>
                    <div className="text-sm font-bold text-slate-900">{featuredEvent.date}</div>
                    <div className="text-sm text-slate-500">{featuredEvent.time}</div>
                  </div>
                </div>
                <div className="flex items-start">
                  <Users className="w-5 h-5 text-blue-600 mr-3 mt-0.5" />
                  <div>
                    <div className="text-sm font-bold text-slate-900">Speakers</div>
                    <div className="text-sm text-slate-500">{featuredEvent.speakers}</div>
                  </div>
                </div>
              </div>

              <div>
                <button className="inline-flex items-center justify-center px-8 py-4 text-sm font-bold rounded-full text-white bg-blue-600 hover:bg-blue-700 transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5">
                  Register Now <ArrowRight className="ml-2 w-4 h-4" />
                </button>
              </div>
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
                placeholder="Search events..." 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all bg-slate-50 focus:bg-white"
              />
            </div>
            
            <div className="flex flex-wrap gap-3 w-full lg:w-auto">
              <select 
                value={activeEventType}
                onChange={(e) => setActiveEventType(e.target.value)}
                className="px-4 py-3 rounded-xl border border-slate-200 bg-white text-slate-700 font-medium focus:ring-2 focus:ring-blue-500 outline-none appearance-none pr-10 relative min-w-[140px]"
                style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%2364748b'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 9l-7 7-7-7'%3E%3C/path%3E%3C/svg%3E")`, backgroundPosition: 'right 1rem center', backgroundRepeat: 'no-repeat', backgroundSize: '1.2em' }}
              >
                <option value="All">All Event Types</option>
                {eventTypesList.map(type => <option key={type} value={type}>{type}</option>)}
              </select>

              <select 
                value={activeTopic}
                onChange={(e) => setActiveTopic(e.target.value)}
                className="px-4 py-3 rounded-xl border border-slate-200 bg-white text-slate-700 font-medium focus:ring-2 focus:ring-blue-500 outline-none appearance-none pr-10 relative min-w-[140px]"
                style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%2364748b'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 9l-7 7-7-7'%3E%3C/path%3E%3C/svg%3E")`, backgroundPosition: 'right 1rem center', backgroundRepeat: 'no-repeat', backgroundSize: '1.2em' }}
              >
                <option value="All">All Topics</option>
                {topicsList.map(topic => <option key={topic.name} value={topic.name}>{topic.name}</option>)}
              </select>

              <select 
                value={activeIndustry}
                onChange={(e) => setActiveIndustry(e.target.value)}
                className="px-4 py-3 rounded-xl border border-slate-200 bg-white text-slate-700 font-medium focus:ring-2 focus:ring-blue-500 outline-none appearance-none pr-10 relative min-w-[140px]"
                style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%2364748b'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 9l-7 7-7-7'%3E%3C/path%3E%3C/svg%3E")`, backgroundPosition: 'right 1rem center', backgroundRepeat: 'no-repeat', backgroundSize: '1.2em' }}
              >
                <option value="All">All Industries</option>
                {industriesList.map(ind => <option key={ind} value={ind}>{ind}</option>)}
              </select>

              <select 
                value={activeStatus}
                onChange={(e) => setActiveStatus(e.target.value)}
                className="px-4 py-3 rounded-xl border border-slate-200 bg-white text-slate-700 font-medium focus:ring-2 focus:ring-blue-500 outline-none appearance-none pr-10 relative min-w-[140px]"
                style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%2364748b'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 9l-7 7-7-7'%3E%3C/path%3E%3C/svg%3E")`, backgroundPosition: 'right 1rem center', backgroundRepeat: 'no-repeat', backgroundSize: '1.2em' }}
              >
                <option value="Upcoming">Upcoming</option>
                <option value="On-Demand">On-Demand</option>
                <option value="Past Events">Past Events</option>
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Upcoming Events Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12 flex items-center justify-between">
            <h2 className="text-3xl font-bold text-slate-900">Upcoming Events</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {upcomingEvents.map(event => (
              <div key={event.id} className="group rounded-3xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-xl transition-all bg-white flex flex-col h-full">
                <div className="relative h-56 overflow-hidden">
                  <img src={event.image} alt={event.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" referrerPolicy="no-referrer" />
                  <div className="absolute top-4 left-4 flex flex-col gap-2">
                    <span className="bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-slate-800 shadow-sm w-max uppercase tracking-wider">
                      {event.format}
                    </span>
                  </div>
                </div>
                <div className="p-8 flex flex-col flex-grow">
                  <div className="text-xs font-bold text-blue-600 uppercase tracking-wider mb-3">{event.topic}</div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors line-clamp-2">{event.title}</h3>
                  <p className="text-sm text-slate-600 mb-6 flex-grow line-clamp-2">{event.description}</p>
                  
                  <div className="bg-slate-50 rounded-xl p-4 mb-6 border border-slate-100 space-y-3">
                    <div className="flex items-center text-sm text-slate-700 font-medium">
                      <Calendar className="w-4 h-4 mr-2 text-blue-600" />
                      {event.date}
                    </div>
                    <div className="flex items-center text-sm text-slate-700 font-medium">
                      <Clock className="w-4 h-4 mr-2 text-blue-600" />
                      {event.time}
                    </div>
                    <div className="flex items-center text-sm text-slate-700 font-medium">
                      <Users className="w-4 h-4 mr-2 text-blue-600" />
                      <span className="truncate">{event.speaker}</span>
                    </div>
                  </div>

                  <button className="w-full inline-flex items-center justify-center px-6 py-3 text-sm font-bold rounded-full text-blue-600 bg-blue-50 hover:bg-blue-600 hover:text-white transition-colors mt-auto">
                    Register Now <ArrowRight className="w-4 h-4 ml-2" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. On-Demand Webinars */}
      <section className="py-20 bg-slate-50 border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12 flex items-center justify-between">
            <h2 className="text-3xl font-bold text-slate-900">On-Demand Webinars</h2>
            <button className="text-blue-600 font-bold hover:text-blue-700 flex items-center text-sm">
              View All <ArrowRight className="w-4 h-4 ml-1" />
            </button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {onDemandWebinars.map(webinar => (
              <div key={webinar.id} className="group rounded-3xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-md transition-all bg-white flex flex-col h-full cursor-pointer">
                <div className="relative h-48 overflow-hidden">
                  <img src={webinar.image} alt={webinar.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" referrerPolicy="no-referrer" />
                  <div className="absolute inset-0 bg-slate-900/20 group-hover:bg-slate-900/40 transition-colors flex items-center justify-center">
                    <div className="w-14 h-14 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                      <PlayCircle className="w-8 h-8 text-blue-600 ml-1" />
                    </div>
                  </div>
                  <div className="absolute bottom-4 right-4 bg-slate-900/80 backdrop-blur-sm px-2 py-1 rounded text-xs font-medium text-white">
                    {webinar.duration}
                  </div>
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <div className="text-xs font-bold text-blue-600 uppercase tracking-wider mb-2">{webinar.topic}</div>
                  <h3 className="text-lg font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors line-clamp-2">{webinar.title}</h3>
                  <p className="text-sm text-slate-600 mb-6 flex-grow line-clamp-2">{webinar.summary}</p>
                  
                  <div className="flex items-center justify-between mt-auto pt-4 border-t border-slate-100">
                    <div className="flex items-center text-xs text-slate-500 font-medium truncate pr-4">
                      <Mic className="w-3.5 h-3.5 mr-1.5 flex-shrink-0" />
                      <span className="truncate">{webinar.speaker}</span>
                    </div>
                    <span className="inline-flex items-center text-xs font-bold text-blue-600 hover:text-blue-700 whitespace-nowrap">
                      Watch <ArrowRight className="w-3.5 h-3.5 ml-1" />
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Past Events Highlights */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-slate-900">Past Events Highlights</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {pastEvents.map(event => (
              <div key={event.id} className="bg-slate-50 rounded-3xl p-8 border border-slate-100 hover:shadow-md transition-all flex flex-col h-full">
                <h3 className="text-xl font-bold text-slate-900 mb-4">{event.title}</h3>
                <div className="flex flex-col gap-2 mb-6">
                  <div className="flex items-center text-sm text-slate-600 font-medium">
                    <Calendar className="w-4 h-4 mr-2 text-slate-400" /> {event.date}
                  </div>
                  {event.location && (
                    <div className="flex items-center text-sm text-slate-600 font-medium">
                      <MapPin className="w-4 h-4 mr-2 text-slate-400" /> {event.location}
                    </div>
                  )}
                </div>
                <p className="text-sm text-slate-600 mb-8 flex-grow">{event.recap}</p>
                <button className="inline-flex items-center text-sm font-bold text-blue-600 hover:text-blue-700 mt-auto">
                  View Highlights <ArrowRight className="w-4 h-4 ml-1" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Event Speakers Section */}
      <section className="py-20 bg-white border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Meet Our Experts</h2>
            <p className="text-lg text-slate-600">Learn from Rysun's thought leaders and industry practitioners.</p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {speakersList.map((speaker, idx) => (
              <div key={idx} className="text-center group">
                <div className="relative w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden border-4 border-slate-50 shadow-md group-hover:border-blue-100 transition-colors">
                  <img src={speaker.image} alt={speaker.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" referrerPolicy="no-referrer" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-1">{speaker.name}</h3>
                <p className="text-sm text-blue-600 font-medium mb-2">{speaker.role}</p>
                <p className="text-xs text-slate-500">{speaker.expertise}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. Stay Updated Section */}
      <section className="py-24 bg-slate-50 border-t border-slate-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <Calendar className="w-8 h-8 text-blue-600" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Never Miss a Rysun Event</h2>
          <p className="text-lg text-slate-600 mb-10 max-w-2xl mx-auto">
            Get updates on upcoming webinars, live events, and expert sessions delivered directly to your inbox.
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
              Subscribe
            </button>
          </form>
        </div>
      </section>

      {/* 9. Final Call-to-Action Section */}
      <section className="relative py-24 bg-slate-900 overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://picsum.photos/seed/rysun-cta-events/1920/1080?blur=4')] opacity-10 bg-cover bg-center mix-blend-overlay" />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-indigo-950 to-slate-900 opacity-90" />
        
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <svg className="absolute w-full h-full opacity-20" viewBox="0 0 100 100" preserveAspectRatio="none">
            <path d="M0,100 L100,0" stroke="#3b82f6" strokeWidth="0.5" strokeDasharray="2 4" />
            <path d="M0,80 L100,-20" stroke="#8b5cf6" strokeWidth="0.5" strokeDasharray="2 4" />
          </svg>
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-8 tracking-tight">
            Want to Discuss Your AI or Digital Transformation Strategy?
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
