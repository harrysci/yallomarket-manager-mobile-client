import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import CameraUploadScreen from './src/components/screens/camera/CameraUploadScreen';
import HowToUpload from './src/components/screens/camera/HowToUpload';
import ConfirmImage from './src/components/organisms/camera/ConfirmPhoto';
import DetailHowToUpload from './src/components/screens/camera/DetailHowToUpload';
import DetailUpload from './src/components/organisms/camera/DetailUpload';
import ConfirmDetailImage from './src/components/organisms/camera/ConfirmDetailPhoto';
const Stack = createStackNavigator();
const App = () => {
  return (
    <SafeAreaView style={styles.testContainer}>
      <NavigationContainer>
        <Stack.Navigator>
          {/* <Stack.Screen name="바코드 스캔" component={ScannerScreen} /> */}
          <Stack.Screen
            options={{headerShown: false}}
            name="1단계"
            component={HowToUpload}
          />
          <Stack.Screen
            name="대표 이미지 촬영"
            component={CameraUploadScreen}
          />
          <Stack.Screen name="대표 이미지 확인" component={ConfirmImage} />
          <Stack.Screen
            options={{headerShown: false}}
            name="2단계"
            component={DetailHowToUpload}
          />
          <Stack.Screen name="상세 이미지 촬영" component={DetailUpload} />
          <Stack.Screen
            name="상세 이미지 확인"
            component={ConfirmDetailImage}
          />
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
  headerStyle: {
    fontSize: 22,
    fontWeight: '600',
    fontStyle: 'normal',
  },
});

export default App;
