import React, { ReactElement } from "react";
import Box from "@mui/material/Box";
import PatternHero from "../../components/sections/hero/patternHero";
import MainLayout from "../../components/layout/MainLayout";
import { NextPageWithLayout } from "../../interfaces/pages";
import {
	AUTHENTICATION_PROCESS,
	EXTRA_PEATURES,
	HOW_IT_WORKS,
} from "../../components/sections/docs/constants";
import SideImageSection from "../../components/sections/SideImageSection";
import Typography from "@mui/material/Typography";

const Docs: NextPageWithLayout = () => {
	return (
		<Box>
			<PatternHero
				heading="Documentation"
				subHeading="A simplified way to use Coverly."
			/>
			<Box bgcolor="background.paper" py={{ xs: 5, md: 8, lg: 12 }}>
				<Typography
					variant="h4"
					color="textPrimary"
					textAlign="center"
					fontWeight={600}
					gutterBottom
				>
					How it works
				</Typography>
				<Typography
					variant="body1"
					textAlign="center"
					color="textSecondary"
				>
					Generating a cover letter with our simple interface
					following 4 steps
				</Typography>
				{HOW_IT_WORKS.map((props, index) => (
					<SideImageSection
						{...props}
						key={index}
						preHeading={`${index + 1}.`}
						imageFit="contain"
						imageContainer
						headingColor="primary.main"
					/>
				))}
			</Box>
			<Box bgcolor="background.default" py={{ xs: 5, md: 8, lg: 12 }}>
				<Typography
					variant="h4"
					color="textPrimary"
					textAlign="center"
					fontWeight={600}
					gutterBottom
				>
					Authentication Process
				</Typography>
				{AUTHENTICATION_PROCESS.map((props, index) => (
					<SideImageSection
						{...props}
						key={index}
						imageFit="contain"
						headingColor="primary.main"
					/>
				))}
			</Box>
			<Box bgcolor="primary.light" py={{ xs: 5, md: 8, lg: 12 }}>
				<Typography
					variant="h4"
					color="textPrimary"
					textAlign="center"
					fontWeight={600}
					gutterBottom
				>
					Extra Features
				</Typography>
				{EXTRA_PEATURES.map((props, index) => (
					<SideImageSection
						{...props}
						key={index}
						imageFit="contain"
						headingColor="text.secondary"
					/>
				))}
			</Box>
		</Box>
	);
};

Docs.getLayout = function getLayout(page: ReactElement) {
	return <MainLayout>{page}</MainLayout>;
};

export default Docs;
