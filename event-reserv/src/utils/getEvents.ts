import eventsData from '@/public/api/mockData/events.json';
import { Event } from '@/src/types/types';

/**
 * Simulates fetching events data with a delay.
 *
 * @returns {Promise<Event[]>} A promise that resolves to an array of Event objects.
 */
export const getEvents = (): Promise<Event[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(eventsData as Event[]);
    }, 500); // Simulating a delay of 0.5 seconds
  });
};
