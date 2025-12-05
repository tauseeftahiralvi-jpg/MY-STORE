import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Layout, SEO, Breadcrumbs } from '../components/Layout';
import { ProductCard } from '../components/Product';
import { PRODUCTS, CATEGORIES } from '../data';

const CategoryPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  
  const category = CATEGORIES.find(c => c.slug === slug);
  const products = PRODUCTS.filter(p => p.category === slug);

  if (!category) {
    return (
      <Layout>
        <div className="container mx-auto px-4 py-20 text-center">
          <h1 className="text-2xl font-bold">Category Not Found</h1>
          <Link to="/" className="text-brand-600 hover:underline">Return Home</Link>
        </div>
      </Layout>
    );
  }

  // Schema for list of products
  const itemListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "itemListElement": products.map((product, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "url": `${window.location.origin}/#/product/${product.id}`,
      "name": product.title
    }))
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
        "name": category.name,
        "item": `${window.location.origin}/#/category/${category.slug}`
      }
    ]
  };

  return (
    <Layout>
      <SEO 
        title={category.name} 
        description={category.description} 
        schema={[itemListSchema, breadcrumbSchema]}
      />
      
      <Breadcrumbs items={[{ label: category.name }]} />

      <div className="bg-gray-900 text-white py-12 md:py-20 relative overflow-hidden">
        <img src={category.image} alt="" className="absolute inset-0 w-full h-full object-cover opacity-20" />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent" />
        <div className="container mx-auto px-4 relative z-10">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">{category.name}</h1>
            <p className="text-lg text-gray-300 max-w-2xl">{category.description}</p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Sidebar Filters (Mock) */}
          <div className="w-full md:w-64 shrink-0">
             <div className="sticky top-24 space-y-8">
                <div>
                   <h3 className="font-bold text-gray-900 mb-4">Sort By</h3>
                   <select className="w-full border-gray-200 rounded-lg text-sm p-2.5 bg-white">
                      <option>Featured</option>
                      <option>Price: Low to High</option>
                      <option>Price: High to Low</option>
                      <option>Highest Rated</option>
                   </select>
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-4">Price Range</h3>
                  <div className="space-y-2">
                    <label className="flex items-center gap-2 text-sm text-gray-600"><input type="checkbox" className="rounded border-gray-300 text-brand-600" /> Under $50</label>
                    <label className="flex items-center gap-2 text-sm text-gray-600"><input type="checkbox" className="rounded border-gray-300 text-brand-600" /> $50 to $150</label>
                    <label className="flex items-center gap-2 text-sm text-gray-600"><input type="checkbox" className="rounded border-gray-300 text-brand-600" /> $150 to $500</label>
                    <label className="flex items-center gap-2 text-sm text-gray-600"><input type="checkbox" className="rounded border-gray-300 text-brand-600" /> $500+</label>
                  </div>
                </div>
             </div>
          </div>

          {/* Product Grid */}
          <div className="flex-grow">
            {products.length > 0 ? (
               <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                 {products.map(p => <ProductCard key={p.id} product={p} />)}
               </div>
            ) : (
              <div className="bg-white p-8 rounded-xl text-center border border-gray-100">
                <p className="text-gray-500">No products found in this category yet. Check back soon!</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default CategoryPage;