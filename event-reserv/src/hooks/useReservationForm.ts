import { useState } from 'react';

/**
 * Custom hook to manage reservation form state.
 *
 * @returns {Object} The reservation form state and handlers.
 * @returns {string} name - The current name value.
 * @returns {string} email - The current email value.
 * @returns {string} phone - The current phone value.
 * @returns {Function} handleChangeName - Function to update the name value.
 * @returns {Function} handleChangeEmail - Function to update the email value.
 * @returns {Function} handleChangePhone - Function to update the phone value.
 *
 * @example
 * const { name, email, phone, handleChangeName, handleChangeEmail, handleChangePhone } = useReservationForm();
 */
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
