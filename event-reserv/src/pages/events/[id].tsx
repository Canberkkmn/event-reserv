import { GetStaticPaths, GetStaticProps } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import { Button, Container, Typography } from '@mui/material';
import { Event } from '@/src/types/types';
import Loading from '@/src/components/Loading';
import { logError } from '@/src/utils/logger';
import styles from '@/src/styles/EventDetails.module.css';

interface EventDetailsProps {
  event: Event;
}

/**
 * Event details page component.
 *
 * @component
 * @param {EventDetailsProps} props - The properties for the component.
 * @param {Event} props.event - The event object containing details.
 *
 * @returns {JSX.Element} The event details page component.
 */
const EventDetails: React.FC<EventDetailsProps> = ({ event }) => {
  if (!event) {
    return <Loading />;
  }

  return (
    <>
      <Head>
        <title>{event.title} - Event Management App</title>
        <meta name="description" content={event.description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main className={styles.main}>
        <Container className={styles.container}>
          <Typography variant="h3" component="h3" gutterBottom>
            {event.title}
          </Typography>
          <Typography variant="body1" className={styles.description}>
            {event.description}
          </Typography>
          <Typography variant="body2" className={styles.price}>
            Price: ${event.price.toFixed(2)}
          </Typography>
          <Typography variant="body2" className={styles.date}>
            Date: {event.date}
          </Typography>
          <Link href={`/reservation/${event.id}`} passHref>
            <Button
              variant="contained"
              color="primary"
              className={styles.button}
            >
              Make a Reservation
            </Button>
          </Link>
        </Container>
      </main>
    </>
  );
};

export default EventDetails;

/**
 * Get static paths for event details pages.
 *
 * @returns {Promise<{ paths: { params: { id: string; } }[]; fallback: boolean; }>} The paths for the event detail pages.
 */
export const getStaticPaths: GetStaticPaths = async () => {
  try {
    const res = await fetch('http://localhost:3000/api/events');

    if (!res.ok) {
      throw new Error('Failed to fetch events');
    }

    const events: Event[] = await res.json();

    const paths = events.map((event) => ({
      params: { id: event.id.toString() },
    }));

    return { paths, fallback: true };
  } catch (error: any) {
    logError('Error fetching events', error.message);

    return {
      paths: [],
      fallback: true,
    };
  }
};

/**
 * Get static props for an event details page.
 *
 * @param {import('next').GetStaticPropsContext} context - The context for the static props function.
 * @returns {Promise<{ props: { event: Event; }; revalidate: number; } | { notFound: boolean; }>} The event data or a not found response.
 */
export const getStaticProps: GetStaticProps = async (context) => {
  const { id } = context.params!;

  try {
    const res = await fetch('http://localhost:3000/api/events');

    if (!res.ok) {
      throw new Error(`Failed to fetch event with id ${id}`);
    }

    const events: Event[] = await res.json();
    const event = events.find(
      (event) => event.id === parseInt(id as string, 10)
    );

    return {
      props: { event },
      revalidate: 10,
    };
  } catch (error: any) {
    logError('Error fetching event', error.message);

    return {
      notFound: true,
    };
  }
};
