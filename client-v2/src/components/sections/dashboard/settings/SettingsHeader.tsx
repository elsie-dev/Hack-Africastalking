import { Box, Button, Stack, Typography } from "@mui/material";
import React from "react";

const SettingsHeader = () => {
	return (
		<Stack
			direction={{ xs: "column", md: "row" }}
			alignItems={{ xs: "flex-start", md: "center" }}
			justifyContent="space-between"
			gap={3}
		>
			<Stack direction="row" alignItems="center" gap={1.5}>
				<Typography
					variant="h4"
					color="textPrimary"
					fontWeight={600}
					display="inline-block"
				>
					My Account
				</Typography>
				<Box
					sx={{
						color: "success.dark",
						bgcolor: "success.light",
						py: 1,
						px: 1.5,
						fontSize: "11px",
						borderRadius: 1,
						fontWeight: 600,
						display: "inline-block",
					}}
					component="span"
				>
					Free Plan
				</Box>
			</Stack>
			<Button variant="outlined" color="primary">
				Upgrade
			</Button>
		</Stack>
	);
};

export default SettingsHeader;
