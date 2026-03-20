import React, { useState } from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import { sitemap, slugify } from '../data/sitemap';
import { ChevronDown, Menu, X, MessageSquare, Linkedin, Twitter, Youtube, Award, ChevronRight } from 'lucide-react';

const Logo = () => (
  <Link to="/" className="flex items-center gap-2">
    <span className="text-2xl font-bold text-rysun-blue tracking-tight">Rysun</span>
  </Link>
);

const AnnouncementStrip = () => (
  <div className="bg-gradient-to-r from-rysun-blue to-rysun-darkpurple text-white py-2 px-4 text-center text-sm font-medium flex items-center justify-center gap-4">
    <span>Celebrating 25 Years of Innovation — Rysun Labs Silver Jubilee Year</span>
    <Link to="/company/about-rysun" className="underline hover:text-blue-200 transition-colors">
      Explore Our Journey
    </Link>
  </div>
);

const MegaMenu = () => {
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [expandedMobileMenu, setExpandedMobileMenu] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState<string>('AI Services & Solutions');
  const location = useLocation();

  // Close menu on route change
  React.useEffect(() => {
    setActiveMenu(null);
    setMobileMenuOpen(false);
    setExpandedMobileMenu(null);
  }, [location.pathname]);

  const toggleMobileMenu = (key: string) => {
    setExpandedMobileMenu(expandedMobileMenu === key ? null : key);
  };

  return (
    <header className="fixed top-0 w-full z-50">
      <AnnouncementStrip />
      <div className="bg-white/90 backdrop-blur-md border-b border-gray-100 shadow-sm relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center h-16">
            <div className="w-1/4 flex justify-start">
              <Logo />
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex flex-1 justify-center space-x-8 h-full">
              {Object.keys(sitemap).map((key) => (
                <div
                  key={key}
                  className="flex items-center h-full"
                  onMouseEnter={() => {
                    setActiveMenu(key);
                    if (key === 'Capabilities') setActiveTab(Object.keys(sitemap.Capabilities)[0]);
                    if (key === 'Industries') setActiveTab(Object.keys(sitemap.Industries)[0]);
                    if (key === 'Company') setActiveTab(Object.keys(sitemap.Company)[0]);
                  }}
                  onMouseLeave={() => setActiveMenu(null)}
                >
                  <Link to={`/${slugify(key)}`} className="flex items-center gap-1 text-sm font-medium text-gray-700 hover:text-rysun-blue transition-colors">
                    {key}
                    <ChevronDown className={`w-4 h-4 transition-transform ${activeMenu === key ? 'rotate-180' : ''}`} />
                  </Link>

                  {/* Dropdown Content */}
                  {activeMenu === key && (
                    <div className="absolute top-full left-1/2 -translate-x-1/2 w-[90vw] max-w-6xl bg-white shadow-2xl border border-gray-100 rounded-b-2xl overflow-hidden">
                      <div className="p-8">
                        {key === 'Capabilities' && (
                          <div className="flex gap-6 min-h-[280px]">
                            <div className="w-1/3 border-r border-gray-100 pr-6 py-2 space-y-1">
                              {Object.keys(sitemap.Capabilities).map(capKey => (
                                <Link
                                  to={`/capabilities/${slugify(capKey)}`}
                                  key={capKey}
                                  onMouseEnter={() => setActiveTab(capKey)}
                                  className={`block w-full text-left px-4 py-2.5 rounded-xl font-bold transition-all ${activeTab === capKey ? 'bg-blue-50 text-rysun-blue shadow-sm' : 'text-gray-600 hover:bg-gray-50'}`}
                                >
                                  {capKey}
                                </Link>
                              ))}
                            </div>
                            <div className="w-2/3 py-2">
                              {activeTab && (sitemap.Capabilities as any)[activeTab] && (
                                <div className="grid grid-cols-2 gap-6">
                                  {Object.entries((sitemap.Capabilities as any)[activeTab]).map(([typeKey, items]) => (
                                    <div key={typeKey}>
                                      <h4 className="text-xs font-bold text-gray-400 mb-3 uppercase tracking-wider">{typeKey}</h4>
                                      <ul className="space-y-2 text-sm">
                                        {(items as string[]).map(item => (
                                          <li key={item}>
                                            <Link to={`/service/${slugify(item)}`} className="block text-gray-700 font-medium hover:text-rysun-blue hover:translate-x-1 transition-all">
                                              {item}
                                            </Link>
                                          </li>
                                        ))}
                                      </ul>
                                    </div>
                                  ))}
                                </div>
                              )}
                            </div>
                          </div>
                        )}

                        {key === 'Industries' && (
                          <div className="flex gap-6 min-h-[280px]">
                            <div className="w-1/3 border-r border-gray-100 pr-6 py-2 space-y-1">
                              {Object.keys(sitemap.Industries).map(indKey => (
                                <Link
                                  to={`/industry/${slugify(indKey)}`}
                                  key={indKey}
                                  onMouseEnter={() => setActiveTab(indKey)}
                                  className={`block w-full text-left px-4 py-2.5 rounded-xl font-bold transition-all ${activeTab === indKey ? 'bg-blue-50 text-rysun-blue shadow-sm' : 'text-gray-600 hover:bg-gray-50'}`}
                                >
                                  {indKey}
                                </Link>
                              ))}
                            </div>
                            <div className="w-2/3 py-2">
                              {activeTab && (sitemap.Industries as any)[activeTab] && (
                                <div>
                                  <h4 className="text-xs font-bold text-gray-400 mb-3 uppercase tracking-wider">Industry Solutions</h4>
                                  <ul className="grid grid-cols-2 gap-x-6 gap-y-2 text-sm">
                                    {((sitemap.Industries as any)[activeTab] as string[]).map(item => (
                                      <li key={item}>
                                        <Link to={`/industry/${slugify(item)}`} className="block text-gray-700 font-medium hover:text-rysun-blue hover:translate-x-1 transition-all">
                                          {item}
                                        </Link>
                                      </li>
                                    ))}
                                  </ul>
                                </div>
                              )}
                            </div>
                          </div>
                        )}

                        {key === 'Insights' && (
                          <div className="grid grid-cols-4 gap-6">
                            <div className="col-span-1">
                              <ul className="space-y-3">
                                {(sitemap as any)[key].map((item: string) => (
                                  <li key={item}>
                                    <Link to={`/${slugify(key)}/${slugify(item)}`} className="block text-base font-medium text-gray-700 hover:text-rysun-blue hover:translate-x-1 transition-all">
                                      {item}
                                    </Link>
                                  </li>
                                ))}
                              </ul>
                            </div>
                            <div className="col-span-3 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-8 flex items-center justify-center border border-blue-100">
                              <div className="text-center">
                                <h4 className="text-2xl font-bold text-rysun-blue mb-2">Explore {key}</h4>
                                <p className="text-gray-600">Discover our latest updates and organizational structure.</p>
                              </div>
                            </div>
                          </div>
                        )}

                        {key === 'Company' && (
                          <div className="flex gap-6 min-h-[280px]">
                            <div className="w-1/3 border-r border-gray-100 pr-6 py-2 space-y-1">
                              {Object.keys(sitemap.Company).map(compKey => (
                                <Link
                                  to={`/company/${slugify(compKey)}`}
                                  key={compKey}
                                  onMouseEnter={() => setActiveTab(compKey)}
                                  className={`block w-full text-left px-4 py-2.5 rounded-xl font-bold transition-all ${activeTab === compKey ? 'bg-blue-50 text-rysun-blue shadow-sm' : 'text-gray-600 hover:bg-gray-50'}`}
                                >
                                  {compKey}
                                </Link>
                              ))}
                            </div>
                            <div className="w-2/3 py-2">
                              {activeTab && (sitemap.Company as any)[activeTab] && (
                                <div>
                                  <h4 className="text-xs font-bold text-gray-400 mb-3 uppercase tracking-wider">{activeTab}</h4>
                                  {((sitemap.Company as any)[activeTab] as string[]).length > 0 ? (
                                    <ul className="grid grid-cols-2 gap-x-6 gap-y-2 text-sm">
                                      {((sitemap.Company as any)[activeTab] as string[]).map(item => (
                                        <li key={item}>
                                          <Link to={`/company/${slugify(activeTab)}/${slugify(item)}`} className="block text-gray-700 font-medium hover:text-rysun-blue hover:translate-x-1 transition-all">
                                            {item}
                                          </Link>
                                        </li>
                                      ))}
                                    </ul>
                                  ) : (
                                    <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-6 flex items-center justify-center border border-blue-100 h-full min-h-[200px]">
                                      <div className="text-center">
                                        <h4 className="text-xl font-bold text-rysun-blue mb-2">Explore {activeTab}</h4>
                                        <p className="text-sm text-gray-600">Discover our latest updates and organizational structure.</p>
                                        <Link to={`/company/${slugify(activeTab)}`} className="inline-flex items-center mt-3 text-sm text-rysun-blue font-medium hover:underline">
                                          View Details <ChevronRight className="w-4 h-4 ml-1" />
                                        </Link>
                                      </div>
                                    </div>
                                  )}
                                </div>
                              )}
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </nav>

            <div className="hidden lg:flex w-1/4 justify-end items-center gap-4">
              <Link to="/contact-us" className="bg-gradient-to-r from-rysun-blue to-rysun-lightblue text-white px-6 py-2.5 rounded-full text-sm font-medium hover:shadow-lg hover:-translate-y-0.5 transition-all">
                Talk to an Expert
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <div className="lg:hidden flex flex-1 justify-end items-center">
              <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="text-gray-700 p-2 focus:outline-none">
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 w-full bg-white border-t border-gray-100 shadow-xl max-h-[calc(100vh-80px)] overflow-y-auto">
            <div className="px-4 py-6 space-y-4">
              {Object.keys(sitemap).map((key) => (
                <div key={key} className="border-b border-gray-50 pb-4 last:border-0">
                  <div className="flex justify-between items-center w-full text-left text-lg font-bold text-gray-900">
                    <Link to={`/${slugify(key)}`} onClick={() => setMobileMenuOpen(false)} className="flex-grow">
                      {key}
                    </Link>
                    <button onClick={() => toggleMobileMenu(key)} className="p-2 focus:outline-none">
                      <ChevronDown className={`w-5 h-5 transition-transform ${expandedMobileMenu === key ? 'rotate-180 text-rysun-blue' : 'text-gray-400'}`} />
                    </button>
                  </div>
                  
                  {expandedMobileMenu === key && (
                    <div className="mt-4 pl-4 border-l-2 border-rysun-lightblue/30 space-y-4">
                      {key === 'Capabilities' && Object.entries(sitemap.Capabilities).map(([capKey, capValue]) => (
                        <div key={capKey}>
                          <Link to={`/capabilities/${slugify(capKey)}`} onClick={() => setMobileMenuOpen(false)} className="block font-semibold text-rysun-blue mb-2">
                            {capKey}
                          </Link>
                          {Object.entries(capValue).map(([typeKey, items]) => (
                            <div key={typeKey} className="mb-3">
                              <h5 className="text-xs font-bold text-gray-400 uppercase mb-1">{typeKey}</h5>
                              <ul className="space-y-2">
                                {(items as string[]).map(item => (
                                  <li key={item}>
                                    <Link to={`/service/${slugify(item)}`} className="block text-sm text-gray-600 hover:text-rysun-blue">
                                      {item}
                                    </Link>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          ))}
                        </div>
                      ))}

                      {key === 'Industries' && Object.entries(sitemap.Industries).map(([indKey, indItems]) => (
                        <div key={indKey} className="mb-3">
                          <Link to={`/industry/${slugify(indKey)}`} onClick={() => setMobileMenuOpen(false)} className="block font-semibold text-rysun-blue mb-2">
                            {indKey}
                          </Link>
                          <ul className="space-y-2">
                            {indItems.map(item => (
                              <li key={item}>
                                <Link to={`/industry/${slugify(item)}`} className="block text-sm text-gray-600 hover:text-rysun-blue">
                                  {item}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}

                      {key === 'Insights' && (
                        <ul className="space-y-3">
                          {(sitemap as any)[key].map((item: string) => (
                            <li key={item}>
                              <Link to={`/${slugify(key)}/${slugify(item)}`} className="block text-sm text-gray-600 hover:text-rysun-blue">
                                {item}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      )}

                      {key === 'Company' && (
                        <ul className="space-y-3">
                          {Object.entries(sitemap.Company).map(([compKey, compItems]) => (
                            <li key={compKey}>
                              <Link to={`/company/${slugify(compKey)}`} className="block text-sm font-bold text-gray-900 hover:text-rysun-blue">
                                {compKey}
                              </Link>
                              {compItems.length > 0 && (
                                <ul className="space-y-2 pl-4 border-l-2 border-gray-100 mt-2">
                                  {compItems.map(item => (
                                    <li key={item}>
                                      <Link to={`/company/${slugify(compKey)}/${slugify(item)}`} className="block text-sm text-gray-600 hover:text-rysun-blue">
                                        {item}
                                      </Link>
                                    </li>
                                  ))}
                                </ul>
                              )}
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  )}
                </div>
              ))}
              
              <div className="flex flex-col gap-3 pt-6">
                <Link to="/contact-us" className="block w-full text-center bg-gradient-to-r from-rysun-blue to-rysun-lightblue text-white px-5 py-3 rounded-full text-sm font-bold shadow-md">
                  Talk to an Expert
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

const Footer = () => (
  <footer className="bg-gray-900 text-white pt-20 pb-10 border-t border-gray-800">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-10 lg:gap-8 mb-16">
        {/* Brand Column */}
        <div className="lg:col-span-2">
          <div className="flex items-center gap-2 mb-6">
            <span className="text-3xl font-bold text-white tracking-tight">Rysun</span>
          </div>
          <p className="text-gray-400 text-sm leading-relaxed mb-8 pr-4">
            AI-First Enterprise Intelligence for Measurable Impact. We help enterprises embed artificial intelligence across operations, products, and decision systems.
          </p>
          <div className="flex items-center gap-2 text-gray-300 mb-8 bg-gray-800/50 w-max px-4 py-2 rounded-full border border-gray-700">
            <Award className="w-4 h-4 text-rysun-lightblue" />
            <span className="text-xs font-semibold tracking-wider uppercase">CMMI5 CERTIFIED</span>
          </div>
          <div className="flex gap-5">
            <a href="#" className="text-gray-400 hover:text-rysun-lightblue transition-colors"><Linkedin className="w-5 h-5" /></a>
            <a href="#" className="text-gray-400 hover:text-rysun-lightblue transition-colors"><Twitter className="w-5 h-5" /></a>
            <a href="#" className="text-gray-400 hover:text-rysun-lightblue transition-colors"><Youtube className="w-5 h-5" /></a>
          </div>
        </div>

        {/* Capabilities Column */}
        <div>
          <h4 className="text-sm font-bold text-white mb-6 uppercase tracking-wider">Capabilities</h4>
          <ul className="space-y-3 text-sm text-gray-400">
            <li><Link to="/capabilities/ai" className="hover:text-rysun-lightblue transition-colors">AI</Link></li>
            <li><Link to="/capabilities/data" className="hover:text-rysun-lightblue transition-colors">Data</Link></li>
            <li><Link to="/capabilities/digital" className="hover:text-rysun-lightblue transition-colors">Digital</Link></li>
          </ul>
        </div>

        {/* Industries Column */}
        <div>
          <h4 className="text-sm font-bold text-white mb-6 uppercase tracking-wider">Industries</h4>
          <ul className="space-y-3 text-sm text-gray-400">
            <li><Link to="/industry/retail-e-commerce" className="hover:text-rysun-lightblue transition-colors">Retail & E-Commerce</Link></li>
            <li><Link to="/industry/healthcare-life-sciences" className="hover:text-rysun-lightblue transition-colors">Healthcare & Life Sciences</Link></li>
            <li><Link to="/industry/high-tech" className="hover:text-rysun-lightblue transition-colors">High-Tech</Link></li>
            <li><Link to="/industry/financial-services" className="hover:text-rysun-lightblue transition-colors">Financial Services</Link></li>
          </ul>
        </div>

        {/* Insights Column */}
        <div>
          <h4 className="text-sm font-bold text-white mb-6 uppercase tracking-wider">Insights</h4>
          <ul className="space-y-3 text-sm text-gray-400">
            <li><Link to="/insights/impact-stories" className="hover:text-rysun-lightblue transition-colors">Impact Stories</Link></li>
            <li><Link to="/insights/rysun-xchange" className="hover:text-rysun-lightblue transition-colors">Rysun XChange</Link></li>
            <li><Link to="/insights/blogs" className="hover:text-rysun-lightblue transition-colors">Blogs</Link></li>
            <li><Link to="/insights/events" className="hover:text-rysun-lightblue transition-colors">Events</Link></li>
            <li><Link to="/insights/news" className="hover:text-rysun-lightblue transition-colors">News</Link></li>
          </ul>
        </div>

        {/* Company Column */}
        <div>
          <h4 className="text-sm font-bold text-white mb-6 uppercase tracking-wider">Company</h4>
          <ul className="space-y-3 text-sm text-gray-400">
            <li><Link to="/company/about-rysun" className="hover:text-rysun-lightblue transition-colors">About Rysun</Link></li>
            <li><Link to="/company/leadership" className="hover:text-rysun-lightblue transition-colors">Leadership</Link></li>
            <li><Link to="/company/partnerships-alliances" className="hover:text-rysun-lightblue transition-colors">Partnerships & Alliances</Link></li>
            <li><Link to="/company/products" className="hover:text-rysun-lightblue transition-colors">Products</Link></li>
            <li>
              <Link to="/company/careers" className="hover:text-rysun-lightblue transition-colors block mb-2">Careers</Link>
              <ul className="pl-3 space-y-2 border-l border-gray-700">
                <li><Link to="/company/careers/life-at-rysun" className="text-xs hover:text-rysun-lightblue transition-colors">Life at Rysun</Link></li>
                <li><Link to="/company/careers/current-openings" className="text-xs hover:text-rysun-lightblue transition-colors">Current Openings</Link></li>
                <li><Link to="/company/careers/submit-profile" className="text-xs hover:text-rysun-lightblue transition-colors">Submit Profile</Link></li>
              </ul>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500">
        <p>&copy; {new Date().getFullYear()} Rysun Labs. All rights reserved.</p>
        <div className="flex space-x-6 mt-4 md:mt-0">
          <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          <a href="#" className="hover:text-white transition-colors">Cookie Policy</a>
        </div>
      </div>
    </div>
  </footer>
);

export default function Layout() {
  return (
    <div className="min-h-screen flex flex-col font-sans">
      <MegaMenu />
      <main className="flex-grow pt-[100px]">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
