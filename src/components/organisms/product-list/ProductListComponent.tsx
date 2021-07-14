import React from 'react';
import { FlatList, ScrollView, Text, View } from 'react-native';
import OneProductComponent from './OneProductComponent';
import useAxios from 'axios-hooks';
import { GetImageProductListRes } from '../../screens/home/dto/GetImageProductListDto';
import { deleteProps } from '../../screens/home/product-list/ListScreen';

export interface ProductListComponentProps {
	overState: boolean;
	handleUpdateCompleteOverlay: () => void;
	handleDeleteOverlay: () => void;
}

const ProductListComponent = (props: ProductListComponentProps) => {
	const [{ data: getData, loading: getLoading, error: getError }, executeGet] = useAxios<
		GetImageProductListRes[]
	>({
		method: 'GET',
		url: '/product/getProductList/1',
	});

	const executeGetHandler = () => {
		executeGet();
	};

	const renderItem = ({ item }: { item: GetImageProductListRes }) => (
		<OneProductComponent
			productData={item}
			executeGetHandler={executeGetHandler}
			handleUpdateCompleteOverlay={props.handleUpdateCompleteOverlay}
			handleDeleteOverlay={props.handleDeleteOverlay}
		/>
	);
	return (
		 <View style={{backgroundColor:'white', marginHorizontal:17}}>
			{!getLoading && !getError && getData && (
				<FlatList data={getData} renderItem={renderItem} />
			)}
		</View>
	);
};
export default ProductListComponent;
