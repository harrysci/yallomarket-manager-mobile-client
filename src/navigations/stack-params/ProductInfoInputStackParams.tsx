export interface ProductInfoInputStackParams {
	mode: 'regist' | 'update'; // 등록/수정 모드 값

	ownerId: number;
	productId: number;
	initBarcode: string;
	initProductName: string;
	initCurrentPrice: number;
	initOriginPrice: number;
	initProductOrigin: string;
	initProductDescription: string;
	initOpenData: string;
	initVolume?: string;

	executeGetHandler?: () => void;
}
