import {
    freeNowVehicles,
    vehiclesType,
    vehiclesLimit,
    shareNowVehicles,
    allVehicles,
    vehiclesToShowLimited,
    vehiclesToShowLength,
} from './selectors';
import {FeatureStateName} from './feature';
import {VehicleState} from './state';
import {ALL, FREE_NOW, SHARE_NOW} from '../vehicle-types.const';

describe('vehicle actions', () => {
    let state;

    beforeEach(() => {
        state = {
            [FeatureStateName]: Object.assign(new VehicleState(), {
                vehiclesLimit: 50,
                vehiclesType: FREE_NOW,
                vehicles: [{id: 1, source: ALL}, {id: 2, source: FREE_NOW}, {id: 3, source: SHARE_NOW}],
                freeNowVehicles: [{id: 2, source: FREE_NOW}],
                shareNowVehicles: [{id: 3, source: SHARE_NOW}],
                vehiclesToShowLimited: [{id: 2, source: FREE_NOW}],
                vehiclesToShowLength: 1,
            }),
        };
    });

    it('freeNowVehicles', () => {
        expect(freeNowVehicles(state)).toEqual([{id: 2, source: FREE_NOW}]);
    });

    it('vehiclesType', () => {
        expect(vehiclesType(state)).toEqual(FREE_NOW);
    });

    it('vehiclesLimit', () => {
        expect(vehiclesLimit(state)).toEqual(50);
    });

    it('shareNowVehicles', () => {
        expect(shareNowVehicles(state)).toEqual([{id: 3, source: SHARE_NOW}]);
    });

    it('allVehicles', () => {
        expect(allVehicles(state)).toEqual([
            {id: 1, source: ALL},
            {id: 2, source: FREE_NOW},
            {id: 3, source: SHARE_NOW},
        ]);
    });

    it('vehiclesToShowLimited', () => {
        expect(vehiclesToShowLimited(state)).toEqual([{id: 2, source: FREE_NOW}]);
    });

    it('vehiclesToShowLength', () => {
        expect(vehiclesToShowLength(state)).toEqual(1);
    });
});
