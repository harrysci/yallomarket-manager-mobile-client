import React, { useState } from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import { Overlay } from 'react-native-elements/dist/overlay/Overlay';
import { deleteProps } from '../../screens/home/product-list/ListScreen';
import styles from './style/style';



const DeleteOverComponent=(props: deleteProps)=>{
  const { deleteState, setDeleteState} =props;
  /*모달의 현재 state*/
  const [overState,setOverState]=useState<boolean>(deleteState);
  console.log("overState:",overState);
  const handleDeleteOverlay=()=>{
    setOverState(false);
    /*상세 정보 페이지의 delete state도 변경*/
    setDeleteState();
  };
  return(
    <Overlay
				isVisible={overState===true?true:false}
				onBackdropPress={handleDeleteOverlay}
				overlayStyle={styles.deleteOver}
			>
        <TouchableOpacity style={styles.xbutton} onPress={handleDeleteOverlay}>
          < View>
          <Image
            style={{width:16, height:16}}
            source={require('../../../assets/images/product-list/xbutton.png')}
            />
            </View>
          </TouchableOpacity>
          
        
        <View style={styles.deleteView}>
          <Image
            source={require('../../../assets/images/product-list/deletecheck.png')}
            style={{ width:32, height:32}}/>
          <Text style={styles.deleteText}>상품 삭제 정보 삭제 완료!</Text>
        </View>
        
			</Overlay>
  )

}
export default DeleteOverComponent;