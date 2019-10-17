import {ReducerTestSuite} from 'src/modules/redux/reducer-test-suite';
import {VehicleState} from './state';
import {reducer} from './reducer';
import {SetFreeNowVehicles} from './actions';

describe('vehicle reducer', ReducerTestSuite(
    reducer,
    new VehicleState(),
    new SetFreeNowVehicles([]),
));
