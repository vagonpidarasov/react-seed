import {VehicleState} from './state';
import {
    setFreeNowVehicles,
    setVehiclesLimit,
    setVehicles,
    setShareNowVehicles,
    resolveVehiclesToShow,
    setVehiclesType,
} from './reducers';
import {
    SetFreeNowVehicles,
    SetVehiclesLimit,
    SetVehicles,
    SetShareNowVehicles,
    ResolveVehiclesToShow,
    SetVehiclesType,
} from './actions';
import {VehicleArrayMock} from '../vehicles.mock';
import {FREE_NOW} from '../vehicle-types.const';

describe('vehicle reducers', () => {
    let state:VehicleState;

    beforeEach(() => {
        state = new VehicleState();
    });

    it('setFreeNowVehicles', () => {
        const newState = setFreeNowVehicles(state, new SetFreeNowVehicles(VehicleArrayMock));
        expect(newState.freeNowVehicles).toEqual(VehicleArrayMock);
        expect(newState.freeNowVehicles).not.toBe(VehicleArrayMock);
    });

    it('setShareNowVehicles', () => {
        const newState = setShareNowVehicles(state, new SetShareNowVehicles(VehicleArrayMock));
        expect(newState.shareNowVehicles).toEqual(VehicleArrayMock);
        expect(newState.shareNowVehicles).not.toBe(VehicleArrayMock);
    });

    it('setVehicles', () => {
        const newState = setVehicles(state, new SetVehicles(VehicleArrayMock));
        expect(newState.vehicles).toEqual(VehicleArrayMock);
        expect(newState.vehicles).not.toBe(VehicleArrayMock);
    });

    it('setVehiclesLimit', () => {
        const newState = setVehiclesLimit(state, new SetVehiclesLimit(50));
        expect(newState.vehiclesLimit).toBe(50);
    });

    it('setVehiclesType', () => {
        const newState = setVehiclesType(state, new SetVehiclesType(FREE_NOW));
        expect(newState.vehiclesType).toBe(FREE_NOW);
    });

    it('resolveVehiclesToShow', () => {
        state.vehiclesType = FREE_NOW;
        state.vehiclesLimit = 1;
        state.freeNowVehicles = [...VehicleArrayMock, ...VehicleArrayMock];
        const newState = resolveVehiclesToShow(state, new ResolveVehiclesToShow());
        expect(newState.vehiclesToShowLimited).toEqual(VehicleArrayMock);
    });
});
