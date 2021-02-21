import React from 'react';
import LanguageFooterSelector from "../../languages/LanguageFooterSelector";

let FootNoteBar = (props) => {
	const renderLeftFootNote = () => {
		return (
			<div className={'flex'}>
				{props.navigations.map((navigation) => {
					return (
						<div className={'mr-6'}>
							<a href={navigation.location} target='_blank' className={'text-xs text-spotify-gray-1 hover:text-spotify-green-2'}>
								{navigation.title}
							</a>
						</div>
					);
				})}
			</div>
		);
	}

	const renderFooter = () => {
		const fullYear = new Date().getFullYear();
		return (
			<>
				<LanguageFooterSelector
					language={'Indonesia'}
				/>
				<div className={'text-xs text-spotify-gray-1 mt-4'}>
					&copy; {fullYear} Spotify AB
				</div>
			</>
		);
	}

	return (
		<div className={'flex justify-between items-end'}>
			<div>
				{renderLeftFootNote()}
			</div>
			<div className={'flex flex-col justify-end'}>
				{renderFooter()}
			</div>
		</div>
	);
}

export default FootNoteBar;
