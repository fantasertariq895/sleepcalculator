import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: 'How accurate is the sleep calculator?',
      answer: 'Our sleep calculator is based on scientific research showing that sleep occurs in 90-minute cycles. While individual sleep patterns may vary slightly, following these guidelines can significantly improve sleep quality. The 90-minute cycle is an average, and your personal cycles may range from 80-120 minutes.'
    },
    {
      question: 'How many hours of sleep do I really need?',
      answer: 'Most adults need 7-9 hours of sleep per night, which equals 5-6 complete sleep cycles. However, individual needs vary based on age, lifestyle, and health factors. Teenagers may need 8-10 hours, while older adults might function well with 7-8 hours. Quality matters as much as quantity.'
    },
    {
      question: 'Why do I feel groggy even after 8 hours of sleep?',
      answer: 'Waking up in the middle of a sleep cycle, particularly during deep sleep or REM, can leave you feeling groggy and disoriented. This is called sleep inertia. Using our calculator to wake at the end of a complete cycle can help you feel more refreshed, even with slightly less total sleep time.'
    },
    {
      question: 'Should I go to bed at the same time every night?',
      answer: 'Yes, maintaining a consistent sleep schedule is one of the most important factors for quality sleep. Your body has a natural circadian rhythm that works best with regularity. Try to go to bed and wake up at the same time every day, including weekends, to strengthen your sleep-wake cycle.'
    },
    {
      question: 'What if I can\'t fall asleep in 15 minutes?',
      answer: 'If you take longer than 15 minutes to fall asleep, adjust your bedtime accordingly. Some people fall asleep in 5 minutes, others need 30 minutes. The key is knowing your personal pattern. If you regularly struggle to fall asleep within 30 minutes, consider practicing relaxation techniques or consulting a sleep specialist.'
    },
    {
      question: 'Can naps affect my nighttime sleep?',
      answer: 'Yes, naps can impact your nighttime sleep schedule. If you need to nap, keep it short (20-30 minutes) and avoid napping after 3 PM. A full 90-minute nap cycle can help you feel refreshed without sleep inertia, but it may make falling asleep at night more difficult.'
    }
  ];

  return (
    <section id="faq" className="py-16 md:py-24 bg-white dark:bg-slate-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Get answers to common questions about sleep cycles, optimal sleep duration, and using our calculator
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-white to-gray-50 dark:from-slate-800 dark:to-slate-900 rounded-xl border border-gray-200 dark:border-gray-700 overflow-hidden shadow-sm hover:shadow-md transition-shadow"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-gray-50 dark:hover:bg-slate-800/50 transition-colors"
                aria-expanded={openIndex === index}
                aria-controls={`faq-answer-${index}`}
              >
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white pr-4">
                  {faq.question}
                </h3>
                <ChevronDown
                  className={`w-5 h-5 text-indigo-600 dark:text-indigo-400 flex-shrink-0 transition-transform duration-200 ${
                    openIndex === index ? 'transform rotate-180' : ''
                  }`}
                />
              </button>
              <div
                id={`faq-answer-${index}`}
                className={`transition-all duration-200 overflow-hidden ${
                  openIndex === index ? 'max-h-96' : 'max-h-0'
                }`}
              >
                <div className="px-6 pb-5">
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            Still have questions about sleep optimization?
          </p>
          <a
            href="#calculator"
            className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-indigo-600 to-violet-600 text-white font-semibold rounded-full hover:shadow-lg transition-shadow"
          >
            Try the Calculator Now
          </a>
        </div>
      </div>
    </section>
  );
}
