import {content as contentSelector} from './selectors';
import {FeatureStateName} from './feature';
import {HelloWorldState} from './state';

describe('hello world selectors', () => {
    let state;

    beforeEach(() => {
        state = {
            [FeatureStateName]: Object.assign(new HelloWorldState(), {
                content: 'content',
            }),
        };
    });

    it('freeNowVehicles', () => {
        expect(contentSelector(state)).toBe('content');
    });
});
