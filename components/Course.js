import React from 'react';
import styled from 'styled-components';

export const Course = (props) => (
  <Container>
    <Cover>
      <Image source={props.image} />
      <Title>{props.title}</Title>
    </Cover>
  </Container>
);

const Container = styled.View``;
