import React from 'react';
import {View} from 'react-native';
import RNScanner from '../../organisms/barcode/RNScanner';
export default function ScannerScreen(): JSX.Element {
  return (
    <View>
      <RNScanner />
    </View>
  );
}
