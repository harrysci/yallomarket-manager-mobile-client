import axios, { AxiosRequestConfig } from 'axios';
import { Platform } from 'react-native';
// cookie
// import cookie from 'react-cookies';

export const cancelToken = axios.CancelToken;
export const { isCancel } = axios;

interface PostRequestData {
	config: AxiosRequestConfig | null;
	method: string | null;
}

const postData: PostRequestData = {
	config: null,
	method: null,
};

const axiosInstance = axios.create({
	/* Product Mode (ec2 api server endpoint 사용) */
	baseURL: 'http://18.118.222.24:5000',

	/* Develope Mode (local api server endpoint 사용) */
	// baseURL: Platform.OS === 'android' ? 'http://10.0.2.2:5000' : 'http://localhost:5000',
	timeout: 3600,
});

const setAxiosHeaders = (key: string, accessToken: string | null): void => {
	axiosInstance.defaults.headers.common[key.toLocaleLowerCase()] = accessToken;
};

/* axios 객체 request 를 가져와 하단 로직 수행 후 flow 재 실행 */
axiosInstance.interceptors.request.use(
	config => {
		return config;
	},
	/* request Error 작업 */
	err => {
		console.log('[axios request Interceptor ... ] : Error ');
		return err;
	},
);

/* axios 객체 response 를 가져와 하단 로직 수행 후 flow 재 실행 */
axiosInstance.interceptors.response.use(
	/* resonse Conifg 작업 */
	config => config,
	/* resonse Error 작업 */
	async err => {
		// console.log('[axios response Interceptor ... ]');

		if (err.response) {
			const errorState = err.response.status;

			/* JWT Expierd , 토큰 만료 에러시 리프레쉬 토큰을 사용해 엑세스 토큰 재발급 요청 로직 수행 시작 */
			if (errorState === 401) {
				console.log('[Error : UnAuthorization ... ]', err.response.status);
			}
		}

		return err;
	},
);

export default {
	axiosInstance,
	setAxiosHeaders,
};
