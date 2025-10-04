import { Brain, Zap, Heart, Shield } from 'lucide-react';

export default function SleepEducation() {
  return (
    <div className="bg-white rounded-2xl shadow-xl p-8 max-w-2xl w-full mt-8">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Understanding Sleep Cycles</h2>

      <div className="prose prose-sm max-w-none">
        <p className="text-gray-700 mb-6">
          Sleep occurs in cycles of approximately <strong>90 minutes</strong>, progressing through different stages.
          Each cycle includes light sleep, deep sleep, and REM (Rapid Eye Movement) sleep.
        </p>

        <div className="grid md:grid-cols-2 gap-4 mb-6">
          <div className="p-4 bg-blue-50 rounded-xl">
            <div className="flex items-center mb-2">
              <Brain className="w-5 h-5 text-blue-600 mr-2" />
              <h3 className="font-semibold text-gray-800">Light Sleep (Stage 1-2)</h3>
            </div>
            <p className="text-sm text-gray-700">
              Your body begins to relax, heart rate slows, and you transition into deeper sleep stages.
            </p>
          </div>

          <div className="p-4 bg-purple-50 rounded-xl">
            <div className="flex items-center mb-2">
              <Shield className="w-5 h-5 text-purple-600 mr-2" />
              <h3 className="font-semibold text-gray-800">Deep Sleep (Stage 3)</h3>
            </div>
            <p className="text-sm text-gray-700">
              Physical restoration occurs. Your body repairs tissues, builds muscle, and strengthens immunity.
            </p>
          </div>

          <div className="p-4 bg-green-50 rounded-xl">
            <div className="flex items-center mb-2">
              <Zap className="w-5 h-5 text-green-600 mr-2" />
              <h3 className="font-semibold text-gray-800">REM Sleep</h3>
            </div>
            <p className="text-sm text-gray-700">
              Brain activity increases, dreams occur, and memory consolidation happens.
            </p>
          </div>

          <div className="p-4 bg-amber-50 rounded-xl">
            <div className="flex items-center mb-2">
              <Heart className="w-5 h-5 text-amber-600 mr-2" />
              <h3 className="font-semibold text-gray-800">Complete Cycles</h3>
            </div>
            <p className="text-sm text-gray-700">
              Adults need 4-6 complete cycles per night for optimal health and cognitive function.
            </p>
          </div>
        </div>

        <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-6">
          <h3 className="font-semibold text-gray-800 mb-3">Why Wake Between Cycles?</h3>
          <p className="text-sm text-gray-700 mb-3">
            Waking up at the end of a sleep cycle (rather than in the middle of deep or REM sleep)
            can help you feel more alert and refreshed. This is because you're naturally in a lighter
            sleep stage, making the transition to wakefulness smoother.
          </p>
          <p className="text-sm text-gray-700">
            Our calculator accounts for the average <strong>15 minutes</strong> it takes to fall asleep,
            ensuring you get the most accurate bedtime recommendations.
          </p>
        </div>
      </div>
    </div>
  );
}
