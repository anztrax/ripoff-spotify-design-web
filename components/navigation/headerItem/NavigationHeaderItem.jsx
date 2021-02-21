import React from 'react';

let NavigationHeaderItem = (props) => {
	return (
		<div className={'text-white font-bold hover:text-spotify-green-2 text-base px-4 py-6 cursor-pointer'} onClick={props.onClick}>
			{props.children}
		</div>
	);
}

export default NavigationHeaderItem;
