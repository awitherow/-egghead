import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Animated,
  Easing,
} from 'react-native';

export default class BasicAnimation extends Component {
  componentWillMount() {
    this.animatedDimensionVal = new Animated.Value(100);
    this.animatedOpacityVal = new Animated.Value(1);
  }

  componentDidMount() {
    Animated.timing(this.animatedDimensionVal, {
      toValue: 150,
      duration: 3000,
      easing: Easing.bounce,
    }).start()

    Animated.timing(this.animatedOpacityVal, {
      toValue: 0.3,
      duration: 3000,
      easing: Easing.bounce,
    }).start()
  }

  render() {
    const animatedStyle = {
      opacity: this.animatedOpacityVal,
      height: this.animatedDimensionVal,
      width: this.animatedDimensionVal,
    }
    return (
      <View style={styles.container}>
        <Animated.View
          style={[animatedStyle, styles.box]}
        />
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  box: {
    backgroundColor: '#333',
  },
});
