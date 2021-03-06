import { ActivityIndicator, Dimensions } from 'react-native';
import React from 'react';

export interface YellowScreenCenterLoadingProps {
	loading: boolean;
}

const YellowScreenCenterLoading = (props: YellowScreenCenterLoadingProps) => {
	const { loading } = props;

	return (
		<ActivityIndicator
			animating={loading}
			color="#fbd145"
			size="large"
			style={{
				bottom: Dimensions.get('screen').height / 2,
				alignItems: 'center',
				justifyContent: 'flex-end',
			}}
		/>
	);
};

export default YellowScreenCenterLoading;
