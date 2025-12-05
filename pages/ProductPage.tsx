import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star, Check, X as XIcon, ShoppingCart, Share2, ShieldCheck, Truck } from 'lucide-react';
import { Layout, SEO, Breadcrumbs } from '../components/Layout';
import { ProductCard } from '../components/Product';
import { PRODUCTS } from '../data';

const ProductPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const product = PRODUCTS.find(p => p.id === id);
  const [activeImage, setActiveImage] = useState(0);

  if (!product) {
     return <Layout><div className="p-20 text-center">Product not found</div></Layout>;
  }

  const relatedProducts = PRODUCTS.filter(p => p.category === product.category && p.id !== product.id).slice(0, 3);
  const images = [product.image, ...product.gallery];

  // Infer a brand name from the title (simple heuristic for demo purposes)
  const brandName = product.title.split(' ')[0];

  // Product Structured Data
  const productSchema = {
    "@context": "https://schema.org/",
    "@type": "Product",
    "name": product.title,
    "image": images,
    "description": product.fullDescription,
    "sku": product.id,
    "brand": {
      "@type": "Brand",
      "name": brandName
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": product.rating,
      "reviewCount": product.reviewCount
    },
    "offers": {
      "@type": "Offer",
      "url": product.affiliateLink,
      "priceCurrency": "USD",
      "price": product.price,
      "priceValidUntil": new Date(new Date().setFullYear(new Date().getFullYear() + 1)).toISOString().split('T')[0],
      "itemCondition": "https://schema.org/NewCondition",
      "availability": "https://schema.org/InStock",
      "seller": {
        "@type": "Organization",
        "name": "Amazon"
      }
    }
  };

  // Breadcrumb Structured Data
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
        "name": product.category.charAt(0).toUpperCase() + product.category.slice(1),
        "item": `${window.location.origin}/#/category/${product.category}`
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": product.title
      }
    ]
  };

  const breadcrumbItems = [
    { label: product.category.charAt(0).toUpperCase() + product.category.slice(1), to: `/category/${product.category}` },
    { label: product.title }
  ];

  return (
    <Layout>
      <SEO 
        title={product.title} 
        description={product.shortDescription}
        image={images[0]}
        url={`${window.location.origin}/#/product/${product.id}`}
        type="product"
        schema={[productSchema, breadcrumbSchema]}
      />

      <Breadcrumbs items={breadcrumbItems} />

      <div className="bg-white">
        <div className="container mx-auto px-4 py-8 pb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Gallery */}
            <div className="space-y-4">
               <div className="aspect-square bg-gray-50 rounded-2xl overflow-hidden border border-gray-100 relative group">
                  <img 
                    src={images[activeImage]} 
                    alt={product.title} 
                    className="w-full h-full object-contain p-4 transition-transform duration-300 group-hover:scale-105" 
                  />
               </div>
               <div className="flex gap-4 overflow-x-auto pb-2 hide-scrollbar">
                 {images.map((img, idx) => (
                   <button 
                    key={idx} 
                    onClick={() => setActiveImage(idx)}
                    className={`shrink-0 w-20 h-20 rounded-lg border-2 overflow-hidden transition-all ${activeImage === idx ? 'border-brand-600 ring-2 ring-brand-100' : 'border-transparent hover:border-gray-200'}`}
                   >
                     <img src={img} className="w-full h-full object-cover" alt={`View ${idx + 1}`} />
                   </button>
                 ))}
               </div>
            </div>

            {/* Product Info */}
            <div>
              <h1 className="text-3xl font-bold text-gray-900 mb-4 leading-tight">{product.title}</h1>
              
              <div className="flex items-center gap-4 mb-6">
                <div className="flex items-center gap-1 bg-yellow-50 px-2 py-1 rounded-md border border-yellow-100">
                   <Star size={16} className="text-yellow-500 fill-yellow-500" />
                   <span className="font-bold text-yellow-700">{product.rating}</span>
                </div>
                <span className="text-gray-500 text-sm border-l border-gray-200 pl-4">{product.reviewCount.toLocaleString()} verified reviews</span>
              </div>

              <div className="flex items-baseline gap-3 mb-8">
                <span className="text-4xl font-bold text-gray-900">${product.price.toFixed(2)}</span>
                {product.originalPrice && (
                  <span className="text-lg text-gray-400 line-through decoration-red-400 decoration-2">${product.originalPrice.toFixed(2)}</span>
                )}
                {product.originalPrice && (
                   <span className="text-xs font-bold text-red-600 bg-red-50 px-2 py-1 rounded-full uppercase">
                      Save {Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}%
                   </span>
                )}
              </div>

              <div className="prose prose-sm text-gray-600 mb-8">
                <p>{product.fullDescription}</p>
              </div>

              {/* Action Box */}
              <div className="bg-gray-50 rounded-xl p-6 border border-gray-100 mb-8 shadow-sm">
                 <div className="flex flex-col sm:flex-row gap-4">
                    <a 
                      href={product.affiliateLink} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex-1 bg-[#FF9900] hover:bg-[#ff8c00] text-white font-bold py-4 px-6 rounded-xl flex items-center justify-center gap-2 shadow-lg shadow-orange-200 transition-all transform hover:-translate-y-1"
                    >
                       <ShoppingCart size={20} />
                       Buy Now on Amazon
                    </a>
                    <button className="px-4 py-4 bg-white border border-gray-200 text-gray-700 rounded-xl font-medium hover:bg-gray-50 hover:text-brand-600 transition-colors">
                       <Share2 size={20} />
                    </button>
                 </div>
                 <div className="mt-4 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs text-gray-500 font-medium">
                    <span className="flex items-center gap-1.5"><ShieldCheck size={14} className="text-green-600" /> Secure Transaction</span>
                    <span className="flex items-center gap-1.5"><Truck size={14} className="text-blue-600" /> Fast Shipping</span>
                    <span className="flex items-center gap-1.5"><Check size={14} className="text-brand-600" /> Returns Policy</span>
                 </div>
              </div>

              {/* Pros & Cons */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
                <div className="bg-green-50/50 p-6 rounded-xl border border-green-100">
                  <h3 className="font-bold text-green-800 mb-4 flex items-center gap-2">
                     <div className="w-6 h-6 rounded-full bg-green-200 flex items-center justify-center"><Check size={14} /></div>
                     Pros
                  </h3>
                  <ul className="space-y-3">
                    {product.pros.map((pro, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-gray-700">
                        <Check size={16} className="text-green-600 mt-0.5 shrink-0" /> <span className="flex-1">{pro}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="bg-red-50/50 p-6 rounded-xl border border-red-100">
                   <h3 className="font-bold text-red-800 mb-4 flex items-center gap-2">
                     <div className="w-6 h-6 rounded-full bg-red-200 flex items-center justify-center"><XIcon size={14} /></div>
                     Cons
                  </h3>
                  <ul className="space-y-3">
                    {product.cons.map((con, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-gray-700">
                        <XIcon size={16} className="text-red-500 mt-0.5 shrink-0" /> <span className="flex-1">{con}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Features List */}
               <div>
                  <h3 className="font-bold text-gray-900 mb-4 text-lg">Key Features</h3>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                     {product.features.map((feature, i) => (
                        <li key={i} className="flex items-center gap-2 text-sm text-gray-600 bg-gray-50 px-3 py-2.5 rounded-lg border border-gray-100">
                           <div className="w-1.5 h-1.5 rounded-full bg-brand-500 shrink-0" /> {feature}
                        </li>
                     ))}
                  </ul>
               </div>

            </div>
          </div>
        </div>
      </div>

      {/* Related Products */}
      {relatedProducts.length > 0 && (
         <div className="bg-gray-50 py-16 border-t border-gray-100">
            <div className="container mx-auto px-4">
               <h2 className="text-2xl font-bold text-gray-900 mb-8">Similar Products</h2>
               <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {relatedProducts.map(p => <ProductCard key={p.id} product={p} />)}
               </div>
            </div>
         </div>
      )}
    </Layout>
  );
};

export default ProductPage;