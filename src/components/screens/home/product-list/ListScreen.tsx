import React from 'react';
import { SafeAreaView, ScrollView, View } from 'react-native';
import DeleteOverComponent from '../../../organisms/product-list/DeleteOverComponent';
import ProductListComponent from '../../../organisms/product-list/ProductListComponent';
import UpContainer from '../../../organisms/product-list/UpContainer';
import styles from './style';

export interface deleteProps {
	deleteState: boolean;
	setDeleteState: ()=> void;
}


export default function ListScreen(props: deleteProps): JSX.Element {
	return (

			<ScrollView style={styles.upContainer}>
				<UpContainer />
				<ProductListComponent />
				<DeleteOverComponent deleteState={props.deleteState} setDeleteState={props.setDeleteState}/>
			</ScrollView>
	);
}
