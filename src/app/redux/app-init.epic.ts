import {Observable} from 'rxjs';
import {Action, AppInit} from 'yet-another-redux-helpers';
import {defer, of} from 'rxjs';

export function AppInitEpic$():Observable<Action> {
    return defer(() => of(new AppInit()));
}
