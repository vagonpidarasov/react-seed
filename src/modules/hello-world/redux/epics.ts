import {ActionsObservable, combineEpics} from 'redux-observable';
import {of} from 'rxjs';
import {map, switchMap, catchError} from 'rxjs/operators';
import {Action, toPayload, AppInit} from 'yet-another-redux-helpers';
import {HelloWorldRepository} from '../hello-world.repository';
import {ResolveContent, ResolveContentFail, ResolveContentSuccess, SetContent} from './actions';

export const HelloWorldEpics = combineEpics(
    InitEpic$,
    ResolveContentEpic$,
    ResolveContentSuccessEpic$,
);

export interface EpicDependencies {
    HelloWorldRepository:HelloWorldRepository;
}

export function InitEpic$(action$:ActionsObservable<Action>) {
    return action$.ofType(AppInit.type).pipe(
        map(() => new ResolveContent())
    );
}

export function ResolveContentEpic$(
    action$:ActionsObservable<Action>,
    store:any,
    deps:EpicDependencies,
) {
    return action$.ofType(ResolveContent.type).pipe(
        switchMap(() => deps.HelloWorldRepository.getContent().pipe(
            map((response:string) => new ResolveContentSuccess(response)),
            catchError((e:any) => of(new ResolveContentFail(e))),
        ))
    );
}

export function ResolveContentSuccessEpic$(action$:ActionsObservable<Action>) {
    return action$.ofType(ResolveContentSuccess.type).pipe(
        map(toPayload),
        map((payload:string) => new SetContent(payload)),
    );
}
