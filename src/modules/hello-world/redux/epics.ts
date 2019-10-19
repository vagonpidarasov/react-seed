import {ActionsObservable, combineEpics} from 'redux-observable';
import {Observable, of} from 'rxjs';
import {map, switchMap, catchError} from 'rxjs/operators';
import {Action, toPayload, AppInit} from 'yet-another-redux-helpers';
import {HelloWorldRepository} from '../hello-world.repository';
import {ResolveContent, ResolveContentFail, ResolveContentSuccess, SetContent} from './actions';

export interface EpicDependencies {
    HelloWorldRepository:HelloWorldRepository;
}

export function InitEpic$(action$:ActionsObservable<Action>):Observable<ResolveContent> {
    return action$.ofType(AppInit.type).pipe(
        map(() => new ResolveContent())
    );
}

export function ResolveContentEpic$(
    action$:ActionsObservable<Action>,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    store:any,
    deps:EpicDependencies,
):Observable<ResolveContentSuccess|ResolveContentFail> {
    return action$.ofType(ResolveContent.type).pipe(
        switchMap(() => deps.HelloWorldRepository.getContent().pipe(
            map((response:string) => new ResolveContentSuccess(response)),
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            catchError((e:any) => of(new ResolveContentFail(e))),
        ))
    );
}

export function ResolveContentSuccessEpic$(action$:ActionsObservable<Action>):Observable<SetContent> {
    return action$.ofType(ResolveContentSuccess.type).pipe(
        map(toPayload),
        map((payload:string) => new SetContent(payload)),
    );
}

export const HelloWorldEpics = combineEpics(
    InitEpic$,
    ResolveContentEpic$,
    ResolveContentSuccessEpic$,
);
