import React from 'react';
import {View} from 'react-native';
import {TakePictureResponse} from 'react-native-camera';
import {Image} from 'react-native-elements/dist/image/Image';
import {styles} from './styles/style';
interface ImageProps {
  imagePath: TakePictureResponse;
}
export default function ConfirmImage(prop: ImageProps): JSX.Element {
  const {imagePath} = prop;
  // const navigation = useNavigation();
  React.useEffect(() => {
    console.log(imagePath);
  }, []);
  let path = require('../../../assets/images/background/drawable-hdpi/2019.png');
  return (
    <View>
      <Image style={styles.imageStyle} source={path} />
    </View>
  );
}
