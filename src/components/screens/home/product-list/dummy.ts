export interface ProductContainer {
	product_id: string;
	barcode: string;
	storeName: string;
	productName: string;
	price: number;
	salerate: number;
	originalPrice: number;
	img: string;
	createdAt: string;
}

export const defaultProduct: ProductContainer = {
	product_id: '1',
	barcode: '2-000010-16243',
	storeName: '경동빅마트',
	productName: '적양배추',
	price: 2290,
	salerate: 10,
	originalPrice: 3210,
	img: '../../../../assets/images/product/one.png',
	createdAt: '2021년 6월 20일',
};
export const defaultProduct2: ProductContainer = {
	product_id: '2',
	barcode: '2-000010-163',
	storeName: '경동빅마트',
	productName: '햇감자1kg',
	price: 4400,
	salerate: 10,
	originalPrice: 3210,
	img: '../../../../assets/images/product/two.png',
	createdAt: '2021년 6월 20일',
};
export const defaultProduct3: ProductContainer = {
	product_id: '3',
	barcode: '2-0023010-163',
	storeName: '경동빅마트',
	productName: '무농약 콩나물',
	price: 2290,
	salerate: 10,
	originalPrice: 3210,
	img: '../../../../assets/images/product/three.png',
	createdAt: '2021년 6월 20일',
};
export const defaultProduct4: ProductContainer = {
	product_id: '4',
	barcode: '2-000110-165453',
	storeName: '경동빅마트',
	productName: '유기농 아삭오이',
	price: 2290,
	salerate: 10,
	originalPrice: 3210,
	img: '../../../../assets/images/product/four.png',
	createdAt: '2021년 6월 22일',
};
export const defaultProduct5: ProductContainer = {
	product_id: '5',
	barcode: '2-000810-333363',
	storeName: '경동빅마트',
	productName: '노랑 옥수수',
	price: 10000,
	salerate: 10,
	originalPrice: 3210,
	img: '../../../../assets/images/product/five.png',
	createdAt: '2021년 6월 22일',
};
