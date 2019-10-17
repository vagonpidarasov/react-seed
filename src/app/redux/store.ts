import {createStore, applyMiddleware, Store} from 'redux';
import {classActionMiddleware} from './class-action-middleware';

import {AppState} from './state';
import {AppReducer} from './reducer';
import {epicMiddleware} from './epic-middleware';
import {rootEpic} from './epic-combined';

export function configureStore():Store {
    const store = createStore(AppReducer, ({} as AppState), applyMiddleware(
        epicMiddleware,
        classActionMiddleware,
    ));
    epicMiddleware.run(rootEpic);
    return store;
}
