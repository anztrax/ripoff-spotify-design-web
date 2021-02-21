import React from 'react';

let NavigationFooterItem = (props) => {
	return (
		<div className={'text-base text-white font-normal py-2 cursor-pointer hover:text-spotify-green-2'}>
			{props.children}
		</div>
	);
}

export default NavigationFooterItem;
