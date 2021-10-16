import React from 'react';
import {NativeRouter, Route, Switch} from 'react-router-native';
import Main from '~/pages/Main';
import type {Node} from 'react';

function Router(): Node {
  return (
    <NativeRouter>
      <Switch>
        <Route exact path="/" component={Main} />
      </Switch>
    </NativeRouter>
  );
}

export default Router;
