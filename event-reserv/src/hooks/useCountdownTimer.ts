import { useState, useEffect } from 'react';

/**
 * Custom hook that implements a countdown timer.
 *
 * @param {number} initialTime - The initial time for the countdown in seconds.
 * @param {Function} onTimerEnd - Callback function to be called when the timer ends.
 * @returns {number} The current time left in the countdown.
 *
 * @example
 * const timeLeft = useCountdownTimer(60, () => {
 *   console.log('Timer ended');
 * });
 */
const useCountdownTimer = (initialTime: number, onTimerEnd: () => void) => {
  const [timeLeft, setTimeLeft] = useState(initialTime);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prevTime) => prevTime - 1);
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  useEffect(() => {
    if (timeLeft === 0) {
      onTimerEnd();
    }
  }, [timeLeft, onTimerEnd]);

  return timeLeft;
};

export default useCountdownTimer;
