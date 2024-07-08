import { Button } from '@mui/material';
import styles from '@/src/styles/Events.module.css';

type SortType = 'price' | 'date' | 'title';
type SortOrder = 'asc' | 'desc';

interface SortButtonsProps {
  sortBy: SortType;
  sortOrder: SortOrder;
  onSort: (sortType: SortType) => void;
}

/**
 * SortButtons component for sorting events by price, date, or title.
 *
 * @component
 * @param {SortButtonsProps} props - The props for the SortButtons component.
 * @param {SortType} props.sortBy - The current sort type.
 * @param {SortOrder} props.sortOrder - The current sort order.
 * @param {(sortType: SortType) => void} props.onSort - The function to call when a sort button is clicked.
 * @returns {JSX.Element} The SortButtons component.
 */
const SortButtons: React.FC<SortButtonsProps> = ({
  sortBy,
  sortOrder,
  onSort,
}) => {
  const sortOptions: {
    type: SortType;
    label: string;
    color: 'primary' | 'secondary' | 'info';
  }[] = [
    { type: 'price', label: 'Price', color: 'primary' },
    { type: 'date', label: 'Date', color: 'secondary' },
    { type: 'title', label: 'Title', color: 'info' },
  ];

  /**
   * Get the arrow symbol for the sort type.
   *
   * @param {SortType} sortType - The sort type to get the arrow for.
   * @returns {string} The arrow symbol if the sort type matches the current sort type and order, otherwise an empty string.
   */
  const getArrow = (sortType: SortType) => {
    if (sortBy !== sortType) return '';
    return sortOrder === 'asc' ? '↑' : '↓';
  };

  return (
    <div className={styles.sortButtons}>
      {sortOptions.map((option) => (
        <Button
          key={option.type}
          variant="contained"
          color={option.color}
          className={styles.sortButton}
          onClick={() => onSort(option.type)}
          aria-label={`Sort by ${option.label}`}
        >
          Sort by {option.label} {getArrow(option.type)}
        </Button>
      ))}
    </div>
  );
};

export default SortButtons;
