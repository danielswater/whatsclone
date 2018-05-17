/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform
} from 'react-native';

import { Provider } from 'react-redux';
import { createStore } from 'redux';

import Rotas from './src/Rotas';
import reducers from './src/reducers';

export default class App extends Component {
  render() {
    return (
      <Provider store={ createStore(reducers) }>
        <Rotas/>
      </Provider>
    );
  }
}
