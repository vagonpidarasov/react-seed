import * as React from 'react';
import {render} from 'react-dom';
import {AppComponent} from './app.component';

export function bootstrap():void {
    render(<AppComponent />, document.getElementById('app-container'));
}
