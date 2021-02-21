import React from 'react';
import NavigationHeaderBar from "../navigation/headerBar/NavigationHeaderBar";
import FooterContainer from "../footer/FooterContainer";
import FootNoteBar from "../navigation/footNote/footNoteBar";


let headerNavigations = {
	left: [
		{
			title: 'Premium',
			location: '/premium'
		},
		{
			title: 'Dukungan',
			location: '/dukungan'
		},
		{
			title: 'Download',
			location: '/download'
		},
	],
	right: [
		{
			title: 'Daftar',
			location: '/daftar'
		},
		{
			title: 'Masuk',
			location: '/masuk'
		},
	]
};


let footerNavigationItems = {
	navigations: [
		{
			title: 'PERUSAHAAN',
			items: [
				{
					title: 'Tentang',
					link: '/tentang'
				},
				{
					title: 'Pekerjaan',
					link: '/pekerjaan'
				},
				{
					title: 'For the Record',
					link: '/records'
				}
			]
		},
		{
			title: 'KOMUNITAS',
			items: [
				{
					title: 'Untuk Artis',
					link: '/forartis'
				},
				{
					title: 'Pengembang',
					link: '/pekerjaan'
				},
				{
					title: 'Iklan',
					link: '/commercial'
				},
				{
					title: 'Investor',
					link: '/investor'
				},
				{
					title: 'Vendor',
					link: '/vendor'
				}
			]
		},
		{
			title: 'TAUTAN BERGUNA',
			items: [
				{
					title: 'Dukungan',
					link: '/support'
				},
				{
					title: 'Pemutar Web',
					link: '/open'
				},
				{
					title: 'Aplikasi Seluler Gratis',
					link: '/commercial'
				},
			]
		}
	]
};

let socialMediaNavigations = {
	navigations: [
		{
			imageUrl: '/images/instagram.svg',
			link: '/instagram'
		},
		{
			imageUrl: '/images/twitter.svg',
			link: '/twitter'
		},
		{
			imageUrl: '/images/facebook-logo.svg',
			link: '/facebook'
		}
	]
}

const footNoteNavigations = {
	navigations: [
		{
			title: 'Hukum',
			location: '/rights'
		},
		{
			title: 'Pusat Privasi',
			location: '/privacy'
		},
		{
			title: 'Kebijakan Privasi',
			location: '/privacyPolicy'
		},
		{
			title: 'Cookies',
			location: '/cookies'
		},
		{
			title: 'Tentang Iklan',
			location: '/commercial'
		}
	]
}

let SpotifyLayout = (props) => {
	return (
		<>
			<NavigationHeaderBar
				navigations={headerNavigations}
			/>
			{props.children}
			<FooterContainer
				navigations={footerNavigationItems.navigations}
				socialMediaNavigations={socialMediaNavigations.navigations}
				footNoteNavigations={footNoteNavigations.navigations}
			/>
		</>
	)
}

export default SpotifyLayout;
