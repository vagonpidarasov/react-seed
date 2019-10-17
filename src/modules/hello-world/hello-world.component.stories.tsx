import React from 'react';
import {HelloWorldComponent} from './hello-world.component';

export default {component: HelloWorldComponent, title: 'Button'};
export const defaultButton = () => <HelloWorldComponent content="Hello World"/>;
