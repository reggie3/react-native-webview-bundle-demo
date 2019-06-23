import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ActivityIndicator,
  Platform,
  Image
} from 'react-native';
import WebView from 'react-native-webview';


const requiredAsset = require('./assets/dist/index.html');

export default class MyWebView extends Component {
  constructor(props) {
    super(props);

    this.state = {
      assetAndroid: null,
      asset: undefined
    };
  }

  componentDidMount = async () => {
    try {
      let asset = require('./dist/index.html');
      this.setState({ asset }, () => {
        console.log({ asset });
      });

   
    } catch (error) {
      console.log({ error });
    }
  };

  render() {
    return this.state.asset  ? (
      <WebView
        source={this.state.asset }
        startInLoadingState={true}
        javaScriptEnabled={true}
        domStorageEnabled={true}
        useWebKit={true}
        mixedContentMode="always"
        originWhitelist={['*']}
      />
    ) : (
      <ActivityIndicator />
    );
  }
}
