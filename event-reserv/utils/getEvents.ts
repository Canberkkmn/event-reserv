import eventsData from '../public/api/mockData/events.json';
export type Event = {
  id: number;
  title: string;
  description: string;
  price: number;
  date: string;
};

export const getEvents = (): Promise<Event[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(eventsData as Event[]);
    }, 500); // Simulating a delay of .5 second
  });
};
