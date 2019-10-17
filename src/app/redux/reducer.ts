import {combineReducers, Reducer} from 'redux';
import {reducer as helloWorldReducer} from 'src/modules/hello-world';
import {AppState} from './state';

export const AppReducer:Reducer<AppState> = combineReducers<AppState>({
    helloWorld: helloWorldReducer,
});
