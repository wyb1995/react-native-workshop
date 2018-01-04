import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import AppRouter from './app/router';

export default class App extends Component<{}> {
  render() {
    return (
      <View style={styles.container}>
        <AppRouter/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 50,
  },
});
