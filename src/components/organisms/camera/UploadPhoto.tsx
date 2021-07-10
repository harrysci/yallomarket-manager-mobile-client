import React from 'react';
import {View} from 'react-native';
import {RNCamera} from 'react-native-camera';
import {Button} from 'react-native-elements/dist/buttons/Button';
import {styles} from './styles/style';
import styled from 'styled-components';
import {Text} from 'react-native-elements';

/* 대표 이미지 촬영후 등록하는 메커니즘 */
export default function UploadPhoto(): JSX.Element {
  //   const Button = styled.View`
  //   width: 71px;
  //   height: 70px;
  //   border-radius: 50px;
  //   border: 10px solid
  //   background-color: #fbd145;
  // `;

  const Touchable = styled.TouchableOpacity``;

  const cameraRef = React.useRef<RNCamera>(null); // useRef로 camera를 위한 ref를 하나 만들어주고

  const takePhoto = async () => {
    console.log('cameraRef', cameraRef);
    if (cameraRef) {
      const data = await cameraRef.current?.takePictureAsync({
        quality: 1,
        exif: true,
      });
      console.log('😻 data', data);
    }
  };
  return (
    <View style={styles.root}>
      <Text style={styles.font4}>대표 이미지 촬영</Text>

      <View>
        <RNCamera
          ref={cameraRef}
          style={styles.cameraStyle}
          captureAudio={false}
        />
      </View>
      <View style={styles.flexRow}>
        <Text style={styles.font1}>등록할 상품의</Text>
        <Text style={styles.font3}>대표 이미지를</Text>
        <Text style={styles.font1}> 촬영해 주세요.</Text>
      </View>
      <View style={styles.buttonFlex}>
        <Button style={styles.buttonStyle} onPress={takePhoto} />
      </View>
    </View>
  );
}
