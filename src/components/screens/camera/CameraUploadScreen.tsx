import React from 'react';
import {View} from 'react-native';
import {styles} from './styles/styles';
import UploadPhoto from '../../organisms/camera/UploadPhoto';

export default function CameraUploadScreen(): JSX.Element {
  return (
    <View style={styles.root1}>
      <UploadPhoto />
    </View>
  );
}
