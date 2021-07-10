import React from 'react';
import {View} from 'react-native';
import {RNCamera} from 'react-native-camera';
import {styles} from './styles/style';
/* 대표 이미지 촬영후 등록하는 메커니즘 */
export default function UploadPhoto(): JSX.Element {
  const cameraRef = React.useRef<RNCamera>(null);
  return (
    <>
      <RNCamera
        ref={cameraRef}
        style={styles.cameraStyle}
        captureAudio={false}
      />
      <View>
        <Touchable onPress={takePhoto}>
          <Button />
        </Touchable>
      </View>
    </>
  );
}
