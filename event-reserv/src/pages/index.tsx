import Head from 'next/head';
import { useRouter } from 'next/router';
import { Button, Container, Typography } from '@mui/material';

import styles from '@/src/styles/Home.module.css';

/**
 * Home page component.
 *
 * @component
 * @returns {JSX.Element} The home page component.
 */
const Home: React.FC = () => {
  const router = useRouter();

  const handleButtonClick = () => {
    router.push('/events');
  };

  return (
    <>
      <Head>
        <title>Welcome to Event Booking App</title>
        <meta
          name="description"
          content="Discover and book events with Event Booking App."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main className={styles.main}>
        <Container className={styles.container}>
          <Typography variant="h3" component="h3" gutterBottom>
            Welcome to Event Booking App
          </Typography>
          <Button
            variant="contained"
            color="primary"
            onClick={handleButtonClick}
            className={styles.listEventButton}
            aria-label="List Events"
          >
            List Events
          </Button>
        </Container>
      </main>
    </>
  );
};

export default Home;
