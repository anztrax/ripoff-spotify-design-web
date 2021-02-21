import React from 'react';
import NavigationFooterItem from "../footerItem/NavigationFooterItem";
import styles from './NavigationFooterBar.module.css';

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
		<div className={'flex'}>
			{props.navigations.map((navigation) => {
				const { title, items } = navigation;
				return (
					<div className={'mr-20'}>
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
