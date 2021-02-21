import React from 'react';

let NavigationFooterItem = (props) => {
	return (
		<div className={'text-base text-white font-normal py-2'}>
			<span className={'cursor-pointer hover:text-spotify-green-2'}>{props.children}</span>
		</div>
	);
}

export default NavigationFooterItem;
