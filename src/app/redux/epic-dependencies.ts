import {HelloWorldRepositoryHTTP} from 'src/repositories';
import {API_BASE_URL} from '../api-base-url';

export const epicDependencies = {
    HelloWorldRepository: new HelloWorldRepositoryHTTP(API_BASE_URL),
};
