import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import CameraUploadScreen from './src/components/screens/camera/CameraUploadScreen';
import {ScannerScreen} from './src/components/screens/barcode/ScannerScreen';
import HowToUpload from './src/components/screens/camera/HowToUpload';
import ConfirmImage from './src/components/organisms/camera/ConfirmPhoto';
import ConfirmImageScreen from './src/components/screens/camera/ConfirmImageScreen';
const Stack = createStackNavigator();
const App = () => {
  return (
    <SafeAreaView style={styles.testContainer}>
      <NavigationContainer>
        <Stack.Navigator>
          {/* <Stack.Screen name="바코드 스캔" component={ScannerScreen} /> */}
          <Stack.Screen name="   " component={HowToUpload} />
          <Stack.Screen name=" " component={CameraUploadScreen} />
          <Stack.Screen name="    " component={ConfirmImage} />
        </Stack.Navigator>
      </NavigationContainer>
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
