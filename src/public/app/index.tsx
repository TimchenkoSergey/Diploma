import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import { getStore } from './store';
import { MainContainer } from './components';
import { MAIN_CONTAINER_SELECTOR } from './constants';

const rootElement: HTMLDivElement = document.querySelector(MAIN_CONTAINER_SELECTOR) as HTMLDivElement;

if (rootElement) {
    ReactDOM.render(
        <Provider store={ getStore() }>
            <MainContainer />
        </Provider>,
        rootElement,
    );
}
