import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Layout, SEO, Breadcrumbs } from '../components/Layout';
import { BLOG_POSTS, PRODUCTS } from '../data';
import { Calendar, User, ArrowLeft } from 'lucide-react';
import { ProductCard } from '../components/Product';

const BlogPostPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = BLOG_POSTS.find(p => p.slug === slug);

  if (!post) {
    return <Layout><div className="p-20 text-center">Post not found</div></Layout>;
  }

  // Very simple "Contextual" product based on post tags matching category or simple random
  // In a real app, you'd manually curate these
  const recommendedProducts = PRODUCTS.slice(0, 2); 

  const blogSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": post.title,
    "image": post.image,
    "datePublished": new Date(post.date).toISOString(), // Approximated for demo if date string is simple text
    "author": {
      "@type": "Person",
      "name": post.author
    },
    "description": post.excerpt
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": window.location.origin
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Blog",
        "item": `${window.location.origin}/#/blog`
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": post.title
      }
    ]
  };

  return (
    <Layout>
      <SEO 
        title={post.title} 
        description={post.excerpt} 
        schema={[blogSchema, breadcrumbSchema]}
      />
      
      <Breadcrumbs items={[{ label: 'Blog', to: '/blog' }, { label: post.title }]} />
      
      <div className="bg-white">
        <div className="w-full h-64 md:h-96 relative">
           <img src={post.image} alt={post.title} className="w-full h-full object-cover" />
           <div className="absolute inset-0 bg-black/40" />
           <div className="absolute inset-0 flex items-center justify-center">
              <div className="container mx-auto px-4 text-center text-white">
                 <h1 className="text-3xl md:text-5xl font-bold mb-4 max-w-4xl mx-auto leading-tight">{post.title}</h1>
                 <div className="flex items-center justify-center gap-6 text-sm md:text-base opacity-90">
                    <span className="flex items-center gap-2"><User size={18} /> {post.author}</span>
                    <span className="flex items-center gap-2"><Calendar size={18} /> {post.date}</span>
                 </div>
              </div>
           </div>
        </div>

        <div className="container mx-auto px-4 py-12 flex flex-col lg:flex-row gap-12">
           <div className="lg:w-2/3">
              <Link to="/blog" className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-brand-600 mb-8">
                <ArrowLeft size={16} /> Back to Blog
              </Link>
              
              <div 
                className="prose prose-lg prose-indigo max-w-none prose-headings:font-bold prose-a:text-brand-600 prose-img:rounded-xl"
                dangerouslySetInnerHTML={{ __html: post.content }}
              />

              {/* Author Box */}
              <div className="bg-gray-50 p-6 rounded-xl mt-12 flex items-center gap-4">
                 <div className="w-16 h-16 bg-brand-100 rounded-full flex items-center justify-center text-brand-600 font-bold text-2xl">
                    {post.author.charAt(0)}
                 </div>
                 <div>
                    <h4 className="font-bold text-gray-900">{post.author}</h4>
                    <p className="text-sm text-gray-500">Senior Editor at ZenithFinds. Expert in consumer electronics and smart home tech.</p>
                 </div>
              </div>
           </div>

           {/* Sidebar */}
           <div className="lg:w-1/3">
              <div className="sticky top-24">
                 <h3 className="font-bold text-gray-900 mb-6 text-lg border-b pb-2">Mentioned Products</h3>
                 <div className="space-y-6">
                    {recommendedProducts.map(p => (
                       <ProductCard key={p.id} product={p} />
                    ))}
                 </div>
                 
                 <div className="mt-8 bg-brand-600 text-white p-6 rounded-xl text-center">
                    <h3 className="font-bold text-xl mb-2">Need Help Choosing?</h3>
                    <p className="text-brand-100 text-sm mb-4">Our AI assistant can find the perfect product for your specific needs.</p>
                    <button className="bg-white text-brand-700 px-6 py-2 rounded-lg font-bold text-sm hover:bg-brand-50 w-full">Ask AI</button>
                 </div>
              </div>
           </div>
        </div>
      </div>
    </Layout>
  );
};

export default BlogPostPage;