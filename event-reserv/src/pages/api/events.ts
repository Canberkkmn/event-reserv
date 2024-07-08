import type { NextApiRequest, NextApiResponse } from 'next';
import { getEvents } from '@/src/utils/getEvents';
import { Event } from '@/src/types/types';
import { logError } from '@/src/utils/logger';

const handler = async (
  req: NextApiRequest,
  res: NextApiResponse<Event[] | { message: string }>
) => {
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
};

export default handler;
