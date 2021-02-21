import React from 'react';
import LanguageFooterSelector from "../../languages/LanguageFooterSelector";

let FootNoteBar = (props) => {
	const renderLeftFootNote = () => {
		return (
			<ul>
				{props.navigations.map((navigation) => {
					return (
						<li className={'mr-6 inline-block'}>
							<a href={"#"} className={'text-xxs xs:text-xs text-spotify-gray-1 hover:text-spotify-green-2'}>
								{navigation.title}
							</a>
						</li>
					);
				})}
			</ul>
		);
	}

	const renderFooter = () => {
		const fullYear = new Date().getFullYear();
		return (
			<>
				<LanguageFooterSelector
					language={'Indonesia'}
				/>
				<div className={'text-xxs xs:text-xs text-spotify-gray-1 mt-4'}>
					&copy; {fullYear} Spotify AB
				</div>
			</>
		);
	}

	return (
		<div className={'flex justify-between items-end'}>
			<div className={'flex-1 mt-10'}>
				{renderLeftFootNote()}
			</div>
			<div className={'flex flex-col justify-end'}>
				{renderFooter()}
			</div>
		</div>
	);
}

export default FootNoteBar;
