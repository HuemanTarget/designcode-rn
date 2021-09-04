import React from 'react';
import { ScrollView, SafeAreaView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import styled from 'styled-components';
import { Card } from './components/Card';
import { NotificationIcon } from './components/Icons';
import { Logo } from './components/Logo';

export default function App() {
  return (
    <Container>
      <SafeAreaView>
        <ScrollView>
          <TitleBar>
            <Avatar source={require('./assets/avatar.jpg')} />
            <Title>Welcome back,</Title>
            <Name>Josh</Name>
            <NotificationIcon
              style={{ position: 'absolute', right: 20, top: 5 }}
            />
          </TitleBar>
          <ScrollView
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            style={{
              flexDirection: 'row',
              paddingBottom: 20,
              paddingLeft: 12,
              paddingTop: 30,
            }}
          >
            {logos.map((logo, index) => (
              <Logo key={index} image={logo.image} text={logo.text} />
            ))}
          </ScrollView>
          <Subtitle>Continue Learning</Subtitle>
          <ScrollView
            horizontal={true}
            style={{ paddingBottom: 30 }}
            showsHorizontalScrollIndicator={false}
          >
            <Card
              title='Styled Components 1'
              image={require('./assets/background2.jpg')}
              logo={require('./assets/logo-react.png')}
              subtitle='5 of 12 sections'
              caption='React Native'
            />
            <Card
              title='Styled Components 2'
              image={require('./assets/background2.jpg')}
              logo={require('./assets/logo-react.png')}
              subtitle='5 of 12 sections'
              caption='React Native'
            />
            <Card
              title='Styled Components 3'
              image={require('./assets/background2.jpg')}
              logo={require('./assets/logo-react.png')}
              subtitle='5 of 12 sections'
              caption='React Native'
            />
          </ScrollView>
        </ScrollView>
      </SafeAreaView>
    </Container>
  );
}

const Container = styled.View`
  flex: 1;
  background-color: #f0f3f5;
`;
const TitleBar = styled.View`
  width: 100%;
  margin-top: 50px;
  padding-left: 80px;
`;
const Title = styled.Text`
  font-size: 16px;
  color: #b8bece;
  font-weight: 500;
`;
const Name = styled.Text`
  font-size: 20px;
  color: #3c4560;
  font-weight: bold;
`;
const Avatar = styled.Image`
  width: 44px;
  height: 44px;
  background: black;
  border-radius: 22px;
  margin-left: 20px;
  position: absolute;
  top: 0;
  left: 0;
`;
const Subtitle = styled.Text`
  color: #b8bece;
  font-weight: 600;
  font-size: 15px;
  margin-left: 20px;
  margin-top: 20px;
  text-transform: uppercase;
`;

const logos = [
  {
    image: require('./assets/logo-framerx.png'),
    text: 'Framer X',
  },
  {
    image: require('./assets/logo-figma.png'),
    text: 'Figma',
  },
  {
    image: require('./assets/logo-studio.png'),
    text: 'Studio',
  },
  {
    image: require('./assets/logo-react.png'),
    text: 'React',
  },
  {
    image: require('./assets/logo-swift.png'),
    text: 'Swift',
  },
  {
    image: require('./assets/logo-sketch.png'),
    text: 'Sketch',
  },
];
