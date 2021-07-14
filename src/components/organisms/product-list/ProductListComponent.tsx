import React from 'react';
import { FlatList, ScrollView } from 'react-native';
import OneProductComponent from './OneProductComponent';
import useAxios from 'axios-hooks';
import { GetImageProductListRes } from '../../screens/home/dto/GetImageProductListDto';

export interface ProductListComponentProps {
	handleUpdateCompleteOverlay: () => void;
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
		/>
	);
	return (
		<ScrollView>
			{!getLoading && !getError && getData && (
				<FlatList data={getData} renderItem={renderItem} />
			)}
		</ScrollView>
	);
};
export default ProductListComponent;
