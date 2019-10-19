import configureMockStore from 'redux-mock-store';
import {createEpicMiddleware} from 'redux-observable';
import {of} from 'rxjs';
import {Action, classActionMiddleware, AppInit} from 'yet-another-redux-helpers';
import {InitEpic$, ResolveContentEpic$, ResolveContentSuccessEpic$} from './epics';
import {ResolveContent, ResolveContentSuccess, SetContent} from './actions';

describe('hello world epics', () => {
    const dependencies = {
        HelloWorldRepository: {
            // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
            getContent: () => of('content'),
        },
    };

    let epicMiddleware;
    let mockStore;
    let store;

    beforeEach(() => {
        epicMiddleware = createEpicMiddleware({dependencies});
        mockStore = configureMockStore([epicMiddleware, classActionMiddleware]);
        store = mockStore();
    });

    describe('InitEpic$', () => {
        it('should emit ResolveContent action when App.INIT action is received', () => {
            epicMiddleware.run(InitEpic$);
            store.dispatch(new AppInit());
            const actions:Action[] = store.getActions();

            expect(actions).toEqual([
                new AppInit(),
                new ResolveContent(),
            ]);
        });
    });

    describe('ResolveVehiclesEpic$', () => {
        it('should emit ResolveFreeNowVehiclesSuccess action when ResolveFreeNowVehicles action is received', () => {
            epicMiddleware.run(ResolveContentEpic$);
            store.dispatch(new ResolveContent());
            const actions:Action[] = store.getActions();

            expect(actions).toEqual([
                new ResolveContent(),
                new ResolveContentSuccess('content'),
            ]);
        });
    });

    describe('ResolveContentSuccessEpic$', () => {
        it('should emit SetContent with with payload', () => {
            epicMiddleware.run(ResolveContentSuccessEpic$);
            store.dispatch(new ResolveContentSuccess('content'));
            const actions:Action[] = store.getActions();

            expect(actions).toEqual([
                new ResolveContentSuccess('content'),
                new SetContent('content'),
            ]);
        });
    });
});
