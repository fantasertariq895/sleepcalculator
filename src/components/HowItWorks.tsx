import { Clock, Moon, Sun, RefreshCw } from 'lucide-react';

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-16 md:py-24 bg-gradient-to-br from-gray-50 to-blue-50 dark:from-slate-900 dark:to-slate-800">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            How the Sleep Calculator Works
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Our calculator uses sleep science to determine optimal times based on complete 90-minute cycles
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-lg border border-gray-200 dark:border-gray-700">
              <div className="flex items-center mb-6">
                <div className="bg-gradient-to-br from-indigo-500 to-violet-600 rounded-full p-3 mr-4">
                  <Moon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Sleep Cycles</h3>
              </div>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
                Each sleep cycle lasts approximately <strong>90 minutes</strong> and includes multiple stages:
                light sleep, deep sleep, and REM (Rapid Eye Movement) sleep.
              </p>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                Waking up at the end of a complete cycle helps you feel more refreshed and alert, rather than
                groggy and disoriented.
              </p>
            </div>

            <div className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-lg border border-gray-200 dark:border-gray-700">
              <div className="flex items-center mb-6">
                <div className="bg-gradient-to-br from-teal-500 to-cyan-600 rounded-full p-3 mr-4">
                  <Clock className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Fall Asleep Time</h3>
              </div>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
                The average person takes about <strong>15 minutes</strong> to fall asleep after lying down.
                Our calculator automatically accounts for this.
              </p>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                This ensures the recommended bedtimes align with when you should actually be in bed, not
                when you need to be asleep.
              </p>
            </div>
          </div>

          <div className="bg-gradient-to-br from-white to-indigo-50 dark:from-slate-800 dark:to-indigo-950/30 rounded-2xl p-8 shadow-xl border border-indigo-200 dark:border-indigo-800">
            <div className="flex items-center mb-6">
              <div className="bg-gradient-to-br from-violet-500 to-purple-600 rounded-full p-3 mr-4">
                <RefreshCw className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">The Calculation</h3>
            </div>

            <div className="space-y-4">
              <div className="flex items-start">
                <div className="bg-indigo-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 flex-shrink-0 mt-1">
                  1
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Enter Your Time</h4>
                  <p className="text-gray-600 dark:text-gray-300">
                    Choose whether you want to calculate bedtimes or wake times, then enter your preferred time.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-violet-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 flex-shrink-0 mt-1">
                  2
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Calculate Cycles</h4>
                  <p className="text-gray-600 dark:text-gray-300">
                    The calculator determines times for 4, 5, and 6 complete sleep cycles (6-9 hours total).
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-teal-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 flex-shrink-0 mt-1">
                  3
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Get Results</h4>
                  <p className="text-gray-600 dark:text-gray-300">
                    View optimal times that align with complete cycles, helping you wake up refreshed and energized.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 text-center">
            <div className="inline-flex items-center px-4 py-2 bg-amber-100 dark:bg-amber-900/30 rounded-full">
              <Sun className="w-5 h-5 text-amber-600 dark:text-amber-400 mr-2" />
              <span className="text-sm font-medium text-amber-800 dark:text-amber-300">
                Most adults need 7-9 hours of sleep (approximately 5-6 complete cycles)
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
