import React from 'react';
import { Layout, SEO } from '../components/Layout';
import { ShieldCheck, Users, Search, Award } from 'lucide-react';

const About: React.FC = () => {
  return (
    <Layout>
      <SEO title="About Us" description="Learn about ZenithFinds and our mission to provide honest product reviews." />
      
      {/* Hero Section */}
      <div className="bg-gray-900 text-white py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-brand-900/20" />
        <div className="container mx-auto px-4 relative z-10 text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">Curating Quality in a <span className="text-brand-400">Crowded World</span></h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
                We believe shopping should be exciting, not exhausting. Our mission is to cut through the noise and guide you to the products that truly matter.
            </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
            <div className="prose prose-lg text-gray-600 mb-12">
              <p>
                ZenithFinds was born out of frustration. In 2024, a small group of tech enthusiasts and home improvement junkies realized that finding reliable product advice online had become a full-time job. Between sponsored posts, fake reviews, and algorithm-driven fluff, the truth about product quality was getting lost.
              </p>
              <p>
                We decided to build something different: a sanctuary for the discerning shopper. We combined our passion for hands-on testing with advanced data analysis to create a platform where integrity comes first.
              </p>
              <p>
                Today, ZenithFinds helps thousands of readers discover gadgets, gear, and home essentials that actually live up to the hype. We don't just list products; we tell you why they deserve a place in your life.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Values Grid */}
      <div className="bg-gray-50 py-20 border-y border-gray-100">
        <div className="container mx-auto px-4">
            <div className="text-center mb-16">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Trust ZenithFinds?</h2>
                <p className="text-gray-500">Our core values drive every review we publish.</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                    <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center mb-6">
                        <ShieldCheck size={24} />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">100% Independent</h3>
                    <p className="text-gray-600 text-sm">We are reader-supported. We don't accept payment for positive reviews or placements.</p>
                </div>

                <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                    <div className="w-12 h-12 bg-purple-100 text-purple-600 rounded-xl flex items-center justify-center mb-6">
                        <Search size={24} />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">Deep Research</h3>
                    <p className="text-gray-600 text-sm">We spend dozens of hours analyzing specs, user feedback, and professional tests for every guide.</p>
                </div>

                <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                    <div className="w-12 h-12 bg-green-100 text-green-600 rounded-xl flex items-center justify-center mb-6">
                        <Users size={24} />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">Community First</h3>
                    <p className="text-gray-600 text-sm">We listen to our readers. Your questions and feedback shape the content we create.</p>
                </div>

                <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                    <div className="w-12 h-12 bg-orange-100 text-orange-600 rounded-xl flex items-center justify-center mb-6">
                        <Award size={24} />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">Quality Over Quantity</h3>
                    <p className="text-gray-600 text-sm">We'd rather recommend three amazing products than thirty mediocre ones.</p>
                </div>
            </div>
        </div>
      </div>
      
      {/* Team CTA */}
      <div className="py-20 container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">Have questions about our process?</h2>
        <a href="#/contact" className="inline-block bg-brand-600 text-white px-8 py-3 rounded-xl font-semibold hover:bg-brand-700 transition-colors">
            Contact Us
        </a>
      </div>
    </Layout>
  );
};

export default About;