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
  View,
  WebView
} from 'react-native';

export default class WebViewProject extends Component {
  render() {
    return (
      <WebView style={styles.container}
               source={{ uri: 'file:///android_asset/simpleselect.html'}}
               startInLoadingState={true} />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

AppRegistry.registerComponent('WebViewProject', () => WebViewProject);
