import { Stack, Typography, Button, Container, Box } from "@mui/material";
import React from "react";
import Link from "next/link";
import { NeedHelpProps } from "../../interfaces/sections";

const NeedHelpSection = (props: NeedHelpProps) => {
	if (props.variant === 2)
		return (
			<Box mt={8} sx={props.sx}>
				<Container maxWidth="sm">
					<Typography
						variant="body2"
						color="inherit"
						align="center"
						gutterBottom
					>
						Do you have any other questions, comments, or
						complaints?{" "}
						<Link href="/contact" passHref>
							<Typography
								variant="inherit"
								color="primary.main"
								fontWeight={700}
								component="span"
								sx={{ cursor: "pointer" }}
								gutterBottom
							>
								Contact us.
							</Typography>
						</Link>
					</Typography>
					<Link href="/generate" passHref>
						<Button
							variant="contained"
							color="primary"
							sx={{ mt: 2 }}
							fullWidth
						>
							Generate cover letter
						</Button>
					</Link>
				</Container>
			</Box>
		);
	return (
		<Stack alignItems="center" py={20} sx={props.sx}>
			<Typography variant="h3" color="textPrimary" gutterBottom>
				Need Help?
			</Typography>
			<Link href="/contact" passHref>
				<Button variant="contained" color="primary">
					Contact Us
				</Button>
			</Link>
		</Stack>
	);
};

export default NeedHelpSection;
