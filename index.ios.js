/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import Button from './src/components/Button';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
});

const showAlert = () => alert('Hello!');

export default class PrimitivesTest extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Button
          label="Alert!"
          onPress={showAlert}
        />
      </View>
    );
  }
}

AppRegistry.registerComponent('PrimitivesTest', () => PrimitivesTest);

