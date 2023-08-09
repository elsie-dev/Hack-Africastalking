import React from "react";
import Link from "next/link";
import Box from "@mui/material/Box";
import {
	Button,
	Container,
	Typography,
	useMediaQuery,
	useTheme,
} from "@mui/material";

const FeaturesFirstSection = () => {
	const theme = useTheme();
	const sm = useMediaQuery(theme.breakpoints.up("sm"));
	const md = useMediaQuery(theme.breakpoints.up("md"));

	return (
		<Box
			sx={{
				backgroundImage: `url(${"/assets/img/png/featurebg1.png"})`,
				backgroundPosition: "center center",
				backgroundSize: "cover",
			}}
			pt={{ xs: "44px", sm: "84px", md: "96px" }}
			pb={{ xs: "44px", sm: "84px", md: "96px" }}
		>
			<Container maxWidth="md">
				<Box textAlign="center">
					<Typography
						color="text.primary"
						fontWeight="700"
						variant={md ? "h2" : sm ? "h3" : "h4"}
						gutterBottom
					>
						Providing{" "}
						<Typography
							component="span"
							variant="inherit"
							sx={{ color: "primary.main" }}
						>
							AI-powered
						</Typography>{" "}
						tools to get you that job!
					</Typography>
					<Typography
						textAlign="center"
						color="grey.600"
						fontSize="16px"
						fontWeight="600"
						lineHeight="24px"
						paragraph
						mb="24px"
					>
						Discover why our beta users reported a 45% increase in
						response rate from employers after using our product
					</Typography>
					<Link href="#" passHref>
						<Button variant="contained">Start for free</Button>
					</Link>
				</Box>
			</Container>
		</Box>
	);
};

export default FeaturesFirstSection;
