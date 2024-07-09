import '@testing-library/jest-dom'
import { render } from '@testing-library/react';
import Loading from '../src/components/Loading';

describe('Loading Component', () => {
    test('renders without crashing', () => {
        const { getByTestId } = render(<Loading />);
        const loadingOverlay = getByTestId('loading-overlay');
        const spinner = getByTestId('loading-spinner');

        expect(loadingOverlay).toBeInTheDocument();
        expect(spinner).toBeInTheDocument();
    });
});
