import {Action} from 'yet-another-redux-helpers';

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export const classActionMiddleware = () => (next:(a:Action) => Action) => (action:Action) => {
    next(Object.assign({}, {type: action.type, payload: action.payload}));
};
