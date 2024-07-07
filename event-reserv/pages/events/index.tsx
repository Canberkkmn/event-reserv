import { useEffect, useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { Container, Typography } from '@mui/material';
import styles from '../../styles/Events.module.css';

interface Event {
  id: number;
  title: string;
  description: string;
  price: number;
  date: string;
}

export default function Events() {
  const [events, setEvents] = useState<Event[]>([]);

  useEffect(() => {
    async function fetchEvents() {
      const response = await fetch('/api/events');
      const data = await response.json();
      setEvents(data);
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
        <Container className={styles.container}>
          <Typography variant="h3" component="h3" gutterBottom>
            List of Events
          </Typography>
          {events.map((event) => (
            <Link href={`/events/${event.id}`} key={event.id}>
              <div className={styles.event}>
                <Typography
                  variant="h5"
                  component="h5"
                  className={styles.eventTitle}
                >
                  {event.title}
                </Typography>
                <Typography variant="body1" className={styles.eventDescription}>
                  {event.description}
                </Typography>
                <Typography variant="body2" className={styles.eventPrice}>
                  ${event.price.toFixed(2)}
                </Typography>
                <Typography variant="body2" className={styles.eventDate}>
                  {event.date}
                </Typography>
              </div>
            </Link>
          ))}
        </Container>
      </main>
    </>
  );
}
