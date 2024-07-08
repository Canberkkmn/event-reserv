import CircularProgress from '@mui/material/CircularProgress';

import loadingStyles from '../styles/Loading.module.css';

const Loading: React.FC = () => {
  return (
    <div className={loadingStyles.loadingOverlay}>
      <CircularProgress className={loadingStyles.spinner} />
    </div>
  );
};

export default Loading;
