import {Observable} from 'rxjs';

export abstract class HelloWorldRepository {
    abstract getContent():Observable<string>;
}
