import React from 'react';
import { StyleSheet, Text, SafeAreaView, View } from 'react-native';
import MyWebView from './MyWebView';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.headerText}>Webview Bundling Test</Text>
      </View>
      <View style={{ backgroundColor: 'blue', flex:1, width: '100%'}}>
        <MyWebView />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#dfe',
    alignItems: 'center',
    justifyContent: 'center'
  },
  headerContainer: {
    paddingTop: 40,
    backgroundColor: '#afa',
    width: '100%',
    justifyContent: 'center',
    padding: 5,
    paddingBottom: 10
  },
  headerText: {
    color: 'black',
    fontSize: 18,
    marginBottom: 10
  }
});
