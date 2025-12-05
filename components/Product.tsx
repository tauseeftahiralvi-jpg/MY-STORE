import React from 'react';
import { Link } from 'react-router-dom';
import { Star, ArrowRight, ExternalLink } from 'lucide-react';
import { Product } from '../types';

// Helper for image optimization
const getOptimizedImageUrl = (urlStr: string, width: number) => {
  if (!urlStr || !urlStr.includes('images.unsplash.com')) return urlStr;
  try {
    const url = new URL(urlStr);
    url.searchParams.set('w', width.toString());
    url.searchParams.set('auto', 'format');
    url.searchParams.set('fit', 'crop');
    url.searchParams.set('q', '80');
    return url.toString();
  } catch (e) {
    return urlStr;
  }
};

export const ProductCard: React.FC<{ product: Product }> = ({ product }) => {
  // Request a 500px width image, which is sufficient for grid columns (even on high DPI mobile)
  const optimizedImage = getOptimizedImageUrl(product.image, 500);

  return (
    <div className="group bg-white rounded-2xl border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-300 flex flex-col h-full">
      <Link to={`/product/${product.id}`} className="block relative aspect-square overflow-hidden bg-gray-50">
        <img 
          src={optimizedImage} 
          alt={product.title} 
          width="500"
          height="500"
          className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
          decoding="async"
        />
        {product.originalPrice && (
          <span className="absolute top-3 right-3 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full">
            Save {Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}%
          </span>
        )}
      </Link>
      <div className="p-5 flex flex-col flex-grow">
        <div className="flex items-center gap-1 mb-2">
          <Star size={14} className="text-yellow-400 fill-yellow-400" />
          <span className="text-sm font-medium text-gray-700">{product.rating}</span>
          <span className="text-xs text-gray-400">({product.reviewCount})</span>
        </div>
        <Link to={`/product/${product.id}`} className="mb-2">
          <h3 className="font-bold text-gray-900 leading-tight group-hover:text-brand-600 transition-colors line-clamp-2">
            {product.title}
          </h3>
        </Link>
        <p className="text-sm text-gray-500 line-clamp-2 mb-4 flex-grow">
          {product.shortDescription}
        </p>
        <div className="flex items-center justify-between mt-auto pt-4 border-t border-gray-50">
          <div className="flex flex-col">
             <span className="text-xs text-gray-400">Price</span>
             <span className="text-lg font-bold text-gray-900">${product.price.toFixed(2)}</span>
          </div>
          <a 
            href={product.affiliateLink}
            target="_blank"
            rel="noopener noreferrer" 
            className="flex items-center gap-1 bg-gray-900 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-brand-600 transition-colors"
          >
            Check Amazon <ExternalLink size={14} />
          </a>
        </div>
      </div>
    </div>
  );
};

export const CategoryCard: React.FC<{ category: any }> = ({ category }) => {
  const optimizedImage = getOptimizedImageUrl(category.image, 600);
  
  return (
    <Link to={`/category/${category.slug}`} className="group relative rounded-2xl overflow-hidden aspect-[4/3]">
      <img 
        src={optimizedImage} 
        alt={category.name} 
        className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        loading="lazy"
        decoding="async"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
      <div className="absolute bottom-0 left-0 p-6">
        <h3 className="text-xl font-bold text-white mb-1">{category.name}</h3>
        <p className="text-sm text-gray-300 opacity-0 group-hover:opacity-100 transition-opacity transform translate-y-2 group-hover:translate-y-0 duration-300">
          {category.description}
        </p>
      </div>
    </Link>
  );
};