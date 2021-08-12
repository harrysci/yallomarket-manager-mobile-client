import React from 'react';
import useAxios from 'axios-hooks';
import { GetImageProductListRes } from '../../../components/screens/home/dto/GetImageProductListDto';
import { AxiosError } from 'axios';

export interface ProductListContextValue {
	data: GetImageProductListRes[] | undefined;
	loading: boolean;
	error: AxiosError<any> | undefined;
	reload?: (callback?: any) => Promise<any>;
}

export const defaultProductList = undefined;

const ProductListContext = React.createContext<ProductListContextValue>({
	data: defaultProductList,
	loading: false,
	error: undefined,
	reload: undefined,
});

export function useProductList(): ProductListContextValue {
	const storeId = 1; // dummy store id

	const [{ data: getData, loading: getLoading, error: getError }, executeGet] = useAxios<
		GetImageProductListRes[]
	>(
		{
			method: 'GET',
			url: `/product/getProductList/${storeId}`,
		},
		{ manual: true },
	);

	/* use hook did mounted */
	React.useEffect(() => {
		executeGet();
	}, []);

	/* reload function with callback, 콜백 타입 제네릭 수정 필요 */
	const reloadProductList = React.useCallback(
		async (callback?: any) => {
			executeGet().then(() => {
				console.log('reload ...');
				if (callback) {
					callback();
				}
			});
		},
		[executeGet, getData],
	);

	return {
		data: getData,
		loading: getLoading,
		error: getError,
		reload: reloadProductList,
	};
}

export default ProductListContext;
