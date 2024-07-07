import type { NextApiRequest, NextApiResponse } from 'next';
import eventsData from '../../api/mockData/events.json';

type Event = {
  id: number;
  title: string;
  description: string;
  price: number;
  date: string;
};

const events: Event[] = eventsData;

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Event[] | { message: string }>
) {
  try {
    if (req.method === 'GET') {
      res.status(200).json(events);
    } else {
      res.setHeader('Allow', ['GET']);
      res.status(405).end(`Method ${req.method} Not Allowed`);
    }
  } catch (error) {
    console.error('Error handling events API:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
}
