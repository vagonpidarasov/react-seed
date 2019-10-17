import configureMockStore from 'redux-mock-store';
import {createEpicMiddleware} from 'redux-observable';
import {AppInit, classActionMiddleware} from 'yet-another-redux-helpers';
import {AppInitEpic$} from './app-init.epic';

describe('AppInitEpic$', () => {
    it('should emit INIT action', () => {
        const epicMiddleware = createEpicMiddleware();
        const mockStore = configureMockStore([epicMiddleware, classActionMiddleware]);
        const store = mockStore();
        epicMiddleware.run(AppInitEpic$);
        expect(store.getActions()).toEqual([new AppInit()]);
    });
});
