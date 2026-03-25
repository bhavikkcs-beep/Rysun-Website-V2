import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { 
  Search,
  MapPin,
  Briefcase,
  Clock,
  ArrowRight
} from 'lucide-react';

const CurrentOpeningsPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [locationFilter, setLocationFilter] = useState('All Locations');
  const [departmentFilter, setDepartmentFilter] = useState('All Departments');

  const jobs = [
    { id: 1, title: 'Senior AI Engineer', department: 'AI & Data Engineering', location: 'Remote', type: 'Full-time' },
    { id: 2, title: 'Cloud Solutions Architect', department: 'Cloud & DevOps', location: 'New York, NY', type: 'Full-time' },
    { id: 3, title: 'Data Analytics Consultant', department: 'Business Consulting', location: 'London, UK', type: 'Full-time' },
    { id: 4, title: 'Frontend Developer (React)', department: 'Software Engineering', location: 'Remote', type: 'Full-time' },
    { id: 5, title: 'Product Manager', department: 'Digital Product Development', location: 'San Francisco, CA', type: 'Full-time' },
    { id: 6, title: 'QA Automation Engineer', department: 'Quality Engineering', location: 'Austin, TX', type: 'Full-time' },
  ];

  const filteredJobs = jobs.filter(job => {
    const matchesSearch = job.title.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesLocation = locationFilter === 'All Locations' || job.location.includes(locationFilter);
    const matchesDepartment = departmentFilter === 'All Departments' || job.department === departmentFilter;
    return matchesSearch && matchesLocation && matchesDepartment;
  });

  return (
    <div className="bg-white">
      {/* Hero Banner */}
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
                Current <span className="text-transparent bg-clip-text bg-gradient-to-r from-rysun-lightblue to-blue-400">Openings</span>
              </h1>
              <p className="text-xl text-gray-300 mb-10 leading-relaxed">
                Explore exciting opportunities and become part of a team shaping the future of intelligent enterprises.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Opportunities Explorer */}
      <section id="opportunities" className="py-20 bg-white min-h-[60vh]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-8">Explore Opportunities</h2>
            
            <div className="flex flex-col md:flex-row gap-4 bg-gray-50 p-4 rounded-2xl border border-gray-200">
              <div className="flex-1 relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input 
                  type="text" 
                  placeholder="Search job titles..." 
                  className="w-full pl-12 pr-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-rysun-blue focus:border-transparent"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              <div className="w-full md:w-64 relative">
                <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <select 
                  className="w-full pl-12 pr-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-rysun-blue appearance-none bg-white"
                  value={locationFilter}
                  onChange={(e) => setLocationFilter(e.target.value)}
                >
                  <option>All Locations</option>
                  <option>Remote</option>
                  <option>New York, NY</option>
                  <option>San Francisco, CA</option>
                  <option>London, UK</option>
                  <option>Austin, TX</option>
                </select>
              </div>
              <div className="w-full md:w-64 relative">
                <Briefcase className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <select 
                  className="w-full pl-12 pr-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-rysun-blue appearance-none bg-white"
                  value={departmentFilter}
                  onChange={(e) => setDepartmentFilter(e.target.value)}
                >
                  <option>All Departments</option>
                  <option>AI & Data Engineering</option>
                  <option>Cloud & DevOps</option>
                  <option>Business Consulting</option>
                  <option>Software Engineering</option>
                  <option>Digital Product Development</option>
                  <option>Quality Engineering</option>
                </select>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filteredJobs.length > 0 ? (
              filteredJobs.map(job => (
                <div key={job.id} className="bg-white p-6 rounded-2xl border border-gray-200 hover:border-rysun-blue hover:shadow-md transition-all flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 mb-2">{job.title}</h3>
                    <div className="flex flex-wrap gap-4 text-sm text-gray-600">
                      <span className="flex items-center gap-1.5">
                        <Briefcase className="w-4 h-4" /> {job.department}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <MapPin className="w-4 h-4" /> {job.location}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <Clock className="w-4 h-4" /> {job.type}
                      </span>
                    </div>
                  </div>
                  <button className="shrink-0 inline-flex items-center justify-center px-6 py-2.5 text-sm font-bold rounded-full text-rysun-blue bg-blue-50 hover:bg-blue-100 transition-colors">
                    Apply Now
                  </button>
                </div>
              ))
            ) : (
              <div className="col-span-full text-center py-12 text-gray-500">
                No jobs found matching your criteria. Try adjusting your filters.
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default CurrentOpeningsPage;
