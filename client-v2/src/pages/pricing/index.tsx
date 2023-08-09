import React, { ReactElement } from "react";
import Box from "@mui/material/Box";
import PatternHero from "../../components/sections/hero/patternHero";
import MainLayout from "../../components/layout/MainLayout";
import { NextPageWithLayout } from "../../interfaces/pages";

const Pricing: NextPageWithLayout = () => {
	return (
		<Box>
			<PatternHero
				heading="Find the right pricing that suits you"
				subHeading="Choose from the various subscription plan to get your tokens. With more tokens you get to generate more cover letters."
			/>
		</Box>
	);
};

Pricing.getLayout = function getLayout(page: ReactElement) {
	return <MainLayout>{page}</MainLayout>;
};

export default Pricing;
