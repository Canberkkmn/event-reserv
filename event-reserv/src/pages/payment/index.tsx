import { useRouter } from 'next/router';
import Head from 'next/head';
import { Container, TextField, Typography, Button } from '@mui/material';
import { useState, useEffect } from 'react';
import styles from '@/src/styles/Payment.module.css';

export default function Payment() {
  const router = useRouter();
  const { id, name, email, phone } = router.query;

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
  });

  useEffect(() => {
    if (name && email && phone) {
      setFormData({
        name: name as string,
        email: email as string,
        phone: phone as string,
      });
    }
  }, [name, email, phone]);

  const handlePayment = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle payment logic here
    console.log('Payment processed');
  };

  return (
    <>
      <Head>
        <title>Payment - Event Management App</title>
        <meta name="description" content="Complete your payment" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main className={styles.main}>
        <Container className={styles.container}>
          <Typography variant="h4" component="h4" gutterBottom>
            Complete Payment for Event {id}
          </Typography>
          {formData.name && formData.email && formData.phone && (
            <form className={styles.form} onSubmit={handlePayment}>
              <TextField
                label="Name"
                variant="outlined"
                fullWidth
                margin="normal"
                value={formData.name}
                InputProps={{
                  readOnly: true,
                }}
              />
              <TextField
                label="Email"
                variant="outlined"
                fullWidth
                margin="normal"
                type="email"
                value={formData.email}
                InputProps={{
                  readOnly: true,
                }}
              />
              <TextField
                label="Phone"
                variant="outlined"
                fullWidth
                margin="normal"
                value={formData.phone}
                InputProps={{
                  readOnly: true,
                }}
              />
              <TextField
                label="Credit Card Number"
                variant="outlined"
                fullWidth
                margin="normal"
                type="text"
              />
              <TextField
                label="Expiry Date"
                variant="outlined"
                fullWidth
                margin="normal"
                type="text"
              />
              <TextField
                label="CVV"
                variant="outlined"
                fullWidth
                margin="normal"
                type="text"
              />
              <Button variant="contained" color="primary" type="submit">
                Pay Now
              </Button>
            </form>
          )}
        </Container>
      </main>
    </>
  );
}
