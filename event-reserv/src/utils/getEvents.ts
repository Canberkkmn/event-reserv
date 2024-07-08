import eventsData from '@/public/api/mockData/events.json';
import { Event } from '@/src/types/types';

export const getEvents = (): Promise<Event[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(eventsData as Event[]);
    }, 500); // Simulating a delay of .5 second
  });
};
