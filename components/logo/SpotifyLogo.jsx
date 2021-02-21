import React from 'react';

const spotifyLogoClassName = 'h-7 xl:h-10 lg:h-10 md:h-7';

let SpotifyLogo = () => {
	return (
		<div className={'flex items-center'}>
			<img src={'/images/spotify-white-logo.png'} className={spotifyLogoClassName} />
		</div>
	)
}

export default SpotifyLogo;
