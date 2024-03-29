import {ajax, AjaxResponse} from 'rxjs/ajax';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {HelloWorldRepository} from 'src/modules/hello-world';
import {HelloWorldResponse} from './hello-world-response.type';

export class HelloWorldRepositoryHTTP implements HelloWorldRepository {
    constructor(private baseApiUrl:string) {}
    getContent():Observable<string> {
        return ajax(`${this.baseApiUrl}/hello-world`).pipe(
            map((response:AjaxResponse) => response.response),
            map((response:HelloWorldResponse) => response.payload),
        );
    }
}
