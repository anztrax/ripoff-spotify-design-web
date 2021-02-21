import React from 'react';
import styles from './SocialMediaContainer.module.css';

let SocialMediaContainer = (props) => {
	const handleGotoHandler = (item) => {
		console.log('handle item : ', item.link);
	}

	return (
		<div className={'flex'}>
			{props.navigations.map((item) => {
				return (
					<div className={'ml-3'}>
						<div className={'rounded-full h-14 w-14 flex items-center justify-center bg-spotify-gray-2'} onClick={props.onClick}>
							<img src={item.imageUrl} className={`h-5 cursor-pointer ${styles.socialMediaItem}`} />
						</div>
					</div>
				);
			})}
		</div>
	);
}

export default SocialMediaContainer;
