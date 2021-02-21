import React from 'react';


let Button = ({ children, buttonColor, buttonType, onClick, ...rest }) => {
	let buttonColorTypeClassName = '';
	let buttonDimensionTypeClassName = '';

	switch(buttonColor){
		case 'green':
			buttonColorTypeClassName += 'bg-spotify-green-1 text-spotify-blue-1';
			break;
		default:
			break;
	}

	switch (buttonType){
		case 'big':
			buttonDimensionTypeClassName = 'focus:outline-none text-sm py-3 px-8 rounded-full font-semibold';
			break;
		default:
			break;
	}

	return (
		<button className={`${buttonColorTypeClassName} ${buttonDimensionTypeClassName}`} onClick={onClick} {...rest}>
			{children}
		</button>
	)
}

export default Button;
