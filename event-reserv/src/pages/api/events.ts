import type { NextApiRequest, NextApiResponse } from 'next';
import { getEvents } from '@/src/utils/getEvents';
import { Event } from '@/src/types/types';
import { logError } from '@/src/utils/logger';

/**
 * API route handler for fetching events.
 *
 * @param {NextApiRequest} req - The API request object.
 * @param {NextApiResponse<Event[] | { message: string }>} res - The API response object.
 *
 * @returns {Promise<void>} The response with a list of events or an error message.
 *
 * @example
 * // Fetching events
 * fetch('/api/events')
 *   .then(response => response.json())
 *   .then(data => console.log(data));
 */
const handler = async (
  req: NextApiRequest,
  res: NextApiResponse<Event[] | { message: string }>
): Promise<void> => {
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
