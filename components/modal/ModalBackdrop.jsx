import React from 'react';

let ModalBackdrop = (props) => {
	return (
		<div className={`fixed z-10 w-screen h-screen bg-opacity-75 bg-black ${props.className}`} onClick={props.onClick} />
	);
}

export default ModalBackdrop;
