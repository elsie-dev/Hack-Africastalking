import "../styles/globals.css";
import Head from "next/head";
import type { AppProps } from "next/app";
import ThemeWrapper from "../theme/ThemeWrapper";
import CssBaseline from "@mui/material/CssBaseline";
import { Provider } from "react-redux";
import store from "../store";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterMoment } from "@mui/x-date-pickers/AdapterMoment";
import { AppPropsWithLayout } from "../interfaces/pages";

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
	const MainComponent = () => {
		const getLayout = Component.getLayout ?? ((page) => page);

		return getLayout(<Component {...pageProps} />);
	};

	return (
		<Provider store={store}>
			<Head>
				<title>Coverly App</title>
				<meta
					name="description"
					content="A next generation automated coverletter generator"
				/>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<ThemeWrapper>
				<CssBaseline />
				<LocalizationProvider dateAdapter={AdapterMoment}>
					{MainComponent()}
				</LocalizationProvider>
			</ThemeWrapper>
		</Provider>
	);
}

export default MyApp;
