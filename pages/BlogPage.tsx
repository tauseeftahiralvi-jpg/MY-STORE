import React from 'react';
import { Link } from 'react-router-dom';
import { Layout, SEO } from '../components/Layout';
import { BLOG_POSTS } from '../data';
import { Calendar, User } from 'lucide-react';

const BlogPage: React.FC = () => {
  return (
    <Layout>
      <SEO title="Blog" description="Read our latest reviews, buying guides, and tips." />
      <div className="bg-white py-16">
        <div className="container mx-auto px-4">
           <div className="text-center mb-16">
             <h1 className="text-4xl font-bold text-gray-900 mb-4">The Zenith Journal</h1>
             <p className="text-xl text-gray-500">Expert advice for smarter shopping.</p>
           </div>
           
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
             {BLOG_POSTS.map(post => (
               <article key={post.id} className="flex flex-col bg-white rounded-2xl border border-gray-100 overflow-hidden hover:shadow-xl transition-shadow">
                 <Link to={`/blog/${post.slug}`} className="aspect-video overflow-hidden block">
                   <img src={post.image} alt={post.title} className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
                 </Link>
                 <div className="p-6 flex flex-col flex-grow">
                   <div className="flex gap-2 mb-3">
                     {post.tags.map(tag => (
                       <span key={tag} className="text-xs font-semibold text-brand-600 bg-brand-50 px-2 py-1 rounded uppercase tracking-wider">{tag}</span>
                     ))}
                   </div>
                   <Link to={`/blog/${post.slug}`} className="mb-3">
                     <h2 className="text-xl font-bold text-gray-900 leading-snug hover:text-brand-600 transition-colors">{post.title}</h2>
                   </Link>
                   <p className="text-gray-500 text-sm mb-6 line-clamp-3 flex-grow">{post.excerpt}</p>
                   <div className="flex items-center justify-between text-xs text-gray-400 pt-4 border-t border-gray-50">
                      <div className="flex items-center gap-1"><User size={14} /> {post.author}</div>
                      <div className="flex items-center gap-1"><Calendar size={14} /> {post.date}</div>
                   </div>
                 </div>
               </article>
             ))}
           </div>
        </div>
      </div>
    </Layout>
  );
};

export default BlogPage;