/**
 * Logs an error message and the associated error to the console.
 *
 * @param {string} message - The error message to log.
 * @param {any} error - The error object or information to log.
 */
export const logError = (message: string, error: any) => {
  console.error(`${message}:`, error);
};
