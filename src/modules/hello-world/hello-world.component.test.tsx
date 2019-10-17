import React from 'react';
import {render} from '@testing-library/react';
import {HelloWorldComponent} from './hello-world.component';

describe('Button', () => {
    test('matches snapshot with default args', async () => {
        const {container} = render(<HelloWorldComponent content="hello world"/>);
        expect(container).toMatchSnapshot();
    });

    test('matches snapshot with default args', async () => {
        const {container} = render(<HelloWorldComponent content="hello world"/>);
        expect(container.firstChild.textContent).toBe('hello world');
    });
});
