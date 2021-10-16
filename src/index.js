/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @˛ strict-local
 */

import React from 'react';
import type {Node} from 'react';
import {StatusBar} from 'react-native';
import Routes from '~/routes';

function App(): Node {
  return (
    <>
      <StatusBar barStyle={'light-content'} backgroundColor={'#8b10AE'} />
      <Routes />
    </>
  );
}

export default App;
