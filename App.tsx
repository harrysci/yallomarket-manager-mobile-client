import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import {ScannerScreen} from './src/components/screens/barcode/ScannerScreen';
const App = () => {
  return (
    <SafeAreaView style={styles.testContainer}>
      <ScannerScreen />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  testContainer: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ffff',
  },
  testText: {
    fontSize: 40,
    textAlign: 'center',
  },
});

export default App;
