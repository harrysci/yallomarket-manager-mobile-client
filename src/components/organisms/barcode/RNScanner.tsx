import React from 'react';
import {styles} from './styles/styles';
import {View} from 'react-native';
// import {PermissionsAndroid} from 'react-native';
import {CameraScreen} from 'react-native-camera-kit';

export default function RNScanner(): JSX.Element {
  const [barcodeNum, setNum] = React.useState('');

  function BarcodeScan(num: string) {
    console.log('barcode on');
    setNum(num);
    console.log('number : ' + barcodeNum);
  }
  return (
    <View>
      <CameraScreen
        actions={{rightButtonText: 'Done', leftButtonText: 'Cancel'}}
        showFrarme={true}
        scanBarcode={true}
        onReadCode={event => BarcodeScan(event)}
        onBottomButtonPressed={event => BarcodeScan(event)}
        hideControls={false}
        showCapturedImageCount={false}
        laserColor="yellow"
        frameColor="white"
      />
    </View>
  );
}
