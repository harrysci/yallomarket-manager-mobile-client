import React from 'react';
import {RNCamera} from 'react-native-camera';
import {styles} from './styles/styles';
import {useRef} from 'react';

export default function BarcodeScanner(): JSX.Element {
  const ref = useRef(null);
  return <RNCamera style={styles.scannerStyle} ref={ref} />;
}
