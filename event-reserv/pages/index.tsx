import Head from 'next/head';
import { useRouter } from 'next/router';
import { Button, Container, Typography } from '@mui/material';
import styles from '../styles/Home.module.css';

export default function Home() {
  const router = useRouter();

  const handleButtonClick = () => {
    router.push('/events');
  };

  return (
    <>
      <Head>
        <title>Event Management App</title>
        <meta name="description" content="Generated by create next app" />
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
          >
            List Events
          </Button>
        </Container>
      </main>
    </>
  );
}
