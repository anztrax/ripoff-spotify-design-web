import React, { createContext, useState } from 'react';
import disableScroll from 'disable-scroll';

export const HeaderModalContext = createContext({
	isShown: false,
	toggleShown: () => {},
});


export const useHeaderModalContext = () => {
	const [ isShown, setIsShown ] = useState(false);

	return {
		isShown,
		toggleShown: () => {
			disableScroll[isShown ? 'off' : 'on']();
			setIsShown(!isShown);
		}
	};
}
