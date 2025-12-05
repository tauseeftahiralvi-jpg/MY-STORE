import React, { useState, Fragment } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X, ShoppingBag, Search, Sparkles, ChevronRight, Facebook, Twitter, Instagram } from 'lucide-react';
import { CATEGORIES } from '../data';
import { Dialog, Transition } from '@headlessui/react'; 

// --- SEO Component ---
interface SEOProps {
  title: string;
  description?: string;
  image?: string;
  url?: string;
  type?: string;
  schema?: object | object[];
}

export const SEO: React.FC<SEOProps> = ({ title, description, image, url, type = 'website', schema }) => {
  React.useEffect(() => {
    // Set Document Title
    document.title = `${title} | ZenithFinds`;

    // Helper function to update or create meta tags
    const setMetaTag = (selector: string, content: string | undefined, attrName: string, attrValue: string, contentAttr: string = 'content') => {
      if (content === undefined || content === null) return;
      
      let element = document.querySelector(selector);
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute(attrName, attrValue);
        document.head.appendChild(element);
      }
      element.setAttribute(contentAttr, content);
    };

    // Standard SEO
    setMetaTag('meta[name="description"]', description, 'name', 'description');

    // Open Graph
    setMetaTag('meta[property="og:title"]', title, 'property', 'og:title');
    setMetaTag('meta[property="og:description"]', description, 'property', 'og:description');
    setMetaTag('meta[property="og:type"]', type, 'property', 'og:type');
    setMetaTag('meta[property="og:url"]', url, 'property', 'og:url');
    setMetaTag('meta[property="og:image"]', image, 'property', 'og:image');
    setMetaTag('meta[property="og:site_name"]', 'ZenithFinds', 'property', 'og:site_name');

    // Twitter Card
    setMetaTag('meta[name="twitter:card"]', image ? 'summary_large_image' : 'summary', 'name', 'twitter:card');
    setMetaTag('meta[name="twitter:title"]', title, 'name', 'twitter:title');
    setMetaTag('meta[name="twitter:description"]', description, 'name', 'twitter:description');
    setMetaTag('meta[name="twitter:image"]', image, 'name', 'twitter:image');

  }, [title, description, image, url, type]);

  return (
    <>
      {schema && (
        <script 
          type="application/ld+json"
          dangerouslySetInnerHTML={{ 
            __html: JSON.stringify(schema) 
          }}
        />
      )}
    </>
  );
};

// --- Breadcrumbs Component ---
export interface BreadcrumbItem {
  label: string;
  to?: string;
}

export const Breadcrumbs: React.FC<{ items: BreadcrumbItem[] }> = ({ items }) => (
  <nav aria-label="Breadcrumb" className="bg-white border-b border-gray-100">
    <div className="container mx-auto px-4 py-3">
      <ol className="flex items-center space-x-2 text-sm text-gray-500 overflow-x-auto whitespace-nowrap hide-scrollbar">
        <li className="flex-shrink-0">
          <Link to="/" className="hover:text-brand-600 flex items-center gap-1 transition-colors">
             Home
          </Link>
        </li>
        {items.map((item, index) => (
          <li key={index} className="flex items-center space-x-2 flex-shrink-0">
            <ChevronRight size={14} className="text-gray-300" />
            {item.to ? (
              <Link to={item.to} className="hover:text-brand-600 transition-colors">
                {item.label}
              </Link>
            ) : (
              <span className="text-gray-900 font-medium truncate max-w-[200px] sm:max-w-xs" title={item.label}>
                {item.label}
              </span>
            )}
          </li>
        ))}
      </ol>
    </div>
  </nav>
);

