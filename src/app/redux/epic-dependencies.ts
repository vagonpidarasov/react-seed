import {HelloWorldRepositoryHTTP} from 'src/repositories';

export const API_BASE_URL = process.env.API_BASE_URL;
export const epicDependencies = {
    HelloWorldRepository: new HelloWorldRepositoryHTTP(API_BASE_URL),
};
