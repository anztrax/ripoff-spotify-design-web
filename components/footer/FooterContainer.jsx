import React from 'react';
import SpotifyLogo from "../logo/SpotifyLogo";
import styles from '../style-utils/StyleUtils.module.css';
import NavigationFooterBar from "../navigation/footerBar/NavigationFooterBar";
import SocialMediaContainer from "../navigation/socialMedia/SocialMediaContainer";
import FootNoteBar from "../navigation/footNote/footNoteBar";

let FooterContainer = (props) => {
	return (
		<div className={'bg-black w-full'}>
			<div className={`max-w-6xl ${styles.centerContainer} pt-20 pb-14`}>
				<div className={'flex items-start justify-between'}>
					<div className={'flex items-start'}>
						<SpotifyLogo />
						<div className={'ml-8 pt-5'}>
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
