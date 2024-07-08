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
    <div className={loadingStyles.loadingOverlay}>
      <CircularProgress className={loadingStyles.spinner} />
    </div>
  );
};

export default Loading;
