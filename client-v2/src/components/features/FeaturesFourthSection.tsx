import React from "react";
import Box from "@mui/material/Box";
import {
	Button,
	Container,
	Grid,
	Typography,
	useTheme,
	useMediaQuery,
} from "@mui/material";
import { colors } from "../../theme/constants";
import FeaturesSideImageSection from "./FeaturesSideImageSection";

const FeaturesFourthSection = () => {
	const customColor = colors();
	const theme = useTheme();
	const sm = useMediaQuery(theme.breakpoints.up("sm"));
	const md = useMediaQuery(theme.breakpoints.up("md"));
	return (
		<Box bgcolor={customColor?.background.default2} pt="64px" pb="96px">
			<Container maxWidth="lg">
				<FeaturesSideImageSection
					img="/assets/img/svg/feature5.svg"
					heading="Editing & Update Formatting"
					headingColor={"text.primary"}
					bodyColor={"grey.400"}
					btn={"Coming Soon"}
					align={"left"}
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

				<Box
					bgcolor="info.contrastText"
					py="43px"
					px="56px"
					borderRadius="8px"
				>
					<Grid
						container
						rowSpacing={2}
						columnSpacing={{ xs: 1, sm: 2, md: 3 }}
						alignItems="center"
					>
						<Grid item xs={12} md={8}>
							<Typography
								color="text.primary"
								fontWeight="700"
								variant={md ? "h3" : "h4"}
								textAlign={{ xs: "center", md: "left" }}
							>
								Increase your chances of getting employed
							</Typography>
							<Typography
								color="text.primary"
								fontWeight="600"
								mt="24px"
								textAlign={{ xs: "center", md: "left" }}
								paragraph
								gutterBottom
							>
								Start for free with no credit card required.
							</Typography>
						</Grid>
						<Grid
							item
							xs={12}
							md={4}
							textAlign={{ xs: "center", md: "right" }}
						>
							<Button href="#" variant="contained">
								Start for free
							</Button>
						</Grid>
					</Grid>
				</Box>
			</Container>
		</Box>
	);
};

export default FeaturesFourthSection;
