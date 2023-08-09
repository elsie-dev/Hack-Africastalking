import React, { ReactElement } from "react";
import Box from "@mui/material/Box";
import PatternHero from "../../components/sections/hero/patternHero";
import { NextPageWithLayout } from "../../interfaces/pages";
import MainLayout from "../../components/layout/MainLayout";

const Career: NextPageWithLayout = () => {
	return (
		<Box>
			<PatternHero
				heading="Join Our  Team"
				subHeading="Work in a team that allows for inclusiveness, with  a mix of talents working in a  conducive environment."
			/>
		</Box>
	);
};

Career.getLayout = function getLayout(page: ReactElement) {
	return <MainLayout>{page}</MainLayout>;
};

export default Career;
