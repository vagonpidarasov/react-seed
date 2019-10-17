import {HelloWorldState} from './state';

export const FeatureStateName = 'helloWorld';
export interface FeatureState {
    [FeatureStateName]:HelloWorldState;
}
