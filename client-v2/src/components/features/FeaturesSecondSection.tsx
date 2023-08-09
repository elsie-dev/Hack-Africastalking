import React from "react";
import Box from "@mui/material/Box";
import { Container } from "@mui/material";
import { colors } from "../../theme/constants";
import FeaturesSideImageSection from "./FeaturesSideImageSection";

const FeaturesSecondSection = () => {
	const customColor = colors();
	return (
		<Box
			sx={{
				backgroundImage: `url(${"/assets/img/png/featurebg2.png"})`,
				backgroundPosition: "center center",
				backgroundSize: "cover",
			}}
			py={{ xs: "40px", md: "64px" }}
		>
			<Container maxWidth="lg">
				<FeaturesSideImageSection
					img="/assets/img/svg/feature1.svg"
					heading="Customization"
					headingColor={customColor?.text.white}
					bodyColor={customColor?.text.whiteBody}
					align="left"
					body={
						<>
							The most powerful cover letter generator – Coverly
							helps you write the perfect cover letter for your
							job applications. You can create your befitting
							Cover Letter in minutes. Coverly AI uses excellent
							suggestions that match your personality and style.
							Coverly will generate a job application/cover letter
							to fit all jobs, with 100% accuracy guaranteed.
						</>
					}
				/>
				<FeaturesSideImageSection
					img="/assets/img/svg/feature2.svg"
					heading="Editing & Update Formatting"
					headingColor={customColor?.text.white}
					bodyColor={customColor?.text.whiteBody}
					body={
						<>
							Coverly cover letter generator has multiple
							templates with simple editing & update formatting.
							The idea behind our service is to give your career a
							boost. By providing you with great job-related
							tools, we can help you make your CV stand out from
							the crowd and increase its chances of being
							shortlisted by an employer.
						</>
					}
				/>
			</Container>
		</Box>
	);
};

export default FeaturesSecondSection;
