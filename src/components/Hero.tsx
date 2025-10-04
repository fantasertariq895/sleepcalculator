import { Sparkles } from 'lucide-react';

interface HeroProps {
  onScrollToCalculator: () => void;
}

export default function Hero({ onScrollToCalculator }: HeroProps) {
  return (
    <section className="relative py-16 md:py-24 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 via-violet-50 to-teal-50 dark:from-slate-900 dark:via-indigo-950 dark:to-slate-900"></div>

      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiM0YzFkOTUiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PHBhdGggZD0iTTM2IDE2YzAtMi4yMSAxLjc5LTQgNC00czQgMS43OSA0IDQtMS43OSA0LTQgNC00LTEuNzktNC00em0wIDI0YzAtMi4yMSAxLjc5LTQgNC00czQgMS43OSA0IDQtMS43OSA0LTQgNC00LTEuNzktNC00ek0xMiAxNmMwLTIuMjEgMS43OS00IDQtNHM0IDEuNzkgNCA0LTEuNzkgNC00IDQtNC0xLjc5LTQtNHptMCAyNGMwLTIuMjEgMS43OS00IDQtNHM0IDEuNzkgNCA0LTEuNzkgNC00IDQtNC0xLjc5LTQtNHoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-40"></div>

      <div className="relative container mx-auto px-4 text-center">
        <div className="inline-flex items-center justify-center px-4 py-2 mb-6 bg-indigo-100 dark:bg-indigo-900/30 rounded-full">
          <Sparkles className="w-4 h-4 text-indigo-600 dark:text-indigo-400 mr-2" />
          <span className="text-sm font-semibold text-indigo-600 dark:text-indigo-400">
            Science-Based Sleep Optimization
          </span>
        </div>

        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
          Find Your Perfect{' '}
          <span className="bg-gradient-to-r from-indigo-600 via-violet-600 to-teal-600 bg-clip-text text-transparent">
            Bedtime & Wake Time
          </span>
        </h1>

        <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-10 max-w-2xl mx-auto leading-relaxed">
          Calculate optimal sleep schedules based on 90-minute sleep cycles. Wake up feeling refreshed
          and energized every morning with our free sleep calculator.
        </p>

        <button
          onClick={onScrollToCalculator}
          className="group inline-flex items-center px-8 py-4 bg-gradient-to-r from-indigo-600 to-violet-600 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200"
          aria-label="Calculate your sleep time"
        >
          Calculate My Sleep Time
          <svg
            className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>

        <div className="mt-12 grid grid-cols-3 gap-6 max-w-2xl mx-auto">
          <div className="text-center">
            <div className="text-3xl font-bold text-indigo-600 dark:text-indigo-400">90</div>
            <div className="text-sm text-gray-600 dark:text-gray-400 mt-1">Minute Cycles</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-violet-600 dark:text-violet-400">4-6</div>
            <div className="text-sm text-gray-600 dark:text-gray-400 mt-1">Cycles/Night</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-teal-600 dark:text-teal-400">100%</div>
            <div className="text-sm text-gray-600 dark:text-gray-400 mt-1">Free Forever</div>
          </div>
        </div>
      </div>
    </section>
  );
}
