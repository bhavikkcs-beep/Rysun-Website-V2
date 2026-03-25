import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  Lightbulb, 
  Globe, 
  BookOpen, 
  Users, 
  ShieldCheck,
  Brain,
  Database,
  Cloud,
  Layout,
  Settings,
  Award,
  TrendingUp,
  CheckCircle2
} from 'lucide-react';

const CareersPage = () => {
  return (
    <div className="bg-white">
      {/* 1. Hero Banner */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden bg-slate-900">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2850&q=80" 
            alt="Technology professionals collaborating" 
            className="w-full h-full object-cover opacity-20"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/90 to-transparent"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight mb-6 leading-tight">
                Build the Future of <span className="text-transparent bg-clip-text bg-gradient-to-r from-rysun-lightblue to-blue-400">AI, Data & Digital Innovation</span>
              </h1>
              <p className="text-xl text-gray-300 mb-10 leading-relaxed">
                Join a team of innovators shaping intelligent enterprises through cutting-edge technology, data-driven insights, and digital transformation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/company/careers/current-openings" className="inline-flex items-center justify-center px-8 py-4 text-base font-bold rounded-full text-white bg-gradient-to-r from-rysun-blue to-rysun-lightblue hover:shadow-[0_0_30px_rgba(0,169,233,0.5)] hover:-translate-y-0.5 transition-all">
                  Explore Opportunities
                </Link>
                <a href="#talent-network" className="inline-flex items-center justify-center px-8 py-4 text-base font-bold rounded-full text-white bg-white/10 border border-white/20 hover:bg-white/20 transition-all backdrop-blur-sm">
                  Join Our Talent Network
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 2. Why Build Your Career at Rysun */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Why Build Your Career at Rysun</h2>
            <p className="text-lg text-gray-600">Discover what makes Rysun Labs a great place to grow, innovate, and make an impact.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Lightbulb,
                title: "Innovation-Driven Work",
                description: "Work on transformative AI, data, and digital engineering initiatives for global enterprises."
              },
              {
                icon: Globe,
                title: "Global Exposure",
                description: "Collaborate with clients across industries and international markets."
              },
              {
                icon: BookOpen,
                title: "Continuous Learning",
                description: "Develop new skills through certifications, mentoring, and knowledge sharing."
              },
              {
                icon: Users,
                title: "Collaborative Culture",
                description: "Work with passionate teams that value innovation, ownership, and teamwork."
              },
              {
                icon: ShieldCheck,
                title: "Long-Term Stability",
                description: "Be part of a technology company with a strong 25+ year legacy."
              }
            ].map((feature, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
              >
                <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center mb-6">
                  <feature.icon className="w-6 h-6 text-rysun-blue" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Innovation Areas You’ll Work On */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Innovation Areas You’ll Work On</h2>
            <p className="text-lg text-gray-600">Drive the future of technology across these core domains.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Brain,
                title: "Artificial Intelligence & Machine Learning",
                description: "Building intelligent systems and AI-driven applications."
              },
              {
                icon: Database,
                title: "Data Engineering & Analytics",
                description: "Designing scalable data platforms and advanced analytics solutions."
              },
              {
                icon: Cloud,
                title: "Cloud & Enterprise Platforms",
                description: "Modernizing enterprise infrastructure and applications."
              },
              {
                icon: Layout,
                title: "Digital Experience Engineering",
                description: "Building modern web, mobile, and customer experience platforms."
              },
              {
                icon: Settings,
                title: "Automation & Intelligent Workflows",
                description: "Implementing automation solutions to optimize enterprise operations."
              }
            ].map((domain, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group relative overflow-hidden rounded-2xl bg-slate-50 p-8 border border-slate-100 hover:border-rysun-blue/30 transition-colors"
              >
                <div className="absolute top-0 right-0 -mt-4 -mr-4 w-24 h-24 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-full opacity-50 group-hover:scale-150 transition-transform duration-500"></div>
                <div className="relative z-10">
                  <domain.icon className="w-8 h-8 text-rysun-blue mb-5" />
                  <h3 className="text-xl font-bold text-slate-900 mb-3">{domain.title}</h3>
                  <p className="text-gray-600">{domain.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Career Growth & Learning Opportunities */}
      <section className="py-20 bg-slate-900 text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Career Growth & Learning Opportunities</h2>
              <p className="text-gray-400 text-lg mb-10">We invest in your potential with structured pathways and a culture that champions continuous development.</p>
              
              <div className="space-y-8">
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center shrink-0">
                    <Award className="w-6 h-6 text-rysun-lightblue" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Professional Development</h3>
                    <p className="text-gray-400">Certification programs, technical training, and leadership mentoring.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center shrink-0">
                    <Lightbulb className="w-6 h-6 text-rysun-lightblue" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Innovation Culture</h3>
                    <p className="text-gray-400">Internal innovation initiatives, hackathons, and R&D programs.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-tr from-rysun-blue/20 to-purple-500/20 rounded-3xl blur-3xl"></div>
              <div className="relative bg-slate-800 border border-slate-700 rounded-3xl p-8 shadow-2xl">
                <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
                  <TrendingUp className="w-6 h-6 text-rysun-lightblue" />
                  Career Pathways
                </h3>
                
                <div className="space-y-6 relative before:absolute before:inset-y-0 before:left-[15px] before:w-0.5 before:bg-slate-700">
                  {[
                    "Technical Specialist",
                    "Solution Architect",
                    "Consulting Leader",
                    "Product Innovator"
                  ].map((path, index) => (
                    <div key={index} className="relative pl-10">
                      <div className="absolute left-0 top-1.5 w-8 h-8 bg-slate-800 border-2 border-rysun-lightblue rounded-full flex items-center justify-center z-10">
                        <div className="w-2.5 h-2.5 bg-rysun-lightblue rounded-full"></div>
                      </div>
                      <div className="bg-slate-700/50 p-4 rounded-xl border border-slate-600">
                        <h4 className="font-bold text-lg">{path}</h4>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Teams & Roles */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Teams & Roles</h2>
            <p className="text-lg text-gray-600">Explore the diverse teams driving innovation at Rysun Labs.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "AI & Data Engineering", desc: "Build scalable data pipelines and intelligent models." },
              { title: "Software Engineering", desc: "Develop robust and scalable enterprise applications." },
              { title: "Cloud & DevOps", desc: "Architect and manage modern cloud infrastructure." },
              { title: "Digital Product Development", desc: "Design and build user-centric digital products." },
              { title: "Business Consulting", desc: "Advise clients on digital transformation strategies." },
              { title: "Quality Engineering", desc: "Ensure software excellence through automated testing." },
              { title: "Corporate Operations", desc: "Support business growth through HR, Finance, and Marketing." }
            ].map((team, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:border-rysun-blue/50 transition-colors">
                <h3 className="font-bold text-slate-900 mb-2">{team.title}</h3>
                <p className="text-sm text-gray-600">{team.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Hiring Journey */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Our Hiring Journey</h2>
            <p className="text-lg text-gray-600">A transparent and engaging process designed to help us get to know you better.</p>
          </div>

          <div className="relative">
            <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-gray-200 -translate-y-1/2 z-0"></div>
            <div className="grid grid-cols-1 md:grid-cols-5 gap-8 relative z-10">
              {[
                { step: "01", title: "Profile Review", desc: "We review your application and experience." },
                { step: "02", title: "Technical Assessment", desc: "A practical evaluation of your skills." },
                { step: "03", title: "Technical Discussion", desc: "Deep dive into your expertise with our team." },
                { step: "04", title: "Leadership Interaction", desc: "Meet with our leaders to discuss vision and fit." },
                { step: "05", title: "Offer & Onboarding", desc: "Welcome to the Rysun Labs team!" }
              ].map((item, index) => (
                <div key={index} className="flex flex-col items-center text-center">
                  <div className="w-16 h-16 bg-white border-4 border-blue-50 rounded-full flex items-center justify-center shadow-lg mb-6 relative">
                    <span className="text-xl font-bold text-rysun-blue">{item.step}</span>
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">{item.title}</h3>
                  <p className="text-sm text-gray-600">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 7. Employee Benefits & Workplace Experience */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Employee Benefits & Workplace Experience</h2>
            <p className="text-lg text-gray-600">We care about your well-being, growth, and work-life balance.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
              <div className="w-12 h-12 bg-indigo-50 rounded-xl flex items-center justify-center mb-6">
                <BookOpen className="w-6 h-6 text-indigo-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">Professional Growth</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3 text-gray-600">
                  <CheckCircle2 className="w-5 h-5 text-indigo-500 shrink-0 mt-0.5" />
                  <span>Learning programs</span>
                </li>
                <li className="flex items-start gap-3 text-gray-600">
                  <CheckCircle2 className="w-5 h-5 text-indigo-500 shrink-0 mt-0.5" />
                  <span>Certification support</span>
                </li>
                <li className="flex items-start gap-3 text-gray-600">
                  <CheckCircle2 className="w-5 h-5 text-indigo-500 shrink-0 mt-0.5" />
                  <span>Technology conferences</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
              <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center mb-6">
                <Globe className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">Work Environment</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3 text-gray-600">
                  <CheckCircle2 className="w-5 h-5 text-blue-500 shrink-0 mt-0.5" />
                  <span>Hybrid work flexibility</span>
                </li>
                <li className="flex items-start gap-3 text-gray-600">
                  <CheckCircle2 className="w-5 h-5 text-blue-500 shrink-0 mt-0.5" />
                  <span>Collaborative teams</span>
                </li>
                <li className="flex items-start gap-3 text-gray-600">
                  <CheckCircle2 className="w-5 h-5 text-blue-500 shrink-0 mt-0.5" />
                  <span>Innovation culture</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
              <div className="w-12 h-12 bg-emerald-50 rounded-xl flex items-center justify-center mb-6">
                <ShieldCheck className="w-6 h-6 text-emerald-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">Employee Wellbeing</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3 text-gray-600">
                  <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                  <span>Health programs</span>
                </li>
                <li className="flex items-start gap-3 text-gray-600">
                  <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                  <span>Recognition initiatives</span>
                </li>
                <li className="flex items-start gap-3 text-gray-600">
                  <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                  <span>Team engagement activities</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 8. Talent Community Section */}
      <section id="talent-network" className="py-20 bg-rysun-blue text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Stay Connected with Rysun</h2>
          <p className="text-xl text-blue-100 mb-10 leading-relaxed">
            Join our talent community to stay updated on new career opportunities, technology initiatives, and innovation programs.
          </p>
          <button className="inline-flex items-center justify-center px-8 py-4 text-base font-bold rounded-full text-rysun-blue bg-white hover:bg-gray-50 transition-all shadow-lg hover:shadow-xl hover:-translate-y-1">
            Join Our Talent Network
          </button>
        </div>
      </section>

      {/* Final Call-to-Action Banner */}
      <section className="py-24 bg-slate-900 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-rysun-blue/20 to-purple-600/20 mix-blend-multiply"></div>
          <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
        </div>
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Ready to Build the Future with Us?</h2>
          <p className="text-xl text-gray-300 mb-10">
            Explore exciting opportunities and become part of a team shaping the future of intelligent enterprises.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/company/careers/current-openings" className="inline-flex items-center justify-center px-8 py-4 text-base font-bold rounded-full text-white bg-gradient-to-r from-rysun-blue to-rysun-lightblue hover:shadow-[0_0_30px_rgba(0,169,233,0.5)] hover:-translate-y-0.5 transition-all">
              Explore Opportunities
            </Link>
            <a href="#talent-network" className="inline-flex items-center justify-center px-8 py-4 text-base font-bold rounded-full text-white bg-white/10 border border-white/20 hover:bg-white/20 transition-all backdrop-blur-sm">
              Join Our Talent Network
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CareersPage;