// --- Header Component ---
export const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const location = useLocation();
  const navigate = useNavigate();

  const handleAISearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (!searchQuery.trim()) return;
    
    setIsSearchOpen(false);
    navigate(`/search?q=${encodeURIComponent(searchQuery)}`);
  };

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-100 shadow-sm">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 group">
          <div className="bg-brand-600 text-white p-1.5 rounded-lg group-hover:bg-brand-700 transition-colors">
            <ShoppingBag size={24} />
          </div>
          <span className="text-xl font-bold text-gray-900 tracking-tight">Zenith<span className="text-brand-600">Finds</span></span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          <Link to="/" className={`text-sm font-medium hover:text-brand-600 transition-colors ${location.pathname === '/' ? 'text-brand-600' : 'text-gray-600'}`}>Home</Link>
          <div className="relative group h-16 flex items-center">
            <button className="text-sm font-medium text-gray-600 hover:text-brand-600 transition-colors flex items-center gap-1">
              Categories
            </button>
            <div className="absolute top-16 left-0 w-48 bg-white border border-gray-100 shadow-xl rounded-b-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform translate-y-2 group-hover:translate-y-0">
              <div className="py-2">
                {CATEGORIES.map(cat => (
                  <Link key={cat.id} to={`/category/${cat.slug}`} className="block px-4 py-2 text-sm text-gray-600 hover:bg-gray-50 hover:text-brand-600">
                    {cat.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>
          <Link to="/blog" className={`text-sm font-medium hover:text-brand-600 transition-colors ${location.pathname.startsWith('/blog') ? 'text-brand-600' : 'text-gray-600'}`}>Blog</Link>
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-4">
          <button 
            onClick={() => setIsSearchOpen(true)}
            className="flex items-center gap-2 px-3 py-1.5 text-sm font-medium text-brand-700 bg-brand-50 hover:bg-brand-100 rounded-full transition-colors border border-brand-200"
          >
            <Sparkles size={16} />
            <span className="hidden sm:inline">Ask AI</span>
          </button>
          <button className="md:hidden text-gray-600" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 absolute w-full left-0 top-16 shadow-lg">
          <div className="px-4 py-4 space-y-3">
            <Link to="/" className="block text-base font-medium text-gray-800" onClick={() => setIsMobileMenuOpen(false)}>Home</Link>
            <div className="space-y-2 pl-4 border-l-2 border-gray-100">
              <p className="text-xs font-semibold text-gray-400 uppercase">Categories</p>
              {CATEGORIES.map(cat => (
                <Link key={cat.id} to={`/category/${cat.slug}`} className="block text-sm text-gray-600" onClick={() => setIsMobileMenuOpen(false)}>
                  {cat.name}
                </Link>
              ))}
            </div>
            <Link to="/blog" className="block text-base font-medium text-gray-800" onClick={() => setIsMobileMenuOpen(false)}>Blog</Link>
          </div>
        </div>
      )}

      {/* AI Search Modal */}
      {isSearchOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
          <div className="bg-white rounded-2xl w-full max-w-lg shadow-2xl p-6 relative">
            <button onClick={() => setIsSearchOpen(false)} className="absolute top-4 right-4 text-gray-400 hover:text-gray-600">
              <X size={20} />
            </button>
            <div className="mb-6">
              <h3 className="text-lg font-bold text-gray-900 flex items-center gap-2">
                <Sparkles className="text-brand-500" />
                AI Shopping Assistant
              </h3>
              <p className="text-gray-500 text-sm mt-1">Describe what you're looking for, and we'll find the best match.</p>
            </div>
            <form onSubmit={handleAISearch}>
              <div className="relative">
                <input 
                  type="text" 
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="e.g., 'Best headphones for travel under $400'"
                  className="w-full pl-4 pr-12 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-brand-500 focus:border-brand-500 outline-none transition-shadow"
                  autoFocus
                />
                <button type="submit" className="absolute right-2 top-2 p-1.5 bg-brand-600 text-white rounded-lg hover:bg-brand-700">
                  <Search size={20} />
                </button>
              </div>
            </form>
            <div className="mt-4 flex flex-wrap gap-2">
              <span className="text-xs text-gray-400 font-medium">Try:</span>
              <button onClick={() => setSearchQuery("Gift for coffee lover")} className="text-xs bg-gray-100 hover:bg-gray-200 px-2 py-1 rounded text-gray-600">Gift for coffee lover</button>
              <button onClick={() => setSearchQuery("Fitness tracker with GPS")} className="text-xs bg-gray-100 hover:bg-gray-200 px-2 py-1 rounded text-gray-600">Fitness tracker with GPS</button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

// --- Footer Component ---
export const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-2 mb-4 text-white">
              <ShoppingBag size={24} />
              <span className="text-xl font-bold">ZenithFinds</span>
            </div>
            <p className="text-sm text-gray-400 leading-relaxed mb-6">
              Your trusted source for honest reviews and curated product recommendations. We help you buy better.
            </p>
            <div className="flex gap-4">
              <Link to="/connect" className="hover:text-white transition-colors"><Facebook size={20} /></Link>
              <Link to="/connect" className="hover:text-white transition-colors"><Twitter size={20} /></Link>
              <Link to="/connect" className="hover:text-white transition-colors"><Instagram size={20} /></Link>
            </div>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-4">Categories</h4>
            <ul className="space-y-2 text-sm">
              {CATEGORIES.map(c => (
                <li key={c.id}><Link to={`/category/${c.slug}`} className="hover:text-brand-400 transition-colors">{c.name}</Link></li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/about" className="hover:text-brand-400 transition-colors">About Us</Link></li>
              <li><Link to="/contact" className="hover:text-brand-400 transition-colors">Contact</Link></li>
              <li><Link to="/connect" className="hover:text-brand-400 transition-colors">Connect With Us</Link></li>
              <li><Link to="/privacy" className="hover:text-brand-400 transition-colors">Privacy Policy</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Newsletter</h4>
            <p className="text-sm text-gray-400 mb-4">Get the latest reviews and top picks delivered to your inbox.</p>
            <div className="flex gap-2">
              <input type="email" placeholder="Email address" className="bg-gray-800 border-none rounded-lg px-3 py-2 text-sm w-full focus:ring-1 focus:ring-brand-500" />
              <button className="bg-brand-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-brand-700">Subscribe</button>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 mt-8 text-center md:text-left flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-gray-500">
            © 2024 ZenithFinds. All rights reserved.
          </p>
          <div className="max-w-md text-xs text-gray-600 text-center md:text-right">
            <strong>Affiliate Disclosure:</strong> ZenithFinds is a participant in the Amazon Services LLC Associates Program, an affiliate advertising program designed to provide a means for sites to earn advertising fees by advertising and linking to Amazon.com.
          </div>
        </div>
      </div>
    </footer>
  );
};

export const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
    </div>
  );
};
