import React, { Component } from 'react';
import {
  AppRegistry,
} from 'react-native';

import ListViewPrototype from './src/list-view-prototype'

export default class App extends Component {
  render() {
    return (
      <ListViewPrototype
        list={['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']}/>
      )
  }
}

AppRegistry.registerComponent('animated', () => App);
