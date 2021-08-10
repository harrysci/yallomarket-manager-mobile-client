/* eslint-disable @typescript-eslint/no-empty-function */
import React from 'react';
import { createContext, useState } from 'react';

export interface ImageDataProps {
	imgPath: string;
	detailImgPath: string;
}

interface ContextProps {
	imgPath: string | undefined;
	detailImgPath: string | undefined;
	handleImgState: (v: ImageDataProps) => void;
	// setContext?: (v: contextProps) => void;
	// handleState: (v: ImagePathProps) => void;
}

const [ImagePath, setPath] = React.useState({
	imgPath: '',
	detailImgPath: '',
});

function handleImageSrcPath(v: ImageDataProps) {
	setPath(v);
}
export default function useImage(): any {
	// const { imgPath, detailImgPath } = data;
	const [imguri, setUri] = useState<ImageDataProps>(ImagePath);

	function handleImgState(value: ImageDataProps) {
		setUri(value);
	}

	return { imguri, handleImgState, setUri };
}
// export const ImageContext = createContext({
// 	useImage,
// });
export const ImageContext = createContext([
	ImagePath,
	handleImageSrcPath({ imgPath: '', detailImgPath: '' }),
]);
