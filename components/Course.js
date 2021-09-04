import React from 'react';
import styled from 'styled-components';

export const Course = (props) => (
  <Container>
    <Cover>
      <Image source={props.image} />
      <Logo source={props.logo} resizeMode='contain' />
      <CoverWrapper>
        <Subtitle>{props.subtitle}</Subtitle>
        <Title>{props.title}</Title>
      </CoverWrapper>
    </Cover>
    <Content>
      <Avatar source={props.avatar} />
      <Wrapper>
        <Caption>{props.caption}</Caption>
        <Author>Taught by {props.author}</Author>
      </Wrapper>
    </Content>
  </Container>
);

const Container = styled.View`
  background: white;
  width: 90%;
  height: 335px;
  border-radius: 14px;
  margin: 10px 20px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.15);
`;
const Cover = styled.View`
  height: 260px;
  border-top-left-radius: 14px;
  border-top-right-radius: 14px;
  overflow: hidden;
`;
const CoverWrapper = styled.View`
  position: absolute;
  bottom: 20px;
  left: 20px;
`;
const Image = styled.Image`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
`;
const Logo = styled.Image`
  height: 48px;
  width: 48px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 20px;
`;
const Subtitle = styled.Text`
  color: rgba(255, 255, 255, 0.8);
  text-transform: uppercase;
  font-size: 15px;
  font-weight: 500;
`;
const Title = styled.Text`
  color: white;
  width: 170px;
  font-size: 24px;
  font-weight: 600;
  margin-top: 4px;
`;
const Content = styled.View`
  padding-left: 20px;
  flex-direction: row;
  align-items: center;
  height: 75px;
`;
const Wrapper = styled.View`
  margin-left: 10px;
`;
const Avatar = styled.Image`
  width: 32px;
  height: 32px;
  background: black;
  border-radius: 16px;
`;
const Caption = styled.Text`
  font-size: 15px;
  width: 250px;
  font-weight: 600;
`;
const Author = styled.Text`
  font-size: 12px;
  color: gray;
  font-weight: 400;
`;
