import React from 'react';
import { Mail, MapPin, Phone } from 'lucide-react';

export default function ContactUs() {
  return (
    <div className="w-full bg-white">
      <section className="relative pt-32 pb-24 lg:pt-40 lg:pb-32 bg-gray-50 border-b border-gray-100 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 tracking-tight mb-6 leading-tight">
              Contact Us
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Ready to accelerate your digital transformation? Connect with our experts to discuss your enterprise needs.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Get in Touch</h2>
              <form className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">First Name</label>
                    <input type="text" id="firstName" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-rysun-lightblue focus:border-transparent outline-none transition-all" placeholder="John" />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">Last Name</label>
                    <input type="text" id="lastName" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-rysun-lightblue focus:border-transparent outline-none transition-all" placeholder="Doe" />
                  </div>
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">Work Email</label>
                  <input type="email" id="email" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-rysun-lightblue focus:border-transparent outline-none transition-all" placeholder="john.doe@company.com" />
                </div>
                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">Company</label>
                  <input type="text" id="company" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-rysun-lightblue focus:border-transparent outline-none transition-all" placeholder="Company Name" />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">How can we help?</label>
                  <textarea id="message" rows={4} className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-rysun-lightblue focus:border-transparent outline-none transition-all" placeholder="Tell us about your project..."></textarea>
                </div>
                <button type="button" className="w-full bg-rysun-blue text-white font-medium py-4 rounded-xl hover:bg-rysun-lightblue transition-colors shadow-md">
                  Send Message
                </button>
              </form>
            </div>
            
            <div className="lg:pl-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Global Offices</h2>
              <div className="space-y-10">
                <div className="flex items-start">
                  <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center flex-shrink-0 mr-6">
                    <MapPin className="w-6 h-6 text-rysun-blue" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Headquarters</h3>
                    <p className="text-gray-600 leading-relaxed">
                      123 Enterprise Way, Suite 500<br />
                      San Francisco, CA 94105<br />
                      United States
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center flex-shrink-0 mr-6">
                    <Phone className="w-6 h-6 text-rysun-blue" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Phone</h3>
                    <p className="text-gray-600 leading-relaxed">
                      +1 (800) 123-4567<br />
                      Mon-Fri, 9am - 6pm PST
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center flex-shrink-0 mr-6">
                    <Mail className="w-6 h-6 text-rysun-blue" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Email</h3>
                    <p className="text-gray-600 leading-relaxed">
                      contact@rysun.com<br />
                      support@rysun.com
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
