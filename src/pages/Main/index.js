import React from 'react';
import {View, StyleSheet} from 'react-native';
import type {Node} from 'react';
import Header from '~/components/Header';
import Tabs from '~/components/Tabs';
import {Container} from './styles';

function Main(): Node {
  return (
    <Container>
      <Header />
      <Tabs />
    </Container>
  );
}

export default Main;
