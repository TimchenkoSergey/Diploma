import {
    createStore,
    applyMiddleware,
    compose,
    Store,
} from 'redux';

import { reducer } from './reducers';
import { INITIAL_STATE } from './initial-state';
import { IState } from './models';

const composeEnhancers = (window && window['__REDUX_DEVTOOLS_EXTENSION_COMPOSE__']) || compose;

export const getStore = (): Store<IState> => {
    return createStore(
        reducer,
        INITIAL_STATE,
        composeEnhancers(),
    );
};
