import React from 'react';
import useAxios from 'axios-hooks';
import { GetImageProductListRes } from '../../../components/screens/home/dto/GetImageProductListDto';

export interface ProductListContextValue {
	getData: GetImageProductListRes[] | undefined;
	executeGetHandler?: (callback: any) => Promise<any>;
}

export const defaultProductList = undefined;

const ProductListContext = React.createContext<ProductListContextValue>({
	getData: defaultProductList,
	executeGetHandler: undefined,
});

export function useProductList(): ProductListContextValue {
	const [{ data: getData, loading: getLoading, error: getError }, executeGet] = useAxios<
		GetImageProductListRes[]
	>(
		{
			method: 'GET',
			url: '/product/getProductList/1',
		},
		{ manual: true },
	);

	React.useEffect(() => {
		executeGet();
	}, []);

	const executeGetHandler = (callback: any) => {
		console.log('context reload');
		executeGet().then(res => {
			if (res.data) {
				console.log('aa', res.data.length);
				if (callback) callback();
			}
		});
	};

	const reloadProductList = async (callback: any) => {
		await executeGet();
		console.log(getLoading);
	};

	return {
		getData: getData,
		executeGetHandler: reloadProductList,
	};
}

export default ProductListContext;
