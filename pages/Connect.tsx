import React from 'react';
import { Link } from 'react-router-dom';
import { Layout, SEO } from '../components/Layout';
import { Twitter, Facebook, Instagram, Youtube, Mail, ArrowRight, MessageCircle, Heart } from 'lucide-react';

const Connect: React.FC = () => {
  const socials = [
    {
      name: 'Twitter / X',
      handle: '@ZenithFinds',
      description: 'Daily tech news, quick tips, and flash deal alerts.',
      icon: <Twitter size={32} />,
      color: 'bg-black text-white',
      link: '#'
    },
    {
      name: 'Instagram',
      handle: '@ZenithFinds_Official',
      description: 'Behind the scenes, product aesthetics, and setup inspiration.',
      icon: <Instagram size={32} />,
      color: 'bg-gradient-to-tr from-yellow-400 via-red-500 to-purple-500 text-white',
      link: '#'
    },
    {
      name: 'Facebook',
      handle: 'ZenithFinds Community',
      description: 'Join discussions and share your own reviews with our group.',
      icon: <Facebook size={32} />,
      color: 'bg-[#1877F2] text-white',
      link: '#'
    },
    {
      name: 'YouTube',
      handle: 'ZenithFinds Reviews',
      description: 'In-depth video breakdowns and unboxing experiences.',
      icon: <Youtube size={32} />,
      color: 'bg-[#FF0000] text-white',
      link: '#'
    }
  ];

  return (
    <Layout>
      <SEO title="Connect With Us" description="Follow ZenithFinds on social media and join our newsletter." />
      
      {/* Hero */}
      <div className="bg-brand-900 text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://picsum.photos/1920/600?blur=5')] bg-cover bg-center opacity-10" />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-900 via-brand-900/90 to-transparent" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-2xl">
             <div className="inline-flex items-center gap-2 bg-brand-800/50 backdrop-blur-sm px-3 py-1 rounded-full text-brand-200 text-sm font-medium mb-6 border border-brand-700">
                <Heart size={16} className="text-pink-500 fill-pink-500" /> Join the Community
             </div>
             <h1 className="text-4xl md:text-6xl font-bold mb-6">Stay Connected</h1>
             <p className="text-xl text-brand-100 leading-relaxed">
               Don't miss out on the latest reviews, exclusive deals, and tech discussions. Follow us across the web.
             </p>
          </div>
        </div>
      </div>

      {/* Social Grid */}
      <div className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 -mt-32 relative z-20">
            {socials.map((social) => (
              <a 
                key={social.name} 
                href={social.link}
                className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100 flex flex-col items-center text-center group"
              >
                <div className={`w-16 h-16 rounded-2xl ${social.color} flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform`}>
                  {social.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-1">{social.name}</h3>
                <p className="text-sm text-brand-600 font-medium mb-4">{social.handle}</p>
                <p className="text-gray-500 text-sm mb-6">{social.description}</p>
                <span className="mt-auto inline-flex items-center gap-2 text-sm font-bold text-gray-900 group-hover:text-brand-600 transition-colors">
                  Follow <ArrowRight size={16} />
                </span>
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Newsletter Section */}
      <div className="bg-gray-50 py-20 border-y border-gray-100">
         <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-gray-200 flex flex-col md:flex-row items-center gap-12">
               <div className="flex-1">
                  <div className="w-12 h-12 bg-brand-100 text-brand-600 rounded-xl flex items-center justify-center mb-6">
                     <Mail size={24} />
                  </div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">The Zenith Weekly</h2>
                  <p className="text-gray-600 mb-6">
                    Join 50,000+ subscribers who get our top 10 lists, buying guides, and exclusive discount codes delivered every Friday morning. No spam, ever.
                  </p>
                  <ul className="space-y-3 mb-2">
                    <li className="flex items-center gap-2 text-sm text-gray-700">
                      <div className="w-1.5 h-1.5 rounded-full bg-brand-500" /> Early access to reviews
                    </li>
                    <li className="flex items-center gap-2 text-sm text-gray-700">
                      <div className="w-1.5 h-1.5 rounded-full bg-brand-500" /> Subscriber-only giveaways
                    </li>
                    <li className="flex items-center gap-2 text-sm text-gray-700">
                      <div className="w-1.5 h-1.5 rounded-full bg-brand-500" /> Curated Amazon deals
                    </li>
                  </ul>
               </div>
               <div className="flex-1 w-full max-w-md bg-gray-50 p-6 rounded-2xl border border-gray-100">
                  <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                      <input type="email" placeholder="you@example.com" className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-brand-500 focus:border-brand-500 outline-none" />
                    </div>
                    <div>
                       <label className="block text-sm font-medium text-gray-700 mb-1">Interests (Optional)</label>
                       <select className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-brand-500 outline-none bg-white">
                          <option>All Topics</option>
                          <option>Tech & Electronics</option>
                          <option>Home & Kitchen</option>
                          <option>Health & Fitness</option>
                       </select>
                    </div>
                    <button className="w-full bg-brand-600 text-white font-bold py-3 rounded-lg hover:bg-brand-700 transition-colors shadow-lg shadow-brand-200">
                      Subscribe Free
                    </button>
                    <p className="text-xs text-center text-gray-400">
                      By subscribing, you agree to our <Link to="/privacy" className="underline hover:text-gray-600">Privacy Policy</Link>.
                    </p>
                  </form>
               </div>
            </div>
         </div>
      </div>

      {/* Support CTA */}
      <div className="py-20 text-center container mx-auto px-4">
         <div className="inline-flex items-center justify-center w-16 h-16 bg-gray-100 text-gray-600 rounded-full mb-6">
            <MessageCircle size={32} />
         </div>
         <h2 className="text-2xl font-bold text-gray-900 mb-4">Looking for Support?</h2>
         <p className="text-gray-500 max-w-lg mx-auto mb-8">
           If you have specific questions about a product recommendation or need to report an issue with the website, our team is ready to help.
         </p>
         <Link to="/contact" className="text-brand-600 font-bold hover:text-brand-700 flex items-center justify-center gap-2">
            Go to Contact Page <ArrowRight size={18} />
         </Link>
      </div>

    </Layout>
  );
};

export default Connect;