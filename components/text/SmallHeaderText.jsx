import React from 'react';
import styles from './SmallHeaderText.module.css';

let SmallHeaderText = (props) => {
	return (
		<h1 className={`text-spotify-green-1 ${styles.headerText} ${(props.className) ? props.className: ''}`}>{props.children}</h1>
	);
}

export default SmallHeaderText;
