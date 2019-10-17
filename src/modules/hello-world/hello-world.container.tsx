import React from 'react';
import {useSelector} from 'react-redux'
import {HelloWorldComponent} from './hello-world.component';
import {content as selectContent} from './redux/selectors';

export const HelloWorldConteiner:React.FC = () => {
    const content = useSelector(selectContent);
    return <HelloWorldComponent content={content}/>;
};
