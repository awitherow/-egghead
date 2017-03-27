import React, { Component } from 'react';
import {
  AppRegistry,
} from 'react-native';

import ListViewPrototype from './src/list-view-prototype'

function getColor() {
  return '#' + Math.random().toString(16).slice(2, 8).toUpperCase();
}

export default class App extends Component {
  render() {
    return (
      <ListViewPrototype
        minHeight={100}
        maxHeight={200}
        list={[
          { id: '0', color: getColor()},
          { id: '1', color: getColor()},
          { id: '2', color: getColor()},
          { id: '3', color: getColor()},
          { id: '4', color: getColor()},
          { id: '5', color: getColor()},
          { id: '6', color: getColor()},
          { id: '7', color: getColor()},
          { id: '8', color: getColor()},
          { id: '9', color: getColor()}]}/>
      )
  }
}

AppRegistry.registerComponent('animated', () => App);
