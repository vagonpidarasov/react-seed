import {Action, ReducerType, reduce} from 'yet-another-redux-helpers';
import {HelloWorldState} from './state';
import {setContent} from './reducers';
import {SET_CONTENT} from './action-types';

export const actionReducerMap = new Map<string, ReducerType<HelloWorldState>>([
    [SET_CONTENT, setContent],
]);

export function reducer(state:HelloWorldState, action:Action):HelloWorldState {
    return reduce<HelloWorldState>(
        () => new HelloWorldState(),
        actionReducerMap,
        state,
        action,
    );
}
