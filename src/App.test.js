import { render, screen } from '@testing-library/react';
import App from './App';

describe('The App component', () => {
    it('should do something', () => {
        render(<App />);

        const linkElement = screen.getByText(/cards remaining/i);
        
        expect(linkElement).toBeInTheDocument();
    });

});