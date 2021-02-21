import React from 'react';
import NavigationHeaderItem from "../headerItem/NavigationHeaderItem";
import SpotifyLogo from "../../logo/SpotifyLogo";
import styles from './../../style-utils/StyleUtils.module.css';
import {footerAndHeaderWidthClassName} from "../../style-utils/layoutStyles";
import HamburgerButton from "../hamburgerButton/HamburgerButton";
import { HeaderModalContext } from '../../../context/HeaderModalContext';
import RightHeaderBar from "../rightHeaderBar/RightHeaderBar";

let navigationHeaderClassName = 'hidden md:hidden xl:inline lg:inline';

let NavigationHeaderBar = (props) => {
	const handleOnClick = (location) => {
		console.log('handle on click ', location);
	}

	return (
		<HeaderModalContext.Consumer>
			{(value) => {
				return (
					<>
						<RightHeaderBar
							navigations={props.navigations}
							isShown={value.isShown}
							onToggle={() => value.toggleShown()}
						/>
						<div className={'bg-black fixed w-full absolute px-3 md:px-0'}>
							<div className={`${footerAndHeaderWidthClassName} ${styles.centerContainer}`}>
								<div className={'flex justify-between'}>
									<SpotifyLogo />
									<HamburgerButton
										className={'xl:hidden lg:hidden'}
										isOpen={value.isShown}
										onToggle={value.toggleShown}
									/>
									<div className={`${navigationHeaderClassName}`}>
										<div className={`flex`}>
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
						</div>
					</>
				);
			}}
		</HeaderModalContext.Consumer>
	);
}

export default NavigationHeaderBar;
