import '../styles/globals.css';
import { HeaderModalContext, useHeaderModalContext } from '../context/HeaderModalContext';

function MyApp({ Component, pageProps }) {
	const headerModalContextValue = useHeaderModalContext();

	return (
		<HeaderModalContext.Provider value={headerModalContextValue}>
			<Component {...pageProps} />
		</HeaderModalContext.Provider>
	)
}

export default MyApp
