import { useEffect, useState } from 'react';
import Head from 'next/head';
import Loading from '@/src/components/Loading';
import SortedEvents from '@/src/components/SortedEvents';
import { Event } from '@/src/types/types';
import styles from '@/src/styles/Events.module.css';
import { logError } from '@/src/utils/logger';

/**
 * Events page component.
 *
 * @component
 * @returns {JSX.Element} The events page component.
 */
const Events: React.FC = () => {
  const [events, setEvents] = useState<Event[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null); // State for handling errors

  useEffect(() => {
    async function fetchEvents() {
      try {
        const response = await fetch('/api/events');

        if (!response.ok) {
          throw new Error('Failed to fetch events');
        }

        const data = await response.json();

        setEvents(data);
        setLoading(false);
      } catch (error: any) {
        logError('Error fetching events', error.message);
        setError('Failed to fetch events. Please try again later.'); // Set error message
        setLoading(false); // Ensure loading state is false in case of error
      }
    }

    fetchEvents();
  }, []);

  return (
    <>
      <Head>
        <title>Events - Event Management App</title>
        <meta name="description" content="List of events" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main className={styles.main}>
        {loading ? (
          <Loading />
        ) : error ? (
          <div className={styles.error}>{error}</div>
        ) : (
          <SortedEvents events={events} />
        )}
      </main>
    </>
  );
};

export default Events;
