import {Action} from 'yet-another-redux-helpers';
import {RESOLVE_CONTENT, RESOLVE_CONTENT_FAIL, RESOLVE_CONTENT_SUCCESS, SET_CONTENT} from './action-types';

export class ResolveContent implements Action {
    static type = RESOLVE_CONTENT;
    readonly type = RESOLVE_CONTENT;
}

export class ResolveContentSuccess implements Action {
    static type = RESOLVE_CONTENT_SUCCESS;
    readonly type = RESOLVE_CONTENT_SUCCESS;
    constructor(public payload:string) {}
}

export class ResolveContentFail implements Action {
    static type = RESOLVE_CONTENT_FAIL;
    readonly type = RESOLVE_CONTENT_FAIL;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    constructor(public payload:any) {}
}

export class SetContent implements Action {
    static type = SET_CONTENT;
    readonly type = SET_CONTENT;
    constructor(public payload:string) {}
}
