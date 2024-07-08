/**
 * Formats a given time in seconds into a string in the format of "MM:SS".
 *
 * @param {number} timeLeft - The time left in seconds.
 * @returns {string} The formatted time string in "MM:SS" format.
 */
export const formatTime = (timeLeft: number): string => {
  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;
  return `${minutes}:${seconds < 10 ? `0${seconds}` : seconds}`;
};
