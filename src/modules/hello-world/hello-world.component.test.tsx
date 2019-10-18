import React from 'react';
import {render} from '@testing-library/react';
import {HelloWorldComponent} from './hello-world.component';

describe('HelloWorldComponent', () => {
    test('matches snapshot', async () => {
        const {container} = render(<HelloWorldComponent content="hello world"/>);
        expect(container).toMatchSnapshot();
    });

    test('renders content', async () => {
        const {container} = render(<HelloWorldComponent content="hello world"/>);
        expect(container.firstChild.textContent).toBe('hello world');
    });
});
