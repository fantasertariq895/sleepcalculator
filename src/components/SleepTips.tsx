import { Thermometer, Sun, Coffee, Moon, Smartphone, Droplets } from 'lucide-react';

export default function SleepTips() {
  const tips = [
    {
      icon: Thermometer,
      title: 'Optimal Temperature',
      description: 'Keep your bedroom between 60-67°F (15-19°C) for the best sleep quality.',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Sun,
      title: 'Morning Sunlight',
      description: 'Get 10-30 minutes of bright light exposure within 2 hours of waking to regulate your circadian rhythm.',
      color: 'from-amber-500 to-orange-500'
    },
    {
      icon: Coffee,
      title: 'Caffeine Cutoff',
      description: 'Avoid caffeine at least 6 hours before bedtime. Its effects can last much longer than you think.',
      color: 'from-brown-500 to-amber-700'
    },
    {
      icon: Moon,
      title: 'Consistent Schedule',
      description: 'Go to bed and wake up at the same time every day, even on weekends, to strengthen your sleep-wake cycle.',
      color: 'from-indigo-500 to-violet-500'
    },
    {
      icon: Smartphone,
      title: 'Screen Time Limits',
      description: 'Turn off electronic devices 1-2 hours before bed. Blue light suppresses melatonin production.',
      color: 'from-violet-500 to-purple-500'
    },
    {
      icon: Droplets,
      title: 'Stay Hydrated',
      description: 'Drink enough water throughout the day, but reduce intake 2 hours before bed to minimize disruptions.',
      color: 'from-teal-500 to-cyan-500'
    }
  ];

  return (
    <section id="sleep-tips" className="py-16 md:py-24 bg-white dark:bg-slate-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Essential Sleep Hygiene Tips
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Optimize your sleep environment and habits with these science-backed recommendations
            for better rest and recovery.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {tips.map((tip, index) => (
            <div
              key={index}
              className="group bg-gradient-to-br from-white to-gray-50 dark:from-slate-800 dark:to-slate-900 rounded-2xl p-6 border border-gray-200 dark:border-gray-700 hover:border-indigo-300 dark:hover:border-indigo-700 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${tip.color} mb-4`}>
                <tip.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                {tip.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                {tip.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-12 p-6 bg-gradient-to-r from-indigo-50 to-violet-50 dark:from-indigo-950/30 dark:to-violet-950/30 rounded-2xl border border-indigo-200 dark:border-indigo-800">
          <p className="text-sm text-gray-700 dark:text-gray-300 text-center">
            <strong className="text-indigo-600 dark:text-indigo-400">Medical Disclaimer:</strong> This
            information is for educational purposes only and should not replace professional medical advice.
            Consult a healthcare provider for persistent sleep issues.
          </p>
        </div>
      </div>
    </section>
  );
}
