import React from 'react';

export type HelloWorldPropsType = {content:string};
export const HelloWorldComponent:React.FC<HelloWorldPropsType> = ({content}) =>
    <div className="hello-world" data-test-id="hello-world">{content}</div>;
