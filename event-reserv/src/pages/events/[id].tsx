import { GetStaticPaths, GetStaticProps } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import { Button, Container, Typography } from '@mui/material';
import styles from '@/src/styles/EventDetails.module.css';

interface Event {
  id: number;
  title: string;
  description: string;
  price: number;
  date: string;
}

interface EventDetailsProps {
  event: Event;
}

export default function EventDetails({ event }: EventDetailsProps) {
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
}

export const getStaticPaths: GetStaticPaths = async () => {
  const res = await fetch('http://localhost:3000/api/events');
  const events: Event[] = await res.json();

  const paths = events.map((event) => ({
    params: { id: event.id.toString() },
  }));

  return { paths, fallback: true };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const { id } = context.params!;
  const res = await fetch('http://localhost:3000/api/events');
  const events: Event[] = await res.json();
  const event = events.find((event) => event.id === parseInt(id as string, 10));

  if (!event) {
    return {
      notFound: true,
    };
  }

  return {
    props: { event },
    revalidate: 10, // Revalidate at most every 10 seconds
  };
};
