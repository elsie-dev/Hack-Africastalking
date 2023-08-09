import React, { ReactElement } from "react";
import Box from "@mui/material/Box";
import MainLayout from "../../components/layout/MainLayout";
import { NextPageWithLayout } from "../../interfaces/pages";
import { Container, Grid, Typography } from "@mui/material";
import FeaturesSecondSection from "../../components/features/FeaturesSecondSection";
import FeaturesThirdSection from "../../components/features/FeaturesThirdSection";
import FeaturesFourthSection from "../../components/features/FeaturesFourthSection";
import FeaturesFirstSection from "../../components/features/FeaturesFirstSection";

const Features: NextPageWithLayout = () => {
	return (
		<Box>
			<FeaturesFirstSection />
			<FeaturesSecondSection />
			<FeaturesThirdSection />
			<FeaturesFourthSection />
		</Box>
	);
};

Features.getLayout = function getLayout(page: ReactElement) {
	return <MainLayout>{page}</MainLayout>;
};

export default Features;
