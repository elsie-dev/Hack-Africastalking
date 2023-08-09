import { Avatar, Box, Stack, Typography } from "@mui/material";
import React from "react";

const WelcomeBanner = () => {
	return (
		<Stack
			justifyContent="space-between"
			alignItems="center"
			direction="row"
		>
			<Typography variant="h3" color="textPrimary" fontWeight={700}>
				Welcome
			</Typography>
			<Stack
				direction="row"
				alignItems="center"
				gap={2}
				sx={{ display: { xs: "none", md: "flex" } }}
			>
				<Avatar
					sx={{ bgcolor: "primary.light", color: "primary.main" }}
				>
					I
				</Avatar>
				<Box>
					<Typography
						variant="subtitle1"
						color="textPrimary"
						fontWeight={700}
					>
						Ifeoma Emirisa
					</Typography>
					<Typography variant="body2" color="textSecondary">
						Ifeomaemirisa@gmail.com
					</Typography>
				</Box>
			</Stack>
		</Stack>
	);
};

export default WelcomeBanner;
