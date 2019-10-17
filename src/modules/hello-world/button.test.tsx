import React from 'react';
import {render} from '@testing-library/react';
import {HelloWorldComponent} from './button';

describe('Button', () => {
    test('matches snapshot with default args', async () => {
        const {container} = render(<HelloWorldComponent/>);
        expect(container).toMatchSnapshot();
    });

    test('matches snapshot with default args', async () => {
        const {container} = render(<HelloWorldComponent/>);
        expect(container.firstChild.textContent).toBe('Click Me');
    });
});
