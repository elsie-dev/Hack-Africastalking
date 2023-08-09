import React from "react";
import Header from "./header";
import Footer from "./footer";
import { NextPageWithLayoutProps } from "../../interfaces/pages";

const MainLayout = (props: NextPageWithLayoutProps) => {
	return (
		<>
			<Header />
			{props.children}
			{!props.headerOnly && <Footer />}
		</>
	);
};

export default MainLayout;
