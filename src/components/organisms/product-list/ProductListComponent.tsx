import React from 'react';
import { SafeAreaView, SectionList, Text, View } from 'react-native';
import OneProductComponent from './OneProductComponent';
import useAxios from 'axios-hooks';

import { GetImageProductListRes } from '../../screens/home/dto/GetImageProductListDto';
import moment from 'moment';
import ProductListContext from '../../../utils/contexts/product-list-context/ProductListContext';

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
	// const [{ data: getData, loading: getLoading, error: getError }, executeGet] = useAxios<
	// 	GetImageProductListRes[]
	// >({
	// 	method: 'GET',
	// 	url: '/product/getProductList/1',
	// });

	// const executeGetHandler = () => {
	// 	executeGet();
	// };

	const { getData, executeGetHandler } = React.useContext(ProductListContext);
	React.useEffect(() => {
		if (executeGetHandler) executeGetHandler(null);
	}, []);

	/*상품 게시일 Array 생성*/
	const sectionList = getData?.map(each => moment(each.productCreatedAt).format('YYYY/ MM/ DD'));

	/*Array 중복 제거*/
	const set = new Set(sectionList);
	const newSectionList = [...set];

	/*{title: 상품게시일, data:상품정보} 로 Array mapping*/
	const sectionData = newSectionList?.map(each => ({
		title: each,
		data: getData
			? getData.filter(i => moment(i.productCreatedAt).format('YYYY/ MM/ DD') === each)
			: [],
	}));

	const renderItem = ({ item }: { item: GetImageProductListRes }) => (
		<OneProductComponent
			productData={item}
			// executeGetHandler={executeGetHandler}
			handleUpdateCompleteOverlay={props.handleUpdateCompleteOverlay}
			handleDeleteOverlay={props.handleDeleteOverlay}
		/>
	);

	return (
		<SafeAreaView style={{ backgroundColor: 'white', flex: 1 }}>
			{getData && (
				<SectionList
					sections={sectionData}
					renderItem={renderItem}
					keyExtractor={item => String(item.productId)}
					renderSectionHeader={({ section: { title } }) => (
						<View style={{ marginHorizontal: 17, flexDirection: 'row' }}>
							<Text style={{ fontSize: 9 }}>상품 게시일 </Text>
							<Text style={{ fontSize: 9, fontWeight: '600' }}>{title}</Text>
						</View>
					)}
				/>
			)}
		</SafeAreaView>
	);
};
export default ProductListComponent;
