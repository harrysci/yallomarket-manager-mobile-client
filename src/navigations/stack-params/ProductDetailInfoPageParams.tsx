import { GetImageProductListRes } from '../../components/screens/home/dto/GetImageProductListDto';

export interface ProductDetailInfoPageParams {
	product: GetImageProductListRes;
	storeName: string;
	ownerId: number;
	handleSetDeleteState: () => void;
	handleUpdateCompleteOverlay: () => void;
}
