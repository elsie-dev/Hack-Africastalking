import React from "react";
import Box from "@mui/material/Box";
import { Container, Grid, Typography } from "@mui/material";
import FeaturesSideImageSection from "./FeaturesSideImageSection";
import { colors } from "../../theme/constants";

const FeaturesThirdSection = () => {
	const customColor = colors();

	return (
		<Box bgcolor="common.white" pt="64px" pb="64px">
			<Container maxWidth="lg">
				<FeaturesSideImageSection
					img="/assets/img/svg/feature3.svg"
					heading="LinkedIn Profiles"
					headingColor={"text.primary"}
					bodyColor={"grey.400"}
					align={"left"}
					body={
						<>
							Coverly creates not just cover letters but letters
							you can even use on your LinkedIn profiles. Attract
							recruiters with your motivating talents and traits
							Coverly creates for you. Generates
							professional-looking, personalized profile
							introductions for top employers in your industry.
						</>
					}
				/>
				<FeaturesSideImageSection
					img="/assets/img/svg/feature4.svg"
					heading="Eye Catching To Recruiters"
					headingColor={"text.primary"}
					bodyColor={"grey.400"}
					body={
						<>
							Coverly generates cover letters that speaks directly
							to recruiters. The job you are applying for becomes
							a litter easier to get when recruiters admire your
							cover letter. Cover letters are important, so
							Coverly has gone the extra mile to make them perfect
							and tailored to your personality. You may be asking
							yourself &quot;How can I make my cover letter
							perfect, without wasting my time or someone
							else&apos;s?&quot; – The answer is Coverly.
						</>
					}
				/>
			</Container>
		</Box>
	);
};

export default FeaturesThirdSection;
