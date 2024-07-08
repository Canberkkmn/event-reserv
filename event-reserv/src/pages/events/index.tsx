import { useEffect, useState } from 'react';
import Head from 'next/head';
import Loading from '@/src/components/Loading';
import SortedEvents from '@/src/components/SortedEvents';
import { Event } from '@/src/types/types';
import styles from '@/src/styles/Events.module.css';

/**
 * Events page component.
 *
 * @component
 * @returns {JSX.Element} The events page component.
 */
const Events: React.FC = () => {
  const [events, setEvents] = useState<Event[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchEvents() {
      const response = await fetch('/api/events');
      const data = await response.json();
      setEvents(data);
      setLoading(false);
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
        {loading ? <Loading /> : <SortedEvents events={events} />}
      </main>
    </>
  );
};

export default Events;
