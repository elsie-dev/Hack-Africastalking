import React, { ReactElement } from "react";
import Box from "@mui/material/Box";
import PatternHero from "../../components/sections/hero/patternHero";
import { NextPageWithLayout } from "../../interfaces/pages";
import MainLayout from "../../components/layout/MainLayout";
import SideImageSection from "../../components/sections/SideImageSection";
import NeedHelpSection from "../../components/sections/NeedHelpSection";

const About: NextPageWithLayout = () => {
	return (
		<Box>
			<PatternHero
				heading="About Coverly"
				subHeading="Coverly is an outstanding and efficient website that helps job seekers to generate cover letters for any position. Applying for different jobs with different cover letters can be tasking, which is why we are here to help job seekers generate outstanding Cover letters for any position."
			/>
			<SideImageSection
				img="/assets/img/png/who-we-are.png"
				heading="Who we are"
				bgcolor="background.paper"
				body={
					<>
						At Coverly, we create unique Cover letters using our AI.
						These Cover letters would be as unique as you are. Our
						AI generates the Cover letter by using the information
						from the CV or Resume uploaded with additional
						information.
						<br />
						<br />
						We are made of a team of product managers, designers and
						developers from various parts of the world who have come
						together to make sure you have the best experience with
						Coverly.
					</>
				}
			/>
			<SideImageSection
				img="/assets/img/png/our-mission.png"
				heading="Our Mission"
				align="left"
				body={
					<>
						Coverly helps you ace the job by creating a new cover
						letter every time you apply. Our mission is to help you
						create a strong, personalized, and meaningful cover
						letter that will increase your chances of getting a job
						interview!
					</>
				}
			/>
			<SideImageSection
				img="/assets/img/png/our-history.png"
				heading="Our History"
				bgcolor="background.paper"
				body={
					<>
						At Coverly, we reckon that creating a cover letter ought
						to be a quick and easy procedure. Coverly began as a
						solution to the frequent dissatisfaction of users of
						online cover letter generators. It all began in 2022
						when a group of like-minded individuals transformed an
						initial idea into a workable solution.
						<br />
						<br />
						The team came together to create a solution that
						comprises the various problems users face when using
						online cover letter generators.That is why we developed
						a solution that creates Cover letters tailored to your
						specific application. No other business was offering
						what we provided at the time.
					</>
				}
			/>
			<NeedHelpSection />
		</Box>
	);
};

About.getLayout = function getLayout(page: ReactElement) {
	return <MainLayout>{page}</MainLayout>;
};

export default About;
