import {FeatureState, FeatureStateName} from './feature';
import {HelloWorldState} from './state';

export function getState(state:FeatureState):HelloWorldState {
    return <HelloWorldState>state[FeatureStateName];
}

export function content(state:FeatureState):string {
    return getState(state).content;
}
