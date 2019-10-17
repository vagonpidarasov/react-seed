import {ReducerTestSuite} from 'yet-another-redux-helpers';
import {HelloWorldState} from './state';
import {reducer} from './reducer';
import {SetContent} from './actions';

describe('hello world reducer', ReducerTestSuite(
    reducer,
    new HelloWorldState(),
    new SetContent('hello world'),
));
