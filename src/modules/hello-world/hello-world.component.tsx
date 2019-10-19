import React from 'react';
import styled from '@emotion/styled';

export type HelloWorldPropsType = {content:string};
const Container = styled.div`
    padding: 1em;
`;

export const HelloWorldComponent:React.FC<HelloWorldPropsType> = ({content}:HelloWorldPropsType) =>
    <Container className="hello-world" data-test-id="hello-world">{content}</Container>;
