import {createEpicMiddleware} from 'redux-observable';
import {epicDependencies} from './epic-dependencies';

export const epicMiddleware = createEpicMiddleware({
    dependencies: epicDependencies
});
