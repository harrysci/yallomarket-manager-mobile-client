import { ProductDetailInfoPageProps } from '../../components/screens/product-detail-info-page/ProductDetailInfoPage';
import { ProductInfoInputStackParams } from '../stack-params/ProductInfoInputStackParams';
import { BarcodeRecognitionCompleteStackParams } from '../stack-params/BarcodeRecognitionCompleteStackParams';

export type StackParamList = {
	테스트: any;
	'상품 리스트': any;
	메인화면: any;
	'상품 상세 정보': ProductDetailInfoPageProps;
	'상품 정보 입력': ProductInfoInputStackParams;
	'바코드 인식 완료': BarcodeRecognitionCompleteStackParams;
};
