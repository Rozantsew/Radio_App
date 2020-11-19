import React from 'react';
import styled from 'styled-components/native'
import {
  color,
  background,
  width,
} from 'styled-system';
import {StyleSheet, Button, View, Text, TouchableOpacity} from 'react-native'

const Container = styled.View`
  justifyContent: center;
`;

const StyledButton = styled.TouchableOpacity`
  ${background};
  display: flex;
  padding: 10px 20px;
  border-radius: 20px;
  width: 150px;
`;

const ButtonText = styled.Text`
  ${color};
  position: relative;
  font-size: 16px;

`;



const MyComponent = ({title, background, color, image}) => {
  return (
    <Container color="red">
      <StyledButton
        background={background}
      >
        <ButtonText
          color={color}
        >
          {title}
        </ButtonText>
      </StyledButton>
    </Container>
  );
};

export default MyComponent;

