import React from 'react';
import NavigationFooterItem from "../footerItem/NavigationFooterItem";
import styles from './NavigationFooterBar.module.css';

const navigationFooterClassName = 'lg:mr-20 mb-12 flex-1';

let NavigationFooterBar = (props) => {
	/// handlers
	const handleOnClickItem = (item) => {
		console.log('handle on Click item !');
	}

	/// renders
	const renderFooterHeader = (text) => {
		return (
			<div className={`text-spotify-gray-1 capitalize text-xs ${styles.navigationFooterHeader}`}>
				{text}
			</div>
		);
	}

	return (
		<div className={'flex flex-col md:flex-row'}>
			{props.navigations.map((navigation) => {
				const { title, items } = navigation;
				return (
					<div className={navigationFooterClassName}>
						{renderFooterHeader(title)}
						<div className={'mt-4'} />
						{items.map((item) => {
							return (
								<NavigationFooterItem onClick={() => handleOnClickItem(item.link)}>
									{item.title}
								</NavigationFooterItem>
							)
						})}
					</div>
				);
			})}
		</div>
	);
}

export default NavigationFooterBar;
