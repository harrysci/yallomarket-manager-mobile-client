export interface ProductInfoInputStackParams {
	mode: 'regist' | 'update'; // 등록/수정 모드 값
	initBarcode?: string; // 바코드
	initProductName?: string; // 상품명
	initCurrentPrice?: number; // 현재 판매가
	initCategory?: string; // 상품 카테고리
	initOpenData?: string; // 상품 게시일
	initVolume?: number; // 상품 규격
	initProductOrigin?: string; // 상품 매입처
	initOriginPrice?: number; // 원가
	initProductDescription?: string; // 상품 설명
}
