export interface GetImageProductListRes {
	productId: number;
	storeId: number;
	productBarcode: string;
	productName: string;
	productOriginalPrice: number;
	productCurrentPrice: number;
	productProfit: number;
	productDescription: string;
	productIsProcessed: boolean;
	productIsSoldout: boolean;
	productOnsale: boolean;
	productCategory: string;
	productCreatedAt: Date;

	// product_image attributes
	representativeProductImageId: number;
	representativeProductImage: string;
	detailProductImageId: number;
	detailProductImage: string;
	additionalProductImageId: number;
	additionalProductImage: string;

	// processed_product attributes
	processedProductId?: number;
	processedProductName?: string;
	processedProductCompany?: string;
	processedProductStandardType?: string;
	processedProductStandardValues?: string;
	processedProductComposition?: string;
	processedProductVolume?: string;
	processedProductAdult?: string;
	processedProductCaution?: string;
	processedProductInformation?: string;

	// weighted_product attributes
	weightedProductId?: number;
	weightedProductVolume?: string;

	// onsale_product attributes
	onsaleProductId?: number;
	productOnsalePrice?: number;
}
