import React from 'react';
import LandingView from "../components/landing/LandingView";
import SpotifyLayout from "../components/layouts/SpotifyLayout";

let Home = () => {
	return (
		<div>
			<SpotifyLayout>
				<LandingView />
			</SpotifyLayout>
		</div>
	);
}

export default Home;
