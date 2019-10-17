import {VehicleArrayMock} from '../vehicles.mock';
import {
    ResolveVehicles,
    ResolveVehiclesSuccess,
    ResolveVehiclesFail,
    ResolveVehiclesToShow,
    SetVehiclesType,
    SetVehiclesLimit,
    SetVehicles,
    SetShareNowVehicles,
    SetFreeNowVehicles
} from './actions';
import {
    RESOLVE_VEHICLES,
    RESOLVE_VEHICLES_SUCCESS,
    RESOLVE_VEHICLES_FAIL,
    RESOLVE_VEHICLES_TO_SHOW,
    SET_VEHICLES_LIMIT,
    SET_VEHICLES_TYPE,
    SET_VEHICLES,
    SET_SHARENOW_VEHICLES,
    SET_FREENOW_VEHICLES,
} from './action-types';

describe('vehicle actions', () => {
    it('SetFreeNowVehicles', () => {
        const action = new SetFreeNowVehicles(VehicleArrayMock);
        expect(action.type).toBe(SET_FREENOW_VEHICLES);
        expect(SetFreeNowVehicles.type).toBe(SET_FREENOW_VEHICLES);
        expect(action.payload).toEqual(VehicleArrayMock);
    });

    it('SetShareNowVehicles', () => {
        const action = new SetShareNowVehicles(VehicleArrayMock);
        expect(action.type).toBe(SET_SHARENOW_VEHICLES);
        expect(SetShareNowVehicles.type).toBe(SET_SHARENOW_VEHICLES);
        expect(action.payload).toEqual(VehicleArrayMock);
    });

    it('SetVehicles', () => {
        const action = new SetVehicles(VehicleArrayMock);
        expect(action.type).toBe(SET_VEHICLES);
        expect(SetVehicles.type).toBe(SET_VEHICLES);
        expect(action.payload).toEqual(VehicleArrayMock);
    });

    it('ResolveVehicles', () => {
        const action = new ResolveVehicles();
        expect(action.type).toBe(RESOLVE_VEHICLES);
        expect(ResolveVehicles.type).toBe(RESOLVE_VEHICLES);
    });

    it('ResolveVehiclesSuccess', () => {
        const action = new ResolveVehiclesSuccess(VehicleArrayMock);
        expect(action.type).toBe(RESOLVE_VEHICLES_SUCCESS);
        expect(ResolveVehiclesSuccess.type).toBe(RESOLVE_VEHICLES_SUCCESS);
        expect(action.payload).toEqual(VehicleArrayMock);
    });

    it('ResolveVehiclesFail', () => {
        const action = new ResolveVehiclesFail({foo: 'bar'});
        expect(action.type).toBe(RESOLVE_VEHICLES_FAIL);
        expect(ResolveVehiclesFail.type).toBe(RESOLVE_VEHICLES_FAIL);
        expect(action.payload).toEqual({foo: 'bar'});
    });

    it('ResolveVehiclesToShow', () => {
        const action = new ResolveVehiclesToShow();
        expect(action.type).toBe(RESOLVE_VEHICLES_TO_SHOW);
        expect(ResolveVehiclesToShow.type).toBe(RESOLVE_VEHICLES_TO_SHOW);
        expect(ResolveVehiclesToShow.type).toBe(RESOLVE_VEHICLES_TO_SHOW);
    });

    it('SetVehiclesType', () => {
        const action = new SetVehiclesType('sometype');
        expect(action.type).toBe(SET_VEHICLES_TYPE);
        expect(SetVehiclesType.type).toBe(SET_VEHICLES_TYPE);
        expect(action.payload).toEqual('sometype');
    });

    it('SetVehiclesLimit', () => {
        const action = new SetVehiclesLimit(1);
        expect(action.type).toBe(SET_VEHICLES_LIMIT);
        expect(SetVehiclesLimit.type).toBe(SET_VEHICLES_LIMIT);
        expect(action.payload).toEqual(1);
    });
});
