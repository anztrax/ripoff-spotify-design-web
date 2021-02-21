import React from 'react';
import NavigationHeaderItem from "../headerItem/NavigationHeaderItem";
import SpotifyLogo from "../../logo/SpotifyLogo";
import styles from './../../style-utils/StyleUtils.module.css';

let NavigationHeaderBar = (props) => {
	const handleOnClick = (location) => {
		console.log('handle on click ', location);
	}

	return (
		<div className={'bg-black fixed w-full'}>
			<div className={`max-w-6xl ${styles.centerContainer}`}>
				<div className={'flex justify-between'}>
					<SpotifyLogo />
					<div className={'flex'}>
						{props.navigations.left.map((navigation) => {
							return (
								<NavigationHeaderItem
									key={`navigation-${navigation.title}`}
									onClick={(_) => handleOnClick(navigation.location)}
								>
									{navigation.title}
								</NavigationHeaderItem>
							);
						})}
						<div className={'px-4 py-6 text-white font-lighter'}>|</div>
						{props.navigations.right.map((navigation) => {
							return (
								<NavigationHeaderItem
									key={`navigation-${navigation.title}`}
									onClick={(_) => handleOnClick(navigation.location)}
								>
									{navigation.title}
								</NavigationHeaderItem>
							);
						})}
					</div>
				</div>
			</div>
		</div>
	);
}

export default NavigationHeaderBar;
