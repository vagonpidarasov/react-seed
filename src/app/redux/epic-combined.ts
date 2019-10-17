import {combineEpics} from 'redux-observable';
import {HelloWorldEpics} from 'src/modules/hello-world';
import {AppInitEpic$} from './app-init.epic';

export const rootEpic = combineEpics(
    AppInitEpic$,
    HelloWorldEpics,
);
