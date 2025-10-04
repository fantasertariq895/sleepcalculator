const SLEEP_CYCLE_MINUTES = 90;
const FALL_ASLEEP_MINUTES = 15;

export interface SleepTime {
  time: string;
  cycles: number;
  hours: number;
}

export const calculateWakeUpTimes = (bedtime: Date): SleepTime[] => {
  const times: SleepTime[] = [];
  const sleepStart = new Date(bedtime.getTime() + FALL_ASLEEP_MINUTES * 60000);

  for (let cycles = 4; cycles <= 6; cycles++) {
    const wakeTime = new Date(sleepStart.getTime() + cycles * SLEEP_CYCLE_MINUTES * 60000);
    times.push({
      time: formatTime(wakeTime),
      cycles,
      hours: parseFloat(((cycles * SLEEP_CYCLE_MINUTES) / 60).toFixed(1))
    });
  }

  return times;
};

export const calculateBedtimes = (wakeTime: Date): SleepTime[] => {
  const times: SleepTime[] = [];

  for (let cycles = 4; cycles <= 6; cycles++) {
    const totalMinutes = cycles * SLEEP_CYCLE_MINUTES + FALL_ASLEEP_MINUTES;
    const bedtime = new Date(wakeTime.getTime() - totalMinutes * 60000);
    times.push({
      time: formatTime(bedtime),
      cycles,
      hours: parseFloat(((cycles * SLEEP_CYCLE_MINUTES) / 60).toFixed(1))
    });
  }

  return times.reverse();
};

export const formatTime = (date: Date): string => {
  return date.toLocaleTimeString('en-US', {
    hour: 'numeric',
    minute: '2-digit',
    hour12: true
  });
};

export const parseTimeString = (timeString: string): Date => {
  const [hours, minutes] = timeString.split(':').map(Number);
  const date = new Date();
  date.setHours(hours, minutes, 0, 0);
  return date;
};

export const generateUserId = (): string => {
  let userId = localStorage.getItem('sleep_calc_user_id');
  if (!userId) {
    userId = `user_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
    localStorage.setItem('sleep_calc_user_id', userId);
  }
  return userId;
};
