import {SetContent} from './actions';
import {SET_CONTENT} from './action-types';

describe('hello world actions', () => {
    it('SetContent', () => {
        const action = new SetContent('content');
        expect(action.type).toBe(SET_CONTENT);
        expect(SetContent.type).toBe(SET_CONTENT);
        expect(action.payload).toEqual('content');
    });
});
