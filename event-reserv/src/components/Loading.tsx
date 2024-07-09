import CircularProgress from '@mui/material/CircularProgress';
import loadingStyles from '@/src/styles/Loading.module.css';

/**
 * Loading component that displays a circular progress spinner.
 *
 * @component
 * @example
 * return (
 *   <Loading />
 * )
 */
const Loading: React.FC = () => {
  return (
    <div className={loadingStyles.loadingOverlay} data-testid="loading-overlay">
      <CircularProgress
        className={loadingStyles.spinner}
        data-testid="loading-spinner"
      />
    </div>
  );
};

export default Loading;
