import React from 'react';
import {View} from 'react-native';
import {BarCodeReadEvent, RNCamera} from 'react-native-camera';
import {styles} from './styles/styles';
import {useRef} from 'react';

/*
****************************
** barcodeProps - by sangeun Park
****************************
onBarcodeScan  :
- 바코드 번호 상태관리 hook
- RNCamera의 onBarcodeRead 에서호출됨

barcodeNum : 바코드 정보
*/
interface barcodeProps {
  onBarcodeScan: (data: BarCodeReadEvent) => void;
  barcodeNum?: string;
}

export default function BarcodeScanner(
  BarcodeProps: barcodeProps,
): JSX.Element {
  const {onBarcodeScan, barcodeNum} = BarcodeProps;
  const ref = useRef<RNCamera>(null);

  return (
    <View>
      <RNCamera
        style={styles.scannerStyle}
        type={RNCamera.Constants.Type.back}
        ref={ref}
        captureAudio={false}
        onBarCodeRead={barcode => {
          // console.warn('barcode readed');
          onBarcodeScan(barcode);
          // console.warn(barcode.data);

          /*이곳에서 page전환 연결, barcodeNum의 데이터를 Param으로 전달.*/
        }}
        autoFocus={RNCamera.Constants.AutoFocus.on}
      />
    </View>
  );
}
