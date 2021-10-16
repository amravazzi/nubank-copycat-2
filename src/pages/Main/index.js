import React from 'react';
import {View, StyleSheet} from 'react-native';
import type {Node} from 'react';
import Header from '~/components/Header';
import {Container} from './styles';

function Main(): Node {
  return (
    <Container>
      <Header />
    </Container>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#8b10AE',
//   },
// });

export default Main;
