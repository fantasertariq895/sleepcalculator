import { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { AlertTriangle } from 'lucide-react';

export default function Disclaimer() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>Medical Disclaimer | SleepCalculators.ca</title>
        <meta name="description" content="Informational only. Not a substitute for professional medical advice. Important health disclaimer for SleepCalculators.ca." />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://sleepcalculators.ca/disclaimer" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "WebPage",
                "@id": "https://sleepcalculators.ca/disclaimer",
                "name": "Medical Disclaimer",
                "url": "https://sleepcalculators.ca/disclaimer",
                "description": "Medical disclaimer for SleepCalculators.ca clarifying the educational nature of the content.",
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
                    "name": "Medical Disclaimer",
                    "item": "https://sleepcalculators.ca/disclaimer"
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
          <div className="bg-gradient-to-br from-amber-500 to-orange-600 rounded-lg p-3">
            <AlertTriangle className="w-10 h-10 text-white" />
          </div>
        </div>

        <h1 className="text-4xl md:text-5xl font-bold text-center mb-4 text-slate-900 dark:text-white">
          Medical Disclaimer
        </h1>

        <p className="text-center text-gray-600 dark:text-gray-400 mb-12">
          Effective Date: January 1, 2025
        </p>

        <div className="prose prose-lg dark:prose-invert max-w-none">
          <div className="bg-red-50 dark:bg-slate-800 border-l-4 border-red-500 p-6 mb-8 rounded-r-lg">
            <p className="text-lg font-bold text-slate-900 dark:text-white mb-2">
              IMPORTANT: READ CAREFULLY
            </p>
            <p className="text-gray-700 dark:text-gray-300 m-0">
              The information provided on SleepCalculators.ca is for educational and informational purposes ONLY and is NOT a substitute for professional medical advice, diagnosis, or treatment. Always seek the advice of your physician or other qualified healthcare provider with any questions you may have regarding a medical condition.
            </p>
          </div>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
              1. Educational Purpose Only
            </h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              SleepCalculators.ca is an educational website designed to provide general information about sleep cycles, sleep timing, and healthy sleep habits. The sleep calculator tool uses widely accepted scientific principles about 90-minute sleep cycles to suggest optimal sleep and wake times.
            </p>
            <p className="text-gray-700 dark:text-gray-300">
              <strong>This tool is NOT a medical device and should NOT be used for:</strong>
            </p>
            <ul className="text-gray-700 dark:text-gray-300 space-y-2 mt-2">
              <li>Diagnosing sleep disorders or medical conditions</li>
              <li>Treating any health problems or symptoms</li>
              <li>Replacing professional medical evaluations or sleep studies</li>
              <li>Making medical decisions without consulting a healthcare provider</li>
              <li>Determining appropriate treatment for sleep-related issues</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
              2. Not a Substitute for Medical Advice
            </h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              The content on this website, including the sleep calculator results, sleep tips, and educational materials, does not constitute medical advice and should not be relied upon as such. Every individual has unique sleep needs, health conditions, and circumstances that require personalized medical evaluation.
            </p>
            <p className="text-gray-700 dark:text-gray-300">
              <strong>You should consult a qualified healthcare professional if you:</strong>
            </p>
            <ul className="text-gray-700 dark:text-gray-300 space-y-2 mt-2">
              <li>Have difficulty falling asleep or staying asleep regularly</li>
              <li>Experience excessive daytime sleepiness or fatigue</li>
              <li>Snore loudly or have been told you stop breathing during sleep</li>
              <li>Have unusual sleep behaviors such as sleepwalking or night terrors</li>
              <li>Experience leg discomfort or an urge to move your legs at night</li>
              <li>Have difficulty adjusting to shift work or time zone changes</li>
              <li>Are taking medications that affect sleep</li>
              <li>Have any medical conditions that may impact sleep quality</li>
              <li>Are concerned about any aspect of your sleep health</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
              3. Consult Healthcare Professionals
            </h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              <strong>Always consult with qualified healthcare professionals for:</strong>
            </p>
            <ul className="text-gray-700 dark:text-gray-300 space-y-2">
              <li>
                <strong>Medical Diagnosis:</strong> Only a licensed healthcare provider can properly diagnose sleep disorders such as insomnia, sleep apnea, narcolepsy, restless leg syndrome, or other conditions.
              </li>
              <li>
                <strong>Treatment Plans:</strong> Healthcare providers can develop personalized treatment strategies based on your specific health profile, medical history, and needs.
              </li>
              <li>
                <strong>Medication Management:</strong> Never start, stop, or change medications without consulting your doctor, even if you believe they affect your sleep.
              </li>
              <li>
                <strong>Sleep Studies:</strong> If recommended by your healthcare provider, professional sleep studies can provide accurate diagnostic information.
              </li>
              <li>
                <strong>Underlying Conditions:</strong> Many medical and mental health conditions can affect sleep quality and require professional evaluation and treatment.
              </li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
              4. No Warranties or Guarantees
            </h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              SleepCalculators.ca makes no warranties, representations, or guarantees regarding:
            </p>
            <ul className="text-gray-700 dark:text-gray-300 space-y-2">
              <li>The accuracy, reliability, or completeness of any information provided</li>
              <li>The suitability of recommendations for your individual circumstances</li>
              <li>The outcomes or results you may experience from using the calculator</li>
              <li>The effectiveness of any sleep strategies or tips mentioned on the Site</li>
              <li>The timeliness or currentness of information presented</li>
            </ul>
            <p className="text-gray-700 dark:text-gray-300 mt-4">
              Sleep needs vary significantly among individuals based on age, health status, lifestyle, genetics, and other factors. What works for one person may not work for another.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
              5. No Liability for Actions Taken
            </h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              SleepCalculators.ca and its operators, employees, contributors, and affiliates shall NOT be held responsible or liable for:
            </p>
            <ul className="text-gray-700 dark:text-gray-300 space-y-2">
              <li>Any actions you take or fail to take based on information from this website</li>
              <li>Any health outcomes, positive or negative, resulting from use of the Site</li>
              <li>Any delays in seeking professional medical care due to reliance on this Site</li>
              <li>Any decisions made regarding sleep schedules, routines, or habits</li>
              <li>Any consequences of following suggestions or recommendations on the Site</li>
              <li>Any misunderstandings or misinterpretations of the information provided</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
              6. Individual Results May Vary
            </h2>
            <p className="text-gray-700 dark:text-gray-300">
              The sleep calculator provides general estimates based on average sleep cycle duration of approximately 90 minutes. However, actual sleep cycle lengths vary among individuals and can be influenced by numerous factors including age, health, stress levels, medications, and environmental conditions. Your personal experience and results may differ significantly from the calculator's suggestions.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
              7. Emergency Situations
            </h2>
            <p className="text-gray-700 dark:text-gray-300">
              <strong>If you are experiencing a medical emergency, call emergency services immediately.</strong> Do not rely on this website or any online resource for urgent medical situations. Examples of sleep-related emergencies include severe breathing difficulties during sleep, chest pain, or sudden and severe changes in consciousness or alertness.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
              8. Third-Party Information
            </h2>
            <p className="text-gray-700 dark:text-gray-300">
              The Site may reference or link to third-party sources, research, or resources. We do not endorse, verify, or guarantee the accuracy of third-party information. Always verify information with qualified healthcare providers and refer to primary scientific sources when making health decisions.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
              9. Updates and Changes
            </h2>
            <p className="text-gray-700 dark:text-gray-300">
              Medical knowledge and sleep science continue to evolve. While we strive to keep our content current, information on this website may not reflect the most recent research or medical guidelines. This disclaimer may be updated at any time. Your continued use of the Site constitutes acceptance of any changes.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
              10. Acknowledgment and Acceptance
            </h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              By using SleepCalculators.ca, you acknowledge and agree that:
            </p>
            <ul className="text-gray-700 dark:text-gray-300 space-y-2">
              <li>You have read and understood this Medical Disclaimer in its entirety</li>
              <li>You understand the limitations of the information and tools provided</li>
              <li>You will seek professional medical advice for any health concerns</li>
              <li>You will not rely solely on this website for medical decisions</li>
              <li>You release SleepCalculators.ca from any liability related to your use of the Site</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
              11. Contact Information
            </h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              If you have questions about this Medical Disclaimer, please contact us:
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
            <p className="text-lg font-bold text-slate-900 dark:text-white mb-2">
              Final Reminder
            </p>
            <p className="text-gray-700 dark:text-gray-300 m-0">
              <strong>Never disregard professional medical advice or delay in seeking it because of something you have read on SleepCalculators.ca.</strong> If you think you may have a sleep disorder or any other medical condition, seek immediate consultation with your healthcare provider. Your health and safety are paramount.
            </p>
          </div>
        </div>
      </div>
      </div>
    </>
  );
}
