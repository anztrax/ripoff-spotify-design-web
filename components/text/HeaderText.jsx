import React from 'react';
import styles from './HeaderText.module.css';

let HeaderText = (props) => {
	return (
		<h1 className={`text-spotify-green-1 ${styles.headerText} ${props.className}`}>{props.children}</h1>
	);
}

export default HeaderText;
