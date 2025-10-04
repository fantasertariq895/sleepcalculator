import { useEffect, useRef, useState } from 'react';

interface TimePickerProps {
  value: string;
  onChange: (time: string) => void;
}

export default function TimePicker({ value, onChange }: TimePickerProps) {
  const [hour, setHour] = useState('07');
  const [minute, setMinute] = useState('00');
  const [period, setPeriod] = useState('AM');

  const hourRef = useRef<HTMLDivElement>(null);
  const minuteRef = useRef<HTMLDivElement>(null);
  const periodRef = useRef<HTMLDivElement>(null);

  const hours = Array.from({ length: 12 }, (_, i) => String(i + 1).padStart(2, '0'));
  const minutes = Array.from({ length: 60 }, (_, i) => String(i).padStart(2, '0'));
  const periods = ['AM', 'PM'];

  useEffect(() => {
    const [time, per] = value.split(' ');
    const [h, m] = time.split(':');
    let hour12 = parseInt(h);
    let newPeriod = per || 'AM';

    if (hour12 === 0) {
      hour12 = 12;
      newPeriod = 'AM';
    } else if (hour12 === 12) {
      newPeriod = 'PM';
    } else if (hour12 > 12) {
      hour12 -= 12;
      newPeriod = 'PM';
    }

    setHour(String(hour12).padStart(2, '0'));
    setMinute(m.padStart(2, '0'));
    setPeriod(newPeriod);
  }, [value]);

  useEffect(() => {
    let hour24 = parseInt(hour);
    if (period === 'PM' && hour24 !== 12) {
      hour24 += 12;
    } else if (period === 'AM' && hour24 === 12) {
      hour24 = 0;
    }
    const newTime = `${String(hour24).padStart(2, '0')}:${minute} ${period}`;
    onChange(newTime);
  }, [hour, minute, period, onChange]);

  const handleScroll = (
    ref: React.RefObject<HTMLDivElement>,
    items: string[],
    setter: (value: string) => void
  ) => {
    if (!ref.current) return;

    const container = ref.current;
    const itemHeight = 48;
    const scrollTop = container.scrollTop;
    const index = Math.round(scrollTop / itemHeight);
    const selectedIndex = Math.max(0, Math.min(index, items.length - 1));

    container.scrollTo({
      top: selectedIndex * itemHeight,
      behavior: 'smooth',
    });

    setter(items[selectedIndex]);
  };

  const scrollToValue = (
    ref: React.RefObject<HTMLDivElement>,
    items: string[],
    value: string
  ) => {
    if (!ref.current) return;
    const index = items.indexOf(value);
    if (index !== -1) {
      ref.current.scrollTop = index * 48;
    }
  };

  useEffect(() => {
    scrollToValue(hourRef, hours, hour);
    scrollToValue(minuteRef, minutes, minute);
    scrollToValue(periodRef, periods, period);
  }, []);

  return (
    <div className="relative bg-slate-800/50 rounded-2xl p-6 backdrop-blur-sm border border-slate-700">
      <div className="flex items-center justify-center gap-2">
        <div className="relative h-[240px] w-20 overflow-hidden">
          <div
            ref={hourRef}
            onScroll={() => handleScroll(hourRef, hours, setHour)}
            className="h-full overflow-y-scroll scrollbar-hide snap-y snap-mandatory"
            style={{
              scrollSnapType: 'y mandatory',
              scrollPaddingTop: '96px',
            }}
          >
            <div className="h-24"></div>
            {hours.map((h) => (
              <div
                key={h}
                className="h-12 flex items-center justify-center text-2xl font-semibold snap-start transition-all duration-200"
                style={{
                  color: h === hour ? '#ffffff' : '#64748b',
                  transform: h === hour ? 'scale(1.2)' : 'scale(0.85)',
                }}
              >
                {h}
              </div>
            ))}
            <div className="h-24"></div>
          </div>
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-slate-800/50 to-transparent"></div>
            <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-slate-800/50 to-transparent"></div>
            <div className="absolute top-1/2 left-0 right-0 h-12 -translate-y-1/2 border-y-2 border-indigo-500/30 bg-indigo-500/5"></div>
          </div>
        </div>

        <div className="text-3xl font-bold text-white/50">:</div>

        <div className="relative h-[240px] w-20 overflow-hidden">
          <div
            ref={minuteRef}
            onScroll={() => handleScroll(minuteRef, minutes, setMinute)}
            className="h-full overflow-y-scroll scrollbar-hide snap-y snap-mandatory"
            style={{
              scrollSnapType: 'y mandatory',
              scrollPaddingTop: '96px',
            }}
          >
            <div className="h-24"></div>
            {minutes.map((m) => (
              <div
                key={m}
                className="h-12 flex items-center justify-center text-2xl font-semibold snap-start transition-all duration-200"
                style={{
                  color: m === minute ? '#ffffff' : '#64748b',
                  transform: m === minute ? 'scale(1.2)' : 'scale(0.85)',
                }}
              >
                {m}
              </div>
            ))}
            <div className="h-24"></div>
          </div>
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-slate-800/50 to-transparent"></div>
            <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-slate-800/50 to-transparent"></div>
            <div className="absolute top-1/2 left-0 right-0 h-12 -translate-y-1/2 border-y-2 border-indigo-500/30 bg-indigo-500/5"></div>
          </div>
        </div>

        <div className="relative h-[240px] w-20 overflow-hidden ml-2">
          <div
            ref={periodRef}
            onScroll={() => handleScroll(periodRef, periods, setPeriod)}
            className="h-full overflow-y-scroll scrollbar-hide snap-y snap-mandatory"
            style={{
              scrollSnapType: 'y mandatory',
              scrollPaddingTop: '96px',
            }}
          >
            <div className="h-24"></div>
            {periods.map((p) => (
              <div
                key={p}
                className="h-12 flex items-center justify-center text-xl font-bold snap-start transition-all duration-200"
                style={{
                  color: p === period ? '#ffffff' : '#64748b',
                  transform: p === period ? 'scale(1.2)' : 'scale(0.85)',
                }}
              >
                {p}
              </div>
            ))}
            <div className="h-24"></div>
          </div>
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-slate-800/50 to-transparent"></div>
            <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-slate-800/50 to-transparent"></div>
            <div className="absolute top-1/2 left-0 right-0 h-12 -translate-y-1/2 border-y-2 border-indigo-500/30 bg-indigo-500/5"></div>
          </div>
        </div>
      </div>

      <style>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </div>
  );
}
