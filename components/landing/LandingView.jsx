import React, { useState, useEffect } from 'react';
import Button from "../button/Button";
import HeaderText from "../text/HeaderText";
import styles from './LandingView.module.css';
import SmallHeaderText from "../text/SmallHeaderText";

let LandingView = () => {
	const [height, setHeight] = useState(0);
	const updateDimensions = () => {
		setHeight(window.innerHeight);
	}

  useEffect(() => {
		window.addEventListener("resize", updateDimensions);
		setHeight(window.innerHeight);
		return () => window.removeEventListener("resize", updateDimensions);
	}, []);


	const handleGotoLogin = () => {
		console.log('handle go to login')
	}

	const sectionStyle = {
		height: height
	};

	return (
		<section className={`${styles.landingView}`} style={sectionStyle}>
			<div className={'flex flex-col items-center justify-center'} style={sectionStyle}>
				<div>
					<SmallHeaderText>Listening is everything</SmallHeaderText>
					<HeaderText>Listening is</HeaderText>
					<HeaderText className={'xl:ml-60 -mt-10'}>everything</HeaderText>
				</div>
				<p className={'text-spotify-green-1 text-base pb-8 font-medium mt-2 text-center'}>Jutaan lagu dan podcast. Tanpa kartu kredit.</p>
				<Button
					buttonColor={'green'}
					buttonType={'big'}
					onClick={handleGotoLogin}
				>
					DAPATKAN SPOTIFY FREE
				</Button>
			</div>
		</section>
	);
}

export default LandingView;
