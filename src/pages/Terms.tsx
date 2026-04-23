import { Helmet } from "react-helmet-async";
import { COMPANY_INFO } from "@/src/data/mock";

export function Terms() {
  return (
    <div className="bg-white min-h-screen pt-32 pb-24">
      <Helmet>
        <title>Terms of Service | {COMPANY_INFO.name}</title>
      </Helmet>
      <div className="max-w-3xl mx-auto px-6 lg:px-12">
        <h1 className="text-4xl text-primary font-serif font-bold mb-4">Terms of Service</h1>
        <p className="text-charcoal/60 mb-8 border-b border-charcoal/10 pb-8">Last Updated: October 2023</p>
        
        <div className="prose prose-lg text-charcoal/80 space-y-6">
          <p>
            Please read these terms of service ("Terms") carefully before using the George Felix Properties Nig Ltd website (the "Service") operated by George Felix Properties Nig Ltd ("us", "we", or "our").
          </p>
          <p>
            Your access to and use of the Service is conditioned on your acceptance of and compliance with these Terms. These Terms apply to all visitors, users and others who access or use the Service.
          </p>

          <h2 className="text-2xl font-serif text-primary font-bold mt-12 mb-4">1. Use of Site</h2>
          <p>
            By accessing or using the Service you agree to be bound by these Terms. If you disagree with any part of the terms then you may not access the Service. You agree to use the site only for lawful purposes and in a way that does not infringe the rights of, restrict or inhibit anyone else's use and enjoyment of the website.
          </p>

          <h2 className="text-2xl font-serif text-primary font-bold mt-12 mb-4">2. Listings Disclaimer</h2>
          <p>
            All property listings and information provided on this website are subject to errors, omissions, price changes, prior sale, or withdrawal without notice. We make no representation or warranty as to the accuracy, completeness, or reliability of any information provided. Photographs, floor plans, and square footages are for illustrative purposes only.
          </p>

          <h2 className="text-2xl font-serif text-primary font-bold mt-12 mb-4">3. No Legal or Financial Advice</h2>
          <p>
            The content on this website does not constitute legal, financial, or real estate advice. All prospective buyers, sellers, and investors are strongly advised to perform their own due diligence and consult with their own legal and financial advisors before entering into any real estate transaction.
          </p>

          <h2 className="text-2xl font-serif text-primary font-bold mt-12 mb-4">4. Limitation of Liability</h2>
          <p>
            In no event shall George Felix Properties Nig Ltd, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from (i) your access to or use of or inability to access or use the Service; (ii) any conduct or content of any third party on the Service; (iii) any content obtained from the Service; and (iv) unauthorized access, use or alteration of your transmissions or content.
          </p>

          <h2 className="text-2xl font-serif text-primary font-bold mt-12 mb-4">5. Governing Law</h2>
          <p>
            These Terms shall be governed and construed in accordance with the laws of the Federal Republic of Nigeria, without regard to its conflict of law provisions.
          </p>
        </div>
      </div>
    </div>
  );
}
