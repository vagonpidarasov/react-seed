import nock from 'nock';
import {Subscription} from 'rxjs';
import {VehicleArrayMock} from 'src/modules/vehicle';
import {VehicleRepositoryHTTP} from './vehicle.repository';
import {VehicleResponse} from './vehicle-response.type';
import {API_BASE_URL} from './api-base-url';

describe('VehicleRepositoryHTTP', () => {
    let subscription:Subscription;
    let vehicleRepositoryHTTP:VehicleRepositoryHTTP;

    beforeEach(() => {
        vehicleRepositoryHTTP = new VehicleRepositoryHTTP();
    });

    afterEach(() => {
        subscription.unsubscribe();
        nock.cleanAll();
    });

    it('return FreeNow vehicles', (done) => {
        const vehicleResponse:VehicleResponse = {poiList: VehicleArrayMock};

        nock(API_BASE_URL)
            .get('/free-now/vehicles')
            .reply(200, vehicleResponse);

        subscription = vehicleRepositoryHTTP.getFreeNowVehicles().subscribe((response) => {
            expect(response).toBeDefined();
            expect(response).toEqual(vehicleResponse.poiList);
            done();
        });
    });

    it('return ShareNow vehicles', (done) => {
        const vehicleResponse:VehicleResponse = {placemarks: VehicleArrayMock};

        nock(API_BASE_URL)
            .get('/share-now/vehicles')
            .reply(200, vehicleResponse);

        subscription = vehicleRepositoryHTTP.getShareNowVehicles().subscribe((response) => {
            expect(response).toBeDefined();
            expect(response).toEqual(vehicleResponse.placemarks);
            done();
        });
    });
});
