import { useEffect, useState } from 'react';
import { TrendingUp, BarChart3, Calendar, Star } from 'lucide-react';
import { SleepEntry } from '../lib/supabase';

interface SleepInsightsProps {
  entries: SleepEntry[];
}

export default function SleepInsights({ entries }: SleepInsightsProps) {
  const [stats, setStats] = useState({
    avgDuration: 0,
    avgCycles: 0,
    avgQuality: 0,
    totalNights: 0,
    trend: 'stable' as 'up' | 'down' | 'stable'
  });

  useEffect(() => {
    if (entries.length === 0) return;

    const totalDuration = entries.reduce((sum, entry) => sum + entry.sleep_duration, 0);
    const totalCycles = entries.reduce((sum, entry) => sum + entry.sleep_cycles, 0);
    const qualityEntries = entries.filter(e => e.sleep_quality_rating);
    const totalQuality = qualityEntries.reduce((sum, entry) => sum + (entry.sleep_quality_rating || 0), 0);

    const recentEntries = entries.slice(0, Math.min(7, entries.length));
    const olderEntries = entries.slice(7, Math.min(14, entries.length));

    let trend: 'up' | 'down' | 'stable' = 'stable';
    if (recentEntries.length > 0 && olderEntries.length > 0) {
      const recentAvg = recentEntries.reduce((sum, e) => sum + e.sleep_duration, 0) / recentEntries.length;
      const olderAvg = olderEntries.reduce((sum, e) => sum + e.sleep_duration, 0) / olderEntries.length;
      trend = recentAvg > olderAvg + 0.3 ? 'up' : recentAvg < olderAvg - 0.3 ? 'down' : 'stable';
    }

    setStats({
      avgDuration: parseFloat((totalDuration / entries.length).toFixed(1)),
      avgCycles: parseFloat((totalCycles / entries.length).toFixed(1)),
      avgQuality: qualityEntries.length > 0 ? parseFloat((totalQuality / qualityEntries.length).toFixed(1)) : 0,
      totalNights: entries.length,
      trend
    });
  }, [entries]);

  if (entries.length === 0) {
    return (
      <div className="bg-white rounded-2xl shadow-xl p-8 max-w-2xl w-full mt-8">
        <div className="text-center py-12">
          <BarChart3 className="w-16 h-16 text-gray-300 mx-auto mb-4" />
          <h3 className="text-xl font-semibold text-gray-600 mb-2">No Sleep Data Yet</h3>
          <p className="text-gray-500">
            Start logging your sleep to see personalized insights and track your patterns over time.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-2xl shadow-xl p-8 max-w-2xl w-full mt-8">
      <div className="flex items-center mb-6">
        <BarChart3 className="w-7 h-7 text-blue-600 mr-3" />
        <h2 className="text-2xl font-bold text-gray-800">Your Sleep Insights</h2>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-4">
          <div className="flex items-center justify-between mb-2">
            <Calendar className="w-5 h-5 text-blue-600" />
            {stats.trend === 'up' && <TrendingUp className="w-4 h-4 text-green-600" />}
          </div>
          <div className="text-2xl font-bold text-gray-800">{stats.totalNights}</div>
          <div className="text-xs text-gray-600">Nights Tracked</div>
        </div>

        <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl p-4">
          <div className="flex items-center justify-between mb-2">
            <Clock className="w-5 h-5 text-purple-600" />
          </div>
          <div className="text-2xl font-bold text-gray-800">{stats.avgDuration}h</div>
          <div className="text-xs text-gray-600">Avg Duration</div>
        </div>

        <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-4">
          <div className="flex items-center justify-between mb-2">
            <Moon className="w-5 h-5 text-green-600" />
          </div>
          <div className="text-2xl font-bold text-gray-800">{stats.avgCycles}</div>
          <div className="text-xs text-gray-600">Avg Cycles</div>
        </div>

        <div className="bg-gradient-to-br from-amber-50 to-amber-100 rounded-xl p-4">
          <div className="flex items-center justify-between mb-2">
            <Star className="w-5 h-5 text-amber-600" />
          </div>
          <div className="text-2xl font-bold text-gray-800">
            {stats.avgQuality > 0 ? stats.avgQuality : 'N/A'}
          </div>
          <div className="text-xs text-gray-600">Avg Quality</div>
        </div>
      </div>

      <div className="space-y-3">
        <h3 className="font-semibold text-gray-800 mb-4">Recent Sleep History</h3>
        {entries.slice(0, 5).map((entry) => {
          const bedtime = new Date(entry.bedtime);
          const wakeTime = new Date(entry.wake_time);
          return (
            <div key={entry.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors">
              <div>
                <div className="font-medium text-gray-800">
                  {bedtime.toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
                </div>
                <div className="text-sm text-gray-600">
                  {bedtime.toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit', hour12: true })} →{' '}
                  {wakeTime.toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit', hour12: true })}
                </div>
              </div>
              <div className="text-right">
                <div className="font-semibold text-gray-800">{entry.sleep_duration}h</div>
                <div className="text-sm text-gray-600">{entry.sleep_cycles} cycles</div>
              </div>
            </div>
          );
        })}
      </div>

      {stats.trend !== 'stable' && (
        <div className={`mt-6 p-4 rounded-xl ${stats.trend === 'up' ? 'bg-green-50' : 'bg-amber-50'}`}>
          <p className="text-sm font-medium">
            {stats.trend === 'up' ? '📈 Great job!' : '📉 Heads up!'} Your average sleep duration is{' '}
            {stats.trend === 'up' ? 'increasing' : 'decreasing'} compared to last week.
          </p>
        </div>
      )}
    </div>
  );
}

function Clock({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  );
}

function Moon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
    </svg>
  );
}
