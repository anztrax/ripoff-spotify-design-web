import React from 'react';
import styles from './HamburgerButton.module.css';

let HamburgerButton = (props) => {
	const className = (props.isOpen) ? `${styles.container} ${styles.change}` : `${styles.container}`;
	const zIndexClassName = (props.isOpen) ? 'z-30' : '';

	return (
		<div className={`${zIndexClassName} ${className} ${(props.className) ? props.className: ''}`} onClick={props.onToggle}>
			<div className={styles.bar1}></div>
			<div className={styles.bar2}></div>
			<div className={styles.bar3}></div>
		</div>

	);
}

export default HamburgerButton;
