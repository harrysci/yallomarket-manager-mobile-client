import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import CameraUploadScreen from './src/components/screens/camera/CameraUploadScreen';
// import {ScannerScreen} from './src/components/screens/barcode/ScannerScreen';
// import HowToUpload from './src/components/screens/camera/HowToUpload';
const App = () => {
  return (
    <SafeAreaView style={styles.testContainer}>
      <CameraUploadScreen />
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
