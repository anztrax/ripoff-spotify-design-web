import React from 'react';
import styles from './SocialMediaContainer.module.css';

const socialMediaSizeClassName = 'xl:h-14 xl:h-14 lg:h-14 lg:w-14 w-10 h-10';

let SocialMediaContainer = (props) => {
	const handleGotoHandler = (item) => {
		console.log('handle item : ', item.link);
	}

	return (
		<div className={'flex'}>
			{props.navigations.map((item, index) => {
				let finalClassName = 'ml-3';
				if(index === 0){
					finalClassName = ''
				}
				return (
					<div className={`${finalClassName}`}>
						<div className={`rounded-full ${socialMediaSizeClassName} flex items-center justify-center bg-spotify-gray-2`} onClick={props.onClick}>
							<img src={item.imageUrl} className={`h-5 cursor-pointer ${styles.socialMediaItem}`} />
						</div>
					</div>
				);
			})}
		</div>
	);
}

export default SocialMediaContainer;
