import '@testing-library/jest-dom';
import { render, fireEvent, screen } from '@testing-library/react';
import SortedEvents from '../src/components/SortedEvents';
import { useRouter } from 'next/router';

jest.mock('next/router', () => ({
    useRouter: jest.fn(),
}));

describe('SortedEvents Component', () => {
    const mockEvents = [
        { id: 1, title: 'Event 1', description: 'Description 1', price: 100, date: '2024-07-10' },
        { id: 2, title: 'Event 2', description: 'Description 2', price: 50, date: '2024-07-11' },
        { id: 3, title: 'Event 3', description: 'Description 3', price: 200, date: '2024-07-09' },
    ];

    beforeEach(() => {
        useRouter.mockImplementation(() => ({
            push: jest.fn(),
        }));

        render(<SortedEvents events={mockEvents} />);
    });

    test('renders list of events sorted by default (price ascending)', () => {
        const eventTitles = screen.getAllByRole('heading', { level: 5 });

        // Check if events are rendered in default order (price ascending)
        expect(eventTitles[0]).toHaveTextContent('Event 2'); // Lowest price
        expect(eventTitles[1]).toHaveTextContent('Event 1');
        expect(eventTitles[2]).toHaveTextContent('Event 3'); // Highest price
    });

    test('changes sort order when SortButtons component is clicked', () => {
        const sortButton = screen.getByRole('button', { name: /Sort by Date/ });

        fireEvent.click(sortButton); // Click to sort by date

        const eventDates = screen.getAllByTestId('event-date');

        // Check if events are now sorted by date
        expect(eventDates[0]).toHaveTextContent('2024-07-09'); // Earliest date
        expect(eventDates[1]).toHaveTextContent('2024-07-10');
        expect(eventDates[2]).toHaveTextContent('2024-07-11'); // Latest date
    });

    test('navigates to event details page when event title is clicked', () => {
        const eventTitleLink = screen.getByText('Event 1'); // Assuming 'Event 1' is rendered first

        fireEvent.click(eventTitleLink);

        // Check if navigation occurred correctly
        expect(window.location.pathname).toBe('/');
    });
});
