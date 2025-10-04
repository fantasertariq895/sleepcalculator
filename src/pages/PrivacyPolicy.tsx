import { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Shield } from 'lucide-react';

export default function PrivacyPolicy() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>Privacy Policy | SleepCalculators.ca</title>
        <meta name="description" content="How we collect and use information, cookies, and AdSense compliance at SleepCalculators.ca." />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://sleepcalculators.ca/privacy-policy" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "WebPage",
                "@id": "https://sleepcalculators.ca/privacy-policy",
                "name": "Privacy Policy",
                "url": "https://sleepcalculators.ca/privacy-policy",
                "description": "Privacy policy for SleepCalculators.ca outlining data collection, usage, and user rights.",
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
                    "name": "Privacy Policy",
                    "item": "https://sleepcalculators.ca/privacy-policy"
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
          <div className="bg-gradient-to-br from-blue-500 to-cyan-600 rounded-lg p-3">
            <Shield className="w-10 h-10 text-white" />
          </div>
        </div>

        <h1 className="text-4xl md:text-5xl font-bold text-center mb-4 text-slate-900 dark:text-white">
          Privacy Policy
        </h1>

        <p className="text-center text-gray-600 dark:text-gray-400 mb-12">
          Effective Date: January 1, 2025
        </p>

        <div className="prose prose-lg dark:prose-invert max-w-none">
          <div className="bg-blue-50 dark:bg-slate-800 border-l-4 border-blue-500 p-6 mb-8 rounded-r-lg">
            <p className="text-lg font-semibold text-slate-900 dark:text-white mb-2">
              Health Disclaimer
            </p>
            <p className="text-gray-700 dark:text-gray-300 m-0">
              SleepCalculators.ca provides educational information only and is not a substitute for professional medical advice, diagnosis, or treatment. Always consult your healthcare provider regarding sleep disorders or health concerns.
            </p>
          </div>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
              1. Information We Collect
            </h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              We collect and process the following types of information when you use SleepCalculators.ca:
            </p>
            <ul className="text-gray-700 dark:text-gray-300 space-y-2">
              <li>
                <strong>Calculator Inputs:</strong> Sleep times, wake times, and preferences you enter into our calculator tool. This data is stored locally in your browser and on our servers to provide personalized insights.
              </li>
              <li>
                <strong>Cookies and Tracking:</strong> We use cookies and similar technologies to improve site functionality, remember your preferences, and analyze usage patterns.
              </li>
              <li>
                <strong>Analytics Data:</strong> We collect anonymous usage statistics including pages visited, time spent on site, browser type, device information, and general geographic location to understand how users interact with our site.
              </li>
              <li>
                <strong>Technical Information:</strong> IP addresses, browser types, operating systems, and referring URLs for security and optimization purposes.
              </li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
              2. How We Use Your Information
            </h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              We use the collected information for the following purposes:
            </p>
            <ul className="text-gray-700 dark:text-gray-300 space-y-2">
              <li>To provide and maintain our sleep calculator functionality</li>
              <li>To personalize your experience and remember your preferences</li>
              <li>To analyze and improve site performance and user experience</li>
              <li>To display relevant advertisements through Google AdSense</li>
              <li>To detect, prevent, and address technical issues or fraudulent activity</li>
              <li>To comply with legal obligations and protect our rights</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
              3. Google AdSense and Advertising
            </h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              SleepCalculators.ca uses Google AdSense to display advertisements. Google uses cookies, including the DoubleClick DART cookie, to serve ads based on your visits to this site and other websites across the internet.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              <strong>Personalized Advertising:</strong> Google may use your browsing history to display personalized ads that are relevant to your interests. These ads help support the free operation of our website.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              <strong>Opt-Out Options:</strong> You can opt out of personalized advertising by visiting{' '}
              <a
                href="https://www.google.com/settings/ads"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 dark:text-blue-400 hover:underline"
              >
                Google Ads Settings
              </a>
              . You can also opt out of third-party vendor use of cookies by visiting{' '}
              <a
                href="https://www.networkadvertising.org/choices/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 dark:text-blue-400 hover:underline"
              >
                Network Advertising Initiative opt-out page
              </a>
              .
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
              4. Cookies and Similar Technologies
            </h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              We use cookies to enhance your experience. Cookies are small text files stored on your device that help us:
            </p>
            <ul className="text-gray-700 dark:text-gray-300 space-y-2">
              <li>Remember your preferences and settings</li>
              <li>Understand how you use our website</li>
              <li>Provide personalized content and advertisements</li>
              <li>Analyze site traffic and usage patterns</li>
            </ul>
            <p className="text-gray-700 dark:text-gray-300 mt-4">
              You can control and manage cookies through your browser settings. However, disabling cookies may limit some functionality of the site.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
              5. Third-Party Links and Services
            </h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Our website may contain links to third-party websites, products, or services. We are not responsible for the privacy practices or content of these external sites. We encourage you to read the privacy policies of any third-party sites you visit.
            </p>
            <p className="text-gray-700 dark:text-gray-300">
              Third-party advertising partners may also use cookies and similar technologies to collect information for ad targeting purposes.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
              6. Data Security
            </h2>
            <p className="text-gray-700 dark:text-gray-300">
              We implement reasonable security measures to protect your information from unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the internet or electronic storage is 100% secure, and we cannot guarantee absolute security.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
              7. Your Choices and Rights
            </h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              You have the following options regarding your information:
            </p>
            <ul className="text-gray-700 dark:text-gray-300 space-y-2">
              <li>
                <strong>Cookies:</strong> You can disable cookies through your browser settings. Note that this may affect site functionality.
              </li>
              <li>
                <strong>Personalized Ads:</strong> You can opt out of personalized advertising through the links provided in Section 3.
              </li>
              <li>
                <strong>Data Deletion:</strong> Your calculator data is stored locally. You can clear it by clearing your browser data or using the clear function in our calculator.
              </li>
              <li>
                <strong>Do Not Track:</strong> We respect Do Not Track signals when supported by your browser.
              </li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
              8. Children's Privacy
            </h2>
            <p className="text-gray-700 dark:text-gray-300">
              Our website is not intended for children under 13 years of age. We do not knowingly collect personal information from children. If you believe we have collected information from a child, please contact us immediately.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
              9. Changes to This Privacy Policy
            </h2>
            <p className="text-gray-700 dark:text-gray-300">
              We may update this Privacy Policy from time to time. Changes will be posted on this page with an updated effective date. We encourage you to review this policy periodically to stay informed about how we protect your information.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
              10. Contact Us
            </h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              If you have any questions, concerns, or requests regarding this Privacy Policy or our data practices, please contact us:
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
        </div>
      </div>
      </div>
    </>
  );
}
