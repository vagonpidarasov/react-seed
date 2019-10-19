import {HelloWorldState} from './state';
import {SetContent} from './actions';

export function setContent(state:HelloWorldState, action:SetContent):HelloWorldState {
    state.content = action.payload;
    return state;
}
