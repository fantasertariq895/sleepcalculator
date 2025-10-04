import { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { FileText } from 'lucide-react';

export default function TermsOfService() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>Terms of Service | SleepCalculators.ca</title>
        <meta name="description" content="Rules and conditions for using SleepCalculators.ca website and services." />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://sleepcalculators.ca/terms" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "WebPage",
                "@id": "https://sleepcalculators.ca/terms",
                "name": "Terms of Service",
                "url": "https://sleepcalculators.ca/terms",
                "description": "Terms of Service for SleepCalculators.ca outlining acceptable use and legal conditions.",
                "isPartOf": {
                  "@id": "https://sleepcalculators.ca/#website"
                }
              },
              {
                "@type": "BreadcrumbList",
                "itemListElement": [
                  {
                    "@type": "ListItem",
                    "position": 1,
                    "name": "Home",
                    "item": "https://sleepcalculators.ca/"
                  },
                  {
                    "@type": "ListItem",
                    "position": 2,
                    "name": "Terms of Service",
                    "item": "https://sleepcalculators.ca/terms"
                  }
                ]
              }
            ]
          })}
        </script>
      </Helmet>

      <div className="py-16 md:py-24 bg-white dark:bg-slate-900">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="flex items-center justify-center mb-8">
          <div className="bg-gradient-to-br from-green-500 to-emerald-600 rounded-lg p-3">
            <FileText className="w-10 h-10 text-white" />
          </div>
        </div>

        <h1 className="text-4xl md:text-5xl font-bold text-center mb-4 text-slate-900 dark:text-white">
          Terms of Service
        </h1>

        <p className="text-center text-gray-600 dark:text-gray-400 mb-12">
          Effective Date: January 1, 2025
        </p>

        <div className="prose prose-lg dark:prose-invert max-w-none">
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
              1. Acceptance of Terms
            </h2>
            <p className="text-gray-700 dark:text-gray-300">
              By accessing and using SleepCalculators.ca (the "Site"), you accept and agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use the Site. We reserve the right to modify these terms at any time without prior notice. Your continued use of the Site following any changes constitutes acceptance of those changes.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
              2. Informational Purposes Only
            </h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              The sleep calculator and all content provided on SleepCalculators.ca are for informational and educational purposes only. The Site is designed to:
            </p>
            <ul className="text-gray-700 dark:text-gray-300 space-y-2">
              <li>Help users understand sleep cycles and optimal sleep timing</li>
              <li>Provide general guidance on sleep patterns</li>
              <li>Offer educational resources about healthy sleep habits</li>
            </ul>
            <p className="text-gray-700 dark:text-gray-300 mt-4">
              <strong>Important:</strong> The information provided is not intended to diagnose, treat, cure, or prevent any medical condition. Results from the sleep calculator are estimates based on general sleep science and may not be suitable for everyone.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
              3. No Medical Advice or Warranties
            </h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              SleepCalculators.ca does not provide medical advice, professional diagnosis, or treatment recommendations. The Site and its content are provided "as is" without any warranties, express or implied, including but not limited to:
            </p>
            <ul className="text-gray-700 dark:text-gray-300 space-y-2">
              <li>Warranties of accuracy, reliability, or completeness</li>
              <li>Warranties of merchantability or fitness for a particular purpose</li>
              <li>Warranties that the Site will be uninterrupted, secure, or error-free</li>
              <li>Warranties regarding the results you may obtain from using the calculator</li>
            </ul>
            <p className="text-gray-700 dark:text-gray-300 mt-4">
              <strong>Medical Consultation Required:</strong> Always consult with a qualified healthcare provider before making any decisions related to your health, sleep patterns, or treatment of sleep disorders. Never disregard professional medical advice or delay seeking it because of information you read on this Site.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
              4. Limitation of Liability
            </h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              To the fullest extent permitted by law, SleepCalculators.ca and its operators, employees, and affiliates shall not be liable for any direct, indirect, incidental, consequential, special, or punitive damages arising from:
            </p>
            <ul className="text-gray-700 dark:text-gray-300 space-y-2">
              <li>Your use or inability to use the Site or its features</li>
              <li>Any actions you take based on information provided by the Site</li>
              <li>Any errors, omissions, or inaccuracies in the content</li>
              <li>Unauthorized access to or alteration of your data</li>
              <li>Any other matter related to the Site or its services</li>
            </ul>
            <p className="text-gray-700 dark:text-gray-300 mt-4">
              This limitation applies even if we have been advised of the possibility of such damages. Some jurisdictions do not allow limitations on implied warranties or liability, so these limitations may not apply to you.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
              5. User Responsibilities and Acceptable Use
            </h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              By using SleepCalculators.ca, you agree to:
            </p>
            <ul className="text-gray-700 dark:text-gray-300 space-y-2">
              <li>Use the Site only for lawful purposes and in accordance with these Terms</li>
              <li>Not attempt to interfere with, disrupt, or compromise the Site's security or functionality</li>
              <li>Not use automated systems, bots, or scripts to access the Site without permission</li>
              <li>Not copy, reproduce, modify, distribute, or create derivative works from the Site's content without authorization</li>
              <li>Not use the Site to transmit any harmful, offensive, or illegal content</li>
              <li>Not impersonate any person or entity or misrepresent your affiliation</li>
              <li>Not collect or harvest information about other users</li>
            </ul>
            <p className="text-gray-700 dark:text-gray-300 mt-4">
              We reserve the right to terminate or restrict your access to the Site for violations of these Terms or for any other reason at our sole discretion.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
              6. Intellectual Property Rights
            </h2>
            <p className="text-gray-700 dark:text-gray-300">
              All content on SleepCalculators.ca, including but not limited to text, graphics, logos, images, software, and design elements, is the property of SleepCalculators.ca or its content suppliers and is protected by Canadian and international copyright, trademark, and other intellectual property laws. You may not use, copy, reproduce, modify, or distribute any content from the Site without our express written permission.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
              7. Third-Party Links and Content
            </h2>
            <p className="text-gray-700 dark:text-gray-300">
              The Site may contain links to third-party websites or resources. These links are provided for your convenience only. We do not endorse and are not responsible for the content, privacy policies, or practices of any third-party sites. Your interactions with third-party sites are solely between you and the third party.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
              8. Privacy
            </h2>
            <p className="text-gray-700 dark:text-gray-300">
              Your use of the Site is also governed by our Privacy Policy. Please review our{' '}
              <a
                href="/privacy-policy"
                className="text-blue-600 dark:text-blue-400 hover:underline"
              >
                Privacy Policy
              </a>
              {' '}to understand how we collect, use, and protect your information.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
              9. Indemnification
            </h2>
            <p className="text-gray-700 dark:text-gray-300">
              You agree to indemnify, defend, and hold harmless SleepCalculators.ca and its operators, employees, and affiliates from any claims, liabilities, damages, losses, costs, or expenses (including reasonable attorney fees) arising from your use of the Site, your violation of these Terms, or your violation of any rights of another party.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
              10. Changes to Terms
            </h2>
            <p className="text-gray-700 dark:text-gray-300">
              We reserve the right to modify, update, or replace these Terms of Service at any time without prior notice. Changes will be effective immediately upon posting to the Site. Your continued use of the Site after any changes constitutes your acceptance of the new Terms. We recommend reviewing these Terms periodically for any updates.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
              11. Governing Law and Dispute Resolution
            </h2>
            <p className="text-gray-700 dark:text-gray-300">
              These Terms shall be governed by and construed in accordance with the laws of Canada and the province in which SleepCalculators.ca operates, without regard to conflict of law principles. Any disputes arising from these Terms or your use of the Site shall be resolved through binding arbitration or in the courts of competent jurisdiction in Canada.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
              12. Severability
            </h2>
            <p className="text-gray-700 dark:text-gray-300">
              If any provision of these Terms is found to be invalid, illegal, or unenforceable, the remaining provisions shall continue in full force and effect.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
              13. Contact Information
            </h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              If you have any questions or concerns about these Terms of Service, please contact us:
            </p>
            <div className="bg-gray-100 dark:bg-slate-800 p-6 rounded-lg">
              <p className="text-gray-900 dark:text-white font-semibold mb-2">
                SleepCalculators.ca
              </p>
              <p className="text-gray-700 dark:text-gray-300">
                Email:{' '}
                <a
                  href="mailto:admin@sleepcalculators.ca"
                  className="text-blue-600 dark:text-blue-400 hover:underline"
                >
                  admin@sleepcalculators.ca
                </a>
              </p>
            </div>
          </section>

          <div className="bg-amber-50 dark:bg-slate-800 border-l-4 border-amber-500 p-6 rounded-r-lg mt-8">
            <p className="text-lg font-semibold text-slate-900 dark:text-white mb-2">
              Important Reminder
            </p>
            <p className="text-gray-700 dark:text-gray-300 m-0">
              By using SleepCalculators.ca, you acknowledge that you have read, understood, and agree to be bound by these Terms of Service. The Site is a tool for educational purposes and should never replace professional medical advice, diagnosis, or treatment.
            </p>
          </div>
        </div>
      </div>
      </div>
    </>
  );
}
