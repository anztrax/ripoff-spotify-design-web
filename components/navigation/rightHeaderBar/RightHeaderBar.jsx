import React from 'react';
import ModalBackdrop from "../../modal/ModalBackdrop";
import SpotifyLogo from "../../logo/SpotifyLogo";

let RightHeaderBar = (props) => {

	const renderHeaderItem = (navigation) => {
		return (
			<div className={'text-white font-bold hover:text-spotify-green-2 mb-5 mr-48 text-3xl xs:text-4xl cursor-pointer'} onClick={() => console.log(navigation)}>
				{navigation.title}
			</div>
		);
	}

	const renderHeaderMiniItem = (navigation) => {
		return (
			<div className={'text-spotify-gray-3 font-normal hover:text-spotify-green-2 mt-4 text-2xl xs:text-3xl cursor-pointer'} onClick={() => console.log(navigation)}>
				{navigation.title}
			</div>
		);
	}

	const modalDropdownClassName = (props.isShown) ? 'block xl:hidden lg:hidden ' : 'hidden';
	return (
		<>
			<ModalBackdrop
				className={modalDropdownClassName}
				onClick={props.onToggle}
			/>
			<div className={`bg-black fixed z-10 h-screen xs:right-0 w-full xs:w-auto ${modalDropdownClassName}`}>
				<div className={`flex flex-col h-screen justify-between p-10`}>
					<div className={'flex-1'}>
						{props.navigations.left.map((navigation) => {
							return renderHeaderItem(navigation);
						})}
						<div className={'border-b-2 border-white w-6 pt-4 mb-10'} />
						{props.navigations.right.map((navigation) => {
							return renderHeaderMiniItem(navigation);
						})}
					</div>
					<SpotifyLogo />
				</div>
			</div>
		</>
	);
}

export default RightHeaderBar;
