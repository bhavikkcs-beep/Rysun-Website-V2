import React, { useEffect, useState } from 'react';
import { useParams, Link, useLocation } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const unslugify = (slug: string) => {
  return slug
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
};

export default function GenericPage() {
  const { slug } = useParams<{ slug: string }>();
  const location = useLocation();
  const [title, setTitle] = useState('');

  useEffect(() => {
    if (slug) {
      setTitle(unslugify(slug));
    } else {
      const pathParts = location.pathname.split('/').filter(Boolean);
      const lastPart = pathParts[pathParts.length - 1];
      if (lastPart) {
        setTitle(unslugify(lastPart));
      } else {
        setTitle('Page Not Found');
      }
    }
    window.scrollTo(0, 0);
  }, [slug, location.pathname]);

  if (!title) return null;

  return (
    <div className="w-full bg-white min-h-[70vh] flex flex-col">
      <section className="relative pt-32 pb-24 bg-gray-50 border-b border-gray-100 flex-grow flex items-center">
        <div className="absolute inset-0 bg-[url('https://picsum.photos/seed/rysun-generic/1920/1080?blur=8')] opacity-5 bg-cover bg-center" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 tracking-tight mb-6 leading-tight">
              {title}
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              This section is currently under development. We are building comprehensive resources and detailed information for {title}.
            </p>
            <Link to="/" className="inline-flex items-center justify-center px-6 py-3 text-sm font-medium rounded-full text-white bg-rysun-blue hover:bg-rysun-lightblue transition-all shadow-md hover:shadow-lg">
              Return to Home
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
