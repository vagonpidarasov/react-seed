import {ajax, AjaxResponse} from 'rxjs/ajax';
import {Observable} from 'rxjs';
import {map, tap} from 'rxjs/operators';
import {HelloWorldRepository} from 'src/modules/hello-world';
import {HelloWorldResponse} from './hello-world-response.type';

export class HelloWorldRepositoryHTTP implements HelloWorldRepository {
    constructor(private baseApiUrl:string) {}
    getContent():Observable<string> {
        return ajax(`${this.baseApiUrl}/hello-world`).pipe(
            tap(r => console.log(r)),
            map((response:AjaxResponse) => <HelloWorldResponse>response.response),
            map((response:HelloWorldResponse) => response.payload),
        );
    }
}
