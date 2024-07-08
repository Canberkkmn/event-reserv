// components/Popup.tsx
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
} from '@mui/material';

interface PopupProps {
  open: boolean;
}

const Popup: React.FC<PopupProps> = ({ open }) => {
  return (
    <Dialog open={open}>
      <DialogTitle>Reservation Timeout</DialogTitle>
      <DialogContent>
        <p>Your reservation session has timed out.</p>
      </DialogContent>
      <DialogActions>
        <Button color="primary">Close</Button>
      </DialogActions>
    </Dialog>
  );
};

export default Popup;
