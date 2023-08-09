import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";

const LandingPageHero = () => {
	return (
		<Box bgcolor="primary.dark" pt={12} pb={50}>
			<Container maxWidth="lg">
				<Typography
					variant="h2"
					fontWeight={500}
					component="h1"
					color="white"
					sx={{ maxWidth: "700px" }}
					gutterBottom
				>
					Create a Job-Landing Cover Letter in seconds
				</Typography>
				<Typography variant="h4" color="grey.100">
					100% Automated and Free
				</Typography>
			</Container>
		</Box>
	);
};

export default LandingPageHero;
