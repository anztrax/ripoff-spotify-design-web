import React from 'react';
import Globe from "./Globe";

let LanguageFooterSelector = (props) => {
	return (
		<div className={'flex items-center justify-end'}>
			<Globe />
			<a href={`/language`} target={'_blank'} className={'ml-1 text-xxs xs:text-xs text-spotify-gray-1 hover:text-spotify-green-2'}>
				{props.language}
			</a>
		</div>
	);
}

export default LanguageFooterSelector;
