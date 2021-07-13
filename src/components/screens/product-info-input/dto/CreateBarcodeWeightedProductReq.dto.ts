/**
 * @점주_및_점포관리인_App_상품정보_입력_요청
 *  1. 바코드 (product_barcode)
 *  2. 상품명 (product_name)
 *  3. 판매 단가 (product_current_price)
 *  4. 공산품 여부 (product_is_processed)
 *  5. 상품 게시일 (product_created_at)
 *  6. 규격 (processed_product_standard_values or weighted_product_volume)
 *  7. 상품 매진 여부 (product_is_soldout)
 *  8. 매입 단가 (product_original_price)
 *  9. 상품 설명 (product_description)
 * 10. 대표 이미지 (product_image, is_representative)
 * 11. 상세정보 이미지 (product_image, is_detail)
 * 12. 추가 이미지 (product_image, is_additional)
 */
export interface CreateBarcodeWeightedProductReq {
	productBarcode: string;

	productName: string;

	productCurrentPrice: number;

	productIsProcessed: boolean;

	productCreatedAt: Date;

	productVolume: string;

	productIsSoldout: boolean;

	// 매입처 DB 칼럼에 없음.

	productOriginPrice: number;

	productDescription: string;

	representativeProductImage: string;

	detailProductImage: string;

	additionalProductImage: string;
}
