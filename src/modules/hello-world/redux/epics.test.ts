import configureMockStore from 'redux-mock-store';
import {createEpicMiddleware} from 'redux-observable';
import {of} from 'rxjs';
import {Action, classActionMiddleware, AppInit} from 'src/modules/redux';
import {
    VehicleInitInitEpic$,
    ResolveVehiclesEpic$,
    ResolveVehiclesSuccessEpic$,
    ResolveVehiclesToShowEpic$,
    SetFreeNowVehiclesEpic$,
    SetShareNowVehiclesEpic$,
    SetVehiclesLimitTypeEpic$,
    SetVehiclesTypeEpic$,
} from './epics';
import {
    ResolveVehicles,
    ResolveVehiclesSuccess,
    SetVehicles,
    SetFreeNowVehicles,
    SetShareNowVehicles,
    SetVehiclesType,
    SetVehiclesLimit,
    ResolveVehiclesToShow,
} from './actions';
import {VehicleArrayMock} from '../vehicles.mock';
import {toFreeNow, toShareNow} from '../to-vehicle.transform';
import {Vehicle} from '../vehicle.model';
import {DEFAULT_VEHICLES_LIMIT, DEFAULT_VEHICLES_TYPE} from '../default-values.const';

describe('vehicle epics', () => {
    const dependencies = {
        VehicleRepository: {
            getFreeNowVehicles: () => of(VehicleArrayMock),
            getShareNowVehicles: () => of(VehicleArrayMock),
        }
    };

    let epicMiddleware;
    let mockStore;
    let store;

    beforeEach(() => {
        epicMiddleware = createEpicMiddleware({dependencies});
        mockStore = configureMockStore([epicMiddleware, classActionMiddleware]);
        store = mockStore();
    });

    describe('VehicleInitInitEpic$', () => {
        it('should emit ResolveVehicles action when App.INIT action is received', () => {
            epicMiddleware.run(VehicleInitInitEpic$);
            store.dispatch(new AppInit());
            const actions:Action[] = store.getActions();

            expect(actions).toEqual([
                new AppInit(),
                new ResolveVehicles(),
            ]);
        });
    });

    describe('ResolveVehiclesEpic$', () => {
        it('should emit ResolveFreeNowVehiclesSuccess action when ResolveFreeNowVehicles action is received', () => {
            const payload:Vehicle[] = [
                ...VehicleArrayMock.map(toFreeNow),
                ...VehicleArrayMock.map(toShareNow),
            ];
            epicMiddleware.run(ResolveVehiclesEpic$);
            store.dispatch(new ResolveVehicles());
            const actions:Action[] = store.getActions();

            expect(actions).toEqual([
                new ResolveVehicles(),
                new ResolveVehiclesSuccess(payload),
            ]);
        });
    });

    describe('ResolveVehiclesSuccessEpic$', () => {
        it('should emit SetVehicles with with payload', () => {
            epicMiddleware.run(ResolveVehiclesSuccessEpic$);
            store.dispatch(new ResolveVehiclesSuccess(VehicleArrayMock));
            const actions:Action[] = store.getActions();

            expect(actions).toEqual([
                new ResolveVehiclesSuccess(VehicleArrayMock),
                new SetVehicles(VehicleArrayMock),
            ]);
        });
    });

    describe('SetFreeNowVehiclesEpic$', () => {
        it('should emit SetFreeNowVehicles with with payload', () => {
            const freeNowVehicles = VehicleArrayMock.map(toFreeNow);
            const shareNowVehicles = VehicleArrayMock.map(toShareNow);
            const allVehicles = [...freeNowVehicles, ...shareNowVehicles];

            epicMiddleware.run(SetFreeNowVehiclesEpic$);
            store.dispatch(new SetVehicles(allVehicles));
            const actions:Action[] = store.getActions();

            expect(actions).toEqual([
                new SetVehicles(allVehicles),
                new SetFreeNowVehicles(freeNowVehicles),
            ]);
        });
    });

    describe('SetShareNowVehiclesEpic$', () => {
        it('should emit SetFreeNowVehicles with with payload', () => {
            const freeNowVehicles = VehicleArrayMock.map(toFreeNow);
            const shareNowVehicles = VehicleArrayMock.map(toShareNow);
            const allVehicles = [...freeNowVehicles, ...shareNowVehicles];

            epicMiddleware.run(SetShareNowVehiclesEpic$);
            store.dispatch(new SetVehicles(allVehicles));
            const actions:Action[] = store.getActions();

            expect(actions).toEqual([
                new SetVehicles(allVehicles),
                new SetShareNowVehicles(shareNowVehicles),
            ]);
        });
    });

    describe('SetVehiclesTypeEpic$', () => {
        it('should set default vehicles type  when vehicles are set', () => {
            epicMiddleware.run(SetVehiclesTypeEpic$);
            store.dispatch(new SetVehicles([]));
            const actions:Action[] = store.getActions();

            expect(actions).toEqual([
                new SetVehicles([]),
                new SetVehiclesType(DEFAULT_VEHICLES_TYPE),
            ]);
        });
    });

    describe('SetVehiclesLimitTypeEpic$', () => {
        it('should reset vehicles limit to the default value when type is changes', () => {
            epicMiddleware.run(SetVehiclesLimitTypeEpic$);
            store.dispatch(new SetVehiclesType(DEFAULT_VEHICLES_TYPE));
            const actions:Action[] = store.getActions();

            expect(actions).toEqual([
                new SetVehiclesType(DEFAULT_VEHICLES_TYPE),
                new SetVehiclesLimit(DEFAULT_VEHICLES_LIMIT),
            ]);
        });
    });

    describe('ResolveVehiclesToShowEpic$', () => {
        it('should resolve vehicles to show when new limit arrives', () => {
            epicMiddleware.run(ResolveVehiclesToShowEpic$);
            store.dispatch(new SetVehiclesType(DEFAULT_VEHICLES_TYPE));
            const actions:Action[] = store.getActions();

            expect(actions).toEqual([
                new SetVehiclesType(DEFAULT_VEHICLES_TYPE),
                new ResolveVehiclesToShow(),
            ]);
        });
    });
});
