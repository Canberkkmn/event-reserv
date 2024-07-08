import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import { Container, Typography } from '@mui/material';
import PaymentForm from '@/src/components/PaymentForm';
import styles from '@/src/styles/Payment.module.css';

/**
 * Payment page component.
 *
 * @component
 * @returns {JSX.Element} The payment page component.
 */
const Payment: React.FC = () => {
  const router = useRouter();
  const { id, name, email, phone } = router.query;

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    creditCardNumber: '',
    expiryDate: '',
    cvv: '',
  });

  useEffect(() => {
    if (name && email && phone) {
      setFormData({
        name: name as string,
        email: email as string,
        phone: phone as string,
        creditCardNumber: '',
        expiryDate: '',
        cvv: '',
      });
    }
  }, [name, email, phone]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handlePayment = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle payment logic here
    alert('Payment successful!');
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
            <PaymentForm
              formData={formData}
              onChange={handleInputChange}
              onSubmit={handlePayment}
            />
          )}
        </Container>
      </main>
    </>
  );
};

export default Payment;
