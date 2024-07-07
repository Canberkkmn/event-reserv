import type { NextApiRequest, NextApiResponse } from 'next';
import { getEvents, Event } from '../../utils/getEvents';
import { logError } from '../../utils/logger';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Event[] | { message: string }>
) {
  try {
    if (req.method === 'GET') {
      const events = await getEvents();
      res.status(200).json(events);
    } else {
      res.setHeader('Allow', ['GET']);
      res.status(405).end(`Method ${req.method} Not Allowed`);
    }
  } catch (error) {
    logError('Error handling events API', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
}
