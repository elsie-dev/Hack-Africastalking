import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import React from "react";
import { menu } from "./constants";
import FooterColumn from "./footerColumn";
import FooterLogo from "./footerLogo";

const MainFooter = () => {
	return (
		<Box bgcolor="background.paper" py={6}>
			<Container maxWidth="lg">
				<Grid container spacing={6}>
					<FooterLogo />
					{menu.map((props, index) => (
						<FooterColumn key={index} {...props} />
					))}
				</Grid>
			</Container>
		</Box>
	);
};

export default MainFooter;
