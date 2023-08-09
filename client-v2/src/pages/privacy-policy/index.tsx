import React, { ReactElement } from "react";
import Box from "@mui/material/Box";
import PatternHero from "../../components/sections/hero/patternHero";
import MainLayout from "../../components/layout/MainLayout";
import { NextPageWithLayout } from "../../interfaces/pages";

const PrivacyPolicy: NextPageWithLayout = () => {
	return (
		<Box>
			<PatternHero
				heading="Privacy Policy"
				subHeading="Understanding our privacy policy"
			/>
		</Box>
	);
};

PrivacyPolicy.getLayout = function getLayout(page: ReactElement) {
	return <MainLayout>{page}</MainLayout>;
};

export default PrivacyPolicy;
