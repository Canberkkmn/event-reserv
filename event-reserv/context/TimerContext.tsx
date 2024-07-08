import { createContext, useContext, useEffect, useState } from 'react';

type TimerContextType = {
  remainingTime: number | null;
  setRemainingTime: React.Dispatch<React.SetStateAction<number | null>>;
};

const TimerContext = createContext<TimerContextType | undefined>(undefined);

export const useTimer = () => {
  const context = useContext(TimerContext);
  if (!context) {
    throw new Error('useTimer must be used within a TimerProvider');
  }
  return context;
};

export const TimerProvider = ({ children }: { children: any }) => {
  const [remainingTime, setRemainingTime] = useState<number | null>(10); // Initial time in seconds (900 seconds = 15 minutes)

  useEffect(() => {
    const storedRemainingTime = localStorage.getItem('remainingTime');
    if (storedRemainingTime) {
      setRemainingTime(parseInt(storedRemainingTime, 10));
    }
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setRemainingTime((prev) => {
        if (typeof prev === 'number' && prev > 0) {
          return prev - 1;
        }
        return prev;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    localStorage.setItem('remainingTime', remainingTime?.toString() || '');
  }, [remainingTime]);

  return (
    <TimerContext.Provider value={{ remainingTime, setRemainingTime }}>
      {children}
    </TimerContext.Provider>
  );
};
