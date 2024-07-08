import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import { Button, Container, TextField, Typography } from '@mui/material';
import Popup from '../../components/Popup';
import { useTimer } from '../../context/TimerContext';
import useReservationForm from '../../utils/useReservationForm';
import styles from '../../styles/Reservation.module.css';

export default function Reservation() {
  const router = useRouter();
  const { id } = router.query;
  const { remainingTime, setRemainingTime } = useTimer();
  const {
    name,
    email,
    phone,
    handleChangeName,
    handleChangeEmail,
    handleChangePhone,
  } = useReservationForm();
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    if (remainingTime === 0) {
      handleTimeout();
    }
  }, [remainingTime]);

  function handleTimeout() {
    setShowPopup(true);
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    router.push({
      pathname: `/payment`,
      query: { id, name, email, phone },
    });
  };

  const handleClosePopup = () => {
    setShowPopup(false);
    router.push('/events'); // Redirect to events page after closing popup
    localStorage.removeItem('remainingTime');
  };

  return (
    <>
      <Head>
        <title>Reservation - Event Management App</title>
        <meta name="description" content="Make a reservation" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main className={styles.main}>
        <Container className={styles.container}>
          <Typography variant="h4" component="h4" gutterBottom>
            Reservation for Event {id}
          </Typography>
          {remainingTime !== null && remainingTime >= 0 && (
            <Typography variant="subtitle1" gutterBottom>
              Time remaining: {Math.floor(remainingTime / 60)}:
              {('0' + (remainingTime % 60)).slice(-2)}
            </Typography>
          )}
          <form className={styles.form} onSubmit={handleSubmit}>
            <TextField
              label="Name"
              variant="outlined"
              fullWidth
              margin="normal"
              value={name}
              onChange={(e) => handleChangeName(e.target.value)}
            />
            <TextField
              label="Email"
              variant="outlined"
              fullWidth
              margin="normal"
              type="email"
              value={email}
              onChange={(e) => handleChangeEmail(e.target.value)}
            />
            <TextField
              label="Phone"
              variant="outlined"
              fullWidth
              margin="normal"
              value={phone}
              onChange={(e) => handleChangePhone(e.target.value)}
            />
            <Button variant="contained" color="primary" type="submit">
              Submit
            </Button>
          </form>
          <Popup open={showPopup} onClose={handleClosePopup} />
        </Container>
      </main>
    </>
  );
}
