import {HelloWorldState} from './state';
import {setContent} from './reducers';
import {SetContent} from './actions';

describe('hello world reducers', () => {
    let state:HelloWorldState;

    beforeEach(() => {
        state = new HelloWorldState();
    });

    it('setFreeNowVehicles', () => {
        const newState = setContent(state, new SetContent('content'));
        expect(newState.content).toEqual('content');
    });
});
