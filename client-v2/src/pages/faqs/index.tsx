import React, { ReactElement } from "react";
import Box from "@mui/material/Box";
import PatternHero from "../../components/sections/hero/patternHero";
import MainLayout from "../../components/layout/MainLayout";
import { NextPageWithLayout } from "../../interfaces/pages";
import CustomAccordion from "../../components/Accordion";
import { faqContent } from "../../utils/constants";
import Container from "@mui/material/Container";
import NeedHelpSection from "../../components/sections/NeedHelpSection";

const FAQs: NextPageWithLayout = () => {
	return (
		<Box>
			<PatternHero
				heading="Frequently Asked Questions"
				subHeading="Find out all you need to know about using Coverly to easily generate professional cover letters."
			/>
			<Box py={10}>
				<Container maxWidth="md">
					<CustomAccordion content={faqContent} />
				</Container>
				<NeedHelpSection variant={2} />
			</Box>
		</Box>
	);
};

FAQs.getLayout = function getLayout(page: ReactElement) {
	return <MainLayout>{page}</MainLayout>;
};

export default FAQs;
