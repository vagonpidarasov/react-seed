import React from 'react';
export type HelloWorldPropsType = {content:string};
export const HelloWorldComponent:React.FC<HelloWorldPropsType> = ({content}) => <div>{content}</div>;
