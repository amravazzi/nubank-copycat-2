import React from 'react';
import {View, StyleSheet} from 'react-native';
import type {Node} from 'react';
import {Container, Top, Logo, Title} from './styles';
import logo from '~/assets/bank/bank.png';
import Icon from 'react-native-vector-icons/MaterialIcons';

function Header(): Node {
  return (
    <Container>
      <Top>
        <Logo source={logo} />
        <Title>Andre</Title>
      </Top>
      <Icon name="keyboard-arrow-down" size={20} color="#FFF" />
    </Container>
  );
}

export default Header;
