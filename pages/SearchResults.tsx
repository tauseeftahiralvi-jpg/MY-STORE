import React, { useEffect, useState } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { Layout, SEO } from '../components/Layout';
import { ProductCard } from '../components/Product';
import { PRODUCTS, CATEGORIES } from '../data';
import { getProductRecommendation } from '../services/geminiService';
import { Search, Loader2, Frown, ArrowRight } from 'lucide-react';

const SearchResults: React.FC = () => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get('q') || '';
  const [results, setResults] = useState<typeof PRODUCTS>([]);
  const [loading, setLoading] = useState(false);
  const [hasSearched, setHasSearched] = useState(false);

  useEffect(() => {
    const fetchResults = async () => {
      if (!query.trim()) {
          setResults([]);
          setHasSearched(true);
          return;
      }
      
      setLoading(true);
      setHasSearched(false); // Reset while loading
      
      try {
        // 1. Try AI Search first
        const recommendedIds = await getProductRecommendation(query);
        
        let matchedProducts: typeof PRODUCTS = [];

        if (recommendedIds.length > 0) {
             matchedProducts = PRODUCTS.filter(p => recommendedIds.includes(p.id));
        }
        
        // 2. Fallback: If AI returns nothing (or misses obvious matches), do a basic text search
        // We combine results or use text search if AI found nothing.
        // For this demo, let's just use text search if AI yields < 1 result to ensure we show something relevant if possible.
        if (matchedProducts.length === 0) {
           const lowerQ = query.toLowerCase();
           matchedProducts = PRODUCTS.filter(p => 
             p.title.toLowerCase().includes(lowerQ) || 
             p.shortDescription.toLowerCase().includes(lowerQ) ||
             p.category.includes(lowerQ) ||
             p.features.some(f => f.toLowerCase().includes(lowerQ))
           );
        }
        
        setResults(matchedProducts);
      } catch (err) {
        console.error("Search failed", err);
        // Fallback text search on error
        const lowerQ = query.toLowerCase();
        const fallback = PRODUCTS.filter(p => p.title.toLowerCase().includes(lowerQ));
        setResults(fallback);
      } finally {
        setLoading(false);
        setHasSearched(true);
      }
    };

    fetchResults();
  }, [query]);

  return (
    <Layout>
      <SEO title={`Search Results for "${query}"`} description="AI-powered product search results." />
      
      <div className="bg-gray-50 min-h-[60vh] py-12">
        <div className="container mx-auto px-4">
            {/* Header */}
            <div className="mb-8">
                <Link to="/" className="text-sm text-gray-500 hover:text-brand-600 mb-2 inline-block">&larr; Back to Home</Link>
                <h1 className="text-3xl font-bold text-gray-900 flex items-center gap-3">
                    {loading ? (
                        <>Searching for "{query}"...</>
                    ) : (
                        <>Results for <span className="text-brand-600">"{query}"</span></>
                    )}
                </h1>
            </div>

            {/* Loading State */}
            {loading && (
                <div className="flex flex-col items-center justify-center py-20 text-center">
                    <Loader2 size={48} className="text-brand-600 animate-spin mb-4" />
                    <p className="text-lg text-gray-600 font-medium">Consulting our AI expert...</p>
                    <p className="text-sm text-gray-400">Finding the best products for your needs.</p>
                </div>
            )}

            {/* Results Grid */}
            {!loading && hasSearched && results.length > 0 && (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {results.map(product => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </div>
            )}

            {/* No Results State */}
            {!loading && hasSearched && results.length === 0 && (
                <div className="bg-white rounded-2xl p-12 text-center border border-gray-100 shadow-sm max-w-2xl mx-auto">
                    <div className="w-16 h-16 bg-gray-100 text-gray-400 rounded-full flex items-center justify-center mx-auto mb-6">
                        <Frown size={32} />
                    </div>
                    <h2 className="text-2xl font-bold text-gray-900 mb-2">No matches found</h2>
                    <p className="text-gray-500 mb-8">
                        We couldn't find any products matching "{query}". Try adjusting your search or browse our categories below.
                    </p>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-left">
                        {CATEGORIES.map(cat => (
                            <Link 
                                key={cat.id} 
                                to={`/category/${cat.slug}`}
                                className="group flex items-center justify-between p-4 rounded-xl border border-gray-100 hover:border-brand-200 hover:bg-brand-50 transition-all"
                            >
                                <span className="font-medium text-gray-700 group-hover:text-brand-700">{cat.name}</span>
                                <ArrowRight size={16} className="text-gray-300 group-hover:text-brand-500" />
                            </Link>
                        ))}
                    </div>
                </div>
            )}
        </div>
      </div>
    </Layout>
  );
};

export default SearchResults;
