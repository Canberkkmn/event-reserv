import { useState } from 'react';

const useReservationForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  const handleChangeName = (value: string) => setName(value);
  const handleChangeEmail = (value: string) => setEmail(value);
  const handleChangePhone = (value: string) => setPhone(value);

  return {
    name,
    email,
    phone,
    handleChangeName,
    handleChangeEmail,
    handleChangePhone,
  };
};

export default useReservationForm;
