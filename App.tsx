import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';

import TestScreen from './src/components/screens/test/testScreen';

const App = () => {
  return (
    <SafeAreaView style={styles.testContainer}>
      <TestScreen />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  testContainer: {
    // flex: 1,
    // justifyContent: 'center',
    // backgroundColor: '#fdbd39',
  },
  testText: {
    fontSize: 40,
    textAlign: 'center',
  },
});

export default App;
