import { GetImageProductListRes } from '../../components/screens/home/dto/GetImageProductListDto';

export interface ProductDetailInfoPageParams {
	product: GetImageProductListRes;
	storeName: string;
	ownerId: number;
	executeGetHandler?: () => void;
	handleSetDeleteState: () => void;
	handleUpdateCompleteOverlay: () => void;
}
