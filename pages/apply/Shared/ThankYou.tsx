import React from 'react';
import styled, { keyframes } from 'styled-components';

const bounce = keyframes`
  0% {
    transform: translateY(-100px) scale(0.5);
    opacity: 0;
  }
  80% {
    transform: translateY(20px) scale(1.2);
  }
  100% {
    transform: translateY(0) scale(1);
    opacity: 1;
  }
`;

const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
`;

const Message = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
  border-radius: 10px;
  background-color: white;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  animation: ${bounce} 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275) both;
`;

const Icon = styled.div`
  font-size: 3rem;
  color: green;
  margin-right: 20px;
`;

const Text = styled.div`
  font-size: 2rem;
  color: black;
`;

const ThankYou = () => (
  <Container>
    <Message>
      <Icon>✓</Icon>
      <Text>Thank you for submitting the form!</Text>
    </Message>
  </Container>
);

export default ThankYou;
