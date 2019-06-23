import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import WebView from 'react-native-webview';
const index = require('./dist/index.html');

export default class MyWebView extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return <WebView source={{ uri: index }} />;
  }
}
