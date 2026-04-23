import { Helmet } from "react-helmet-async";
import { COMPANY_INFO } from "@/src/data/mock";

export function Privacy() {
  return (
    <div className="bg-white min-h-screen pt-32 pb-24">
      <Helmet>
        <title>Privacy Policy | {COMPANY_INFO.name}</title>
      </Helmet>
      <div className="max-w-3xl mx-auto px-6 lg:px-12">
        <h1 className="text-4xl text-primary font-serif font-bold mb-4">Privacy Policy</h1>
        <p className="text-charcoal/60 mb-8 border-b border-charcoal/10 pb-8">Last Updated: October 2023</p>
        
        <div className="prose prose-lg text-charcoal/80 space-y-6">
          <p>
            At George Felix Properties Nig Ltd ("we," "us," or "our"), we respect your privacy and are committed to protecting your personal data. This privacy policy will inform you as to how we look after your personal data when you visit our website and tell you about your privacy rights and how the law protects you.
          </p>

          <h2 className="text-2xl font-serif text-primary font-bold mt-12 mb-4">1. Information We Collect</h2>
          <p>We may collect, use, store and transfer different kinds of personal data about you which we have grouped together as follows:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Identity Data:</strong> includes first name, last name, username or similar identifier.</li>
            <li><strong>Contact Data:</strong> includes billing address, delivery address, email address and telephone numbers.</li>
            <li><strong>Technical Data:</strong> includes internet protocol (IP) address, your login data, browser type and version, time zone setting and location.</li>
            <li><strong>Usage Data:</strong> includes information about how you use our website, products and services.</li>
          </ul>

          <h2 className="text-2xl font-serif text-primary font-bold mt-12 mb-4">2. How We Use Your Data</h2>
          <p>We will only use your personal data when the law allows us to. Most commonly, we will use your personal data in the following circumstances:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Where we need to perform the contract we are about to enter into or have entered into with you.</li>
            <li>Where it is necessary for our legitimate interests (or those of a third party) and your interests and fundamental rights do not override those interests.</li>
            <li>Where we need to comply with a legal obligation.</li>
          </ul>

          <h2 className="text-2xl font-serif text-primary font-bold mt-12 mb-4">3. Data Security</h2>
          <p>
            We have put in place appropriate security measures to prevent your personal data from being accidentally lost, used or accessed in an unauthorised way, altered or disclosed. In addition, we limit access to your personal data to those employees, agents, contractors and other third parties who have a business need to know.
          </p>

          <h2 className="text-2xl font-serif text-primary font-bold mt-12 mb-4">4. Your Legal Rights</h2>
          <p>Under certain circumstances, you have rights under data protection laws in relation to your personal data, including the right to:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Request access to your personal data.</li>
            <li>Request correction of your personal data.</li>
            <li>Request erasure of your personal data.</li>
            <li>Object to processing of your personal data.</li>
          </ul>

          <h2 className="text-2xl font-serif text-primary font-bold mt-12 mb-4">5. Contact Us</h2>
          <p>If you have any questions about this privacy policy or our privacy practices, please contact us at:</p>
          <p>
            <strong>{COMPANY_INFO.name}</strong><br/>
            {COMPANY_INFO.address}<br/>
            Email: {COMPANY_INFO.email}<br/>
            Phone: {COMPANY_INFO.phone}
          </p>
        </div>
      </div>
    </div>
  );
}
