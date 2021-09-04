import React from 'react';
import styled from 'styled-components';

export const Course = (props) => (
  <Container>
    <Cover>
      <Image source={props.image} />
      <Logo source={props.logo} />
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
  height: 300px;
  border-radius: 14px;
  margin-left: 20px;
  margin-top: 20px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.15);
`;
const Cover = styled.View`
  width: 100%;
  height: 240px;
  border-top-left-radius: 14px;
  border-top-right-radius: 14px;
  overflow: hidden;
`;
const CoverWrapper = styled.View`
  position: absolute;
  bottom: 10;
  left: 10;
`;
const Image = styled.Image`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
`;
const Logo = styled.Image`
  height: 55px;
  width: 55px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 20px;
`;
const Subtitle = styled.Text`
  color: white;
  font-size: 18px;
  font-weight: 500;
`;
const Title = styled.Text`
  color: white;
  font-size: 24px;
  font-weight: bold;
  margin-top: 10px;
`;
const Content = styled.View`
  padding-left: 20px;
  flex-direction: row;
  align-items: center;
  height: 60px;
`;
const Wrapper = styled.View`
  margin-left: 10px;
`;
const Avatar = styled.Image`
  width: 30px;
  height: 30px;
  background: black;
  border-radius: 15px;
`;
const Caption = styled.Text`
  font-size: 15px;
  font-weight: 600;
`;
const Author = styled.Text`
  font-size: 12px;
  color: gray;
  font-weight: 400;
`;
