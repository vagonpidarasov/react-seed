import configureMockStore from 'redux-mock-store';
import {createEpicMiddleware} from 'redux-observable';
import {AppInitEpic$} from './app-init.epic';
import {AppInit} from './app-init.action';
import {classActionMiddleware} from './class-action-middleware';

describe('AppInitEpic$', () => {
    it('should emit INIT action', () => {
        const epicMiddleware = createEpicMiddleware();
        const mockStore = configureMockStore([epicMiddleware, classActionMiddleware]);
        const store = mockStore();
        epicMiddleware.run(AppInitEpic$);
        expect(store.getActions()).toEqual([new AppInit()]);
    });
});
