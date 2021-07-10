import React from 'react';
import {styles} from './styles/styles';
import {Platform, View, Button, Alert} from 'react-native';
// import {PermissionsAndroid} from r'react-native';
import {CameraScreen} from 'react-native-camera-kit';
import {PermissionsAndroid} from 'react-native';

export const RNScanner = (): JSX.Element => {
  const [barcodeNum, setNum] = React.useState('');
  const [openScanner, setOpenScanner] = React.useState(true);
  const onBarcodeScan = (num: string) => {
    console.log('barcode on');
    setNum(num);
    setOpenScanner(false);
    console.log('number : ' + barcodeNum);
    Alert.alert(barcodeNum);
  };

  const OpenScanner = () => {
    if (Platform.OS === 'android') {
      async function requestCameraPermission() {
        try {
          const grant = await PermissionsAndroid.request(
            PermissionsAndroid.PERMISSIONS.CAMERA,
            {
              title: 'camera permission',
              message: 'app needs permission for camera acces',
              buttonPositive: 'ok',
            },
          );
          if (grant === PermissionsAndroid.RESULTS.GRANTED) {
            setNum('');
            setOpenScanner(true);
          } else {
            Alert.alert('Camera permission denied');
          }
        } catch (err) {
          Alert.alert('camera permission err', err);
          console.warn(err);
        }
      }
      requestCameraPermission();
    } else {
      setNum('1234');
      setOpenScanner(true);
    }
  };

  return (
    <View style={styles.scannerStyle}>
      {openScanner ? (
        <View style={styles.scannerStyle}>
          <CameraScreen
            allowCaptureRetake={true}
            cameraRatioOverlay={1}
            captureButtonImage={''}
            cameraFlipImage={''}
            hideControls={''}
            showFrame={''}
            scanBarcode={true}
            onReadCode={(event: any) => onBarcodeScan(event)}
            showCapturedImageCount={false}
            laserColor={'yellow'}
            frameColor={'white'}
            torchOffImage={''}
            torchOnImage={''}
            onBottomButtonPressed={OpenScanner}
          />
        </View>
      ) : (
        <View style={styles.scannerStyle}>
          <Button onPress={OpenScanner} title="click here" />
        </View>
      )}
    </View>
  );
};
