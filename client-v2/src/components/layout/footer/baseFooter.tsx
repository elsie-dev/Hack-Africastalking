import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import React from "react";
import HeaderStackContainer from "../header/headerStackContainer";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Link from "next/link";

const BaseFooter = () => {
	return (
		<Container maxWidth="lg" sx={{ py: 3 }}>
			<Stack
				direction="row"
				justifyContent="space-between"
				flexWrap="wrap"
				sx={{
					"& > [href]:hover": {
						color: "grey.600",
						cursor: "pointer",
					},
				}}
			>
				<Typography variant="caption" color="textSecondary">
					© 2022 Coverly. All rights reserved.
				</Typography>
				<Link href="/terms" passHref>
					<Typography variant="caption" color="textSecondary">
						Terms and Conditions
					</Typography>
				</Link>
				<Link href="/privacy-policy" passHref>
					<Typography variant="caption" color="textSecondary">
						Privacy Policy
					</Typography>
				</Link>
			</Stack>
		</Container>
	);
};

export default BaseFooter;
