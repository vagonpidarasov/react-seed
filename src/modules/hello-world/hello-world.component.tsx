import React from 'react';
export type HelloWorldPropsType = {content:string};
export const HelloWorldComponent:React.FC<HelloWorldPropsType> = ({content}) =>
    <div data-test-id="hello-world">{content}</div>;
