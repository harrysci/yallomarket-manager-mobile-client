import React, { useState } from 'react';
import { SafeAreaView, ScrollView, View } from 'react-native';
import DeleteOverComponent from '../../../organisms/product-list/DeleteOverComponent';
import ProductListComponent from '../../../organisms/product-list/ProductListComponent';
import UpContainer from '../../../organisms/product-list/UpContainer';
import styles from './style';

export interface deleteProps {
	overState: boolean;
	handleDeleteOverlay: ()=> void;
}


export default function ListScreen(): JSX.Element {
	const [overState,setOverState]=useState<boolean>(false);
  console.log("overState:",overState);
  const handleDeleteOverlay=()=>{
    setOverState(!overState);
    /*상세 정보 페이지의 delete state도 변경*/
  };
	return (

			<ScrollView style={styles.upContainer}>
				<UpContainer />
				<ProductListComponent overState={overState} handleDeleteOverlay={handleDeleteOverlay}/>
				<DeleteOverComponent overState={overState} handleDeleteOverlay={handleDeleteOverlay}/>
			</ScrollView>
	);
}
