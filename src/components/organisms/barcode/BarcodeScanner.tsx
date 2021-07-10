import React from 'react';
import {View} from 'react-native';
import {BarCodeReadEvent, RNCamera} from 'react-native-camera';
import {styles} from './styles/styles';
import {useRef} from 'react';
interface barcodeProps {
  onBarcodeScan: (data: BarCodeReadEvent) => void;
  barcodeNum?: BarCodeReadEvent;
}

export default function BarcodeScanner(
  BarcodeProps: barcodeProps,
): JSX.Element {
  const {onBarcodeScan} = BarcodeProps;
  const ref = useRef<RNCamera>(null);
  // const [barcodeNum, setCodeInfo] = React.useState<BarCodeReadEvent>();
  // const onBarcodeScan = (barcode: BarCodeReadEvent) => {
  //   console.log('barcode on');
  //   console.log('number : ' + barcodeNum);
  //   setCodeInfo(barcode);
  // };
  // React.useEffect(() => {
  //   console.log(ref.current);
  // }, []);
  return (
    <View>
      <RNCamera
        style={styles.scannerStyle}
        type={RNCamera.Constants.Type.back}
        ref={ref}
        captureAudio={false}
        onGoogleVisionBarcodesDetected={barcode => {
          console.log(barcode);
        }}
        onBarCodeRead={barcode => {
          console.warn('barcode readed');
          onBarcodeScan(barcode);
          console.warn(barcode.data);
          /*이곳에서 page전환 연결 필요*/
        }}
        autoFocus={RNCamera.Constants.AutoFocus.on}
      />
    </View>
  );
}
