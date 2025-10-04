import { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import Hero from '../components/Hero';
import SleepCalculator from '../components/SleepCalculator';
import SleepInsights from '../components/SleepInsights';
import SleepEducation from '../components/SleepEducation';
import HowItWorks from '../components/HowItWorks';
import SleepTips from '../components/SleepTips';
import FAQ from '../components/FAQ';
import Newsletter from '../components/Newsletter';
import { supabase, SleepEntry } from '../lib/supabase';
import { generateUserId } from '../utils/sleepCalculations';

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "How accurate is the sleep calculator?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Our sleep calculator is based on scientific research showing that sleep occurs in 90-minute cycles. While individual sleep patterns may vary slightly, following these guidelines can significantly improve sleep quality. The 90-minute cycle is an average, and your personal cycles may range from 80-120 minutes."
      }
    },
    {
      "@type": "Question",
      "name": "How many hours of sleep do I really need?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Most adults need 7-9 hours of sleep per night, which equals 5-6 complete sleep cycles. However, individual needs vary based on age, lifestyle, and health factors. Teenagers may need 8-10 hours, while older adults might function well with 7-8 hours. Quality matters as much as quantity."
      }
    },
    {
      "@type": "Question",
      "name": "Why do I feel groggy even after 8 hours of sleep?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Waking up in the middle of a sleep cycle, particularly during deep sleep or REM, can leave you feeling groggy and disoriented. This is called sleep inertia. Using our calculator to wake at the end of a complete cycle can help you feel more refreshed, even with slightly less total sleep time."
      }
    },
    {
      "@type": "Question",
      "name": "Should I go to bed at the same time every night?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, maintaining a consistent sleep schedule is one of the most important factors for quality sleep. Your body has a natural circadian rhythm that works best with regularity. Try to go to bed and wake up at the same time every day, including weekends, to strengthen your sleep-wake cycle."
      }
    },
    {
      "@type": "Question",
      "name": "What if I can't fall asleep in 15 minutes?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "If you take longer than 15 minutes to fall asleep, adjust your bedtime accordingly. Some people fall asleep in 5 minutes, others need 30 minutes. The key is knowing your personal pattern. If you regularly struggle to fall asleep within 30 minutes, consider practicing relaxation techniques or consulting a sleep specialist."
      }
    },
    {
      "@type": "Question",
      "name": "Can naps affect my nighttime sleep?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, naps can impact your nighttime sleep schedule. If you need to nap, keep it short (20-30 minutes) and avoid napping after 3 PM. A full 90-minute nap cycle can help you feel refreshed without sleep inertia, but it may make falling asleep at night more difficult."
      }
    }
  ]
};

export default function Home() {
  const [sleepEntries, setSleepEntries] = useState<SleepEntry[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadSleepEntries();
  }, []);

  const loadSleepEntries = async () => {
    try {
      const userId = generateUserId();
      const { data, error } = await supabase
        .from('sleep_entries')
        .select('*')
        .eq('user_id', userId)
        .order('created_at', { ascending: false });

      if (error) throw error;
      setSleepEntries(data || []);
    } catch (error) {
      console.error('Error loading sleep entries:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleSleepLogged = async (
    bedtime: Date,
    wakeTime: Date,
    cycles: number,
    duration: number
  ) => {
    try {
      const userId = generateUserId();
      const { error } = await supabase.from('sleep_entries').insert({
        user_id: userId,
        bedtime: bedtime.toISOString(),
        wake_time: wakeTime.toISOString(),
        sleep_duration: duration,
        sleep_cycles: cycles,
      });

      if (error) throw error;
      await loadSleepEntries();
    } catch (error) {
      console.error('Error logging sleep:', error);
    }
  };

  const scrollToCalculator = () => {
    const element = document.getElementById('calculator');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify(faqSchema)}
        </script>
      </Helmet>

      <Hero onScrollToCalculator={scrollToCalculator} />

      <section id="calculator" className="py-16 md:py-24 bg-white dark:bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center">
            <SleepCalculator onSleepLogged={handleSleepLogged} />
          </div>
        </div>
      </section>

      {!loading && sleepEntries.length > 0 && (
        <section className="py-16 bg-gray-50 dark:bg-slate-800">
          <div className="container mx-auto px-4">
            <div className="flex flex-col items-center">
              <SleepInsights entries={sleepEntries} />
            </div>
          </div>
        </section>
      )}

      <SleepEducation />

      <HowItWorks />

      <SleepTips />

      <FAQ />

      <Newsletter />

      <section className="py-16 bg-gradient-to-br from-indigo-600 via-violet-600 to-teal-600 text-white text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Optimize Your Sleep?
          </h2>
          <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Start using our free sleep calculator today and wake up feeling refreshed every morning.
          </p>
          <button
            onClick={scrollToCalculator}
            className="inline-flex items-center px-8 py-4 bg-white text-indigo-600 font-semibold rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200"
            aria-label="Try sleep calculator"
          >
            Try Calculator Now
            <svg
              className="w-5 h-5 ml-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
            </svg>
          </button>
        </div>
      </section>
    </>
  );
}
