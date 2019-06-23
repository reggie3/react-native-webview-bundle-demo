import React, { Component } from 'react';
import { View, Text, StyleSheet, ActivityIndicator } from 'react-native';
import WebView from 'react-native-webview';
import AssetUtils from 'expo-asset-utils';

const requiredAsset = require('./dist/index.html');

export default class MyWebView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      asset: undefined
    };
  }

  componentDidMount = async () => {
    try {
      const asset = await AssetUtils.resolveAsync(requiredAsset);
      console.log({ asset });
      this.setState({ asset });
    } catch (error) {
      console.log({ error });
    }
  };

  render() {
    return this.state.asset ? (
      <WebView source={{ uri: this.state.asset }} />
    ) : (
      <ActivityIndicator />
    );
  }
}
