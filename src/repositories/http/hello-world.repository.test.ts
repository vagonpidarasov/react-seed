import nock from 'nock';
import {Subscription} from 'rxjs';
import {HelloWorldRepositoryHTTP} from './hello-world.repository';
import {HelloWorldResponse} from './hello-world-response.type';

describe('VehicleRepositoryHTTP', () => {
    const baseApiUrl = 'http://localhost:8000';
    let subscription:Subscription;
    let helloWorldRepositoryHTTP:HelloWorldRepositoryHTTP;

    beforeEach(() => {
        helloWorldRepositoryHTTP = new HelloWorldRepositoryHTTP(baseApiUrl);
    });

    afterEach(() => {
        subscription.unsubscribe();
        nock.cleanAll();
    });

    it('returns hello world content', (done) => {
        const vehicleResponse:HelloWorldResponse = {payload: 'content'};
        nock(baseApiUrl).get('/hello-world').reply(200, vehicleResponse, {'Access-Control-Allow-Origin': '*'});

        subscription = helloWorldRepositoryHTTP.getContent().subscribe((response) => {
            expect(response).toBeDefined();
            expect(response).toEqual(vehicleResponse.payload);
            done();
        });
    });
});
