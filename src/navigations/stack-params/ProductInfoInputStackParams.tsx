export interface ProductInfoInputStackParams {
	mode: 'regist' | 'update'; // 등록/수정 모드 값

	ownerId?: number;
	productId?: number;

	initBarcode: string;

	initProductCategory: string;
	initProductName?: string;
	initCurrentPrice?: number;
	initOriginPrice?: number;
	initProductOrigin?: string;
	initProductDescription?: string;
	initOpenData?: string;
	initVolume?: string;

	/* 촬영된 상품 이미지 */
	representativeProductImage?: string; // 대표 이미지
	detailProductImage?: string; // 상세 이미지
	additionalProductImage?: string; // 추가 이미지

	executeGetHandler?: () => void;
	handleUpdateCompleteOverlay?: () => void;
	handleUploadOverlay?: () => void;
}
