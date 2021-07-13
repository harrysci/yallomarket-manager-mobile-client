import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import CameraUploadScreen from './src/components/screens/camera/CameraUploadScreen';
import HowToUpload from './src/components/screens/camera/HowToUpload';
import ConfirmImage from './src/components/organisms/camera/ConfirmPhoto';
import HowToDetailUpload from './src/components/screens/camera/HowToDetailUpload';
import UploadDetailPhoto from './src/components/organisms/camera/UploadDetailPhoto';
import ConfirmDetailImage from './src/components/organisms/camera/ConfirmDetailPhoto';
import {ScannerScreen} from './src/components/screens/barcode/ScannerScreen';
const Stack = createStackNavigator();
const App = () => {
  return (
    <SafeAreaView style={styles.testContainer}>
      <NavigationContainer>
        <Stack.Navigator>
          {/* <Stack.Screen
            name="스캔화면"
            options={{title: '바코드 스캔'}}
            component={ScannerScreen}
          /> */}
          <Stack.Screen
            options={{headerShown: false}}
            name="1단계"
            component={HowToUpload}
          />
          <Stack.Screen
            name="대표 이미지 촬영"
            options={{title: '대표 이미지 촬영'}}
            component={CameraUploadScreen}
          />
          <Stack.Screen
            name="대표 이미지 확인"
            options={{title: '대표 이미지 촬영'}}
            component={ConfirmImage}
          />
          <Stack.Screen
            options={{headerShown: false}}
            name="2단계"
            component={HowToDetailUpload}
          />
          <Stack.Screen
            name="상세 이미지 촬영"
            options={{title: '상세 이미지 촬영'}}
            component={UploadDetailPhoto}
          />
          <Stack.Screen
            name="상세 이미지 확인"
            options={{title: '상세 이미지 촬영'}}
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
