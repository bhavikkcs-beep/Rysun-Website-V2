import React from 'react';
import { Mail, MapPin, Phone, ArrowRight, Briefcase, Handshake, MessageSquare, Linkedin, Youtube, Twitter, Globe, Award, CheckCircle2, Calendar, Users, Send } from 'lucide-react';
import { motion } from 'framer-motion';

export default function ContactUs() {
  return (
    <div className="w-full bg-white font-sans text-gray-900">
      {/* 1. Hero Section */}
      <section className="relative pt-32 pb-24 lg:pt-40 lg:pb-32 bg-slate-900 overflow-hidden">
        {/* Abstract Background Pattern */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-blue-400 via-transparent to-transparent"></div>
          <svg className="absolute w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="grid-pattern" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="1" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid-pattern)" />
          </svg>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-2xl"
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight mb-6 leading-tight">
                Connect With Our Team
              </h1>
              <p className="text-xl text-gray-300 mb-10 leading-relaxed">
                Whether you're exploring AI-driven digital transformation, looking for a technology partner, or interested in joining our team, the experts at Rysun are ready to help.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="#contact-form" className="inline-flex items-center justify-center px-6 py-3.5 text-base font-medium rounded-lg text-slate-900 bg-white hover:bg-gray-50 transition-colors shadow-sm">
                  Send an Inquiry
                </a>
                <a href="#schedule" className="inline-flex items-center justify-center px-6 py-3.5 text-base font-medium rounded-lg text-white bg-blue-600 hover:bg-blue-700 transition-colors shadow-sm">
                  Schedule a Consultation
                </a>
              </div>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="hidden lg:flex justify-end"
            >
              {/* Minimal Illustration Placeholder */}
              <div className="w-full max-w-md aspect-square relative">
                <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/20 to-purple-500/20 rounded-full blur-3xl"></div>
                <div className="relative h-full w-full border border-white/10 rounded-2xl bg-white/5 backdrop-blur-sm p-8 flex flex-col justify-between">
                  <div className="flex justify-between items-start">
                    <div className="w-12 h-12 rounded-full bg-blue-500/20 flex items-center justify-center">
                      <Globe className="w-6 h-6 text-blue-400" />
                    </div>
                    <div className="flex gap-2">
                      <div className="w-3 h-3 rounded-full bg-green-400"></div>
                      <div className="w-3 h-3 rounded-full bg-blue-400"></div>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="h-2 w-1/3 bg-white/20 rounded"></div>
                    <div className="h-2 w-3/4 bg-white/20 rounded"></div>
                    <div className="h-2 w-1/2 bg-white/20 rounded"></div>
                  </div>
                  <div className="flex items-center gap-4 pt-6 border-t border-white/10">
                    <div className="w-10 h-10 rounded-full bg-white/10"></div>
                    <div>
                      <div className="h-2 w-20 bg-white/30 rounded mb-2"></div>
                      <div className="h-2 w-12 bg-white/10 rounded"></div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 2. Contact Categories Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">How Can We Help?</h2>
            <p className="text-lg text-slate-600">Select the category that best matches your inquiry to ensure it reaches the right team.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <motion.div 
              whileHover={{ y: -5 }}
              className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 flex flex-col h-full"
            >
              <div className="w-14 h-14 rounded-xl bg-blue-50 flex items-center justify-center mb-6">
                <Briefcase className="w-7 h-7 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Business & Sales Inquiries</h3>
              <p className="text-slate-600 mb-6 flex-grow">For organizations exploring AI, Data, and Digital solutions.</p>
              <div className="space-y-3 mb-8">
                <div className="flex items-center text-slate-700">
                  <Mail className="w-5 h-5 mr-3 text-slate-400" />
                  <a href="mailto:info@rysun.com" className="hover:text-blue-600 transition-colors">info@rysun.com</a>
                </div>
                <div className="flex items-center text-slate-700">
                  <Phone className="w-5 h-5 mr-3 text-slate-400" />
                  <a href="tel:+18555277890" className="hover:text-blue-600 transition-colors">+1 855 527 7890</a>
                </div>
              </div>
              <a href="#schedule" className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-700 transition-colors group">
                Request Consultation
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </a>
            </motion.div>

            {/* Card 2 */}
            <motion.div 
              whileHover={{ y: -5 }}
              className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 flex flex-col h-full"
            >
              <div className="w-14 h-14 rounded-xl bg-indigo-50 flex items-center justify-center mb-6">
                <Handshake className="w-7 h-7 text-indigo-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Partnerships & Alliances</h3>
              <p className="text-slate-600 mb-6 flex-grow">For technology partners, platform collaborations, and ecosystem alliances.</p>
              <div className="space-y-3 mb-8">
                <div className="flex items-center text-slate-700">
                  <Mail className="w-5 h-5 mr-3 text-slate-400" />
                  <a href="mailto:info@rysun.com" className="hover:text-indigo-600 transition-colors">info@rysun.com</a>
                </div>
              </div>
              <a href="#contact-form" className="inline-flex items-center text-indigo-600 font-semibold hover:text-indigo-700 transition-colors group mt-auto">
                Become a Partner
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </a>
            </motion.div>

            {/* Card 3 */}
            <motion.div 
              whileHover={{ y: -5 }}
              className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 flex flex-col h-full"
            >
              <div className="w-14 h-14 rounded-xl bg-teal-50 flex items-center justify-center mb-6">
                <Users className="w-7 h-7 text-teal-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Careers & Talent</h3>
              <p className="text-slate-600 mb-6 flex-grow">Interested in building the future of AI and digital innovation with Rysun?</p>
              <div className="space-y-3 mb-8">
                <div className="flex items-center text-slate-700">
                  <Mail className="w-5 h-5 mr-3 text-slate-400" />
                  <a href="mailto:careers@rysun.com" className="hover:text-teal-600 transition-colors">careers@rysun.com</a>
                </div>
              </div>
              <a href="#contact-form" className="inline-flex items-center text-teal-600 font-semibold hover:text-teal-700 transition-colors group mt-auto">
                Explore Careers
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 3. Contact Form Section */}
      <section id="contact-form" className="py-24 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">Send Us a Message</h2>
              <p className="text-lg text-slate-600 mb-10">Fill out the form below and our team will get back to you promptly.</p>
              
              <form className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="fullName" className="block text-sm font-medium text-slate-700 mb-2">Full Name *</label>
                    <input type="text" id="fullName" required className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all bg-gray-50 focus:bg-white" placeholder="John Doe" />
                  </div>
                  <div>
                    <label htmlFor="businessEmail" className="block text-sm font-medium text-slate-700 mb-2">Business Email *</label>
                    <input type="email" id="businessEmail" required className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all bg-gray-50 focus:bg-white" placeholder="john@company.com" />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-slate-700 mb-2">Phone Number</label>
                    <input type="tel" id="phone" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all bg-gray-50 focus:bg-white" placeholder="+1 (555) 000-0000" />
                  </div>
                  <div>
                    <label htmlFor="companyName" className="block text-sm font-medium text-slate-700 mb-2">Company Name *</label>
                    <input type="text" id="companyName" required className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all bg-gray-50 focus:bg-white" placeholder="Company Inc." />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="country" className="block text-sm font-medium text-slate-700 mb-2">Country / Location *</label>
                    <select id="country" required className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all bg-gray-50 focus:bg-white appearance-none">
                      <option value="">Select Country</option>
                      <option value="US">United States</option>
                      <option value="UK">United Kingdom</option>
                      <option value="IN">India</option>
                      <option value="ZA">South Africa</option>
                      <option value="OTHER">Other</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="inquiryType" className="block text-sm font-medium text-slate-700 mb-2">Inquiry Type *</label>
                    <select id="inquiryType" required className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all bg-gray-50 focus:bg-white appearance-none">
                      <option value="">Select Inquiry Type</option>
                      <option value="sales">Sales Inquiry</option>
                      <option value="partnership">Partnership Inquiry</option>
                      <option value="career">Career Inquiry</option>
                      <option value="general">General Inquiry</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-2">Message *</label>
                  <textarea id="message" required rows={5} className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all bg-gray-50 focus:bg-white resize-none" placeholder="How can we help you?"></textarea>
                </div>
                
                <button type="button" className="w-full sm:w-auto px-8 py-4 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors shadow-sm flex items-center justify-center">
                  Send Message
                  <Send className="w-4 h-4 ml-2" />
                </button>
                
                <p className="text-sm text-slate-500 mt-4 flex items-center">
                  <CheckCircle2 className="w-4 h-4 mr-2 text-green-500" />
                  Our team typically responds within 1–2 business days.
                </p>
              </form>
            </div>
            
            <div className="lg:pl-12 hidden lg:block">
              <div className="bg-slate-50 rounded-2xl p-10 border border-gray-100 h-full flex flex-col justify-center relative overflow-hidden">
                <div className="absolute top-0 right-0 -mt-10 -mr-10 w-40 h-40 bg-blue-100 rounded-full blur-3xl opacity-50"></div>
                <div className="absolute bottom-0 left-0 -mb-10 -ml-10 w-40 h-40 bg-indigo-100 rounded-full blur-3xl opacity-50"></div>
                
                <div className="relative z-10">
                  <MessageSquare className="w-12 h-12 text-blue-600 mb-6" />
                  <h3 className="text-2xl font-bold text-slate-900 mb-4">Let's Build the Future Together</h3>
                  <p className="text-slate-600 mb-8 leading-relaxed">
                    At Rysun, we believe in the power of collaboration to drive digital innovation. Whether you are looking to modernize your legacy systems, harness the power of AI, or unlock insights from your data, our experts are here to guide you every step of the way.
                  </p>
                  
                  <div className="space-y-4">
                    <div className="flex items-center">
                      <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center mr-4">
                        <span className="text-blue-600 font-bold text-sm">1</span>
                      </div>
                      <span className="text-slate-700 font-medium">Submit your inquiry</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center mr-4">
                        <span className="text-blue-600 font-bold text-sm">2</span>
                      </div>
                      <span className="text-slate-700 font-medium">Connect with an expert</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center mr-4">
                        <span className="text-blue-600 font-bold text-sm">3</span>
                      </div>
                      <span className="text-slate-700 font-medium">Discover tailored solutions</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Global Office Locations Section */}
      <section className="py-24 bg-slate-50 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Our Global Offices</h2>
            <p className="text-lg text-slate-600 max-w-2xl">With a presence across multiple continents, we deliver global expertise with local understanding.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* US */}
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
              <div className="flex items-center mb-6">
                <MapPin className="w-6 h-6 text-blue-600 mr-3" />
                <h3 className="text-xl font-bold text-slate-900">United States</h3>
              </div>
              <p className="text-sm font-semibold text-blue-600 mb-2 uppercase tracking-wider">Corporate Office</p>
              <address className="not-italic text-slate-600 space-y-1 mb-6">
                1525 McCarthy Blvd, Suite 212<br />
                Milpitas, CA 95035, USA
              </address>
              <div className="space-y-2 text-sm">
                <p className="flex items-center text-slate-700"><Phone className="w-4 h-4 mr-2 text-slate-400" /> +1 855 527 7890</p>
                <p className="flex items-center text-slate-700"><Mail className="w-4 h-4 mr-2 text-slate-400" /> info@rysun.com</p>
              </div>
            </div>

            {/* India - Ahmedabad */}
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
              <div className="flex items-center mb-6">
                <MapPin className="w-6 h-6 text-blue-600 mr-3" />
                <h3 className="text-xl font-bold text-slate-900">India</h3>
              </div>
              <p className="text-sm font-semibold text-blue-600 mb-2 uppercase tracking-wider">Ahmedabad</p>
              <address className="not-italic text-slate-600 space-y-1">
                4th & 5th Floor<br />
                Atal-Kalam Research Park<br />
                Opp. GUSEC, Gujarat University<br />
                Ahmedabad, Gujarat 380009<br />
                India
              </address>
            </div>

            {/* India - Pune */}
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
              <div className="flex items-center mb-6">
                <MapPin className="w-6 h-6 text-blue-600 mr-3" />
                <h3 className="text-xl font-bold text-slate-900">India</h3>
              </div>
              <p className="text-sm font-semibold text-blue-600 mb-2 uppercase tracking-wider">Pune</p>
              <address className="not-italic text-slate-600 space-y-1">
                602, East Court<br />
                Viman Nagar<br />
                Pune, Maharashtra 411014<br />
                India
              </address>
            </div>

            {/* India - Hyderabad */}
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
              <div className="flex items-center mb-6">
                <MapPin className="w-6 h-6 text-blue-600 mr-3" />
                <h3 className="text-xl font-bold text-slate-900">India</h3>
              </div>
              <p className="text-sm font-semibold text-blue-600 mb-2 uppercase tracking-wider">Hyderabad</p>
              <address className="not-italic text-slate-600 space-y-1">
                Vedams Towers, 5th Floor<br />
                Plot No. 82/D & 83/D<br />
                Survey No. 78, Patrika Nagar<br />
                HiTech City, Hyderabad<br />
                Telangana 500081<br />
                India
              </address>
            </div>

            {/* UK */}
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
              <div className="flex items-center mb-6">
                <MapPin className="w-6 h-6 text-blue-600 mr-3" />
                <h3 className="text-xl font-bold text-slate-900">United Kingdom</h3>
              </div>
              <address className="not-italic text-slate-600 space-y-1">
                3 Onyx Crescent<br />
                Leicester LE4 9AE<br />
                United Kingdom
              </address>
            </div>

            {/* South Africa */}
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
              <div className="flex items-center mb-6">
                <MapPin className="w-6 h-6 text-blue-600 mr-3" />
                <h3 className="text-xl font-bold text-slate-900">South Africa</h3>
              </div>
              <address className="not-italic text-slate-600 space-y-1">
                Unit 1, First Floor<br />
                Manhattan Office Park<br />
                16 Pieter Street<br />
                Highveld Techno Park<br />
                Centurion, Gauteng 0169<br />
                South Africa
              </address>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Schedule a Consultation Section */}
      <section id="schedule" className="py-20 bg-gradient-to-br from-slate-900 to-blue-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <Calendar className="w-12 h-12 text-blue-400 mx-auto mb-6" />
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Talk to Our Experts</h2>
          <p className="text-xl text-blue-100 mb-10 leading-relaxed">
            Interested in exploring how AI, data intelligence, and digital innovation can accelerate your business? Schedule a consultation with our technology specialists.
          </p>
          <button className="inline-flex items-center justify-center px-8 py-4 text-lg font-medium rounded-lg text-slate-900 bg-white hover:bg-gray-50 transition-colors shadow-lg">
            Book a Meeting
          </button>
        </div>
      </section>

      {/* 6. Social Media & 7. Trust Strip */}
      <section className="py-16 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            
            {/* Social Media */}
            <div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Connect With Us</h3>
              <p className="text-slate-600 mb-6">
                Follow Rysun for insights on AI innovation, digital transformation, and enterprise technology trends.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="w-12 h-12 rounded-full bg-slate-100 flex items-center justify-center text-slate-600 hover:bg-blue-600 hover:text-white transition-all">
                  <Linkedin className="w-5 h-5" />
                </a>
                <a href="#" className="w-12 h-12 rounded-full bg-slate-100 flex items-center justify-center text-slate-600 hover:bg-red-600 hover:text-white transition-all">
                  <Youtube className="w-5 h-5" />
                </a>
                <a href="#" className="w-12 h-12 rounded-full bg-slate-100 flex items-center justify-center text-slate-600 hover:bg-slate-900 hover:text-white transition-all">
                  <Twitter className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* Trust & Certifications */}
            <div className="md:border-l border-gray-200 md:pl-12">
              <div className="flex items-center mb-6 space-x-6">
                <div className="flex items-center justify-center px-4 py-2 bg-slate-50 border border-gray-200 rounded-lg font-bold text-slate-700 text-sm">
                  CMMI Level 5
                </div>
                <div className="flex items-center justify-center px-4 py-2 bg-slate-50 border border-gray-200 rounded-lg font-bold text-slate-700 text-sm">
                  ISO Certified
                </div>
                <div className="flex items-center justify-center px-4 py-2 bg-slate-50 border border-gray-200 rounded-lg font-bold text-slate-700 text-sm">
                  FIEO Member
                </div>
              </div>
              <div className="flex items-start">
                <Award className="w-6 h-6 text-blue-600 mr-3 flex-shrink-0 mt-1" />
                <p className="text-slate-600 text-sm leading-relaxed">
                  Trusted by global enterprises for over 25 years of technology innovation and digital transformation.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
