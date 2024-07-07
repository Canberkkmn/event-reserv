import { CircularProgress, Grid } from '@mui/material';

const Loading: React.FC = () => {
  return (
    <Grid
      container
      justifyContent="center"
      alignItems="center"
      style={{ height: '100vh' }}
    >
      <CircularProgress color="primary" />
    </Grid>
  );
};

export default Loading;
