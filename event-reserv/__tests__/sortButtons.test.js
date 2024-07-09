import '@testing-library/jest-dom'; 
import { render, fireEvent, screen } from '@testing-library/react';
import SortButtons from '../src/components/SortButtons';

describe('SortButtons Component', () => {
    const sortBy = 'date'; // Example initial sort type
    const sortOrder = 'asc'; // Example initial sort order

    const mockOnSort = jest.fn();

    beforeEach(() => {
        render(SortButtons({ sortBy, sortOrder, onSort: mockOnSort }));
    });

    test('renders sort buttons with correct labels', () => {
        const priceButton = screen.getByRole('button', { name: /Sort by Price/ });
        const dateButton = screen.getByRole('button', { name: /Sort by Date/ });
        const titleButton = screen.getByRole('button', { name: /Sort by Title/ });

        expect(priceButton).toBeInTheDocument();
        expect(dateButton).toBeInTheDocument();
        expect(titleButton).toBeInTheDocument();
    });

    test('displays sorting arrow correctly', () => {
        const priceButton = screen.getByRole('button', { name: /Sort by Price/ });
        const dateButton = screen.getByRole('button', { name: /Sort by Date/ });
        const titleButton = screen.getByRole('button', { name: /Sort by Title/ });

        // Check that the arrow symbol is displayed correctly based on initial props
        expect(dateButton).toHaveTextContent('↑'); // By default, Date should be ascending

        // Simulate clicking Price button
        fireEvent.click(priceButton);
        expect(mockOnSort).toHaveBeenCalledWith('price');

        expect(priceButton).toHaveTextContent('Sort by Price');

        // Simulate clicking Title button
        fireEvent.click(titleButton);
        expect(mockOnSort).toHaveBeenCalledWith('title');

        expect(titleButton).toHaveTextContent('Sort by Title');
    });

    test('calls onSort handler with correct sort type', () => {
        const priceButton = screen.getByRole('button', { name: /Sort by Price/ });
        const dateButton = screen.getByRole('button', { name: /Sort by Date/ });
        const titleButton = screen.getByRole('button', { name: /Sort by Title/ });

        fireEvent.click(priceButton);
        expect(mockOnSort).toHaveBeenCalledWith('price');

        fireEvent.click(titleButton);
        expect(mockOnSort).toHaveBeenCalledWith('title');
    });
});
