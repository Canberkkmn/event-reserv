import { TextField, Button } from '@mui/material';

interface PaymentFormProps {
  formData: {
    name: string;
    email: string;
    phone: string;
    creditCardNumber: string;
    expiryDate: string;
    cvv: string;
  };
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSubmit: (e: React.FormEvent) => void;
}

const PaymentForm: React.FC<PaymentFormProps> = ({
  formData,
  onChange,
  onSubmit,
}) => {
  return (
    <form onSubmit={onSubmit}>
      <TextField
        label="Name"
        variant="outlined"
        fullWidth
        margin="normal"
        type="text"
        name="name"
        value={formData.name}
        onChange={onChange}
        required
      />
      <TextField
        label="Email"
        variant="outlined"
        fullWidth
        margin="normal"
        type="email"
        name="email"
        value={formData.email}
        onChange={onChange}
        required
      />
      <TextField
        label="Phone"
        variant="outlined"
        fullWidth
        margin="normal"
        type="text"
        name="phone"
        value={formData.phone}
        onChange={onChange}
        required
      />
      <TextField
        label="Credit Card Number"
        variant="outlined"
        fullWidth
        margin="normal"
        type="text"
        name="creditCardNumber"
        value={formData.creditCardNumber}
        onChange={onChange}
        required
      />
      <TextField
        label="Expiry Date"
        variant="outlined"
        fullWidth
        margin="normal"
        type="text"
        name="expiryDate"
        value={formData.expiryDate}
        onChange={onChange}
        required
      />
      <TextField
        label="CVV"
        variant="outlined"
        fullWidth
        margin="normal"
        type="text"
        name="cvv"
        value={formData.cvv}
        onChange={onChange}
        required
      />
      <Button variant="contained" color="primary" type="submit">
        Pay Now
      </Button>
    </form>
  );
};

export default PaymentForm;
