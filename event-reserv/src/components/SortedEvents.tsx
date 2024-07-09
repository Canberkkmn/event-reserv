import { useState, useMemo, useCallback } from 'react';
import Link from 'next/link';
import { Container, Typography } from '@mui/material';
import { Event, SortOrder, SortType } from '@/src/types/types';
import SortButtons from '@/src/components/SortButtons';
import styles from '@/src/styles/Events.module.css';

interface SortedEventsProps {
  events: Event[];
}

/**
 * SortedEvents component sorts the events by price, date, and title, and renders them.
 *
 * @component
 * @param {SortedEventsProps} props - Props containing the events.
 * @returns {JSX.Element} The sorted events component.
 */
const SortedEvents: React.FC<SortedEventsProps> = ({ events }) => {
  const [sortOrder, setSortOrder] = useState<SortOrder>('asc');
  const [sortBy, setSortBy] = useState<SortType>('price');

  const toggleSortOrder = (sortType: SortType) => {
    if (sortBy !== sortType) {
      setSortBy(sortType);
      setSortOrder('asc');
    } else {
      setSortOrder((prevOrder) => (prevOrder === 'asc' ? 'desc' : 'asc'));
    }
  };

  const sortEvents = useCallback(
    (events: Event[]) => {
      return [...events].sort((a, b) => {
        if (sortBy === 'price') {
          return sortOrder === 'asc' ? a.price - b.price : b.price - a.price;
        } else if (sortBy === 'date') {
          const dateA = new Date(a.date).getTime();
          const dateB = new Date(b.date).getTime();
          return sortOrder === 'asc' ? dateA - dateB : dateB - dateA;
        } else {
          return sortOrder === 'asc'
            ? a.title.localeCompare(b.title)
            : b.title.localeCompare(a.title);
        }
      });
    },
    [sortBy, sortOrder]
  );

  const sortedEvents = useMemo(() => sortEvents(events), [events, sortEvents]);

  return (
    <Container className={styles.container}>
      <Typography variant="h3" component="h3" gutterBottom>
        List of Events
      </Typography>
      <SortButtons
        sortBy={sortBy}
        sortOrder={sortOrder}
        onSort={toggleSortOrder}
      />
      {sortedEvents.map((event) => (
        <Link
          href={`/events/${event.id}`}
          key={event.id}
          aria-label={`View details for ${event.title}`}
        >
          <div className={styles.event}>
            <Typography
              variant="h5"
              component="h5"
              className={styles.eventTitle}
            >
              {event.title}
            </Typography>
            <Typography variant="body1" className={styles.eventDescription}>
              {event.description}
            </Typography>
            <Typography variant="body2" className={styles.eventPrice}>
              ${event.price.toFixed(2)}
            </Typography>
            <Typography variant="body2" className={styles.eventDate} data-testid="event-date">
              {event.date}
            </Typography>
          </div>
        </Link>
      ))}
    </Container>
  );
};

export default SortedEvents;
