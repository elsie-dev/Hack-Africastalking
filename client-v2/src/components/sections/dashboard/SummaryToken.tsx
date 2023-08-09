import { Stack, Typography, useTheme } from "@mui/material";
import { Coin } from "iconsax-react";
import React from "react";

const SummaryToken = () => {
	const theme = useTheme();
	return (
		<Stack mt={6} gap={2}>
			<Typography
				variant="h6"
				color="initial"
				sx={{ fontWeight: 700 }}
				gutterBottom
			>
				Summary
			</Typography>
			<Stack direction="row" alignItems="center" gap={1}>
				{" "}
				<Coin size="32" color={theme.palette.primary.main} />
				<Typography variant="body1" color="textSecondary">
					You have{" "}
					<Typography
						component="span"
						color="textPrimary"
						fontWeight={700}
					>
						0 tokens
					</Typography>{" "}
					available
				</Typography>
			</Stack>
		</Stack>
	);
};

export default SummaryToken;
