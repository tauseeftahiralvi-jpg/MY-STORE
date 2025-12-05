import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2, Sparkles, Star } from 'lucide-react';
import { Layout, SEO } from '../components/Layout';
import { ProductCard, CategoryCard } from '../components/Product';
import { PRODUCTS, CATEGORIES, BLOG_POSTS } from '../data';

const Home: React.FC = () => {
  const featuredProducts = PRODUCTS.filter(p => p.isFeatured).slice(0, 3);
  const recentPosts = BLOG_POSTS.slice(0, 2);

  return (
    <Layout>
      <SEO title="Home" description="Discover curated products and expert reviews at ZenithFinds." />
      
      {/* Hero Section */}
      <section className="relative bg-white overflow-hidden">
        <div className="absolute inset-0 bg-brand-50/50 skew-y-3 origin-top-left transform -translate-y-20 z-0" />
        <div className="container mx-auto px-4 pt-20 pb-24 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-100 text-brand-700 text-xs font-semibold uppercase tracking-wide mb-6">
              <span className="w-2 h-2 rounded-full bg-brand-600 animate-pulse" />
              Expertly Curated for 2025
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Discover Products That <span className="text-brand-600 relative">Upgrade <svg className="absolute w-full h-3 -bottom-1 left-0 text-brand-200 -z-10" fill="currentColor" viewBox="0 0 100 10" preserveAspectRatio="none"><path d="M0 5 Q 50 10 100 5 L 100 0 Q 50 5 0 0 Z" /></svg></span> Your Life.
            </h1>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              We research, test, and review the best tech, home gear, and wellness products so you don't have to. Honest advice, zero fluff.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/category/electronics" className="px-8 py-3.5 bg-brand-600 text-white rounded-xl font-semibold hover:bg-brand-700 transition-all shadow-lg shadow-brand-200 hover:shadow-brand-300 flex items-center justify-center gap-2">
                Browse Electronics <ArrowRight size={18} />
              </Link>
              <Link to="/blog" className="px-8 py-3.5 bg-white text-gray-700 border border-gray-200 rounded-xl font-semibold hover:bg-gray-50 transition-all flex items-center justify-center">
                Read Reviews
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Categories */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">Shop by Category</h2>
              <p className="text-gray-500">Find exactly what you need.</p>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {CATEGORIES.map(cat => (
              <CategoryCard key={cat.id} category={cat} />
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Editors' Top Picks</h2>
            <p className="text-gray-500 max-w-2xl mx-auto">
              Our most recommended products this month. High ratings, great value, and field-tested performance.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          <div className="text-center mt-12">
            <Link to="/category/electronics" className="inline-flex items-center gap-2 text-brand-600 font-semibold hover:text-brand-700">
              View All Recommendations <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* Value Props */}
      <section className="py-16 bg-white border-y border-gray-100">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center text-center p-4">
              <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mb-4">
                <CheckCircle2 size={24} />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Unbiased Reviews</h3>
              <p className="text-sm text-gray-500">We don't accept free products for positive reviews. Our research is independent.</p>
            </div>
            <div className="flex flex-col items-center text-center p-4">
               <div className="w-12 h-12 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-4">
                <Sparkles size={24} />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">AI-Powered Search</h3>
              <p className="text-sm text-gray-500">Use our Gemini-powered assistant to find the perfect gift or gadget instantly.</p>
            </div>
            <div className="flex flex-col items-center text-center p-4">
               <div className="w-12 h-12 bg-purple-100 text-purple-600 rounded-full flex items-center justify-center mb-4">
                <Star size={24} />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Top Rated Only</h3>
              <p className="text-sm text-gray-500">We filter out the junk. If it's on ZenithFinds, it's worth your money.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Latest Blog Posts */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-12">Latest Guides & Reviews</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {recentPosts.map(post => (
               <Link key={post.id} to={`/blog/${post.slug}`} className="group flex flex-col md:flex-row gap-6 items-start">
                  <div className="w-full md:w-48 aspect-video md:aspect-square rounded-xl overflow-hidden shrink-0">
                    <img src={post.image} alt={post.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform" />
                  </div>
                  <div className="flex-grow">
                    <div className="flex gap-2 mb-2">
                       {post.tags.map(tag => (
                         <span key={tag} className="text-xs font-medium text-brand-600 bg-brand-50 px-2 py-1 rounded">{tag}</span>
                       ))}
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-brand-600 transition-colors">{post.title}</h3>
                    <p className="text-gray-500 text-sm line-clamp-2 mb-3">{post.excerpt}</p>
                    <span className="text-xs text-gray-400">{post.date} • By {post.author}</span>
                  </div>
               </Link>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Home;