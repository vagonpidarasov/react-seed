import React from 'react';
import {Provider} from 'react-redux';
import {HelloWorldConteiner} from 'src/modules/hello-world';
import {configureStore} from './redux';

export const AppComponent:React.FC = () => {
    const store = configureStore();
    return (
        <Provider store={store}>
            <HelloWorldConteiner/>
        </Provider>
    );
};
