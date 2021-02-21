import React from 'react';
import SpotifyLogo from "../logo/SpotifyLogo";
import styles from '../style-utils/StyleUtils.module.css';
import NavigationFooterBar from "../navigation/footerBar/NavigationFooterBar";
import SocialMediaContainer from "../navigation/socialMedia/SocialMediaContainer";
import FootNoteBar from "../navigation/footNote/footNoteBar";
import {footerAndHeaderWidthClassName, footerFlexClassName} from "../style-utils/layoutStyles";

const navigationFooterBarClassName = 'xl:ml-8 xl:-pt-5 xl:w-auto lg:ml-8 lg:pt-5 lg:w-auto xl:my-0 lg:my-0 my-16 w-full';
const navigationFooterBarSpaceClassName = 'lg:pb-14 pt-12 pb-6 px-3 md:px-0 xl:pt-20 xl:pb-14 lg:pt-20';

let FooterContainer = (props) => {
	return (
		<div className={'bg-black w-full'}>
			<div className={`${footerAndHeaderWidthClassName} ${styles.centerContainer} ${navigationFooterBarSpaceClassName}`}>
				<div className={`flex md:items-start md:justify-between ${footerFlexClassName}`}>
					<div className={`flex md:items-start ${footerFlexClassName}`}>
						<SpotifyLogo />
						<div className={`${navigationFooterBarClassName}`}>
							<NavigationFooterBar
								navigations={props.navigations}
							/>
						</div>
					</div>
					<SocialMediaContainer
						navigations={props.socialMediaNavigations}
					/>
				</div>
				<FootNoteBar
					navigations={props.footNoteNavigations}
				/>
			</div>
		</div>
	);
}

export default FooterContainer;
