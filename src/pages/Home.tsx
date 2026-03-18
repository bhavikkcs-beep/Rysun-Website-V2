import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, BrainCircuit, Database, Globe, Cloud, LayoutGrid, MonitorSmartphone, PlayCircle, CheckCircle2, ChevronRight, BarChart3, ShieldCheck, Zap, Users, Send, Bot, User, Loader2, Sparkles, Network, Cpu, ChevronLeft, ShoppingCart, HeartPulse, Shield, Truck, Server, Mic, Presentation, Lightbulb, Activity, Calendar, MapPin } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { GoogleGenAI } from '@google/genai';

const Slide1Infographic = () => (
  <div className="relative w-full aspect-square max-w-lg mx-auto flex items-center justify-center">
    <div className="relative w-64 h-64">
      {/* Central Brain */}
      <motion.div 
        animate={{ scale: [1, 1.05, 1], opacity: [0.8, 1, 0.8] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        className="absolute inset-0 m-auto w-32 h-32 bg-gradient-to-br from-rysun-blue to-rysun-lightblue rounded-full flex items-center justify-center shadow-[0_0_40px_rgba(0,169,233,0.4)] z-20"
      >
        <BrainCircuit className="w-16 h-16 text-white" />
      </motion.div>

      {/* Orbiting Nodes */}
      {[
        { icon: <Database />, angle: 0, delay: 0 },
        { icon: <Cpu />, angle: 72, delay: 0.2 },
        { icon: <Network />, angle: 144, delay: 0.4 },
        { icon: <Globe />, angle: 216, delay: 0.6 },
        { icon: <Zap />, angle: 288, delay: 0.8 }
      ].map((node, i) => (
        <motion.div
          key={i}
          className="absolute top-1/2 left-1/2 w-12 h-12 -ml-6 -mt-6 rounded-full bg-gray-800 border border-rysun-lightblue/30 flex items-center justify-center text-rysun-lightblue shadow-lg z-10"
          animate={{
            x: [
              Math.cos((node.angle * Math.PI) / 180) * 120,
              Math.cos(((node.angle + 360) * Math.PI) / 180) * 120
            ],
            y: [
              Math.sin((node.angle * Math.PI) / 180) * 120,
              Math.sin(((node.angle + 360) * Math.PI) / 180) * 120
            ]
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        >
          {React.cloneElement(node.icon, { className: 'w-5 h-5' })}
        </motion.div>
      ))}

      {/* Connecting Lines (Static representation of orbits) */}
      <div className="absolute inset-0 rounded-full border border-rysun-lightblue/20 border-dashed animate-[spin_20s_linear_infinite]" />
      <div className="absolute inset-4 rounded-full border border-rysun-blue/10 animate-[spin_15s_linear_infinite_reverse]" />
    </div>
  </div>
);

const Slide2Infographic = () => (
  <div className="relative w-full aspect-square max-w-lg mx-auto flex items-center justify-center">
    <div className="relative w-72 h-72 flex flex-col items-center justify-center gap-4">
      {/* Top Layer */}
      <motion.div 
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="w-48 h-16 bg-gradient-to-r from-rysun-blue/20 to-rysun-lightblue/20 border border-rysun-lightblue/50 rounded-xl flex items-center justify-between px-6 backdrop-blur-sm relative z-30 shadow-lg"
      >
        <div className="flex gap-2">
          <div className="w-3 h-3 rounded-full bg-rysun-lightblue animate-pulse" />
          <div className="w-3 h-3 rounded-full bg-rysun-blue animate-pulse delay-75" />
          <div className="w-3 h-3 rounded-full bg-rysun-darkpurple animate-pulse delay-150" />
        </div>
        <Activity className="w-6 h-6 text-rysun-lightblue" />
      </motion.div>

      {/* Middle Layer */}
      <motion.div 
        animate={{ y: [0, -5, 0] }}
        transition={{ duration: 4, repeat: Infinity, delay: 0.5, ease: "easeInOut" }}
        className="w-56 h-16 bg-gradient-to-r from-rysun-orange/20 to-rysun-red/20 border border-rysun-orange/50 rounded-xl flex items-center justify-between px-6 backdrop-blur-sm relative z-20 shadow-lg"
      >
        <Database className="w-6 h-6 text-rysun-orange" />
        <div className="h-2 w-24 bg-rysun-orange/30 rounded-full overflow-hidden">
          <motion.div 
            className="h-full bg-rysun-orange"
            animate={{ width: ['0%', '100%', '0%'] }}
            transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
          />
        </div>
      </motion.div>

      {/* Bottom Layer */}
      <motion.div 
        animate={{ y: [0, 5, 0] }}
        transition={{ duration: 4, repeat: Infinity, delay: 1, ease: "easeInOut" }}
        className="w-64 h-16 bg-gradient-to-r from-gray-700/50 to-gray-800/50 border border-gray-600 rounded-xl flex items-center justify-between px-6 backdrop-blur-sm relative z-10 shadow-lg"
      >
        <div className="flex gap-2">
          {[1, 2, 3, 4, 5].map((i) => (
            <div key={i} className="w-2 h-8 bg-gray-500 rounded-sm" />
          ))}
        </div>
        <Server className="w-6 h-6 text-gray-400" />
      </motion.div>

      {/* Connecting Data Streams */}
      <div className="absolute inset-0 flex justify-center items-center pointer-events-none z-0">
        <motion.div 
          className="w-1 h-full bg-gradient-to-b from-rysun-lightblue via-rysun-orange to-gray-500 opacity-30"
          animate={{ opacity: [0.2, 0.6, 0.2] }}
          transition={{ duration: 2, repeat: Infinity }}
        />
      </div>
    </div>
  </div>
);

const Slide4Infographic = () => (
  <div className="relative w-full aspect-square max-w-lg mx-auto flex items-center justify-center">
    <div className="relative w-64 h-64">
      {/* Central Hub */}
      <div className="absolute inset-0 m-auto w-24 h-24 bg-gray-800 border-2 border-rysun-blue rounded-full flex items-center justify-center shadow-[0_0_30px_rgba(0,169,233,0.3)] z-20">
        <Globe className="w-10 h-10 text-white" />
      </div>

      {/* Partner Nodes */}
      {[
        { name: "AWS", angle: -90, color: "text-[#FF9900]", border: "border-[#FF9900]" },
        { name: "Adobe", angle: -18, color: "text-[#FF0000]", border: "border-[#FF0000]" },
        { name: "Google", angle: 54, color: "text-[#4285F4]", border: "border-[#4285F4]" },
        { name: "Microsoft", angle: 126, color: "text-[#00A4EF]", border: "border-[#00A4EF]" },
        { name: "Couchbase", angle: 198, color: "text-[#EA2328]", border: "border-[#EA2328]" }
      ].map((partner, i) => (
        <motion.div
          key={i}
          className={`absolute top-1/2 left-1/2 w-24 h-10 -ml-12 -mt-5 bg-white rounded-lg border-2 ${partner.border} flex items-center justify-center font-bold text-xs shadow-lg z-30`}
          initial={{ 
            x: Math.cos((partner.angle * Math.PI) / 180) * 110,
            y: Math.sin((partner.angle * Math.PI) / 180) * 110
          }}
          animate={{ 
            y: [
              Math.sin((partner.angle * Math.PI) / 180) * 110 - 5, 
              Math.sin((partner.angle * Math.PI) / 180) * 110 + 5, 
              Math.sin((partner.angle * Math.PI) / 180) * 110 - 5
            ] 
          }}
          transition={{ duration: 3, repeat: Infinity, delay: i * 0.2, ease: "easeInOut" }}
        >
          <span className={partner.color}>{partner.name}</span>
        </motion.div>
      ))}

      {/* Connecting Lines */}
      <svg className="absolute inset-0 w-full h-full z-10" viewBox="0 0 256 256">
        {[
          { angle: -90 }, { angle: -18 }, { angle: 54 }, { angle: 126 }, { angle: 198 }
        ].map((line, i) => (
          <motion.line
            key={i}
            x1="128" y1="128"
            x2={128 + Math.cos((line.angle * Math.PI) / 180) * 110}
            y2={128 + Math.sin((line.angle * Math.PI) / 180) * 110}
            stroke="rgba(255,255,255,0.2)"
            strokeWidth="2"
            strokeDasharray="4 4"
            animate={{ strokeDashoffset: [0, -20] }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
          />
        ))}
      </svg>
    </div>
  </div>
);

const Slide5Infographic = () => (
  <div className="relative w-full aspect-square max-w-lg mx-auto flex items-center justify-center">
    <motion.div 
      initial={{ y: 0 }}
      animate={{ y: [-10, 10, -10] }}
      transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      className="relative z-20 w-80 bg-gradient-to-br from-gray-800 to-gray-900 border border-rysun-lightblue/40 rounded-3xl p-8 shadow-2xl overflow-hidden"
    >
      <div className="absolute top-0 right-0 w-32 h-32 bg-rysun-blue/20 rounded-full blur-3xl -mr-10 -mt-10" />
      
      <div className="flex items-center gap-3 mb-6 relative z-10">
        <div className="w-12 h-12 rounded-xl bg-rysun-blue/20 flex items-center justify-center text-rysun-lightblue shadow-lg">
          <Calendar className="w-6 h-6" />
        </div>
        <div>
          <p className="text-sm font-bold text-rysun-lightblue uppercase tracking-wider">Upcoming Event</p>
          <p className="text-white font-medium">Oct 15-17, 2026</p>
        </div>
      </div>
      
      <h3 className="text-2xl font-bold text-white mb-4 leading-tight relative z-10">Enterprise AI Summit 2026</h3>
      
      <div className="flex items-center gap-2 text-gray-400 mb-6 relative z-10">
        <MapPin className="w-4 h-4" />
        <span className="text-sm">Moscone Center, San Francisco</span>
      </div>
      
      <div className="space-y-3 relative z-10">
        <div className="flex items-center gap-3 text-sm text-gray-300">
          <CheckCircle2 className="w-4 h-4 text-rysun-lightblue" />
          <span>Keynote by Industry Leaders</span>
        </div>
        <div className="flex items-center gap-3 text-sm text-gray-300">
          <CheckCircle2 className="w-4 h-4 text-rysun-lightblue" />
          <span>Hands-on AI Workshops</span>
        </div>
        <div className="flex items-center gap-3 text-sm text-gray-300">
          <CheckCircle2 className="w-4 h-4 text-rysun-lightblue" />
          <span>Exclusive Networking</span>
        </div>
      </div>
    </motion.div>

    {/* Floating Elements */}
    <motion.div 
      animate={{ y: [-15, 15, -15], x: [0, 10, 0] }} 
      transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      className="absolute -right-4 top-20 z-30 w-16 h-16 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl flex items-center justify-center shadow-lg"
    >
      <Users className="w-8 h-8 text-white" />
    </motion.div>
    <motion.div 
      animate={{ y: [15, -15, 15], x: [0, -10, 0] }} 
      transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      className="absolute -left-8 bottom-20 z-30 w-20 h-20 bg-rysun-blue/20 backdrop-blur-md border border-rysun-blue/30 rounded-full flex items-center justify-center shadow-lg"
    >
      <Mic className="w-8 h-8 text-rysun-lightblue" />
    </motion.div>
  </div>
);

const slides = [
  {
    tag: "AI-First Enterprise",
    title: "AI-First Enterprise Intelligence for Measurable Impact",
    subtitle: "Rysun Labs helps enterprises embed artificial intelligence across operations, products, and decision systems — transforming data into actionable intelligence and accelerating digital innovation at scale.",
    primaryCTA: "Explore Our Capabilities",
    primaryLink: "/capabilities/ai",
    secondaryCTA: "Talk to an AI Expert",
    secondaryLink: "/contact-us",
    infographic: <Slide1Infographic />
  },
  {
    tag: "Data Intelligence",
    title: "Turn Enterprise Data into Strategic Intelligence",
    subtitle: "From data strategy to advanced analytics and AI-powered insights, Rysun builds scalable data ecosystems that enable faster decisions, predictive intelligence, and enterprise-wide innovation.",
    primaryCTA: "Explore Data Capabilities",
    primaryLink: "/capabilities/data",
    secondaryCTA: "See Data Success Stories",
    secondaryLink: "/insights/impact-stories",
    infographic: <Slide2Infographic />
  },
  {
    tag: "Technology Partnerships",
    title: "Powered by Leading Technology Ecosystems",
    subtitle: "Through strategic partnerships with global technology platforms like Adobe, AWS, Google Cloud, and Microsoft, Rysun accelerates enterprise innovation by combining AI expertise with best-in-class cloud and digital platforms.",
    primaryCTA: "Explore Our Partnerships",
    primaryLink: "/company/partnerships-alliances",
    secondaryCTA: "See Our Solutions",
    secondaryLink: "/capabilities/digital",
    infographic: <Slide4Infographic />
  },
  {
    tag: "Upcoming Event",
    title: "Join Us at the Enterprise AI Summit 2026",
    subtitle: "Discover the future of applied AI. Connect with industry leaders, participate in hands-on workshops, and explore how generative AI is reshaping the enterprise landscape.",
    primaryCTA: "Register Now",
    primaryLink: "/contact-us",
    secondaryCTA: "View Agenda",
    secondaryLink: "/insights/events",
    infographic: <Slide5Infographic />
  }
];

const HeroSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <section className="relative min-h-[60vh] lg:min-h-[70vh] flex items-center pb-10 overflow-hidden bg-gray-900">
      {/* Background Gradients & Patterns */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-indigo-950 to-rysun-darkpurple/80" />
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMjAiIGN5PSIyMCIgcj0iMSIgZmlsbD0icmdiYSgyNTUsIDI1NSwgMjU1LCAwLjA1KSIvPjwvc3ZnPg==')] opacity-40" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
          >
            {/* Left Content */}
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-5">
                <Sparkles className="w-3.5 h-3.5 text-rysun-lightblue" />
                <span className="text-xs font-medium text-blue-100">{slides[currentSlide].tag}</span>
              </div>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white tracking-tight mb-5 leading-tight">
                {slides[currentSlide].title.split(' ').map((word, i) => (
                  <span key={i} className={['AI-First', 'Intelligence', 'Data', 'Transformation', 'Ecosystems'].includes(word.replace(/[^a-zA-Z-]/g, '')) ? "text-transparent bg-clip-text bg-gradient-to-r from-rysun-lightblue to-blue-400" : ""}>
                    {word}{' '}
                  </span>
                ))}
              </h1>
              <p className="text-base text-gray-300 mb-6 leading-relaxed max-w-lg">
                {slides[currentSlide].subtitle}
              </p>
              <div className="flex flex-col sm:flex-row gap-3 mb-4">
                <Link to={slides[currentSlide].primaryLink} className="inline-flex items-center justify-center px-6 py-3 text-sm font-medium rounded-full text-white bg-gradient-to-r from-rysun-blue to-rysun-lightblue hover:shadow-[0_0_30px_rgba(0,169,233,0.5)] hover:-translate-y-0.5 transition-all">
                  {slides[currentSlide].primaryCTA}
                </Link>
                <Link to={slides[currentSlide].secondaryLink} className="inline-flex items-center justify-center px-6 py-3 text-sm font-medium rounded-full text-white bg-transparent border border-white/30 hover:bg-white/10 transition-all backdrop-blur-sm">
                  {slides[currentSlide].secondaryCTA}
                </Link>
              </div>
            </div>
            
            {/* Right Infographic */}
            <div className="relative hidden lg:block h-[420px] flex items-center justify-center -translate-y-8">
              {slides[currentSlide].infographic}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Slider Controls */}
      <div className="absolute bottom-4 left-0 w-full z-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          <div className="flex gap-3">
            {slides.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentSlide(idx)}
                className={`h-2 rounded-full transition-all duration-300 ${currentSlide === idx ? 'w-8 bg-rysun-lightblue' : 'w-2 bg-white/30 hover:bg-white/50'}`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
          <div className="flex gap-4">
            <button onClick={prevSlide} className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-white/10 transition-colors backdrop-blur-sm">
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button onClick={nextSlide} className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-white/10 transition-colors backdrop-blur-sm">
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

const AIChatAssistant = () => {
  const [messages, setMessages] = useState<{ role: 'user' | 'model', text: string }[]>([
    { role: 'model', text: 'Hello! I am the Rysun AI Assistant. I can help you understand how our AI, Data, and Digital Engineering capabilities can transform your enterprise. What would you like to know?' }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMessage }]);
    setIsLoading(true);

    try {
      const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY || '' });
      
      const systemInstruction = `You are a helpful AI assistant for Rysun Labs, a technology consulting company specializing in AI, Data & Analytics, and Digital Engineering. 
      Keep your answers concise, professional, and focused on enterprise solutions. 
      Highlight Rysun's expertise in delivering measurable impact, accelerating innovation, and building scalable platforms.
      If asked about services, mention Artificial Intelligence, Data Engineering, Digital Transformation, Cloud & DevOps.
      If asked about industries, mention Retail, Healthcare, Financial Services, Manufacturing, and Logistics.`;

      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: userMessage,
        config: {
          systemInstruction,
        }
      });

      setMessages(prev => [...prev, { role: 'model', text: response.text || 'I am sorry, I could not process that request.' }]);
    } catch (error) {
      console.error('Chat error:', error);
      setMessages(prev => [...prev, { role: 'model', text: 'I apologize, but I am currently experiencing technical difficulties. Please try again later or contact our team directly.' }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="py-12 bg-gradient-to-b from-gray-900 to-gray-50 relative z-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white rounded-3xl shadow-2xl border border-gray-100 overflow-hidden flex flex-col md:flex-row"
        >
          {/* Sidebar */}
          <div className="w-full md:w-1/3 bg-gradient-to-br from-blue-50 to-indigo-50 p-8 border-b md:border-b-0 md:border-r border-blue-100 flex flex-col justify-center">
            <div className="w-12 h-12 rounded-full bg-white shadow-sm flex items-center justify-center mb-6">
              <Bot className="w-6 h-6 text-rysun-blue" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-3">Rysun AI Assistant</h3>
            <p className="text-gray-600 mb-6 text-sm leading-relaxed">
              Experience our AI capabilities firsthand. Ask me about our services, industry expertise, or how we can accelerate your digital transformation journey.
            </p>
            <div className="space-y-3">
              <button onClick={() => setInput("How can AI improve our retail operations?")} className="text-left text-sm text-rysun-blue bg-white hover:bg-blue-50 border border-blue-100 px-4 py-3 rounded-xl transition-all shadow-sm w-full font-medium">
                "How can AI improve our retail operations?"
              </button>
              <button onClick={() => setInput("What is your approach to Data Engineering?")} className="text-left text-sm text-rysun-blue bg-white hover:bg-blue-50 border border-blue-100 px-4 py-3 rounded-xl transition-all shadow-sm w-full font-medium">
                "What is your approach to Data Engineering?"
              </button>
            </div>
          </div>

          {/* Chat Area */}
          <div className="w-full md:w-2/3 h-[500px] flex flex-col bg-white">
            <div className="flex-grow p-6 overflow-y-auto space-y-6">
              <AnimatePresence>
                {messages.map((msg, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                  >
                    <div className={`flex max-w-[85%] gap-3 ${msg.role === 'user' ? 'flex-row-reverse' : 'flex-row'}`}>
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 mt-1 ${msg.role === 'user' ? 'bg-gray-100' : 'bg-gradient-to-br from-rysun-blue to-rysun-lightblue text-white shadow-sm'}`}>
                        {msg.role === 'user' ? <User className="w-4 h-4 text-gray-600" /> : <Bot className="w-4 h-4" />}
                      </div>
                      <div className={`p-4 rounded-2xl text-sm leading-relaxed ${msg.role === 'user' ? 'bg-gray-100 text-gray-800 rounded-tr-none' : 'bg-blue-50/50 text-gray-800 rounded-tl-none border border-blue-100/50'}`}>
                        {msg.text}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
              {isLoading && (
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex justify-start">
                  <div className="flex gap-3">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-rysun-blue to-rysun-lightblue text-white flex items-center justify-center flex-shrink-0 mt-1 shadow-sm">
                      <Bot className="w-4 h-4" />
                    </div>
                    <div className="p-4 rounded-2xl bg-blue-50/50 text-gray-800 rounded-tl-none border border-blue-100/50 flex items-center gap-2">
                      <Loader2 className="w-4 h-4 animate-spin text-rysun-blue" />
                      <span className="text-sm text-gray-500 font-medium">Generating response...</span>
                    </div>
                  </div>
                </motion.div>
              )}
              <div ref={messagesEndRef} />
            </div>
            
            <div className="p-4 border-t border-gray-100 bg-white">
              <div className="relative flex items-center">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                  placeholder="Ask the Rysun AI Assistant..."
                  className="w-full pl-4 pr-14 py-4 rounded-xl border border-gray-200 focus:ring-2 focus:ring-rysun-lightblue focus:border-transparent outline-none bg-gray-50 transition-all"
                  disabled={isLoading}
                />
                <button
                  onClick={handleSend}
                  disabled={!input.trim() || isLoading}
                  className="absolute right-2 w-10 h-10 flex items-center justify-center bg-rysun-blue text-white rounded-lg hover:bg-rysun-lightblue transition-colors disabled:opacity-50 disabled:cursor-not-allowed shadow-sm"
                >
                  <Send className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const CapabilityNavigator = () => {
  const capabilities = [
    { title: 'Artificial Intelligence', icon: <BrainCircuit />, desc: 'Enterprise GenAI, ML pipelines, and applied AI solutions.', link: '/capabilities/ai', img: 'ai-tech', color: 'from-rysun-blue/90 to-rysun-darkpurple/90' },
    { title: 'Data & Analytics', icon: <Database />, desc: 'Modern data platforms, governance, and real-time intelligence.', link: '/capabilities/data', img: 'data-analytics', color: 'from-rysun-orange/90 to-rysun-darkpurple/90' },
    { title: 'Digital Engineering', icon: <Globe />, desc: 'Custom enterprise applications and digital product development.', link: '/capabilities/digital', img: 'digital-eng', color: 'from-rysun-lightblue/90 to-rysun-darkpurple/90' },
    { title: 'Cloud & DevOps', icon: <Cloud />, desc: 'Cloud-native architecture, migration, and continuous delivery.', link: '/capabilities/digital', img: 'cloud-devops', color: 'from-rysun-purple/90 to-rysun-darkpurple/90' },
    { title: 'Intelligent Digital Workplace', icon: <LayoutGrid />, desc: 'Modern workplace solutions powered by automation and AI.', link: '/capabilities/digital', img: 'workplace', color: 'from-rysun-red/90 to-rysun-darkpurple/90' },
    { title: 'Experience Engineering', icon: <MonitorSmartphone />, desc: 'User-centric design and omnichannel experience platforms.', link: '/capabilities/digital', img: 'experience', color: 'from-rysun-maroon/90 to-rysun-darkpurple/90' }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-4">Accelerate, Automate, and Amplify</h2>
          <p className="text-lg text-gray-600">Comprehensive capabilities to drive your digital transformation journey with vibrant, modern solutions.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {capabilities.map((cap, idx) => (
            <motion.div
              key={idx}
              whileHover={{ y: -8 }}
              className="bg-gray-50 rounded-3xl p-8 border border-gray-100 hover:shadow-xl transition-all group flex flex-col h-full"
            >
              <div className="w-16 h-16 rounded-2xl bg-white flex items-center justify-center mb-6 shadow-sm text-rysun-blue group-hover:bg-rysun-blue group-hover:text-white transition-colors">
                {React.cloneElement(cap.icon as React.ReactElement, { className: 'w-8 h-8' })}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-rysun-blue transition-colors">{cap.title}</h3>
              <p className="text-gray-600 mb-6 leading-relaxed text-sm flex-grow">{cap.desc}</p>
              <Link to={cap.link} className="inline-flex items-center text-sm font-bold text-rysun-blue hover:text-rysun-lightblue transition-colors mt-auto">
                Explore Capability <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const ImpactStories = () => (
  <section className="py-16 bg-white border-y border-gray-100">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="mb-12 text-center max-w-3xl mx-auto">
        <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-4">Extraordinary Outcomes</h2>
        <p className="text-lg text-gray-600">See how we help global enterprises turn complex challenges into competitive advantages.</p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        <div className="lg:col-span-7">
          <div className="bg-gradient-to-br from-gray-900 to-rysun-darkpurple rounded-3xl overflow-hidden shadow-xl h-full flex flex-col group relative">
            <div className="absolute inset-0 bg-[url('https://picsum.photos/seed/rysun-retail/800/800?blur=4')] opacity-20 mix-blend-overlay transition-transform duration-1000 group-hover:scale-105" />
            <div className="p-10 flex-grow flex flex-col relative z-10">
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-white/10 backdrop-blur-md text-xs font-bold text-white uppercase tracking-wider w-max mb-8 border border-white/20">
                Retail Success Story
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-6 leading-tight">Seamless Data Integration for a US Retail Enterprise</h3>
              <div className="grid grid-cols-3 gap-4 mb-10">
                <div className="bg-white/10 backdrop-blur-md p-5 rounded-2xl border border-white/10">
                  <div className="text-3xl font-black text-rysun-lightblue mb-1">60%</div>
                  <div className="text-xs text-gray-300 font-medium uppercase tracking-wider">Faster Processing</div>
                </div>
                <div className="bg-white/10 backdrop-blur-md p-5 rounded-2xl border border-white/10">
                  <div className="text-3xl font-black text-rysun-orange mb-1">100%</div>
                  <div className="text-xs text-gray-300 font-medium uppercase tracking-wider">Unified Analytics</div>
                </div>
                <div className="bg-white/10 backdrop-blur-md p-5 rounded-2xl border border-white/10">
                  <div className="text-3xl font-black text-rysun-red mb-1">24/7</div>
                  <div className="text-xs text-gray-300 font-medium uppercase tracking-wider">Real-time Insights</div>
                </div>
              </div>
              <div className="mt-auto">
                <Link to="/insights/impact-stories" className="inline-flex items-center justify-center px-8 py-4 text-sm font-bold rounded-full text-gray-900 bg-white hover:bg-gray-50 transition-all shadow-lg">
                  Read Full Story <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="lg:col-span-5 flex flex-col gap-6">
          {[
            { title: 'AI-Powered Fraud Detection System', industry: 'Financial Services', desc: 'Reduced false positives by 40% using advanced machine learning models.', color: 'text-rysun-blue', bg: 'bg-blue-50' },
            { title: 'Predictive Maintenance for Manufacturing', industry: 'Manufacturing', desc: 'Decreased equipment downtime by 25% with IoT and predictive analytics.', color: 'text-rysun-orange', bg: 'bg-orange-50' },
            { title: 'Patient Data Lakehouse Implementation', industry: 'Healthcare', desc: 'Unified patient records across 50+ facilities for real-time care insights.', color: 'text-rysun-red', bg: 'bg-red-50' }
          ].map((story, idx) => (
            <Link key={idx} to="/insights/impact-stories" className="flex flex-col justify-center bg-gray-50 p-6 rounded-3xl shadow-sm border border-gray-100 hover:shadow-md hover:border-gray-200 transition-all group flex-1">
              <div className={`text-xs font-black ${story.color} uppercase tracking-wider mb-2`}>{story.industry}</div>
              <h4 className="text-lg font-bold text-gray-900 group-hover:text-rysun-blue transition-colors leading-snug mb-2">{story.title}</h4>
              <p className="text-sm text-gray-600">{story.desc}</p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  </section>
);

const IndustryExpertise = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(0);
  
  const industries = [
    { name: 'Retail & E-Commerce', img: 'retail', desc: 'Personalize customer journeys and optimize supply chains with AI-driven insights.' },
    { name: 'Healthcare & Life Sciences', img: 'health', desc: 'Enhance patient care and operational efficiency through advanced data analytics.' },
    { name: 'High-Tech', img: 'tech', desc: 'Accelerate innovation and product development with cutting-edge AI and data platforms.' },
    { name: 'Financial Services', img: 'finance', desc: 'Mitigate risk and automate compliance with intelligent, secure platforms.' }
  ];

  return (
    <section className="py-16 bg-gray-900 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://picsum.photos/seed/rysun-pattern/1920/1080?blur=10')] opacity-10 mix-blend-overlay" />
      <div className="absolute inset-0 bg-gradient-to-br from-rysun-blue/20 via-gray-900 to-rysun-darkpurple/30" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="mb-12 text-center max-w-3xl mx-auto">
          <h2 className="text-2xl md:text-4xl font-bold mb-4">Industry Expertise That Drives Impact</h2>
          <p className="text-lg text-gray-300">Tailored AI and digital solutions designed for the unique challenges of your sector.</p>
        </div>
        
        {/* Desktop Interactive Accordion */}
        <div className="hidden lg:flex h-[500px] gap-4 w-full">
          {industries.map((ind, idx) => {
            const isActive = hoveredIndex === idx;
            return (
              <motion.div
                key={idx}
                onHoverStart={() => setHoveredIndex(idx)}
                className={`relative rounded-3xl overflow-hidden cursor-pointer border border-white/10 transition-all duration-500 ease-in-out`}
                animate={{ width: isActive ? '40%' : '20%' }}
                initial={{ width: idx === 0 ? '40%' : '20%' }}
              >
                <img 
                  src={`https://picsum.photos/seed/rysun-ind-${ind.img}/800/1000`} 
                  alt={ind.name} 
                  className="absolute inset-0 w-full h-full object-cover opacity-60 transition-transform duration-700 hover:scale-105" 
                  referrerPolicy="no-referrer" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40 to-transparent" />
                
                <div className="absolute bottom-0 left-0 p-8 w-full flex flex-col justify-end h-full">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center flex-shrink-0 border border-white/20">
                      <span className="font-bold text-lg">{idx + 1}</span>
                    </div>
                    {isActive && (
                      <motion.h3 
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="text-2xl font-bold text-white whitespace-nowrap"
                      >
                        {ind.name}
                      </motion.h3>
                    )}
                  </div>
                  
                  {!isActive && (
                    <h3 className="text-xl font-bold text-white absolute bottom-8 left-24 whitespace-nowrap origin-left -rotate-90 translate-y-full opacity-70">
                      {ind.name}
                    </h3>
                  )}

                  <AnimatePresence>
                    {isActive && (
                      <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        transition={{ duration: 0.3, delay: 0.1 }}
                      >
                        <p className="text-gray-300 mb-6 line-clamp-3">
                          {ind.desc}
                        </p>
                        <Link 
                          to={`/industry/${ind.name.toLowerCase().replace(/ & /g, '-').replace(/\s+/g, '-')}`} 
                          className="inline-flex items-center px-6 py-3 rounded-full bg-rysun-blue hover:bg-rysun-lightblue text-white font-medium transition-colors"
                        >
                          Explore Sector <ArrowRight className="ml-2 w-4 h-4" />
                        </Link>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Mobile Grid Fallback */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:hidden">
          {industries.map((ind, idx) => (
            <Link key={idx} to={`/industry/${ind.name.toLowerCase().replace(/ & /g, '-').replace(/\s+/g, '-')}`} className="group relative h-72 rounded-3xl overflow-hidden border border-white/10">
              <img src={`https://picsum.photos/seed/rysun-ind-${ind.img}/400/600`} alt={ind.name} className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-80 group-hover:scale-110 transition-all duration-700" referrerPolicy="no-referrer" />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40 to-transparent" />
              <div className="absolute bottom-0 left-0 p-6 w-full">
                <h3 className="text-xl font-bold text-white group-hover:text-rysun-lightblue transition-colors">{ind.name}</h3>
                <p className="text-sm text-gray-300 mt-2 line-clamp-2">{ind.desc}</p>
                <div className="mt-4 flex items-center text-sm font-bold text-rysun-lightblue">
                  Explore Sector <ArrowRight className="ml-2 w-4 h-4" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

const WhyRysun = () => {
  const pillars = [
    { title: 'Consulting-Led Approach', icon: <BrainCircuit className="w-8 h-8" />, desc: 'Strategic guidance aligned with business goals to ensure maximum ROI and sustainable growth.', color: 'text-rysun-blue', bg: 'bg-blue-50', border: 'border-blue-100', gradient: 'from-blue-50/50 to-white' },
    { title: 'Industry-Aligned Solutions', icon: <Database className="w-8 h-8" />, desc: 'Deep domain expertise across key sectors, delivering tailored solutions for unique challenges.', color: 'text-rysun-orange', bg: 'bg-orange-50', border: 'border-orange-100', gradient: 'from-orange-50/50 to-white' },
    { title: 'Accelerated Delivery', icon: <Zap className="w-8 h-8" />, desc: 'Proven frameworks and agile methodologies for faster time-to-market and rapid innovation.', color: 'text-rysun-red', bg: 'bg-red-50', border: 'border-red-100', gradient: 'from-red-50/50 to-white' },
    { title: 'AI + Data Expertise', icon: <Users className="w-8 h-8" />, desc: 'Specialized talent in emerging technologies, building intelligent and scalable enterprise platforms.', color: 'text-rysun-lightblue', bg: 'bg-sky-50', border: 'border-sky-100', gradient: 'from-sky-50/50 to-white' }
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-gray-50 to-white border-y border-gray-100 overflow-hidden relative">
      {/* Abstract background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-5%] w-96 h-96 bg-rysun-blue/5 rounded-full blur-3xl" />
        <div className="absolute bottom-[-10%] right-[-5%] w-96 h-96 bg-rysun-orange/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-gray-200 shadow-sm mb-6"
          >
            <Sparkles className="w-4 h-4 text-rysun-blue" />
            <span className="text-sm font-bold bg-clip-text text-transparent bg-gradient-to-r from-rysun-blue to-rysun-darkpurple tracking-wider uppercase">Why Rysun</span>
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-5xl font-bold text-gray-900 mb-6 tracking-tight"
          >
            A Trusted Partner for <span className="text-transparent bg-clip-text bg-gradient-to-r from-rysun-blue to-rysun-lightblue">Transformation</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg md:text-xl text-gray-600"
          >
            We combine deep industry knowledge with cutting-edge technology to deliver sustainable impact and extraordinary outcomes.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((pillar, idx) => (
            <motion.div 
              key={idx} 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className={`bg-gradient-to-br ${pillar.gradient} rounded-3xl p-8 border ${pillar.border} hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group flex flex-col relative overflow-hidden`}
            >
              {/* Decorative corner accent */}
              <div className={`absolute -top-10 -right-10 w-32 h-32 ${pillar.bg} rounded-full opacity-50 group-hover:scale-150 transition-transform duration-500 ease-out`} />
              
              <div className={`relative z-10 w-16 h-16 rounded-2xl bg-white shadow-sm flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300`}>
                <div className={pillar.color}>
                  {pillar.icon}
                </div>
              </div>
              
              <h3 className="relative z-10 text-xl font-bold text-gray-900 mb-4 group-hover:text-rysun-blue transition-colors">{pillar.title}</h3>
              <p className="relative z-10 text-gray-600 text-sm leading-relaxed flex-grow">{pillar.desc}</p>
              
              <div className="relative z-10 mt-6 pt-6 border-t border-gray-200/50 flex items-center text-sm font-bold text-gray-900 group-hover:text-rysun-blue transition-colors cursor-pointer">
                Discover More <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Logos = () => (
  <section className="py-16 bg-gray-50 border-y border-gray-100">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <h2 className="text-sm font-black text-gray-400 uppercase tracking-widest mb-10">Moving Forward With Industry Leaders</h2>
      <div className="flex flex-wrap justify-center items-center gap-12 md:gap-20 opacity-60 grayscale hover:grayscale-0 transition-all duration-700">
        {['Adobe', 'AWS', 'Google Cloud', 'Microsoft', 'Couchbase'].map((partner, idx) => (
          <div key={idx} className="text-2xl md:text-3xl font-black text-gray-400 hover:text-rysun-blue transition-colors cursor-pointer">
            {partner}
          </div>
        ))}
      </div>
    </div>
  </section>
);

const ContactSection = () => (
  <section className="py-16 bg-white relative overflow-hidden">
    <div className="absolute inset-0">
      <img src="https://picsum.photos/seed/rysun-contact/1920/1080" alt="Contact Rysun" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900/95 via-rysun-darkpurple/90 to-rysun-blue/80 mix-blend-multiply" />
      <div className="absolute inset-0 bg-gray-900/60" />
    </div>
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-[3rem] p-8 md:p-16 shadow-2xl relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-rysun-blue/20 rounded-full blur-3xl -mr-40 -mt-40" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-rysun-orange/20 rounded-full blur-3xl -ml-40 -mb-40" />
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 relative z-10">
          <div className="text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">Let's Build the Future Together</h2>
            <p className="text-xl text-gray-300 mb-10 leading-relaxed">
              Connect with our enterprise experts to discuss how AI, Data, and Digital solutions can accelerate your business objectives.
            </p>
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center backdrop-blur-sm">
                  <CheckCircle2 className="w-6 h-6 text-rysun-lightblue" />
                </div>
                <span className="text-lg font-medium">Strategic Consultation</span>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center backdrop-blur-sm">
                  <CheckCircle2 className="w-6 h-6 text-rysun-lightblue" />
                </div>
                <span className="text-lg font-medium">Custom AI Roadmaps</span>
              </div>
            </div>
          </div>
          
          <div className="bg-white p-8 md:p-10 rounded-3xl shadow-xl">
            <form className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">Name</label>
                  <input type="text" className="w-full px-5 py-4 rounded-xl border border-gray-200 focus:ring-2 focus:ring-rysun-lightblue outline-none bg-gray-50 focus:bg-white transition-all" placeholder="John Doe" />
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">Email</label>
                  <input type="email" className="w-full px-5 py-4 rounded-xl border border-gray-200 focus:ring-2 focus:ring-rysun-lightblue outline-none bg-gray-50 focus:bg-white transition-all" placeholder="john@company.com" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">Company</label>
                <input type="text" className="w-full px-5 py-4 rounded-xl border border-gray-200 focus:ring-2 focus:ring-rysun-lightblue outline-none bg-gray-50 focus:bg-white transition-all" placeholder="Enterprise Inc." />
              </div>
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">Message</label>
                <textarea rows={4} className="w-full px-5 py-4 rounded-xl border border-gray-200 focus:ring-2 focus:ring-rysun-lightblue outline-none bg-gray-50 focus:bg-white transition-all resize-none" placeholder="How can we help?"></textarea>
              </div>
              <button type="button" className="w-full bg-rysun-blue text-white font-bold text-lg py-4 rounded-xl hover:bg-rysun-lightblue transition-colors shadow-lg hover:shadow-xl hover:-translate-y-0.5">
                Submit Inquiry
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const Insights = () => (
  <section className="py-16 bg-gray-50 border-t border-gray-100">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
        <div className="max-w-2xl">
          <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-4">Latest Insights</h2>
          <p className="text-lg text-gray-600">Perspectives on AI, data, and digital transformation from our experts.</p>
        </div>
        <Link to="/insights/blogs" className="hidden md:inline-flex items-center text-rysun-blue font-bold hover:text-rysun-lightblue transition-colors">
          View All Insights <ArrowRight className="ml-2 w-4 h-4" />
        </Link>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {[
          { title: 'The Future of GenAI in Enterprise Retail', category: 'Artificial Intelligence', date: 'March 10, 2026', img: 'retail-ai', color: 'text-rysun-blue', bg: 'bg-blue-50' },
          { title: 'Building Resilient Data Pipelines for Real-Time Analytics', category: 'Data Engineering', date: 'March 5, 2026', img: 'data-pipeline', color: 'text-rysun-orange', bg: 'bg-orange-50' },
          { title: 'Navigating Cloud Migration Security Challenges', category: 'Cloud & DevOps', date: 'February 28, 2026', img: 'cloud-security', color: 'text-rysun-lightblue', bg: 'bg-sky-50' }
        ].map((blog, idx) => (
          <Link key={idx} to="/insights/blogs" className="flex flex-col bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl border border-gray-100 transition-all group h-full">
            <div className="relative h-48 overflow-hidden">
              <img src={`https://picsum.photos/seed/rysun-${blog.img}/600/400`} alt={blog.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" referrerPolicy="no-referrer" />
              <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md border border-white/20 px-3 py-1 rounded-full text-xs font-bold text-gray-900 uppercase tracking-wider z-10 shadow-sm">
                {blog.category}
              </div>
            </div>
            <div className="p-8 flex flex-col flex-grow">
              <div className="text-sm text-gray-500 mb-3 font-medium">{blog.date}</div>
              <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-rysun-blue transition-colors leading-snug flex-grow">{blog.title}</h3>
              <div className="flex items-center text-sm font-bold text-rysun-blue mt-auto">
                Read Article <ArrowRight className="ml-2 w-4 h-4" />
              </div>
            </div>
          </Link>
        ))}
      </div>
      <div className="mt-8 text-center md:hidden">
        <Link to="/insights/blogs" className="inline-flex items-center text-rysun-blue font-bold hover:text-rysun-lightblue transition-colors">
          View All Insights <ArrowRight className="ml-2 w-4 h-4" />
        </Link>
      </div>
    </div>
  </section>
);

const UpcomingEvents = () => (
  <section className="py-16 bg-white relative overflow-hidden">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="text-center max-w-3xl mx-auto mb-12">
        <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-4">Upcoming Industry Event</h2>
        <p className="text-lg text-gray-600">Join us at the leading global conference to explore the future of enterprise AI.</p>
      </div>

      <div className="max-w-5xl mx-auto">
        <div className="relative rounded-3xl overflow-hidden shadow-2xl group border border-gray-800">
          {/* Background Image with Overlay */}
          <div className="absolute inset-0">
            <img src="https://picsum.photos/seed/rysun-event/1200/600" alt="AI Event" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" referrerPolicy="no-referrer" />
            <div className="absolute inset-0 bg-gradient-to-r from-gray-900 via-gray-900/95 to-gray-900/60" />
          </div>

          {/* Content */}
          <div className="relative p-8 md:p-12 lg:p-16 flex flex-col lg:flex-row items-center justify-between gap-10">
            <div className="flex-1 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 backdrop-blur-md mb-6">
                <Sparkles className="w-4 h-4 text-rysun-lightblue" />
                <span className="text-sm font-bold text-blue-100 tracking-wider uppercase">Featured Conference</span>
              </div>
              
              <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-6 leading-tight">
                Global AI Enterprise <br className="hidden lg:block" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-rysun-lightblue to-blue-400">Summit 2026</span>
              </h3>
              
              <p className="text-gray-300 text-lg mb-8 max-w-xl mx-auto lg:mx-0">
                Discover how industry leaders are scaling AI to drive measurable business impact. Join Rysun Labs for exclusive keynotes, hands-on workshops, and networking.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 sm:gap-6 text-white mb-10">
                <div className="flex items-center gap-3 bg-white/5 px-5 py-3 rounded-2xl border border-white/10 backdrop-blur-sm">
                  <div className="w-10 h-10 rounded-full bg-rysun-orange/20 flex items-center justify-center">
                    <Calendar className="w-5 h-5 text-rysun-orange" />
                  </div>
                  <div className="text-left">
                    <div className="text-xs text-gray-400 uppercase tracking-wider font-semibold">Date</div>
                    <div className="font-medium">April 15-17, 2026</div>
                  </div>
                </div>
                
                <div className="flex items-center gap-3 bg-white/5 px-5 py-3 rounded-2xl border border-white/10 backdrop-blur-sm">
                  <div className="w-10 h-10 rounded-full bg-rysun-red/20 flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-rysun-red" />
                  </div>
                  <div className="text-left">
                    <div className="text-xs text-gray-400 uppercase tracking-wider font-semibold">Location</div>
                    <div className="font-medium">San Francisco, CA</div>
                  </div>
                </div>
              </div>

              <Link to="/contact-us" className="inline-flex items-center justify-center px-8 py-4 text-base font-bold rounded-full text-white bg-gradient-to-r from-rysun-blue to-rysun-lightblue hover:shadow-[0_0_30px_rgba(0,169,233,0.5)] hover:-translate-y-0.5 transition-all">
                Register Now <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </div>

            {/* Right Side Date Badge */}
            <div className="hidden lg:flex flex-col items-center justify-center w-64 h-64 rounded-full border-4 border-white/10 bg-white/5 backdrop-blur-md shrink-0 shadow-[0_0_50px_rgba(0,169,233,0.2)]">
              <div className="text-center">
                <div className="text-rysun-lightblue font-bold text-xl uppercase tracking-widest mb-2">April</div>
                <div className="text-white font-black text-7xl leading-none mb-2">15</div>
                <div className="text-gray-400 font-medium text-lg">2026</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const PlatformAccelerators = () => {
  const products = [
    { name: 'eCube', desc: 'Enterprise data intelligence platform for unified analytics.', color: 'text-rysun-blue', bg: 'bg-blue-50', icon: <Database className="w-8 h-8" /> },
    { name: 'ShopMate', desc: 'AI-driven retail personalization and merchandising engine.', color: 'text-rysun-orange', bg: 'bg-orange-50', icon: <Globe className="w-8 h-8" /> },
    { name: 'RevMate', desc: 'Revenue operations automation and forecasting solution.', color: 'text-rysun-red', bg: 'bg-red-50', icon: <BarChart3 className="w-8 h-8" /> }
  ];

  return (
    <section className="py-16 bg-gray-50 border-y border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-full bg-rysun-lightblue/10 border border-rysun-lightblue/20 mb-6 mx-auto">
            <Sparkles className="w-4 h-4 text-rysun-blue" />
            <span className="text-sm font-bold text-rysun-blue tracking-wider uppercase">Platforms & Accelerators</span>
          </div>
          <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-4">Solutions That Deliver Meaningful Experiences</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {products.map((product, idx) => (
            <div key={idx} className="bg-white rounded-3xl border border-gray-200 p-8 hover:shadow-xl transition-all group flex flex-col">
              <div className={`w-16 h-16 rounded-2xl ${product.bg} ${product.color} flex items-center justify-center mb-6`}>
                {product.icon}
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-rysun-blue transition-colors">{product.name}</h3>
              <p className="text-gray-600 mb-6 text-sm flex-grow">{product.desc}</p>
              <Link to={`/platforms/${product.name.toLowerCase()}`} className="inline-flex items-center text-sm font-bold text-rysun-blue hover:text-rysun-lightblue transition-colors mt-auto">
                Learn more <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const RelentlessInnovation = () => (
  <section className="py-16 bg-rysun-darkpurple text-white relative overflow-hidden">
    <div className="absolute inset-0 bg-[url('https://picsum.photos/seed/rysun-innovation/1920/1080?blur=4')] opacity-10 mix-blend-overlay" />
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div>
          <h2 className="text-3xl md:text-5xl font-black mb-6 leading-tight">
            25 Years of <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-rysun-lightblue to-blue-400">Relentless Innovation</span>
          </h2>
          <p className="text-xl text-gray-300 mb-10 leading-relaxed">
            Since our inception, we have been at the forefront of technological evolution, helping enterprises navigate complex digital landscapes and achieve sustainable growth through continuous innovation.
          </p>
          <div className="grid grid-cols-2 gap-8">
            <div>
              <div className="text-5xl font-black text-white mb-2">25+</div>
              <div className="text-sm text-gray-400 uppercase tracking-wider font-semibold">Years of Excellence</div>
            </div>
            <div>
              <div className="text-5xl font-black text-white mb-2">500+</div>
              <div className="text-sm text-gray-400 uppercase tracking-wider font-semibold">Enterprise Clients</div>
            </div>
            <div>
              <div className="text-5xl font-black text-white mb-2">50+</div>
              <div className="text-sm text-gray-400 uppercase tracking-wider font-semibold">Global Awards</div>
            </div>
            <div>
              <div className="text-5xl font-black text-white mb-2">10k+</div>
              <div className="text-sm text-gray-400 uppercase tracking-wider font-semibold">Projects Delivered</div>
            </div>
          </div>
        </div>
        <div className="relative">
          <div className="aspect-square rounded-full border border-white/10 flex items-center justify-center p-8 relative">
            <div className="absolute inset-0 border border-rysun-lightblue/30 rounded-full animate-[spin_20s_linear_infinite]" />
            <div className="absolute inset-4 border border-rysun-orange/30 rounded-full animate-[spin_15s_linear_infinite_reverse]" />
            <div className="w-full h-full bg-gradient-to-br from-white/10 to-transparent rounded-full backdrop-blur-sm flex items-center justify-center p-8">
              <img src="https://picsum.photos/seed/rysun-history/600/600" alt="Innovation Journey" className="w-full h-full object-cover rounded-full mix-blend-luminosity opacity-80" referrerPolicy="no-referrer" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const LifeAtRysun = () => (
  <section className="py-24 bg-gray-50 border-t border-gray-100">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-8">
        <div className="max-w-2xl">
          <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-4">Life at Rysun</h2>
          <p className="text-lg text-gray-600">
            Join a global team of innovators, creators, and problem-solvers. We foster a culture of continuous learning, collaboration, and excellence.
          </p>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 h-auto md:h-[600px]">
        {/* Main Video Card */}
        <div className="md:col-span-8 rounded-3xl overflow-hidden relative group shadow-sm border border-gray-200 bg-black h-[400px] md:h-full">
          <iframe 
            className="absolute inset-0 w-full h-full"
            src="https://www.youtube.com/embed/SIJ-0CM_BQM?si=XUnjsf98Ga3hMunz&autoplay=0&mute=1&controls=1&loop=1&playlist=SIJ-0CM_BQM" 
            title="Life at Rysun Corporate Video" 
            frameBorder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            allowFullScreen
          ></iframe>
          {/* Optional overlay if you want to style the video container further, but usually iframe is enough */}
        </div>
        
        <div className="md:col-span-4 flex flex-col gap-6 h-[600px] md:h-full">
          {/* Latest Event Card */}
          <div className="flex-1 rounded-3xl overflow-hidden relative group shadow-sm border border-gray-200 bg-white flex flex-col">
            <div className="h-32 relative overflow-hidden">
              <img src="https://picsum.photos/seed/rysun-event/600/300" alt="Latest Event" className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" referrerPolicy="no-referrer" />
              <div className="absolute top-4 left-4 bg-rysun-orange text-white px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider shadow-sm z-10">
                Latest Event
              </div>
            </div>
            <div className="p-6 flex flex-col flex-grow justify-between">
              <div>
                <div className="text-sm text-gray-500 mb-2 font-medium">October 15-17, 2026 • Las Vegas, NV</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2 leading-tight group-hover:text-rysun-orange transition-colors">Tech Innovators Summit 2026</h3>
                <p className="text-gray-600 text-sm line-clamp-2">Join Rysun experts as we discuss the future of enterprise AI and data analytics.</p>
              </div>
              <Link to="/company/events" className="inline-flex items-center text-sm font-bold text-rysun-orange mt-4 group-hover:translate-x-1 transition-transform">
                Event Details <ArrowRight className="ml-1 w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Apply Now CTA Card */}
          <div className="flex-1 rounded-3xl overflow-hidden relative group shadow-sm border border-gray-200 bg-gradient-to-br from-rysun-blue to-rysun-darkpurple flex flex-col justify-center items-center text-center p-8">
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10 mix-blend-overlay"></div>
            <div className="relative z-10">
              <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4 backdrop-blur-sm border border-white/20">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">Be a Part of Rysun</h3>
              <p className="text-white/80 text-sm mb-6 max-w-[250px] mx-auto">
                Ready to accelerate your career? Explore open roles and join our global team.
              </p>
              <Link to="/company/careers" className="inline-flex items-center justify-center px-6 py-3 text-sm font-bold rounded-full text-rysun-blue bg-white hover:bg-gray-50 transition-colors shadow-md hover:shadow-lg transform hover:-translate-y-0.5">
                Apply Now <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default function Home() {
  return (
    <div className="w-full bg-white">
      <HeroSlider />
      <AIChatAssistant />
      <CapabilityNavigator />
      <ImpactStories />
      <IndustryExpertise />
      <PlatformAccelerators />
      <RelentlessInnovation />
      <Insights />
      <UpcomingEvents />
      <Logos />
      <WhyRysun />
      <LifeAtRysun />
      <ContactSection />
    </div>
  );
}
