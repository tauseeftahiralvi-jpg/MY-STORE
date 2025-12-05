import React from 'react';
import { Layout, SEO } from '../components/Layout';
import { Shield, Lock, FileText, ExternalLink } from 'lucide-react';

const Privacy: React.FC = () => {
  const lastUpdated = new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });

  return (
    <Layout>
      <SEO title="Privacy Policy" description="Privacy Policy and Affiliate Disclosure for ZenithFinds." />
      
      <div className="bg-white py-12 md:py-20">
        <div className="container mx-auto px-4 max-w-4xl">
          
          <div className="mb-12 text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Privacy Policy</h1>
            <p className="text-gray-500">Last Updated: {lastUpdated}</p>
          </div>

          <div className="prose prose-lg text-gray-600 max-w-none">
            <p className="lead text-xl text-gray-700">
              At ZenithFinds, accessible from zenithfinds.com, one of our main priorities is the privacy of our visitors. 
              This Privacy Policy document contains types of information that is collected and recorded by ZenithFinds and how we use it.
            </p>

            <div className="bg-brand-50 p-6 rounded-xl border border-brand-100 my-8">
              <h3 className="flex items-center gap-2 text-brand-800 font-bold text-xl mt-0">
                <Shield className="w-6 h-6" /> Affiliate Disclosure
              </h3>
              <p className="mb-0 text-brand-900/80">
                ZenithFinds is a participant in the Amazon Services LLC Associates Program, an affiliate advertising program designed to provide a means for sites to earn advertising fees by advertising and linking to Amazon.com. As an Amazon Associate, we earn from qualifying purchases. This does not affect the price you pay.
              </p>
            </div>

            <h2>1. Information We Collect</h2>
            <p>
              The personal information that you are asked to provide, and the reasons why you are asked to provide it, will be made clear to you at the point we ask you to provide your personal information.
            </p>
            <ul>
              <li><strong>Contact Information:</strong> When you contact us directly, we may receive additional information about you such as your name, email address, phone number, the contents of the message and/or attachments you may send us, and any other information you may choose to provide.</li>
              <li><strong>Log Files:</strong> ZenithFinds follows a standard procedure of using log files. These files log visitors when they visit websites. The information collected by log files includes internet protocol (IP) addresses, browser type, Internet Service Provider (ISP), date and time stamp, referring/exit pages, and possibly the number of clicks.</li>
            </ul>

            <h2>2. How We Use Your Information</h2>
            <p>We use the information we collect in various ways, including to:</p>
            <ul>
              <li>Provide, operate, and maintain our website</li>
              <li>Improve, personalize, and expand our website</li>
              <li>Understand and analyze how you use our website</li>
              <li>Develop new products, services, features, and functionality</li>
              <li>Communicate with you, either directly or through one of our partners, including for customer service, to provide you with updates and other information relating to the website, and for marketing and promotional purposes</li>
              <li>Find and prevent fraud</li>
            </ul>

            <h2>3. Cookies and Web Beacons</h2>
            <p>
              Like any other website, ZenithFinds uses 'cookies'. These cookies are used to store information including visitors' preferences, and the pages on the website that the visitor accessed or visited. The information is used to optimize the users' experience by customizing our web page content based on visitors' browser type and/or other information.
            </p>

            <h3>Amazon Associates Cookie</h3>
            <p>
              Amazon, as a third-party vendor, uses cookies to track sales linked from our website. This allows us to be credited with a referral commission. These cookies do not store personal information that identifies you specifically.
            </p>

            <h2>4. Third Party Privacy Policies</h2>
            <p>
              ZenithFinds's Privacy Policy does not apply to other advertisers or websites. Thus, we are advising you to consult the respective Privacy Policies of these third-party ad servers for more detailed information. It may include their practices and instructions about how to opt-out of certain options.
            </p>

            <h2>5. CCPA Privacy Rights (Do Not Sell My Personal Information)</h2>
            <p>
              Under the CCPA, among other rights, California consumers have the right to:
            </p>
            <ul>
              <li>Request that a business that collects a consumer's personal data disclose the categories and specific pieces of personal data that a business has collected about consumers.</li>
              <li>Request that a business delete any personal data about the consumer that a business has collected.</li>
              <li>Request that a business that sells a consumer's personal data, not sell the consumer's personal data.</li>
            </ul>
            <p>If you make a request, we have one month to respond to you. If you would like to exercise any of these rights, please contact us.</p>

            <h2>6. Contact Us</h2>
            <p>
              If you have any questions or suggestions about our Privacy Policy, do not hesitate to contact us.
            </p>
            <p>
              <strong>Email:</strong> support@zenithfinds.com<br/>
              <strong>Address:</strong> 123 Market Street, Suite 400, San Francisco, CA 94103
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Privacy;