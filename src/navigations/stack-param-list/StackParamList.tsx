import { ProductInfoInputStackParams } from '../stack-params/ProductInfoInputStackParams';
import { BarcodeRecognitionCompleteStackParams } from '../stack-params/BarcodeRecognitionCompleteStackParams';
import { MainPageStackParams } from '../stack-params/MainPageStackParams';
import { ProductDetailInfoPageParams } from '../stack-params/ProductDetailInfoPageParams';
import { FirstStepStackParam } from '../stack-params/FirstStepStackParams';
import { RepresentativePhotoStackParams } from '../stack-params/RepresentativePhotoStackParams';

export type StackParamList = {
	테스트: any;
	'상품 리스트': any;
	메인화면: MainPageStackParams;
	'상품 상세 정보': ProductDetailInfoPageParams;
	'상품 정보 입력': ProductInfoInputStackParams;
	'바코드 인식 완료': BarcodeRecognitionCompleteStackParams;

	/* 바코드 인식 및 사진 촬영 stack params */
	'1단계': FirstStepStackParam;
	'대표 이미지 촬영': RepresentativePhotoStackParams;
	'대표 이미지 확인': any;
	'2단계': any;
	'상세 이미지 촬영': any;
	'상세 이미지 확인': any;
	'바코드 스캔': any;
};
