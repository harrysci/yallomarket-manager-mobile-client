import React from 'react';
import { ActivityIndicator, FlatList, SafeAreaView, SectionList, Text } from 'react-native';
import OneProductComponent from './OneProductComponent';
import useAxios from 'axios-hooks';
import { GetImageProductListRes } from '../../screens/home/dto/GetImageProductListDto';
import { ListItem } from 'react-native-elements';
import moment from 'moment';
export interface ProductListComponentProps {
	overState: boolean;
	handleUpdateCompleteOverlay: () => void;
	handleDeleteOverlay: () => void;
}
export interface SectionListProps {
	title: Date;
	getData: GetImageProductListRes[] | undefined;
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
	const sectionList = getData?.map(each => moment(each.productCreatedAt).format('YYYY/ MM/ DD'));
	const set = new Set(sectionList);
	const newSectionList = [...set];
	const sectionData = newSectionList?.map(each => ({
		title: each,
		data: getData?.filter(i => moment(i.productCreatedAt).format('YYYY/ MM/ DD') === each),
	}));
	// const renderItem = ({ item }: { item: GetImageProductListRes }) => (
	// 	<OneProductComponent
	// 		productData={item}
	// 		executeGetHandler={executeGetHandler}
	// 		handleUpdateCompleteOverlay={props.handleUpdateCompleteOverlay}
	// 		handleDeleteOverlay={props.handleDeleteOverlay}
	// 	/>
	// );
	const renderItem = ({ item }: { item: GetImageProductListRes }) => (
		<OneProductComponent
			productData={item}
			executeGetHandler={executeGetHandler}
			handleUpdateCompleteOverlay={props.handleUpdateCompleteOverlay}
			handleDeleteOverlay={props.handleDeleteOverlay}
		/>
	);
	return (
		<SafeAreaView style={{ backgroundColor: 'white', flex: 1 }}>
			{!getLoading && !getError && getData && (
				<SectionList
					sections={sectionData}
					renderItem={renderItem}
					//keyExtractor={item => String(item.productId)}
					renderSectionHeader={({ section: { title } }) => (
						<Text style={{ marginHorizontal: 17, fontSize: 9 }}>
							상품 게시일 {title}
						</Text>
					)}
				/>
			)}
		</SafeAreaView>
	);
};
export default ProductListComponent;
