import React from 'react';
import styled from '@emotion/styled';

type HelloWorldPropsType = {content:string};
const Container = styled.div`
    padding: 1em;
`;

export const HelloWorldComponent:React.FC<HelloWorldPropsType> = ({content}) =>
    <Container className="hello-world" data-test-id="hello-world">{content}</Container>;
