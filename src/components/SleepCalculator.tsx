import { useState } from 'react';
import { Moon, Sun, Clock } from 'lucide-react';
import { calculateWakeUpTimes, calculateBedtimes, SleepTime } from '../utils/sleepCalculations';
import TimePicker from './TimePicker';

interface SleepCalculatorProps {
  onSleepLogged: (bedtime: Date, wakeTime: Date, cycles: number, duration: number) => void;
}

export default function SleepCalculator({ onSleepLogged }: SleepCalculatorProps) {
  const [mode, setMode] = useState<'bedtime' | 'waketime'>('waketime');
  const [inputTime, setInputTime] = useState('07:00 AM');
  const [results, setResults] = useState<SleepTime[]>([]);
  const [selectedResult, setSelectedResult] = useState<SleepTime | null>(null);

  const parseTime = (timeStr: string): { hours: number; minutes: number } => {
    const [time, period] = timeStr.split(' ');
    let [hours, minutes] = time.split(':').map(Number);

    if (period === 'PM' && hours !== 12) hours += 12;
    if (period === 'AM' && hours === 12) hours = 0;

    return { hours, minutes };
  };

  const handleCalculate = () => {
    const { hours, minutes } = parseTime(inputTime);
    const time = new Date();
    time.setHours(hours, minutes, 0, 0);

    if (mode === 'waketime') {
      setResults(calculateBedtimes(time));
    } else {
      setResults(calculateWakeUpTimes(time));
    }
    setSelectedResult(null);
  };

  const handleLogSleep = (result: SleepTime) => {
    const { hours, minutes } = parseTime(inputTime);
    const inputDate = new Date();
    inputDate.setHours(hours, minutes, 0, 0);

    let bedtime: Date, wakeTime: Date;

    if (mode === 'waketime') {
      wakeTime = inputDate;
      const [bedHours, bedMinutes] = result.time.match(/(\d+):(\d+)/)!.slice(1).map(Number);
      bedtime = new Date();
      bedtime.setHours(
        result.time.includes('PM') && bedHours !== 12 ? bedHours + 12 : bedHours,
        bedMinutes,
        0,
        0
      );
      if (bedtime > wakeTime) {
        bedtime.setDate(bedtime.getDate() - 1);
      }
    } else {
      bedtime = inputDate;
      const [wakeHours, wakeMinutes] = result.time.match(/(\d+):(\d+)/)!.slice(1).map(Number);
      wakeTime = new Date();
      wakeTime.setHours(
        result.time.includes('PM') && wakeHours !== 12 ? wakeHours + 12 : wakeHours,
        wakeMinutes,
        0,
        0
      );
      if (wakeTime < bedtime) {
        wakeTime.setDate(wakeTime.getDate() + 1);
      }
    }

    onSleepLogged(bedtime, wakeTime, result.cycles, result.hours);
    setSelectedResult(result);
  };

  return (
    <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 rounded-3xl shadow-2xl p-6 md:p-10 max-w-3xl w-full border border-slate-700">
      <div className="flex items-center justify-center mb-8">
        <div className="bg-gradient-to-br from-indigo-500 to-violet-600 rounded-2xl p-3 mr-4">
          <Clock className="w-8 h-8 text-white" />
        </div>
        <h2 className="text-3xl md:text-4xl font-bold text-white">Sleep Calculator</h2>
      </div>

      <div className="mb-8">
        <div className="flex gap-3 mb-8">
          <button
            onClick={() => {
              setMode('waketime');
              setResults([]);
              setSelectedResult(null);
            }}
            className={`flex-1 py-4 px-6 rounded-2xl font-semibold transition-all transform ${
              mode === 'waketime'
                ? 'bg-gradient-to-r from-indigo-600 to-violet-600 text-white shadow-lg shadow-indigo-500/50 scale-[1.02]'
                : 'bg-slate-800/50 text-slate-400 hover:bg-slate-700/50 border border-slate-700'
            }`}
            aria-pressed={mode === 'waketime'}
          >
            <Sun className="w-5 h-5 inline mr-2" />
            I want to wake up at...
          </button>
          <button
            onClick={() => {
              setMode('bedtime');
              setResults([]);
              setSelectedResult(null);
            }}
            className={`flex-1 py-4 px-6 rounded-2xl font-semibold transition-all transform ${
              mode === 'bedtime'
                ? 'bg-gradient-to-r from-indigo-600 to-violet-600 text-white shadow-lg shadow-indigo-500/50 scale-[1.02]'
                : 'bg-slate-800/50 text-slate-400 hover:bg-slate-700/50 border border-slate-700'
            }`}
            aria-pressed={mode === 'bedtime'}
          >
            <Moon className="w-5 h-5 inline mr-2" />
            I want to go to bed at...
          </button>
        </div>

        <div className="mb-6">
          <label className="block text-lg font-semibold text-white mb-4 text-center">
            {mode === 'waketime' ? 'Select your wake-up time' : 'Select your bedtime'}
          </label>
          <TimePicker value={inputTime} onChange={setInputTime} />
        </div>

        <button
          onClick={handleCalculate}
          className="w-full py-4 bg-gradient-to-r from-indigo-600 via-violet-600 to-purple-600 text-white text-lg rounded-2xl font-bold hover:shadow-2xl hover:shadow-indigo-500/50 transition-all transform hover:scale-[1.02] active:scale-[0.98]"
          aria-label="Calculate sleep times"
        >
          Calculate Optimal Sleep Times
        </button>
      </div>

      {results.length > 0 && (
        <div className="mt-8">
          <h3 className="text-xl md:text-2xl font-bold text-white mb-6 text-center">
            {mode === 'waketime'
              ? '🌙 Recommended Bedtimes'
              : '☀️ Recommended Wake-up Times'}
          </h3>
          <div className="grid gap-4">
            {results.map((result, index) => (
              <div
                key={index}
                className={`p-5 rounded-2xl border-2 transition-all ${
                  selectedResult?.time === result.time
                    ? 'border-green-500 bg-green-500/10 shadow-lg shadow-green-500/20'
                    : 'border-slate-700 hover:border-indigo-500/50 bg-slate-800/30 hover:bg-slate-800/50'
                }`}
              >
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3">
                      <div className="text-3xl md:text-4xl font-bold text-white">{result.time}</div>
                      {index === 1 && (
                        <span className="px-3 py-1 bg-gradient-to-r from-indigo-500 to-violet-500 text-white text-xs rounded-full font-bold uppercase tracking-wider">
                          Best Choice
                        </span>
                      )}
                    </div>
                    <div className="text-sm text-slate-400 mt-2 flex items-center gap-4">
                      <span className="flex items-center gap-1">
                        <span className="w-2 h-2 rounded-full bg-indigo-400"></span>
                        {result.cycles} sleep cycles
                      </span>
                      <span className="flex items-center gap-1">
                        <span className="w-2 h-2 rounded-full bg-violet-400"></span>
                        {result.hours} hours
                      </span>
                    </div>
                  </div>
                  <button
                    onClick={() => handleLogSleep(result)}
                    className={`px-6 py-3 rounded-xl font-semibold transition-all transform hover:scale-105 active:scale-95 ${
                      selectedResult?.time === result.time
                        ? 'bg-green-500 text-white shadow-lg shadow-green-500/50'
                        : 'bg-gradient-to-r from-indigo-600 to-violet-600 text-white hover:shadow-lg hover:shadow-indigo-500/50'
                    }`}
                    aria-label={`Log sleep for ${result.time}`}
                  >
                    {selectedResult?.time === result.time ? '✓ Logged!' : 'Log Sleep'}
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 p-5 bg-gradient-to-r from-indigo-500/10 to-violet-500/10 rounded-2xl border border-indigo-500/30">
            <div className="flex gap-3">
              <div className="text-2xl">💡</div>
              <div>
                <p className="text-sm text-slate-300 leading-relaxed">
                  <strong className="text-white">Sleep Science:</strong> Each sleep cycle lasts approximately 90 minutes and includes
                  light sleep, deep sleep, and REM sleep. Waking up at the end of a cycle helps you feel more
                  refreshed and energized than waking up mid-cycle.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
